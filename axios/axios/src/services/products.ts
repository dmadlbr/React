import axios from "axios";
import type { Product , ProductResponse} from "../types/products";

export const getProducts = async() : Promise<Product[]> =>{
    const response = await axios.get<ProductResponse>( "https://dummyjson.com/products");
    return response.data.products;
};

