import { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import styles from "./CartCounter.module.scss";

const CartCounter = () => {
  const [amount, setAmount] = useState(1);
  const plusAmount = () => {
    setAmount(amount + 1);
  };

  const minusAmount = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  return (
    <div className={styles["cart-counter"]}>
      <Grid2 container spacing={0}>
        <Grid2 xs={4}>
          <IconButton onClick={minusAmount} className={styles.button}>
            <Remove fontSize="small" />
          </IconButton>
        </Grid2>
        <Grid2 xs={4}>
          <span className={styles.amount}>{amount}</span>
        </Grid2>
        <Grid2 xs={4}>
          <IconButton onClick={plusAmount} className={styles.button}>
            <Add fontSize="small" />
          </IconButton>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default CartCounter;
