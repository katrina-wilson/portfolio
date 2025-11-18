<template>
  <v-switch
    v-model="isDark"
    inset
    hide-details
    @change="toggleTheme"
  />
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const isDark = ref(theme.global.current.dark);

const toggleTheme = () => {
  theme.global.name.dark = !theme.global.name.dark;
};
</script>
