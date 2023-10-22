"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropBar from "./dropBar";

const UserLoginAndProfile = () => {
  var token = Cookies.get("token");
  const [isLoggedin, setIsLoggedin] = useState(
    token === undefined ? false : true
  );
  useEffect(() => {
    const x = token === undefined ? false : true;
    setIsLoggedin(x);
  }, [token]);
  if (!isLoggedin) {
    return (
      <>
        {
          <div className="flex items-center font-extrabold hover:drop-shadow-md bg-main-white text-main-dark px-2 rounded-md hover:caret-yellow-500">
            <Link href="/auth">
              <button className="hover:text-slate-600 transition duration-300">
                تسجيل الدخول
              </button>
            </Link>
          </div>
        }
      </>
    );
  } else {
    return (
      <>
        <DropBar />
      </>
    );
  }
};

export default UserLoginAndProfile;
