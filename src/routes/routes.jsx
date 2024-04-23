import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

export const routes = createBrowserRouter( [
    {
path: '/',
element: <Layout/>,
children: [
    {
        path: "home",
        element: <Home></Home>
    },
    {
        path: "about",
        element: <About></About>
    },
    {
        path: "gallery",
        element: <Gallery></Gallery>
    },
]

},

]);