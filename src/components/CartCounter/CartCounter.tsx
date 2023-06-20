import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import { useCart } from "../../pages/CartPage/CartContext";

import styles from "./CartCounter.module.scss";

interface CartCounterInterface {
  id: number;
  amount: number;
  setAmountBeforeAddToCart?: React.Dispatch<React.SetStateAction<number>>;
}

const CartCounter = ({
  id,
  amount,
  setAmountBeforeAddToCart,
}: CartCounterInterface) => {
  const { cart, increaseAmount, decreaseAmount } = useCart();

  const [innerAmount, _] = useState(amount);
  const isProductInCart = !!cart.find((product) => product.id === id);

  const incAmountPayload = () => {
    increaseAmount({
      id,
      amount: isProductInCart ? amount : innerAmount,
    });
  };

  const incCounter = () => {
    setAmountBeforeAddToCart?.(amount + 1);
  };

  const decAmountPayload = () => {
    decreaseAmount({
      id,
      amount: isProductInCart ? amount : innerAmount,
    });
  };

  const decCounter = () => {
    if (amount > 1) setAmountBeforeAddToCart?.(amount - 1);
  };

  return (
    <div className={styles["cart-counter"]}>
      <Grid container spacing={0}>
        <Grid xs={4}>
          <IconButton
            onClick={isProductInCart ? decAmountPayload : decCounter}
            className={styles.button}
          >
            <Remove fontSize="small" />
          </IconButton>
        </Grid>
        <Grid xs={4}>
          <span className={styles.amount}>{amount}</span>
        </Grid>
        <Grid xs={4}>
          <IconButton
            onClick={isProductInCart ? incAmountPayload : incCounter}
            className={styles.button}
          >
            <Add fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartCounter;
