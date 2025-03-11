import React from "react";
import { motion } from "framer-motion";
import { socialIcon } from "./config";

const SocialButton = () => {
  const animationDuration = 1.5;
  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
        strokeOpacity: {
          delay: animationDuration,
        },
        fillOpacity: {
          delay: animationDuration,
        },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.3 },
      },
    },
  };
  return (
    <div className="md:flex flex-col items-center justify-center border border-[#FFC107] bg-[#ffffff29] rounded-3xl space-y-11 p-4 max-h-[506px] md:max-h-[386px] hidden">
      {socialIcon.map((icon) => (
        <button key={icon.id}>
          <svg viewBox={icon.viewBox} width={35} height={40} className="">
            <motion.path
              d={icon.path}
              fill="#FFC107"
              stroke="#FFC107"
              strokeWidth={1}
              transform="scale(1.5, 1.5)"
              variants={variants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            ></motion.path>
          </svg>
        </button>
      ))}
    </div>
  );
};

export default SocialButton;
