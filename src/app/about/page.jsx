import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
    
      <section className="relative bg-green-900 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Agrox: আপনার ডিজিটাল <br /> <span className="text-green-400">কৃষি উপদেষ্টা</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            আমরা বিশ্বাস করি, সঠিক তথ্যই পারে কৃষিতে বিপ্লব ঘটাতে। আধুনিক প্রযুক্তি আর সনাতন অভিজ্ঞতার সমন্বয়ে আমরা তৈরি করছি আগামীর কৃষি।
          </p>
        </div>
       
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-950 rounded-full blur-3xl opacity-50 -ml-20 -mb-20"></div>
      </section>

    
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-green-50">
            <Image 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070" 
              alt="Agriculture mission" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-green-600 rounded-full"></span>
              আমাদের লক্ষ্য
            </h2>
            <p className="text-gray-600 text-lg leading-loose mb-6">
              Agrox-এর মূল লক্ষ্য হলো বাংলাদেশের প্রতিটি প্রান্তে আধুনিক কৃষি জ্ঞান পৌঁছে দেওয়া। অনেক সময় সঠিক তথ্যের অভাবে কৃষকরা কাঙ্ক্ষিত ফলন পান না। আমরা সেই দূরত্বের সেতুবন্ধন হিসেবে কাজ করছি।
            </p>
            <ul className="space-y-4">
              {[
                "সহজ ভাষায় আধুনিক চাষাবাদ পদ্ধতি।",
                "রোগ-বালাই দমনে সঠিক পরামর্শ।",
                "মৌসুমী ফসল ও মাটি ব্যবস্থাপনা টিপস।",
                "বিশেষজ্ঞদের ডিজিটাল গাইডলাইন।"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 font-bold text-gray-800">
                  <span className="text-green-600">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    
      <section className="bg-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900">কেন Agrox বেছে নেবেন?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-5">
          {[
            { icon: "🧪", title: "নির্ভুল তথ্য", desc: "আমরা অভিজ্ঞদের পরামর্শ যাচাই করে সঠিক তথ্য প্রদান করি।" },
            { icon: "📱", title: "সহজ ব্যবহার", desc: "একদম সাধারণ ইন্টারফেস যাতে সবাই সহজে ব্যবহার করতে পারে।" },
            { icon: "💚", title: "কৃষক বান্ধব", desc: "আমাদের প্রতিটি ফিচার কৃষকের সমস্যা সমাধানের জন্য তৈরি।" }
          ].map((card, index) => (
            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-green-100 group">
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">{card.icon}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-200 rounded-full border-4 border-white overflow-hidden shadow-lg">
            
             <div className="w-full h-full flex items-center justify-center bg-green-700 text-white text-3xl font-bold">FH</div>
          </div>
          <div className="mt-12 p-2">
            <h3 className="text-3xl font-black text-gray-900 ">Khandokar Fuad Hasan</h3>
            <p className="text-green-700 font-bold mb-6">Founder </p>
            <p className="text-gray-600 leading-loose italic">
              Agrox আমার একটি স্বপ্ন। একজন কম্পিউটার সায়েন্সের ছাত্র হিসেবে আমি চেয়েছি প্রযুক্তিকে কৃষির কল্যাণে ব্যবহার করতে। এই প্ল্যাটফর্মটি যেন প্রতিটি চাষির হাতের মুঠোয় সঠিক সমাধান পৌঁছে দিতে পারে, সেটাই আমার চেষ্টা।
            </p>
            <div className="mt-8 flex justify-center gap-4">
               <Link href="/advice" className="bg-green-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-800 transition-all">পরামর্শ দেখুন</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}