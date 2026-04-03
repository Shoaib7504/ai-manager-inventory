import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AllModels from "../Pages/AllModels";
import AddModels from "../Pages/AddModels";
import HomePage from "../Pages/HomePage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:"/",
                Component:HomePage
            },
            {
                path:"/all-models",
                Component:AllModels
            },
            {
                path:"/add-models",
                Component:AddModels
            }
        ]
        
    }
    ,
    {
        path:'/auth',
        Component: AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path: "/auth/register",
                Component:Register
            }
        ]
    }
])

export default router;