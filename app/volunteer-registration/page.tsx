"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const VolunteerReg: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    story: "",
    skills: [] as string[],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prevData => ({
      ...prevData,
      skills: prevData.skills.includes(skill)
        ? prevData.skills.filter(s => s !== skill)
        : [...prevData.skills, skill]
    }));
  };

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  const handlePreviousClick = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'volunteer',
        story: formData.story,
        skills: formData.skills
      });
      if (response.data.token) {
        alert('Registration successful');
        setStep(step + 1);
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
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
                      type="button"
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
                  type="button"
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
                Let's start with some simple questions...
              </h1>
              <div className="flex flex-col place-content-center place-items-end gap-3 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-14 w-full lg:w-[30rem] rounded-lg border-2 border-black lg:text-xl p-2"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 w-full lg:w-[30rem] rounded-lg border-2 border-black lg:text-xl p-2"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 w-full lg:w-[30rem] rounded-lg border-2 border-black lg:text-xl p-2"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-12 w-full lg:w-[30rem] rounded-lg border-2 border-black lg:text-xl p-2"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
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
                value={formData.story}
                onChange={handleChange}
                className="w-[95%] h-[20rem] xl:h-[25rem] xl:w-[40rem] rounded-xl border-4 border-black p-3 text-lg xl:text-xl"
                placeholder="I started volunteering because..."
              />
            </div>
            <div className="flex justify-between w-full gap-5 px-10">
              <button
                type="button"
                className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handlePreviousClick}
              >
                <span className="text-center text-xl lg:text-2xl">Go back</span>
              </button>
              <button
                type="button"
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
              {['Tutor', 'Public Speaking', 'Music', 'English', 'Problem-Solving', 'Theatre', 'Dancing', 'Foreign Language', 'Project Management', 'Mentorship', 'Crisis Management', 'Computer Skills', 'Social Media Management', 'Community Outreach', 'Conflict Resolution'].map(skill => (
                <button
                  type="button"
                  key={skill}
                  className={`h-16 w-24 lg:h-24 lg:w-44 rounded-xl font-light text-white bg-black text-xl lg:text-2xl lg:p-4 ${formData.skills.includes(skill) ? 'bg-green-500' : ''}`}
                  onClick={() => handleSkillToggle(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full gap-5 px-10 py-5">
              <button
                type="button"
                className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
                onClick={handlePreviousClick}
              >
                <span className="text-center text-xl lg:text-2xl">Go back</span>
              </button>
              <button
                type="submit"
                className="h-16 w-32 xl:w-40 rounded-xl bg-black text-white font-thin hover:font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-2xl hover:shadow-md hover:shadow-black"
              >
                <span className="text-center text-xl lg:text-2xl">Continue</span>
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col gap-3 place-content-center place-items-center pt-2 lg:py-10">
            <h1 className="text-center font-bold text-6xl xl:text-8xl px-2">
              YOU'RE GOATED
            </h1>
            <p className="text-center font-thin text-2xl xl:text-4xl px-4 py-5">
              YOU ARE ALL SIGNED IN USE THE NAVBAR TO GO WHEREVER YOU WANT
            </p>
          </div>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default VolunteerReg;
