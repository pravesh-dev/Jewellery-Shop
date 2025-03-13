import FeaturedSlider from "./FeaturedSlider";
import newArrival from '../../Assets/LandingPage/Featured/new-arrival.jpg';
import topSeller from '../../Assets/LandingPage/Featured/top-seller.jpg';
import { LiaLongArrowAltRightSolid } from "react-icons/lia"; // Import the long arrow icon
import { Link } from "react-router-dom";
import { useState } from "react";

// Define the Featured component
function Featured() {
    // State to keep track of which card is being hovered
    const [isHovering, setIsHovering] = useState(null); 

    // Function to handle mouse enter event on a card
    const handleMouseEnter = (card) => {
        setIsHovering(card); // Sets the card being hovered
    };

    // Function to handle mouse leave event on a card
    const handleMouseLeave = () => {
        setIsHovering(null); // Resets the hover state when the mouse leaves
    };

    // JSX for the Featured section
    return (
        <section className="w-full font-bellefair px-2 py-5 md:px-16 md:py-10 lg:py-20 xl:flex flex-col items-center xl:py-10">
            <h1 className="text-primary text-3xl mb-2 lg:text-4xl xl:text-[2rem] xl:w-[70rem] text-stroke xl:mb-0">
                Featured Product
            </h1>
            <p className="text-dark text-xl leading-5 sm:w-[35rem] lg:text-2xl lg:w-[40rem] xl:text-[1.12rem] xl:leading-10 xl:w-[70rem] xl:pr-[5rem]">
                Explore our finest collection, featuring best-selling classics and exclusive new arrivals that embody elegance and quality.
            </p>
            <div className="w-full flex gap-2 flex-col items-center mt-2 md:mt-10 md:flex-row md:justify-between md:h-[30rem] lg:h-[40rem] lg:justify-center lg:gap-7 xl:h-[40rem] xl:w-[70rem] xl:justify-between">
                <FeaturedSlider />
                <div className="w-full flex flex-col gap-2 md:w-[48%] md:h-full md:justify-between md:gap-7 lg:w-[30rem] xl:w-[33.5rem]">
                    {/* New Arrivals Card */}
                    <Link
                        className="w-full h-52 rounded-lg overflow-hidden sm:h-80 md:h-1/2 lg:rounded-xl relative xl:h-[46.5%]"
                        onMouseEnter={() => handleMouseEnter("newArrival")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p
                            className={`absolute w-full text-lg bg-secondary text-accent top-0 left-0 flex items-center gap-1 pl-3 py-1 duration-500 ${
                                isHovering === "newArrival" ? "" : "md:-top-full"
                            } lg:pl-5 xl:text-[1.1rem]`}
                        >
                            New Arrivals <LiaLongArrowAltRightSolid />
                        </p>
                        <img
                            src={newArrival}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            alt="cards images"
                        />
                    </Link>

                    {/* Top Seller Card */}
                    <Link
                        className="w-full h-52 rounded-lg overflow-hidden sm:h-80 md:h-1/2 lg:rounded-xl relative xl:h-[46.5%]"
                        onMouseEnter={() => handleMouseEnter("topSeller")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p
                            className={`absolute w-full text-lg bg-secondary text-accent top-0 left-0 flex items-center gap-1 pl-3 py-1 duration-500 ${
                                isHovering === "topSeller" ? "" : "md:-top-full"
                            } lg:pl-5 xl:text-[1.1rem]`}
                        >
                            Top Seller <LiaLongArrowAltRightSolid />
                        </p>
                        <img
                            src={topSeller}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            alt="cards images"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Featured;
