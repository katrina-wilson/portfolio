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

          <div class="tw:flex tw:flex-wrap tw:justify-center tw:gap-6 tw:mb-16">
                <div
                  v-for="link in socialLinks"
                  :key="link.label"
                >
                  <v-btn
                    stacked
                    :prepend-icon="link.icon"
                    variant="outlined"
                    :text="link.label"
                    class="rounded-lg"
                    size="x-large"
                  />
                </div>
          </div>
        </div>

        <NameLegs/>
      </div>
    </section>
</template>
  
<script setup>
import { onMounted } from "vue";
import { socialLinks } from "@/seed";
import NameLegs from "../NameLegs.vue";

onMounted(() => {
});
</script>