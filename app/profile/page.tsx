import React from "react";
import Navbar from "../components/navbar";
import OrgProfile from "../components/organisation-profile";
import VolProfile from "../components/volunteer-profile";
import Footer from "../components/footer";

function page() {
  return (
    <div>
      <Navbar />
       {/* <OrgProfile/> */}
       <VolProfile/>
       <Footer />
    </div>
  );
}

export default page;
