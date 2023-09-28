"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className=" text-white py-6  max-w-screen-lg mx-auto w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <SocialIcon
              network="email"
              bgColor="#151515"
              style={{ height: 38, width: 38 }}
            />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <SocialIcon
              network="linkedin"
              bgColor="#151515"
              style={{ height: 38, width: 38 }}
            />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>

        <div className="flex space-x-4">
          {/* Contact link */}
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            تواصل معنا
          </a>
          {/* Privacy Policy link */}
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            سياسة الخصوصيه
          </a>
          {/* User Usage link */}
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 pr-2"
          >
            سياسة الاستخذام
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
