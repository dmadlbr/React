import { getProducts } from "../services/products";
import { useEffect,useState } from "react";
import type { Product } from "../types/products";


export const ProductPage = () =>{
    const [products,setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        const fetchProducts = async () =>{
            const data = await getProducts();
            setProducts(data);
        }
        fetchProducts();
    },[])

    return <div>
        {products.map((product) => (
            <p key = {product.id}>
            {product.title} - ${product.price}
            </p>
        ))}
        </div>

}

