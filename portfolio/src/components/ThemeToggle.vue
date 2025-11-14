<template>
    <button
      ref="toggleRef"
      @click="toggleTheme"
      :class="[
        'tw:relative tw:w-20 tw:h-10 tw:rounded-full tw:transition-colors tw:duration-400 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2',
        isDark
          ? 'tw:bg-toggle-bg-dark tw:border tw:border-border/30'
          : 'tw:bg-toggle-bg-light'
      ]"
      aria-label="Toggle theme"
    >
      <!-- Light mode: Sun with clouds -->
      <template v-if="!isDark">
        <!-- Sun -->
        <div
          ref="sunRef"
          class="tw:absolute tw:top-1.5 tw:left-1.5 tw:w-7 tw:h-7 tw:rounded-full tw:bg-[hsl(var(--toggle-sun))] tw:flex tw:items-center tw:justify-center tw:shadow-lg"
        >
          <div class="tw:w-3.5 tw:h-3.5 tw:rounded-full tw:bg-toggle-sun-inner" />
        </div>
  
        <!-- Clouds -->
        <div class="tw:absolute tw:top-2 tw:right-2 tw:flex tw:gap-1">
          <div class="tw:w-6 tw:h-3 tw:rounded-full tw:bg-toggle-cloud" />
        </div>
        <div class="tw:absolute tw:top-4.5 tw:right-3.5 tw:flex tw:gap-1">
          <div class="tw:w-4 tw:h-2 tw:rounded-full tw:bg-toggle-cloud" />
        </div>
      </template>
  
      <!-- Dark mode: Moon with stars -->
      <template v-else>
        <!-- Stars -->
        <div class="tw:absolute tw:top-2 tw:left-3">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path
              d="M4 0L4.5 3.5L8 4L4.5 4.5L4 8L3.5 4.5L0 4L3.5 3.5L4 0Z"
              fill="hsl(var(--toggle-star))"
            />
          </svg>
        </div>
        <div class="tw:absolute tw:top-4 tw:left-5">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <path
              d="M3 0L3.4 2.6L6 3L3.4 3.4L3 6L2.6 3.4L0 3L2.6 2.6L3 0Z"
              fill="hsl(var(--toggle-star))"
            />
          </svg>
        </div>
        <div class="tw:absolute tw:top-6 tw:left-2.5">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
            <path
              d="M3.5 0L3.9 3.1L7 3.5L3.9 3.9L3.5 7L3.1 3.9L0 3.5L3.1 3.1L3.5 0Z"
              fill="hsl(var(--toggle-star))"
            />
          </svg>
        </div>
  
        <!-- Moon (crescent) -->
        <div ref="sunRef" class="tw:absolute tw:top-1.5 tw:left-1.5 tw:w-7 tw:h-7">
          <div class="tw:relative tw:w-full tw:h-full">
            <div class="tw:absolute tw:inset-0 tw:rounded-full tw:bg-toggle-moon" />
            <div class="tw:absolute tw:top-0.5 tw:left-1 tw:w-5.5 tw:h-6 tw:rounded-full tw:bg-toggle-bg-dark" />
          </div>
        </div>
      </template>
    </button>
</template>

<script setup>
import { ref, watchEffect, computed } from "vue";
import gsap from "gsap";

// Theme state (replace with your actual theme management if needed)
const theme = ref("light");

const toggleRef = ref(null);
const sunRef = ref(null);

const isDark = computed(() => theme.value === "dark");

// Set initial position on mount and whenever theme changes
watchEffect(() => {
  if (sunRef.value) {
    gsap.set(sunRef.value, {
      x: theme.value === "dark" ? 50 : 0,
    });
  }
});

// Toggle theme function
const toggleTheme = () => {
  const newTheme = theme.value === "dark" ? "light" : "dark";

  if (sunRef.value) {
    gsap.to(sunRef.value, {
      x: theme.value === "dark" ? 0 : 50,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        theme.value = newTheme;
      },
    });
  }
};
</script>
