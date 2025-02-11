import React, { useState } from "react";
import useNetworkStatus from "../../hooks/useNetworkStatus"; // Adjust the path to your hook

const PersonalInfo1 = ({ personalData, handleChange, handleSubmit }) => {
  const { isOnline } = useNetworkStatus(); // Check network status
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isOnline) {
      alert("No network connection. Please check your internet and try again.");
      return;
    }

    setIsSubmitting(true); // Show loader in button
    try {
      await handleSubmit(); // Execute the submission logic
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setIsSubmitting(false); // Hide loader after submission
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label htmlFor="F_name" className="block font-medium">
            First Name
          </label>
          <input
            type="text"
            id="F_name"
            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your First name"
            value={personalData.F_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="M_name" className="block font-medium">
            Middle Name
          </label>
          <input
            type="text"
            id="M_name"
            placeholder="Enter your middle name"
            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            value={personalData.M_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="L_name" className="block font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="L_name"
            placeholder="Enter your last name"
            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            value={personalData.L_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#ECF3F9] mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter Your Email"
            value={personalData.email}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="email_verified_at" className="block font-medium">
            Recovery Email
          </label>
          <input
            type="email"
            id="email_verified_at"
            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your Recovery email"
            value={personalData.email_verified_at}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
            isSubmitting && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo1;
