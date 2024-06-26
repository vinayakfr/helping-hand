import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="py-8">
        <h1 className="text-center text-4xl md:text-6xl lg:text-8xl xl:text-[9rem] font-bold">
          Welcome!!
        </h1>
        <p className="text-center font-medium md:text-3xl lg:text-4xl xl:text-5xl px-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-center font-thin text-xl lg:text-2xl xl:text-[2.2rem] px-4 xl:px-10 py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptate praesentium provident accusamus illum exercitationem fugit
          sit autem dolorum quasi?
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
        <img
          src="asset2.png"
          alt=""
          className="w-full object-fill select-none"
        />

        <div className="bg-black text-white relative">
          <h1 className="text-center px-5 text-white font-light xl:text-8xl">
            Creating a <a className="underline italic font-thin">bridge</a>{" "}
            between good hearts
          </h1>
          <div className="flex justify-between items-center w-full pt-10 px-10">
            <div className="flex flex-col gap-5">
              <h1 className="xl:text-2xl xl:w-[40rem] bg-white text-black rounded-r-full p-4">
                "To connect passionate volunteers with meaningful opportunities
                in non-governmental organizations (NGOs) worldwide, fostering
                impactful collaborations that drive social change, support
                community development, and enhance individual growth."
              </h1>
              <h1 className="xl:text-2xl xl:w-[40rem] bg-white text-black rounded-r-full p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                placeat aliquam rem deleniti iste vitae tempora tempore? Fugit
                labore ipsa rem recusandae incidunt cum facere libero totam,
                blanditiis porro distinctio, odio quos adipisci, alias repellat.
              </h1>
              <h1 className="xl:text-2xl xl:w-[40rem] bg-white text-black rounded-r-full p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                placeat aliquam rem deleniti iste vitae tempora tempore? Fugit
                labore ipsa rem recusandae incidunt cum facere libero totam,
                blanditiis porro distinctio, odio quos adipisci, alias repellat.
              </h1>
            </div>

            <div className="grid grid-rows-1 grid-cols-2 items-center">
              <div className="xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-2 outline-offset-4 outline-dashed outline-white"></div>
              <div className="flex flex-col gap-48">
                <div className="xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-offset-4 outline-dashed outline-white"></div>
                <div className="xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-offset-4 outline-dashed outline-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
