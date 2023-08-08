import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ShopPage from "./ShopPage/ShopPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./CartPage/CartPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShopPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        errorElement: <ErrorPage />,
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

export default router;
