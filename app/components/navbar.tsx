export default function Navbar() {
  return (
    <div>
      <nav className="bg-black text-white p-4 flex justify-between items-center h-20 text-xl xl:text-2xl rounded-full mx-2 xl:mx-5">
        <a href="#" className="font-bold text-2xl xl:text-3xl ml-5 hover:underline cursor-pointer">
          HelpingHand
        </a>
        <div className="flex space-x-4 mr-5">
          <a href="" className="hover:underline cursor-pointer">
            Search
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            Home
          </a>
          <a href="" className="hover:underline cursor-pointer">
            Inbox
          </a>
          <a href="" className="hover:underline cursor-pointer">
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
}
