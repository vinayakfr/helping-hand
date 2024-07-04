import React from "react";

function OrgProfile() {
  return (
    <div>
      <img
        src=""
        alt=""
        className="w-full lg:h-[20rem] bg-black object-cover absolute"
      />
      <div className="absolute px-10 pt-24">
        <img
          src=""
          alt=""
          className="lg:w-[12.5rem] h-[12.5rem] rounded-full bg-white object-cover"
        />
      </div>
      <div className="flex lg:flex-col lg:gap-4 lg:pt-[22.5rem] relative px-10">
        <h1 className="lg:text-6xl font-bold text-black">Organisation Name</h1>
        <p className="bg-zinc-200 p-4 lg:text-2xl rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem neque necessitatibus praesentium, placeat velit quasi
          culpa, voluptate voluptatibus consequatur amet quibusdam, ad vero
          magni. Expedita reprehenderit sequi repellendus pariatur quod est
          rerum ut exercitationem illum a atque laboriosam ducimus aspernatur
          vitae omnis vel, libero accusamus quisquam repellat? Eum, consequatur.
        </p>
        <hr />
      </div>
    </div>
  );
}

export default OrgProfile;
