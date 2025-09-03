import React, { useState } from "react";
import CustomTitle from "./CustomTitle";
import { projects } from "./config";
import { motion, AnimatePresence } from "framer-motion";


export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle />
      </header>
      <article className="relative flex h-screen justify-center items-center w-full p-4 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>

        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>

        <nav>
          <button
            onClick={prevSlide}
            className="absolute left-5 z-20 hover:scale-150"
          >
            <img className="w-[50px] rounded-full bg-yellow-300" src="./NMSS.png" alt="project" />
          </button>
        </nav>

        <article className="relative w-full h-[800px] flex items-center justify-center">
            <AnimatePresence initial={false}>
                {
                    projects.map((project, index) => index === currentIndex && (
                        <motion.article key={project.id}
                        initial={{opacity:0, scale:0.8, x:100}}
                        animate={{opacity:1, scale:1, x:0, rotateY:0}}
                        exit={{opacity:0, scale:0.8, x:-100}}
                        transition={{duration:0.6, type:"spring", bounce:0.3}}
                        className="absolute w-[80%] h-full p-6 border border-[#FFC107] bg-[#ffffff29] rounded-3xl text-white"
                        style={{perspective:1000}}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-[500px] object-cover rounded-t-lg mb-4" />
                            <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FFC107] to-[#ff18b8]">{project.title}</h2>
                            <p className="text-md mt-2">{project.description}</p>
                        </motion.article>
                    ))
                }
            </AnimatePresence>
        </article>
        <nav>
          <button
            onClick={nextSlide}
            className="absolute right-5 z-20 hover:scale-150"
          >
            <img className="w-[50px] rounded-full bg-yellow-300" src="./NMSS.png" width={100} alt="project" />
          </button>
        </nav>
      </article>
    </>
  );
}
