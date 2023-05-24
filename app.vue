<template>
    <div>
        <Navbar />
        <div class="pb-20 pt-20">
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
