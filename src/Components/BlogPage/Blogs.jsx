import React, { useState } from "react";
import { blogsData } from "./BlogsData";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="py-5 px-2">
      <div className="w-full flex-wrap gap-2 flex relative justify-center sm:gap-10 md:gap-3 lg:justify-between xl:gap-y-10">
        {blogsData.map((blog, index) => {
          return (
            <div
              key={index}
              className="product-card w-36 flex flex-col sm:w-64 md:w-60 xl:w-[20vw]"
              onClick={() =>
                navigate(`/${blog.publishData}/${blog.title}/${blog.id}`)
              }
            >
              <div className="w-full h-36 rounded-md overflow-hidden sm:h-64 md:h-60 xl:h-[20vw] relative">
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
              <h1 className="text-primary text-[0.7rem] sm:text-[1.2rem] xl:text-[1.4rem]">
                {blog.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
