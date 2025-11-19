<template>
  <div
    ref="container"
    class="tw:relative tw:w-full tw:h-[400px] tw:overflow-hidden tw:cursor-pointer tw:flex tw:items-center tw:justify-center"
  >
    <!-- Left SVG (Logic Brain) -->
    <svg
      ref="leftSvg"
      :width="width"
      :height="height"
      class="tw:absolute tw:top-0 tw:left-0"
      :style="{ opacity: leftOpacity }"
    >
      <defs>
        <clipPath id="leftClip">
          <rect :x="0" :y="0" :width="dividerX" :height="height" />
        </clipPath>
      </defs>
      <image
        xlink:href="@/assets/logic-brain.svg"
        width="100%"
        height="100%"
        :clip-path="'url(#leftClip)'"
      />
    </svg>

    <!-- Right SVG (Creative Brain) -->
    <svg
      ref="rightSvg"
      :width="width"
      :height="height"
      class="tw:absolute tw:top-0 tw:left-0"
      :style="{ opacity: rightOpacity }"
    >
      <defs>
        <clipPath id="rightClip">
          <rect :x="dividerX" :y="0" :width="width - dividerX" :height="height" />
        </clipPath>
      </defs>
      <image
        xlink:href="@/assets/creative-brain.svg"
        width="100%"
        height="100%"
        :clip-path="'url(#rightClip)'"
      />
    </svg>

    <!-- Vertical divider -->
    <div
      ref="divider"
      class="tw:absolute tw:top-0 tw:w-[2px] tw:bg-white tw:h-full tw:pointer-events-none"
      :style="{ left: dividerX + 'px' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import gsap from "gsap";

const container = ref(null);

// SVG dimensions
const width = 800;
const height = 400;

// Divider position
const dividerX = ref(width / 2);

// Opacity computation (soft fade)
const leftOpacity = computed(() => {
  const percent = dividerX.value / width;
  return 0.2 + percent * 0.8; // 20% → 100%
});

const rightOpacity = computed(() => {
  const percent = 1 - dividerX.value / width;
  return 0.2 + percent * 0.8; // 20% → 100%
});

onMounted(() => {
  let targetX = width / 2;

  const updateDivider = () => {
    gsap.to(dividerX, {
      value: targetX,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  container.value.addEventListener("mousemove", (e) => {
    const rect = container.value.getBoundingClientRect();
    targetX = e.clientX - rect.left;

    if (targetX < 0) targetX = 0;
    if (targetX > width) targetX = width;

    updateDivider();
  });
});
</script>
