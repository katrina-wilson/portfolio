<template>
    <section
      id="about"
      class="tw:min-h-screen tw:flex tw:flex-col tw:items-center tw:justify-center tw:bg-gradient-to-br tw:from-background tw:via-muted/30 tw:to-background"
    >
    <div class="tw:h-full tw:flex tw:flex-col tw:w-full tw:px-6 tw:items-center">
      <h2
        class="tw:flex tw:items-center tw:justify-center tw:w-full tw:text-5xl tw:md:text-6xl tw:font-bold tw:text-center tw:text-foreground tw:pb-3"
      >
        About
      </h2>

      <div class="tw:flex tw:flex-col tw:items-center tw:w-full tw:max-w-4xl tw:space-y-12">
        <p class="tw:text-xl tw:text-muted-foreground tw:leading-relaxed tw:text-center">
          I'm a front-end engineer who bridges the gap between design and development.
          With deep expertise in Vue and experience in modern front-end tools, 
          I craft elegant, responsive interfaces that are intuitive and enjoyable for users to interact with.
        </p>

        <Brain/>

        <p class="tw:text-lg tw:text-muted-foreground tw:leading-relaxed tw:text-center">
          When I'm not coding, you'll probably find me diving into a new project—whether 
          it's tech-related or something completely different—always learning, experimenting, 
          and pushing my creative and technical boundaries. I also love being outdoors: 
          hiking, climbing, staying active, and soaking up everything nature has to offer.
        </p>
      </div>
      
    </div>
  </section>
</template>
  
<script setup>
import { onMounted } from "vue";
import Brain from "@/components/Brain.vue";

onMounted(() => {
});
</script>