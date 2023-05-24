type ship = {
    brochure_url: string
    buy_at: Shop[]
    code: string
    crew: string
    date_added: number
    date_modified: number
    flyable_since: string
    hotsite_url: string
    implemented: number
    loaner: any
    manufacturer: string
    mining: string
    name: string
    photos: string[]
    price: number
    price_pkg: number
    price_warbond: number
    rent_at: Shop[]
    role: string
    scu: number
    sell_active: number
    sell_active_pkg: number
    sell_active_warbond: number
    serie: string
    showdown_winner: number
    stealth: string
    stock_qt_speed: number
    store_url: string
    video_url: string
}

type Shop = {
    city: string
    city_name: string
    date_added: number
    date_modified: number
    planet: string
    planet_name: string
    price: number
    satellite: string
    satellite_name: string
    store: string
    store_name: string
    system: string
    system_name: string
    tradeport: string
    tradeport_name: string
}

interface City {
    system: string
    planet: string
    code: string
    name: string
    available: number
    date_added: number
    date_modified: number
}
