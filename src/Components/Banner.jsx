import { useRef, useState } from "react";
import { NavLink } from "react-router";
import bannerImg from "../assets/banner-img-1.png";

const Banner = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  // const searchHandler = () => {
  //   const inputValue = inputRef.current.value.toLowerCase().trim();
  // };
  return (
    <div>
      <div className="hero py-[75px] bg-gray-50 border-5 my-5 border-white rounded-4xl">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">
              Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className="py-6">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
            <div className="flex items-center justify-center p-4 ">
              <div className="flex items-center w-full max-w-xl">
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search any doctor..."
                  className="flex-grow px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
                <NavLink
                  to={"/search"}
                  state={{ value: search }}
                  className="ml-4 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 cursor-pointer"
                >
                  Search Now
                </NavLink>
              </div>
            </div>
            <div className={`flex gap-8 justify-center mt-8}`}>
              <img src={bannerImg} alt="bannerImg" />
              <img src={bannerImg} alt="bannerImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
