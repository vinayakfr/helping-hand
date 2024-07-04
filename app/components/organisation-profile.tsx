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
        <div className="flex justify-between w-full">
          <h1 className="lg:text-6xl font-bold text-black">
            Organisation Name
          </h1>
          <div className="flex place-content-center place-items-center gap-4">
            <p className="font-semibold lg:text-xl">Currently hiring</p>
            <button className="bg-black text-white hover:text-black hover:bg-white border-2 hover:border-4 hover:border-black font-medium hover:font-bold lg:w-24 lg:h-14 rounded-r-full rounded-l-full hover:shadow-xl">
              <span className="text-xl">Apply</span>
            </button>
          </div>
        </div>
        <p className="bg-zinc-200 p-3 rounded-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem neque necessitatibus praesentium, placeat velit quasi
          culpa, voluptate voluptatibus consequatur amet quibusdam, ad vero
          magni. Expedita reprehenderit sequi repellendus pariatur quod est
          rerum ut exercitationem illum a atque laboriosam ducimus aspernatur
          vitae omnis vel, libero accusamus quisquam repellat? Eum, consequatur.
        </p>
        <hr />
        <div className="grid grid-rows-3 grid-cols-1 gap-y-20 place-content-center place-items-center">
          <div className="flex gap-[30rem]">
            <img
              src=""
              alt=""
              className="lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-black object-cover outline-4 outline-dashed outline-offset-2 outline-black"
            />
            <img
              src=""
              alt=""
              className="lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-black object-cover outline-4 outline-dashed outline-offset-2 outline-black"
            />
          </div>
          <div className="flex place-content-center place-items-center gap-[50rem]">
            <img
              src=""
              alt=""
              className="lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-black object-cover outline-4 outline-dashed outline-offset-2 outline-black"
            />
            <div className="flex flex-col place-content-center place-items-center bg-black w-[32.5rem] h-[32.5rem] rounded-full absolute outline-4 outline-dashed outline-offset-4">
              <h1 className="font-vold lg:text-4xl underline text-white">
                Mission
              </h1>
              <p className="font-light text-white text-center p-10 lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                consequatur modi omnis labore, id odit ad aut maiores nostrum
                suscipit! Perspiciatis, reiciendis dignissimos nesciunt
                repudiandae mollitia aliquid eius voluptates aperiam
                necessitatibus exercitationem ullam ducimus! Adipisci repellat
                beatae voluptate facilis aliquam id aperiam, ex possimus
                explicabo culpa, enim assumenda quam officiis!
              </p>
            </div>
            <img
              src=""
              alt=""
              className="lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-black object-cover outline-4 outline-dashed outline-offset-2 outline-black"
            />
          </div>
          <div className="flex gap-[30rem]">
            <img
              src=""
              alt=""
              className="lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-black object-cover outline-4 outline-dashed outline-offset-2 outline-black"
            />
            <img
              src=""
              alt=""
              className="lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-black object-cover outline-4 outline-dashed outline-offset-2 outline-black"
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default OrgProfile;
