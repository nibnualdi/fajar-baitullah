"use client";

import { Player } from "@lordicon/react";
import { useEffect, useRef, useState } from "react";

type AnimatedIconProps = {
  icon: any;
  className?: string;
};

const AnimatedIcon = (props: AnimatedIconProps) => {
  const [hover, setHover] = useState(false);
  const playerRef = useRef<any>(null);

  // trigger animation on hover & first load
  useEffect(() => {
    if (playerRef.current?.isPlaying) return;
    playerRef.current?.playFromBeginning();
    if (!playerRef.current?.isPlaying) return setHover(false);
  }, [hover]);

  return (
    <div
      className={props.className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Player ref={playerRef} size={30} icon={props.icon} />
    </div>
  );
};

export default AnimatedIcon;
