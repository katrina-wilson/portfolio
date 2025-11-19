<template>
    <section
      id="skills"
      ref="introRef"
      class="tw:min-h-screen tw:flex tw:flex-col tw:items-center tw:justify-center tw:bg-gradient-to-br tw:from-background tw:via-muted/30 tw:to-background"
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

                <div class="tw:flex tw:justify-center tw:items-center tw:md:min-w-[40%] tw:md:max-w-[40%] tw:h-full tw:md:ml-8">
                    <v-scale-transition mode="out-in"> 
                        <SkillCard 
                            v-if="currentSkill"
                            :skill="currentSkill"
                        />
                        <div v-else>
                            <p class="tw:italic tw:mt-10 tw:text-muted-foreground">
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
import { ref, onMounted, onUnmounted } from "vue";
import { skills } from "@/seed";
import * as d3 from "d3";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillCard from "@/components/SkillCard.vue";

gsap.registerPlugin(ScrollTrigger);

const chartRef = ref(null);
const currentSkill = ref(null);

let svg, slicesG, legendG, arcGen, hoverArcGen, pieGen;
let sliceGroups;

const getChartSize = () => {
    const w = Math.min(window.innerWidth * 0.6, 400);
    const outerRadius = w / 2 - 10;
    const innerRadius = w / 3;
    return { w, h: w, outerRadius, innerRadius };
};

const addLegend = () => {
    legendG.selectAll("*").remove();
    const rectSize = 20;
    const spacing = 7;
    const legendHeight = rectSize + spacing;

    const legend = legendG
        .selectAll(".legend-item")
        .data(skills)
        .enter()
        .append("g")
        .attr("class", "legend-item")
        .attr("transform", (d, i) => `translate(-80, ${i * legendHeight - 55})`);

    legend
        .append("rect")
        .attr("width", rectSize)
        .attr("height", rectSize)
        .attr("rx", 20)
        .attr("ry", 20)
        .style("fill", d => d.color);

    legend
        .append("text")
        .attr("x", 30)
        .attr("y", 15)
        .style("fill", d => d.color)
        .style("font-size", "14px")
        .text(d => d.name);
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
        .style("cursor", "pointer")
        .on("mouseenter", function (event, d) {
        sliceGroups.each(function (dd) {
            const path = d3.select(this).select("path");
            if (dd === d) {
            path.transition()
                .duration(300)
                .attr("d", hoverArcGen(dd))
                .attr("fill", d3.color(dd.data.color).brighter(0.5).formatHex());
            } else if (currentSkill.value?.name !== dd.data.name) {
            path.transition().duration(300).attr("d", arcGen(dd)).attr("fill", dd.data.color);
            }
        });
        })
        .on("mouseleave", function () {
        sliceGroups.each(function (dd) {
            const path = d3.select(this).select("path");
            if (currentSkill.value?.name === dd.data.name) {
            path.transition()
                .duration(300)
                .attr("d", hoverArcGen(dd))
                .attr("fill", d3.color(dd.data.color).brighter(0.5).formatHex());
            } else {
            path.transition().duration(300).attr("d", arcGen(dd)).attr("fill", dd.data.color);
            }
        });
        })
        .on("click", (event, d) => {
        currentSkill.value =
            currentSkill.value?.name === d.data.name ? null : d.data;

        sliceGroups.each(function (dd) {
            const path = d3.select(this).select("path");
            if (currentSkill.value?.name === dd.data.name) {
            path.transition()
                .duration(300)
                .attr("d", hoverArcGen(dd))
                .attr("fill", d3.color(dd.data.color).brighter(0.5).formatHex());
            } else {
            path.transition().duration(300).attr("d", arcGen(dd)).attr("fill", dd.data.color);
            }
        });
        });

    sliceGroups
        .append("path")
        .attr("fill", d => d.data.color)
        .attr("d", d => arcGen(d.current));

    sliceGroups
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .style("fill", "#fff")
        .style("font-size", "16px")
        .style("pointer-events", "auto")
        .text(d => `${d.data.value}%`)
        .attr("transform", d => `translate(${arcGen.centroid(d.current)})`);

    const progress = { t: 0 };
    const animateChart = tValue => {
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
                .attr("fill", d3.color(d.data.color).brighter(0.5).formatHex());
            } else {
                path.attr("d", arcGen(d.current)).attr("fill", d.data.color);
            }

            text.attr("transform", `translate(${arcGen.centroid(d.current)})`);
            });
        },
        onComplete: () => addLegend(),
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

onMounted(() => {
    buildChart();
    window.addEventListener("resize", buildChart);
});

onUnmounted(() => {
    window.removeEventListener("resize", buildChart);
});
</script>
  