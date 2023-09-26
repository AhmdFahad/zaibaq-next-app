"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import React useState for handling the mobile menu state
import logo from "../public/logo.png";

const Responsivenavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="p-4 w-full top-0 left-0">
      <div className="max-w-screen-lg mx-auto border-b-2 border-white border-opacity-5">
        <div className="flex flex-row sm:flex-row items-center justify-between">
          <div className="flex items-center font-extrabold hover:drop-shadow-md bg-main-white text-main-dark px-2 rounded-md hover:caret-yellow-500">
            {/* Left Section (User Register/Login) */}
            <Link href="/auth">
              <button>تسجيل الدخول</button>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            className="sm:hidden font-thin text-3xl"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          {/* Center Section (3 Buttons) */}
          <div
            className={`font-extrabold mt-4 sm:mt-0 ${
              mobileMenuOpen ? "grid" : "hidden"
            } sm:flex`}
          >
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
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
          <div className="mt-4 lg:mt-0">
            <Link href={"/"}>
              <Image src={logo} alt="Logo" className="w-16 h-16" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Responsivenavbar;
