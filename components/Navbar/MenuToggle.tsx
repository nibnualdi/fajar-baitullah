"use client";

import * as React from "react";
import { AnimatePresence, HTMLMotionProps, motion, SVGMotionProps } from "framer-motion";
import { useRef } from "react";
import { useCycle } from "framer-motion";
import Link from "next/link";

type navType = {
  name: string;
  icon?: any;
  to: string;
};

type MenuToggleNavProps = HTMLMotionProps<"nav"> & {
  navItem: navType[];
  pathname?: string;
};

type MenuToggleProps = {
  toggle: () => any;
};

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: MenuToggleProps) => (
  <button onClick={toggle} className="z-50">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsMenuItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    opacity: 1,
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      restDelta: 2,
    },
  }),
  closed: {
    opacity: 0,
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuToggleNav = ({ navItem, pathname, ...props }: MenuToggleNavProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed bg-white top-0 left-0 w-screen h-screen lg:hidden"
              initial={{ opacity: 0 }}
              animate="open"
              exit="closed"
              variants={sidebar}
            />
            <motion.ul
              variants={variants}
              animate="open"
              exit="closed"
              className="fixed text-black top-0 left-0 bg-transparent w-screen h-screen lg:hidden flex flex-col justify-center items-center"
            >
              {navItem.map((item) => (
                <Link
                  href={item.to}
                  className="w-full"
                  key={item.name}
                  onClick={() => toggleOpen()}
                >
                  <motion.li
                    variants={variantsMenuItem}
                    whileHover={{ backgroundColor: "rgba(1,1,1,.2)" }}
                    // whileTap={{ scale: 0.95 }}
                    className={`w-full p-3 cursor-pointer text-center ${
                      pathname === item.to ? "bg-[rgba(1,1,1,.2)]" : "bg-white"
                    }`}
                  >
                    {item.name}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
      <motion.nav initial={true} animate={isOpen ? "open" : "closed"} ref={containerRef} {...props}>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default MenuToggleNav;
