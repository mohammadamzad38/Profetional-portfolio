import { motion } from "framer-motion";

const Footer = () => {
  const scentence = "All rights reserved";
  const letters = scentence.split("");

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <footer className="relative z-10 text-white border-2 border-t-white mt-20">
      <div className="container p-8 flex flex-col md:flex-row gap-5 md:justify-between">
        <nav className="flex ml-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`inline-block ${letter === " " ? "mr-2" : "mr-1"}`}
            >
              {letter}
            </motion.span>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
