import { FaRegRegistered } from "react-icons/fa";
import { NavLink } from "react-router";

const DoctorCard = ({ doctor }) => {
  const { reg_number, name, degrees, experience, status, image_url } = doctor;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 pb-8">
      <img
        src={image_url}
        alt="Doctor"
        className="w-full h-56 object-cover rounded-xl"
      />

      <div className="flex space-x-2 mt-4">
        <span className="text-green-700 bg-green-100 text-sm font-medium px-3 py-1 rounded-full">
          {status}
        </span>
        <span className="text-blue-700 bg-blue-100 text-sm font-medium px-3 py-1 rounded-full">
          {experience} Experience
        </span>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">{degrees}</p>

        <div className="flex items-center text-sm text-gray-600 mt-2">
          <FaRegRegistered className="mr-1" />
          <span>Reg No: {reg_number}</span>
        </div>
      </div>

      <hr className="my-4 border-dashed border-gray-300" />

      <div className="text-center">
        <NavLink
          to={`/DrDetails/${reg_number}`}
          className="w-full text-blue-600 border border-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition cursor-pointer"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorCard;
