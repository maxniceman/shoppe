import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ShopPage from "./ShopPage/ShopPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./CartPage/CartPage";
import FavoritesPage from "./FavoritesPage/FavoritesPage";

import { loader as productsLoader } from "./ShopPage/ShopPage";
import { loader as productLoader } from "./ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShopPage />,
        loader: productsLoader,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        errorElement: <ErrorPage />,
        path: "products/:productId",
        element: <ProductPage />,
        loader: productLoader,
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
