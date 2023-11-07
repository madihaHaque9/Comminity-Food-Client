import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../assets/components/Login/Login";
import SignUp from "../assets/components/SignUp/SignUp";
import SingleFood from "../pages/SingleFood/SingleFood";

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
        },{
          path:'singleFood/:id',
          element:<SingleFood></SingleFood>,
          loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
        }
      ]
    },
  ]);
  export default router;