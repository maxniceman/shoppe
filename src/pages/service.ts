import mock from "../mocks/mock-data";
import { Product } from "./types";

export const getProducts = () => {
  return mock.items;
};

export const getProduct = (id: string): Product | undefined => {
  const products = getProducts();
  return products.find((product) => product.id === +id);
};
