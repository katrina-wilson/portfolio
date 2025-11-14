<template>
    <div class="tw:fixed tw:top-0 tw:left-0 tw:right-0 tw:z-50 tw:bg-background/80 tw:backdrop-blur-md tw:border-b tw:border-border">
      <div class="tw:mx-auto tw:px-6 tw:py-4 tw:flex tw:items-center tw:justify-between">
        
        <button
          @click="scrollToSection('home')"
          class="tw:text-xl tw:font-semibold"
        >
          K
        </button>
  
        <!-- Desktop Navigation -->
        <div class="tw:hidden tw:md:flex tw:items-center tw:gap-8">
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
            icon
            variant="text"
            @click="isOpen = true"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>
  
      <!-- Mobile Drawer -->
      <v-navigation-drawer
        v-model="isOpen"
        temporary
        location="right"
      >
        <div class="tw:p-4 tw:space-y-2">
          <v-btn
            v-for="item in navItems"
            :key="item.id"
            variant="text"
            class="w-full justify-start"
            :color="activeSection === item.id ? 'primary' : undefined"
            @click="selectMobile(item.id)"
          >
            {{ item.label }}
          </v-btn>
        </div>
      </v-navigation-drawer>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

const isOpen = ref(false);
const activeSection = ref("home");

const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];


// Smooth scroll to section
const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
};


// Click from mobile closes drawer
const selectMobile = (id) => {
    scrollToSection(id);
    isOpen.value = false;
};


// Scroll spy
onMounted(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY + 100;

        for (let i = navItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItems[i].id);
            if (section && section.offsetTop <= scrollY) {
                activeSection.value = navItems[i].id;
                break;
            }
        }
    };
    window.addEventListener("scroll", handleScroll);
    onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});
</script>
  