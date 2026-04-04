import type { BasePromo } from "@/types/promo";

const renderPromo = (promo: BasePromo) => {
    switch (promo.type) {
        case "percentage":
            return `${promo.value}%`
        case "special_price":
            return promo.label
        case "buy_x_get_y":
            return promo.label
        default:
            return "";
    }
}

export default renderPromo;