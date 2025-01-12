import { IoStarSharp } from "react-icons/io5";
import defaultProfilePic from "../../Assets/profile.png"; // Replace with the actual path

function ReviewSection({ product }) {
  const { reviews } = product;

  // Helper function to render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <IoStarSharp
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  // Recursive function to render replies
  const renderReplies = (replies) => {
    return (
      <div className="ml-5 mt-2 border-l-2 border-gray-200 pl-3">
        {replies.map((reply) => (
          <div key={reply.id} className="mb-3">
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={reply.profilePicture || defaultProfilePic}
                  alt={`${reply.user}'s profile`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-sm">{reply.user}</span>
              </div>
              <span className="text-xs text-gray-400">{reply.date}</span>
            </div>
            <p className="pl-10 text-sm text-gray-600 mt-1">{reply.comment}</p>
            <div className="pl-10 flex items-center gap-3 mt-1">
              <span className="text-xs text-gray-500">👍 {reply.likes}</span>
              <span className="text-xs text-gray-500">👎 {reply.dislikes}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-5 border border-red-700 w-80 mx-auto">
      <div className="font-lora">
        {/* Average Rating Section */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-1">
            {renderStars(Math.round(reviews.averageRating))}
          </div>
          <span className="text-lg text-primary">
            {reviews.averageRating.toFixed(1)}
          </span>
        </div>

        {/* Detailed Ratings */}
        <div className="mb-5">
          {Object.entries(reviews.detailedRatings).map(([rating, count]) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="w-5 text-sm font-medium">{rating}</span>
              <div className="w-full h-2 bg-[#D9D9D9] rounded-sm">
                <div
                  className="h-2 bg-secondary rounded"
                  style={{
                    width: `${(count / reviews.totalReviews) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">{count}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Comments Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Customer Reviews</h3>
        {reviews.comments.map((comment) => (
          <div
            key={comment.id}
            className="p-3 mb-3 bg-gray-50 border rounded-md"
          >
            <div className="flex items-center justify-start gap-4 mb-2">
              <div className="flex items-center gap-2">
                <img
                  src={comment.profilePicture || defaultProfilePic}
                  alt={`${comment.user}'s profile`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium">{comment.user}</span>
              </div>
              <span className="text-sm text-gray-400">{comment.date}</span>
            </div>
            <div className="pl-11 flex gap-1 mb-2">{renderStars(comment.rating)}</div>
            <p className="pl-12 text-sm text-gray-600">{comment.comment}</p>
            <div className="pl-12 flex items-center gap-3 mt-2">
              <span className="text-sm text-gray-500">👍 {comment.likes}</span>
              <span className="text-sm text-gray-500">
                👎 {comment.dislikes}
              </span>
            </div>
            {/* Render replies if available */}
            {comment.replies &&
              comment.replies.length > 0 &&
              renderReplies(comment.replies)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
