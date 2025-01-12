import React, { useState } from "react";
import { blogsData } from "./BlogsData";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  const renderBlogs = () => {
    return blogsData.map((blog, index) => (
      <div
        key={index}
        className="product-card w-36 flex flex-col sm:w-64 md:w-60 xl:w-[20vw]"
        onClick={() => navigate(`/${blog.publishData}/${blog.title}/${blog.id}`)}
      >
        <div className="w-full h-36 overflow-hidden sm:h-64 md:h-60 xl:h-[20vw] relative">
          <img
            loading="lazy"
            src={blog.thumbnail}
            className="w-full h-full object-cover"
            alt={blog.title}
          />
        </div>
        <h2 className="text-black text-[0.8rem] flex items-center gap-2 sm:text-[1.3rem] xl:text-[1.6rem] lg:gap-6">
          {blog.publishData}
        </h2>
        <h1 className="text-black text-[0.7rem] mt-1 sm:text-[1.2rem] xl:text-[1.4rem]">
          {blog.title}
        </h1>
      </div>
    ));
  };
  return (
    <div>
      <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 md:gap-3 lg:justify-between xl:gap-y-10">
        {renderBlogs()}
      </div>
    </div>
  );
}

export default Blogs;
