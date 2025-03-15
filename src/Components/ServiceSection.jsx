import React from "react";
import CustomTitle from "./CustomTitle";
import { motion } from "framer-motion";
import { Services } from "./config";

const ServiceSection = () => {
  return (
    <div className="relative mt-40" id="services">
      <CustomTitle title="What I offer ?" />

      <section className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-16 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>

        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>

        {Services.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full h-[350px] p-5 grid place-items-center overflow-hidden rounded-[20px] shadow-lg"
          >
            <section className="absolute w-[95%] h-[95%] bg-black rounded-[20px] z-10 text-center text-white">
              <header className="border border-[#FFC107] bg-[#ffffff29] rounded-xl p-3 mb-6 min-h-full min-w-full flex flex-col gap-6 justify-center items-center">
                <section className="mt-4 space-y-4 px-2">
                  <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FFC107] to-[#ff18b8]">
                    {item.title}
                  </h2>
                  <p className="md:text-lg text-white opacity-80">
                    {item.description}
                  </p>
                </section>
              </header>
            </section>
            <section className="absolute w-full h-[105%] bg-gradient-to-br from-[#FFC107] to-[#ff18b8] animate-spin-slow opacity-60"></section>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default ServiceSection;
