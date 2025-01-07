import React from "react";
import img1 from '../../Assets/ShopPage/img1.jpg'
import img2 from '../../Assets/ShopPage/img2.jpg'

function OtherCategories() {
  return (
    <div className="w-full mx-auto px-2 py-5 font-bellefair lg:py-20 xl:px-16">
      <h1 className="text-primary text-3xl mb-2 lg:text-4xl drop-shadow-[0_0_1px_#006400] uppercase lg:mb-10">
        Other category
      </h1>
      <div className="flex flex-wrap gap-2 md:gap-10 xl:justify-between">
        <div className="w-80 border border-black flex rounded-lg overflow-hidden lg:w-[30rem] lg:h-60 xl:rounded-[2.5rem] xl:w-[43vw] xl:h-[22vw]">
            <div className="w-[60%] flex flex-col justify-center items-start gap-1 p-2 lg:p-5 xl:gap-4 xl:px-8 xl:w-[53%]">
                <h2 className="text-xl lg:text-2xl xl:text-[2rem]">Women Jewellery</h2>
                <p className="text-xs lg:text-sm xl:text-base">Lorem ipsum dolor sit amet consectetur. Sed velit in vulputate amet vulputate donec pretium. Amet adipiscing habitant ac faucibus eu risus a.</p>
                <button className="bg-secondary text-accent px-4 py-1 rounded-full xl:text-xl xl:px-6 xl:py-2">Explore Now</button>
            </div>
            <div className="w-[40%] xl:w-[47%]">
                <img src={img1} className="w-full h-full object-cover" alt="women jewellery image" />
            </div>
        </div>
        <div className="w-80 border border-black flex rounded-lg overflow-hidden lg:w-[30rem] lg:h-60 xl:rounded-[2.5rem] xl:w-[43vw] xl:h-[22vw]">
            <div className="w-[60%] flex flex-col justify-center items-start gap-1 p-2 lg:p-5 xl:gap-4 xl:px-8 xl:w-[53%]">
                <h2 className="text-xl lg:text-2xl xl:text-[2rem]">Accessories</h2>
                <p className="text-xs lg:text-sm xl:text-base">Lorem ipsum dolor sit amet consectetur. Sed velit in vulputate amet vulputate donec pretium. Amet adipiscing habitant ac faucibus eu risus a.</p>
                <button className="bg-secondary text-accent px-4 py-1 rounded-full xl:text-xl xl:px-6 xl:py-2">Explore Now</button>
            </div>
            <div className="w-[40%] xl:w-[47%]">
                <img src={img2} className="w-full h-full object-cover" alt="women jewellery image" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default OtherCategories;
