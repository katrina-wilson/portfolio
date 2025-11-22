<template>
  <div class="top-nav tw:fixed tw:top-0 tw:left-0 tw:right-0 tw:z-50 tw:bg-background/80 tw:backdrop-blur-md tw:border-b tw:border-border">
    <Navigation
      :navItems="navItems"
      :activeSection="activeSection"
      :isOpen="isOpen"
      @mobileDrawerToggle="(v) => isOpen = v"
      @selectMobile="(v) => selectMobile(v)"
    />
    <div class="tw:mx-auto tw:px-6 tw:py-4 tw:flex tw:items-center tw:justify-between">
      <img 
        :src="isDark ? colorfulLogo : logo" 
        alt="Logo" 
        class="h-6 w-6 cursor-pointer" 
        @click="scrollToSection('home')"
      />
      <div class="tw:hidden tw:md:flex tw:items-center">
        <v-tabs
          v-model="activeSection"
          bg-color="transparent"
          slider-color="primary"
          density="comfortable"
        >
          <v-tab
            v-for="item in navItems"
            :key="item.id"
            :value="item.id"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </v-tab>
        </v-tabs>

        <ThemeToggle />
      </div>

      <!-- Mobile -->
      <div class="tw:md:hidden tw:flex tw:items-center tw:gap-4">
        <ThemeToggle />

        <v-btn
          variant="text"
          icon="mdi-menu"
          @click="isOpen = true"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";
import Navigation from "@/components/Mobile/Navigation.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import logo from '@/assets/logo.svg';
import colorfulLogo from '@/assets/colorful-logo.svg';

const theme = useTheme();

const isOpen = ref(false);
const activeSection = ref("home");
let sections = ref([]);

const SCROLL_TRIGGER = 0.25;
const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const isDark = computed(() => theme.global.current.value.dark);

const updateSections = () => {
  sections.value = navItems.map(item => {
    const el = document.getElementById(item.id);
    return {
      id: item.id,
      top: el?.offsetTop ?? 0,
      bottom: el ? el.offsetTop + el.offsetHeight : 0
    };
  });
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const scrollContainer = document.querySelector("#homeScroll") || window;
  const navHeight = document.querySelector('.top-nav')?.offsetHeight || 0;
  const targetY = el.offsetTop - navHeight;

  scrollContainer.scrollTo({
    top: targetY < 0 ? 0 : targetY,
    behavior: "smooth"
  });
};

const selectMobile = (id) => {
  scrollToSection(id);
  isOpen.value = false;
};

const handleScroll = () => {
  const scrollContainer = document.querySelector("#homeScroll") || window;
  const scrollY = scrollContainer.scrollTop ?? window.scrollY;
  const windowHeight = window.innerHeight;

  for (let i = navItems.length - 1; i >= 0; i--) {
    const section = document.getElementById(navItems[i].id);
    if (!section) continue;

    const sectionTop = section.offsetTop;

    if (scrollY + windowHeight * SCROLL_TRIGGER >= sectionTop) {
      activeSection.value = navItems[i].id;
      break;
    }
  }
};

onMounted(() => {
  const scrollContainer = document.querySelector("#homeScroll") || window;
  scrollContainer.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", updateSections);
});

onUnmounted(() => {
  const scrollContainer = document.querySelector("#homeScroll") || window;
  scrollContainer.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateSections);
});

</script>
