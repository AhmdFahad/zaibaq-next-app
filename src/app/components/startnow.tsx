import Image from "next/image";
import React from "react";
import logo from "@/app/public/logo.png";
const Startnow = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Big Logo */}
      <div className="w-72 h-72 bg-main-MutedBlue bg-opacity-60 rounded-full flex justify-center items-center mb-8">
        {/* You can replace this div with your logo */}
        <Image src={logo} alt="Logo" className="w-48 h-48" />
      </div>

      {/* Start Button */}
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        ابدأ الان
      </button>
    </div>
  );
};

export default Startnow;
