import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AllModels from "../Pages/AllModels";
import AddModels from "../Pages/AddModels";
import HomePage from "../Pages/HomePage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Context/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: HomePage,
                loader: () => fetch('http://localhost:3000/models')
            },
            {
                path: "/all-models",
                Component: AllModels,
                loader: () => fetch('http://localhost:3000/models')
            },
            {
                path: "/add-models",
                element: <PrivateRoute>
                    <AddModels></AddModels>
                </PrivateRoute>
            }
        ]

    }
    ,
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;