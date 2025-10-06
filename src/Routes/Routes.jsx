import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {},
    ],
  },
]);
