import { IoStarSharp } from "react-icons/io5";
import defaultProfilePic from "../../Assets/profile.png";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

function ReviewSection({ product }) {
  const { reviews } = product;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest");
  const [visibleComments, setVisibleComments] = useState(2); // Show 2 comments initially
  const [visibleReplies, setVisibleReplies] = useState({}); // Track visible replies for each comment

  // Helper function to render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <IoStarSharp
        key={index}
        className={index < rating ? "text-secondary" : "text-gray-300"}
      />
    ));
  };

  // Recursive function to render replies with "Read More" functionality
  const renderReplies = (replies, commentId) => {
    const visibleCount = visibleReplies[commentId] || 1; // Show 1 reply initially
    const canShowMore = replies.length > visibleCount;

    return (
      <div className="ml-5 mt-2 pl-3 flex flex-col lg:mt-5 lg:ml-16">
        {replies.slice(0, visibleCount).map((reply) => (
          <div key={reply.id} className="mb-3">
            <div className="flex items-center justify-start gap-2 lg:gap-5">
              <img
                src={reply.profilePicture || defaultProfilePic}
                alt={`${reply.user}'s profile`}
                className="w-8 h-8 rounded-full object-cover lg:w-14 lg:h-14"
              />
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mulish text-sm">{reply.user}</span>
                  <span className="text-xs font-mulish text-gray-400">{reply.date}</span>
                </div>
                <div className="flex gap-1">{renderStars(reply.rating)}</div>
              </div>
            </div>
            <div className="pl-10 text-sm text-gray-600 mt-1 font-bellefair lg:pl-20 lg:leading-4">{reply.comment}</div>
            <div className="pl-10 flex items-center gap-3 mt-1 font-mulish lg:pl-20">
              <button className="text-secondary text-sm">Reply</button>
              <button className="text-xs text-gray-500 flex items-center gap-1">
                <BiLike /> {reply.likes}
              </button>
              <button className="text-xs text-gray-500 flex items-center gap-1">
                <BiDislike /> {reply.dislikes}
              </button>
            </div>
          </div>
        ))}
        {canShowMore ? (
          <button
            className="text-[0.6rem] text-accent mt-2 font-bellefair bg-secondary px-3 py-[0.2rem] rounded-full self-end"
            onClick={() =>
              setVisibleReplies((prev) => ({
                ...prev,
                [commentId]: visibleCount + 1,
              }))
            }
          >
            More Replies
          </button>
        ) : (
          visibleReplies[commentId] > 1 && (
            <button
              className="text-[0.6rem] text-accent mt-2 font-bellefair bg-secondary px-3 py-[0.2rem] rounded-full self-end"
              onClick={() =>
                setVisibleReplies((prev) => ({
                  ...prev,
                  [commentId]: 1,
                }))
              }
            >
              Less Replies
            </button>
          )
        )}
      </div>
    );
  };

  const options = ["Newest", "Oldest"];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".relative")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="p-5 w-80 mx-auto md:flex md:flex-row-reverse md:justify-between md:gap-20 md:w-[45rem] md:px-0 lg:w-[50rem] lg:py-10 xl:py-14 xl:w-[70rem]">
      <div className="font-lora">
        {/* Average Rating Section */}
        <div className="flex items-center gap-2 justify-between md:gap-5 xl:gap-10">
          <div className="flex gap-1 text-3xl">{renderStars(Math.round(reviews.averageRating))}</div>
          <span className="text-3xl pr-4 text-primary md:p-0">{reviews.averageRating.toFixed(1)}</span>
        </div>
        <span className="w-full h-[1px] bg-black/20 block my-3 md:my-4"></span>
        {/* Detailed Ratings */}
        <div className="mb-5 xl:w-80">
          {Object.entries(reviews.detailedRatings).map(([rating, count]) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="w-5 text-sm font-medium xl:text-base">{rating}</span>
              <div className="w-full h-2 bg-[#D9D9D9] rounded-sm">
                <div
                  className="h-2 bg-secondary rounded"
                  style={{
                    width: `${(count / reviews.totalReviews) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 xl:text-lg">{count}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Comments Section */}
      <div className="flex flex-col w-[30rem]">
        <div className="font-bellefair flex gap-6 mb-3 lg:gap-10">
          <h3 className="text-3xl text-[#555555] lg:text-4xl xl:text-[2.5rem]">Details</h3>
          <h3 className="text-3xl text-primary lg:text-4xl xl:text-[2.5rem]">Review</h3>
        </div>
        <div className="relative my-3 w-max md:mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-base px-5 py-1 border border-[#7A7A7A] rounded-md flex items-center gap-3 md:rounded-sm lg:py-2"
          >
            {selectedOption} <span>
              <IoIosArrowDown />
            </span>
          </button>
          {isOpen && (
            <div className="w-full absolute top-10 z-20 bg-white text-dark shadow-md rounded-md">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                  className="px-7 py-1 hover:bg-gray-200"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        {reviews.comments.slice(0, visibleComments).map((comment) => (
          <div key={comment.id} className="pb-3 md:pb-10">
            <div className="flex items-center justify-start gap-2 mb-2 lg:gap-5">
              <img
                src={comment.profilePicture || defaultProfilePic}
                alt={`${comment.user}'s profile`}
                className="w-10 h-10 rounded-full object-cover lg:w-14 lg:h-14"
              />
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mulish text-primary">{comment.user}</span>
                  <span className="text-sm text-gray-600 font-mulish">{comment.date}</span>
                </div>
                <div className="flex gap-1">{renderStars(comment.rating)}</div>
              </div>
            </div>
            <p className="pl-12 text-sm font-bellefair lg:pl-20 lg:leading-4">{comment.comment}</p>
            <div className="pl-12 flex items-center gap-3 mt-2 font-mulish lg:pl-20">
              <button className="text-secondary text-sm">Reply</button>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                <BiLike /> {comment.likes}
              </button>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                <BiDislike /> {comment.dislikes}
              </button>
            </div>
            {comment.replies &&
              comment.replies.length > 0 &&
              renderReplies(comment.replies, comment.id)}
          </div>
        ))}
        {reviews.comments.length > visibleComments ? (
          <button
            className="text-accent bg-[#CFAB55] px-5 py-1 rounded-full text-sm mt-3 self-center font-bellefair"
            onClick={() => setVisibleComments((prev) => prev + 2)}
          >
            Read More
          </button>
        ) : (
          visibleComments > 2 && (
            <button
              className="text-accent bg-[#CFAB55] px-5 py-1 rounded-full text-sm mt-3 self-center font-bellefair"
              onClick={() => setVisibleComments(2)}
            >
              Show Less
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default ReviewSection;
