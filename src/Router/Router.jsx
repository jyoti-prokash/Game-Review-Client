import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReviews from "../Layouts/AddReviews";
import WatchList from "../Layouts/WatchList";
import MyReviews from "../Layouts/MyReviews";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
  {
    path: "/allreviews",
    element: <AllReviews></AllReviews>
  },
  {
    path: "/addreviews",
    element: <PrivetRoute><AddReviews></AddReviews></PrivetRoute>
  },
  {
    path: "/myreviews",
    element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
  },
  {
    path: "/watchlist",
    element: <PrivetRoute><WatchList></WatchList></PrivetRoute>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  
]);

export default router;


