"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import useToggleStore from "../store/store";
import Header from "./components/Navbar/Header";
import Nav from "./components/Navbar/Nav";

interface Props {
  bg?: boolean;
}

const Navbar = ({ bg }: Props) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [hideAlways, setHideAlways] = useState<boolean>(false);

  const { toggle } = useToggleStore();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // Navbar
    if (previous && latest > previous && latest > 900) {
      setHidden(true);
    } else if (previous && latest < previous && latest < 700) {
      setHidden(false);
    }
  });

  // Header Scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!hideAlways) {
      const previous = scrollY.getPrevious();

      if (previous !== undefined) {
        if (latest > previous) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
      }
    }
  });

  return (
    <>
      <header className={`fixed z-20 w-full`}>
        {/* Header */}
        {!hideAlways && !hideHeader && (
          <Header
            onClose={() => {
              toggle();
              setHideAlways(true);
            }}
          />
        )}

        {/*Navbar */}
        <div
          className={`w-full  ${
            bg
              ? "bg-white border-b border-gray-300"
              : hidden
              ? "bg-white border-b border-gray-300"
              : "nav border-b border-gray-600"
          } py-3`}
        >
          <div className="container mx-auto lg:px-0 px-3">
            <Nav
              bg={bg ? true : false}
              onMenuOpen={() => setHideHeader(true)}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
