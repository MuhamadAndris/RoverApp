import TableRow from "./TableRow";
import { simulasiApiLaporanTransaksi } from "@/dumyData";

const TableBody = () => {
    const results = simulasiApiLaporanTransaksi;

    const rows = results.flatMap((report) =>
        report.transactions.flatMap((transaction) => 
            transaction.items.flatMap((item) => ({
                date: report.date,
                transactionId: transaction.id,
                saler: transaction.saler,
                item
            }))
        )
    )

    return (
        <tbody>
            <>
                {/* per-date */}
                {rows.length < 1 ? (
                    <tr>
                        <td colSpan={8} className="p-2 text-gray-600 text-center">tidak ada transaksi</td>
                    </tr>
                ) : (
                    rows.map((row) =>
                        <TableRow
                            key={row.item.id}
                            transactionId={row.transactionId}
                            date={row.date}
                            saler={row.saler}
                            item={row.item}
                        />
                    )
                )}

                <tr className="border-t border-gray-300">
                    <td colSpan={6}></td>
                    <td className="p-2 text-center font-bold">20</td>
                    <td className="p-2 text-right font-bold">7.445.545</td>
                </tr>
            </>
        </tbody>
    )
}

export default TableBody;