"use client"

import { simulasiApiTransactions } from "@/dumyData";
import DetailOrder from "../components/DetailOrder";
import useHeaderDetailOrder from "../hooks/useHeaderDetailOrder";

const DetailOrderPage = () => {

    // render header
    useHeaderDetailOrder()

    // simulasi ambil detail order dari api denan parameter
    const result = simulasiApiTransactions[1]

    return <DetailOrder transaction={result} />
}

export default DetailOrderPage;