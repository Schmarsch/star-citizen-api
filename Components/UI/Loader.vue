<template>
    <template v-if="loading">
        <div class="loader">
            <div class="loader__spinner"></div>
        </div>
    </template>
    <template v-else>
        <slot></slot>
    </template>
</template>

<script setup lang="ts">
const props = defineProps({
    loading: {
        type: Boolean,
        required: true,
    },
})
</script>

<style lang="postcss" scoped>
.loader {
    @apply flex flex-col items-center justify-center h-[80vh] w-full;
}

.loader__spinner {
    @apply w-16 h-16 border-4 border-gray-300 rounded-full animate-spin;
    border-top-color: #000;
}
</style>
