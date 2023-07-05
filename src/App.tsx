import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import router from "./pages/router";
import { store } from "./store/store";
import { Provider } from "react-redux";

import theme from "./styles/theme";
import "./styles/general.scss";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
