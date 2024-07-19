import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LogIn from "../components/log-in";
function page() {
  return (
    <div className="grid grid-rows-1 grid-cols-1">
      <Navbar />
      <LogIn/>
      <Footer />
    </div>
  );
}

export default page;
