import React from "react";

function Join() {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-4xl xl:text-8xl xl:px-64 xl:py-10">
          Become a part of the{" "}
          <span className="font-thin underline italic">community</span>
        </h1>
        <div className="flex flex-col xl:flex xl:flex-row justify-between xl:place-items-center py-10">
          <div className="flex flex-col gap-2 xl:px-10">
            <p className="xl:text-3xl px-10">
              If you are looking for places where you can use your good-will and
              resources that can touch someone&apos;s heart
            </p>
            <p className="xl:text-3xl px-10">
              Or if you are an up-and-coming organisation sought to fight the
              social evils or help the kids in need
            </p>
            <p className="xl:text-3xl px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-3 xl:gap-6 place-content-center place-items-center pt-10 xl:pt-0 xl:px-32">
            <a href="/volunteer-registration" className="hidden lg:block">
              <button className="text-start w-80 h-40 rounded-lg bg-black hover:bg-white border-2 hover:border-4 border-white hover:border-black font-thin hover:font-medium duration-500 text-white hover:text-black xl:text-2xl hover:shadow-xl relative p-3">
                <span className="underline">Volunteer</span>
                <br />
                <span className="no-underline text-lg">
                  a person who freely offers to take part in an enterprise or
                  undertake a task
                </span>
              </button>
            </a>
            <a href="/volunteer-registration" className="lg:hidden">
              <button className="text-center w-40 h-16 rounded-lg bg-black hover:bg-white border-2 hover:border-4 border-white hover:border-black font-thin hover:font-medium duration-500 text-white hover:text-black xl:text-2xl hover:shadow-xl relative">
                <span className="text-2xl">Volunteer</span>
              </button>
            </a>

            <a href="/organisation-registration" className="hidden lg:block">
              <button className="text-start w-80 h-40 rounded-lg bg-black hover:bg-white border-2 hover:border-4 border-white hover:border-black font-thin hover:font-medium duration-500 text-white hover:text-black xl:text-2xl hover:shadow-xl relative p-3">
                <span className="underline">Organisation</span>
                <br />
                <span className="no-underline text-lg">
                  a person who freely offers to take part in an enterprise or
                  undertake a task
                </span>
              </button>
            </a>
            <a href="/organisation-registration" className="lg:hidden">
              <button className="text-center w-40 h-16 rounded-lg bg-black hover:bg-white border-2 hover:border-4 border-white hover:border-black font-thin hover:font-medium duration-500 hover:text-black relative">
                <span className="text-2xl text-white xl:text-2xl">Organisation</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
