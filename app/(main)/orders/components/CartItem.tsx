"use client"

import { Luggage, Plus, Minus, Pencil, Trash } from "lucide-react"
import { ButtonIcon } from "@/components/ui/Button"
import { formatRupiah } from "@/utils/format"
import { useState } from "react"
import { EditPriceModal } from "@/components/modals/EditPrice"
import type { TransactionItem } from "@/types/transaction"
import renderPromo from "@/utils/renderPromo"   

type ModalType = "edit" | "delete" | "view" | null

interface Props {
    item: TransactionItem
    decreaseQty: (id:string) => void
    addQty: (item: TransactionItem) => void
    removeItem: (id:string) => void
}

const CartItem = ({
    item,
    decreaseQty,
    addQty,
    removeItem
}:Props) => {
    const [ activeModal, setActiveModal ] = useState<ModalType>(null)

    return (
        <>
            <div className="border-b border-gray-200 mb-4">
                <div className="grid grid-cols-[auto_1fr_auto]">
                    <div className="h-15 w-15 mr-2 bg-gray-200 rounded-lg p-1 overflow-hidden"><Luggage className="w-full h-full max-w-full max-h-full" /></div>
                    <div>
                        <h4 className="text-sm">{item.name}</h4>
                        <p className="text-xs">{item.color} {item.size && " • " + item.size}</p>
                        <h4 className="text-sm flex items-center">
                            {formatRupiah(item.finalPrice)}
                            <span className="text-[9px] text-white bg-red-700 px-1 rounded-sm ml-1">{renderPromo(item.promo)}</span>
                        </h4>
                    </div>
                    <div className="flex flex-col">
                        <ButtonIcon title="ubah harga" lucideIcon={Pencil} className="w-7.5 h-7.5 p-2" onClick={() => setActiveModal("edit")} />
                        <ButtonIcon title="hapus item" lucideIcon={Trash} className="w-7.5 h-7.5 p-2" onClick={() => removeItem(item.id)} />
                    </div>
                </div>
                <div className="flex items-center my-1">
                    <ButtonIcon title="kurangi -1" className="w-7.5 h-7.5 p-2" lucideIcon={Minus} onClick={() => decreaseQty(item.id)} />
                    <span className="mx-2 text-xs">{item.qty}</span>
                    <ButtonIcon title="tambah +1" className="w-7.5 h-7.5 p-2" lucideIcon={Plus} onClick={() => {addQty(item)}} />
                </div>
            </div>

            <EditPriceModal
                isOpen={activeModal === "edit"}
                onClose={() => setActiveModal(null)}
                item={item}
            />
        </>
    )
}

export default CartItem;