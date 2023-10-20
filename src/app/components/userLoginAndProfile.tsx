"use client";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserLoginAndProfile = () => {
  var token = Cookies.get("token");
  const isLogedin = useState(token === undefined ? false : true);

  if (!isLogedin) {
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
        <Link href="/auth">
          <button className="hover:text-slate-600 transition duration-300">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main-dark"
            />
          </button>
        </Link>
      </>
    );
  }
};

export default UserLoginAndProfile;
