import FeedbackSlider from "./FeedbackSlider";
import bgImage from '../../Assets/LandingPage/Feedback/bg-image.jpg';

// Define the Feedback component
function FeedBack() {
  return (
    <section className="w-full relative lg:pb-10 lg:h-[80vh] xl:pb-5"> {/* Feedback section container */}
      <div className="w-full h-96 lg:h-[25rem] xl:h-[30rem]"> {/* Background image container */}
        <img src={bgImage} loading="lazy" className="w-full h-full object-cover xl:object-[0px_70%] filter brightness-50" alt="background image" /> {/* Background image */}
      </div>
      <div className="w-full flex gap-6 flex-col items-center absolute top-0 left-0 py-16 xl:py-36"> {/* Feedback content container */}
        <h1 className="font-bellefair capitalize text-white text-4xl text-center my-2 md:w-[35rem] md:text-5xl lg:text-7xl lg:w-[50rem] lg:mt-10"> {/* Feedback title */}
        what our client says
        </h1>
        <FeedbackSlider /> {/* Include FeedbackSlider component */}
      </div>
    </section>
  );
}

export default FeedBack;
