import React from "react";

function OrganisationCard() {
  return (
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 lg:gap-x-36 xl:gap-x-20 place-content-center place-items-center xl:px-10 py-5">
      <img
        src=""
        alt=""
        className="w-[10rem] h-[10rem] xl:w-[12.5rem] xl:h-[12.5rem] rounded-full bg-black"
      />
      <div className="flex flex-col gap-2 lg:gap-5 place-content-center place-items-center">
        <h1 className="font-bold text-2xl lg:text-3xl">Organisation Name</h1>
        <p className="w-[20rem] xl:w-[35rem] lg:text-lg text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          sapiente aspernatur, numquam debitis, pariatur similique perferendis,
          repellat accusantium iste distinctio tenetur rem excepturi impedit id
          velit fugiat repellendus molestiae? Aliquam.
        </p>
      </div>
      <div className="flex flex-col place-content-center place-items-center gap-2">
        <button className="bg-black text-white font-medium h-14 w-32 md:w-28 md:h-10 lg:h-16 lg:w-36 rounded-xl text-center place-content-center ">
          <span className="text-lg lg:text-xl">View Profile</span>
        </button>
        <button className="bg-black text-white font-medium h-14 w-32 md:w-28 md:h-10 lg:h-16 lg:w-36 rounded-xl text-center place-content-center ">
          <span className="text-lg lg:text-xl">Connect</span>
        </button>
      </div>
    </div>
  );
}

export default OrganisationCard;
