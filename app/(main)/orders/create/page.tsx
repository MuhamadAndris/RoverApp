"use client"

import Cart from "../components/Cart";
import ListProducts from "../components/ListProducts";
import { useEffect } from "react";
import { useProduct } from "@/contexts/product/use-product";
import { simulasiApiDataPoroducts } from "@/dumyData";
import useHeaderCreateOrder from "../hooks/useHeaderCreateOrder";

const CreateOrderPage = () => {
    const { resultsSearch, setProducts } = useProduct();

    // Render header
    useHeaderCreateOrder();

    useEffect(() => {
        setProducts(simulasiApiDataPoroducts)
    }, [setProducts])

    return (
        <section className="w-full h-full grid lg:grid-cols-[1fr_auto]">
            <div className="overflow-auto">
                <ListProducts products={resultsSearch} />
            </div>
            <div className="overflow-auto">
                <Cart />
            </div>
        </section>
    )
}

export default CreateOrderPage;