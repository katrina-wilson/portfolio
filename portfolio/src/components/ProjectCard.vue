<template>
  <div class="project-card tw:group tw:cursor-pointer">
    <v-card
      class="mx-auto"
      max-width="600"
      min-height="225"
      max-height="225"
      rounded="xl"
      outlined
      hover
      :title="props.project.title"
      
    >
      <v-card-text class="tw:pb-2 tw:h-full">
        <div class="tw:pb-3 tw:text-gray-500">
          <p>{{ props.project.description }}</p>
        </div>
        <div class="tw:flex tw:gap-2 tw:flex-wrap">
          <v-chip
            v-for="(tag, index) in props.project.tags"
            :key="index"
            class="tw:text-sm"
            outlined
            small
            label
            :color="toCamelCase(tag)"
            :text="tag"
          />
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="tw:flex tw:flex-col tw:w-full">
          <v-divider/>
          <div class="tw:flex tw:gap-2 tw:justify-end tw:w-full tw:pt-2">
            <v-btn
              prepend-icon="mdi-open-in-new"
              :href="props.project.link"
              target="_blank"
              text="Preview"
            />
            <v-btn
              prepend-icon="mdi-gitlab"
              :href="props.project.github"
              target="_blank"
              text="View Code"
            />
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { toCamelCase } from "@/utils/formatText";
import { defineProps } from "vue";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  }
});

</script>