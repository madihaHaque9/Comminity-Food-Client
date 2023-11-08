import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../assets/components/Login/Login";
import SignUp from "../assets/components/SignUp/SignUp";
import SingleFood from "../pages/SingleFood/SingleFood";
import RequestFood from "../pages/RequestFood/RequestFood";
import ManageFood from "../assets/components/ManageFood/ManageFood";
import PrivateRoute from "../provider/PrivateRoute";

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
        },{
          path:'request/:id',
          element:<RequestFood  ></RequestFood>,
          loader:({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
        },{
          path:'manageFood',
          element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>

        }
      ]
    },
  ]);
  export default router;