import Grid from "@mui/material/Unstable_Grid2";
import CartList from "./CartList/CartList";
import { useCartStore } from "../../hooks/useCartStore";

import styles from "./CartPage.module.scss";

const CartPage = () => {
  const { cart } = useCartStore();

  return (
    <div className={styles["cart-page"]}>
      <h1>Shopping Cart</h1>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          {cart.length > 0 ? (
            <CartList cart={cart} />
          ) : (
            "Shopping Cart is empty."
          )}
        </Grid>
        <Grid xs={12} md={3} mdOffset={1}>
          Cart totals
        </Grid>
      </Grid>
    </div>
  );
};

export default CartPage;
