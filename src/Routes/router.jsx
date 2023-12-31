import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../component/Pages/Home/Home";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
