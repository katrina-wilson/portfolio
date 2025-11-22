<template>
  <div class="tw:flex tw:h-14 tw:items-center tw:justify-center">
    <div class="tw:w-full tw:max-w-[130px]">
      <button
        @click="toggleTheme"
        class="tw:relative tw:w-full tw:cursor-pointer tw:focus:outline-none tw:rounded-full tw:transition-shadow"
        aria-label="Toggle theme"
      >
        <svg
          class="tw:block tw:w-full tw:h-auto"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="-100 0 620 319"
        >
          <rect
            :fill="isDark ? '#121820' : '#5F9EFF'"
            :stroke="isDark ? '#FFFFFF' : '#588DDF'"
            :stroke-width="isDark ? 4 : 4"
            height="191"
            rx="95.5"
            width="421"
            x="90"
            y="72"
            style="transition: fill 0.5s ease, stroke 0.5s ease"
          />
          
          <g 
            :style="{ 
              opacity: isDark ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }"
          >
            <path :d="svgPathsDark.star1" fill="white" />
            <path :d="svgPathsDark.star2" fill="white" />
            <path :d="svgPathsDark.star3" fill="white" />
          </g>
          
          <g 
            :style="{ 
              opacity: isDark ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }"
          >
            <rect
              fill="white"
              fill-opacity="0.7"
              height="36"
              rx="18"
              width="124"
              x="241"
              y="148"
            />
            <rect
              fill="white"
              fill-opacity="0.7"
              height="36"
              rx="18"
              width="72"
              x="320"
              y="200"
            />
            <rect
              fill="white"
              fill-opacity="0.7"
              height="36"
              rx="18"
              width="82"
              x="380"
              y="100"
            />
          </g>
          
          <g 
            :style="{ 
              transform: `translateX(${isDark ? 0 : -283}px)`,
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }"
          >
            <rect
              fill="#FFCB01"
              height="150"
              rx="75"
              width="150"
              x="400"
              y="92"
              :style="{ 
                opacity: isDark ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }"
            />
            
            <path
              :d="svgPathsDark.moon"
              fill="white"
              :style="{ 
                opacity: isDark ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

const svgPathsDark = {
  star1: 'M162.5 128 L175 107 L187.5 128 L212.5 134.5 L187.5 139.5 L175 164.5 L162.5 139.5 L137.5 134.5 L162.5 128 Z',
  star2: "M265 204 L275 189 L284 204 L302 208 L284 212 L275 229 L265 212 L248 208 L265 204 Z",
  star3: "M345 154 L355 139 L364 154 L382 158 L364 162 L355 179 L345 162 L328 158 L345 154 Z",
  moon: "M417.5 88 C458.9214 88 492.5 121.5786 492.5 163 C492.5 204.421 458.9214 238 417.5 238 C404.6567 238 392.5681 234.77 382 229.081 C405.5155 216.422 421.5 191.578 421.5 163 C421.5 134.4218 405.5157 109.5774 382 96.91797 C392.568 91.22877 404.6569 88 417.5 88 Z",
};

const toggleTheme = () => {
    if (theme.global.current.value.dark) {
      theme.change('light');
    } else {
      theme.change('dark');
    }
};
</script>