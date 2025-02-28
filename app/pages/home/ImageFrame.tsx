"use client";

import React, { useState, useEffect } from "react";
import useToggleStore from "../../store/store";

type VideoFromFramesProps = {
  frames: string[];
  fps?: number;
};

const ImageFromFrames: React.FC<VideoFromFramesProps> = ({
  frames,
  fps = 24,
}) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const { isToggled } = useToggleStore();

  useEffect(() => {
    // Calculate the interval duration in milliseconds
    const intervalDuration = 1000 / fps;

    // Set up an interval to update the frame index at the desired fps
    const intervalId = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, intervalDuration);

    // Clear the interval when the component unmounts or fps/frames change
    return () => clearInterval(intervalId);
  }, [frames, fps]);

  return (
    <div
      style={{
        overflow: "hidden",
        // position: "relative",
        // width: "100%",
        // height: "100%",
      }}
    >
      {frames.map((frame, index) => (
        <img
          key={index}
          src={frame}
          alt={`Frame ${index}`}
          style={{
            position: "absolute",
            top: isToggled ? 0 : "4em",
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.8s ease-in-out, transform 1s ease-in-out",
            opacity: index === currentFrameIndex ? 1 : 0, // Fading effect
            transform: index === currentFrameIndex ? "scale(1)" : "scale(1.1)", // Zoom effect
            // zIndex: index === currentFrameIndex ? 1 : 0,
            zIndex: -2,
            objectPosition: "bottom",
          }}
          className="hero-img"
        />
      ))}
    </div>
    // <div style={{ overflow: "hidden" }}>
    //  <img
    //   src={frames[currentFrameIndex]}
    //   alt={`Frame ${currentFrameIndex}`}
    //   style={{
    //     position: "absolute",
    //     top: isToggled ? 0 : "4em",
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     objectFit: "cover",
    //     zIndex: -2,
    //     objectPosition: "bottom",
    //   }}
    //   className="hero-img"
    // />

    // {/* <motion.img
    //   key={currentFrameIndex}
    //   src={frames[currentFrameIndex]}
    //   alt={`Frame ${currentFrameIndex}`}
    //   initial={{ x: "100%", opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   exit={{ x: "-100%", opacity: 0 }}
    //   transition={{ duration: 0.5, ease: "easeInOut" }}
    //   style={{
    //     position: "absolute",
    //     top: isToggled ? 0 : "4em",
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     objectFit: "cover",
    //     zIndex: -2,
    //     objectPosition: "bottom",
    //   }}
    //   className="hero-img"
    // /> */}
    // </div>
  );
};

export default ImageFromFrames;
