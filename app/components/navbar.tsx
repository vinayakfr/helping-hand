"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">HelpingHands</a>
        <div className="flex space-x-4">
          <a href="/browse" className="hover:text-gray-400">Browse Jobs</a>
          <a href="/volunteer-registration" className="hover:text-gray-400">Sign Up</a>
          <a href="/log-in" className="hover:text-gray-400">Log In</a>
          <a href="/profile" className="hover:text-gray-400">Profile</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
