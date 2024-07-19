import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io';

export default function Footer() {
  return (
    <div className="flex place-content-center mt-10 bg-black py-4">
      <div className="w-[95%] flex justify-between place-items-center rounded-l-full rounded-r-full p-4 2xl:p-8 text-white">
        <h1 className="font-bold text-xl lg:text-3xl 2xl:text-5xl">TheHelpingHand</h1>
        <div className="hidden md:flex place-items-center gap-3">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <IoLogoInstagram size={25} className="text-white" />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <IoLogoFacebook size={25} className="text-white" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <IoLogoLinkedin size={25} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
