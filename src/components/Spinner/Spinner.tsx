import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgress } from "@mui/material";

import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Grid container spacing={6}>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
};

export default Spinner;
