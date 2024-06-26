import React from "react";

function Mission() {
  return (
    <div className="bg-black w-full xl:h-[55rem] flex place-content-center place-items-center">
      <div className="h-[45rem] absolute grid grid-rows-3 place-content-center place-items-center gap-24 text-center font-medium">
        <div>
          <li className="h-16 w-56">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            saepe!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              accusamus?
            </li>
            <li className="h-16 w-44 ml-9">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              consequatur!
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
  );
}

export default Mission;
