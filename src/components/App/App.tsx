import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Shop from "../../pages/Shop";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

import "../../styles/general.scss";
import styles from "./App.module.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
          borderColor: "#000",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
]);

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
