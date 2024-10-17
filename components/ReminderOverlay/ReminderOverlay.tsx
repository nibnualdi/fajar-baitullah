"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { AnimationSequence, motion, useAnimate } from "framer-motion";
import { ArrowIcon } from "@/assets/icons/admin";

const ScrollIcons = dynamic(() => import("@/assets/icons/customIcons/ScrollIcons"), {
  ssr: false,
});

function useAnimation({ minimize, hide }: { minimize: boolean; hide: boolean }) {
  const [scope, animate] = useAnimate();

  const sequence: AnimationSequence =
    !minimize && !hide
      ? [
          [
            "#window-overlay-minimize",
            { y: 900, opacity: 0 },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "#window-content-minimize",
            { opacity: 0 },
            { duration: 0.3, type: "spring", damping: 30 },
          ],
          [
            "#window-overlay",
            { height: "100%", y: 0, opacity: 1 },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4, at: "<" },
          ],
          ["#window-content", { opacity: 1 }, { duration: 0.3, type: "spring", damping: 30 }],
        ]
      : minimize && !hide
        ? [
            ["#window-content", { opacity: 0 }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }],
            [
              "#window-overlay",
              { height: "8vh", y: 860, opacity: 0 },
              { duration: 0.3, type: "spring", damping: 30, at: 0.4 },
            ],
            [
              "#window-overlay-minimize",
              { y: 860, opacity: 1 },
              { duration: 0.3, type: "spring", damping: 30, at: "<" },
            ],
            ["#window-content-minimize", { opacity: 1 }, { ease: "backIn" }],
          ]
        : !minimize && hide
          ? [
              [
                "#window-content",
                { opacity: 0 },
                { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
              ],
              [
                "#window-overlay",
                { height: "8vh", y: 860, opacity: 0 },
                { duration: 0.3, type: "spring", damping: 30, at: 0.4 },
              ],
              [
                "#window-overlay-minimize",
                { y: 900, opacity: 1 },
                { duration: 0.3, type: "spring", damping: 30, at: "<" },
              ],
              ["#window-content-minimize", { opacity: 1 }, { ease: "backIn" }],
            ]
          : [];

  useEffect(() => {
    animate([...sequence]);
  }, [minimize]);

  return scope;
}

const RunningText = ({ text }: { text: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  // Set a base speed (adjust as needed)
  const baseSpeed = 20; // pixels per second
  const [duration, setDuration] = useState<number>(10); // Calculate duration based on text width

  useEffect(() => {
    // Measure the width of the text when it's rendered
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      setDuration(textWidth / baseSpeed);
    }
  }, [text]);

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }} className="w-full">
      <motion.div
        ref={textRef}
        key={duration}
        animate={{ x: [window.innerWidth, -text.length * 8] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
        style={{ display: "inline-block" }}
        className="w-full text-base"
      >
        {text}
      </motion.div>
    </div>
  );
};

const ReminderOverlay = () => {
  const [minimize, setMinimize] = useState(false);
  const [hide, setHide] = useState(false);
  const scope = useAnimation({ minimize, hide });

  useEffect(() => {
    const handleScroll = () => {
      if (minimize || hide) return;
      setMinimize(true);
    };
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [minimize, hide]);

  return (
    <div ref={scope}>
      <div
        id="window-overlay"
        className="fixed z-50 overflow-scroll h-screen w-screen bg-gradient-to-t from-black/20 to-zinc-900/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 flex justify-center items-center"
      >
        <div
          id="window-content"
          className="relative w-2/4 p-40 flex flex-col justify-center items-center gap-8 text-xl"
        >
          <span className="bg-white w-1 h-32 absolute z-50 right-0 top-0"></span>
          <span className="bg-white w-32 h-1 absolute z-50 right-0 top-0"></span>
          <span className="bg-white w-1 h-32 absolute z-50 left-0 bottom-0"></span>
          <span className="bg-white w-32 h-1 absolute z-50 left-0 bottom-0"></span>
          <h1 className="text-7xl font-bold">REMINDER!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deserunt quae nam
            quisquam, quam officia cupiditate aliquid quod fuga nisi, obcaecati deleniti saepe amet
            natus! Doloribus amet debitis quo perferendis!
          </p>
          <ScrollIcons
            className="absolute left-1/2 transform -translate-x-1/2 bottom-2"
            iconClassname="scale-50"
            textClassname="text-base text-center max-w-[150px]"
          />
        </div>
      </div>

      <div
        id="window-overlay-minimize"
        className="max-h-[8vh] w-screen fixed z-50 flex flex-col items-end"
      >
        <div
          id="arrow-buttons"
          className="p-2 flex gap-1 bg-gradient-to-t from-black/20 to-zinc-900/20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40"
        >
          <button
            className="text-white -rotate-90"
            onClick={() => {
              if (hide) {
                setMinimize(true);
                setHide(false);
                return;
              }
              setMinimize(false);
              setHide(false);
            }}
          >
            <ArrowIcon />
          </button>
          <button
            className="text-white rotate-90"
            onClick={() => {
              setHide(true);
              setMinimize(false);
            }}
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="overflow-hidden max-h-[8vh] w-screen bg-gradient-to-t from-black/20 to-zinc-900/20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 flex justify-center items-center">
          <div
            id="window-content-minimize"
            className="relative w-full py-4 flex justify-center items-center gap-8 text-xl"
          >
            <RunningText text="Lorem ipsum" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderOverlay;
