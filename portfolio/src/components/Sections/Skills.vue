<template>
    <section
      id="skills"
      class="tw:min-h-screen tw:max-h-fit tw:pt-18 tw:mb-50 tw:flex tw:flex-col tw:items-center"
    >
        <div class="tw:h-full tw:flex tw:flex-col tw:w-full tw:px-6">
            <h2
                class="tw:flex tw:items-center tw:justify-center tw:w-full tw:text-5xl tw:md:text-6xl tw:font-bold tw:text-center tw:text-foreground tw:pb-3"
            >
                Skills
            </h2>
            <div class="tw:flex tw:items-center tw:justify-center tw:w-full tw:text-center tw:pb-8 tw:text-muted-foreground tw:italic tw:text-xl">
                Where I spend my time
            </div>

            <div class="tw:flex tw:items-center tw:justify-center tw:flex-col tw:md:flex-row tw:w-full tw:gap-12">
                <div ref="chartRef" class="tw:h-full tw:w-full tw:md:w-fit tw:flex tw:items-center tw:justify-center"/>
                <div ref="legendHtmlRef" class="tw:hidden tw:flex tw:flex-wrap tw:justify-center tw:gap-3 tw:mt-4"></div>


                <div class="tw:flex tw:justify-center tw:items-center tw:md:min-w-[40%] tw:md:max-w-[40%] tw:h-full tw:md:ml-8">
                    <v-scale-transition mode="out-in"> 
                        <SkillCard 
                            v-if="currentSkill"
                            :skill="currentSkill"
                        />
                        <div v-else>
                            <p class="tw:italic tw:mt-10 tw:text-muted-foreground tw:text-lg">
                                Select a skill slice to see details.
                            </p>
                        </div>
                    </v-scale-transition>
                </div>
            </div>

        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useTheme } from "vuetify";
import { skills } from "@/seed";
import { lightPieColors, darkPieColors } from "@/assets/colors";
import * as d3 from "d3";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillCard from "@/components/SkillCard.vue";

gsap.registerPlugin(ScrollTrigger);
const theme = useTheme();

const chartRef = ref(null);
const currentSkill = ref(null);
const isAnimating = ref(true);
const color = ref(null);

let svg, slicesG, legendG, arcGen, hoverArcGen, pieGen;
let sliceGroups;

const isDark = computed(() => theme.global.current.value.dark);

const getChartSize = () => {
    const w = Math.min(window.innerWidth * 0.6, 400);
    const outerRadius = w / 2 - 10;
    const innerRadius = w / 3;
    return { w, h: w, outerRadius, innerRadius };
};

const getFontSize = (innerRadius, outerRadius) => {
  const radius = (innerRadius + outerRadius) / 2;
  return Math.max(10, radius * 0.10); 
};

const legendHtmlRef = ref(null);

const addLegend = () => {
  if (!legendG || !legendHtmlRef.value) return;

  const { w, h, outerRadius } = getChartSize();
  const rectSize = 20;
  const spacing = 7;
  const legendItemHeight = rectSize + spacing;
  const totalLegendHeight = skills.length * legendItemHeight;
  const isSmallScreen = w < 400 || totalLegendHeight > h / 2;

  legendG.selectAll("*").remove();
  if (!isSmallScreen) {
    legendHtmlRef.value.classList.add("tw:hidden");
    legendHtmlRef.value.classList.remove("tw:flex");

    const startX = -80;
    const startY = -totalLegendHeight / 2;

    skills.forEach((d, i) => {
      const g = legendG.append("g")
        .attr("class", "legend-item")
        .attr("transform", `translate(${startX}, ${startY + i * legendItemHeight})`);

      g.append("rect")
        .attr("width", rectSize)
        .attr("height", rectSize)
        .attr("rx", 20)
        .attr("ry", 20)
        .style("fill", color.value(i));

      g.append("text")
        .attr("x", 30)
        .attr("y", 15)
        .style("fill", color.value(i))
        .style("font-size", "14px")
        .text(d.name);
    });
  } else {
    legendHtmlRef.value.classList.remove("tw:hidden");
    legendHtmlRef.value.classList.add("tw:flex");

    legendHtmlRef.value.innerHTML = "";
    skills.forEach((skill, i) => {
      const item = document.createElement("div");
      item.className = "tw:flex tw:items-center tw:gap-2";

      const colorBox = document.createElement("div");
      colorBox.style.width = "20px";
      colorBox.style.height = "20px";
      colorBox.style.borderRadius = "20px";
      colorBox.style.backgroundColor = color.value(i);

      const text = document.createElement("span");
      text.textContent = skill.name;
      text.style.color = color.value(i);
      text.style.fontSize = "14px";

      item.appendChild(colorBox);
      item.appendChild(text);

      legendHtmlRef.value.appendChild(item);
    });
  }
};

