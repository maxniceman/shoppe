import { useNavigate } from "react-router-dom";
import {
  Visibility,
  ShoppingCart,
  FavoriteBorder,
  FavoriteOutlined,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";

import { useFavoriteStore } from "../../../hooks/useFavoriteStore";
import { useCartStore } from "../../../hooks/useCartStore";

import styles from "./ProductItem.module.scss";
import { Product } from "../../types";

const ProductItem = (props: Product) => {
  const { title, image, id, price } = props;
  const navigate = useNavigate();

  const { checkIfProductInFavorites, toggleFavorites } = useFavoriteStore();
  const { addProduct } = useCartStore();

  const item = {
    id,
    price,
    title,
    image,
    amount: 1,
  };

  return (
    <div className={styles["product-item"]}>
      <div className={styles["img-box"]}>
        <img src={image} alt={title}></img>
        <div className={styles.actions}>
          <IconButton onClick={() => addProduct(item)}>
            <ShoppingCart />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate(`products/${id}`);
            }}
          >
            <Visibility />
          </IconButton>
          <IconButton onClick={() => toggleFavorites({ id, title, image })}>
            {checkIfProductInFavorites(id) ? (
              <FavoriteOutlined />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </div>
      </div>
      <div className={styles.info}>
        <p>{title}</p>
        <strong className={styles.price}>$ {price}</strong>
      </div>
    </div>
  );
};

export default ProductItem;
