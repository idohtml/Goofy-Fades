import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FaRegHandScissors } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Navbar({ isVisible }) {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const Links = [
    { title: "Home", href: "/" },
    { title: "Pricing", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center p-4 md:p-2">
      <a href="/" className="flex items-center gap-2 text-lg md:text-2xl">
        <span>
          <FaRegHandScissors className="rotate-45 text-violet-500" />
        </span>
        <span>Goofy Fades</span>
      </a>
      <nav>
        <ul className="hidden md:block">
          <li className="flex">
            {Links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-md flex px-4 py-8 font-semibold uppercase "
              >
                {link.title}
              </a>
            ))}
          </li>
        </ul>
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="relative z-50 flex flex-col space-y-1 md:hidden"
        >
          {mobileNav ? (
            <MdKeyboardDoubleArrowLeft />
          ) : (
            <MdKeyboardDoubleArrowLeft className="rotate-180" />
          )}
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.5,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    y: "-100%",
                    transition: {
                      duration: 1,
                      y: { duration: 0.1 },
                      staggerChildren: 0.5,
                      when: "afterChildren",
                    },
                  },
                  show: {
                    y: "0%",
                    transition: {
                      duration: 1,
                      y: { duration: 0.5 },
                      staggerChildren: 1,
                      when: "beforeChildren",
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 flex flex-col justify-center space-y-10 bg-black p-6 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "-25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.5,
                        when: "afterChildren",
                      },
                    },
                  }}
                  className="list-none space-y-6"
                >
                  <FaRegHandScissors
                    className="rotate-45 text-violet-500 mb-12"
                    size={35}
                  />
                  <li>
                    {Links.map((link, index) => (
                      <a
                        href={link.href}
                        key={index}
                        onClick={toggleMobileNav}
                        className="flex text-6xl gap-2 tracking-widest font-semibold uppercase"
                      >
                        {link.title}
                      </a>
                    ))}
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
