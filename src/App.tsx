import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import router from "./pages/router";
import theme from "./styles/theme";
import "./styles/general.scss";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
