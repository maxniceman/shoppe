import { createBrowserRouter } from "react-router-dom";

import Shop from "./Shop";
import ErrorPage from "./ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
