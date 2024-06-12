"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Svg1 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg2 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg3 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="7.6" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg4 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="11.4" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg5 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="11.4" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg6 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="11.4" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg7 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="3.8" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg8 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="3.8" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg9 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="3.8" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

const Svg10 = ({ size = 19 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="3.8" width="3.8" height="3.8" fill="currentColor" />
  </motion.svg>
);

export const EndexLoadingAnimation = ({ size = 20, loadingSpeed = 200 }) => {
  const svgs = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % svgs.length);
    }, loadingSpeed);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const CurrentSvg = svgs[index];

  return <CurrentSvg size={size} />;
};
