export default function Navbar() {
  return (
    <div>
      <nav className="bg-black text-white p-4 flex justify-between items-center h-20 text-xl xl:text-2xl">
        <div className="font-bold text-2xl xl:text-3xl">HelpingHand</div>
        <div className="flex space-x-4">
          <a href="" className="hover:underline">
            Search
          </a>
          <a href="" className="hover:underline">
            Home
          </a>
          <a href="" className="hover:underline">
            Inbox
          </a>
          <a href="" className="hover:underline">
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
}
