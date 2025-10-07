import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Banner from "../Components/Banner";
import Container from "../Components/Container";
import DoctorCard from "../Components/DoctorCard";
import { useDrList } from "../Hooks/useDrList";

const Home = () => {
  const [drData] = useDrList();

  const [data, setData] = useState([]);

  useEffect(() => {
    let homeDrData = drData.slice(0, 8);
    setData(homeDrData);
  }, [drData]);

  return (
    <Container>
      <Banner drData={drData} setData={setData} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-4 flex flex-col justify-center text-center max-w-4xl items-center mx-auto mt-10 mb-4">
          <h1 className="text-5xl font-bold">Our Best Doctors</h1>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
        {data.map((doctor) => (
          <DoctorCard key={doctor.reg_number} doctor={doctor} />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-10">
        <NavLink
          to={"/search"}
          state={{ value: "" }}
          className="ml-4 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 inline-block text-centre"
        >
          View All Doctors
        </NavLink>
      </div>
    </Container>
  );
};

export default Home;
