import React from "react";
import CustomTitle from "./CustomTitle";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <div className="relative mt-40" id="services">
      <CustomTitle title="What I offer ?" />

      <section className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-16 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>

        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      </section>
    </div>
  );
};

export default ServiceSection;
