"use client";

import * as React from "react";
import { useState } from "react";
import { MotionValue, motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";

type activeState = {
  row: number;
  col: number;
};

type SquareProps = {
  active: activeState;
  setActive: React.Dispatch<React.SetStateAction<activeState>>;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const circleAnimation = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];
const size = 60;
const gap = 25;

const Circle = ({ active, setActive, colIndex, rowIndex, x, y }: SquareProps) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: "rgba(48, 48, 48, 0.20)",
        filter: "drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.80))",
        width: "74.962px",
        height: "74.962px",
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        cursor: "pointer",
      }}
      variants={circleAnimation}
    />
  );
};

function Circles() {
  const [active, setActive] = useState<activeState>({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <>
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ position: "absolute", bottom: 50, right: 100, zIndex: 10 }}
      >
        <motion.div
          style={{
            display: "flex",
            width: (size + gap) * 4 - gap,
            height: (size + gap) * 4 - gap,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "relative",
            perspective: 500,
          }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Circle
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Circles;
