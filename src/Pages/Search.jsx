// pages/SearchPage.jsx
import { useState } from "react";
import DoctorCard from "../Components/DoctorCard";
import { useDrList } from "../Hooks/useDrList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drData] = useDrList();

  const filteredData = drData.filter(
    (item) =>
      item.name.toLowerCase().trim().includes(searchTerm) ||
      item.specialization.toLowerCase().trim().includes(searchTerm)
  );

  return (
    <div className=" bg-gray-100 py-10 px-4 md:px-12">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Find Your Doctor
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-10">
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Search
          </button>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((doctor) => (
              <DoctorCard key={doctor.reg_number} doctor={doctor} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No doctors found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
