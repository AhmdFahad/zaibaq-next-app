import React from "react";
import Startnow from "./components/startnow";
import Responsivenavbar from "./components/responsivenavbar";
const page = () => {
  return (
    <>
      <Responsivenavbar />
      <Startnow />
      <br />
      <br />
      <div className=" flex justify-center  items-center ">
        <p className="text-5xl ">قادمين قريبا</p>
        <br />
      </div>
    </>
  );
};

export default page;
