import Grid from "@mui/material/Unstable_Grid2";
import ProductItem from "../ProductItem/ProductItem";

import { IProduct, IProducts } from "./types";

const ProductList = ({ products }: IProducts) => {
  return (
    <div>
      <Grid container spacing={7}>
        {products.map((p: IProduct) => (
          <Grid key={p.id} xs={4}>
            <ProductItem name={p.name} price={p.price} img={p.img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
