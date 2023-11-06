import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../assets/components/Login/Login";
import SignUp from "../assets/components/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'login',
          element:<Login></Login>
        },{
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  export default router;