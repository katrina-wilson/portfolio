<template>
  <v-card
    class="mx-auto"
    max-width="344"
    rounded="lg"
    outlined
    hover
  >
    <v-card-item>
      <v-card-title>
        {{ props.project.title }}
      </v-card-title>

      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  }
});

</script>