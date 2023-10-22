import "./styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Noto_Sans_Arabic({ subsets: ["arabic"], weight: ["500"] });

export const metadata: Metadata = {
  title: "زئبق",
  description: "زئبق",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <div></div>
        {children}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />{" "}
      </body>
    </html>
  );
};

export default RootLayout;
