<template>
  <div class="project-card tw:group tw:cursor-pointer">
    <v-card
      class="mx-auto pa-0 tw:border tw:border-muted-foreground/30"
      max-width="600"
      min-height="235"
      max-height="235"
      rounded="xl"
      outlined
      elevation="0"
    >
      <div class="tw:flex tw:flex-col tw:h-full tw:p-2" style="min-height: inherit !important;">
        <v-card-title class="tw-pb-2">
          {{ props.project.title }}
        </v-card-title>
        <v-card-text class="tw:pb-2 tw:h-full tw:flex tw:flex-col tw:flex-1">
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
          <div class="tw:flex tw:flex-col tw:w-full tw:mt-auto">
            <v-divider/>
            <div class="tw:flex tw:gap-2 tw:justify-end tw:w-full tw:pt-2">
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
          </div>
        </v-card-actions>

      </div>
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