// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ShopPage from "./ShopPage/ShopPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProductPage from "./ProductPage/ProductPage";

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
        path: "products/:productId",
        element: <ProductPage />,
        loader: productLoader,
      },
    ],
  },
]);

export default router;
