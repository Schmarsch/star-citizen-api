<template>
    <div>
        <Navbar />
        <div class="pt-16">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { useShipStore } from "./stores/shipStore"

const shipStore = useShipStore()

onMounted(() => {
    shipStore.fetchShips()
})
</script>

<style lang="postcss" scoped>
</style>
