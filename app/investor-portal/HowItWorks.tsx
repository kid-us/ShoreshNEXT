"use client";

import buy from "@/public/images/buy.png";
import sale from "@/public/images/sale.png";
import invest from "@/public/images/investment.png";
import howItWork from "@/public/images/how_it_work.jpg";
interface HowItWork {
  id: number;
  title: string;
  info: string;
  icon: StaticImageData;
}

import React from "react";
import Container from "../components/Container";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

const HowItWorks = () => {
  const steps: HowItWork[] = [
    {
      id: 1,
      title: "We buy the properties",
      icon: buy,
      info: "Our team ensures a smooth transaction with no hidden fees or lengthy processes. Whether you're selling for financial reasons or a fresh start, we provide a seamless experience. as simple at that.",
    },
    {
      id: 2,
      title: "You Invest and Earn",
      icon: invest,
      info: "We offer investment opportunities with passive income through regular distributions. Our strategic approach ensures steady returns with minimal risk. Partner with us for a secure and profitable experience.",
    },
    {
      id: 3,
      title: "We sell and share Profit",
      icon: sale,
      info: "We sell properties and share the profit from the sale with our investors. Our transparent process ensures fair returns and a seamless experience. Partner with us for a rewarding investment opportunity.",
    },
  ];

  return (
    <Container>
      <div className="lg:hidden block">
        <h1 className="lg:text-3xl text-2xl lg:mb-5 mb-3">How it works</h1>
        <p className="text-gray-500 lg:mb-10 mb-10">
          Seamless Property Transactions with Transparent Profit Sharing //{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-7 md:grid-cols-1 gap-x-12 h-full mt-40">
        <div className="lg:col-span-3 flex items-center h-full">
          <Image
            src={howItWork}
            alt="How it work"
            className="lg:h-[80dvh] h-80 w-full object-cover object-right rounded-tr-[180px] rounded-xl"
          />
        </div>
        <div className="lg:col-span-4 lg:mt-0 mt-10">
          <div className="lg:block hidden">
            <h1 className="lg:text-3xl text-2xl lg:mb-5 mb-3">How it works</h1>
            <p className="text-gray-500 lg:mb-10 mb-10">
              Seamless Property Transactions with Transparent Profit Sharing
            </p>
          </div>

          {steps.map((s) => (
            <div key={s.id} className="grid grid-cols-1 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="col-span-7"
              >
                <Image src={s.icon} alt={s.title} className="w-11 mb-5" />
                <p className="font-bold text-xl text-secondary">{s.title}</p>

                <p className="text-sm mt-4">{s.info}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
