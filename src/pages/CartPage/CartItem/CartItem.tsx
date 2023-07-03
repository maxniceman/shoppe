import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import CartCounter from "../../../components/CartCounter/CartCounter";
import { CartProduct } from "../types";
import { useActions } from "../../../hooks/useActions";

import styles from "./CartItem.module.scss";

const CartItem = (product: CartProduct) => {
  const { id, title, image, price, amount } = product;
  const { remove, increaseAmount, decreaseAmount } = useActions();

  const productItem = {
    id,
    amount,
  };

  return (
    <li className={styles["cart-item"]}>
      <Grid container spacing={0}>
        <Grid xs={2} sm={3}>
          <img src={image} alt={title}></img>
        </Grid>
        <Grid xs={5} smOffset={1} sm={5}>
          <h3>
            <Link to={`/products/${id}`}>{title}</Link>
          </h3>
          <h5>$ {price}</h5>
        </Grid>
        <Grid xs={3} sm={2}>
          <CartCounter
            currentValue={amount}
            onIncrease={() => increaseAmount(productItem)}
            onDecrease={() => decreaseAmount(productItem)}
          />
        </Grid>
        <Grid
          xs={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <IconButton onClick={() => remove({ id })}>
            <Close />
          </IconButton>
        </Grid>
      </Grid>
    </li>
  );
};

export default CartItem;
