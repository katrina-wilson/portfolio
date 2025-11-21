<template>
  <div
    ref="container"
    class="tw:relative tw:w-full tw:max-w-[800px] tw:mx-auto tw:my-12 tw:cursor-pointer tw:flex tw:items-center tw:justify-center tw:aspect-[2/1]"
  >
    <img
      src="@/assets/logic-brain.svg"
      class="tw:absolute tw:top-0 tw:left-0 tw:w-full tw:h-full tw:object-contain"
      :style="{ clipPath: `inset(0 ${containerWidth - dividerX}px 0 0)` }"
    />
    <img
      src="@/assets/creative-brain.svg"
      class="tw:absolute tw:top-0 tw:left-0 tw:w-full tw:h-full tw:object-contain"
      :style="{ clipPath: `inset(0 0 0 ${dividerX}px)` }"
    />

    <div
      class="tw:absolute tw:left-0 tw:top-1/2 tw:-translate-y-1/2 
             tw:px-2 tw:text-foreground tw:text-lg tw:md:text-2xl 
             tw:flex tw:flex-col tw:items-center tw:text-center
             tw:max-w-[32%] md:tw:max-w-[30%] 
             tw:pointer-events-none"
      :style="{ opacity: leftTextOpacity }"
    >
      <span class="tw:font-extrabold tw:text-base tw:sm:text-lg tw:md:text-2xl code-font">
        &lt;Developer/&gt;
      </span>
      <span class="roboto-font tw:text-[10px] tw:sm:text-xs tw:md:text-sm tw:pt-2">
        I build clean, efficient, and scalable front-end and full-stack applications.
      </span>
    </div>

    <div
      class="tw:absolute tw:right-0 tw:top-1/2 tw:-translate-y-1/2 
             tw:px-2 tw:text-foreground tw:text-lg tw:md:text-2xl
             tw:flex tw:flex-col tw:items-center tw:text-center
             tw:max-w-[32%] md:tw:max-w-[30%]
             tw:pointer-events-none"
      :style="{ opacity: rightTextOpacity }"
    >
      <span class="tw:font-semibold tw:text-base tw:sm:text-lg tw:md:text-2xl designer-font"
            style="font-family: 'Limelight';">
        Designer
      </span>
      <span class="roboto-font tw:text-[10px] tw:sm:text-xs tw:md:text-sm tw:pt-2">
        I create intuitive and engaging designs focusing on UI, UX, and accessibility.
      </span>
    </div>

    <div
      v-if="!isMobile"
      class="tw:absolute tw:top-0 tw:h-full tw:w-[2px] tw:bg-black tw:pointer-events-none"
      :style="{ left: dividerX + 'px' }"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import gsap from "gsap";

const container = ref(null);
const containerWidth = ref(800);
const dividerX = ref(0);
const isMobile = ref(window.innerWidth < 768);

const minOpacity = 0.2;

const leftTextOpacity = computed(() => {
  const center = containerWidth.value / 2;
  if (dividerX.value >= center) return 1;
  const dist = center - dividerX.value;
  return Math.max(minOpacity, 1 - dist / center);
});

const rightTextOpacity = computed(() => {
  const center = containerWidth.value / 2;
  if (dividerX.value <= center) return 1;
  const dist = dividerX.value - center;
  return Math.max(minOpacity, 1 - dist / center);
});

onMounted(() => {
  nextTick(() => {
    containerWidth.value = container.value.clientWidth;
    dividerX.value = containerWidth.value / 2;
  });

  let targetX = containerWidth.value / 2;

  const updateDivider = () => {
    gsap.to(dividerX, {
      value: targetX,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  if (!isMobile.value) {
    container.value.addEventListener("mousemove", (e) => {
      const rect = container.value.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetX = Math.max(0, Math.min(containerWidth.value, targetX));
      updateDivider();
    });

    container.value.addEventListener("mouseleave", () => {
      targetX = containerWidth.value / 2;
      updateDivider();
    });
  }

  window.addEventListener("resize", () => {
    containerWidth.value = container.value.clientWidth;
    dividerX.value = containerWidth.value / 2;
  });
});
</script>
