<template>
  <v-app>
    <div class="tw:flex tw:flex-col tw:overflow-y-auto tw:h-screen tw:w-screen">
      <RouterView
        v-slot="{ Component }"
      >
        <VSlideXTransition mode="out-in">
          <component :is="Component" />
        </VSlideXTransition>
      </RouterView>
    </div>
  </v-app>
</template>
