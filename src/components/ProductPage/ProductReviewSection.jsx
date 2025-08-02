import React from "react";
import { Star, MoreHorizontal, CheckCircle } from "lucide-react";

const ratingsData = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 10 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 5,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
];

export default function ProductReviewSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Average Rating */}
        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-sm">
          <span className="text-4xl font-bold text-orange-500">4.8</span>
          <div className="flex text-yellow-500 mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">Product Rating</p>
        </div>

        {/* Rating Bars */}
        <div className="flex flex-col justify-center gap-2">
          {ratingsData.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{rating.stars} ★</span>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-orange-400 rounded"
                  style={{ width: `${rating.percent}%` }}
                />
              </div>
              <span className="text-sm text-gray-500">{rating.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header and Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">All Reviews (451)</h2>
        <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded">
          Write a Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 p-5 rounded-lg shadow-sm bg-white relative"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>
                <CheckCircle size={16} className="text-green-500" />
              </div>
              <MoreHorizontal className="text-gray-400 cursor-pointer" />
            </div>
            <h4 className="font-semibold text-sm text-gray-800">{review.name}</h4>
            <p className="text-sm text-gray-600 mt-2">{review.content}</p>
            <p className="text-xs text-gray-400 mt-3">Posted on {review.date}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        <button className="border border-gray-300 text-sm text-gray-700 px-6 py-2 rounded hover:bg-gray-100">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
