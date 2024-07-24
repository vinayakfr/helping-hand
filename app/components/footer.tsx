"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          TheHelpingHand
        </div>
        <div className="text-lg">
          Follow us on:
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-gray-400">
            Instagram
          </a>
          <span className="mx-2">|</span>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Facebook
          </a>
          <span className="mx-2">|</span>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
