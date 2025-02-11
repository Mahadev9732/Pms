import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const options = ["MALE", "FEMALE"];
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    ippisNo: "",
    staff_id: "",
    job_Title: "",
    designation: "",
    cadre: "",
    grade_level: "",
    gender: "MALE",
    email: "",
    recovery_email: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const {
    firstName,
    middleName,
    lastName,
    ippisNo,
    staff_id,
    job_Title,
    designation,
    cadre,
    grade_level,
    gender,
    email,
    recovery_email,
    password,
    confirm_password,
  } = user;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to generate a random staff ID
  const generateRandomId = () => {
    const randomId = `STAFF${Math.floor(100000 + Math.random() * 900000)}`;
    setUser((prevState) => ({
      ...prevState,
      staff_id: randomId,
    }));
  };

  // Generate staff ID on initial load
  useEffect(() => {
    generateRandomId();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match. Please try again.",
      });
      return;
    }

    console.log("Form Submitted", user);

    // You can perform further actions like API call here
    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      text: "Your account has been created successfully.",
    });
  };

  return (
    <div className="border-4 bg-[rgba(129,255,169,0.60)] p-4  rounded-lg shadow-md mt-[74px] mb-[100px] overflow-auto sm:overflow-hidden w-full mx-auto relative sm:max-h-screen h-[575px] sm:h-auto md:w-[56rem]">
      <h1 className="text-2xl font-bold text-center text-black mb-4">
        Create New Account
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/* Middle Name */}
          <div>
            <label
              htmlFor="middleName"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={middleName}
              onChange={handleChange}
              placeholder="Middle Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/* IPPIsNo*/}
          <div>
            <label
              htmlFor="ippisNo"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Ippis No
            </label>
            <input
              type="text"
              id="ippisNo"
              name="ippisNo"
              value={ippisNo}
              onChange={handleChange}
              placeholder="Last Name"
              className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/*staffId*/}
          <div>
            <label
              htmlFor="staff_id"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Staff Id
            </label>
            <div className="relative">
              <input
                type="text"
                id="staff_id"
                name="staff_id"
                value={staff_id}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-400   sm:text-sm font-semibold"
                readOnly
              />
              <button
                type="button"
                onClick={generateRandomId}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                {<RefreshCcw size={20} color="yellow" />}
              </button>
            </div>
          </div>
          {/* Job Title*/}
          <div>
            <label
              htmlFor="job_Title"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job_Title"
              name="job_Title"
              value={job_Title}
              onChange={handleChange}
              placeholder="Job Title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/* Designation*/}
          <div>
            <label
              htmlFor="Designation"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Designation
            </label>
            <input
              type="text"
              id="Designation"
              name="designation"
              value={designation}
              onChange={handleChange}
              placeholder="Designation"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/*cadre*/}
          <div>
            <label
              htmlFor="cadre"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              cadre
            </label>
            <input
              type="text"
              id="cadre"
              name="cadre"
              value={cadre}
              onChange={handleChange}
              placeholder="cadre"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/*grade_level*/}
          <div>
            <label
              htmlFor="grade_level"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Grade Level
            </label>
            <input
              type="text"
              id="grade_level"
              name="grade_level"
              value={grade_level}
              onChange={handleChange}
              placeholder="cadre"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/*gender*/}
          <div>
            <label
              htmlFor="gender"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
            >
              {options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/*Email*/}
          <div>
            <label
              htmlFor="Email"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/*recovery_email*/}
          <div>
            <label
              htmlFor="recovery_email"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Recoverye Email
            </label>
            <input
              type="email"
              id="recovery_email"
              name="recovery_email"
              value={recovery_email}
              onChange={handleChange}
              placeholder="Recovery Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
          {/*Password*/}
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/* confirm Password*/}
          <div>
            <label
              htmlFor="confirm_password"
              className="block mb-1.5 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange}
              placeholder=" Confirm Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            style={{ width: "300px" }}
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-2 text-center">
        <span className="text-gray-600 font-semibold">
          Already have an account?
        </span>
        <Link to="/" className="text-indigo-600 font-semibold">
          Login here
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
