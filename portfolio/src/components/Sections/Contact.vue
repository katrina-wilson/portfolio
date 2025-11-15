<template>
    <section
        id="contact"
        ref="sectionRef"
        class="tw:min-h-screen tw:py-24 tw:bg-gradient-to-b tw:from-background tw:to-muted/30"
    >
    <div class="tw:mx-auto tw:px-6">
        <div class="tw:max-w-3xl tw:mx-auto tw:text-center">
          <h2 class="tw:text-5xl tw:md:text-6xl tw:font-bold tw:mb-8 tw:text-foreground">
            Let's Connect
          </h2>
          <p class="tw:text-xl tw:text-muted-foreground tw:mb-16 tw:leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div class="tw:flex tw:flex-wrap tw:justify-center tw:gap-6 tw:mb-16">
                <a
                  v-for="link in socialLinks"
                  :key="link.label"
                  href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="tw:group"
                >
                  <div class="tw:p-6 tw:rounded-2xl tw:bg-card tw:border tw:border-border tw:hover:border-primary/50 tw:transition-all tw:duration-300 tw:hover:shadow-lg tw:hover:scale-105">
                    <!-- <Icon class="tw:text-muted-foreground tw:group-hover:text-primary tw:transition-colors" size={32} /> -->
                    <span class="tw:block tw:mt-3 tw:text-sm tw:font-medium tw:text-muted-foreground tw:group-hover:text-primary tw:transition-colors">
                      {{ link.label }}
                    </span>
                  </div>
                </a>
          </div>

          <div class="tw:pt-12 tw:border-t tw:border-border">
            <p class="tw:text-sm tw:text-muted-foreground">
              Designed & Built by Katrina • {{ new Date().getFullYear() }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script setup>
import { onMounted } from "vue";

const socialLinks = [
    { label: "Email", href: "mailto:katrina@example.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ];

onMounted(() => {
});
</script>