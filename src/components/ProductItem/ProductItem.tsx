import { Visibility, ShoppingCart, FavoriteBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import styles from "./ProductItem.module.scss";

interface IProductItem {
  //id: number,
  name: string;
  price: string | number;
  img: string;
}

const ProductItem = ({ name, price, img }: IProductItem) => {
  return (
    <div className={styles["product-item"]}>
      <div className={styles["img-box"]}>
        <img src={img} alt={name}></img>
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
      <p>{name}</p>
      <strong className={styles.price}>$ {price}</strong>
    </div>
  );
};

export default ProductItem;
