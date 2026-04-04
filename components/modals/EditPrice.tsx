import Input from "@/components/ui/Input";
import { BaseModal } from "../ui/BaseModal";
import { formatRupiah } from "@/utils/format";
import Button from "../ui/Button";
import { useCart } from "@/contexts/cart/use-cart";
import { useEffect, useState, type ChangeEvent } from "react";
import type { TransactionItem } from "@/types/transaction";

interface Props {
    isOpen: boolean
    onClose: () => void
    item: TransactionItem
}

export const EditPriceModal = ({
    isOpen,
    onClose,
    item
}:Props) => {
    const { editPrice } = useCart()
    const [price, setPrice] = useState<number>(item.finalPrice)
    const [ displayPrice, setDisplayPrice ] = useState<string>(
        formatRupiah(item.finalPrice)
    )

    useEffect(() => {
        setPrice(item.finalPrice)
        setDisplayPrice(formatRupiah(item.finalPrice))
    }, [item])

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const numeric = e.target.value.replace(/\D/g, "")
        const numberValue = Number(numeric)

        setPrice(numberValue)
        setDisplayPrice(formatRupiah(numberValue))
    }
    
    const handleEditPrice = () => {
        editPrice(item.id, price);
        onClose()
    }

    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <h2>Ubah Harga</h2>
            <Input autoFocus label="Harga Baru" type="text" id={item.id} className="mt-4"
                onChange={handleChange}
                value={displayPrice}
            />
            <div className="flex gap-2 mt-4">
                <Button title="simpan" label="Simpan" type="button" onClick={handleEditPrice}/>
                <Button title="batal" label="Batal" type="button" className="bg-gray-100 text-black hover:bg-gray-200 border border-gray-400" onClick={onClose} />
            </div>
        </BaseModal>
    )
}