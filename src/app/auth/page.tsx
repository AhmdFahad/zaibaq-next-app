import React from "react";
import Navbar from "../components/navbar";
import AuthForm from "./components/authForm";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto 5 text-center">
        <AuthForm></AuthForm>
      </div>
    </>
  );
};

export default page;
