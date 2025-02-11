import { Navigate } from "react-router-dom";
import { getauthToken } from "../_helper/authentication";
import Login from "../pages/login/index";
import Registration from "../pages/registration/Index";
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
  // Add other public routes like FAQ here
];
