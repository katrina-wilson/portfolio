<template>
    <section
      id="home"
      ref="introRef"
      class="tw:min-h-screen tw:flex tw:flex-col tw:items-center tw:justify-center tw:bg-gradient-to-br tw:from-background tw:via-muted/30 tw:to-background"
    >

        <div class="tw:mx-auto tw:px-6 tw:text-center tw:z-10">
            <div class="tw:w-full tw:text-6xl tw:md:text-8xl tw:font-bold tw:text-foreground tw:mb-6 tw:tracking-tight">
                Hey, I'm Katrina!
            </div>

            <div class="tw:inline-flex tw:items-center tw:gap-3 tw:text-xl tw:md:text-2xl">
                <span class="tw:text-muted-foreground">
                    I am a
                </span>
                <span class="tw:font-medium tw:min-w-[280px] tw:text-foreground code-font">
                    {{ displayRole }}
                    <span class="tw:animate-pulse">|</span>
                </span>
            </div>

            <!-- GSAPE EXAMPLE -->
            <div ref="boxRef" class="box tw:h-16 tw:w-16 tw:bg-primary tw:mt-40"/>
        </div>

    </section>
</template>
  
<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import { roles } from '@/seed.js';

const displayRole = ref('');
const currentRoleIndex = ref(0);
const isDeleting = ref(false);

watch(([displayRole, isDeleting, currentRoleIndex]), () => {
    const currentRole = roles[currentRoleIndex.value];
    const typingSpeed = isDeleting.value ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting.value) {
        if (displayRole.value.length < currentRole.length) {
          displayRole.value = currentRole.slice(0, displayRole.value.length + 1);
        } else {
          setTimeout(() => {
            isDeleting.value = true;
          }, pauseBeforeDelete);
        }
      } else {
        if (displayRole.value.length > 0) {
          displayRole.value = displayRole.value.slice(0, -1);
        } else {
          isDeleting.value = false;
          currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
          setTimeout(() => {}, pauseBeforeType);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  },
  { immediate: true }
);


// ----------------------------- GSAP EXAMPLE -----------------------------
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const boxRef = ref(null);
onMounted(async () => {
  await nextTick(); // Ensure the DOM is fully rendered

  if (boxRef.value) {
    console.log("boxRef element:", boxRef.value); // Log the boxRef element to verify targeting

    gsap.to(boxRef.value, {
      scrollTrigger: {
        trigger: boxRef.value,
        start: "top center", // Adjusted start position for better alignment
        end: "bottom center", // Adjusted end position for better alignment
        scrub: true,
        markers: true, // Markers will now align with the element
        invalidateOnRefresh: true, // Ensure markers update on resize
        scroller: "#homeScroll", // Explicitly set the scroller to the correct container
      },
      x: 500,
      rotation: 360,
      duration: 3,
    });
  } else {
    console.error("boxRef is not defined or not rendered in the DOM.");
  }
});
</script>