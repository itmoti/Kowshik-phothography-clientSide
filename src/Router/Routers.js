import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllServices/AllServices";
import Home from "../Components/Home/Home";
import Services from "../Components/Home/Services/Services";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Main from "../Layout/Main";

export const Router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/services', element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')

            },
            {
                path: '/service/:id', element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path : '/register' , element : <Register></Register>
            }
        ]
    }
])