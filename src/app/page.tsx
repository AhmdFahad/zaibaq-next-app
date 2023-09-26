import React from "react";
import Navbar from "./components/navbar";
import Startnow from "./components/startnow";
const page = () => {
  return (
    <>
      <Navbar />
      <Startnow />
      <div className=" flex justify-center  items-center ">
        <p className="text-5xl ">قادمين قريبا</p>
        <br />
      </div>
    </>
  );
};

export default page;
