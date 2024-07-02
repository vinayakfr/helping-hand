"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";

function OrganisationReg() {
  const [step, setStep] = useState(1);

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Navbar />
      {step === 1 && (
        <div>
          <div className="flex flex-col">
            <h1 className="text-center font-bold text-5xl xl:text-8xl">
              Organisations Registration
            </h1>
            <div className="grid grid-rows-3 grod-cols-1 lg:grid-cols-3 lg:grid-rows-2 place-content-center place-items-center xl:h-[20rem] xl:pt-56 pt-5 lg:py-0">
              <div className="flex flex-col gap-5 lg:gap-10 w-[20rem] md:w-[30rem] lg:w-[25rem] xl:text-lg text-center lg:text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate obcaecati facere, consequatur optio doloremque
                  molestias ipsa asperiores id ipsam dolor ad in et placeat
                  debitis, error nostrum unde reiciendis sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate obcaecati facere, consequatur optio doloremque
                  molestias ipsa asperiores id ipsam dolor ad in et placeat
                  debitis, error nostrum unde reiciendis sit.
                </p>
              </div>
              <div className="flex justify-center -space-x-14">
                <div className="mix-blend-multiply w-[12.5rem] h-[12.5rem] xl:w-[20rem] xl:h-[20rem] rounded-full bg-blue-400"></div>
                <div className="mix-blend-multiply w-[12.5rem] h-[12.5rem] xl:w-[20rem] xl:h-[20rem] rounded-full bg-pink-400"></div>
              </div>
              <div className="flex flex-col gap-5 lg:gap-10 w-[20rem] md:w-[30rem] lg:w-[25rem] xl:text-lg text-center lg:text-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate obcaecati facere, consequatur optio doloremque
                  molestias ipsa asperiores id ipsam dolor ad in et placeat
                  debitis, error nostrum unde reiciendis sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate obcaecati facere, consequatur optio doloremque
                  molestias ipsa asperiores id ipsam dolor ad in et placeat
                  debitis, error nostrum unde reiciendis sit.
                </p>
              </div>
            </div>
            <div className="flex place-content-center place-items-center pt-8 xl:pt-48">
              <button
                className="h-16 w-32 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-light hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="text-center text-xl xl:text-2xl">
                  Continue
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col place-content-center place-items-center lg:place-items-start gap-16 px-10">
          <div className="flex flex-col lg:flex-row justify-between place-content-center place-items-center lg:place-items-end gap-5 lg:gap-0">
            <h1 className="text-left font-bold text-6xl xl:text-[10rem] xl:leading-[9rem]">
              Let&apos;s start with your name
            </h1>
            <div className="flex flex-col place-content-center place-items-center lg:place-items-end gap-5 xl:gap-5">
              <input
                required
                type="text"
                placeholder="Name"
                className="xl:text-2xl xl:h-16 w-[20rem] xl:w-[30rem] border-4 border-black rounded-xl p-2"
              />
              <button
                className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="text-center text-lg xl:text-2xl">
                  Continue
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="bg-zinc-200 w-[20rem] h-auto lg:w-[35rem] rounded-xl p-4 italic ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              quidem, quod error ratione harum libero eius mollitia ducimus
              vitae sit?
            </p>
            <p className="bg-zinc-200 w-[20rem] h-auto lg:w-[35rem] rounded-xl p-4 italic ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              quidem, quod error ratione harum libero eius mollitia ducimus
              vitae sit?
            </p>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="lg:px-10">
          <h1 className="text-center font-bold text-5xl xl:text-8xl pt-4">
            Your Mission
          </h1>
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between place-content-center place-items-center pt-4 lg:pt-10">
            <h1 className="text-center font-light text-lg lg:text-[2.5rem] lg:w-[40rem] leading-normal px-4 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              adipisci voluptatem facere nulla dolorem ad laudantium molestiae
              tenetur earum sequi inventore odit, ex ab corporis id? Excepturi
              illo magnam hic?
            </h1>
            <div className="flex flex-col gap-5 lg:gap-10 justify-between lg:px-10">
              <input
                required
                type="text"
                placeholder="Specialisation"
                className="w-[20rem] h-16 xl:w-[30rem] xl:h-16 p-2 border-[3px] border-black rounded-xl xl:text-2xl"
              />
              <textarea
                required
                name="Start here..."
                id=""
                placeholder="Talk about your mission and how do you plan on bringing the change. Spare no detail!"
                className="w-[20rem] h-[15rem] lg:w-[30rem] lg:h-[20rem] p-2 border-[3px] border-black rounded-xl xl:text-2xl"
              ></textarea>
            </div>
          </div>
          <div className="flex place-content-center place-items-center pt-5 lg:pt-10">
            <button
              className="h-16 w-32 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-light hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl xl:text-2xl">Continue</span>
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="py-10">
          <div className="flex place-content-end place-items-center xl:px-20 pt-5">
            <button className="h-14 w-28 xl:h-16 xl:w-36 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black">
              <a href="" className="text-center text-xl xl:text-2xl">
                Continue
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrganisationReg;
