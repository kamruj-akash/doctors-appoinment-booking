import { MdLocationOn, MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Container from "../Components/Container";
import { useDrList } from "../Hooks/useDrList";
import { getFromDb, saveToDb } from "../Utilities/localStorage";

const DrDetails = () => {
  const navigate = useNavigate();
  const [drData, loading, error] = useDrList();
  const { id } = useParams();

  const visitedDrData = drData.find((item) => item.reg_number == id);
  const {
    reg_number,
    name,
    degrees,
    hospital,
    specialization,
    status,
    consultation_fee_bdt,
    availability,
    image_url,
  } = visitedDrData || {};

  // handle booking
  const handleBooking = (id) => {
    const existId = getFromDb();

    if (existId.includes(id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${name} Appointment Already Booked!`,
      });
    } else {
      Swal.fire({
        title: "Booking Done!",
        text: `Successful Booked an Appointment of ${name}`,
        icon: "success",
      });
      saveToDb(id);
    }
  };

  return (
    <Container>
      <div className="bg-gray-100  p-16 m-5 pt-8  rounded-4xl w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost mb-8 hover:border-transparent"
        >
          <MdOutlineArrowBackIos /> Back
        </button>
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Doctor’s Profile Details
          </h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-60 h-60 rounded-lg overflow-hidden me-5">
            <img
              src={image_url}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600">{degrees}</p>
            <p className="text-sm text-gray-600 mb-2">{specialization}</p>

            <div className="flex items-center text-sm text-gray-700 mt-1">
              <MdLocationOn className="text-lg mr-1" />
              {hospital}
            </div>

            <p className="text-sm text-gray-600 mt-1">Reg No: {reg_number}</p>

            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Availability
              </h3>
              <div className="flex gap-2 flex-wrap">
                {availability?.map((day) => (
                  <span
                    key={day}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-700">
                Consultation Fee:{" "}
                <span className="text-blue-600 font-semibold">
                  Taka : {consultation_fee_bdt}
                </span>{" "}
                (incl. VAT){" "}
                <a href="#" className="text-blue-500 underline text-xs">
                  Per consultation
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800  text-center pb-5 border-b-1 border-dashed mb-5">
            Book an Appointment
          </h3>

          <div className="flex flex-col text-center justify-between items-start md:items-center mb-4">
            <span className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full">
              Doctor {status} Today
            </span>

            <p className="text-sm mt-5 text-yellow-700 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              ⚠️ Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>

          <button
            onClick={() => handleBooking(reg_number)}
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-md transition"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DrDetails;
