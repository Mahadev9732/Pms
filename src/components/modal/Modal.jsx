import React from "react";

const Modal = ({ showModal, message, title, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-xl font-semibold text-red-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#166534] text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
