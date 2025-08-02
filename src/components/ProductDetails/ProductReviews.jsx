import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, MessageSquare, Flag } from "lucide-react";

const ProductReviews = () => {
  const [expandedReview, setExpandedReview] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reportOpen, setReportOpen] = useState(null);

  const ratingsBreakdown = [
    { stars: 5, percent: 70, count: 315 },
    { stars: 4, percent: 15, count: 68 },
    { stars: 3, percent: 10, count: 45 },
    { stars: 2, percent: 3, count: 14 },
    { stars: 1, percent: 2, count: 9 },
  ];

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      date: "August 14, 2023",
      rating: 5,
      content:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to t-shirt.",
      verified: true,
      images: ["/review1.jpg", "/review2.jpg"],
      replies: [
        {
          name: "Store Owner",
          date: "August 15, 2023",
          content: "Thank you for your kind words, Samantha! We're thrilled you love our product."
        }
      ]
    },
    {
      id: 2,
      name: "Alex M.",
      date: "August 15, 2023",
      rating: 4,
      content:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      verified: false,
      images: ["/review3.jpg"]
    },
    // More reviews can be added here
  ];

  const averageRating = 4.8;
  const totalReviews = 451;

  const toggleReview = (id) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  const toggleReport = (id) => {
    setReportOpen(reportOpen === id ? null : id);
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <section className="px-6 md:px-16 py-10 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-12">
        {/* Average Rating */}
        <div className="text-center md:text-left flex-shrink-0">
          <div className="text-5xl font-bold text-orange-600">{averageRating}</div>
          <div className="flex justify-center md:justify-start my-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.floor(averageRating) ? "#f97316" : "#e5e7eb"}
                stroke="none"
                className={i < averageRating ? "text-orange-500" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm">{totalReviews} reviews</p>
        </div>

        {/* Rating Breakdown */}
        <div className="w-full space-y-3">
          {ratingsBreakdown.map(({ stars, percent, count }) => (
            <div key={stars} className="flex items-center gap-3">
              <button 
                onClick={() => {/* Filter by this rating */}}
                className="text-sm text-gray-700 hover:text-orange-600 w-8 text-left"
                aria-label={`Filter by ${stars} star reviews`}
              >
                {stars} ★
              </button>
              <div className="flex-1 bg-gray-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full"
                  style={{ width: `${percent}%` }}
                  aria-hidden="true"
                />
              </div>
              <span className="text-sm text-gray-500 w-12 text-right">{count}</span>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="md:ml-auto mt-4 md:mt-0">
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            aria-label="Write a review"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Filter (optional) */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
          All Reviews
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
          With Photos
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
          Verified Purchase
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <article 
            key={review.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < review.rating ? "#facc15" : "#e5e7eb"}
                    stroke="none"
                    className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              
              {/* Review actions dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleReport(review.id)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Review options"
                >
                  •••
                </button>
                {reportOpen === review.id && (
                  <div className="absolute right-0 mt-1 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2">
                      <Flag size={14} /> Report
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h3 className="font-semibold text-gray-800">
              {review.name}
              {review.verified && (
                <span className="ml-2 text-green-600 text-xs bg-green-50 px-2 py-0.5 rounded-full">
                  Verified Purchase
                </span>
              )}
            </h3>
            
            <p className="text-gray-600 mt-2 mb-4">{review.content}</p>
            
            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex gap-3 mb-4">
                {review.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Review ${idx + 1}`}
                    className="w-16 h-16 object-cover rounded border border-gray-200 cursor-pointer hover:opacity-90"
                    onClick={() => {/* Open image viewer */}}
                  />
                ))}
              </div>
            )}
            
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Posted on {review.date}</span>
              {review.replies && review.replies.length > 0 && (
                <button 
                  onClick={() => toggleReview(review.id)}
                  className="flex items-center gap-1 text-orange-600 hover:text-orange-700"
                >
                  {expandedReview === review.id ? (
                    <>
                      <ChevronUp size={16} /> Hide replies
                    </>
                  ) : (
                    <>
                      <MessageSquare size={16} /> Show replies ({review.replies.length})
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Replies section */}
            {expandedReview === review.id && review.replies && (
              <div className="mt-4 pl-4 border-l-2 border-orange-200 space-y-3">
                {review.replies.map((reply, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-gray-800">{reply.name}</div>
                    <p className="text-gray-600 text-sm mt-1">{reply.content}</p>
                    <div className="text-xs text-gray-400 mt-2">{reply.date}</div>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Load More */}
      {!showAllReviews && reviews.length > 2 && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setShowAllReviews(true)}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            aria-label="Load more reviews"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductReviews;