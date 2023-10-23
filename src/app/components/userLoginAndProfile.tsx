"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropBar from "./dropBar";
import { isTokenValid } from "../service";
const UserLoginAndProfile = () => {
  const token = Cookies.get("token");
  const [isLoggedin, setIsLoggedin] = useState(isTokenValid());
  useEffect(() => {
    setIsLoggedin(isTokenValid());
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
