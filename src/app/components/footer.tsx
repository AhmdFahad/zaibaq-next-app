"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import UsagePolicyModel from "./UsagePolicyModel";
import Link from "next/link";
import ContactUsModel from "./ContactUsModel";

const Footer = () => {
  return (
    <footer className=" text-white py-6  max-w-screen-lg mx-auto w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <span className="text-gray-300 hover:text-white transition duration-300">
            <SocialIcon
              target="_blank"
              href="mailto: support@zaibaq.tech"
              network="email"
              bgColor="#151515"
              style={{ height: 38, width: 38 }}
            />
          </span>
          <span className="text-gray-300 hover:text-white transition duration-300">
            <SocialIcon
              target="_blank"
              href="https://www.linkedin.com/"
              network="linkedin"
              bgColor="#151515"
              style={{ height: 38, width: 38 }}
            />
          </span>
        </div>

        <div className="flex space-x-4">
          {/* Contact link TTT*/}
          <ContactUsModel />
          {/* Privacy Policy link */}
          <PrivacyPolicyModal />
          {/* User Usage link */}
          <UsagePolicyModel />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
