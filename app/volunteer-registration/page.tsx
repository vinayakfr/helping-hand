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
        <div>
          <div className="flex flex-col lg:flex-row place-content-center place-items-center lg:place-items-start xl:px-10">
            <h1 className="text-[3.5rem] xl:text-[8rem] font-bold leading-[3.5rem] lg:leading-none px-2">
              Volunteers Assemble
            </h1>
            <div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-[3rem] place-content-start place-items-start">
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
              <div className="hidden lg:block">
                <div className="flex place-content-end place-items-end">
                  <button
                    className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                    onClick={handleContinueClick}
                  >
                    <span className="text-center text-xl lg:text-2xl">
                      Continue
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex place-content-end place-items-end px-5">
              <button
                className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="text-center text-xl lg:text-2xl">
                  Continue
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-5 place-content-center place-items-center px-3 xl:px-10 pt-2 lg:py-10">
          <h1 className="text-center text-5xl lg:text-6xl font-bold leading-[3.5rem]">
            Let&apos;s start by creating your profile
          </h1>
          <p className="text-center text-xl xl:text-3xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptas nesciunt nostrum in, harum exercitationem?
          </p>
          <div className="w-full h-[20rem] xl:h-[25rem] xl:w-[35rem] rounded-xl bg-black flex flex-col gap-6 place-content-start xl:place-content-center xl:place-items-center py-5 px-5">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="xl:text-2xl font-medium text-white"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                className="h-12 w-full xl:w-[30rem] rounded-lg border-2 border-black xl:text-xl"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="xl:text-2xl font-medium text-white"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="h-12 w-full xl:w-[30rem] rounded-lg border-2 border-black xl:text-xl"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="xl:text-2xl font-medium text-white"
              >
                Phone Number*
              </label>
              <input
                type="text"
                id="phone"
                className="h-12 w-full xl:w-[30rem] rounded-lg border-2 border-black xl:text-xl"
                required
              />
            </div>
          </div>
          <div className="flex justify-between w-full gap-5 px-10">
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl lg:text-2xl">Go back</span>
            </button>
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl lg:text-2xl">Continue</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-3 place-content-center place-items-center pt-2 lg:py-10">
          <h1 className="text-center font-bold text-6xl xl:text-8xl px-2 xl:px-0">
            Tell us your story
          </h1>
          <p className="text-center font-light text-lg xl:text-3xl px-2 xl:px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quos placeat dicta adipisci delectus libero ullam incidunt saepe,
            sit perspiciatis dolorum repellendus veritatis eveniet, neque illum
            tenetur quaerat aliquid dolorem.
          </p>
          <div className="flex flex-col lg:flex-row w-full justify-between place-content-center place-items-center xl:px-24 lg:py-5">
            <div className="hidden lg:block">
              <div className="flex flex-col gap-4 place-content-center place-items-start xl:text-3xl font-thin italic ">
                <li>Why did you start volunteering?</li>
                <li>Where have you worked before?</li>
                <li>
                  What is the one thing that you gained from volunteering?
                </li>
              </div>
            </div>
            <textarea
              name="story"
              id="story"
              className="w-[95%] h-[20rem] xl:h-[25rem] xl:w-[40rem] rounded-xl border-4 border-black p-3 text-lg xl:text-xl"
              placeholder="I started volunteering because..."
            />
          </div>
          <div className="flex justify-between w-full gap-5 px-10">
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl lg:text-2xl">Go back</span>
            </button>
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl lg:text-2xl">Continue</span>
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="pt-2 lg:py-10">
          <h1 className="text-center font-bold text-6xl xl:text-8xl px-2">
            Time to show-off
          </h1>
          <p className="text-center font-thin text-2xl xl:text-4xl px-4 py-5">
            We know that you have a lot to offer to the society. But if you were
            to pick your top three...what will they be?
          </p>
          <div className="grid grid-rows-5 grid-cols-3 xl:grid-rows-3 xl:grid-cols-5 gap-x-4 gap-y-2 place-content-center place-items-center px-2 xl:px-10 lg:py-10">
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black text-xl xl:text-3xl">
              Skill
            </button>
            <button className="h-16 w-24 xl:h-20 xl:w-48 rounded-xl font-thin text-white bg-black xl:text-3xl">
              Skill
            </button>
          </div>
          <div className="flex justify-between w-full gap-5 px-10 py-5">
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl lg:text-2xl">Go back</span>
            </button>
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
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

export default VolunteerReg;
