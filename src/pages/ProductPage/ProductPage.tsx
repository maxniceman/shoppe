import { LoaderFunction } from "react-router-dom";
import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { FavoriteBorder } from "@mui/icons-material";
import Button from "@mui/material/Button";
import CartCounter from "../../components/CartCounter/CartCounter";
import { useLoaderData } from "react-router";
import { getProduct } from "../service";
import { useCart, useCartDispatch } from "../CartPage/CartContext";

import styles from "./ProductPage.module.scss";

import { Product } from "../types";
import { ActionType } from "../CartPage/types";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.productId) throw new Error();
  return await Promise.resolve(getProduct(params.productId as string));
};

const ProductPage = () => {
  const { id, image, title, price, description } = useLoaderData() as Product;
  const dispatch = useCartDispatch();
  const cart = useCart();
  const isProductInCart = !!cart.find((product) => product.id === id);
  const productInCart = cart.find((product) => product.id === id);
  const [initialAmount, setInitialAmount] = useState(1);

  let amount: number | undefined = isProductInCart
    ? productInCart?.amount
    : initialAmount;

  const addToCart = () => {
    if (!dispatch) return;
    dispatch({
      type: ActionType.add,
      payload: {
        id,
        price,
        title,
        image,
        amount: amount || initialAmount,
      },
    });
  };

  return (
    <div className={styles.product}>
      <Grid container spacing={6}>
        <Grid xs={12} sm={5} md={6}>
          <div className={styles.img}>
            <img src={image} alt={title} />
          </div>
        </Grid>
        <Grid xs={12} sm={7} md={6}>
          <h1>
            <FavoriteBorder /> {title}
          </h1>
          <h2>$ {price}</h2>
          <h3>{description}</h3>
          <>
            <Grid container spacing={2}>
              <Grid xs={4} md={3}>
                <CartCounter
                  id={id}
                  amount={amount || initialAmount}
                  setAmountBeforeAddToCart={setInitialAmount}
                />
              </Grid>
              <Grid xs={8} md={9}>
                <Button fullWidth variant="outlined" onClick={addToCart}>
                  add to cart
                </Button>
              </Grid>
            </Grid>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
