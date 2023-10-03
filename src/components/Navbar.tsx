import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FaRegHandScissors } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Navbar() {
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
          <li className="flex items-center">
            {Links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-md flex px-4 py-8 font-semibold uppercase "
              >
                {link.title}
              </a>
            ))}
            <ModeToggle />
          </li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="outline">
            <motion.button
              initial="hide"
              animate={mobileNav ? "show" : "hide"}
              onClick={toggleMobileNav}
              className="relative z-50 flex flex-col space-y-1 md:hidden"
            >
              {mobileNav ? (
                <MdKeyboardDoubleArrowLeft size={25} />
              ) : (
                <MdKeyboardDoubleArrowLeft size={25} className="rotate-180" />
              )}
            </motion.button>
          </Button>
          <ModeToggle />
        </div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "100%",
                  },
                  show: {
                    x: "0%",
                    transition: {
                      bounce: 0.5,
                      when: "beforeChildren",
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 flex flex-col justify-center space-y-10 p-6 lg:hidden"
              >
                <ul className="list-none space-y-6">
                  <div className="flex gap-2">
                    <FaRegHandScissors
                      className="rotate-45 text-violet-500 mb-12"
                      size={35}
                    />
                  </div>

                  <motion.li
                    variants={{
                      hide: {
                        x: "50%",
                        opacity: 0,
                      },
                      show: {
                        x: "0%",
                        opacity: 1,
                      },
                    }}
                  >
                    {Links.map((link, index) => (
                      <motion.a
                        variants={{
                          hide: {
                            x: "100%",
                            opacity: 0,
                          },
                          show: (index) => ({
                            x: "0%",
                            opacity: 1,
                            transition: {
                              delay: index * 0.5,
                              bounce: 0.5,
                              when: "beforeChildren",
                            },
                          }),
                        }}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        custom={index}
                        href={link.href}
                        key={index}
                        onClick={toggleMobileNav}
                        className="flex items-start text-6xl tracking-widest font-semibold uppercase"
                      >
                        {link.title}
                      </motion.a>
                    ))}
                  </motion.li>
                </ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
