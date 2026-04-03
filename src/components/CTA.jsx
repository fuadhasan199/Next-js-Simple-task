import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-6 md:px-16">

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Modernize Your Farming?
        </h2>

        {/* SUBTEXT */}
        <p className="text-green-100 text-lg mb-8">
          Join thousands of farmers using AgroX for smarter decisions,
          better yield, and modern agriculture solutions.
        </p>

        {/* VALUE POINTS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-green-200">
          <span>🌦️ Weather Insights</span>
          <span>🌱 Crop Recommendation</span>
          <span>🧪 Soil Analysis</span>
          <span>🔔 Smart Alerts</span>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* PRIMARY CTA */}
          <Link href="/register">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition shadow-lg">
              Get Started Free
            </button>
          </Link>

          {/* SECONDARY CTA */}
          <Link href="/advice">
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-green-900 transition">
              Explore Products
            </button>
          </Link>

        </div>

        {/* SMALL TRUST LINE */}
        <p className="text-sm text-green-300 mt-6">
          No credit card required • Free to start • Trusted by farmers in Bangladesh
        </p>

      </div>
    </section>
  );
};

export default CTA;