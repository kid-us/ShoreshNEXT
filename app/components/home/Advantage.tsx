"use client";

import Container from "@/app/components/Container";
import { motion } from "motion/react";
import { useState } from "react";

interface Advantage {
  id: number;
  title: string;
  desc: string;
}

const Advantage = () => {
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  const advantages: Advantage[] = [
    {
      id: 1,
      title: "Heritage",
      desc: "Emphasizing long-term commitment and family values.",
    },
    {
      id: 2,
      title: "Expertise",
      desc: "Specialized knowledge in real estate sectors.",
    },
    {
      id: 3,
      title: "Network",
      desc: "Access to unique opportunities and influential connections.",
    },
    {
      id: 4,
      title: "Integrity",
      desc: "Building lasting, trust-based partnerships.",
    },
  ];
  return (
    <div className="flex justify-center items-center bg4">
      <Container>
        <div>
          <h1 className="lg:text-5xl text-4xl text-white mb-5 text-center">
            Shoresh Group Partners Advantage
          </h1>
          <div className="flex justify-center">
            <div className="lg:w-[50%] my-10">
              <p className="text-center text-gray-200 text-xl">
                &quot; Success is built on a foundation of trust, expertise, and
                vision.
              </p>
              <p className="text-center text-gray-200 text-xl">
                At Shoresh Group, we honor our heritage while creating new
                opportunities for the future.&quot;
              </p>
            </div>
          </div>

          <div className="lg:flex lg:justify-center grid md:grid-cols-2 lg:gap-10">
            {advantages.map((a, index) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.01, duration: 0.5 },
                }}
                className="relative p-5 cursor-pointer hover:text-gray-500"
                onMouseEnter={() => setHoveredItem(a.id)}
                onMouseLeave={() => setHoveredItem(0)}
              >
                <div>
                  <p className="font-medium text-gray-300">0{a.id}</p>
                  <p className="font-medium lg:text-4xl text-3xl text-white hover:text-gray-400">
                    {a.title}
                  </p>
                </div>

                {hoveredItem === a.id && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="lg:absolute top-24 lg:w-96 bg z-20 p-7 rounded-lg border border-gray-600 text-white text-sm"
                  >
                    {a.desc}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Advantage;
