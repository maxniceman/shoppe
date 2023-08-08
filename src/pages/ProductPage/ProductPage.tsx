import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { IconButton, Button, Stack } from "@mui/material";
import CartCounter from "../../components/CartCounter/CartCounter";

import { BACKEND_BASE_URL, PRODUCTS_PATH } from "../../constants";
import { useCartStore } from "../../hooks/useCartStore";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";
import { useFetch } from "../../hooks/useFetch";
import { useMountedState } from "react-use";

import Spinner from "../../components/Spinner/Spinner";
import ErrorPanel from "../../components/ErrorPanel/ErrorPanel";

import styles from "./ProductPage.module.scss";
import { Product } from "../types";

const ProductPage = () => {
  const isMounted = useMountedState();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { response, error, isLoading, fetchData } = useFetch(
    `${BACKEND_BASE_URL}${PRODUCTS_PATH}/${productId}`
  );
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isMounted() && response !== null) {
      setProduct(response);
    }
  }, [response]);

  const { id, image, title, price, description } = product as Product;
  const { checkIfProductInFavorites, toggleFavorites } = useFavoriteStore();

  const { cart, addProduct, decreaseAmount, increaseAmount } = useCartStore();

  const [initialAmount, setInitialAmount] = useState(1);
  const productInCart = cart.find((product) => product.id === id);
  const isProductInCart = !!productInCart;

  const amount: number = isProductInCart
    ? productInCart?.amount
    : initialAmount;

  const addToCart = () => {
    addProduct({
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

  if (error) return <ErrorPanel error={error["message"]} />;
  if (isLoading) return <Spinner />;

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
              {checkIfProductInFavorites(id) ? (
                <FavoriteOutlined />
              ) : (
                <FavoriteBorder />
              )}
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
