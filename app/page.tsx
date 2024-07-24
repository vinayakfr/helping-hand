import Join from "./components/joining";
import Mission from "./components/mission";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Introduction() {
  return (
    <div>
      <Navbar />
      <div className="py-16 bg-gray-100">
        <h1 className="text-center text-7xl xl:text-[9.2rem] font-extrabold text-gray-900 leading-tight">
          Welcome!
        </h1>
        <p className="text-center text-2xl lg:text-3xl xl:text-4xl text-gray-700 px-4 mt-4">
          <span className="font-medium">
            Still looking to fill the volunteering section of your resume?
          </span>
        </p>
        <p className="text-center text-xl lg:text-xl xl:text-2xl text-gray-600 px-6 mt-4">
          Don&apos;t worry,{" "}
          <span className="font-semibold">we&apos;ve got you covered.</span>{" "}
          We&apos;ll help you find the{" "}
          <span className="underline">perfect opportunity</span> that suits your
          skills and interests.
        </p>
        <div className="flex flex-col gap-4 place-content-center place-items-center py-10">
          <a href="/#about-us" className="w-40 h-16 rounded-full bg-black text-white font-light hover:font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-xl hover:shadow-md hover:shadow-black transition duration-300 flex items-center justify-center">
            <span className="text-xl xl:text-2xl">About Us</span>
          </a>
          <a href="/#join" className="w-40 h-16 rounded-full bg-black text-white font-light hover:font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-xl hover:shadow-md hover:shadow-black transition duration-300 flex items-center justify-center">
            <span className="text-xl xl:text-2xl">Join Us</span>
          </a>
        </div>
        <p className="text-center text-lg xl:text-xl mt-8">
          Already a member?{" "}
          <a href="/log-in" className="underline hover:italic">
            Log in
          </a>
        </p>
        <p className="text-center lg:text-xl lg:pt-5 px-3 lg:px-20 text-gray-700 leading-relaxed mt-8">
          <span className="font-medium">
            Volunteering can lead to job opportunities that you never would have
            heard about otherwise.
          </span>
          <br />
          <span className="font-light">
            It will introduce you to new people, who will see you in a positive
            light knowing you’re taking part in a volunteering project or
            programme.
          </span>
        </p>
        <img
          src="asset2.png"
          alt="A relevant description of the image"
          className="w-full object-cover select-none mt-16"
          id="about-us"
        />
        <div className="bg-black text-white py-20">
          <h1 className="text-center text-white font-light text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            Creating a{" "}
            <span className="underline italic font-thin">bridge</span> between
            good hearts
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full pt-10 lg:px-10 space-y-10 lg:space-y-0">
            <div className="flex flex-col gap-10 lg:w-1/2 lg:mr-10">
              <h1 className="text-sm md:text-lg xl:text-2xl bg-white text-black rounded-r-full p-5 lg:p-4">
                We provide volunteers a user-friendly platform for personalized
                NGO matching and offer NGOs efficient recruitment tools to reach
                dedicated volunteers, optimizing their impact on communities and
                causes.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl bg-white text-black rounded-r-full p-5 lg:p-4 hidden lg:block">
                Our goal is to simplify volunteer-NGO connections worldwide,
                empowering individuals to find and engage with NGOs aligned with
                their values, amplifying impact through meaningful
                collaboration.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl bg-white text-black rounded-l-full p-5 lg:p-4 lg:hidden">
                Our goal is to simplify volunteer-NGO connections worldwide,
                empowering individuals to find and engage with NGOs aligned with
                their values, amplifying impact through meaningful
                collaboration.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl bg-white text-black rounded-r-full p-5 lg:p-4">
                We provide volunteers a user-friendly platform for personalized
                NGO matching and offer NGOs efficient recruitment tools to reach
                dedicated volunteers, optimizing their impact on communities and
                causes.
              </h1>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 items-center gap-10 lg:gap-20 lg:w-1/2">
              <img
                src="asset4.jpeg"
                alt=""
                className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-2 outline-offset-4 outline-dashed outline-white object-cover"
              />
              <div className="flex flex-col gap-10">
                <img
                  src="asset5.jpg"
                  alt=""
                  className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-2 outline-offset-4 outline-dashed outline-white object-cover"
                />
                <img
                  src="asset6.jpg"
                  alt=""
                  className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-2 outline-offset-4 outline-dashed outline-white object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Mission />
        <div>
          <Join />
        </div>
      </div>
      <Footer />
    </div>
  );
}
