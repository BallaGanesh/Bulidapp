import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";
import Home from "../components/user/main/Home";

let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    },
    {
        path:"/main",
        element:<Home></Home>
    },
])

export default routes;