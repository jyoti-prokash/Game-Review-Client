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
import ReviewDetails from "../Pages/ReviewDetails";
import UpdateReviews from "../Components/UpdateReviews";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/ratedData')
        }
    ]
  },
  {
    path: "/allreviews",
    element: <AllReviews></AllReviews>,
    loader: () => fetch('http://localhost:5000/reviews')
  },
  {
    path: "/addreviews",
    element: <PrivetRoute><AddReviews></AddReviews></PrivetRoute>
  },
  {
    path: "/review/:id",
    element: <PrivetRoute><ReviewDetails></ReviewDetails></PrivetRoute>,
    loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
  },
  {
    path: "/myreviews",
    element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>,
    loader: ()=> fetch('http://localhost:5000/reviews')
  },
  {
    path: "/watch",
    element: <PrivetRoute><WatchList></WatchList></PrivetRoute>,
    loader: () => fetch('http://localhost:5000/watchList')
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/update/:id",
    element: <UpdateReviews></UpdateReviews>,
    loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
  }
  
]);

export default router;


