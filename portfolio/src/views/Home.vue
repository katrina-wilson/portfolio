<template>
    <div class="tw:relative tw:w-full tw:h-full">
  
      <div
        class="tw:pointer-events-none tw:fixed tw:inset-0 tw:z-50 tw:transition-opacity tw:duration-300"
        :style="{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,0,0.08), transparent 40%)`
        }"
      />
  
      <TopNav/>
      <Intro/>
      <Skills/>

    </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Intro from '@/components/Sections/Intro.vue';
import TopNav from "@/components/TopNav.vue";
import Skills from "@/components/Sections/Skills.vue";

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
  