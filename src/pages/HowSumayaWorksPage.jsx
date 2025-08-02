import React from "react";
import { ArrowLeft } from "lucide-react";
import top_left_frame from "../assets/AboutUs_frame_up.svg";
import bottom_left_frame from "../assets/AboutUs_frame_down.svg";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate()
  const steps = [
    {
      title: "Tailor",
      description: "List your services, showcase your work, and receive stitching orders from users nearby.",
      img: "/HowSumayaWorks/set1.png",
      icon: "/HowSumayaWorks/set1icon.png"

    },
    {
      title: "Seller",
      description: "Pick outfits, share them online, and earn a commission on every successful order.",
      img: "/HowSumayaWorks/set2.png",
      icon: "/HowSumayaWorks/set2icon.png"
    },
    {
      title: "User",
      description: "Shop ready styles or book local tailoring — delivered to your doorstep with care.",
      img: "/HowSumayaWorks/set3.png",
      icon: "/HowSumayaWorks/set3icon.png"
    },
  ];

  return (
    <section className="px-4 md:px-30 py-10 relative">
       <img
              src={top_left_frame}
              alt=""
              className="absolute top-0 right-0 w-40 pointer-events-none select-none"
              draggable="false"
            />
            
            <img
              src={bottom_left_frame}
              alt=""
              className="absolute bottom-0 left-0 w-40 pointer-events-none select-none"
              draggable="false"
            />
             <img
              src={top_left_frame}
              alt=""
              className="absolute top-0 left-0 rotate-272 w-40 pointer-events-none select-none"
              draggable="false"
            />
            
            <img
              src={bottom_left_frame}
              alt=""
              className="absolute bottom-0 right-0 rotate-272 w-40 pointer-events-none select-none"
              draggable="false"
            />
      <button className="flex items-center text-black font-medium m-6 cursor-pointer"
        onClick={()=>navigate('/home')}
      >
        <ArrowLeft size={18} className="mr-1" />
        Back
      </button>

      <h2 className="text-4xl font-semibold font-serif pl-4 text-[#D4793D] mb-10">How Sumaya Works</h2>

      <div className="relative">
        {/* Connector line */}
        <div className="absolute top-0 left-0 right-0 hidden md:block z-1">
          <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
            <path
              d="M0,50 C200,0 300,100 500,50 C700,0 800,100 1000,50"
              stroke="#D1D5DB" 
              strokeDasharray="5,8"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>


        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" relative rounded-xl p-2 text-center flex flex-col items-center gap-4 z-100"
            >

              <div className="shadow-2xl  shadow-gray-300 p-4 bg-white">
                <img src={step.img} alt="icons" className="h-20 w-20 " />
              </div>
             <div className="absolute top-0  ml-24 text-2xl rounded-full bg-[#D4793D]">
                <img src={step.icon} alt="icons" className="h-8 w-8 p-1" />
              </div> 
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-lg text-gray-900">{step.description}</p>
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
          <button className="bg-[#D4793D] text-white text-lg font-semibold px-12 py-2 rounded-md transition duration-200">
            Become a Seller
          </button>
        </div>
      </section>
    </section>
  );
}
