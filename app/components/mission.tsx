import React from "react";

function Mission() {
  return (
    <div>
      <div className="lg:hidden">
        <div className="bg-black w-full h-[47.5rem] flex place-content-end place-items-center">
          <div className="bg-white w-[92%] h-[37.5rem] rounded-l-full flex place-content-end place-items-center">
            <div className="absolute h-[40rem] w-full flex place-content-end place-items-center">
              <div className="grid gird-rows-3 grid-cols-3 text-rose-500 place-items-center pl-12 pr-">
                <div className="flex flex-col gap-5">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </div>
                <div className="flex flex-col gap-56">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </div>
                <div className="flex flex-col gap-96">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </div>
              </div>
            </div>
            <div className="bg-black w-[50%] h-[17.5rem] outline-2 outline-dotted outline-black rounded-l-full flex place-content-center place-items-center">
              <h1 className="text-white">OUR MISSION</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-black w-full xl:h-[55rem] flex place-content-center place-items-center">
          <div className="h-[45rem] absolute grid grid-rows-3 place-content-center place-items-center gap-24 text-center font-medium">
            <div>
              <li className="h-16 w-56">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, saepe!
              </li>
            </div>
            <div className="flex flex-col gap-36 place-content-center place-items-center">
              <div className="flex gap-96">
                <li className="h-16 w-44">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas, ullam?
                </li>
                <li className="h-16 w-44">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  temporibus!
                </li>
              </div>
              <div className="flex gap-72">
                <li className="h-16 w-44">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, accusamus?
                </li>
                <li className="h-16 w-44 ml-9">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Modi, consequatur!
                </li>
              </div>
            </div>
            <div>
              <li className="h-16 w-44">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                veritatis!
              </li>
            </div>
          </div>
          <div className="bg-white h-[50rem] w-[50rem] rounded-full flex place-content-center place-items-center">
            <div className="bg-black h-[20rem] w-[20rem] rounded-full flex place-content-center place-items-center outline-dotted outline-4 outline-offset-4">
              <h1 className="text-center text-white font-medium xl:text-6xl">
                Our Mission
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img src="asset1.png" alt="" className="w-full object-cover"/>
    </div>
  );
}

export default Mission;
