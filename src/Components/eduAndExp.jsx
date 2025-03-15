import React from "react";
import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { education, experience } from "./config";

const SectionItem = ({ title, subtitle, year, details, icon }) => (
  <motion.article className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br after:from-[#ff18b8] after:to-[#FFC107] after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] mt-10"
  initial={{opacity:0, y:50}}
  whileInView={{opacity:1, y:0}}
  transition={{duration:0.5}}
  viewport={{once:false}}
  >
    <section className="bg-black z-20 text-white rounded-xl">
      <section className="border border-[#FFC107] bg-[#ffffff29] rounded-xl p-3 flex items-center">
        <img src={icon} alt="icon" width={64} height={64} />
        <div className="ml-10">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
          <p className="text-sm italic">{year}</p>
          {details && <p>{details}</p>}
        </div>
      </section>
    </section>
  </motion.article>
);

const eduAndExp = () => {
  return (
    <section className="relative container mx-auto px-4 py-12 lg:p-16" id="experience">
      <CustomTitle text="Education & Experience" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
        {education.map((edu) => (
          <SectionItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
          />
        ))}

        {experience.map((exp) => (
          <SectionItem
            key={exp.id}
            title={exp.title}
            subtitle={exp.company}
            year={exp.year}
            details={exp.description}
            icon={exp.icon}
          />
        ))}
      </section>
    </section>
  );
};

export default eduAndExp;
