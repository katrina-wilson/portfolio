<template>
    <section
      id="home"
      class="tw:min-h-screen tw:max-h-fit tw:mb-50 tw:flex tw:flex-col tw:items-center tw:justify-center tw:bg-gradient-to-br tw:from-background tw:via-muted/30 tw:to-background"
    >
      <div class="tw:mx-auto tw:px-6 tw:text-center tw:z-10">
          <div class="tw:w-full tw:text-6xl tw:md:text-8xl tw:font-bold tw:text-foreground tw:mb-6 tw:leading-18">
              Hey, I'm Katrina!
          </div>

          <div class="tw:inline-flex tw:items-center tw:gap-3 tw:text-xl tw:md:text-2xl">
              <span class="tw:text-muted-foreground">
                  I am a
              </span>
              <span class="tw:font-medium tw:min-w-fit tw:text-foreground code-font">
                  {{ displayRole }}
                  <span class="tw:animate-pulse">|</span>
              </span>
          </div>
      </div>
    </section>
</template>
  
<script setup>
import { ref, watch} from 'vue';
import { roles } from '@/seed.js';

const displayRole = ref('');
const currentRoleIndex = ref(0);
const isDeleting = ref(false);

watch(([displayRole, isDeleting, currentRoleIndex]), () => {
    const currentRole = roles[currentRoleIndex.value];
    const typingSpeed = isDeleting.value ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting.value) {
        if (displayRole.value.length < currentRole.length) {
          displayRole.value = currentRole.slice(0, displayRole.value.length + 1);
        } else {
          setTimeout(() => {
            isDeleting.value = true;
          }, pauseBeforeDelete);
        }
      } else {
        if (displayRole.value.length > 0) {
          displayRole.value = displayRole.value.slice(0, -1);
        } else {
          isDeleting.value = false;
          currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length;
          setTimeout(() => {}, pauseBeforeType);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  },
  { immediate: true }
);
</script>