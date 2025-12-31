import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy credentials
    const dummyEmail = "test@gmail.com";
    const dummyPassword = "123456";

    if (
      form.email === dummyEmail &&
      form.password === dummyPassword
    ) {
      localStorage.setItem("isLoggedIn", true);
      setSuccessMsg("✅ Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setErrorMsg("❌ Invalid email or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
          Login to SkillForge
        </h2>

        {successMsg && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none"
            />
          </div>

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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[38px] right-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
