"use client";
import axios from "axios";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Profile = () => {
  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    const token = Cookies.get("token");
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `http://localhost:8080/api/v1/user/profile`,
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
