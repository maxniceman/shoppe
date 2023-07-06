import * as React from "react";
import { useNavigate, Link } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import { Badge, Menu, MenuItem, Stack } from "@mui/material";
import {
  Person,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import { useCartStore } from "../../../hooks/useCartStore";

import styles from "./Header.module.scss";
import logo from "../../../assets/logo.svg";

const Header = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  const [accountDropdown, setAccountDropdown] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(accountDropdown);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAccountDropdown(event.currentTarget);
  };
  const handleClose = () => {
    setAccountDropdown(null);
  };
  const handleFavorites = () => {
    navigate("/favorites");
    setAccountDropdown(null);
  };

  return (
    <header className={styles.header}>
      <Grid container>
        <Grid xs={6} display="flex" alignItems="center">
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
            <IconButton onClick={handleClick}>
              <Person />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={accountDropdown}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleFavorites}>Favorites</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Stack>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
