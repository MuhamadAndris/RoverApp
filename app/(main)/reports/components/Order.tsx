import type { TransactionReport } from "@/types/report"
import { formatRupiah } from "@/utils/format"
import renderPromo from "@/utils/renderPromo"

const Order = ({transaction}:{transaction: TransactionReport}) => {
    return (
        transaction.items.slice(1).map((item) => 
            <tr
                className="text-sm hover:bg-gray-100">
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                    <div className="flex gap-3">
                        <span>{item.brand}</span>
                        <span>{item.productId}</span>
                        {item.color && <span>{item.color }</span>}
                        {item.size && <span>{item.size }</span>}
                    </div>
                </td>

                {/* Saler / Agent */}
                <td className="p-2">{transaction.saler}</td>

                {/* Promo */}
                <td className="p-2 text-center text-xs text-gray-700 whitespace-nowrap">{renderPromo(item.promo)}</td>

                <td className="p-2 text-center ">{item.qty}</td>
                <td className="p-2 text-right">{formatRupiah(item.finalPrice)}</td>
                <td className="p-2 text-right">{formatRupiah(item.total)}</td>
                <td></td>
            </tr>
        )
    )
}

export default Order