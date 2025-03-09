import React from "react";
import { useState, useEffect } from "react";
import {
  useAnimate,
  stagger,
  motion,
  transform,
  delay,
  animate,
} from "framer-motion";
import { Path } from "three";
import { filter } from "framer-motion/client";

const Path = (props) => {
  <Path fill="transparent" stroke="white" strokeLinecap="round" {...props} />;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, setScope] = useAnimate();

  useEffect(() => {
    const manueAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.0, 0.65, 0.53, 0.95], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    // Animate path & manue

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 15.346 L 20 16.346" },
        { at: "<" },
      ],
      ...manueAnimations,
    ]);
  }, [isOpen, animate]);

  const handleNavItemClick = (secyionId) => {
    setIsOpen(false);
    document.getElementById(secyionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const NavItems = [
    { id: "service", text: "What I offer" },
    { id: "skils", text: "My Skills" },
    { id: "experience", text: "Education & Experience" },
    { id: "work", text: "My Work" },
    { id: "contact", text: "Contact" },
  ];

  return <div className="relative flex justify-between px-12 py-2">
    <div ref={scope} className="relative  ">
      <button onClick={() => setIsOpen(!isOpen)}
         className="absolute top-4 z-40 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC107] to-[#ff18b8] flex items-center justify-center"
        >
          <svg width={23} height={18} viewBox="0 0 23 18">
            <Path d="M 2 2.5 L 20 2.5" className="top-0" />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="align-middle" />
            <Path d="M 2 16.346 l 20 16.346" className="bottom" />
          </svg>
        </button>
    </div>
  </div>;
};

export default NavBar;
