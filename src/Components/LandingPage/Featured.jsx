import FeaturedSlider from "./FeaturedSlider"
import newArrival from '../../Assets/LandingPage/Featured/new-arrival.jpg';
import topSeller from '../../Assets/LandingPage/Featured/top-seller.jpg';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

function Featured() {
  return (
    <section className='w-full font-bellefair px-2 py-5 md:px-16 md:py-10 xl:flex flex-col items-center'>
      <h1 className='text-primary text-3xl mb-2 lg:text-4xl xl:text-6xl xl:w-[70rem]'>Featured Product</h1>
      <p className='text-dark text-xl leading-5 sm:w-[35rem] lg:text-2xl lg:w-[40rem] xl:text-[2.3rem] xl:leading-10 xl:w-[70rem]'>Explore our finest collection, featuring best-selling classics and exclusive new arrivals that embody elegance and quality.</p>
      <div className="w-full flex gap-2 flex-col items-center mt-2 md:mt-10 md:flex-row md:justify-between md:h-[30rem] lg:h-[40rem] lg:justify-center lg:gap-7 xl:h-[45rem] xl:w-[70rem] xl:justify-between">
        <FeaturedSlider />
        <div className="w-full flex flex-col gap-2 md:w-[48%] md:h-full md:justify-between md:gap-7 lg:w-[30rem] xl:w-[35rem]">
            <div className="w-full h-52 rounded-lg overflow-hidden sm:h-80 md:h-1/2 lg:rounded-xl"><img src={newArrival} className="w-full h-full object-cover" loading="lazy" alt="cards images" /></div>
            <div className="w-full h-52 rounded-lg overflow-hidden sm:h-80 md:h-1/2 lg:rounded-xl"><img src={topSeller} className="w-full h-full object-cover" loading="lazy" alt="cards images" /></div>
        </div>
      </div>
    </section>
  )
}

export default Featured
