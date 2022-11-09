import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import AllServices from "../Components/AllServices/AllServices";
import Blogs from "../Components/Blogs/Blog";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Reviews from "../Components/Reviews/Reviews";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Main from "../Layout/Main";
import PrivateRouter from "./PrivateRouter";

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
            } ,
            {
                path : '/reviews' , element : <PrivateRouter><Reviews></Reviews></PrivateRouter>
            } ,
            {
                path : '/addservice' , element : <PrivateRouter><AddService></AddService></PrivateRouter>
            } , 
            {
                path : '/blogs' , element :<Blogs></Blogs>
            }
        ]
    }
])