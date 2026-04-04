import type { Product } from "@/types/product"
import { ProductCard } from "./ProductCard"

const ListProducts = ({ products }: { products: Product[] }) => {

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4 md:pb-8 ">
            {products.length < 1
                ? <p>Produk tidak ditemukan</p>
                : products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default ListProducts;