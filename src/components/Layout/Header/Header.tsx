import { Link } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./Header.module.scss";

import logo from "../../../assets/logo.svg";

const Header = () => {
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
            <ShoppingCartIcon />
            <PersonIcon />
          </Stack>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
