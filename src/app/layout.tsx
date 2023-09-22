import "./styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import Head from "next/head";
import React from "react";

const font = Noto_Sans_Arabic({ subsets: ["arabic"], weight: ["500"] });

export const metadata: Metadata = {
  title: "زئبق",
  description: "زئبق",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
