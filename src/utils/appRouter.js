import Login from "../componenets/Login";
import Browse from "../componenets/Browse";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
