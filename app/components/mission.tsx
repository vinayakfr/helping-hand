import React from "react";

function Mission() {
  return (
    <div>
      <div className="lg:hidden">
        <div className="bg-black w-full h-[47.5rem] md:h-[55rem] flex place-content-end place-items-center">
          <div className="bg-white w-[92%] h-[45rem] md:w-[60%] md:h-[52.5rem]  rounded-l-full flex place-content-end place-items-center">
            <div className="absolute h-[40rem] w-full flex place-content-end place-items-center">
              <div className="grid gird-rows-3 grid-cols-3 place-items-center pl-16 md:pl-[22.5rem] text-[0.7rem] text-center">
                <div className="flex flex-col gap-14 md:gap-20">
                  <li className="font-bold w-36">
                    Connect passionate volunteers with meaningful NGO
                    opportunities to foster impactful change.
                  </li>
                  <li className="font-bold">
                    Bridge the gap between enthusiastic volunteers and NGOs in
                    need of dedicated support.
                  </li>
                </div>
                <div className="flex flex-col gap-72 md:gap-96">
                  <li className="font-bold w-36">
                    Facilitate meaningful collaborations that drive social
                    change and community development.
                  </li>
                  <li className="font-bold">
                    Support community growth by linking volunteers with NGOs
                    focused on various social causes.
                  </li>
                </div>
                <div className="flex flex-col gap-[30rem] md:gap-[37.5rem]">
                  <li className="font-bold">
                    Enhance personal and professional growth through enriching
                    volunteer experiences.
                  </li>
                  <li className="font-bold">
                    Build a global network of dedicated volunteers and NGOs to
                    promote a culture of giving.
                  </li>
                </div>
              </div>
            </div>
            <div className="bg-black w-[43%] h-[18rem] md:w-[50%] md:h-[25rem] outline-2 outline-dashed outline-black outline-offset-8 rounded-l-full flex place-content-end place-items-center">
              <h1 className="text-white font-bold text-2xl text-end px-4">
                OUR MISSION
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="relative bg-black w-full grid grid-rows-3 grid-cols-1 gap-y-8 place-content-center place-items-center">
          <div className="flex justify-between place-content-center place-items-center gap-12">
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[9rem] h-[9rem] rounded-full"></div>
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[9rem] h-[9rem] rounded-full"></div>
          </div>
          <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[9rem] h-[9rem] rounded-full"></div>
          <div className="flex justify-between place-content-center place-items-center gap-12">
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[9rem] h-[9rem] rounded-full"></div>
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[9rem] h-[9rem] rounded-full"></div>
          </div>
        </div> */}
        <div className="md:hidden">
          <div className="flex flex-col place-content-center place-items-center gap-6 bg-black w-full relative pt-10">
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[17.5rem] h-[9rem] rounded-xl"></div>
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[17.5rem] h-[9rem] rounded-xl"></div>
            <div className="bg-white outline-2 outline-dotted outline-white outline-offset-4 w-[17.5rem] h-[9rem] rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-black w-full lg:h-[52.5rem] xl:h-[55rem] flex place-content-center place-items-center">
          <div className="h-[45rem] absolute grid grid-rows-3 place-content-center place-items-center gap-24 text-center font-medium">
            <div>
              <li className="h-16 w-56">
                Connect passionate volunteers with meaningful NGO opportunities
                to foster impactful change.
              </li>
            </div>
            <div className="flex flex-col gap-36 place-content-center place-items-center">
              <div className="flex gap-96">
                <li className="h-16 w-44">
                  Bridge the gap between enthusiastic volunteers and NGOs in
                  need of dedicated support.
                </li>
                <li className="h-16 w-44">
                  Facilitate meaningful collaborations that drive social change
                  and community development.
                </li>
              </div>
              <div className="flex gap-72">
                <li className="h-16 w-44">
                  Support community growth by linking volunteers with NGOs
                  focused on various social causes.
                </li>
                <li className="h-16 w-44 ml-9">
                  Enhance personal and professional growth through enriching
                  volunteer experiences.
                </li>
              </div>
            </div>
            <div>
              <li className="h-16 w-44">
                Build a global network of dedicated volunteers and NGOs to
                promote a culture of giving.
              </li>
            </div>
          </div>
          <div className="bg-white h-[50rem] w-[50rem] rounded-full flex place-content-center place-items-center outline-4 outline-dotted outline-white outline-offset-8">
            <div className="bg-black h-[20rem] w-[20rem] rounded-full flex place-content-center place-items-center outline-dotted outline-4 outline-offset-4">
              <h1 className="text-center text-white font-medium xl:text-6xl">
                Our Mission
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img src="asset1.png" alt="" className="w-full object-cover" />
    </div>
  );
}

export default Mission;
