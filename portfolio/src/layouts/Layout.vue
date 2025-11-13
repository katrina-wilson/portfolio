<template>
    <div class="tw:flex tw:flex-col tw:h-full tw:w-full">
        <main class="tw:flex tw:flex-grow tw:w-full tw:overflow-y-auto">
            <RouterView
                v-slot="{ Component }"
            >
                <v-fade-transition mode="out-in">
                    <component :is="Component"/>
                </v-fade-transition>
            </RouterView>
        </main>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>