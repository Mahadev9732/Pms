import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureModal = ({ isOpen, onClose, onSaveSignature }) => {
  const signatureRef = useRef(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handlerClear = () => {
    signatureRef.current.clear();
    setError(null);
  };

  const handlerSave = () => {
    if (signatureRef.current.isEmpty()) {
      setError("Please provide a signature before saving.");
      return;
    }

    const signatureData = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    onSaveSignature(signatureData); // Send the signature image URL back to parent
    setError(null);
    onClose(); // Close modal after saving
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden={!isOpen}
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto"
              onClick={onClose}
            >
              {/* SVG Icon */}
            </button>
          </div>
          <div className="p-4 flex justify-center items-center">
            <div className="border-2 border-dashed border-black w-full sm:w-9/12 rounded-md">
              <SignatureCanvas
                penColor="black"
                ref={signatureRef}
                canvasProps={{
                  width: 400,
                  height: 200,
                  className: "sigCanvas",
                }}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-gray-200 rounded-b">
            <button
              type="button"
              className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={handlerSave}
            >
              Save Signature
            </button>
            <button
              type="button"
              className="w-full sm:w-auto text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 sm:mt-0 sm:ms-3"
              onClick={handlerClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureModal;
