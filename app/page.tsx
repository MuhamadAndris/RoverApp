import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>ini adalah halaman utama</h1>
      <Link href="/report">ke halaman report</Link>
    </>
  )
}
