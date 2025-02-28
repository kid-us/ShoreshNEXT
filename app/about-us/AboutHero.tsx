"use client";

import { useState } from "react";
import useToggleStore from "../../store/store";

const AboutHero = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { isToggled } = useToggleStore();

  const short = [
    "Shoresh Group was founded with the belief that true success isn’t just about financial gains—it’s about creating lasting impact for future generations. The company began with a modest vision of building generational wealth through real estate investments that would empower families, strengthen communities, and leave a legacy for years to come. Over time, the vision expanded as the company grew, with a new generation dedicated to taking the legacy forward. They saw the opportunity to not only provide for their family but to share this model of success with others, opening the door for other investors and families to join in the journey of growth.",
  ];

  const long = [
    "Shoresh Group was founded by individuals who believed in creating a legacy for future generations. Initially established as Shoresh, the company began with a simple vision: to invest in real estate and build lasting value for the family. Living a modest life, they focused on investing their hard-earned resources into something that would provide for the next generation, ensuring they had the tools to succeed in an ever-changing world.",

    "Through strategic real estate investments, Shoresh grew the family’s financial stability, allowing them to reach new heights of success. As the company evolved and the next generation took the reins, the name changed to Shoresh Group to reflect its broader ambitions and growth. The values and mission established in the early years were embraced by those who continued to lead the company, using their skills and knowledge to propel Shoresh Group to new levels of success.",

    "As Shoresh Group continues to expand, it seeks to share this powerful model with others. By opening its doors to investors and families who share the same values, Shoresh Group is building a community of like-minded individuals committed to growth, success, and long-term prosperity.",
  ];
  return (
    <div
      className={`hero ${
        isToggled ? "lg:pt-32 pt-28" : "lg:pt-58 pt-52"
      } lg:pb-16 pb-10 bg`}
    >
      <div className="container mx-auto">
        <h1 className="lg:text-3xl text-2xl text-white">Our Story</h1>

        <div className="mt-5">
          {showMore
            ? long.map((l, index) => (
                <p key={index} className="text-lg text-white">
                  {l}
                </p>
              ))
            : short.map((s, index) => (
                <p key={index} className="text-lg text-white">
                  {s}
                </p>
              ))}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className={`${"bg-white text-black hover:text-gray-700"} mt-4 font-semibold px-12 py-3 text-xs rounded uppercase group`}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default AboutHero;
