import React from "react";

function OrganisationCard() {
  return (
    <div className="grid grid-rows-1 grid-cols-3 place-content-center place-items-center px-10 py-5">
      <img
        src=""
        alt=""
        className="w-[15rem] h-[15rem] rounded-full bg-black"
      />
      <div className="flex flex-col gap-2 place-content-center place-items-center">
        <h1 className="font-bold lg:text-3xl">Organisation Name</h1>
        <p className="w-[35rem] lg:text-lg text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          sapiente aspernatur, numquam debitis, pariatur similique perferendis,
          repellat accusantium iste distinctio tenetur rem excepturi impedit id
          velit fugiat repellendus molestiae? Aliquam.
        </p>
      </div>
      <div className="flex flex-col place-content-center place-items-center gap-2">
        <button className="bg-black text-white font-medium w-28 h-10 rounded-xl text-center place-content-center ">
          View Profile
        </button>
        <button className="bg-black text-white font-medium w-28 h-10 rounded-xl text-center place-content-center ">
          Connect
        </button>
      </div>
    </div>
  );
}

export default OrganisationCard;
