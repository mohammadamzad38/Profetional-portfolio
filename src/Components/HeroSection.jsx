import React from "react";
import { motion } from "framer-motion";
import { variants } from "./config.js";
import InteractiveButton from "./InteractiveButton.jsx";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>

      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-24 lg:max-w-none mx-w-2xl md:mx-w-3xl mx-auto">
          <section className="ml-0 md:ml-12">
            <header className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                Hi I'm {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFC107] to-[#ff18b8] ">
                Amzad
                </span>
              </h1>
            </header>
            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:mx-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              voluptates non? Ex dignissimos rerum ab? Esse nulla incidunt hic
              quas omnis excepturi, natus ex veritatis inventore officia
              assumenda quo ipsam.
            </p>
            <section className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
              <figure className="w-56">
                <InteractiveButton text="Hire me"/>
              </figure>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center px-4 py-2 bg-transparent text-[#FFC107] border border-[#FFC107] rounded-3xl"
              >
                <svg viewBox="0 0 24 24" width={40} height={40}>
                  <motion.path
                    d="M12 15.586l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05 12 15.586zM5 18h14v2H5v-2z"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth={0.5}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  ></motion.path>
                </svg>
                <span>Download resume</span>
              </motion.button>
            </section>
          </section>
        </article>
      </section>
    </section>
  );
};

export default HeroSection;
