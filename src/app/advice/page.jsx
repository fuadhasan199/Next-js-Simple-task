import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function GetProduct() { 
   const res= await fetch(`http://localhost:3000/api/products`,{
      next:{revalidate:3600},
      
   }) 
    return res.json()
  
}
const page =async () => { 
  const products=await GetProduct() 

return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Agrox Header Section */}
        <div className="mb-10 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-green-800 tracking-tight">Agrox পরামর্শ ভাণ্ডার</h1>
          <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
            স্বাগতম **Agrox**-এ। এখানে আপনি পাবেন আধুনিক কৃষি প্রযুক্তির সঠিক ব্যবহার, মৃত্তিকা ব্যবস্থাপনা এবং লাভজনক চাষাবাদের বিশেষজ্ঞ পরামর্শ। আমাদের লক্ষ্য হলো ডিজিটাল প্রযুক্তির মাধ্যমে কৃষকের দোরগোড়ায় সঠিক তথ্য পৌঁছে দেওয়া।
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar (Search & Filter) */}
          <aside className="lg:w-1/4 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              
              {/* Search Field */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">পরামর্শ খুঁজুন</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="যেমন: ধান চাষ..." 
                    className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  />
                  <span className="absolute right-3 top-3.5 text-gray-400">🔍</span>
                </div>
              </div>

              {/* Sorting Fieldset */}
              <fieldset className="space-y-4">
                <legend className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">সর্ট করুন</legend>
                
                <div className="flex items-center gap-3 group cursor-pointer">
                  <input type="radio" name="sort" id="latest" className="w-4 h-4 accent-green-600 cursor-pointer" defaultChecked />
                  <label htmlFor="latest" className="text-gray-600 group-hover:text-green-700 cursor-pointer text-sm transition-colors">সর্বশেষ আপডেট</label>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <input type="radio" name="sort" id="popular" className="w-4 h-4 accent-green-600 cursor-pointer" />
                  <label htmlFor="popular" className="text-gray-600 group-hover:text-green-700 cursor-pointer text-sm transition-colors">জনপ্রিয়তা</label>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <input type="radio" name="sort" id="difficulty" className="w-4 h-4 accent-green-600 cursor-pointer" />
                  <label htmlFor="difficulty" className="text-gray-600 group-hover:text-green-700 cursor-pointer text-sm transition-colors">চাষের ধরন (সহজ-কঠিন)</label>
                </div>
              </fieldset>

              {/* Quick Contact Box */}
              <div className="mt-10 bg-green-50 p-4 rounded-xl border border-green-100">
                <h4 className="text-green-800 font-bold text-sm mb-2">💡 সাহায্য প্রয়োজন?</h4>
                <p className="text-[11px] text-green-700 leading-relaxed">
                  সঠিক পরামর্শ খুঁজে না পেলে আমাদের কৃষি বিশেষজ্ঞ টিমের সাথে সরাসরি যোগাযোগ করুন।
                </p>
              </div>
            </div>
          </aside>

          {/* Right Side (Product Card Grid) */}
          <main className="lg:w-3/4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((item, any) => (
                <div 
                  key={item._id} 
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container - Fixed Aspect Ratio (হাইট সবসময় সমান থাকবে) */}
                  <div className="relative w-full h-52">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm z-10">
                      <span className="text-[10px] font-black text-green-800 uppercase tracking-tighter">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex flex-col `flex-grow`">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-green-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                      {item.shortDescription}
                    </p>
                    
                    {/* Pro Tip Box */}
                    <div className="mt-auto bg-gray-50 p-3 rounded-lg border-l-2 border-green-400 mb-4">
                      <p className="text-[11px] text-gray-600 italic">
                         <strong>টিপস:</strong> {item.proTip.substring(0, 55)}...
                      </p>
                    </div>

                    {/* View Button */}
                    <Link 
                      href={`/products/${item._id}`}
                      className="w-full text-center py-2.5 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition-all shadow-sm active:scale-95"
                    >
                      বিস্তারিত পরামর্শ
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default page;