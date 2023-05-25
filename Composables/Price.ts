export const dotPrice = (price: number) =>{
    return price.toLocaleString("en-US", {
        maximumFractionDigits: 2,
    })
}