import React, { useEffect, useRef, useState } from "react";
import { projects } from "./ShopByCategoriesData";

function ShopByCategories() {
  const componentRef = useRef(null);

  const [activeTab, setActiveTab] = useState("all");
  const [viewAll, setViewAll] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const filteredProjects = projects.filter(
      (project) => activeTab === "all" || project.type === activeTab
    );
    setViewAll(filteredProjects.length > 6);
  }, [activeTab]);

  const renderProjects = (type) => {
    const filteredProjects = projects.filter(
      (project) => type === "all" || project.type === type
    );
    const displayedProjects = !viewAll
      ? filteredProjects
      : filteredProjects.slice(0, 6);

    return displayedProjects.map((project, index) => (
      <div
        key={index}
        className="project_card w-36 bg-[#353535] p-[0.33rem] rounded-md sm:w-56 flex gap-1 flex-col justify-between sm:gap-2 sm:p-3 lg:w-64 xl:w-72 lg:hover:scale-[1.04] duration-300 lg:hover:bg-[#202020]"
      >
        <h2 className="text-white text-[0.7rem] font-semibold sm:text-[1rem] lg:text-[1.3rem]">
          {project.name}
        </h2>
        <p className="text-neutral-500 text-[0.5rem] text-justify sm:text-[0.65rem] lg:text-[0.8rem]">
          {project.para}
        </p>
        <div className="w-full flex flex-wrap gap-x-2 gap-y-1 sm:gap-2">
          {project.skills.map((skill, idx) => {
            return (
              <span
                key={idx}
                className="px-2 py-[0.11rem] rounded-full bg-[#fd563c60] text-primary font-bold text-[0.6rem] sm:text-[0.7rem] sm:px-3 lg:text-[0.85rem]"
              >
                {skill}
              </span>
            );
          })}
        </div>
        <a
          href={project.link}
          target="_blank"
          className="text-white text-[0.6rem] flex items-center gap-1 sm:text-[0.9rem] lg:text-[1.2rem] hover:gap-4 duration-300 cursor_pointer"
        >
          Visit Website{" "}
          <span className="text-primary text-xl sm:text-[1.5rem] lg:text-[2.25rem] lg:-mt-1">
            →
          </span>
        </a>
        <div className="w-full overflow-hidden rounded-lg">
          <a href={project.link} target="_blank" className="cursor_pointer">
            <img
              loading="lazy"
              src={project.image}
              className="rounded-lg hover:scale-110 duration-300"
              alt={project.name}
            />
          </a>
        </div>
      </div>
    ));
  };

  return (
    <section
      ref={componentRef}
      className="w-full min-h-[100svh] flex flex-col items-center gap-8 relative p-16 lg:p-28"
    >
      <div className="flex gap-3 items-center lg:mb-7">
        {["all", "frontend", "backend"].map((tab) => (
          <button
            key={tab}
            className={`tab_buttons text-sm font-semibold px-3 py-1 capitalize rounded-lg ${
              activeTab === tab
                ? "bg-[#646464] text-primary"
                : "text-neutral-300/70"
            } lg:text-lg cursor_pointer`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-80 flex-wrap gap-3 px-2 flex relative z-30 sm:w-[31.5rem] sm:gap-8 lg:w-[56.5rem] lg:gap-14 xl:w-[65.5rem] xl:gap-20">
        {renderProjects(activeTab)}
      </div>
      <button
        className={`text-primary border border-primary bg-primary/5 px-7 py-1 text-sm rounded-[1rem] ${
          viewAll ? "block" : "hidden"
        }`}
      >
        View All
      </button>
    </section>
  );
}

export default ShopByCategories;
