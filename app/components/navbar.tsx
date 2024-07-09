"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="flex place-content-center">
      <div className="h-12 lg:h-14 xl:h-[4.5rem] 2xl:h-28 w-[95%] bg-black flex justify-between place-items-center rounded-l-full rounded-r-full p-4 my-2 2xl:p-8">
        <a
          href="/"
          className="font-bold text-xl lg:text-3xl 2xl:text-5xl text-white"
        >
          HelpingHands
        </a>
        <div className="hidden md:block">
          <div className="flex place-items-center gap-3">
            <a href="" className="2xl:hidden" aria-label="Search">
              <IoIosSearch size={25} color="white" />
            </a>
            <a href="" className="hidden 2xl:block" aria-label="Search">
              <IoIosSearch size={40} color="white" />
            </a>
            <a
              href="/"
              className="font-light xl:text-2xl 2xl:text-4xl text-white hover:underline underline-offset-4"
            >
              Home
            </a>
            <a
              href="/browse"
              className="font-light xl:text-2xl 2xl:text-4xl text-white hover:underline underline-offset-4"
            >
              Browse
            </a>
            <a
              href="/profile"
              className="font-light xl:text-2xl 2xl:text-4xl text-white hover:underline underline-offset-4"
            >
              Profile
            </a>
          </div>
        </div>
        <button
          className="block md:hidden"
          onClick={handleMenu}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu size={25} color="white" />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-white opacity-95 flex flex-col gap-3 place-content-center place-items-center text-black z-50 p-5">
          <button
            className="absolute top-4 right-7 text-3xl"
            onClick={handleMenu}
          >
            <span className="font-black">✕</span>
          </button>
          <button
            onClick={handleMenu}
            className="font-light text-2xl my-2 hover:underline"
          >
            <span className="font-bold text-3xl">HelpingHand</span>
          </button>
          <a
            href="/"
            className="font-medium text-2xl hover:italic"
            onClick={handleMenu}
          >
            Home
          </a>
          <a
            href=""
            className="font-medium text-2xl hover:italic"
            onClick={handleMenu}
          >
            About Us
          </a>
          <a
            href="/profile"
            className="font-medium text-2xl hover:italic"
            onClick={handleMenu}
          >
            Profile
          </a>
        </div>
      )}
    </div>
  );
}
