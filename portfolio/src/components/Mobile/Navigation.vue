<template>
    <Teleport to="body">
        <v-navigation-drawer
            v-model="isMobileOpen"
            temporary
            location="right"
            :teleport="true"
        >
            <div 
                v-if="props.navItems" 
                class="tw:flex tw:flex-col tw:p-4 tw:space-y-2"
            >
                <v-btn
                    v-for="item in props.navItems"
                    :key="item.id"
                    variant="text"
                    class="w-full justify-start"
                    :color="activeSection === item.id ? 'primary' : undefined"
                    @click="emit('selectMobile', item.id)"
                >
                    {{ item.label }}
                </v-btn>
            </div>
        </v-navigation-drawer>
    </Teleport>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from "vue";  

const props = defineProps({
    navItems: {
        type: Array,
        default: () => [],
    },
    activeSection: String,
    isOpen: Boolean,
});

const emit = defineEmits(['selectMobile', 'mobileDrawerToggle']);

const isMobileOpen = ref(props.isOpen);

watch(() => props.isOpen, (v) => {
    isMobileOpen.value = v;
});

watch(() => isMobileOpen.value, () => {
    emit('mobileDrawerToggle', isMobileOpen.value);
});
</script>