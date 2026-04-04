"use client"

import Order from "./components/Order";
import type { Transaction } from "@/types/transaction";
import { simulasiApiTransactions } from "@/dumyData";
import useHeaderListOrder from "./hooks/useHeaderListOrder";

const ListOrderPage = () => {
    const results:Transaction[] = simulasiApiTransactions 
    
    // render header
    useHeaderListOrder();

    return (
        <section className="p-4">
            {results.length < 1
                ? <p>Tidak ada transaksi</p>
                : results.map((result) => {
                    return <Order key={result.id} transaction={result} />
                })
            }
        </section>
    )
}

export default ListOrderPage;