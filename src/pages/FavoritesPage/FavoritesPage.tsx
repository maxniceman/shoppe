import { useFavoriteStore } from "../../hooks/useFavoriteStore";

import {
  DiamondOutlined,
  FavoriteBorder,
  FavoriteOutlined,
} from "@mui/icons-material";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import styles from "./FavoritesPage.module.scss";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites, toggleFavorites, checkIfProductInFavorites } =
    useFavoriteStore();

  return (
    <div className={styles.favorites}>
      {favorites.length > 0 ? (
        <Grid container>
          {favorites.map(({ id, title, image }) => {
            return (
              <Grid
                key={id}
                xs={12}
                sm={6}
                md={4}
                display="flex"
                alignItems="center"
              >
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
                    <IconButton
                      onClick={() => toggleFavorites({ id, title, image })}
                    >
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
          })}
        </Grid>
      ) : (
        <Alert icon={<DiamondOutlined fontSize="inherit" />} severity="warning">
          <AlertTitle>There aren't any favorite products</AlertTitle>
          Please explore the <Link to="/">products page</Link>
        </Alert>
      )}
    </div>
  );
};

export default FavoritesPage;
