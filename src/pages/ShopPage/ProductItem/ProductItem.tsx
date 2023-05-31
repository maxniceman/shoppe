import { Visibility, ShoppingCart, FavoriteBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import styles from "./ProductItem.module.scss";
import { Product } from "../ProductList/types";

const ProductItem = ({ title, price, image }: Product) => {
  return (
    <div className={styles["product-item"]}>
      <div className={styles["img-box"]}>
        <img src={image} alt={title}></img>
        <div className={styles.actions}>
          <IconButton>
            <ShoppingCart />
          </IconButton>
          <IconButton>
            <Visibility />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </div>
      </div>
      <p>{title}</p>
      <strong className={styles.price}>$ {price / 100}</strong>
    </div>
  );
};

export default ProductItem;
