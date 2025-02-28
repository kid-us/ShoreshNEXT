"use client";

import { motion } from "motion/react";
import Container from "../components/Container";
import LinkButton from "../components/Button/LinkButton";

const Invest = () => {
  return (
    <Container>
      <div className="bg rounded-2xl lg:p-10 px-4 py-8 ">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-semibold lg:text-3xl text-2xl mb-8 text-white"
        >
          Invest with Shoresh Group: Passive Investing, GP-Level Returns
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 tex text-sm text-zinc-200"
        >
          Invest passively like an LP, earn like a GP.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 tex text-sm text-zinc-200"
        >
          Traditional multifamily real estate funds allow LPs (limited partners)
          to invest passively while GPs (general partners) manage the deal and
          take a larger share of the returns.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-2 tex text-sm text-zinc-200"
        >
          Shoresh Group offers a unique opportunity to invest as a Co-GP
          alongside our team, unlocking the benefits of multifamily real estate
          ownership while keeping your investment passive.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-5 uppercase text-white font-semibold"
        >
          Interested? Get in touch to invest in our fund.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-sm mt-2 text-zinc-200"
        >
          Start with some basic information and a no-obligations discovery call.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10"
        >
          <LinkButton
            name="Invest With Us"
            path="/contact"
            style="bg-[white] hover:text-gray-700"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Invest;
