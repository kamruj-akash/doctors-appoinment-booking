import { FaMedrt } from "react-icons/fa";
import { NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className={
              "text-[#176AE5] flex gap-2 justify-center items-center text-2xl font-semibold cursor-pointer"
            }
          >
            <FaMedrt />
            Doctors
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/my-booking"}
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            My-Bookings
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to={"/about-us"}
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            ContactUs
          </NavLink>
        </div>
        <div className="navbar-end">
          <a className="ml-4 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
            Button
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
