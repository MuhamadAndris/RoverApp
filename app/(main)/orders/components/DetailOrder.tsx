"use client"

import { formatRupiah } from "@/utils/format";
import OrderItem from "./OrderItem"
import type { Transaction } from "@/types/transaction";
import Button from "@/components/ui/Button";
import CartItem from "./CartItem";
import { cn } from "@/libs/tailwind";
import { useState } from "react";

interface DetailOrderProps {
    transaction: Transaction
}

const DetailOrder = ({ transaction }: DetailOrderProps) => {
    const [ isEdit, setIsEdit ] = useState(false)

    const handleEdit = () => {
        if ( !isEdit ) {
            setIsEdit((prev) => !prev)
            return
        }

        // save prosess......
    }

    const handleCancelEdit = () => {
        setIsEdit((prev) => !prev)
    }

    const handleAddQty = () => {

    }

    const handleDecraseQty = () => {

    }

    const hanldeRemoveItem = () => {

    }

    return (
        <div className="bg-white border border-gray-300 rounded-lg md:rounded-xl m-2 md:m-4 pb-3 text-sm">
            
            {/* info */}
            <div className=" text-gray-700 px-5 p-5 border-b border-gray-200">

                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Nomor Transaksi</span>
                    <span>TRX-260101-001-1</span>
                </div>

                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Tanggal</span>
                    <span>05-03-2026</span>
                </div>
                
                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Karyawan</span>
                    <span>Andris</span>
                </div>
                
            </div>

            {/* items */}
            <main className={cn("py-3 px-5", !isEdit && "")}>
                {transaction.items.map((item) =>
                    isEdit
                    ?   <CartItem
                            key={item.id}
                            addQty={handleAddQty}
                            decreaseQty={handleDecraseQty}
                            removeItem={hanldeRemoveItem}
                            item={item}
                        />
                    :   <OrderItem
                            key={item.id}
                            item={item}
                        />
                )}
            </main>
            
            {/* Total */}
            <div className="pb-4 px-5 text-gray-700">
                <p className="line-through text-right text-xs">5.195.000</p>
                <div className="text-right text-sm flex justify-end items-center">
                    <span className="mr-2 text-xs">Total {transaction.totalQty} produk:</span>
                    <h4 className="text-sm font-bold">{formatRupiah(transaction.totalAmount)}</h4>
                </div>
            </div>

            {/* more info */}
            <div className=" text-gray-700 px-5 pt-3 border-t border-gray-200">

                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Cabang</span>
                    <span>JKT-3</span>
                </div>
                
                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Toko</span>
                    <span>0E1 Aeon Sentul</span>
                </div>
                
                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Super Vesor</span>
                    <span>Lilis | 2001002</span>
                </div>
                
                <div className="flex justify-between hover:text-gray-950 items-center py-1">
                    <span>Dibuat Oleh</span>
                    <span>Andris | 2212010</span>
                </div>
                
                <div className="flex justify-between  hover:text-gray-950 items-center py-1">
                    <span>Waktu Pemesanan</span>
                    <span>05-03-2026 17:30</span>
                </div>
                
                <div className="flex justify-between  hover:text-gray-950 items-center py-1">
                    <span>Waktu Perubahan</span>
                    <span>-</span>
                </div>
                
            </div>

            {/* action */}
            <div className="flex gap-2 justify-end py-3 px-5">
                { !isEdit
                    ? <Button label="Hapus" className="w-20 text-xs bg-transparent border border-gray-200 text-black hover:bg-gray-100" />
                    : <Button label="batal" className="w-20 text-xs bg-transparent border border-gray-200 text-black hover:bg-gray-100" onClick={handleCancelEdit} />
                }

                <Button label={!isEdit ? "Ubah " : "Simpan"} className="w-20 text-xs" onClick={handleEdit} />
            </div>
        </div>
    )
}

export default DetailOrder;