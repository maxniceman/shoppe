import Grid from "@mui/material/Unstable_Grid2";
import ProductItem from "../ProductItem/ProductItem";

import { Products, Product } from "./types";

const ProductList = ({ products }: Products) => {
  return (
    <div>
      <Grid container spacing={7}>
        {products.map((p: Product) => (
          <Grid key={p.id} xs={4}>
            <ProductItem
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              category={p.category}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
