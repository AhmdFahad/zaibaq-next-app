import React from "react";
import Startnow from "./components/startnow";
import Responsivenavbar from "./components/responsivenavbar";
import Image from "next/image";
import logo from "@/app/public/logo.png";
import Footer from "./components/footer";
const page = () => {
  return (
    <>
      <Responsivenavbar />
      <div className="flex flex-col justify-center items-center">
        {/* Big Logo */}
        <div className="w-72 h-72 bg-main-MutedBlue bg-opacity-60 rounded-full flex justify-center items-center mb-8">
          {/* You can replace this div with your logo */}
          <Image src={logo} alt="Logo" className="w-48 h-48" />
        </div>
        <p className="text-3xl text-main-white mb-8  text-center">
          أستمتع بالتجربة الأفضل في إنشاء المتاجر الإلكترونية
        </p>
        {/* Start Button */}
        <Startnow />
      </div>

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
