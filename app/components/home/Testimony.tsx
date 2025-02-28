"use client";

import { motion } from "motion/react";
import we1 from "@/public/images/we/1.jpg";
import we2 from "@/public/images/we/2.jpg";
import we3 from "@/public/images/we/3.jpg";
import we4 from "@/public/images/we/4.jpg";
import we5 from "@/public/images/we/5.jpg";
import we6 from "@/public/images/we/6.jpg";

import "./slider.css";
import Image, { StaticImageData } from "next/image";

interface Testimony {
  id: number;
  comment: string;
  img: StaticImageData;
  name: string;
  title: string;
}

const Testimony = () => {
  const testimonies: Testimony[] = [
    {
      id: 1,
      comment:
        "Investing with Shoresh Group has been one of the best financial decisions I’ve made. Their deep industry knowledge and strategic approach to real estate assets have consistently delivered strong returns. I appreciate their transparency and commitment to investor success.",
      img: we1,
      name: "Marta",
      title: "Private Investor",
    },
    {
      id: 2,
      comment:
        "Shoresh Group’s expertise in identifying high-potential properties is unmatched. They manage every aspect with precision, ensuring not only financial growth but also long-term sustainability. I highly recommend them to anyone looking for a trustworthy investment partner.",
      img: we3,
      name: "Michael E. ",
      title: "Private Investor",
    },
    {
      id: 3,
      comment:
        "Shoresh Group has built an impressive portfolio that speaks for itself. Their data-driven approach and market foresight have given me confidence in every investment. Their team is professional, responsive, and truly dedicated to maximizing value for investors.",
      img: we2,
      name: "Sarah L, ",
      title: "Real Estate Partner",
    },
    {
      id: 4,
      comment:
        "Shoresh Group has exceeded my expectations in every way. Their ability to identify lucrative real estate opportunities while maintaining a risk-conscious approach is truly commendable. I feel confident knowing my investments are in capable hands.",
      img: we4,
      name: "Emilt T.",
      title: "High-Net-Worth Investor",
    },
    {
      id: 5,
      comment:
        "What sets Shoresh Group apart is their commitment to both financial success and ethical investment practices. Their team is always transparent, keeping me informed every step of the way. I’ve seen consistent growth and look forward to future opportunities with them.",
      img: we5,
      name: "James P.",
      title: "Long-Term Investor",
    },
    {
      id: 6,
      comment:
        "Investing in real estate can be complex, but Shoresh Group makes it simple and rewarding. Their deep market insights and strong management strategies ensure optimal returns. I highly recommend them to serious investors.",
      img: we6,
      name: "Robert D.",
      title: "Commercial Real Estate Investor",
    },
  ];

  return (
    <div className="lg:my-28 mt-20 mb-20">
      <h1 className="lg:text-3xl text-2xl mb-4 text-center">
        Hear What Our Investors Are Saying
      </h1>
      <p className="text-center mb-20 text-gray-500">
        Good words from our investors
      </p>

      <div
        className="slider"
        style={
          {
            "--quantity": testimonies.length,
          } as React.CSSProperties
        }
      >
        <div className="slide-track-right">
          {[...testimonies, ...testimonies].map((t, index) => (
            <motion.div
              key={index}
              layout
              className="slide border border-amber-400 hover:border-2 rounded-xl p-5 h-60"
              style={{ "--position": index } as React.CSSProperties}
              whileHover={{
                scale: 0.97,
                rotate: 0.5,
                transition: { duration: 0.5 },
              }}
            >
              <div className="flex gap-x-3">
                <Image
                  src={t.img}
                  alt="person"
                  className="h-16 rounded-full object-cover object-center"
                  style={{ width: 66 }}
                />
                <div className="flex items-center leading-0 mt-4">
                  <div>
                    <p className="font-semibold mb-2 block">{t.name}</p>
                    <p className="text-sm mb-2 text-gray-600 pt-1">{t.title}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-5 italic">{t.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="slider"
        style={
          {
            "--quantity": testimonies.length,
          } as React.CSSProperties
        }
      >
        <div className="slide-track-left">
          {[...testimonies, ...testimonies].map((t, index) => (
            <motion.div
              key={index}
              layout
              className="slide border border-amber-400 hover:border-2 rounded-xl p-5 h-60"
              style={{ "--position": index } as React.CSSProperties}
              whileHover={{
                scale: 0.97,
                rotate: 0.5,
                transition: { duration: 0.5 },
              }}
            >
              <div className="flex gap-x-3">
                <Image
                  src={t.img}
                  alt="person"
                  className="h-16 rounded-full object-cover object-center"
                  style={{ width: 66 }}
                />
                <div className="flex items-center leading-0 mt-4">
                  <div>
                    <p className="font-semibold mb-2 block">{t.name}</p>
                    <p className="text-sm mb-2 text-gray-600 pt-1">{t.title}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-5 italic">{t.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
