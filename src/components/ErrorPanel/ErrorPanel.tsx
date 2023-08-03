import { Alert, AlertTitle } from "@mui/material";
import styles from "./ErrorPanel.module.scss";
import { Link } from "react-router-dom";

interface ErrorProps {
  error: string | null;
}

const ErrorPanel = (props: ErrorProps) => {
  const { error } = props;
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
