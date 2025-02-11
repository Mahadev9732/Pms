import Login from "../pages/login/index";
import Registration from "../pages/registration/Index";

const routes = [
  {
    path: "/",
    element: Login,

    protected: false,
  },

  {
    path: "/signup",
    element: Registration,

    protected: false,
  },

  //   {
  //     path: "/users",
  //     element: Users,

  //     protected: true,
  //   },

  //   {
  //     path: "/add",
  //     element: CreateUser,

  //     protected: true,
  //   },
  //   {
  //     path: "/edit/:id",
  //     element: EditUser,

  //     protected: true,
  //   },

  //   {
  //     path: "/profile",
  //     element: Profile,

  //     protected: true,
  //   },

  //   {
  //     path: "/transfer",
  //     element: Transfer,

  //     protected: true,
  //   },

  //   {
  //     path: "/transfer",
  //     element: Transfer,

  //     protected: true,
  //   },

  //   {
  //     path: "/history",
  //     element: History,

  //     protected: true,
  //   },

  //   {
  //     path: "/transfer-request",
  //     element: TransferRequset,

  //     protected: true,
  //   },
];

export default routes;
