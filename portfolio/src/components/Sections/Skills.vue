<template>
  <section
    id="skills"
    ref="sectionRef"
    class="tw:min-h-screen tw:py-24 tw:bg-gradient-to-b tw:from-background tw:to-muted/30 tw:flex tw:w-full"
  >
    <div class="tw:flex tw:flex-col tw:w-full tw:px-6">
      <h2
        class="tw:flex tw:items-center tw:justify-center tw:w-full tw:text-5xl tw:md:text-6xl tw:font-bold tw:text-center tw:mb-20 tw:text-foreground"
      >
        Skills
      </h2>

      <div class="tw:flex tw:items-center tw:w-full">
        <div ref="chartRef" class="tw:h-[400px] tw:w-[400px]" />

        <div>
            <v-card 
                v-if="currentSkill" 
                class="tw:max-w-md tw:mx-auto tw:mt-10"
            >
                <v-card-title>{{ currentSkill.name }}</v-card-title>
                <v-card-text>
                    <div>
                    <p>{{ currentSkill.value }}%</p>
                    <p>{{ currentSkill.description }}</p>
                    </div>
                </v-card-text>
            </v-card>
            <div v-else>
                <p class="tw:italic tw:mt-10">Select a skill slice to see details.</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { skills } from "@/seed";
import * as d3 from "d3";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chartRef = ref(null);
const currentSkill = ref(null);

onMounted(() => buildChart());

const buildChart = () => {
  const width = 300;
  const height = 300;
  const outerRadius = width / 2 - 10;
  const innerRadius = 100;

  const pieGen = d3.pie().value(d => d.value).sort(null);

  const arcGen = d3
    .arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)
    .cornerRadius(3)
    .padAngle(0.015);

  const hoverArcGen = d3
    .arc()
    .outerRadius(outerRadius + 10)
    .innerRadius(innerRadius)
    .cornerRadius(3)
    .padAngle(0.015);

  const svg = d3
    .select(chartRef.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const slicesG = svg.append("g").attr("class", "slices");
  const legendG = svg.append("g").attr("class", "legend");

  const pieData = pieGen(skills);
  pieData.forEach(d => (d.current = { startAngle: 0, endAngle: 0 }));

  // Group each slice and label
  const sliceGroups = slicesG
    .selectAll("g.slice-group")
    .data(pieData)
    .enter()
    .append("g")
    .attr("class", "slice-group")
    .style("cursor", "pointer")
    .on("mouseenter", function (event, d) {
      if (currentSkill.value?.name !== d.data.name) {
        gsap.to(d, {
          current: { startAngle: d.startAngle, endAngle: d.endAngle },
          duration: 0.3,
          onUpdate: () => {
            d3.select(this).select("path").attr("d", hoverArcGen(d));
          },
        });
        gsap.to(this.querySelector("path"), {
          fill: d3.color(d.data.color).brighter(0.5).formatHex(),
          duration: 0.3,
        });
      }
    })
    .on("mouseleave", function (event, d) {
      if (currentSkill.value?.name !== d.data.name) {
        gsap.to(d, {
          current: { startAngle: d.startAngle, endAngle: d.endAngle },
          duration: 0.3,
          onUpdate: () => {
            d3.select(this).select("path").attr("d", arcGen(d));
          },
        });
        gsap.to(this.querySelector("path"), {
          fill: d.data.color,
          duration: 0.3,
        });
      }
    })
    .on("click", (event, d) => {
      currentSkill.value =
        currentSkill.value?.name === d.data.name ? null : d.data;
    });

  // Slice path
  sliceGroups
    .append("path")
    .attr("fill", d => d.data.color)
    .attr("d", d => arcGen(d.current));

  // Percentage label
  sliceGroups
  .append("text")
  .attr("text-anchor", "middle")
  .attr("dy", ".35em")
  .style("fill", "#fff")
  .style("font-size", "10px")
  .style("pointer-events", "auto") // clickable
  .text(d => `${d.data.value}%`)
  .attr("transform", d => `translate(${arcGen.centroid(d.current)})`)
  .on("click", (event, d) => {
    event.stopPropagation();
    currentSkill.value =
      currentSkill.value?.name === d.data.name ? null : d.data;
  });


  const progress = { t: 0 };

  const animate = (tValue, doneCallback) => {
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
            path.attr("d", hoverArcGen(d.current)).attr(
              "fill",
              d3.color(d.data.color).brighter(0.5).formatHex()
            );
          } else {
            path.attr("d", arcGen(d.current)).attr("fill", d.data.color);
          }

          // move label along
          text.attr("transform", `translate(${arcGen.centroid(d.current)})`);
        });
      },
      onComplete: doneCallback,
    });
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
      .attr("transform", (d, i) => `translate(-50, ${i * legendHeight - 55})`);

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

  ScrollTrigger.create({
    trigger: chartRef.value,
    scroller: "#homeScroll",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    onEnter: () => animate(1, () => addLegend()),
    onEnterBack: () => animate(1, () => addLegend()),
    onLeave: () => animate(0, () => legendG.selectAll("*").remove()),
    onLeaveBack: () => animate(0, () => legendG.selectAll("*").remove()),
  });

  // Watch selected skill
  watch(currentSkill, () => {
    sliceGroups.each(function (d) {
      const path = d3.select(this).select("path");
      const text = d3.select(this).select("text");

      if (currentSkill.value?.name === d.data.name) {
        path.attr("d", hoverArcGen(d.current)).attr(
          "fill",
          d3.color(d.data.color).brighter(0.5).formatHex()
        );
      } else {
        path.attr("d", arcGen(d.current)).attr("fill", d.data.color);
      }

      text.attr("transform", `translate(${arcGen.centroid(d.current)})`);
    });
  });
};
</script>
