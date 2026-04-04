"use client"

import type { TransactionItem } from "@/types/transaction";
import { formatRupiah } from "@/utils/format";
import renderPromo from "@/utils/renderPromo";
import { Luggage } from "lucide-react";

const OrderItem = ({item}:{item: TransactionItem}) => {
    const promo = renderPromo(item.promo)
    return (
        // container
        <div className="grid grid-cols-[auto_auto_1fr] border-b border-gray-200 py-4">
            {/* image */}
            <div className="w-15 h-15 mr-2">
                <Luggage className="w-full h-full" />
            </div>

            {/* info */}
            <div>
                <h4 className="text-sm">{item.name}</h4>
                <p className="text-sm text-gray-700">{item.productId} • {item.color} • {item.size}</p>
                <div>
                    { promo &&
                        <span className="bg-red-700 px-1 text-white text-xs rounded-sm">
                            { promo }
                        </span>
                    }
                </div>
            </div>

            {/* pirce */}
            <div className="text-right">
                <p className="line-through text-xs text-gray-500">{formatRupiah(item.normalPrice)}</p>
                <h4 className="text-sm">{formatRupiah(item.finalPrice)}</h4>
                <p className="text-xs text-gray-700">x{item.qty}</p>
            </div>
        </div>
    )
}

export default OrderItem;