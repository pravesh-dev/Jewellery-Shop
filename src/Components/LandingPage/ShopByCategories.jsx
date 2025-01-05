import React, { useEffect, useRef, useState } from "react";
import { projects } from "./ShopByCategoriesData";
import { Link } from "react-router-dom";

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
        className="project_card w-36 border border-yellow-600 flex flex-col sm:w-64 lg:w-64 xl:w-72"
      >
        <div className="w-full h-36 overflow-hidden sm:h-64">
            <img
              loading="lazy"
              src={project.image}
              className="w-full h-full object-cover"
              alt={project.name}
            />
        </div>
        <h2 className="text-black text-[0.7rem] mt-1 sm:text-[1.2rem] lg:text-[1.3rem]">
          {project.name}
        </h2>
        <h3 className="text-black text-[0.8rem] sm:text-[1.3rem] lg:text-[0.8rem]">
           $ {project.price}
        </h3>
      </div>
    ));
  };

  return (
    <section
      ref={componentRef}
      className="w-full flex flex-col items-center gap-4 relative mt-5"
    >
      <div className="flex items-center lg:mb-7">
        {["all", "necklace", "ring", "earrings", "statue", "chain"].map((tab) => (
          <button
            key={tab}
            className={`tab_buttons text-xs px-[0.6rem] py-1 tracking-wider capitalize rounded-full ${
              activeTab === tab
                ? "bg-secondary text-accent"
                : "text-dark"
            } sm:text-lg sm:px-6 lg:text-2xl lg:px-8 cursor_pointer`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full flex-wrap gap-2 flex relative justify-center bg-red-700 sm:gap-10 sm:justify-start xl:w-[65.5rem] xl:gap-20">
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
