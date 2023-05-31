import ProductList from "./ProductList/ProductList";

import data from "../../mocks/mock-data";

const ShopPage = () => {
  const products = data.items;

  return <ProductList products={products} />;
};

export default ShopPage;
