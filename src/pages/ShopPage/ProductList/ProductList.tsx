import Grid2 from "@mui/material/Unstable_Grid2";
import ProductItem from "../ProductItem/ProductItem";

import { Products, Product } from "../../types";

import styles from "./ProductList.module.scss";

const ProductList = ({ products }: Products) => {
  return (
    <div className={styles["products-list"]}>
      <Grid2 container spacing={6}>
        {products.map((product: Product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </Grid2>
    </div>
  );
};

export default ProductList;
