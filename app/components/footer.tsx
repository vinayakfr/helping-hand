import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io";

export default function Footer() {
  return (
    <div className="flex w-full justify-between place-items-center place-content-center px-10 bg-black lg:h-20">
      <h1 className="lg:text-3xl font-bold text-white">TheHelpingHand</h1>
      <div className="flex gap-3 place-items-center text-white">
        <a href="https://www.instagram.com" aria-label="Instagram">
          <IoLogoInstagram size={30} className="text-white" />
        </a>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <IoLogoFacebook size={30} className="text-white" />
        </a>
        <a href="https://www.linkedin.com" aria-label="LinkedIn">
          <IoLogoLinkedin size={30} className="text-white" />
        </a>
      </div>
    </div>
  );
}
