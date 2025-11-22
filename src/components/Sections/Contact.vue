<template>
  <section
    id="contact"
    ref="contactRef"
    class="tw:min-h-fit tw:pb-16 tw:flex tw:flex-col tw:items-center tw:pt-18 tw:overflow-hidden"
  >
    <div class="tw:mx-auto tw:px-6">
      <div class="tw:max-w-3xl tw:mx-auto tw:text-center">
        <h2 class="tw:text-5xl tw:md:text-6xl tw:font-bold tw:mb-8 tw:text-foreground">
          Let's Connect!
        </h2>
        <p class="contact-item tw:text-xl tw:text-muted-foreground tw:mb-16 tw:leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div class="tw:flex tw:flex-wrap tw:justify-center tw:gap-6 tw:mb-6 tw:md:mb-10">
          <div
            v-for="link in socialLinks"
            :key="link.label"
            class="contact-item tw:md:w-32 tw:w-23"
          >
            <v-btn
              stacked
              :prepend-icon="link.icon"
              variant="outlined"
              class="rounded-lg tw:w-full"
              :size="socialButtonSize"
              :href="link.href"
              target="_blank"
            >
              {{ link.label }}
            </v-btn>
          </div>
        </div>
        <div class="contact-item tw:flex tw:flex-col tw:md:mb-4 tw:mb-16">
          <div class="tw:italic">
            Or contact me directly at
          </div>
          <div class="tw:font-bold">
            wilson.katrinak@gmail.com
          </div>
        </div>
      </div>

      <NameLegs class="contact-item"/>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "@/seed";
import NameLegs from "@/components/NameLegs.vue";

gsap.registerPlugin(ScrollTrigger);

const contactRef = ref(null);
const windowWidth = ref(window.innerWidth);
const socialButtonSize = ref("x-large");

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 400) {
    socialButtonSize.value = 'small';
    return;
  }
  if (windowWidth.value < 640) {
    socialButtonSize.value = undefined;
  } else {
    'x-large';
  }
};

onMounted(async () => {
  window.addEventListener("resize", updateWidth);
  updateWidth();

  await nextTick();

  if (!contactRef.value) return;

  const items = contactRef.value.querySelectorAll(".contact-item");

  items.forEach((item) => {
    gsap.from(item, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 95%",
        toggleActions: "play none none reverse",
        scroller: "#homeScroll"
      },
    });
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>