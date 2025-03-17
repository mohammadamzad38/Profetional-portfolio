import { useScroll, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowButton(latest > 0.05); // ✅ Fixed logic (0.05 = 5% scroll)
    });

    return () => unsubscribe(); // ✅ Cleanup function to avoid memory leaks
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#ffffff29] text-[#FFC107] p-3 rounded-full shadow-lg transition-colors z-[150] flex items-center"
          aria-label="scroll to top"
          style={{ width: "50px", height: "50px" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ transform: "rotate(-90deg)" }}
          >
            <svg width={50} height={50} viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#ffc107"
                strokeWidth={2}
              />
              <motion.path
                d="M18 2.0845 a 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="black"
                strokeWidth={2}
                strokeDasharray="100 100"
                strokeDashoffset={100 * (1 - scrollYProgress.get())} // ✅ Fixed stroke calculation
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </motion.div>
          <span className="text-6xl relative z-[150]">↑</span>
        </button>
      )}
    </>
  );
};

export default BackToTop;
