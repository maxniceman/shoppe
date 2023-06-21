import Grid from "@mui/material/Unstable_Grid2";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import styles from "./CartCounter.module.scss";

interface CartCounterInterface {
  currentValue: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartCounter = ({
  currentValue,
  onIncrease,
  onDecrease,
}: CartCounterInterface) => {
  return (
    <div className={styles["cart-counter"]}>
      <Grid container spacing={0}>
        <Grid xs={4}>
          <IconButton onClick={onDecrease} className={styles.button}>
            <Remove fontSize="small" />
          </IconButton>
        </Grid>
        <Grid xs={4}>
          <span className={styles.amount}>{currentValue}</span>
        </Grid>
        <Grid xs={4}>
          <IconButton onClick={onIncrease} className={styles.button}>
            <Add fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartCounter;
