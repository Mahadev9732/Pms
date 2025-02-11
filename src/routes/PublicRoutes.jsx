import Rea from "react";
import Login from "../pages/login/index";
import MultistepForm from "../pages/registration/Index";

export const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <MultistepForm />,
  },
];
