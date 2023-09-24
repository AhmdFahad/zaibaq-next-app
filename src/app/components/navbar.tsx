import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import logo from "../public/logo.png";
const Navbar = () => {
  return (
    <div className=" p-4 w-full  top-0 left-0   ">
      <div className="max-w-screen-lg mx-auto border-b-2 border-white  border-opacity-5 ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center font-extrabold  hover:drop-shadow-md	 bg-main-white text-main-dark px-2 rounded-md hover:caret-yellow-500 ">
            {/* Left Section (User Register/Login) */}
            <Link href="/auth">
              <button>تسجيل الدخول</button>
            </Link>
          </div>

          {/* Center Section (3 Buttons) */}
          <div className="font-extrabold">
            <ul className="flex space-x-10">
              <li>
                <Link href="/stores">
                  <button className="">المتاجر</button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button className="  ">الصفحه الرئيسيه</button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button className="">عن زئبق</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section (Logo) */}
          <div className="">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                className="w-16 h-16"
                width={128}
                height={128}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
