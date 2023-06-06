import { Visibility, ShoppingCart, FavoriteBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Grid2 from "@mui/material/Unstable_Grid2";

import styles from "./ProductItem.module.scss";
import { Product } from "../../types";

const ProductItem = (props: Product) => {
  const { title, image, id, price } = props;

  return (
    <Grid2 xs={4}>
      <div className={styles["product-item"]}>
        <div className={styles["img-box"]}>
          <img src={image} alt={title}></img>
          <div className={styles.actions}>
            <IconButton>
              <ShoppingCart />
            </IconButton>
            <IconButton href={`products/${id}`}>
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
    </Grid2>
  );
};

export default ProductItem;
