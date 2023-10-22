"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const DropBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const logout = () => {
    Cookies.remove("token");
    router.push("/");
    toast.info("تم تسجيل الخروج بنجاح ", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative inline-block">
        <div
          className="flex items-center font-extrabold hover:drop-shadow-md bg px-2 rounded-md hover:caret-yellow-500"
          onClick={toggleDropdown}
        >
          <button className="hover:text-slate-600 transition duration-300">
            <FontAwesomeIcon icon={faUser} className="text-main-white" />
          </button>
        </div>
        {isOpen && (
          <div className="absolute let-0 mt-2 w-22 bg-main-white border rounded-md border-gray-300 shadow-md">
            {/* Dropdown content goes here */}
            <ul>
              <Link href="/profile">
                <li>
                  <p className="block px-4 py-2 text-gray-800 ">Profile</p>
                </li>
              </Link>
              <button onClick={logout}>
                <li>
                  <p className="block px-4 py-2 text-gray-800 ">logout</p>
                </li>
              </button>
              {/* Add more dropdown items as needed */}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropBar;
