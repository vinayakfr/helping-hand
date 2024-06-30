import Join from "./components/joining";
import Mission from "./components/mission";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="py-8">
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-[9.2rem] font-bold text-gray-900">
        Welcome!
      </h1>
      <p className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 px-4 mt-4">
        <span className="font-medium">Still looking to fill the volunteering section of your resume?</span>
      </p>
      <p className="text-center text-lg lg:text-xl xl:text-2xl text-gray-600 px-4 mt-4">
        Don&apos;t worry, <span className="font-semibold">we&apos;ve got you covered.</span> We&apos;ll help you find the <span className="underline">perfect opportunity</span> that suits your skills and interests.
      </p>
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5 place-content-center place-items-center py-5 lg:py-3 xl:pt-8">
          <button className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black duration-300">
            <a href="" className="text-center md:text-lg xl:text-2xl">
              About Us
            </a>
          </button>
          <button className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md hover:shadow-black duration-300">
            <a href="" className="text-center md:text-lg xl:text-2xl">
              Join Us
            </a>
          </button>
        </div>
        <p className="text-center pt-3 text-sm md:text-[1rem] xl:text-xl">
          Already a member?{" "}
          <a href="" className="underline hover:italic">
            Log in
          </a>
        </p>
        <p className="text-center xl:text-3xl xl:py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur hic repellendus perspiciatis. Voluptates eaque at consequuntur ducimus ipsum assumenda.</p>
        <img
          src="asset2.png"
          alt=""
          className="w-full object-cover select-none"
        />

        <div className="bg-black text-white lg:pb-20">
          <h1 className="text-center px-2 text-white font-light text-4xl md:text-5xl lg:text-6xl xl:text-8xl xl:-translate-y-20">
            Creating a <a className="underline italic font-thin">bridge</a>{" "}
            between good hearts
          </h1>
          <div className="flex justify-between items-center w-full pt-10 lg:px-10">
            <div className="flex flex-col gap-7">
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem]  bg-white text-black rounded-r-full p-5 lg:p-4">
                We provide volunteers a user-friendly platform for personalized NGO matching 
                and offer NGOs efficient recruitment tools to reach dedicated volunteers, 
                optimizing their impact on communities and causes.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-r-full p-5 lg:p-4 hidden lg:block">
                Our goal is to simplify volunteer-NGO connections worldwide, 
                empowering individuals to find and engage with NGOs aligned with their values, 
                amplifying impact through meaningful collaboration.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-l-full p-5 lg:p-4 lg:hidden">
                Our goal is to simplify volunteer-NGO connections worldwide, 
                empowering individuals to find and engage with NGOs aligned with their values, 
                amplifying impact through meaningful collaboration.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-r-full p-5 lg:p-4">
                We provide volunteers a user-friendly platform for personalized NGO matching 
                and offer NGOs efficient recruitment tools to reach dedicated volunteers, 
                optimizing their impact on communities and causes.
              </h1>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-rows-1 grid-cols-2 items-center">
                <div className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-2 outline-offset-4 outline-dashed outline-white"></div>
                <div className="flex flex-col gap-48">
                  <div className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-offset-4 outline-dashed outline-white"></div>
                  <div className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-offset-4 outline-dashed outline-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Mission/>
        <Join/>
      </div>
    </div>
  );
}
