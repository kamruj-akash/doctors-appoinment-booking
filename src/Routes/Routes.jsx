import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import RootLayout from "../Layouts/RootLayout";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import DrDetails from "../Pages/DrDetails";
import Home from "../Pages/Home";
import MyBooking from "../Pages/MyBooking";
import Search from "../Pages/Search";

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
      { path: "/search", Component: Search },
      { path: "/DrDetails/:id", Component: DrDetails },
      { path: "/my-booking", Component: MyBooking },
      { path: "/blog", Component: Blog },
      { path: "/contact", Component: Contact },
    ],
  },
]);
