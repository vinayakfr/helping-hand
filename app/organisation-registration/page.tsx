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
            <h1 className="text-center font-bold xl:text-8xl">
              Organisations Registration
            </h1>
            <div className="grid grid-cols-3 grid-rows-2 place-content-center place-items-center xl:h-[20rem] xl:pt-56">
              <div className="flex flex-col gap-10 w-[20rem] xl:text-lg">
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
                <div className="mix-blend-multiply xl:w-[20rem] xl:h-[20rem] rounded-full bg-blue-400"></div>
                <div className="mix-blend-multiply xl:w-[20rem] xl:h-[20rem] rounded-full bg-pink-400"></div>
              </div>
              <div className="flex flex-col gap-10 w-[20rem] xl:text-lg">
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
            <div className="flex place-content-center place-items-center xl:pt-48">
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
        </div>
      )}

      {step === 2 && (
        <div className="flex place-content-center place-items-stretch justify-between w-full px-10">
          <div className="flex flex-col gap-28">
            <h1 className="font-bold xl:text-[10rem] xl:leading-[9rem]">
              Let&apos;s start with your name
            </h1>
            <p className="bg-zinc-400 xl:w-[50rem] h-auto rounded-xl p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              magni beatae iusto possimus eaque officia non exercitationem rerum
              debitis blanditiis!
            </p>
          </div>

          <div className="flex flex-col palce-content-center place-items-end xl:gap-5">
            <input
              required
              type="text"
              placeholder="Name"
              className="xl:text-2xl xl:h-16 xl:w-[30rem] border-2 border-black rounded-xl p-2"
            />
            <button
              className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-lg xl:text-2xl">Continue</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="px-10">
          <h1 className="text-center font-bold xl:text-8xl">Your Mission</h1>
          <div className="flex justify-between place-content-center place-items-center pt-10">
            <h1 className="text-center xl:text-[2.5rem] font-light w-[40rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              adipisci voluptatem facere nulla dolorem ad laudantium molestiae
              tenetur earum sequi inventore odit, ex ab corporis id? Excepturi
              illo magnam hic?
            </h1>
            <div className="flex flex-col gap-10 justify-between px-10">
              <input
                required
                type="text"
                placeholder="Specialisation"
                className="xl:w-[30rem] xl:h-16 p-2 border-2 border-black rounded-xl xl:text-2xl"
              />
              <textarea
                required
                name="Start here..."
                id=""
                placeholder="Talk about your mission and how do you plan on bringing the change. Spare no detail!"
                className="p-2 border-2 border-black xl:w-[30rem] h-[20rem] rounded-xl xl:text-2xl"
              ></textarea>
            </div>
          </div>
          <div className="flex place-content-center place-items-center pt-10">
            <button
              className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black "
              onClick={handleContinueClick}
            >
              <span className="text-center text-lg xl:text-2xl">Continue</span>
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

