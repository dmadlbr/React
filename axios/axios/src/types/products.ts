export type Product = {
  id: number;
  title: string;
  price: number;
};

export type ProductResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};