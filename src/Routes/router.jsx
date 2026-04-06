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
import ModelDetails from "../Pages/ModelDetails";
import UpdateModel from "../Pages/UpdateModel";
import MyModels from "../Pages/MyModels";
import MyDownloadPage from "../Pages/MyDownloadPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: HomePage,
                loader: () => fetch('https://ai-inventory-manager-lovat.vercel.app/models')
            },
            {
                path: "/all-models",
                Component: AllModels,
                loader: () => fetch('https://ai-inventory-manager-lovat.vercel.app/models')
            },
            {
                path: "/add-models",
                element: <PrivateRoute>
                    <AddModels></AddModels>
                </PrivateRoute>
            },
            {
                path: "/my-models",
                element: <PrivateRoute>
                    <MyModels></MyModels>
                </PrivateRoute>
            },
            {
                path: "/model-details/:id",
                element: <PrivateRoute>
                    <ModelDetails></ModelDetails>
                </PrivateRoute>,

            },
            {
                path: "/update-model/:id",
                element: <PrivateRoute>
                    <UpdateModel></UpdateModel>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://ai-inventory-manager-lovat.vercel.app/models/${params.id}`)
            },
            {
                path:"/my-downloads",
                element:<PrivateRoute>
                    <MyDownloadPage></MyDownloadPage>
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