"use client";

import { useState } from "react";
import { motion } from "motion/react";

export interface Mission {
  id: number;
  name: string;
}

const Mission = () => {
  const mission: Mission[] = [
    {
      id: 1,
      name: "Long-Term Value Creation: Our focus is on investments that create lasting wealth. By aligning with family values and long-term growth, we help ensure that every investment continues to appreciate and benefit future generations.",
    },
    {
      id: 2,
      name: "Expertise & Insight: With years of experience in real estate, we leverage market research, data-driven insights, and an expert team to identify high-potential investment opportunities that maximize returns for our partners",
    },
    {
      id: 3,
      name: "Community Impact: We believe in enhancing the communities where we invest. Through sustainable, thoughtful renovations and developments, we improve properties while positively contributing to the neighborhoods and families we serve.",
    },
  ];

  const [onHover, setOnHover] = useState<number>(0);

  return (
    <div className="overflow-hidden lg:mb-10">
      <div className="relative lg:h-[85vh] h-auto w-full">
        <div className="absolute lg:-top-20 -left-96 border border-btn w-[3000px] h-full -z-20 -rotate-2 overflow-hidden"></div>
        <div className="container mx-auto">
          <div className="lg:grid grid-cols-3 lg:my-50 mb-16 gap-x-8">
            <div className="flex items-center">
              <div className="lg:mt-20 mt-16">
                <h1 className="lg:text-3xl text-2xl">Our</h1>
                <h1 className="lg:text-3xl text-2xl text-btn">Mission</h1>
                <p className="mt-5 lg:text-lg text-black">
                  At Shoresh Group, our mission is simple: Building generational
                  wealth for families and investors through strategic real
                  estate investments. We are committed to creating lasting value
                  by identifying opportunities with high growth potential,
                  transforming properties, and delivering exceptional returns.
                  Through a foundation of integrity, transparency, and
                  innovation, we empower our partners to achieve financial
                  success while making a positive impact on the
                  communities we serve.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid lg:grid-cols-4 gap-x-10 gap-y-6 lg:mx-10 lg:mt-0 mt-8">
              {mission.map((m, index) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.05 * index, duration: 0.5 },
                  }}
                  onMouseEnter={() => setOnHover(m.id)}
                  onMouseLeave={() => setOnHover(0)}
                  className={`flex justify-center items-center col-span-4 border border-black/20 rounded p-5 font-medium  lg:shadow-[3px_4px_3px_0px_black] shadow-[3px_4px_3px_0px_black] ${
                    onHover === m.id ? "bg-white" : "bg"
                  } text-white hover:bg-white hover:text-black hover:border-amber-300 transition-colors duration-500 hover:shadow-none`}
                >
                  <p className={``}>{m.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
