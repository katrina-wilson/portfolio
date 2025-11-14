<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const chartRef = ref(null);

const skills = [
  { name: "Frontend", percentage: 70, color: "#7BA591" },
  { name: "Design", percentage: 20, color: "#D4C4B0" },
  { name: "Backend", percentage: 8, color: "#A397BD" },
  { name: "Data", percentage: 2, color: "#9FC4AA" },
];

const skillDescriptions = {
  Frontend: "React, Vue, TypeScript, CSS/Tailwind, responsive design",
  Design: "UI/UX, Figma, prototyping, visual design, user research",
  Backend: "Node.js, APIs, databases, authentication",
  Data: "Analytics, data visualization, basic SQL",
};

const width = 300;
const height = 300;
const radius = Math.min(width, height) / 2 - 10;

// D3 pie layout
const pie = d3.pie().value(d => d.percentage).sort(null);
const arcs = pie(skills);

// Arc generator
const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

onMounted(() => {
  const svg = d3
    .select(chartRef.value)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // Draw arcs with 0° endAngle initially
  const paths = svg
    .selectAll("path")
    .data(arcs)
    .enter()
    .append("path")
    .attr("fill", d => d.data.color)
    .attr("stroke", "white")
    .attr("stroke-width", 2)
    .attr("d", d => {
      const start = { ...d, endAngle: d.startAngle };
      return arcGenerator(start);
    });

  // Animate radial fill with GSAP
  paths.each(function(d, i) {
    const path = d3.select(this);
    gsap.to(d, {
      endAngle: d.endAngle,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        path.attr("d", arcGenerator(d));
      },
      delay: i * 0.2,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top center",
      },
    });
  });

  // Animate skill cards
  gsap.from(".skill-card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top center",
    },
  });
});
</script>

<template>
  <section
    ref="sectionRef"
    id="skills"
    class="tw:min-h-screen tw:py-24 tw:bg-gradient-to-b tw:from-background tw:to-muted/30"
  >
    <div class="tw:container tw:mx-auto tw:px-6">
      <h2 class="tw:text-5xl md:tw:text-6xl tw:font-bold tw:text-center tw:mb-20 tw:text-foreground">
        Skills
      </h2>

      <div class="tw:max-w-4xl tw:mx-auto">
        <!-- Pie Chart -->
        <div class="tw:flex tw:justify-center tw:mb-16">
          <svg ref="chartRef"></svg>
        </div>

        <!-- Skills Grid -->
        <div class="tw:grid md:tw:grid-cols-2 tw:gap-6">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="skill-card tw:p-6 tw:rounded-2xl tw:bg-card tw:border tw:border-border hover:tw:border-primary/50 tw:transition-all tw:duration-300 hover:tw:shadow-lg"
          >
            <div class="tw:flex tw:items-center tw:gap-4 tw:mb-3">
              <div
                class="tw:w-4 tw:h-4 tw:rounded-full"
                :style="{ backgroundColor: skill.color }"
              />
              <h3 class="tw:text-xl tw:font-semibold tw:text-foreground">
                {{ skill.name }}
              </h3>
              <span class="tw:ml-auto tw:text-2xl tw:font-bold tw:text-primary">
                {{ skill.percentage }}%
              </span>
            </div>
            <p class="tw:text-sm tw:text-muted-foreground tw:leading-relaxed">
              {{ skillDescriptions[skill.name] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
