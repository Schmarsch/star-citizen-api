<template>
    <div>
        <select
            class="select"
            v-model="colorMode.value"
            aria-label="Select color mode"
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style lang="postcss" scoped>
.select {
    @apply block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500;
}
</style>
