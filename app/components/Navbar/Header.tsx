import { motion } from "motion/react";
import Link from "next/link";

interface Props {
  onClose: () => void;
}

const Header = ({ onClose }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`bg2 border-b border-gray-700 lg:px-0 px-3`}
    >
      <div className="container mx-auto lg:py-5 py-4">
        <div className="lg:flex justify-between">
          <p className="text-white font-[500] font-mono uppercase lg:text-md text-sm font-logo">
            Building Generational Wealth Through Real Estate Investment
          </p>

          <div className="flex lg:justify-end justify-between gap-x-8 lg:mt-0 mt-1">
            <div className="text-amber-300">
              <Link
                href={"/assets"}
                className="font-semibold lg:text-md text-sm group"
              >
                View Our Assets
                <span className="inline-block transition-transform duration-300 group-hover:rotate-45 ms-3">
                  <i className="bi bi-arrow-up-right text-xs"></i>
                </span>
              </Link>
            </div>
            <p className="lg:inline hidden border-r border-white"></p>
            <button onClick={onClose} className="bi-x-lg text-red-200"></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
