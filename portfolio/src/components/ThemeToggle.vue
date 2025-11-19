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
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
};
</script>
