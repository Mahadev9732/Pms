import React, { useState, useEffect } from "react";
import ProfilePicture from "../../../components/profile/ProfilePicture";
import PersonalInfoForm from "../../../components/profile/PersonalInfo";
import Layout from "../../../layouts/MainLayout";
import TabsContainer from "../../../components/profile/TabsContainer";
import IpisInfo from "../../../components/profile/IpisInfo";
import Security from "../../../components/profile/Security";
import {
  getUserDetails,
  setUserDetails,
} from "../../../_helper/authentication";
import { axiosPrivateFormData } from "../../../api/config";
import Swal from "sweetalert2";

const PersonalInfo = () => {
  const [activeTab, setActiveTab] = useState("one");
  const [personalData, setPersonalData] = useState({
    F_name: "",
    M_name: "",
    L_name: "",
    email_verified_at: "",
    email: "",
    profilePic: null,
    originalProfilePic: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userDetails = getUserDetails();
    setPersonalData({
      F_name: userDetails.F_name || "",
      M_name: userDetails.M_name || "",
      L_name: userDetails.L_name || "",
      email: userDetails.email || "",
      email_verified_at: userDetails.email_verified_at || "",
      profilePic: userDetails.ProfileImage || null,
      originalProfilePic: userDetails.ProfileImage || null,
    });
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleProfilePicChange = (file) => {
    setPersonalData((prev) => ({
      ...prev,
      profilePic: file,
    }));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const {
      F_name,
      M_name,
      L_name,
      email_verified_at, // Recovery email
      profilePic, // File object
      originalProfilePic,
    } = personalData;

    // Required fields for the API
    formData.append("staff_id", getUserDetails().staff_id);
    formData.append("F_name", F_name);
    formData.append("M_name", M_name);
    formData.append("L_name", L_name);
    formData.append("email", getUserDetails().email); // User's email
    formData.append("recovery_email", email_verified_at || ""); // Recovery email

    // Check if the profile picture has changed
    if (profilePic && profilePic !== originalProfilePic) {
      formData.append("file", profilePic); // Append the file
    }

    try {
      const response = await axiosPrivateFormData.post(
        "api/personalinfo",
        formData
      );
      if (response.status === 200) {
        const updatedUserDetails = { ...getUserDetails(), ...personalData };
        setUserDetails(updatedUserDetails);
        Swal.fire("Success", "Your profile has been updated.", "success").then(
          () => {
            window.location.reload();
          }
        );
      } else {
        Swal.fire("Error", "Failed to update profile", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error updating profile", "error");
    }
  };

  if (loading) {
    return <p>Loading personal information...</p>;
  }
  const tabs = [
    { value: "one", label: "Personal Info" },
    { value: "two", label: "IPPS Info" },
    { value: "three", label: "Security" },
  ];

  return (
    <Layout>
      <ProfilePicture
        profilePic={personalData.profilePic}
        onProfilePicChange={handleProfilePicChange}
        activeTab={activeTab}
      />
      <div className="p-4 sm:p-6 bg-white shadow-lg rounded-lg sm:overflow-y-auto">
        <div className="text-center mb-6">
          <TabsContainer
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
        <fieldset>
          {activeTab === "one" && (
            <PersonalInfoForm
              personalData={personalData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
          {activeTab === "two" && <IpisInfo loading={loading} />}
          {activeTab === "three" && <Security />}
        </fieldset>
      </div>
    </Layout>
  );
};

export default PersonalInfo;
