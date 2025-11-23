<template>
  <div class="project-card tw:group tw:cursor-pointer tw:h-full tw:w-full">
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
        <div class="tw:pb-3 tw:text-muted-foreground tw:flex-1">
          <p class="tw:h-full tw:flex tw:items-center">
            {{ props.project.description }}
          </p>
        </div>
        <div class="tw:flex tw:gap-2 tw:flex-wrap">
          <v-chip
            v-for="(tag, index) in props.project.tags"
            :key="index"
            class="tw:text-sm"
            outlined
            small
            label
            :color="getSkillCategorySnakeCase(tag)"
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
              :text="props.project.title === 'Portfolio' ? `You're already here!` : 'Coming Soon!'"
            />
          </div>
          <div>
            <v-btn
              prepend-icon="mdi-github"
              :href="props.project?.github"
              target="_blank"
              text="View Code"
              :disabled="!props.project?.github"
            />
            <v-tooltip
              v-if="!props.project?.github"
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
import { toSnakeCase } from "@/utils/formatText";
import { defineProps } from "vue";
import { skills } from "@/seed";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  }
});

const getSkillCategorySnakeCase = (tag) => {
  let skillName = null;
  for (const skill of skills) {
    if (skill.tags.includes(tag)) {
      skillName = skill.name;
    }
  }
  if (skillName) {
    return toSnakeCase(skillName);
  }
  return 'brain';
};
</script>