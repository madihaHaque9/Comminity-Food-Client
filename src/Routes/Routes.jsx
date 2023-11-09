import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../assets/components/Login/Login";
import SignUp from "../assets/components/SignUp/SignUp";
import SingleFood from "../pages/SingleFood/SingleFood";
import RequestFood from "../pages/RequestFood/RequestFood";
import ManageFood from "../assets/components/ManageFood/ManageFood";
import PrivateRoute from "../provider/PrivateRoute";
import Manage from "../assets/components/ManageFood/Manage";
import AvailableFoods from "../assets/components/AvailableFoods/AvailableFoods";
import AddFood from "../assets/components/AddFood/AddFood";
import UpdateFood from "../assets/components/UpdateFood/UpdateFood";

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
          loader:({params})=>fetch(`https://food-server-one-indol.vercel.app/foods/${params.id}`)
        },{
          path:'request/:id',
          element:<RequestFood  ></RequestFood>,
          loader:({ params }) => fetch(`https://food-server-one-indol.vercel.app/foods/${params.id}`)
        },{
          path:'manageFood',
          element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>

        },{
          path:'manageFood/manage',
          element:<Manage></Manage>,
       
        },{
          path:'/availableFoods',
          element:<PrivateRoute><AvailableFoods></AvailableFoods></PrivateRoute>
        },{
          path:'/addFood',
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },{
          path:'/updateFood/:id',
        element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader:({params})=>fetch(`https://food-server-one-indol.vercel.app/foods/${params.id}`)

        }
      ]
    },
  ]);
  export default router;