import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Container from "../Components/Container";
import Recharts from "../Components/Recharts";
import { useDrList } from "../Hooks/useDrList";
import { getFromDb, removeFromDb } from "../Utilities/localStorage";

const MyBooking = () => {
  const [bookingList, setBookingList] = useState([]);
  const [drData, loading, error] = useDrList();

  useEffect(() => {
    const savedData = getFromDb();
    const filterData = drData.filter((item) =>
      savedData.includes(item.reg_number)
    );
    setBookingList(filterData);
  }, [drData]);

  const handleCancel = (id) => {
    const redBooking = bookingList.filter((item) => item.reg_number != id);
    setBookingList(redBooking);
    removeFromDb(id);
  };

  return (
    <>
      <Container>
        <div className="bg-white rounded-2xl p-8 ">
          <div className="w-[800px] mx-auto">
            <Recharts />
          </div>
        </div>
      </Container>

      <div className="min-h-screen bg-gray-100 p-4 md:p-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            My Today Appointments
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>

          {bookingList.map((item) => (
            <div
              key={item.reg_number}
              className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.specialization}</p>
                </div>
                <div className="mt-2 md:mt-0 text-sm text-gray-700 font-medium">
                  Appointment Fee:{" "}
                  <span className="text-gray-900">
                    {item.consultation_fee_bdt}
                  </span>
                </div>
              </div>
              <hr className="my-4 border-dashed" />
              <div className="flex justify-end">
                <button
                  onClick={() => handleCancel(item.reg_number)}
                  className="flex items-center justify-center gap-2 w-full md:w-fit px-5 py-2 rounded-full border border-red-500 text-red-600 font-semibold hover:bg-red-50 transition cursor-pointer"
                >
                  <MdCancel className="text-xl" />
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBooking;
