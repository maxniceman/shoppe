import { Link } from "react-router-dom";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

import { DiamondOutlined } from "@mui/icons-material";
import { Alert, AlertTitle } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import styles from "./FavoritesPage.module.scss";
import { FavoriteProduct } from "../types";

const FavoritesPage = () => {
  const { favorites } = useFavoriteStore();
  if (!favorites.length) {
    return (
      <Alert icon={<DiamondOutlined fontSize="inherit" />} severity="warning">
        <AlertTitle>There aren't any favorite products</AlertTitle>
        Please explore the <Link to="/">products page</Link>
      </Alert>
    );
  }

  return (
    <div className={styles.favorites}>
      {favorites.length > 0 && (
        <Grid container>
          {favorites.map((product: FavoriteProduct) => {
            return <FavoriteItem key={product.id} {...product} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default FavoritesPage;
