import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Create from "./Views/Create";
import Update from "./Views/Update";
import DefaultPage from "./Views/DefaultPage";

const router = createBrowserRouter ([
{
  path: "/",
  element: <Layout/>,
  children: [
    {
  index: true,
  element: <DefaultPage/>
},
{
path: "/create",
element: <Create/>
},
{
  path: "/update/:id",
  element: <Update/>
}
  ]
  }
],
{
  basename: "/Calender"
}
)

export default function App() {
  return(
    <RouterProvider router={router} />
  )
}