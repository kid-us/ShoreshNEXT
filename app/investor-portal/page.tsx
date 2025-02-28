import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import why from "@/public/images/why.jpg";
import HowItWorks from "./HowItWorks";
import Invest from "./Invest";
import Hero from "./Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Investor Portal" },
};

const InvestorPortalPage = () => {
  const choose = [
    {
      id: 1,
      title: "Proven Success",
      desc: "A track record of profitable real estate investments.",
    },
    {
      id: 2,
      title: "Diversified Portfolio",
      desc: "Gain exposure to a mix of single-family, multifamily, and large-scale projects.",
    },
    {
      id: 3,
      title: "Transparency & Trust",
      desc: "We prioritize clear communication and investor confidence.",
    },
    {
      id: 4,
      title: "Passive Income Potential",
      desc: "Invest in projects without the hassle of day-to-day management.",
    },
  ];

  return (
    <>
      <Navbar bg />

      <Hero />

      <div className="container mx-auto my-14">
        <p className="text-sm uppercase text-gray-600">Why choose us</p>
        <div className="grid lg:grid-cols-2 mt-10 gap-x-10">
          <div className="">
            {choose.map((c) => (
              <div
                key={c.id}
                className="mt-3 border p-5 rounded-xl border-btn hover:bg-secondary hover:text-white group transition-all duration-300"
              >
                <div>
                  <h1 className="font-bold mb-2 text-xl uppercase">
                    {c.title}
                  </h1>
                  <p className="text-gray-700 group-hover:text-gray-200 text-sm">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative lg:mt-3 mt-5 flex justify-center items-center">
            <Image
              src={why}
              alt="Why Choose us"
              className="lg:absolute -top-42 rounded-2xl w-[80%] object-cover"
            />
          </div>
        </div>
      </div>

      <HowItWorks />

      <Invest />
    </>
  );
};

export default InvestorPortalPage;
