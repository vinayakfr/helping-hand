import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex place-content-center">
      <div className="h-12 lg:h-14 xl:h-[4.5rem] 2xl:h-28 w-[95%] bg-black flex justify-between place-items-center rounded-l-full rounded-r-full p-4 my-2 2xl:p-8">
        <a href="/" className="font-bold xl:text-3xl 2xl:text-5xl text-white">
          HelpingHands
        </a>
        <div className="hidden md:block">
          <div className="flex place-items-center gap-3">
            <a href="" className="2xl:hidden">
              <IoIosSearch size={25} color="white" />
            </a>
            <a href="" className="hidden 2xl:block">
              <IoIosSearch size={40} color="white" />
            </a>
            <a href="/" className="font-light xl:text-2xl 2xl:text-4xl text-white hover:underline">
              Home
            </a>
            <a href="" className="font-light xl:text-2xl 2xl:text-4xl text-white hover:underline">
              About Us
            </a>
            <a href="" className="font-light xl:text-2xl 2xl:text-4xl text-white hover:underline">
              Profile
            </a>
          </div>
        </div>
        <a href="" className="block md:hidden">
          <GiHamburgerMenu size={25} color="white" />
        </a>
      </div>
    </div>
  );
}
