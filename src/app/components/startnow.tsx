"use client";
import React from "react";
import { isUserauthenticated } from "../service";
import { useRouter } from "next/navigation";

const Startnow = () => {
  const router = useRouter();

  const handleStartNow = (): void => {
    if (!isUserauthenticated()) {
      console.log("user not Login");
      router.push("/auth");
    }
    console.log("user login");
  };

  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={handleStartNow}
    >
      ابدأ الان
    </button>
  );
};

export default Startnow;
