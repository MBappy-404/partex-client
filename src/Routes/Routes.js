import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignIn/SignIn";
import SIgnUp from "../Pages/SIgnUp/SIgnUp";

const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/home',
                    element: <Home></Home>
               },
               {
                    path: '/about',
                    element: <About></About>
               },
               {
                    path: '/products/:id',
                    element: <Products></Products>,
                    loader: ({params}) => fetch(`https://resused-server.vercel.app/products/${params.id}`),
               },
               {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>
               },
               {
                    path: '/signUp',
                    element: <SIgnUp></SIgnUp>
               },
               {
                    path:'/signIn',
                    element: <SignIn></SignIn>

               },
               {
                    path: '/contact',
                    element: <Contact></Contact>
               }
          ]
     }
])

export default router;