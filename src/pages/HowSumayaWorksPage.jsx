import React from "react";
import { ArrowLeft } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Tailor",
      description: "List your services, showcase your work, and receive stitching orders from users nearby.",
      icon: "🧵",
    },
    {
      title: "Seller",
      description: "Pick outfits, share them online, and earn a commission on every successful order.",
      icon: "👩‍💻",
    },
    {
      title: "User",
      description: "Shop ready styles or book local tailoring — delivered to your doorstep with care.",
      icon: "👩",
    },
  ];

  return (
    <section className="px-4 md:px-12 py-10 relative">
      <button className="flex items-center text-orange-600 font-medium mb-6 hover:underline">
        <ArrowLeft size={18} className="mr-1" />
        Back
      </button>

      <h2 className="text-4xl font-semibold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06] mb-10">How Sumaya Works</h2>

      <div className="relative">
        {/* Connector line */}
        <div className="absolute top-0 left-10 right-10 hidden md:block z-10">
          <svg height="80" width="100%" className="w-full h-20">
            <path
              d="M0,10 C150,50 350,-50 1000,40"
              stroke="#ccc"
              strokeDasharray="4"
              fill="transparent"
            />
          </svg>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" rounded-xl p-2 text-center flex flex-col items-center gap-4"
            >
              <div className="text-5xl shadow-md">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
        <section className="px-4 md:px-20 py-12 space-y-12 bg-white text-gray-800">

      {/* FOR TAILORS */}
      <div>
        <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06] mb-4">For Tailors</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base/5">
          <li>Create your profile and list your stitching services (e.g. blouse, kurti, lehenga, alterations).</li>
          <li>Upload sample work and showcase your expertise to build trust.</li>
          <li>Get discovered through pincode-based search by users in your area.</li>
          <li>Receive direct tailoring orders without spending on marketing.</li>
          <li>Chat with customers to finalize designs, sizes, and timelines.</li>
          <li>Deliver custom-stitched garments and grow through reviews and repeat orders.</li>
        </ul>
      </div>

      {/* FOR SELLERS */}
      <div>
        <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06] mb-4">For Sellers</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base/5">
          <li>Sign up as a seller and access a curated catalog of ethnic wear.</li>
          <li>Share sarees, kurtis, suits, and more via WhatsApp, Instagram, or your own storefront.</li>
          <li>Use referral links to earn a commission on every purchase.</li>
          <li>No need to manage inventory, packing, or delivery — Sumaya handles it all.</li>
          <li>Track your earnings, performance, and orders from a simple mobile dashboard.</li>
          <li>Build your own fashion resale brand with zero upfront cost.</li>
        </ul>
      </div>

      {/* FOR USERS */}
      <div>
        <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06] mb-4">For Users</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base/5">
          <li>Browse a wide range of ready-to-wear Indian outfits or custom tailoring services.</li>
          <li>Shop products shared by sellers or directly through the Sumaya platform.</li>
          <li>Choose your size or request a local tailor for custom measurements.</li>
          <li>Place your order with transparent pricing and secure payment.</li>
          <li>Get your outfit delivered to your doorstep — stitched with care.</li>
          <li>Enjoy a seamless shopping experience backed by local talent and quality checks.</li>
        </ul>
      </div>

      {/* BENEFITS SECTION */}
      <div>
        <h2 className="text-2xl md:text-3xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A54B10] to-[#3F1D06] mb-6">Benefits of using Sumaya</h2>
        <ul className="list-decimal list-inside space-y-3 text-gray-800">
          <li>
            <strong>Zero Investment Needed</strong><br />
            Start selling or offering services without holding inventory or spending on ads.
          </li>
          <li>
            <strong>Earn from Anywhere</strong><br />
            Work flexibly as a tailor or seller — directly from your phone.
          </li>
          <li>
            <strong>Wide Product Access</strong><br />
            Get instant access to a curated catalog of Indian wear ready to sell or customize.
          </li>
          <li>
            <strong>Local Tailor Discovery</strong><br />
            Users can easily find and book trusted tailors nearby through pincode-based search.
          </li>
          <li>
            <strong>Secure & Seamless Transactions</strong><br />
            Enjoy transparent pricing, safe payments, and doorstep delivery.
          </li>
          <li>
            <strong>One Platform, Multiple Opportunities</strong><br />
            Sell, stitch, shop, or earn — all in one easy-to-use ecosystem.
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-8">
        <button className="bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-orange-700 transition duration-200">
          Become a Seller
        </button>
      </div>
    </section>
    </section>
  );
}
