import React from "react";

function VolProfile() {
  return (
    <div>
      <img
        src=""
        alt=""
        className="bg-black w-full h-[12.5rem] lg:h-[20rem] object-cover absolute"
      />
      <div className="flex lg:gap-3 place-content-center place-items-end px-5 lg:px-10 pt-24 lg:pt-20 absolute">
        <img
          src=""
          alt=""
          className="w-[6rem] h-[6rem] lg:w-[12.5rem] lg:h-[12.5rem] rounded-full bg-white object-cover"
        />
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          Vinayak Srivastava
        </h1>
      </div>
      <div className="pt-[13rem] lg:pt-[22.5rem]">
        <div className="flex flex-col lg:flex-row w-full justify-between px-10 pb-10">
          <h1 className="font-bold text-4xl lg:text-6xl lg:w-[27.5rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            labore?
          </h1>
          <div className="flex flex-col gap-5">
            <p className="italic text-xl lg:text-2xl bg-zinc-200 lg:w-[40rem] h-auto p-3 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              necessitatibus?
            </p>
            <h1 className="bg-zinc-200 lg:w-[40rem] h-auto rounded-xl text-justify lg:text-2xl p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem pariatur aliquid non aperiam dolor incidunt! Iste
              esse labore repellendus voluptatibus eius cupiditate magnam
              voluptate officiis impedit at mollitia alias ut nesciunt
              exercitationem assumenda obcaecati quas eveniet, voluptatem
              doloribus porro quaerat quisquam. Nisi sunt ipsa assumenda
              expedita quo exercitationem velit voluptatem?
            </h1>
          </div>
        </div>
        <hr />
        <div className="py-10 px-10">
          <h1 className="font-bold text-3xl lg:text-5xl">Specialisation:</h1>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 place-content-center place-items-center justify-between w-full lg:px-40 pt-5">
            <img
              src=""
              alt=""
              className="w-[10rem] h-[10rem] lg:w-[12.5rem] lg:h-[12.5rem] bg-black rounded-full object-cover"
            />
            <div className="flex flex-col place-content-center place-items-center lg:place-items-start gap-5">
              <div className="flex gap-12">
                <button className="text-lg lg:text-2xl w-auto h-auto p-2 border-2 hover:border-4 border-black rounded-xl bg-black hover:bg-white text-white hover:text-black font-light hover:font-semibold">
                  Skill 1
                </button>
                <button className="text-lg lg:text-2xl w-auto h-auto p-2 border-2 hover:border-4 border-black rounded-xl bg-black hover:bg-white text-white hover:text-black font-light hover:font-semibold">
                  Skill 2
                </button>
                <button className="text-lg lg:text-2xl w-auto h-auto p-2 border-2 hover:border-4 border-black rounded-xl bg-black hover:bg-white text-white hover:text-black font-light hover:font-semibold">
                  Skill 3
                </button>
              </div>
              <p className="text-xl w-[95%] lg:w-[40rem] h-auto p-4 bg-zinc-200 rounded-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                iste cum placeat ad animi quod facere dolor, officia atque.
                Necessitatibus nisi vero cum maiores vel. Fuga velit iste
                incidunt aut?
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-10 px-5">
          <h1 className="font-bold text-3xl lg:text-5xl ">
            Personal Information:
          </h1>
          <div className="grid grid-cols-2 grid-rows-5 place-content-center place-items-center gap-3 lg:gap-5 pt-5">
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Contact-Number</h1>
              <p className="font-medium  lg:text-lg">8851721696</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Email</h1>
              <p className="font-medium lg:text-lg">vinayak.xiv@gmail.com</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Age</h1>
              <p className="font-medium lg:text-lg">18</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Gender</h1>
              <p className="font-medium lg:text-lg">Male</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Designation</h1>
              <p className="font-medium lg:text-lg">Student</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Type-of-Service</h1>
              <p className="font-medium lg:text-lg">Part time</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Residential Address</h1>
              <p className="font-medium lg:text-lg">
                A-8, Mother Apartment, Plot-6, Sector-5, Dwarka, New Delhi
              </p>
            </div>
            <div className="flex flex-col place-content-center place-items-start w-[7rem] h-[7.5rem] lg:w-[17.5rem] lg:h-[5rem]">
              <h1 className="font-semibold lg:text-2xl">Pin Code</h1>
              <p className="font-medium lg:text-lg">110075</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start">
              <h1>Heading</h1>
              <p>Information</p>
            </div>
            <div className="flex flex-col place-content-center place-items-start">
              <h1>Heading</h1>
              <p>Information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolProfile;