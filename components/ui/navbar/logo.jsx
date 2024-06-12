"use client";

import React, { useEffect, useState } from "react";

const Svg1 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
  </svg>
);

const Svg2 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
  </svg>
);

const Svg3 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="7.6" width="3.8" height="3.8" fill="currentColor" />
  </svg>
);

const Svg4 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="7.6" width="3.8" height="3.8" fill="currentColor" />
    <rect x="7.60001" y="11.4" width="3.8" height="3.8" fill="currentColor" />
  </svg>
);

const Svg5 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="3.79999" y="11.4" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="11.4" width="3.8" height="3.8" fill="currentColor" />
  </svg>
);

const Svg6 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3.79999" width="3.8" height="3.8" fill="currentColor" />
    <rect x="11.4" y="15.2" width="3.8" height="3.8" fill="currentColor" />
    <rect y="3.8" width="3.8" height="3.8" fill="currentColor" />
    <rect x="15.2" y="11.4" width="3.8" height="3.8" fill="currentColor" />
  </svg>
);

const Svg7 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
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
  </svg>
);

const Svg8 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
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
  </svg>
);

const Svg9 = ({ size = 19 }) => (
  <svg
    style={{ width: "100%", paddingBottom: "100%" }}
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
  </svg>
);

export const Svg10 = ({ size = 19 }) => (
  <svg
    viewBox="0 0 19 19"
    style={{ width: "100%", paddingBottom: "100%" }}
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
  </svg>
);

export const EndexLogoAnimated = ({ loadingSpeed = 200 }) => {
  const svgs = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered && !isFinished) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % svgs.length);
        if (index === svgs.length - 1) {
          setIsFinished(true);
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(false);
          }, 3000);
        }
      }, loadingSpeed);
    } else if (index !== svgs.length - 1) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % svgs.length);
        if (index === svgs.length - 2) {
          clearInterval(interval);
        }
      }, loadingSpeed);
    } else {
      setIndex(svgs.length - 1);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isHovered, index, isFinished]);

  const CurrentSvg = svgs[index];

  return (
    <div
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <CurrentSvg />
    </div>
  );
};

export const EndexLogo = () => {
  return <Svg10 />;
};
