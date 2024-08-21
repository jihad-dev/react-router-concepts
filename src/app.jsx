import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuCard from "./components/MenuCard/MenuCard";
import MenuDetails from "./components/MenuDetails/MenuDetails";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a"),
    element: <MenuCard></MenuCard>,
  },
  {
    path: "/details/:menuId",
    loader: ({ params }) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.menuId}`
      ),
    element: <MenuDetails></MenuDetails>,
  },
]);
export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
