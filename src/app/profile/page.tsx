import React from "react";
import Responsivenavbar from "../components/responsivenavbar";
import Profile from "./components/profile";

const page = () => {
  return (
    <>
      <Responsivenavbar />
      <div className="max-w-screen-lg mx-auto 5 text-center">
        <Profile />
      </div>
    </>
  );
};

export default page;
