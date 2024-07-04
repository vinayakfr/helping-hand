import React from "react";
import Navbar from "../components/navbar";
import OrgProfile from "../components/organisation-profile";
import VolProfile from "../components/volunteer-profile";

function page() {
  return (
    <div>
      <Navbar />
       {/* <OrgProfile/> */}
       <VolProfile/>
    </div>
  );
}

export default page;
