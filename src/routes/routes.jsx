import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

export const routes = createBrowserRouter( [
    {
path: '/',
element: <Layout/>,
children: [
    {
        path: "home",
        element: <h1>Home</h1>
    }
]

},
]);