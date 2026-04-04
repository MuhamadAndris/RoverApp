"use client"

import HeaderReport from "./components/HeaderReport"
import { useEffect } from "react"
import { useNavbar } from "@/contexts/navbar/use-navbar"
import TableHead from "./components/TableHead"
import TableBody from "./components/TableBody"

const ReportPage = () => {
    const { setNavbar } = useNavbar()

    useEffect(() => {
        setNavbar(<HeaderReport />)
    }, [setNavbar])

    return (
        <section className="
            max-w-full overflow-x-auto
            bg-white border
            border-gray-200
            m-2 md:m-4 
            text-sm p-4 md:p-8
            rounded-sm md:rounded-xl
        ">
            <h3 className="text-center">Laporan Penjualan</h3>
                
            <p className="text-right my-5">1-31 Maret 2026</p>
            
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <TableHead />
                    <TableBody />
                </table>
            </div>

        </section>
    )
}

export default ReportPage;