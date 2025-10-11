import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import CustomTitle from "./CustomTitle";
import { projects } from "./config";
import { FaExternalLinkAlt } from "react-icons/fa";

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
            className="absolute bg-yellow-300 p-5 rounded-full left-5 z-20 hover:scale-150"
          >
            <GrPrevious />
          </button>
        </nav>

        <article className="relative w-full h-[800px] flex items-center justify-center">
          <AnimatePresence initial={false}>
            {projects.map(
              (project, index) =>
                index === currentIndex && (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="absolute w-[80%] h-full p-6 border border-[#FFC107] bg-[#ffffff29] rounded-3xl text-white"
                    style={{ perspective: 1000 }}
                  >
                    <a href={project.link}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[500px] object-cover rounded-t-lg mb-4"
                      />
                    </a>
                    <a
                      href={project.link}
                      className="uppercase text-2xl flex gap-3 justify-center md:text-xl font-bold items-center text-transparent bg-clip-text bg-gradient-to-br from-[#FFC107] to-[#ff18b8]"
                    >
                      {project.title}{" "}
                      <FaExternalLinkAlt className="text-white w-10 h-10" />
                    </a>
                    <p className="text-md mt-2 text-center">
                      {project.description}
                    </p>
                  </motion.article>
                )
            )}
          </AnimatePresence>
        </article>
        <nav>
          <button
            onClick={nextSlide}
            className="absolute right-5 bg-yellow-300 p-5 rounded-full z-20 hover:scale-150"
          >
            <GrNext />
          </button>
        </nav>
      </article>
    </>
  );
}
