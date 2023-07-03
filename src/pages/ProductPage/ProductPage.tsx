import { LoaderFunction } from "react-router-dom";
import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { IconButton, Button, Stack } from "@mui/material";
import CartCounter from "../../components/CartCounter/CartCounter";
import { useLoaderData } from "react-router";
import { getProduct } from "../service";

import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

import styles from "./ProductPage.module.scss";

import { Product } from "../types";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.productId) throw new Error();
  return await Promise.resolve(getProduct(params.productId as string));
};

const ProductPage = () => {
  const { id, image, title, price, description } = useLoaderData() as Product;
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.some((f) => f.id === id);
  const { toggleFavorites, add, decreaseAmount, increaseAmount } = useActions();

  const [initialAmount, setInitialAmount] = useState(1);
  const { cart } = useSelector((state: RootState) => state.cart);
  const productInCart = cart.find((product) => product.id === id);
  const isProductInCart = !!productInCart;

  const amount: number = isProductInCart
    ? productInCart?.amount
    : initialAmount;

  const addToCart = () => {
    add({
      id,
      price,
      title,
      image,
      amount: amount || initialAmount,
    });
  };

  const incAmountPayload = () => {
    increaseAmount({
      id,
      amount: isProductInCart ? amount : initialAmount,
    });
  };
  const decAmountPayload = () => {
    decreaseAmount({
      id,
      amount: isProductInCart ? amount : initialAmount,
    });
  };
  const incCounter = () => {
    setInitialAmount(initialAmount + 1);
  };
  const decCounter = () => {
    if (initialAmount > 1) setInitialAmount(initialAmount - 1);
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
          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => toggleFavorites({ id, title, image })}>
              {isFavorite ? <FavoriteOutlined /> : <FavoriteBorder />}
            </IconButton>
            <h1>{title}</h1>
          </Stack>
          <h2>$ {price}</h2>
          <h3>{description}</h3>
          <>
            <Grid container spacing={2}>
              <Grid xs={4} md={3}>
                <CartCounter
                  currentValue={amount || initialAmount}
                  onIncrease={isProductInCart ? incAmountPayload : incCounter}
                  onDecrease={isProductInCart ? decAmountPayload : decCounter}
                />
              </Grid>
              <Grid xs={8} md={9}>
                {!isProductInCart && (
                  <Button fullWidth variant="outlined" onClick={addToCart}>
                    add to cart
                  </Button>
                )}
              </Grid>
            </Grid>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
