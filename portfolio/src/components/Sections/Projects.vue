<template>
  <section
    id="projects"
    ref="sectionRef"
    class="tw:min-h-screen tw:max-h-fit tw:mb-50 tw:pt-18 tw:flex tw:flex-col tw:items-center"
  >
    <div class="tw:mx-auto tw:px-6">
        <h2 class="tw:text-5xl tw:md:text-6xl tw:font-bold tw:text-center tw:mb-20 tw:text-foreground">
          Projects
        </h2>

        <div class="tw:grid tw:md:grid-cols-2 tw:gap-8 tw:max-w-6xl tw:mx-auto">
            <div
              v-for="project in projects"
              :key="project.id"
              class="project-card tw:group tw:cursor-pointer"
              @click="selectedProject = project"
            >
                <ProjectCard 
                    ref="projectCardRef"
                    :project="project" 
                />
            </div>
        </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { projects } from "@/seed";
import ProjectCard from "@/components/ProjectCard.vue";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const projectCardRef = ref(null);

onMounted(async () => {
  await nextTick();

  if (!sectionRef.value) return;

  const cards = sectionRef.value.querySelectorAll(".project-card");

  cards.forEach((card) => {
    gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
            scroller: "#homeScroll"
        },
    });
  });
});
</script>
