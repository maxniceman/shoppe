import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FavoriteBorder } from "@mui/icons-material";
import Button from "@mui/material/Button";
import CartCounter from "../../components/CartCounter/CartCounter";
import { useLoaderData } from "react-router";
import { getProduct } from "../service";

import styles from "./ProductPage.module.scss";

import { Product, ProductParam } from "../types";

export const loader = ({ params }: { params: ProductParam }) => {
  return getProduct(+params.productId);
};

const ProductPage = () => {
  const product = useLoaderData() as Product;

  return (
    <div className={styles.product}>
      <Grid2 container spacing={6}>
        <Grid2 xs={6}>
          <div className={styles.img}>
            <img src={product.image} alt={product.title} />
          </div>
        </Grid2>
        <Grid2 xs={6}>
          <h1>
            <FavoriteBorder /> {product.title}
          </h1>
          <h2>$ {product.price}</h2>
          <h3>{product.description}</h3>
          <>
            <Grid2 container spacing={2}>
              <Grid2 xs={3}>
                <CartCounter />
              </Grid2>
              <Grid2 xs={9}>
                <Button fullWidth variant="outlined">
                  add to cart
                </Button>
              </Grid2>
            </Grid2>
          </>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductPage;
