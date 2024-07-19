import React from "react";
import LogIn from "../components/log-in";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function page() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center font-bold text-5xl lg:text-8xl">Log-In</h1>
        <p className="text-center font-light text-2xl lg:text-3xl py-4 lg:py-5 lg:px-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque
          nesciunt ullam distinctio. Eligendi, optio.
        </p>
        <div className="flex flex-col lg:flex-row place-content-center place-items-center justify-between w-full px-5 lg:px-10 pt-5 lg:py-10">
          <p className="lg:w-[35rem] lg:text-3xl hidden lg:block bg-black text-white p-20 rounded-r-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            magnam, dolorum deleniti iure adipisci nam dolores beatae quia
            consequatur maxime?
          </p>
          <div className="flex flex-col place-content-center place-items-center gap-3 lg:gap-5 border-4 border-black rounded-xl p-2 lg:p-7">
            <input
              type="text"
              placeholder="Full Name"
              className="text-xl lg:text-2xl p-2 border-2 border-white rounded-xl bg-black w-[20rem] h-14 lg:w-[30rem] lg:h-16 text-white"
            />
            <input
              type="text"
              placeholder="Email-Address"
              className="text-xl lg:text-2xl p-2 border-2 border-white rounded-xl bg-black w-[20rem] h-14 lg:w-[30rem] lg:h-16 text-white"
            />
            <input
              type="text"
              placeholder="Password"
              className="text-xl lg:text-2xl p-2 border-2 border-white rounded-xl bg-black w-[20rem] h-14 lg:w-[30rem] lg:h-16 text-white"
            />
            <button className="text-white bg-black w-28 h-14 lg:w-40 rounded-xl hover:bg-white hover:border-4 hover:border-black hover:font-bold hover:text-black">
              <span className="text-xl lg:text-2xl">Log-In</span>
            </button>
            <p className="text-2xl">
              Not a member?
              <span className="hover:italic underline cursor-pointer">Register</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
