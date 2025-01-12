import React, { useState } from "react";
import { blogsData } from "./BlogsData";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();
  const blogsPerPage = 6; // Number of blog cards per page
  const totalPages = Math.ceil(blogsData.length / blogsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page

  // Calculate the blogs to display based on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handlers for Previous and Next buttons
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handler for direct page navigation
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-5 px-2 md:w-[45rem] md:mx-auto lg:w-[52rem] lg:pb-20 xl:w-full xl:px-40">
      <div className="w-full flex-wrap gap-x-2 gap-y-4 flex relative justify-center sm:gap-10 md:gap-8 lg:gap-y-14 xl:gap-x-24 xl:gap-y-20">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="blog-card w-36 rounded-md p-1 flex flex-col sm:p-5 sm:w-60 lg:rounded-2xl lg:gap-1 lg:pb-10 xl:pb-14 xl:gap-2 xl:px-3 xl:w-[20vw] shadow-[0px_1px_3px_2px_#FFDF84]"
            onClick={() =>
              navigate(`/${blog.publishData}/${blog.title}/${blog.id}`)
            }
          >
            <div className="w-full h-24 rounded-md overflow-hidden sm:h-36 lg:rounded-2xl xl:h-[12vw] relative">
              <img
                loading="lazy"
                src={blog.thumbnail}
                className="w-full h-full object-cover"
                alt={blog.title}
              />
            </div>
            <h2 className="text-black text-[0.6rem]">{blog.publishData}</h2>
            <h1 className="text-primary text-[0.7rem] sm:text-[1rem] lg:leading-4 xl:leading-5 xl:text-[1.1rem] line-clamp-2">
              {blog.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-5 lg:mt-14">
        <button
          onClick={handlePrevious}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 text-accent"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`text-xl mx-1 ${
                currentPage === index + 1
                  ? "text-secondary"
                  : "text-dark"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary text-accent"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blogs;
