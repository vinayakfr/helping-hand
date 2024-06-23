import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-center xl:text-[9rem] font-bold">Welcome!!</h1>
        <p className="text-center font-medium xl:text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-center font-thin xl:text-[2.2rem] px-10 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum voluptate praesentium provident accusamus illum exercitationem fugit sit autem dolorum quasi?</p>
        <div className="flex flex-col gap-5 place-content-center place-items-center py-5">
          <button className="h-16 w-40 rounded-xl bg-black text-white">
            <a href="" className="text-center xl:text-2xl font-thin">Read More</a>
          </button>
          <button className="h-16 w-40 rounded-xl bg-black text-white font-thin">
            <a href="" className="text-center xl:text-2xl">Join Us</a>
          </button>
        </div>
        <p className="text-center xl:text-xl">Already a member? {" "}
          <a href="" className="underline">Log in</a>
        </p>
      <h1 className="text-center text-4xl md:text-6xl lg:text-8xl xl:text-[9rem] font-bold">
        Welcome!!
      </h1>
      <p className="text-center font-medium md:text-3xl lg:text-4xl xl:text-5xl px-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-center font-thin text-xl lg:text-2xl xl:text-[2.2rem] px-4 xl:px-10 py-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        voluptate praesentium provident accusamus illum exercitationem fugit sit
        autem dolorum quasi?
      </p>
      <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5 place-content-center place-items-center lg:py-3 xl:py-5">
        <button className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black">
          <a href="" className="text-center md:text-lg xl:text-2xl">
            Read More
          </a>
        </button>
        <button className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md hover:shadow-black">
          <a href="" className="text-center md:text-lg xl:text-2xl">
            Join Us
          </a>
        </button>
      </div>
      <p className="text-center pt-3 text-sm md:text-[1rem] xl:text-xl">
        Already a member?{" "}
        <a href="" className="underline">
          Log in
        </a>
      </p>
      <img src="asset2.png" alt="" className="w-full object-fill select-none" />

      <div className="bg-black mx-[0.295px] text-white">
        <h1 className="text-center px-5 text-white font-light xl:text-8xl ">
          Creating a <a className="underline italic font-thin">bridge</a>{" "}
          between good hearts
        </h1>
      </div>
    </div>
    </div>
  );
}
