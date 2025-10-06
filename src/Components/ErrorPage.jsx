import { FaExclamationTriangle, FaMedrt } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <Link to="/" className="mb-8">
        <h1 className="text-3xl font-extrabold text-blue-600 flex justify-center items-center gap-1">
          {" "}
          <FaMedrt />
          Doctors
        </h1>
      </Link>

      {/* Error Icon and Message */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <FaExclamationTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or an unexpected error
          occurred.
        </p>

        {/* Go Back Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm flex gap-2 justify-center items-center">
        © {new Date().getFullYear()}
        <span className="flex text-blue-600 justify-center items-center">
          <FaMedrt />
          Doctors.
        </span>
        All rights reserved.
      </footer>
    </div>
  );
};

export default ErrorPage;
