import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";

import AddBills from "../components/user/main/addBills/AddBills";
import About from "../components/user/main/about/About";
import FilterBills from "../components/user/main/fliterBills/FilterBills";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";

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
        path:"/home",
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>

            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"addBills",
                element:<AddBills></AddBills>
            },
            {
                path:"filterBills",
                element:<FilterBills></FilterBills>
            },
            
        ]
    }
])

export default routes;