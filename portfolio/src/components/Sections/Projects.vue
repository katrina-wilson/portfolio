<template>
    <section
        id="projects"
        ref="sectionRef"
        class="tw:min-h-screen tw:py-24 tw:bg-gradient-to-b tw:from-background tw:to-muted/30"
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
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { projects } from "@/seed";
import ProjectCard from "../ProjectCard.vue";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const projectCardRef = ref(null);

onMounted(() => {   

    if (projectCardRef.value == null) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.value.current,
          start: "top center",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
});
</script>
  