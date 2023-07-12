import { Link } from "react-router-dom";
import { useFavoriteStore } from "../../../hooks/useFavoriteStore";

import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { FavoriteProduct } from "../../types";

import styles from "./FavoriteItem.module.scss";

const FavoriteItem = (product: FavoriteProduct) => {
  const { id, title, image } = product;
  const { toggleFavorites, checkIfProductInFavorites } = useFavoriteStore();
  return (
    <Grid xs={12} sm={6} md={4} display="flex" alignItems="center">
      <div className={styles.image}>
        <img src={image} alt="title" />
      </div>
      <Grid container>
        <Grid xs={9} display="flex" alignItems="center">
          <p>
            <Link to={`/products/${id}`}>{title}</Link>
          </p>
        </Grid>
        <Grid xs={3} display="flex" alignItems="center">
          <IconButton onClick={() => toggleFavorites({ id, title, image })}>
            {checkIfProductInFavorites(id) ? (
              <FavoriteOutlined />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FavoriteItem;
