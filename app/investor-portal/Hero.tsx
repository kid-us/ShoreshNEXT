"use client";

import useToggleStore from "../store/store";

const Hero = () => {
  const { isToggled } = useToggleStore();

  return (
    <>
      <div className={`${isToggled ? "pt-28" : "pt-52"} pb-16 bg`}>
        <div className="container mx-auto">
          <p className="text-sm uppercase text-gray-200">Invest With US</p>

          <p className="lg:text-xl text-lg mt-6 lg:w-[80%] text-white font-medium">
            Unlock Exclusive Real Estate Opportunities Join Shoresh Group’s
            investor network and gain access to exclusive real estate investment
            opportunities. Whether you're looking for short-term fix-and-flip
            projects or long-term, cash-flowing properties, our private equity
            fund allows you to invest alongside an experienced team with a
            proven track record.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
