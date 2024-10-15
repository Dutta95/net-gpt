import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { RootHome } from "./Home";

const Body = () => {
  const HomeRoot = RootHome();

    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <HomeRoot />
        },
        {
          path: "/Login",
          element: <Login />
        },
        {
          path: "/browse",
          element: <Browse />
        }
      ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )   
}

export default Body