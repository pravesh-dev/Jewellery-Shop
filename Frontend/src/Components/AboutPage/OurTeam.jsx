import { forwardRef } from "react"; // Importing forwardRef from React
import teamImg1 from "../../Assets/AboutPage/team1.jpg"; // Importing team image 1
import teamImg2 from "../../Assets/AboutPage/team2.jpg"; // Importing team image 2
import teamImg3 from "../../Assets/AboutPage/team3.jpg"; // Importing team image 3

// Functional component for OurTeam
const OurTeam = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full pt-5 pb-10 flex flex-col gap-10 md:flex-row md:px-2 lg:items-center xl:px-16">
      <div className="w-80 mx-auto flex items-center justify-between px-2 md:w-1/2 md:px-0 md:justify-center md:gap-3 xl:justify-start xl:gap-7">
        <div className="flex flex-col items-center gap-3 xl:gap-7">
          <div className="w-40 h-36 rounded-[0.21rem] overflow-hidden md:w-52 md:h-48 lg:w-64 lg:h-60 lg:rounded-[0.33rem] xl:w-80 xl:h-[20.5rem]">
            <img
              src={teamImg1}
              className="w-full h-full object-cover"
              loading="lazy"
              alt="image of team member"
            />
          </div>
          <div className="w-32 h-36 rounded-[0.21rem] overflow-hidden md:w-44 md:h-48 lg:w-52 lg:h-60 lg:rounded-[0.33rem] xl:w-[17rem] xl:h-[20.5rem]">
            <img
              src={teamImg2}
              className="w-full h-full object-cover"
              loading="lazy"
              alt="image of team member"
            />
          </div>
        </div>
        <div>
          <div className="w-32 h-36 rounded-[0.21rem] overflow-hidden md:w-44 md:h-48 lg:w-52 lg:h-60 lg:rounded-[0.33rem] xl:w-[17rem] xl:h-[20.5rem]">
            <img
              src={teamImg3}
              className="w-full h-full object-cover"
              loading="lazy"
              alt="image of team member"
            />
          </div>
        </div>
      </div>
      <div className="w-full font-bellefair flex flex-col items-center gap-2 px-2 md:items-start md:w-1/2 md:px-0 xl:pr-20">
        <h1 className="uppercase text-primary text-3xl sm:text-4xl lg:text-5xl lg:mb-5 text-stroke">
          The team.
        </h1>
        <p className="text-sm text-center sm:text-left sm:text-base lg:text-lg xl:text-[1.3rem] xl:leading-6 xl:mb-5">
          Lorem ipsum dolor sit amet consectetur. Diam tellus viverra diam
          pellentesque. Iaculis amet adipiscing ornare enim elementum pulvinar
          purus vitae. Aliquam et ultrices vestibulum ut tellus mattis elit
          facilisis vel. Elit lectus purus consequat quam non hendrerit sapien
          ante nisl. Lorem ipsum dolor sit amet consectetur. Diam tellus viverra
          diam pellentesque. Iaculis amet adipiscing ornare enim elementum
          pulvinar purus vitae. Aliquam et ultrices vestibulum ut tellus mattis
          elit facilisis vel. Elit lectus purus consequat quam non hendrerit
          sapien ante nisl.
        </p>
        <p className="text-sm text-center sm:text-left sm:text-base lg:text-lg xl:text-[1.3rem] xl:leading-6">
          Diam nunc erat id mauris mauris erat. Dolor eget tortor non eget
          egestas vulputate sit urna purus. Enim eu dui ultricies sollicitudin
          ultricies justo a aenean aliquam. Mi ultrices quam viverra
          sollicitudin in bibendum enim consequat. Non vitae neque rhoncus
          curabitur. Donec magna volutpat sagittis mauris. Turpis congue blandit
          gravida diam non vulputate donec. Diam nunc erat id mauris mauris
          erat. Dolor eget tortor non eget egestas vulputate sit urna purus.
          Enim eu dui ultricies sollicitudin ultricies justo a aenean aliquam.
          Mi ultrices quam viverra sollicitudin in bibendum enim consequat. Non
          vitae neque rhoncus curabitur. Donec magna volutpat sagittis mauris.
          Turpis congue blandit gravida diam non vulputate donec.
        </p>
      </div>
    </div>
  );
})

export default OurTeam; // Exporting the component
