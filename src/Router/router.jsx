import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: []
    },
])

export default router;