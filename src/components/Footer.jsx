import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto shadow-xl bg-base-100  pt-5 m-2 px-6 md:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

       
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            AgroX
          </h2>

          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            AgroX is a next-gen agricultural platform focused on smart farming,
            sustainable growth, and data-driven crop solutions. We empower farmers
            with modern digital tools.
          </p>

          <div className="mt-6 text-sm opacity-70">
            © {new Date().getFullYear()} AgroX. All rights reserved.
          </div>
        </div>

        {/* navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Navigation
          </h3>

          <ul className="space-y-2 text-sm opacity-80">
                <li>
        <Link href={'/'}>Home</Link>
           
        </li>
        <li>
             <Link href={'/products'}>All Products</Link>
        </li> 
         <li>
             <Link href={'/categories'}>Categories</Link>
        </li> 
           <li>
             <Link href={'/about'}>About us</Link>
        </li>
          </ul>
        </div>

        {/* RIGHT - NEWSLETTER / SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Stay Updated
          </h3>

          <p className="text-sm opacity-80 mb-4">
            Subscribe for agriculture insights, smart farming tips, and AgroX updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-md bg-base-300 text-base-content outline-none border border-base-300 focus:border-primary transition"
            />
            <button className="px-4 py-2 bg-primary text-primary-content font-semibold rounded-r-md hover:opacity-90 transition">
              Join
            </button>
          </div>

          <div className="flex gap-4 mt-6 text-sm opacity-80">
            <span className="hover:text-primary cursor-pointer transition">Facebook</span>
            <span className="hover:text-primary cursor-pointer transition">Twitter</span>
            <span className="hover:text-primary cursor-pointer transition">LinkedIn</span>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-base-300 mt-10 pt-6 text-center text-xs opacity-60">
        Built with scalable architecture • AgroX Platform
      </div>
    </footer>
  );
};

export default Footer;