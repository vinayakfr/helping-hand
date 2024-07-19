"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function OrganisationReg() {
  const [step, setStep] = useState(1);

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
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
                  Welcome to The Helping Hands! By registering your organization, you can connect with dedicated volunteers who are eager to support your cause and make a difference. Our platform allows you to find the right volunteers for your needs, whether for events, projects, or ongoing support.
                </p>
                <p>
                  Our easy registration process will guide you through providing the necessary information to get your organization up and running on our platform. Let&apos;s work together to create positive change and build a stronger community.
                </p>
              </div>
              <div className="flex justify-center -space-x-14">
                <div className="mix-blend-multiply w-[12.5rem] h-[12.5rem] xl:w-[20rem] xl:h-[20rem] rounded-full bg-blue-400"></div>
                <div className="mix-blend-multiply w-[12.5rem] h-[12.5rem] xl:w-[20rem] xl:h-[20rem] rounded-full bg-pink-400"></div>
              </div>
              <div className="flex flex-col gap-5 lg:gap-10 w-[20rem] md:w-[30rem] lg:w-[25rem] xl:text-lg text-center lg:text-right">
                <p>
                  By joining our platform, you gain access to a network of passionate individuals who are ready to contribute their time and skills. Together, we can achieve your organization&apos;s goals and amplify your impact in the community.
                </p>
                <p>
                  Our support team is here to assist you throughout the registration process and beyond. Don&apos;t hesitate to reach out if you have any questions or need assistance. Let&apos;s get started!
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
              Providing your name helps us personalize your experience and ensures that we can address you correctly in all communications.
            </p>
            <p className="bg-zinc-200 w-[20rem] h-auto lg:w-[35rem] rounded-xl p-4 italic ">
              Rest assured that your information is kept confidential and will only be used to enhance your interaction with our platform.
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
              Share the mission of your organization. What are your core values and goals? How do you aim to create a positive impact in the community?
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
          <div className="flex lg:justify-between place-content-center place-items-center gap-5 lg:pt-5">
              <button
                className="h-16 w-32 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-light hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handlePreviousClick}
              >
                <span className="text-center text-xl xl:text-2xl">
                  Go Back
                </span>
              </button>
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
      )}

      {step === 4 && (
        <div className="py-2 lg:py-5">
          <div className="flex flex-col gap-5 place-content-end place-items-center lg:px-10">
            <h1 className="text-center font-bold text-4xl lg:text-6xl px-3 lg:px-20">
              A few questions to help us set up your account
            </h1>
            <div className="flex flex-col lg:w-[50rem] gap-2 place-content-center place-items-center">
              <div className="flex flex-col lg:flex-row justify-between w-full place-content-center place-items-start lg:place-items-center">
                <p className="lg:text-xl">Are you currently hiring?</p>
                <select
                  name="question1"
                  id="question1"
                  className="lg:text-xl p-2 rounded-r-full rounded-l-full border-2 border-black"
                >
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full place-content-center place-items-start lg:place-items-center">
                <p className="lg:text-xl">
                  What kind of service are you looking for?
                </p>
                <select
                  name="question2"
                  id="question2"
                  className="lg:text-xl p-2 rounded-r-full rounded-l-full border-2 border-black"
                >
                  <option value="volunteers">Volunteers</option>
                  <option value="full-time">Full-time employees</option>
                  <option value="part-time">Part-time employees</option>
                  <option value="interns">Interns</option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full place-content-center place-items-start lg:place-items-center">
                <p className="lg:text-xl">
                  What is your preferred method of contact?
                </p>
                <select
                  name="question3"
                  id="question3"
                  className="lg:text-xl p-2 rounded-r-full rounded-l-full border-2 border-black"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="messaging">Messaging App</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
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
      )}

      {step === 5 && (
        <div className="py-2 lg:py-5">
          <div className="flex flex-col gap-5 place-content-end place-items-center lg:px-10">
            <h1 className="text-center font-bold text-4xl lg:text-6xl px-3 lg:px-20">
              Set Up Your Account
            </h1>
            <div className="flex flex-col lg:w-[50rem] gap-2 place-content-center place-items-center">
              <div className="flex flex-col lg:flex-row justify-between w-full place-content-center place-items-start lg:place-items-center">
                <p className="lg:text-xl">Organization Name</p>
                <input
                  required
                  type="text"
                  placeholder="Organization Name"
                  className="lg:text-xl p-2 rounded-r-full rounded-l-full border-2 border-black"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full place-content-center place-items-start lg:place-items-center">
                <p className="lg:text-xl">Email Address</p>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="lg:text-xl p-2 rounded-r-full rounded-l-full border-2 border-black"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full place-content-center place-items-start lg:place-items-center">
                <p className="lg:text-xl">Password</p>
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="lg:text-xl p-2 rounded-r-full rounded-l-full border-2 border-black"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <button
              className="h-16 w-32 xl:h-16 xl:w-40 rounded-xl bg-black text-white font-light hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              onClick={handleContinueClick}
            >
              <span className="text-center text-xl xl:text-2xl">
                Finish
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="py-2 lg:py-5">
          <div className="flex flex-col gap-5 place-content-end place-items-center lg:px-10">
            <h1 className="text-center font-bold text-4xl lg:text-6xl px-3 lg:px-20">
              Registration Complete!
            </h1>
            <p className="text-center lg:text-xl px-3 lg:px-20">
              Thank you for registering your organization with The Helping Hands! We are excited to have you on board and look forward to making a positive impact together.
            </p>
            <p className="text-center lg:text-xl px-3 lg:px-20">
              A confirmation email has been sent to your provided email address. Please check your inbox to verify your account and start connecting with volunteers.
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default OrganisationReg;
