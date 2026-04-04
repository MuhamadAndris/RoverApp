export type BasePromo = {
    type: "percentage" | "special_price" | "buy_x_get_y" | "normal_price"
    value: number
    label?: string
}

export interface Promo extends BasePromo {
    id: number
}
