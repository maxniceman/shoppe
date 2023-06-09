import mock from "../mocks/mock-data";
import { Product } from "./types";

export const getProducts = () => {
  return mock.items.map((p) => ({ ...p, price: p.price / 100 }));
};

export const getProduct = (id: string): Product | undefined => {
  const products = getProducts();
  return products.find((product) => product.id === +id);
};
