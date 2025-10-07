import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import RootLayout from "../Layouts/RootLayout";
import DrDetails from "../Pages/DrDetails";
import Home from "../Pages/Home";
import MyBooking from "../Pages/MyBooking";

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
      { path: "/DrDetails/:id", Component: DrDetails },
      { path: "/my-booking", Component: MyBooking },
    ],
  },
]);
