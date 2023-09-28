import React from "react";
import Startnow from "./components/startnow";
import Responsivenavbar from "./components/responsivenavbar";
import Footer from "./components/footer";
const page = () => {
  return (
    <>
      <Responsivenavbar />
      <Startnow />
      <br />
      <br />
      <div className=" flex justify-center  items-center ">
        <br />
      </div>
      <Footer />
    </>
  );
};

export default page;
