<template>
  <section
    id="contact"
    class="tw:min-h-[90vh] tw:max-h-[90vh] tw:flex tw:flex-col tw:items-center tw:pt-18 tw:overflow-hidden"
  >
    <div class="tw:mx-auto tw:px-6">
      <div class="tw:max-w-3xl tw:mx-auto tw:text-center">
        <h2 class="tw:text-5xl tw:md:text-6xl tw:font-bold tw:mb-8 tw:text-foreground">
          Let's Connect!
        </h2>
        <p class="tw:text-xl tw:text-muted-foreground tw:mb-16 tw:leading-relaxed">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div class="tw:flex tw:flex-wrap tw:justify-center tw:gap-6 tw:mb-6 tw:md:mb-10">
          <div
            v-for="link in socialLinks"
            :key="link.label"
            class="tw:md:w-32 tw:w-26"
          >
            <v-btn
              stacked
              :prepend-icon="link.icon"
              variant="outlined"
              :text="link.label"
              class="rounded-lg tw:w-full"
              :size="socialButtonSize"
              :href="link.href"
              target="_blank"
            />
          </div>
        </div>
        <div class="tw:flex tw:flex-col tw:md:mb-4 tw:mb-16">
          <div class="tw:italic">
            Or contact me directly at
          </div>
          <div class="tw:font-bold">
            wilson.katrinak@gmail.com
          </div>
        </div>
      </div>

      <NameLegs/>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { socialLinks } from "@/seed";
import NameLegs from "../NameLegs.vue";

const windowWidth = ref(window.innerWidth);
const socialButtonSize = ref("x-large");

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
  socialButtonSize.value = windowWidth.value < 640 ? undefined : "x-large";
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>