"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { easing } from "maath";

const Mosque = dynamic(() => import("@/components/Mosque/Mosque"), {
  ssr: false,
});
const OverlayAbout = dynamic(() => import("@/components/OverlayAbout/OverlayAbout"), {
  ssr: false,
});

export default function Scene({ content }: { content?: { title: string; desc: string }[] }) {
  return (
    <Canvas shadows camera={{ position: [7, 2, 15.5], fov: 60, aspect: 1, near: 1, far: 80 }}>
      <ambientLight intensity={0.7} />
      <Environment preset="city" blur={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <CameraRig>
        <ScrollControls pages={content?.length} damping={0.1}>
          {content && <OverlayAbout content={content} />}
          <Mosque position={[7, -7, -7]} />
        </ScrollControls>
      </CameraRig>
    </Canvas>
  );
}

function CameraRig({ children }: any) {
  const group: any = useRef();
  // const snap = useSnapshot(state)
  useFrame((state, delta) => {
    // easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 0, 0, 2], 0.25, delta)
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}
