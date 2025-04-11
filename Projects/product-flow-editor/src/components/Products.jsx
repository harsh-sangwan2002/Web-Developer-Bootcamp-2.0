import { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://dummyjson.com/products")
                const data = await res.json()
                const products = data.products
                setProducts(products)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    return (
        <>
            <h1 className="page-title text-center m-5">Our Products</h1>
            <div className="products-container flex justify-center items-center flex-wrap gap-4">
                {products.map((product, idx) => (
                    <Product
                        key={product.id || idx}
                        title={product.title}
                        tags={product.tags}
                        src={product.images[0]}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </>
    )
}

export default Products
