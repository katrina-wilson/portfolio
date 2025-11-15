<template>
  <div id="homeScroll" class="tw:w-full tw:h-full tw:overflow-y-auto">

    <div
      class="tw:pointer-events-none tw:fixed tw:inset-0 tw:z-50 tw:transition-opacity tw:duration-300"
      :style="{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,0,0.08), transparent 40%)`
      }"
    />

    <Intro/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
    
  </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Intro from '@/components/Sections/Intro.vue';
import Skills from "@/components/Sections/Skills.vue";
import Projects from "@/components/Sections/Projects.vue";
import About from "@/components/Sections/About.vue";
import Contact from "@/components/Sections/Contact.vue";

const mousePosition = ref({ x: 0, y: 0 });

onMounted(() => {
  const handleMouseMove = (e) => {
      mousePosition.value = { x: e.clientX, y: e.clientY };
  };

  window.addEventListener("mousemove", handleMouseMove);

  onUnmounted(() => {
      window.removeEventListener("mousemove", handleMouseMove);
  });
});
</script>
  