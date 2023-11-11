import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../pages/layout/Main";
import Home from "../pages/Home/Home";
// import AboutUs from "../pages/AboutUs/AboutUs";
import Projects from "../pages/Projects/Projects";
import AboutUs from "../pages/AboutUs/AboutUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/aboutUs',
            element: <AboutUs></AboutUs>
        },
        {
            path:'/projects',
            element: <Projects></Projects>
        }
      ]
    },
  ]);
  export default router