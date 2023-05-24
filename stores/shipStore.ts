import { defineStore } from "pinia"
import { deserialize, serialize } from "v8"

export const useShipStore = defineStore("ships", {
    state: () => ({
        ships: [] as ship[],
    }),
    actions: {
        async fetchShips() {
            const { data } = await useFetch("/api/ships")
            this.ships = data.value?.ships as ship[]
        },
    },
})
