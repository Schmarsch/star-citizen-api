export default eventHandler(async (event) => {
    const headers: HeadersInit = {
        api_key: process.env.API_KEY as string,
    }

    const ships: ship[] = await fetch(
        "https://portal.uexcorp.space/api/ships/",
        {
            headers,
        }
    )
        .then((res) => res.json())
        .then((res) => {
            const data = res.data
            // parse photos of every ship in data
            data.forEach((ship: ship) => {
                ship.photos = JSON.parse(ship.photos as unknown as string)
            })
            return data
        })

    return {
        ships: ships,
    }
})
