import React from 'react';

const expertData = [
    { id: 1, name: "ডা. মো. আরিফুল ইসলাম", qualification: "MBBS, BCS (Veterinary)", specialist: "পশুচিকিৎসা বিশেষজ্ঞ", institution: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়", phone: "01710000000", icon: "🐄" },
    { id: 2, name: "কৃষিবিদ নাসরিন আক্তার", qualification: "B.Sc (Hons), MS (Entomology)", specialist: "কীটতত্ত্ব ও উদ্ভিদ বিশেষজ্ঞ", institution: "শেরেবাংলা কৃষি বিশ্ববিদ্যালয়", phone: "01820000000", icon: "🌾" },
    { id: 3, name: "মো. হাফিজুর রহমান", qualification: "Diploma in Fisheries", specialist: "মৎস্য চাষ বিশেষজ্ঞ", institution: "মৎস্য অধিদপ্তর", phone: "01930000000", icon: "🐟" },
    { id: 4, name: "ডা. কামরুল হাসান", qualification: "DVM, MS (Surgery)", specialist: "গবাদি পশু সার্জন", institution: "সিলেট কৃষি বিশ্ববিদ্যালয়", phone: "01540000000", icon: "🐎" },
    { id: 5, name: "কৃষিবিদ তানভীর আহমেদ", qualification: "B.Sc Ag, MS (Soil Science)", specialist: "মৃত্তিকা ও সার বিশেষজ্ঞ", institution: "ঢাকা বিশ্ববিদ্যালয়", phone: "01350000000", icon: "🧪" },
    { id: 6, name: "মোসা. আমেনা বেগম", qualification: "B.Sc in Horticulture", specialist: "ফল ও সবজি চাষ বিশেষজ্ঞ", institution: "হাজী দানেশ কৃষি বিশ্ববিদ্যালয়", phone: "01660000000", icon: "🍎" },
    { id: 7, name: "ডা. সায়মা সুলতানা", qualification: "DVM (PSTU), MS", specialist: "হাঁস-মুরগি পালন বিশেষজ্ঞ", institution: "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", phone: "01770000000", icon: "🐥" },
    { id: 8, name: "কৃষিবিদ মাহিন আলম", qualification: "B.Sc Ag (Hons)", specialist: "বীজ প্রযুক্তি বিশেষজ্ঞ", institution: "খুলনা বিশ্ববিদ্যালয়", phone: "01880000000", icon: "🌱" },
    { id: 9, name: "মো. জাহিদুল হক", qualification: "B.Sc in Fisheries (SAU)", specialist: "চিংড়ি ও হ্যাচারি বিশেষজ্ঞ", institution: "মৎস্য গবেষণা ইনস্টিটিউট", phone: "01990000000", icon: "🦐" },
    { id: 10, name: "ডা. ফয়সাল আহমেদ", qualification: "MBBS, BCS (Livestock)", specialist: "পশু পুষ্টি ও খাদ্য বিশেষজ্ঞ", institution: "চট্টগ্রাম ভেটেরিনারি বিশ্ববিদ্যালয়", phone: "01711111111", icon: "🌿" },
    { id: 11, name: "কৃষিবিদ লায়লা আক্তার", qualification: "MS in Plant Pathology", specialist: "উদ্ভিদ রোগ নির্ণয় বিশেষজ্ঞ", institution: "বঙ্গবন্ধু কৃষি বিশ্ববিদ্যালয়", phone: "01522222222", icon: "🍄" },
    { id: 12, name: "মো. মোস্তফা কামাল", qualification: "Diploma in Forestry", specialist: "নার্সারি ও বন ব্যবস্থাপনা বিশেষজ্ঞ", institution: "ফরেস্ট্রি ইনস্টিটিউট", phone: "01833333333", icon: "🌳" }
] 


export const metadata={
     title:"বিশেষজ্ঞদের পরামর্শ | Agrox",
     description:"অভিজ্ঞ কৃষিবিদ এবং পশুচিকিৎসকদের কাছ থেকে সরাসরি পরামর্শ নিন",
      keywords: ["কৃষি পরামর্শ", "ফসল চাষ", "খামার পরিকল্পনা", "বাংলাদেশ কৃষি", "Agrox"]
}

const ExpertsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-green-950 mb-4 tracking-tighter">
                    বিশেষজ্ঞদের পরামর্শ নিন
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto font-bold italic">
                    Agrox-এর অভিজ্ঞ প্যানেল থেকে আপনার সমস্যার সমাধান খুঁজুন। 

                  <span className="text-gray-700 font-semibold"> 
                    কল করুন সকাল ৮টা থেকে ৯.৩০ আর বিকেল ৫ টা থেকে রাত ৯.৩০ পর্যন্ত
                    
                    
                    </span>  
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {expertData.map((expert) => (
                    <div key={expert.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                        {/* Profile Placeholder Icon */}
                        <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                            {expert.icon}
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-gray-900 leading-tight">
                                {expert.name}
                            </h3>
                            <p className="text-green-700 font-black text-[10px] uppercase tracking-widest">
                                {expert.specialist}
                            </p>
                            
                            <div className="pt-4 border-t border-gray-50 mt-4 space-y-3">
                                <p className="text-xs text-gray-500 font-bold leading-relaxed">
                                    🎓 {expert.qualification} <br />
                                    <span className="text-[10px] text-gray-400">{expert.institution}</span>
                                </p>
                                <p className="text-sm text-gray-900 font-black">
                                    📞 {expert.phone}
                                </p>
                            </div>
                        </div>

                        <a 
                            href={`tel:${expert.phone}`} 
                            className="mt-3 block w-full  text-center bg-gray-900 hover:bg-green-700    font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-gray-200"
                        >
                            সরাসরি কথা বলুন
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpertsPage;