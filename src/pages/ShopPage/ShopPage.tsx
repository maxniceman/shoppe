import ProductList from "./ProductList/ProductList";
import { useLoaderData } from "react-router";
import { getProducts } from "../service";

import { Product } from "../types";

export const loader = () => {
  return getProducts();
};

const ShopPage = () => {
  const products = useLoaderData() as Product[];
  return <ProductList products={products} />;
};

export default ShopPage;
