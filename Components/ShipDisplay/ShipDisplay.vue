<template>
    <UILoader :loading="!ships.length">
        <div class="p-3">
            <div>
                <InputsInput
                    label="Search for ship"
                    v-model="filter"
                />
            </div>
            <div class="flex flex-wrap flex-row justify-center">
                <template v-for="ship in filteredShips">
                    <ShipDisplayCard :ship="ship" />
                </template>
            </div>
        </div>
    </UILoader>
</template>

<script setup lang="ts">
import { useShipStore } from "~/stores/shipStore"

const shipStore = useShipStore()
const ships = computed(() => shipStore.ships)

const filter = ref("")

const filteredShips = computed(() => {
    return ships.value.filter((ship) => {
        return ship.name.toLowerCase().includes(filter.value.toLowerCase())
    })
})
</script>

<style lang="postcss" scoped>
.text-input {
    @apply rounded-lg border-2 border-slate-300 p-2 w-full;
}
</style>
