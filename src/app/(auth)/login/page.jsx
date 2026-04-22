"use client";

import { signIn } from "next-auth/react";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

import { FcGoogle } from "react-icons/fc";
const Login = () => { 
  const router=useRouter()
  const handleLogin=async(e)=>{
      e.preventDefault() 
      const form=e.target
  const email = form.email.value;
  const password = form.password.value; 

     try{
       const res=await signIn("credentials",{
          email,
          password,
          
       }) 
        if(res.error){
           alert(res.error) 
           return
        } 

       if(res.ok){
         router.push("/") 
         router.refresh() 
       }
         
        
     } 
     catch(error){
       console.log(error.message)
     }
  }
  return (
    <div className="min-h-screen flex items-center justify-center `bg-gradient-to-br from-green-100` via-white to-green-200 px-4">
      
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">
        
       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-900">
            Welcome Back 🌱
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login to your account
          </p>
        </div>

       
        <form className="space-y-5" onSubmit={handleLogin}>

         
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email" name="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

         
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password" name="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

       
          <div className=" text-sm">
          
            <button type="button" className="text-green-700 hover:underline">
              Forgot password?
            </button>
          </div>

        
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login */}
        <button onClick={()=>signIn("google")} className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition">
         <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-green-700 font-medium cursor-pointer hover:underline">
              <Link href={"/register"}> Register </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;