import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";
import Login from "../components/user/Login";

import AddBills from "../components/user/main/addBills/AddBills";
import About from "../components/user/main/about/About";
import FilterBills from "../components/user/main/fliterBills/FilterBills";
import Main from "../components/user/main/Main";
import Home from "../components/user/main/home/Home";
import AddItems from "../components/user/main/addBills/addItems/AddItems";
import UpdateBills from "../components/user/main/updateBills/UpdateBills";
import ViewBills from "../components/viewBill/viewBills";
import PrivateRoute from "../components/helper/PrivateRoute";

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
        element:<PrivateRoute><Main></Main></PrivateRoute>,
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
            },{
                
                path:"updateBills",
                element:<UpdateBills></UpdateBills>
            
            },{
                
                path:"viewBills",
                element:<ViewBills></ViewBills>
            
            }
             
            ] 
        }
])

export default routes;