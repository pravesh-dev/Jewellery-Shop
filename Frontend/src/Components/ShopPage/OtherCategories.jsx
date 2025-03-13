import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import img1 from "../../Assets/ShopPage/img1.jpg";
import img2 from "../../Assets/ShopPage/img2.jpg";
import img3 from "../../Assets/ShopPage/img3.jpg";

function OtherCategories() {
  const { category, setCategory } = useContext(ShopContext);

  const categories = [
    { name: "Women", fullName: "Women Jewellery", image: img1 },
    { name: "Men", fullName: "Men Jewellery", image: img3 },
    { name: "Accessories", fullName: "Accessories", image: img2 },
  ];

  // Filter out the currently selected category
  const filteredCategories = categories.filter((cat) => cat.name !== category);

  return (
    <div className="w-full mx-auto px-2 py-5 font-bellefair lg:pt-0 lg:pb-20 xl:px-16">
      <h1 className="text-primary text-3xl mb-2 lg:text-4xl capitalize lg:mb-10 text-stroke lg:text-[2rem]">
        Other Categories
      </h1>
      <div className="flex flex-wrap gap-2 md:gap-10 xl:justify-between xl:gap-0">
        {filteredCategories.slice(0, 2).map((cat) => (
          <div
            key={cat.name}
            className="w-80 border border-black flex rounded-lg overflow-hidden lg:w-[30rem] lg:h-60 xl:rounded-[2rem] xl:w-[49%] xl:min-h-[16rem]"
          >
            <div className="w-[60%] flex flex-col justify-center items-start gap-1 p-2 lg:p-5 xl:gap-4 xl:px-12 xl:w-[65%]">
              <h2 className="text-xl lg:text-2xl xl:text-[1.5rem] text-stroke-xs">{cat.fullName}</h2>
              <p className="text-xs lg:text-sm xl:text-[1.12rem] xl:leading-5">
                Lorem ipsum dolor sit amet consectetur. Sed velit in vulputate amet vulputate
                donec pretium. Amet adipiscing habitant ac faucibus eu risus a.
              </p>
              <button
                onClick={() => setCategory(cat.name)}
                className="bg-secondary hover:bg-[#B0890A] duration-300 text-accent px-4 py-1 rounded-full xl:text-[1.12rem] xl:px-6 xl:w-[8.7rem] xl:h-[2.2rem] xl:py-0 xl:mt-5"
              >
                Explore Now
              </button>
            </div>
            <div className="w-[40%] xl:w-[35%]">
              <img src={cat.image} className="w-full h-full object-cover" alt={cat.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherCategories;
