<template>
  <section
    id="about"
    ref="aboutRef"
    class="tw:min-h-screen tw:max-h-fit tw:mb-50 tw:pt-18 tw:flex tw:flex-col tw:items-center"
  >
    <div class="tw:h-full tw:flex tw:flex-col tw:w-full tw:px-6 tw:items-center">
      <h2
        class="tw:flex tw:items-center tw:justify-center tw:w-full tw:text-5xl tw:md:text-6xl tw:font-bold tw:text-center tw:text-foreground tw:pb-3"
      >
        About
      </h2>

      <div class="tw:flex tw:flex-col tw:items-center tw:w-full tw:max-w-4xl tw:md:space-y-12 tw:space-y-1">
        <p class="about-item tw:text-xl tw:text-muted-foreground tw:leading-relaxed tw:text-center">
          I’m a full-stack developer with a strong front-end focus, blending design intuition 
          with solid engineering. I specialize in Vue and modern front-end tooling, and I enjoy 
          building interfaces that feel as good to use as they look. On the back end, I’m comfortable 
          architecting APIs, working with databases, and putting all the pieces together to create smooth, 
          reliable experiences end to end.
        </p>

        <BrainBase class="about-item"/>
        

        <p class="about-item tw:text-lg tw:text-muted-foreground tw:leading-relaxed tw:text-center">
          Outside of work, I’m usually diving into some kind of project—tech, creative, or completely 
          something completely different. I love learning, experimenting, and stretching both sides of my brain. 
          And when I’m not tinkering, I’m outside whenever I can be: hiking, climbing, staying active, 
          and soaking up time in nature.
        </p>
      </div>
      
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import BrainBase from "@/components/brains/BrainBase.vue";

gsap.registerPlugin(ScrollTrigger);

const aboutRef = ref(null);

onMounted(async () => {
  await nextTick();

  if (!aboutRef.value) return;

  const items = aboutRef.value.querySelectorAll(".about-item");

  items.forEach((item) => {
    gsap.from(item, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse",
        scroller: "#homeScroll"
      },
    });
  });
});
</script>