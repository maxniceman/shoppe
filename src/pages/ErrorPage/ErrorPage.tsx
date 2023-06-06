import Button from "@mui/material/Button";

import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles["error-page"]}>
      <h1>404 ERROR</h1>
      <p>
        This page not found
        <br />
        back to home and start again
      </p>
      <Button href="/ " variant="outlined">
        HOMEPAGE
      </Button>
    </div>
  );
};

export default ErrorPage;
