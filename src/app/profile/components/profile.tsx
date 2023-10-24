"use client";
import axios from "axios";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { isTokenValid } from "@/app/service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    if (isTokenValid()) {
      userProfile();
    } else {
      console.log("No log in ");
      router.push("/");
      toast.info("سجل الدخول أولا ", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);

  const userProfile = async () => {
    const token = Cookies.get("token");
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `https://ec2-15-185-195-117.me-south-1.compute.amazonaws.com:8080/api/v1/user/profile`,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <p>Hello</p>
    </>
  );
};
export default Profile;
