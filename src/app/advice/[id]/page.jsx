import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineSpeed } from "react-icons/md";

async function GetSingleProduct(id) {
    try {
        const baseUrl = "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/products/${id}`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const product = await GetSingleProduct(id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <div className="text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-sm w-full">
                    <div className="text-5xl mb-4 text-gray-300 italic">!</div>
                    <p className="text-gray-600 font-bold text-xl">দুঃখিত, কোনো ডাটা পাওয়া যায়নি!</p>
                    <Link href="/advice" className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                        তালিকায় ফিরে যান
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-base-100 gap-1 font-sans'>
        
    

          
            <div className="max-w-4xl mx-auto px-4 mt-8">
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative">
                    
                  
                    <div className="p-8 md:p-12"> 

        <div className="flex justify-center ">
                <Image 
                    src={product.image} 
                    alt='product image' 
                    width={700} 
                    height={300} 
                    className='rounded-xl shadow-lg object-cover'
                />
            </div>


                        <div className="flex flex-wrap gap-3 mb-6 mt-5">
                            <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold border border-green-100">
                                <BiCategoryAlt className="text-lg" /> {product.category}
                            </span>
                            <span className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold border border-orange-100">
                                <MdOutlineSpeed className="text-lg" /> {product.difficulty}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {product.title}
                        </h1>
                        
                        <p className="text-lg text-gray-500 font-medium mb-8 border-l-4 border-green-500 pl-4">
                            {product.shortDescription}
                        </p>

                        <div className="h-[1px] w-full bg-gray-100 mb-8"></div>

                     
                        <div className="prose prose-green max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg mb-10 whitespace-pre-line">
                                {product.description}
                            </p>
                        </div>

                        
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-white border border-green-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-green-500 rounded-lg text-white">
                                        <HiOutlineLightBulb size={24} />
                                    </div>
                                    <h3 className="font-bold text-green-800 text-xl tracking-tight">প্রো টিপস</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed italic">
                                    {product.proTip}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

             
                <div className="flex justify-between items-center mt-2 px-2">
                    <Link
                        href="/advice"
                        className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm"
                    >
                        <SlArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold">তালিকায় ফিরে যান</span>
                    </Link>
                    
                    <div className="hidden md:block text-gray-400 text-sm italic">
                        পড়ার জন্য ধন্যবাদ ✨
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;