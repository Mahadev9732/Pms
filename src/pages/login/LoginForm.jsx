import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosPrivateFormData } from "../../api/config";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import "react-toastify/dist/ReactToastify.css";
import {
  setUserDetails,
  setauthToken,
  setUserRole,
} from "../../_helper/authentication";

const LoginForm = () => {
  const options = ["STAFF", "SUPERVISOR", "OFFICER", "HR"];
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("Federal Ministry of Education");
  const [role, setRole] = useState(options[0]);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const encryptionKey = "your_secret_key"; // Use a secure, random key

  useEffect(() => {
    // Retrieve and decrypt email, role, and password from sessionStorage
    const storedEmail = sessionStorage.getItem("email");
    const storedPassword = sessionStorage.getItem("password");
    const storedRole = sessionStorage.getItem("role");

    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) {
      const decryptedPassword = CryptoJS.AES.decrypt(
        storedPassword,
        encryptionKey
      ).toString(CryptoJS.enc.Utf8);
      setPassword(decryptedPassword);
    }
    if (storedRole) setRole(storedRole);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const currentYear = new Date().getFullYear(); // Get the current year

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);

    try {
      const response = await axiosPrivateFormData.post("api/login", formData, {
        headers: { Role: role },
      });

      if (response.data.status === "success") {
        setUserDetails(response.data.user);
        setauthToken(response.data.authorisation.token);
        setUserRole(role);

        toast.success("Login successful!");

        // Store data in sessionStorage if Remember Me is checked
        if (rememberMe) {
          const encryptedPassword = CryptoJS.AES.encrypt(
            password,
            encryptionKey
          ).toString();

          sessionStorage.setItem("email", email);
          sessionStorage.setItem("password", encryptedPassword);
          sessionStorage.setItem("role", role);
        } else {
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("password");
          sessionStorage.removeItem("role");
        }

        // Navigate to a route based on the selected role
        navigate(`/${role.toLowerCase()}/introduction/${currentYear}`);
      } else {
        toast.error(
          "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Login Error:", error); // Log error details for debugging
      toast.error("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-4 bg-[rgba(129,255,169,0.60)] p-4 rounded-lg shadow-md max-w-sm w-full mx-auto relative">
      <h1 className="text-2xl font-bold text-center text-black mb-4">
        Sign in to your account
      </h1>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
          <Loader />
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email" // Add autocomplete attribute
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password" // Add autocomplete attribute
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
            required
          />
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-semibold text-gray-700"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            autoComplete="organization" // Add autocomplete attribute
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md font-semibold"
          >
            <option>Federal Ministry of Education</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-semibold text-gray-700"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            autoComplete="role" // Add autocomplete attribute
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md font-semibold"
          >
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-900 font-semibold"
            >
              Remember me
            </label>
          </div>
          <Link
            to="/forgetpassword"
            className="text-base text-indigo-600 font-semibold"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      {/* New Signup Link */}
      <div className="mt-2 text-center">
        <span className="font-semibold">Don't have an account?</span>

        <Link to="/signup" className="text-white font-semibold ml-1">
          Sign up
        </Link>
      </div>
      <div className="flex justify-center mt-2 text-white font-semibold">
        <Link to="/faq">Frequently Asked Questions</Link>
      </div>
    </div>
  );
};

export default LoginForm;
