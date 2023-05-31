import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ShopPage from "./ShopPage/ShopPage";
import ErrorPage from "./ErrorPage/ErrorPage";

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
    ],
  },
]);

export default router;
