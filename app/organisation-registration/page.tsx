import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          {/* Step 1 content */}
          <h1 className="text-center font-bold text-5xl lg:text-7xl xl:text-8xl">
            Organisations Registration
          </h1>
          {/* Your step 1 content here */}
          <div className="flex place-content-center place-items-center pt-5 xl:pt-48">
            <Link to="/step2">
              <button
                className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="text-center text-lg xl:text-2xl">
                  Continue
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex justify-between place-content-center place-items-center w-full px-16">
          {/* Step 2 content */}
          <h1 className="font-bold xl:text-[9rem] w-[20rem] h-[45rem] leading-[8.5rem]">
            Let&apos;s start with your name
          </h1>
          {/* Your step 2 content here */}
          <div className="flex flex-col place-content-center place-items-center gap-8">
            <input
              type="text"
              placeholder="Name"
              className="w-[35rem] h-16 rounded-xl border-2 border-black xl:text-2xl p-2"
            />
            <Link to="/step3">
              <button
                className="h-14 w-28 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handleContinueClick}
              >
                <span className="text-center text-xl lg:text-2xl">Continue</span>
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Add more steps as needed */}
    </div>
  );
}

export default OrganisationReg;
