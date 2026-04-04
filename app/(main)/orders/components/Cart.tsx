"use client"

import { useCart } from "@/contexts/cart/use-cart"
import { cn } from "@/libs/tailwind";
import { Dropdown, SelectDate } from "@/components/ui/Input";
import CartItem from "./CartItem";
import Button from "@/components/ui/Button";
import { formatRupiah } from "@/utils/format";
import { useState } from "react";

const Cart = () => {
    const { isCartOpen, closeCart, cartItems, totalQty, totalValue } = useCart();
    const [ date, setDate ] = useState<string>( new Date().toISOString().split("T")[0])
    const { addToCart, decreaseQty, removeFromCart } = useCart()
    
    return (
        <>  
            {/* container black */}
            <div className={cn(
                "hidden row-span-2 h-full z-10 w-full lg:w-100",
                isCartOpen && "block fixed lg:relative top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.3)] lg:block",
            )}
                onClick={(e) => {
                    if(e.target === e.currentTarget ) closeCart();
                }}
            >
                {/* container */}
                <div className={cn(
                    "ml-auto w-full max-w-100 h-full py-3 px-5 lg:pt-0 lg:pb-3",
                    "lg:relative",
                    "grid grid-rows-[1fr_auto]",
                    
                    isCartOpen &&
                    "bg-white h-full"
                )}>

                    {/* item */}
                    <div className="overflow-auto scrollbar-small pr-2">
                        <h4 className="my-3">0E1-AEON SENTUL</h4> 
                        <Dropdown id="agent" name="agent" options={["Andris","Rijal"]} label="Penjual" />
                        <SelectDate id="date" name="date" label="Tanggal" value={date} className="mb-4" onChange={
                            (e) => setDate(e.target.value)
                        } />
                        {cartItems.map((item) =>
                            <CartItem
                                key={item.id}
                                addQty={addToCart}
                                decreaseQty={decreaseQty}
                                removeItem={removeFromCart}
                                item={item}
                            />
                        )}
                    </div>

                    {/* total */}
                    <div>
                        <div className="flex justify-between my-3">
                            <h4 className="font-black">Total</h4>
                            <h4 className="font-black">{formatRupiah(totalValue)}/{totalQty}</h4>
                        </div>
                        <Button className="text-sm" label="Simpan" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;