import React, { useState } from "react";
import { Camera } from "lucide-react";
import { getUserDetails } from "../../_helper/authentication";

const ProfilePicture = ({ profilePic, onProfilePicChange, activeTab }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image")) {
      onProfilePicChange(file); // Notify parent of the change
    } else {
      alert("Not a valid Image File");
    }
  };

  const handleCameraClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex justify-center">
      <div className="w-72 h-auto rounded-lg overflow-hidden">
        <div className="relative text-center">
          <img
            className="w-28 h-28 object-cover mx-auto border-4 border-gray-300 rounded-full"
            src={
              typeof profilePic === "string"
                ? profilePic
                : URL.createObjectURL(profilePic)
            }
            alt="Profile"
          />

          {activeTab === "one" && (
            <div
              className="bg-green-600 rounded-full w-9 h-9 absolute cursor-pointer right-24 bottom-0 flex items-center justify-center"
              onClick={handleCameraClick}
            >
              <Camera className="w-6 h-6 text-white" />
            </div>
          )}

          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {/* userDetails */}
        <div className="text-xl font-bold flex justify-center">
          {getUserDetails().F_name}
        </div>
        <div className="card-body text-center">
          <span className="inline-block px-6 py-1 text-lg font-bold text-white bg-blue-500 rounded-full">
            User
          </span>
          <p className="text-lg">
            <strong className="pr-1">{getUserDetails().email}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
