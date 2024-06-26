import React from "react";

function Join() {
  return (
    <div>
      <img
        src="asset3.png"
        alt="Community Image"
        className="w-full object-cover absolute -translate-y-[2.5px]"
      />
      <div className="relative">
        <h1 className="text-center font-bold xl:text-8xl px-64 py-10">
          Become a part of the{" "}
          <span className="font-thin underline italic">community</span>
        </h1>
        <div className="flex justify-between place-items-center py-10">
          <div className="flex flex-col gap-2 px-10">
            <p className="xl:text-3xl px-10">
              If you are looking for places where you can use your good-will and
              resources that can touch someone's heart
            </p>
            <p className="xl:text-3xl px-10">
              Or if you are an up-and-coming organisation sought to fight the
              social evils or help the kids in need
            </p>
            <p className="xl:text-3xl px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-6 place-content-center place-items-center px-32">
            <a href="/volunteer-registration">
              <button className="text-start w-80 h-40 rounded-lg bg-black hover:bg-white border-2 hover:border-4 border-white hover:border-black font-thin hover:font-medium duration-500 text-white hover:text-black xl:text-2xl relative p-3">
                <span className="underline">Volunteer</span>
                <br />
                <span className="no-underline text-lg">
                  a person who freely offers to take part in an enterprise or
                  undertake a task
                </span>
              </button>
            </a>

            <a href="">
              <button className="text-start w-80 h-40 rounded-lg bg-black hover:bg-white border-2 hover:border-4 border-white hover:border-black font-thin hover:font-medium duration-500 text-white hover:text-black xl:text-2xl relative p-3">
                <span className="underline">Organisation</span>
                <br />
                <span className="no-underline text-lg">
                  a person who freely offers to take part in an enterprise or
                  undertake a task
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
