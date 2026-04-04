"use client"

import type { Transaction} from "@/types/transaction";
import { formatDate, formatRupiah } from "@/utils/format";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import OrderItem from "./OrderItem"
import { PATHS } from "@/utils/paths";
import Link from "next/link";

const Order = ({transaction}: {transaction: Transaction}) => {
    const itemLength = transaction.items.length;
    const [showShort, setshowShort] = useState(itemLength > 1);
    const items = showShort ? [transaction.items[0]] : transaction.items;

    const handleShowShort = () => {
        setshowShort(false)
    }

    return (
        <div className="bg-white border border-gray-300 rounded-lg md:rounded-xl mb-2 md:mb-4">
            <header className="flex justify-between py-3 px-5 border-b border-gray-300">
                <h4 className="text-sm">{transaction.id}</h4>
                <h4 className="text-sm">{transaction.createdByUserId}</h4>
            </header>
            <main>
                
                <Link href={PATHS.APP.ORDERS + `/${transaction.id}`} className="block p-4">
                    {items.map((item) => {
                        return <OrderItem key={item.id} item={item} />
                    })}
                </Link>

                {showShort &&
                    <div className="text-xs">
                        <button
                            title={`Tampilkan ${itemLength - 1} produk lainnya`}
                            className="flex justify-center items-center mx-auto cursor-pointer text-gray-600 hover:text-gray-900 text-xs" 
                            onClick={handleShowShort}
                        >
                            <ChevronDown className="mr-2 w-5 h-5"/>
                            Tampilkan {itemLength - 1} produk lainnya
                        </button>
                    </div>
                }
            </main>
            <footer className="flex justify-between items-center py-3 px-5">
                <p className="text-sm text-gray-500">{formatDate(transaction.createdAt)}</p>
                <div className="text-right">
                    <span className="text-sm text-gray-700 mr-2">Total {transaction.totalQty} produk:</span>
                    <span className="text-base font-bold">{formatRupiah(transaction.totalAmount)}</span>
                </div>
            </footer>
        </div>
    )
}

export default Order;