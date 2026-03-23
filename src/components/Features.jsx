import React from "react";
import {
  FaCloudSunRain,
  FaSeedling,
  FaFlask,
  FaBell,
  FaStore,
  FaChartLine,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-16">
      
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-green-800">
          Smart Farming Features
        </h2>
        <p className="text-base-content mt-5 ">
          Everything a modern farmer needs in one platform
        </p>
      </div>

    
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <FaCloudSunRain className="text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Weather Insights</h3>
          <p className="text-gray-600">
            Real-time weather updates and rainfall predictions for better planning.
          </p>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <FaSeedling className="text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Crop Recommendation</h3>
          <p className="text-gray-600">
            Get smart suggestions on which crops to grow based on season and soil.
          </p>
        </div>

      
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <FaFlask className="text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Soil Health Tips</h3>
          <p className="text-gray-600">
            Improve soil fertility with expert-level fertilizer recommendations.
          </p>
        </div>

      
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <FaBell className="text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
          <p className="text-gray-600">
            Get instant alerts about weather changes and farming risks.
          </p>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <FaStore className="text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Agro Marketplace</h3>
          <p className="text-gray-600">
            Buy seeds, fertilizers, and farming tools in one place.
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <FaChartLine className="text-3xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Farm Analytics</h3>
          <p className="text-gray-600">
            Track your farming progress and improve productivity over time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;