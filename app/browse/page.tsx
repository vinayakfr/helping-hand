import React from "react";
import OrganisationCard from "../components/organisation-card";
import Navbar from "../components/navbar";

function Browse() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col gap-5 lg:gap-10 place-content-center place-items-center">
        <h1 className="text-center font-black text-5xl lg:text-9xl px-5">
          Now help is one click away
        </h1>
        <p className="text-center font-medium lg:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          explicabo eligendi, voluptates aspernatur accusantium optio
          perspiciatis in minus tempora provident.
        </p>
        <input
          type="text"
          className="border-2 border-black bg-white rounded-r-full rounded-l-full w-72 h-14 lg:w-[50rem] lg:h-16"
        />
        <button className="bg-black hover:bg-white text-white hover:text-black border-4 border-black hover:font-bold rounded-r-full rounded-l-full text-xl lg:text-2xl p-2 lg:p-4 shadow-xl hover:shadow-2xl">
          Search
        </button>
      </div>
      <div className="bg-zinc-200 my-10 flex flex-col place-content-center place-items-center rounded-xl lg:mx-3 xl:mx-10">
        <div className="flex px-10 w-full place-content-end place-items-end py-3">
          <div className="flex gap-3">
            <button className="w-20 h-10 rounded-xl bg-white font-light hover:font-medium shadow-md hover:shodow-lg">
              <span className="lg:text-xl ">Filter</span>
            </button>
            <button className="w-20 h-10 rounded-xl bg-white font-light hover:font-medium shadow-md hover:shodow-lg">
              <span className="lg:text-xl ">Sort</span>
            </button>
          </div>
        </div>
        <div className="w-[99%] h-[1px] bg-white"></div>
        <OrganisationCard />
        <OrganisationCard />
        <OrganisationCard />
        <OrganisationCard />
      </div>
    </div>
  );
}

export default Browse;