const buildChart = () => {
    const { w, h, outerRadius, innerRadius } = getChartSize();

    pieGen = d3.pie().value(d => d.value).sort(null);

    arcGen = d3
        .arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .cornerRadius(3)
        .padAngle(0.015);

    hoverArcGen = d3
        .arc()
        .outerRadius(outerRadius + 10)
        .innerRadius(innerRadius)
        .cornerRadius(3)
        .padAngle(0.015);

    d3.select(chartRef.value).selectAll("*").remove();

    svg = d3
        .select(chartRef.value)
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", `translate(${w / 2}, ${h / 2})`);

    slicesG = svg.append("g").attr("class", "slices");
    legendG = svg.append("g").attr("class", "legend");

    const pieData = pieGen(skills);
    pieData.forEach(d => (d.current = { startAngle: 0, endAngle: 0 }));

    sliceGroups = slicesG
        .selectAll("g.slice-group")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "slice-group")
        .style("cursor", () => (isAnimating.value ? 'default' : 'pointer'))
        .on("mouseenter", function (event, d) {
            if (isAnimating.value) return;
            sliceGroups.each(function (dd) {
                const path = d3.select(this).select("path");
                if (dd === d) {
                    path.transition()
                        .duration(300)
                        .attr("d", hoverArcGen(dd))
                        .attr("fill", d3.color(color.value(dd.index)).brighter(0.5).formatHex());
                } else if (currentSkill.value?.name !== dd.data.name) {
                    path.transition().duration(300).attr("d", arcGen(dd)).attr("fill", color.value(dd.index));
                }
            });
        })
        .on("mouseleave", function () {
            if (isAnimating.value) return;
            sliceGroups.each(function (dd) {
                const path = d3.select(this).select("path");
                if (currentSkill.value?.name === dd.data.name) {
                path.transition()
                    .duration(300)
                    .attr("d", hoverArcGen(dd))
                    .attr("fill", d3.color(color.value(dd.index)).brighter(0.5).formatHex());
                } else {
                    path.transition().duration(300).attr("d", arcGen(dd)).attr("fill", color.value(dd.index));
                }
            });
        })
        .on("click", (event, d) => {
            if (isAnimating.value) return;

            currentSkill.value =
                currentSkill.value?.name === d.data.name ? null : d.data;

            sliceGroups.each(function (dd) {
                const path = d3.select(this).select("path");
                if (currentSkill.value?.name === dd.data.name) {
                path.transition()
                    .duration(300)
                    .attr("d", hoverArcGen(dd))
                    .attr("fill", d3.color(color.value(dd.index)).brighter(0.5).formatHex());
                } else {
                path.transition().duration(300).attr("d", arcGen(dd)).attr("fill", color.value(dd.index));
                }
            });
        });

    sliceGroups
        .append("path")
        .attr("fill", d => color.value(d.index))
        .attr("d", d => arcGen(d.current));

    sliceGroups
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .style("fill", () => isDark.value ? '#000' : '#fff')
        .style("font-size", d => `${getFontSize(innerRadius, outerRadius)}px`)
        .style("pointer-events", "auto")
        .text(d => `${d.data.value}%`)
        .style("visibility", "hidden")
        .attr("transform", d => `translate(${arcGen.centroid(d.current)})`);


    const progress = { t: 0 };
    const animateChart = (tValue) => {
        isAnimating.value = true;
        gsap.to(progress, {
            t: tValue,
            ease: "power2.out",
            duration: tValue ? 1.2 : 0.8,
            onUpdate: () => {
                sliceGroups.each(function (d) {
                    const interp = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
                    d.current = interp(progress.t);
                    const path = d3.select(this).select("path");
                    const text = d3.select(this).select("text");

                    if (currentSkill.value?.name === d.data.name) {
                        path.attr("d", hoverArcGen(d.current))
                        .attr("fill", d3.color(color.value(d.index)).brighter(0.5).formatHex());
                    } else {
                        path.attr("d", arcGen(d.current)).attr("fill", color.value(d.index));
                    }

                    text.attr("transform", `translate(${arcGen.centroid(d.current)})`)
                        .style("visibility", "visible")
                        .style("font-size", `${getFontSize(innerRadius, outerRadius)}px`);
                });
            },
            onComplete: () => {
                addLegend();
                isAnimating.value = false;
                sliceGroups.style("cursor", "pointer");
            },
        });
    };

    ScrollTrigger.create({
        trigger: chartRef.value,
        scroller: "#homeScroll",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        onEnter: () => animateChart(1),
        onEnterBack: () => animateChart(1),
        onLeave: () => animateChart(0),
        onLeaveBack: () => animateChart(0),
    });
};

watch(() => isDark.value, () => {
    if (isDark.value) {
        color.value = d3.scaleOrdinal(darkPieColors);
    } else {
        color.value = d3.scaleOrdinal(lightPieColors);
    }
    buildChart();
});

onMounted(() => {
    if (isDark.value) {
        color.value = d3.scaleOrdinal(darkPieColors);
    } else {
        color.value = d3.scaleOrdinal(lightPieColors);
    }

    buildChart();
    window.addEventListener("resize", buildChart);
});

onUnmounted(() => {
    window.removeEventListener("resize", buildChart);
});
</script>

<style lang="scss">
svg {
    overflow: visible;
}
</style>
  