import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import router from "./pages/router";
import theme from "./styles/theme";
import "./styles/general.scss";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Header />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
