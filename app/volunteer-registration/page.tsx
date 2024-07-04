"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";

function VolunteerReg() {
  const [step, setStep] = useState(1);

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
  };

  const handleGoHomeClick = () => {
    window.location.href = "https://thehelpinghands.vercel.app";
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
              <p className="font-thin lg:text-3xl">
                Volunteering offers many health benefits, such as lower blood
                pressure, less stress, and a longer life. Regular volunteer work
                can boost both mental and physical health.
              </p>
              <p className="font-thin lg:text-3xl">
                Volunteering is a great way to meet new people and build social
                connections. It brings together diverse individuals, fostering
                inclusivity and understanding.
              </p>
              <p className="font-thin lg:text-3xl">
                Helping others can boost happiness and reduce depression and
                anxiety. Volunteering gives a sense of purpose and fulfillment,
                enhancing mental well-being.
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
        <div className="flex flex-col">
          <div className="flex justify-between place-content-center place-items-end px-10">
            <h1 className="font-bold text-center lg:text-left lg:w-[30rem] lg:text-8xl">
              Let&apos;s start with some simple questions...
            </h1>
            <div className="flex flex-col place-content-center place-items-end gap-3 ">
              <input
                type="text"
                id="name"
                className="h-14 w-full lg:w-[30rem] rounded-lg border-2 border-black lg:text-xl p-2"
                placeholder="Name"
                required
              />
              <input
                type="text"
                id="email"
                className="h-12 w-full lg:w-[30rem] rounded-lg border-2 border-black lg:text-xl p-2"
                placeholder="Email"
                required
              />
              <button
                className="bg-black hover:bg-white border-2 hover:border-black text-white hover:text-black hover:font-semibold w-28 h-14 rounded-xl shadow-xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="lg:text-xl">Continue</span>
              </button>
            </div>
          </div>

          <img src="asset2.png" alt="" />
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-3 place-content-center place-items-center pt-2 lg:py5">
          <h1 className="text-4xl lg:text-6xl font-bold text-center">
            Tell Us Your Story
          </h1>
          <p className="text-center text-lg xl:text-3xl px-4 xl:px-12 leading-relaxed text-gray-800 italic">
            Every volunteer has a unique journey and inspiring story to tell.
            From the moment you decided to give your time to help others, you
            became part of a global community dedicated to making a difference.
            Perhaps you were inspired by a personal experience or motivated by a
            desire to contribute to a cause close to your heart. Whatever your
            reason, your efforts have undoubtedly left a positive impact on the
            lives of many.
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
              onClick={handlePreviousClick}
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
            We know you have much to offer society. If you had to choose your
            top three contributions, what would they be?
          </p>
          <div className="grid grid-rows-5 grid-cols-3 xl:grid-rows-3 xl:grid-cols-5 place-content-center gap-y-3 place-items-center px-2 lg:px-16 lg:py-10">
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Tutor
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Public Speaking
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Music
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              English
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Problem-Solving
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Theatre
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Dancing
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Foriegn Language
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Project Management
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Mentorship
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Crisis Management
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Computer Skills
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Social Media Management
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Community Outreach
            </button>
            <button className="h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4">
              Conflict Resolution
            </button>
          </div>
          <div className="flex justify-between w-full gap-5 px-10 py-5">
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handlePreviousClick}
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

      {step === 5 && (
        <div className="flex flex-col gap-3 place-content-center place-items-center pt-2 lg:py-10">
          <h1 className="text-center font-bold text-6xl xl:text-8xl px-2">
            You&apos;re GOATED
          </h1>
          <p className="text-center font-thin text-2xl xl:text-4xl px-4 py-5">
            Thank you for your patience. You can now search for NGOs and Organisations looking for a red-caped hero like you. You can view your profile by clicking on the button below.
          </p>
          <div className="flex justify-between w-full gap-5 px-10 py-5">
            <button
              className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleGoHomeClick}
            >
              <span className="text-center text-xl lg:text-2xl">Home Page</span>
            </button>
            <button className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black">
              <span className="text-center text-xl lg:text-2xl">
                Profile
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VolunteerReg;
