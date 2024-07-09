"use client";

import React, { useRef } from "react";
import Join from "./components/joining";
import Mission from "./components/mission";
import Navbar from "./components/navbar";

export default function Home() {
  const aboutUsRef = useRef(null);
  const joinUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <div className="py-2">
        <h1 className="text-center text-7xl xl:text-[9.2rem] font-bold text-gray-900">
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
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5 place-content-center place-items-center py-5 lg:py-3 xl:pt-8">
          <button
            className="w-32 h-16 xl:w-40 rounded-xl bg-black text-white font-light hover:font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black lg:duration-300"
            onClick={() => scrollToSection(aboutUsRef)}
          >
            <span className="text-center text-xl xl:text-2xl">About Us</span>
          </button>
          <button
            className="w-32 h-16 xl:w-40 rounded-xl bg-black text-white font-light hover:font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black lg:duration-300"
            onClick={() => scrollToSection(joinUsRef)}
          >
            <span className="text-center text-xl xl:text-2xl">Join Us</span>
          </button>
        </div>
        <p className="text-center pt- text-lg xl:text-xl">
          Already a member?{" "}
          <a href="" className="underline hover:italic">
            Log in
          </a>
        </p>
        <p className="text-center lg:text-3xl lg:pt-5 px-3 lg:px-10 text-gray-700 leading-relaxed">
          <span className="font-medium">
            Volunteering can lead to job opportunities that you never would have heard about otherwise.
          </span> 
          <br />
          <span className="font-light">
            It will introduce you to new people, who will see you in a positive light knowing you’re taking part in a volunteering project or programme.
          </span>
        </p>
        <p className="text-center text-xl xl:text-3xl xl:py-6 pt-3 px-2">
        </p>
        <img
          src="asset2.png"
          alt=""
          className="w-full object-cover select-none"
        />

        <div ref={aboutUsRef} className="bg-black text-white lg:pb-20">
          <h1 className="text-center px-2 text-white font-light text-4xl md:text-5xl lg:text-6xl xl:text-8xl xl:-translate-y-20">
            Creating a <span className="underline italic font-thin">bridge</span>{" "}
            between good hearts
          </h1>
          <div className="flex justify-between items-center w-full pt-10 lg:px-10">
            <div className="flex flex-col gap-7">
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-r-full p-5 lg:p-4">
                We provide volunteers a user-friendly platform for personalized
                NGO matching and offer NGOs efficient recruitment tools to reach
                dedicated volunteers, optimizing their impact on communities and
                causes.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-r-full p-5 lg:p-4 hidden lg:block">
                Our goal is to simplify volunteer-NGO connections worldwide,
                empowering individuals to find and engage with NGOs aligned with
                their values, amplifying impact through meaningful
                collaboration.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-l-full p-5 lg:p-4 lg:hidden">
                Our goal is to simplify volunteer-NGO connections worldwide,
                empowering individuals to find and engage with NGOs aligned with
                their values, amplifying impact through meaningful
                collaboration.
              </h1>
              <h1 className="text-sm md:text-lg xl:text-2xl lg:w-[30rem] xl:w-[40rem] bg-white text-black rounded-r-full p-5 lg:p-4">
                We provide volunteers a user-friendly platform for personalized
                NGO matching and offer NGOs efficient recruitment tools to reach
                dedicated volunteers, optimizing their impact on communities and
                causes.
              </h1>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-rows-1 grid-cols-2 items-center">
                <img
                  src="asset4.jpeg"
                  alt=""
                  className="h-[10rem] w-[10rem] xl:h-[15rem] xl:w-[15rem] rounded-full bg-white outline-2 outline-offset-4 outline-dashed outline-white object-cover"
                />
                <div className="flex flex-col gap-48">
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
        </div>
        <Mission />
        <div ref={joinUsRef}>
          <Join />
        </div>
      </div>
    </div>
  );
}
