"use client";

import { useSearchParams } from "next/navigation";
import Container from "../components/Container";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { currentAssets, soldAssets } from "../services/assets";
import useToggleStore from "../store/store";
import Modal from "../components/Modal";
import Navbar from "../Navbar";
import Image from "next/image";

const categories = ["Current", "For Sale", "Sold"];
const AllAssets = () => {
  const searchParams = useSearchParams();

  const { isToggled } = useToggleStore();

  const [modal, setModal] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("Current");

  const handleAssetClicked = (name: string) => {
    setModal(name);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const queryParam = searchParams.get("asset");

    if (queryParam === "our-assets") {
      setActiveCategory("Current");
    } else if (queryParam === "for-sale") {
      setActiveCategory("For Sale");
    } else if (queryParam === "sold") {
      setActiveCategory("Sold");
    } else {
      setActiveCategory("Current");
    }
  }, [searchParams]);

  const [currentPage, setCurrentPage] = useState(1);

  // Filter assets based on active category
  const assets =
    activeCategory === "Sold"
      ? soldAssets
      : activeCategory === "Current"
      ? currentAssets
      : [];

  const filteredAssets = assets.filter(
    (asset) => asset.category === activeCategory
  );

  const ITEMS_PER_PAGE = 9;

  // Calculate total pages
  const totalPages = Math.ceil(filteredAssets.length / ITEMS_PER_PAGE);

  // Get items for the current page
  const viewingAssets = filteredAssets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {/* Modal */}
      {modal && (
        <Modal
          category={activeCategory}
          name={modal}
          onClose={() => {
            setModal(null);
            document.body.style.overflow = "auto";
          }}
        />
      )}

      <Navbar bg />

      <div className={`${isToggled ? "lg:pt-1 pt-10" : "lg:pt-20 pt-40"}`}>
        <Container>
          <div className="lg:mb-8 mb-3">
            <h1 className="lg:text-3xl text-2xl">Our Properties</h1>
            <p className="mt-3 lg:w-[60%]">
              Discover our premium real estate assets, carefully selected for
              long-term growth, stability, and exceptional returns.
            </p>
            <p className="text-gray-500 mb-5 mt-10">Categories</p>
            <motion.div
              layout
              className="lg:flex grid grid-cols-2 gap-y-3 lg:gap-x-12 gap-x-4"
            >
              {categories.map((c) => (
                <motion.button
                  layout
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`font-normal ${
                    activeCategory === c
                      ? "bg-secondary text-white lg:px-10 shadow-[2px_2px_3px_0px_black] text-sm py-3"
                      : "text-gray-600 border border-btn lg:py-2 py-3 lg:px-10"
                  } `}
                >
                  {c} Assets
                </motion.button>
              ))}
            </motion.div>

            <div className="lg:my-12 my-8">
              {/* Asset Grid */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:gap-y-7 gap-y-5 mb-6">
                {viewingAssets.length > 0 ? (
                  viewingAssets.map((asset) => (
                    <div
                      key={asset.id}
                      onClick={() => handleAssetClicked(asset.name)}
                      className="rounded-2xl p-2 border border-btn overflow-hidden hover:scale-[0.99] transition-all duration-300 shadow cursor-pointer"
                    >
                      <Image
                        src={asset.img}
                        alt={"asset" + asset.id}
                        className="lg:h-72 md:h-72 h-60 w-full rounded-xl object-cover object-bottom"
                      />
                      <div className="px-4 py-5">
                        <p className="font-semibold text-xl mb-2">
                          {asset.name}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-gray-500 text-sm font-semibold">
                            <span className="bi-geo-alt-fill text-secondary me-2"></span>
                            {asset.location}
                          </p>
                          <p className="text-gray-500 text-sm font-semibold">
                            <span className="bi-calendar-check-fill me-2 text-secondary"></span>
                            Purchased {asset.purchased}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="lg:col-span-2 p-2 w-full text-center bg-btn font-semibold text-white mb-60">
                    No assets available right now. Check back later for updates!
                  </p>
                )}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border rounded ${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed bg-gray-600"
                        : "bg-secondary text-white"
                    } bi-chevron-left`}
                  ></button>

                  <span className="text-sm font-semibold text-gray-600">
                    {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 border rounded ${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "bg-secondary text-white"
                    } bi-chevron-right`}
                  ></button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllAssets;
