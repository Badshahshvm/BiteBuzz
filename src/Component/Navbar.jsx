import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slice/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="flex flex-col my-5 lg:flex-row justify-between mx-10 py-3 mb-10">
        <div>
          <h1 className="text-4xl font-bold text-yellow-500 underline decoration-slate-900">
            Bite Buzz
          </h1>
          <h3 className=" font-bold text-gray-500">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
        </div>
        <div>
          <input
            type="search"
            name="serach"
            placeholder="Serach here"
            autoComplete="off"
            className="p-3 border border-yellow-500 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
