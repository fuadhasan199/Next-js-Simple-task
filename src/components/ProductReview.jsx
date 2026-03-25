"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const reviews = [
  {
    name: "রফিকুল ইসলাম",
    location: "গাজীপুর",
    review: "AgroX ব্যবহার করে আমার ফসল উৎপাদন অনেক বেড়েছে। দারুণ প্ল্যাটফর্ম!",
  },
  {
    name: "সাবিনা আক্তার",
    location: "নরসিংদী",
    review: "Weather alert featureটা খুব কাজে লাগে, এখন সিদ্ধান্ত নিতে সহজ হয়।",
  },
  {
    name: "মোঃ হাসান",
    location: "টাঙ্গাইল",
    review: "Crop recommendation system একদম সঠিক কাজ করছে। ভালো লাগছে।",
  },
  {
    name: "আব্দুল্লাহ আল মামুন",
    location: "কুমিল্লা",
    review: "Soil tips ফলো করে fertilizer খরচ কমাতে পেরেছি।",
  },
  {
    name: "নাজমা বেগম",
    location: "চট্টগ্রাম",
    review: "একটা আধুনিক কৃষি অ্যাপ হিসেবে AgroX অনেক হেল্পফুল।",
  },
  {
    name: "সোহেল রানা",
    location: "ঢাকা",
    review: "Marketplace featureটা খুব দরকারি ছিল, এক জায়গায় সব পাচ্ছি।",
  },
  {
    name: "ইমরান হোসেন",
    location: "রাজশাহী",
    review: "Smart alerts system আমাকে অনেক ক্ষতি থেকে বাঁচিয়েছে।",
  },
  {
    name: "তানজিলা ইসলাম",
    location: "সিলেট",
    review: "UI অনেক সুন্দর, ব্যবহার করতেও সহজ লাগছে।",
  },
  {
    name: "আল আমিন",
    location: "বরিশাল",
    review: "AgroX আসলে কৃষকদের জন্য একটা digital helper।",
  },
];

const ProductReview = () => {
  return (
    <section className="py-16 bg-green-50">
      
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-10">
        Farmers Reviews
      </h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-all duration-300 
            scale-90 opacity-70 swiper-slide-active:scale-100 swiper-slide-active:opacity-100">
              
              <p className="text-gray-600 mb-4">{item.review}</p>

              <h3 className="font-bold text-green-700">{item.name}</h3>
              <span className="text-sm text-gray-500">{item.location}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductReview;