import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Weather from "../Pages/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>  ,
  },
  {
    path:'/weather',
    element:<Weather></Weather>
  }
]);

export default router;