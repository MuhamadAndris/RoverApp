"use client"

import { cn } from "@/libs/tailwind";
import React, { useState } from "react";
import type { TransactionReportItem } from "@/types/report";
import { formatDate, formatRupiah } from "@/utils/format";
import renderPromo from "@/utils/renderPromo";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

type Props = {
    item: TransactionReportItem
    date: Date | null
    transactionId: string
    saler: string
}

const TableRow = ({
    item,
    date,
    transactionId,
    saler
}:Props) => {
    const [ select, setSelect ] = useState(false);

    const handleNavigate = () => {
        if (!select) {
            setSelect(true)
            return
        }
        
        redirect(`${PATHS.APP.ORDERS}/${transactionId}`)
    }

    return (
        <tr
            role="button"
            tabIndex={0}
            className={cn(
                "text-sm",
                "border-t border-gray-300",
                "hover:bg-gray-100",
                select && "bg-gray-100 hover:cursor-pointer"
            )}

            onClick={handleNavigate}
            onBlur={() => setSelect(false)}
        >
            {/* date */}
            <td className="p-2 whitespace-nowrap">{date && formatDate(date)}</td>

            {/* Transaction ID */}
            <td className="p-2 whitespace-nowrap">{transactionId}</td>

            {/* Description */}
            <td className="p-2 whitespace-nowrap">
                <div className="flex gap-2">
                    <span>{item.productId}</span>
                    <span>{item.brand.toLowerCase()}</span>
                    <span>{item.name.toLowerCase()}</span>
                    {item.color && <span>{item.color.toLowerCase()}</span>}
                    {item.size && <span>{item.size.toLowerCase()}</span>}
                </div>
            </td>

            {/* Saler / Agent */}
            <td className="p-2">{saler}</td>

            {/* Promo */}
            <td className="p-2 text-center text-xs text-gray-700 whitespace-nowrap">{renderPromo(item.promo)}</td>

            {/* Price */}
            <td className="p-2 text-right">{item.qty > 0 && formatRupiah(item.finalPrice)}</td>
            
            {/* Qty */}
            <td className="p-2 text-center ">{item.qty}</td>

            {/* sub total */}
            <td className="p-2 text-right">{formatRupiah(item.total)}</td>

        </tr>
    )
}

export default React.memo(TableRow);