import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
  className="hero min-h-[70vh] relative"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef)",
  }}
>
  
  <div className="hero-overlay bg-black/60 bg-gradient-to-r from-green-900/80 via-black/60 to-green-800/80"></div>

 
  <div className="hero-content text-center text-white px-4">
    <div className="max-w-2xl backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">

     
      <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight">
        Smart Agriculture <br />
        <span className="text-green-400">For Future Farming</span>
      </h1>

     
      <p className="mb-6 text-gray-200 text-lg">
        আধুনিক প্রযুক্তির মাধ্যমে কৃষিকে আরও দক্ষ ও লাভজনক করুন।
        Data-driven farming, better yield, and sustainable growth.
      </p>

    
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="btn bg-green-500 hover:bg-green-600 border-none text-white px-6">
          <Link href={"/login"}> Get Started </Link> 
        </button>

        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-green-800 px-6">
           <Link href={"/advice"}> Explore More </Link> 
        </button>
      </div>

    </div>
  </div>

 
  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-green-50 to-transparent"></div>
</div>
        </div>
    );
};

export default Hero;