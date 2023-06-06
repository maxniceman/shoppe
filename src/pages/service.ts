import mock from "../mocks/mock-data";

export const getProducts = () => {
  return mock.items;
};

export const getProduct = (id: number) => {
  const products = getProducts();
  return products.find((product) => product.id === id);
};
