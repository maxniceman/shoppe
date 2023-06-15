import { useNavigate, Link } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import { Badge, Stack } from "@mui/material";
import {
  Person,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { useCart } from "../../../pages/CartPage/CartContext";

import styles from "./Header.module.scss";
import logo from "../../../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const cart = useCart();

  return (
    <header className={styles.header}>
      <Grid container>
        <Grid xs={6}>
          <Link to="/">
            <img src={logo} alt="Shoppe" />
          </Link>
        </Grid>
        <Grid display="flex" xs={6} justifyContent="end">
          <Stack direction="row" spacing={2}>
            <IconButton onClick={() => navigate("/cart")}>
              {cart && cart.length > 0 ? (
                <Badge badgeContent={cart.length} color="warning">
                  <ShoppingCart />
                </Badge>
              ) : (
                <ShoppingCartOutlined />
              )}
            </IconButton>
            <IconButton>
              <Person />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
