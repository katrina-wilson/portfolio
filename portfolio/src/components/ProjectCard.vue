<template>
  <div class="project-card tw:group tw:cursor-pointer">
    <v-card
      class="mx-auto pa-1 tw:border tw:border-muted-foreground/30 tw:flex tw:flex-col"
      max-width="600"
      min-height="235"
      rounded="xl"
      outlined
      elevation="0"
      style="height: 100%; width: 100%;"
    >
      <v-card-title class="tw-pb-2 tw:font-bold">
        {{ props.project.title }}
      </v-card-title>
      <v-card-text class="tw:pb-2 tw:flex-1 tw:flex tw:flex-col">
        <div class="tw:pb-3 tw:text-gray-500 tw:flex-1">
          <p class="tw:h-full tw:flex tw:items-center">{{ props.project.description }}</p>
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
      
      <v-card-actions class="tw:mt-auto tw:flex tw:flex-col">
        <v-divider class="tw:w-full tw:mb-2" />
        <div class="tw:flex tw:gap-2 tw:justify-end tw:w-full">
          <div>
            <v-btn
              prepend-icon="mdi-open-in-new"
              :href="props.project?.link"
              target="_blank"
              text="Preview"
              :disabled="!props.project?.link"
            />
            <v-tooltip
              v-if="!props.project?.link"
              activator="parent"
              text="Coming Soon!"
            />
          </div>
          <div>
            <v-btn
              prepend-icon="mdi-gitlab"
              :href="props.project?.gitlab"
              target="_blank"
              text="View Code"
              :disabled="!props.project?.gitlab"
            />
            <v-tooltip
              v-if="!props.project?.gitlab"
              activator="parent"
              text="Coming Soon!"
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

<style scoped>
.project-card {
  height: 100%;
  width: 100%;
}
</style>