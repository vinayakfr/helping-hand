"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";

function VolunteerReg() {
  const [step, setStep] = useState(1);

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Navbar />
      {step === 1 && (
        <div className="flex place-content-center place-items-start px-10">
          <h1 className="xl:text-[8rem] font-bold">Volunteers Assemble</h1>
          <div className="flex flex-col gap-8 p-[3rem] ">
            <p className="xl:text-2xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              aspernatur totam odio nisi. Accusamus, illum!
            </p>
            <p className="xl:text-2xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              aspernatur totam odio nisi. Accusamus, illum!
            </p>
            <p className="xl:text-2xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              aspernatur totam odio nisi. Accusamus, illum!
            </p>
            <p className="xl:text-2xl font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              aspernatur totam odio nisi. Accusamus, illum!
            </p>
            <div className="flex place-content-end place-items-center">
              <button
                className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="text-center md:text-lg xl:text-2xl">
                  Continue
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-5 place-content-center place-items-center px-10 py-10">
          <h1 className=" text-center xl:text-6xl font-bold">
            Let's start by creating your profile
          </h1>
          <p className="text-center xl:text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptas nesciunt nostrum in, harum exercitationem?
          </p>
          <div className="h-[25rem] w-[35rem] rounded-xl bg-black flex flex-col gap-6 place-content-center place-items-center py-5">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="xl:text-2xl font-medium text-white">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                className="h-12 w-[30rem] rounded-lg border-2 border-black xl:text-xl"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="xl:text-2xl font-medium text-white">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="h-12 w-[30rem] rounded-lg border-2 border-black xl:text-xl"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="xl:text-2xl font-medium text-white">
                Phone Number*
              </label>
              <input
                type="text"
                id="phone"
                className="h-12 w-[30rem] rounded-lg border-2 border-black xl:text-xl"
                required
              />
            </div>
          </div>
          <button
            className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
            onClick={handleContinueClick}
          >
            <span className="text-center md:text-lg xl:text-2xl">
              Continue
            </span>
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-3 place-content-center place-items-center py-10">
          <h1 className="font-bold xl:text-8xl">Tell us your story</h1>
          <p className="text-center font-light xl:text-3xl px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quos placeat dicta adipisci delectus libero ullam incidunt saepe, sit
            perspiciatis dolorum repellendus veritatis eveniet, neque illum
            tenetur quaerat aliquid dolorem.
          </p>
          <div className="flex w-full justify-between place-content-center place-items-center px-24 py-5">
            <div className="flex flex-col gap-4 place-content-center place-items-start xl:text-3xl font-thin italic ">
              <li>Why did you start volunteering?</li>
              <li>Where have you worked before?</li>
              <li>What is the one thing that you gained from volunteering?</li>
            </div>
            <textarea
              name="story"
              id="story"
              className="h-[25rem] w-[40rem] rounded-xl border-4 border-black p-3 xl:text-xl"
              placeholder="I started volunteering because..."
            />
          </div>
          <button
            className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black "
            onClick={handleContinueClick}
          >
            <span className="text-center md:text-lg xl:text-2xl">
              Continue
            </span>
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="py-10">
          <h1 className="text-center font-bold xl:text-8xl">Time to show-off</h1>
          <p className="text-center font-thin xl:text-4xl py-5">
            We know that you have a lot to offer to the society. But if you were
            to pick your top three...what will they be?
          </p>
          <div className="grid grid-rows-3 grid-cols-5 gap-y-4 place-content-center place-items-center px-10 py-10">
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
            <button className="h-20 w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
          </div>
          <div className="flex place-content-end place-items-center px-20">
            <button className="h-14 w-28 xl:h-16 xl:w-36 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black">
              <a href="" className="text-center md:text-lg xl:text-2xl">
                Continue
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VolunteerReg;
