export interface Products {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  amount?: number;
}
