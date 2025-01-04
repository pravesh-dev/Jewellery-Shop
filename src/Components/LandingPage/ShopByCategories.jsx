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
        className="project_card w-36 border border-red-600 sm:w-56 flex gap-1 flex-col justify-between sm:gap-2 sm:p-3 lg:w-64 xl:w-72 lg:hover:scale-[1.04] duration-300 lg:hover:bg-[#202020]"
      >
        <div className="w-full overflow-hidden">
          <a href={project.link} target="_blank" className="cursor_pointer">
            <img
              loading="lazy"
              src={project.image}
              className="hover:scale-110 duration-300"
              alt={project.name}
            />
          </a>
        </div>
        <h2 className="text-dark text-[0.7rem] sm:text-[1rem] lg:text-[1.3rem]">
          {project.name}
        </h2>
        <p className="text-black text-[1rem] text-justify sm:text-[0.65rem] lg:text-[0.8rem]">
           $ {project.price}
        </p>
      </div>
    ));
  };

  return (
    <section
      ref={componentRef}
      className="w-full flex flex-col items-center gap-8 relative mt-5"
    >
      <div className="flex items-center lg:mb-7">
        {["all", "necklace", "ring", "earrings", "statue", "chain"].map((tab) => (
          <button
            key={tab}
            className={`tab_buttons text-xs px-[0.6rem] py-1 tracking-wider capitalize rounded-full ${
              activeTab === tab
                ? "bg-secondary text-accent"
                : "text-dark"
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
