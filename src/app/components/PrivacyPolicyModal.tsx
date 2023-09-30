import React, { useState } from "react";

const PrivacyPolicyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="text-gray-300  hover:text-white transition duration-300 pr-2"
      >
        سياسة الخصوصيه
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center text-main-dark ">
          {/* Background overlay with reduced opacity */}
          <div
            onClick={closeModal}
            className="fixed top-0 left-0 w-full h-full bg-black transition ease-in-out delay-150 opacity-60 z-10 "
          ></div>
          <div className="modal-container relative z-20 mx-5">
            <div className="modal-content bg-white rounded-lg p-4 shadow-lg relative ">
              <button
                onClick={closeModal}
                className="modal-close absolute top-2 left-2 text-gray-500 hover:text-gray-700"
              >
                X<i className="fas fa-times"></i>
              </button>
              <h2 className="text-xl font-bold mb-4 text-right">
                سياسة الخصوصية
              </h2>{" "}
              {/* Arabic text example */}
              <p className="text-right">
                {/* Your Arabic privacy policy text goes here */}
                مرحبًا بك في سياسة الخصوصية. يتمثل هدفنا في حماية خصوصيتك
                .ومعلوماتك الشخصية
                <br />
                <span className="text-red-600 opacity-80">
                  سيتم توضيح سياسه الخصوصيه قريبا
                </span>
                {/* Replace this with your actual Arabic privacy policy content. */}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyModal;
