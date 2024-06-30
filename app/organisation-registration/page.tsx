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
            <h1 className="text-center font-bold text-5xl lg:text-7xl xl:text-8xl">
              Organisations Registration
            </h1>
            <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 place-content-center place-items-center xl:h-[20rem] pt-8 xl:pt-56 px-5">
              <div className="flex flex-col gap-5 xl:gap-10 xl:w-[20rem] xl:text-lg text-center xl:text-left">
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
              <div className="flex place-content-center place-items-center -space-x-14">
                <div className="mix-blend-multiply w-[12rem] h-[12rem] xl:w-[20rem] xl:h-[20rem] rounded-full bg-blue-400"></div>
                <div className="mix-blend-multiply w-[12rem] h-[12rem] xl:w-[20rem] xl:h-[20rem] rounded-full bg-pink-400"></div>
              </div>
              <div className="flex flex-col gap-5 xl:gap-10 xl:w-[20rem] xl:text-lg text-center xl:text-right">
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
            <div className="flex place-content-center place-items-center pt-5 xl:pt-48">
              <a href="">
                <button
                  className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black "
                  onClick={handleContinueClick}
                >
                  <span className="text-center text-lg xl:text-2xl">
                    Continue
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex justify-between place-content-center place-items-center w-full px-16">
          <div>
            <h1 className="font-bold xl:text-[9rem] w-[20rem] h-[45rem] leading-[8.5rem]">
              Let&apos;s start with your name
            </h1>
          </div>

          <div className="flex flex-col place-content-center place-items-center gap-8">
            <p className="text-justified w-[35rem] xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              architecto? Commodi labore dicta blanditiis similique totam sit
              culpa veniam possimus!
            </p>
            <input
              type="text"
              placeholder="Name"
              className="w-[35rem] h-16 rounded-xl border-2 border-black xl:text-2xl p-2"
            />
            <button
              className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl lg:text-2xl">Continue</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrganisationReg;
