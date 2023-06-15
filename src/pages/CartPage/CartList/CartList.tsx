import CartItem from "../CartItem/CartItem";
import { CartProduct } from "../types";

import styles from "./CartList.module.scss";

const CartList = ({ cart }: { cart: CartProduct[] }) => {
  return (
    <ul className={styles["cart-list"]}>
      {cart.map((product: CartProduct) => (
        <CartItem key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default CartList;
