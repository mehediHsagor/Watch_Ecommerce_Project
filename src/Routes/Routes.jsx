
import About from "../About/About";
import AddProduct from "../AddProduct/AddProduct";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Main from "../assets/Main"

import {
  
  createBrowserRouter,
 
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {

          path:"/about",
          element:<About></About>
        },
        {

          path:"/contact",
          element:<Contact></Contact>
        
        },
        {

          path:"/cart",
          element:<Cart></Cart>
        }
      ],
    },
    {

      path:"/addProduct",
      element:<AddProduct></AddProduct>
    }
  ]);
  export default router;