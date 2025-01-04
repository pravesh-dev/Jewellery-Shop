import FeaturedSlider from "./FeaturedSlider"
import newArrival from '../../Assets/LandingPage/Featured/new-arrival.jpg';
import topSeller from '../../Assets/LandingPage/Featured/top-seller.jpg';
function Featured() {
  return (
    <section className='w-full font-bellefair px-2 py-5 md:px-16 md:py-10'>
      <h1 className='text-primary text-3xl mb-2 lg:text-4xl xl:text-5xl'>Featured Product</h1>
      <p className='text-dark text-xl leading-5 sm:w-[35rem] lg:text-2xl lg:w-[40rem] xl:text-3xl xl:w-[50rem]'>Explore our finest collection, featuring best-selling classics and exclusive new arrivals that embody elegance and quality.</p>
      <div className="w-full bg-red-500 flex gap-2 flex-col items-center mt-2">
        <FeaturedSlider />
        <div className="w-full flex flex-col gap-2">
            <div className="w-full h-52 rounded-lg overflow-hidden"><img src={newArrival} className="w-full h-full object-cover" loading="lazy" alt="cards images" /></div>
            <div className="w-full h-52 rounded-lg overflow-hidden"><img src={topSeller} className="w-full h-full object-cover" loading="lazy" alt="cards images" /></div>
        </div>
      </div>
    </section>
  )
}

export default Featured
