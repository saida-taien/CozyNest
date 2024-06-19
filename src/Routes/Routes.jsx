import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import RoomDetails from "../Components/RoomDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/roomDetails/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: '/user',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
    ]
  },
]);