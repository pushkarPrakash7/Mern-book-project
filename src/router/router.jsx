import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../Shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBooks from "../Dashboard/UploadBooks";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import User from "../Dashboard/User";
import { baseurl } from "../Links";
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/book/:id",
        element: <SingleBook/>,
        loader : ({params}) =>fetch(`${baseurl}/book/${params.id}`)
      },
      
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "/admin/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path:"/admin/dashboard/upload-books",
        element: <UploadBooks />
      },
      {
        path:"/admin/dashboard/manage-books",
        element: <ManageBooks />
      },
      {
        path:"/admin/dashboard/user",
        element: <User/>
      },
      {
        path:"/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader : ({params}) =>fetch(`${baseurl}/book/${params.id}`)
      }
    ]
  },
  {
    path:"sign-up",
    element: <SignUp/>
  },
  {
    path:"login",
    element: <Login/>
  },
  {
    path:"logout",
    element: <Logout/>
  }
]);

export default router;
