const TableHead = () => {
    return (
        <thead className="border-b border-gray-100">
            <tr className="h-10 text-left">
                <th className="p-2">Tanggal</th>
                <th className="p-2 whitespace-nowrap">No Transaksi</th>
                <th className="p-2">Keterangan</th>
                <th className="p-2">karyawan</th>
                <th className="p-2 text-center">Promo</th>
                <th className="p-2 text-right whitespace-nowrap">Harga</th>
                <th className="text-center p-2">Jumlah</th>
                <th className="p-2 text-right whitespace-nowrap">Sub Total</th>
                <th></th>
            </tr>
        </thead>
    )
}

export default TableHead;