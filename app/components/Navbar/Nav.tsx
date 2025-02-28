import { useState } from "react";
import { assets } from "../../../services/nav";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Menu from "./Menu";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  bg?: boolean;
  onMenuOpen?: () => void;
}

const Nav = ({ bg, onMenuOpen }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>(
    "animate__fadeInLeft"
  );
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 700) {
      setHidden(true);
    } else if (previous && latest < previous && latest < 700) {
      setHidden(false);
    }
  });

  // Menu Animation
  const handleCloseMenu = () => {
    setAnimationClass("animate__fadeOutLeft");
    setTimeout(() => {
      setMenu(false);
      setAnimationClass("animate__fadeInLeft");
    }, 500);
  };

  return (
    <AnimatePresence>
      <div
        className={`flex justify-between ${
          bg ? "text-black" : hidden ? "text-black" : "text-white"
        }`}
      >
        <div className="flex gap-x-20">
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="/"
            className="text-2xl uppercase flex lg:gap-x-5 gap-x-2"
          >
            <Image src={logo} alt="Logo" className="w-13" />

            <div className="leading-6 w-full">
              <p className="items-center flex logo-font logo-font uppercase underline underline-offset-4 decoration-amber-400 decoration-1">
                Shoresh Group
              </p>
              <p
                className={`items-center flex logo-font logo-font uppercase text-xl text-amber-400 justify-center`}
              >
                Real Estate
              </p>
            </div>
          </motion.a>
          <div className="lg:flex gap-x-12 hidden">
            {/* About */}
            <motion.a
              whileHover={{
                y: -1,
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              href="/about-us"
              className={`relative transition-colors font-medium uppercase text-sm mt-3`}
            >
              About us
            </motion.a>

            {/* Assets */}
            <div className="mt-2">
              <motion.button
                whileHover={{
                  y: -1,
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => (hovered ? setHovered(false) : setHovered(true))}
                className="relative transition-colors font-medium uppercase text-sm"
              >
                Assets{" "}
                <span
                  className={`${
                    hovered ? "bi-chevron-up" : "bi-chevron-down"
                  } text-sm ms-3`}
                ></span>
                {/* Modal shown when hovered */}
                {hovered && (
                  <div className="absolute top-10 w-60 border border-gray-300 rounded bg-white shadow-lg py-3 ps-5 text-start">
                    {assets.map((asset) => (
                      <Link
                        key={asset.id}
                        className="block hover:ms-1 transition-all mb-2 text-sm py-1 text-black"
                        href={asset.path}
                      >
                        <span className={`${asset.icon} me-2`}></span>
                        {asset.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.button>
            </div>

            {/* Contact */}
            <motion.a
              whileHover={{
                y: -1,
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              href="/investor-portal"
              className={`relative transition-colors font-medium uppercase text-sm mt-3`}
            >
              Investor Portal
            </motion.a>

            {/* Contact */}
            <motion.a
              whileHover={{
                y: -1,
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              href="/contact"
              className={`relative transition-colors font-medium uppercase text-sm mt-3`}
            >
              contact us
            </motion.a>
          </div>
        </div>

        {/* Large device Links */}
        <div className="lg:flex hidden gap-x-14">
          {/* Login */}
          <div>
            <motion.a
              href="/"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg flex items-center font-semibold uppercase text-white transition-all duration-200 shadow-[3px_3px_0px_#000] h-12 px-14 hover:shadow-none rounded"
            >
              Investor&apos;s Login
            </motion.a>
          </div>
        </div>

        {/* Small device */}
        <div className="flex lg:hidden gap-x-5">
          <button
            onClick={() => {
              if (onMenuOpen) onMenuOpen();
              setMenu(true);
            }}
            className="bi-list text-2xl"
          ></button>
        </div>
      </div>

      {/* Menu */}
      {menu && (
        <Menu
          onClose={() => handleCloseMenu()}
          menuAnimation={animationClass}
        />
      )}
    </AnimatePresence>
  );
};

export default Nav;
