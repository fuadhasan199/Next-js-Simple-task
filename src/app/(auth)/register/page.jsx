"use client";

import Link from "next/link";
import React from "react";

import { FcGoogle } from "react-icons/fc";
const register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center `bg-gradient-to-br from-green-100` via-white to-green-200 px-4">
      
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-900">
            Explore AgroX 🌱
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Create Your Account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Remember + Forgot */}
          <div className=" text-sm">
          
            <button type="button" className="text-green-700 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition">
         <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account-{" "}
          <span className="text-green-700 font-medium cursor-pointer hover:underline">
            <Link href={"/login"}>Log In </Link> 
          </span>
        </p>
      </div>
    </div>
  );
};

export default register;