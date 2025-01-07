import React from "react";
import img1 from '../../Assets/ShopPage/img1.jpg'
import img2 from '../../Assets/ShopPage/img2.jpg'

function OtherCategories() {
  return (
    <div className="w-full">
      <h1 className="text-primary text-3xl mb-2 lg:text-4xl xl:text-6xl xl:w-[70rem] uppercase">
        Other category
      </h1>
      <div>
        <div>
            <div>
                <h2>Women Jewellery</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Sed velit in vulputate amet vulputate donec pretium. Amet adipiscing habitant ac faucibus eu risus a.</p>
                <button>Explore Now</button>
            </div>
            <div>
                <img src={img1} alt="women jewellery image" />
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OtherCategories;
