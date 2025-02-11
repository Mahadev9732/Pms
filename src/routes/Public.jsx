import React, { lazy } from "react";

const Login = lazy(() => import("../pages/login/index"));
const MultistepForm = lazy(() => import("../pages/registration/Index"));

const Public = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <MultistepForm />,
  },
];

export default Public;
