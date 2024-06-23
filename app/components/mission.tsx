import React from "react";

function Mission() {
  return (
    <div className="mt-18">
      <div className="bg-black w-full h-[55rem] flex place-content-center place-items-center">
        <div className="h-[45rem] absolute grid grid-rows-3 place-content-center place-items-center gap-24 text-center font-medium">
          <div>
            <li className="h-16 w-56">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              consequuntur maxime unde sint, quas sequi?
            </li>
          </div>
          <div className="flex flex-col gap-36 place-content-center place-items-center">
            <div className="flex gap-96">
              <li className="h-16 w-44">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur illo ullam expedita fuga odio dolore.
              </li>
              <li className="h-16 w-44">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur illo ullam expedita fuga odio dolore.
              </li>
            </div>
            <div className="flex gap-72">
              <li className="h-16 w-44">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas maiores excepturi quos fugiat eligendi est!
              </li>
              <li className="h-16 w-44 ml-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas maiores excepturi quos fugiat eligendi est!
              </li>
            </div>
          </div>

          <div>
            <li className="h-16 w-44">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              maxime obcaecati nemo voluptates nulla incidunt!
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
  );
}

export default Mission;
