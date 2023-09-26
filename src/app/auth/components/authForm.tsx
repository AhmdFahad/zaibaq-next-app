"use client";
import React, { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const AuthForm = () => {
  const [isRegistration, setIsRegistration] = useState<boolean>(true);
  const [passwordMatch, setPasswordMatch] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

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

    if (isRegistration) {
      console.log(
        "Registering user with email:",
        formData.email,
        "and password:",
        formData.password
      );
    } else {
      console.log(
        "Logging in with email:",
        formData.email,
        "and password:",
        formData.password
      );
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

  return (
    <div className="max-w-md mx-auto my-8 p-6 border rounded-lg shadow-lg bg-main-white">
      <h2 className="text-2xl font-semibold mb-4 text-main-dark border-b-2  border-gray-950 border-opacity-75">
        {formTitle}
      </h2>
      <form onSubmit={handleSubmit} className="text-main-dark">
        <div className="mb-4">
          <label className="block ">
            :الايميل
            <input
              className="form-input mt-1 block w-full rounded-md border-gray-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block ">
            :الرقم السري
            <input
              className="form-input mt-1 block w-full rounded-md border-gray-300"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        {isRegistration === true ? (
          <div className="mb-4">
            <label className="block ">
              :تاكيد الرقم السري
              <input
                className="form-input mt-2 block w-full rounded-md border-gray-300"
                type="password"
                name="password-ok"
                value={passwordMatch}
                onChange={(e) => setPasswordMatch(e.target.value)}
                required
              />
            </label>
          </div>
        ) : (
          <></>
        )}
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
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
  );
};

export default AuthForm;
