"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path
      ? "text-primary font-semibold border-b-2 border-primary pb-1 transition-all duration-200"
      : "text-gray-600 hover:text-primary transition-all duration-200";
  };

  return (
    <div className="navbar bg-green-100 rounded-xl shadow-sm container mx-auto">
      
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" className={isActive("/")}>হোম</Link>
            </li>
            <li>
              <Link href="/advice" className={isActive("/advice")}>
              পরামর্শ 
              </Link>
            </li>
            <li>
              <Link href="/categories" className={isActive("/categories")}>
                এক্সপার্টস
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about")}>
               আমাদের সম্পর্কে
              </Link>
            </li>
          </ul>
        </div>

        <Image
          src="/logo.jpg"
          width={75}
          height={62}
          alt="logo"
          className="rounded-xl p-1"
        />
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/" className={isActive("/")}>হোম</Link>
          </li>
          <li>
            <Link href="/advice" className={isActive("/advice")}>
              পরামর্শ
            </Link>
          </li>
          <li>
            <Link href="/categories" className={isActive("/categories")}>
              এক্সপার্টস
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about")}>
             আমাদের সম্পর্কে
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <a className="btn btn-primary btn-sm"> <Link href={"/login"}>লগ ইন </Link>  </a>
      </div>
    </div>
  );
};

export default Navbar;