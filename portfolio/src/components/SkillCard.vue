<template>
    <v-card 
        v-if="props.skill"
        elevation="0"
        rounded="xl"
        class="tw:border tw:border-muted-foreground/30 tw:h-full tw:p-4 tw:md:min-w-full"
    >
        <v-card-title>
            <div class="tw:flex tw:w-full tw:flex-col tw:md:flex-row tw:md:justify-between tw:md:items-center tw:gap-2">
                <div class="tw:w-full tw:font-semibold">
                    {{ props.skill?.name }}
                </div>

                <div class="tw:min-w-fit tw:pb-3">
                    <div class="tw:flex tw:items-center tw:gap-1">
                        <span class="tw:font-semibold tw:text-base tw:text-muted-foreground tw:pr-1">
                            Skill level:
                        </span>
                        <span 
                            v-for="n in 4" 
                            :key="n" 
                            class="tw:w-3 tw:h-3 tw:rounded-full" 
                            :class="n <= skillLevelNumber(props.skill.level) ? 'tw:bg-primary' : 'tw:bg-muted-foreground/30'"
                        />
                    </div>
                </div>
            </div>
        </v-card-title>

        <v-card-text>
            <div class="tw:mb-4 tw:space-y-2">
                <p>
                    I spend about <b class="tw:text-lg">{{ props.skill?.value }}%</b> of my time working on {{ props?.skill?.name }}.
                </p>
                <p>{{ props.skill?.description }}</p>
            </div>

            <div class="tw:flex tw:gap-2 tw:flex-wrap">
                <v-chip
                    v-for="(tag, index) in props.skill.tags"
                    :key="index"
                    class="tw:text-sm"
                    outlined
                    small
                    label
                    :color="toSnakeCase(props.skill.name)"
                    :text="tag"
                />
            </div>

        </v-card-text>
    </v-card>
</template>

<script setup>
import { toSnakeCase } from "@/utils/formatText";
import { defineProps } from "vue";

const props = defineProps({
    skill: {
        type: Object,
        default: () => {},
    }
});

const skillLevelNumber = (level) => {
    switch(level) {
        case 'Novice':
            return 1;
        case 'Intermediate':
            return 2;
        case 'Advanced':
            return 3;
        case 'Expert':
            return 4;
        default:
            return 0;
    }
};
</script>