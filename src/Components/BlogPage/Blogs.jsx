import React from "react";
import { blogsData } from "./BlogsData";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="py-5 px-2 md:w-[45rem] md:mx-auto lg:w-[52rem] lg:pb-20 xl:w-full xl:px-40">
      <div className="w-full flex-wrap gap-x-2 gap-y-4 flex relative justify-center sm:gap-10 md:gap-8 lg:gap-y-14 xl:gap-y-20 lg:justify-between">
        {blogsData.map((blog, index) => {
          return (
            <div
              key={index}
              className="blog-card w-36 rounded-md p-1 flex flex-col sm:p-5 sm:w-60 lg:rounded-2xl lg:gap-1 lg:pb-10 xl:pb-14 xl:gap-2 xl:w-[20vw] shadow-[0px_1px_3px_2px_#FFDF84]"
              onClick={() =>
                navigate(`/${blog.publishData}/${blog.title}/${blog.id}`)
              }
            >
              <div className="w-full h-24 rounded-md overflow-hidden sm:h-36 lg:rounded-2xl xl:h-[13vw] relative">
                <img
                  loading="lazy"
                  src={blog.thumbnail}
                  className="w-full h-full object-cover"
                  alt={blog.title}
                />
              </div>
              <h2 className="text-black text-[0.6rem]">
                {blog.publishData}
              </h2>
              <h1 className="text-primary text-[0.7rem] sm:text-[1rem] lg:leading-4 xl:leading-5 xl:text-[1.1rem] line-clamp-2">
                {blog.title}
              </h1>
            </div>
          );
        })}
      </div>
        <div>
            <button>Previous</button>
            <div>
                <button className="text-secondary">1</button>
                <button>2</button>
            </div>
            <button>Next</button>
        </div>
    </div>
  );
}

export default Blogs;
