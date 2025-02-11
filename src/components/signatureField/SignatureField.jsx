import React, { useState } from "react";
import { ArrowUpFromLine } from "lucide-react";

const SignatureField = ({
  label,
  signatureImage,
  onAddSignature,
  showButton = true,
  showUploadButton = true,
}) => {
  const [file, setFile] = useState(null);
  const [showSignature, setShowSignature] = useState(false); // Track if "Add Signature" was clicked

  function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setShowSignature(false); // Hide the static signature when a file is chosen
    }
  }

  function handleAddSignature() {
    onAddSignature();
    setFile(null); // Reset file if "Add Signature" is clicked
    setShowSignature(true); // Show the static signature
  }

  return (
    <div className="w-full sm:w-1/2 lg:w-[28%] p-2">
      <label className="block mb-2 text-base font-medium">{label}</label>
      {showButton && (
        <button
          type="button"
          className="w-full sm:w-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-gray-400"
          onClick={handleAddSignature}
        >
          Add Signature
        </button>
      )}
      {showUploadButton && (
        <div className="flex items-center mt-2">
          <ArrowUpFromLine className="h-3.5" />
          <label className="relative cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <span className="text-gray-700 font-medium">Choose File</span>
          </label>
        </div>
      )}

      {/* Display uploaded file image */}
      {file && !showSignature && (
        <div className="mt-4">
          <img
            src={file}
            alt="Uploaded Signature"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Display static signature */}
      {signatureImage && showSignature && (
        <div className="mt-4">
          <img
            src={signatureImage}
            alt="Appraisee's Signature (Static)"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default SignatureField;
