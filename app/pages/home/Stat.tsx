// import { motion, useMotionValue, useSpring } from "motion/react";
// import { useEffect, useState } from "react";
// import { asset, managed, net, transaction, who } from "../../assets";
import { who } from "../../assets";
import Container from "../Container/Container";
import LinkButton from "../Button/LinkButton";

// type AnimatedStatProps = {
//   target: number;
// };

// const AnimatedStat = ({ target }: AnimatedStatProps) => {
//   const count = useMotionValue(0);

//   const springValue = useSpring(count, { stiffness: 100, damping: 10 });
//   const [displayCount, setDisplayCount] = useState(0);

//   useEffect(() => {
//     const unsubscribe = springValue.on("change", (latest) => {
//       setDisplayCount(Math.round(latest));
//     });
//     return () => unsubscribe();
//   }, [springValue]);

//   return (
//     <motion.span
//       onViewportEnter={() => count.set(target)}
//       viewport={{ once: true }}
//       className="text-2xl font-semibold mb-1"
//     >
//       {displayCount.toLocaleString()}
//     </motion.span>
//   );
// };

const Stat = () => {
  // const stats = [
  //   { icon: managed, title: "Total managed assets", target: 242 },
  //   { icon: transaction, title: "Total Transactions", target: 867198 },
  //   { icon: asset, title: "Total number of assets", target: 128 },
  //   { icon: net, title: "Yearly net growth", target: 20985 },
  // ];

  return (
    <Container>
      <div className="grid lg:grid-cols-2 lg:gap-x-40">
        <div>
          {/* <p className="text-sm uppercase text-gray-600">About Shoresh Group</p> */}
          <h1 className="font-semibold lg:text-4xl text-3xl lg:mt-16 mb-6 lg:mb-10">
            Who we are
          </h1>
          <p>
            Shoresh Group is a family-owned real estate investment firm
            committed to building lasting wealth through strategic acquisitions
            and impactful partnerships. We specialize in both short-term flips
            and long-term investments, transforming distressed properties into
            valuable assets. Our expertise spans multifamily, commercial, and
            residential sectors, where we focus on sustainable growth and
            exceptional returns for our family and investors.
          </p>

          <div className="lg:mt-16 mt-8 mb-10">
            <LinkButton name="Learn More" path="/about-us" />
          </div>
        </div>

        <div className="flex lg:justify-center lg:items-center mt-10">
          {/* {stats.map((stat, index) => (
            <div
              className={`text-center ${
                index % 2 === 0 ? "" : "lg:mt-24 mt-10"
              }`}
              key={index}
            >
              <div className="flex justify-center mb-3">
                <img src={stat.icon} alt={stat.title} className="w-12" />
              </div>
              <AnimatedStat target={stat.target} />
              <p className="font-medium uppercase text-gray-700">
                {stat.title}
              </p>
            </div>
          ))} */}
          <div className="flex justify-center items-center">
            <img src={who} alt="Who we are" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stat;
