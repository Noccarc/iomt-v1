import HomePage from "views/HomePage/HomePage.js";
import GraphPage from "views/GraphPage/GraphPage.js";

var routes = [
  {
    path: "/index",
    name: "HomePage",
    icon: "ni ni-tv-2 text-primary",
    component: HomePage,
    layout: "/admin",
  },

  {
    path: "/home",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: GraphPage,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // }
];
export default routes;
