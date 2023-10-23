import type { Metadata } from "next";
import React from "react";
import Responsivenavbar from "../components/responsivenavbar";

export const metadata: Metadata = {
  title: "زئبق",
  description: "زئبق",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Responsivenavbar />
      <div className="max-w-screen-lg mx-auto 5 text-center">{children}</div>
    </>
  );
};

export default RootLayout;
