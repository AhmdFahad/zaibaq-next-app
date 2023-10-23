"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleCheck,
  faKey,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { isTokenValid } from "@/app/service";

interface FormData {
  email: string;
  password: string;
}

//TODO :Handle Bug:::: becuase clinnt rendreing the fontawesome icon take time to rander and  when it appears show the icon in big
const AuthForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isTokenValid()) {
      console.log("Token is valid");
      router.push("/");
      toast.info("انتا مسجل الدخول فعلا", {
        position: "bottom-center", // You can change the position as needed
      });
    }
  }, []);

  const userRegister = async (data: FormData) => {
    const url = "http://localhost:8080/api/v1/auth/signup";
    axios
      .post(url, {
        email: data.email,
        password: data.password,
      })
      .then(
        (response) => {
          if (response.status === 201) {
            const { token } = response.data;
            Cookies.set("token", token);
            router.push("/");
            console.log(response);
            toast.success("تم انشاء الحساب بنجاح ", {
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
        },
        (error) => {
          if (error.response.status === 409) {
            toast.error("المتسخدم موجود بالفعل ,سجل الدخول", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          console.log(error);
        }
      );
  };

  const userLogin = async (data: FormData) => {
    const url = "http://localhost:8080/api/v1/auth/signin";

    axios
      .post(url, {
        email: data.email,
        password: data.password,
      })
      .then(
        (response) => {
          console.log(response);

          if (response.status === 200) {
            const { token } = response.data;
            Cookies.set("token", token);
            router.push("/");
            toast.success("تم تسجيل الدخول بنجاح ", {
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
        },

        (error) => {
          toast.error("الأيميل أو الرقم السري خطأ.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // TODO:HANDLE SUBMIT
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPasswordMatch("");

    if (isRegistration) {
      console.log(
        "Registering user with email:",
        formData.email,
        "and password:",
        formData.password
      );
      userRegister(formData);
    } else {
      console.log(
        "Logging in with email:",
        formData.email,
        "and password:",
        formData.password
      );
      userLogin(formData);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  const toggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  const formTitle = isRegistration ? "انشاء حساب" : "تسجيل الدخول";
  const passwordInputMatch = passwordMatch === formData.password;

  return (
    <div className="mx-8">
      <div className="max-w-md mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-main-dark border-b-2  border-gray-950 border-opacity-75">
          {formTitle}
        </h2>
        <form onSubmit={handleSubmit} className="text-main-dark">
          <div className="mb-4">
            <label className="block ">
              <span>:الايميل</span>
              <div className="relative">
                <input
                  className="form-input mt-1 block w-full rounded-md border-b-4 border-main-dark   shadow-sm pr-10 text-center"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main-dark"
                />
              </div>
            </label>
          </div>
          <div className="mb-4">
            <label className="block ">
              <span>:الرقم السري</span>
              <div className="relative">
                <input
                  className="form-input mt-1 block w-full rounded-md border-b-4 border-main-dark   shadow-sm pr-10 text-center"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <FontAwesomeIcon
                  icon={faKey}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main-dark"
                />
              </div>
            </label>
          </div>
          {isRegistration === true ? (
            <div className="mb-4">
              <label className="block ">
                <span>:تاكيد الرقم السري</span>
                <div className="relative">
                  <input
                    className="form-input mt-1 block w-full rounded-md border-b-4 border-main-dark   shadow-sm pr-10 text-center"
                    type="password"
                    name="password-ok"
                    value={passwordMatch}
                    onChange={(e) => setPasswordMatch(e.target.value)}
                    required
                  />
                  <span
                    className={
                      passwordInputMatch ? "text-blue-600" : "text-red-600"
                    }
                  >
                    <FontAwesomeIcon
                      icon={passwordInputMatch ? faCircleCheck : faCircleXmark}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 "
                    />
                  </span>
                </div>
                {!passwordInputMatch && passwordMatch.length > 0 ? (
                  <p className="text-sm pt-1 text-red-600 underline">
                    الرقم السري لايتطابق
                  </p>
                ) : (
                  <></>
                )}
              </label>
            </div>
          ) : (
            <></>
          )}
          <div>
            <button
              disabled={!passwordInputMatch && isRegistration}
              className={
                passwordInputMatch || !isRegistration
                  ? "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                  : "bg-blue-950 bg-opacity-60  text-white font-semibold py-2 px-4 rounded-md"
              }
              type="submit"
            >
              {formTitle}
            </button>
          </div>
        </form>
        <p className="mt-4 text-main-dark">
          <button
            className="text-blue-500 hover:underline ml-2"
            onClick={toggleForm}
          >
            {isRegistration ? "سجل الدخول" : "انشئ الأن"}
          </button>
          ,{isRegistration ? " لدي حساب" : " ليس لدي حساب"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
