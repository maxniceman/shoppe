//@ts-nocheck
import { Alert, AlertTitle } from "@mui/material";
import styles from "./ErrorPanel.module.scss";
import { Link } from "react-router-dom";

const ErrorPanel = (props) => {
  const { error } = props;
  console.log(error);
  return (
    <div className={styles["error-panel"]}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <p>
          <strong>{error}</strong>
        </p>
        <p>
          Please explore the <Link to="/">products page</Link>
        </p>
      </Alert>
    </div>
  );
};

export default ErrorPanel;
