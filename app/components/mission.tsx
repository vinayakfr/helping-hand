import React from "react";

function Mission() {
  return (
    <div>
      <div className="lg:hidden">
        <div className="bg-black w-full h-[47.5rem] md:h-[55rem] flex place-content-end place-items-center">
          <div className="bg-white w-[92%] h-[41rem] md:w-[60%] md:h-[52.5rem]  rounded-l-full flex place-content-end place-items-center">
            <div className="absolute h-[40rem] w-full flex place-content-end place-items-center">
              <div className="grid gird-rows-3 grid-cols-3 text-n place-items-center pl-16 md:pl-[22.5rem] md:px- text-[0.7rem] text-center">
                <div className="flex flex-col gap-8 md:gap-20">
                  <li>
                    Connect passionate volunteers with meaningful NGO
                    opportunities to foster impactful change.
                  </li>
                  <li>
                    Bridge the gap between enthusiastic volunteers and NGOs in
                    need of dedicated support.
                  </li>
                </div>
                <div className="flex flex-col gap-60 md:gap-96">
                  <li>
                    Facilitate meaningful collaborations that drive social
                    change and community development.
                  </li>
                  <li>
                    Support community growth by linking volunteers with NGOs
                    focused on various social causes.
                  </li>
                </div>
                <div className="flex flex-col gap-96  md:gap-[37.5rem]">
                  <li>
                    Enhance personal and professional growth through enriching
                    volunteer experiences.
                  </li>
                  <li>
                    Build a global network of dedicated volunteers and NGOs to
                    promote a culture of giving.
                  </li>
                </div>
              </div>
            </div>
            <div className="bg-black w-[43%] h-[17.5rem] md:w-[50%] md:h-[25rem] outline-2 outline-dotted outline-black rounded-l-full flex place-content-end place-items-center">
              <h1 className="text-white font-bold text-2xl text-end px-4">
                OUR MISSION
              </h1>
            </div>
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
