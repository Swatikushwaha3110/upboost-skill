import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccessMsg("");
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 📦 Get existing users from localStorage
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // ❌ Check if email already exists
    const emailExists = existingUsers.some(
      (user) => user.email === form.email
    );

    if (emailExists) {
      setErrorMsg("❌ Email already registered");
      return;
    }

    // ✅ Save new user
    const updatedUsers = [...existingUsers, form];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSuccessMsg("🎉 Account created successfully!");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-center text-green-600 mb-6">
          Create an Account
        </h2>

        {successMsg && (
          <p className="text-green-600 bg-green-100 border border-green-400 p-3 rounded text-center mb-4">
            {successMsg}
          </p>
        )}

        {errorMsg && (
          <p className="text-red-600 bg-red-100 border border-red-400 p-3 rounded text-center mb-4">
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[43px] right-4 text-gray-500 hover:text-green-600 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition duration-300"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-green-600 hover:underline font-medium"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
