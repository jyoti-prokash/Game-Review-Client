import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import AddReviews from "../Layouts/AddReviews";
import WatchList from "../Layouts/WatchList";
import MyReviews from "../Layouts/MyReviews";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
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
    element: <AddReviews></AddReviews>
  },
  {
    path: "/myreviews",
    element: <MyReviews></MyReviews>
  },
  {
    path: "/watchlist",
    element: <WatchList></WatchList>
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


