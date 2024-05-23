"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useSelector } from "react-redux";
import { selectUtil } from "@/lib/features/util/utilSlice";

const Mosque = dynamic(() => import("@/components/Mosque/Mosque"), {
  ssr: false,
});

export default function Scene() {
  const refOrbitControls: React.Ref<OrbitControlsImpl> = useRef(null);
  const atBuildPage = useSelector(selectUtil);
  const targetAzimuthalAngle = 0.4241944079037666; // Set your target azimuthal angle here
  const targetPolarAngle = (Math.PI / 2) * -0.11705858608589903; // Set your target polar angle here


  useEffect(()=>{
    console.log(atBuildPage)
  }, [atBuildPage])

  useEffect(() => {
    if (!refOrbitControls.current) return;
    const doSmoothReset = () => {
      if (!refOrbitControls.current) return;

      let alpha = refOrbitControls.current.getAzimuthalAngle();
      let beta = refOrbitControls.current.getPolarAngle() - Math.PI / 2;

      if (
        Math.abs(alpha - targetAzimuthalAngle) < 0.001 &&
        Math.abs(beta - targetPolarAngle) < 0.001
      ) {
        refOrbitControls.current.minAzimuthAngle = -Infinity;
        refOrbitControls.current.maxAzimuthAngle = Infinity;
        refOrbitControls.current.minPolarAngle = 0;
        refOrbitControls.current.maxPolarAngle = Math.PI;
        return;
      }

      // Animate using requestAnimationFrame
      const animate = () => {
        if (!refOrbitControls.current) return;

        // Linear interpolation
        alpha += (targetAzimuthalAngle - alpha) * 0.1;
        beta += (targetPolarAngle - beta) * 0.1;

        // Set the new min and max angles to force the OrbitControls to update
        refOrbitControls.current.minAzimuthAngle = alpha;
        refOrbitControls.current.maxAzimuthAngle = alpha;

        refOrbitControls.current.minPolarAngle = beta + Math.PI / 2;
        refOrbitControls.current.maxPolarAngle = refOrbitControls.current.minPolarAngle;

        refOrbitControls.current.update();

        // Check if the angles are close to the target
        if (
          Math.abs(alpha - targetAzimuthalAngle) > 0.001 ||
          Math.abs(beta - targetPolarAngle) > 0.001
        ) {
          requestAnimationFrame(animate);
        } else {
          // Reset limits once we are close to the target
          refOrbitControls.current.minAzimuthAngle = -Infinity;
          refOrbitControls.current.maxAzimuthAngle = Infinity;
          refOrbitControls.current.minPolarAngle = 0;
          refOrbitControls.current.maxPolarAngle = Math.PI;
          refOrbitControls.current.update();
        }
      };

      animate();
    };
    doSmoothReset();
  }, [atBuildPage.developmentAboutPageInView, targetPolarAngle]);

  return (
    <Canvas
      shadows
      camera={{ position: [7, 2, 15.5], fov: 60, aspect: 1, near: 1, far: 80 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        cursor: atBuildPage.developmentAboutPageInView ? "grab" : "auto",
      }}
    >
      <ambientLight intensity={0.7} />
      <Environment preset="city" blur={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <OrbitControls
        ref={refOrbitControls}
        enableZoom={false}
        enablePan={false}
        enableRotate={atBuildPage.developmentAboutPageInView}
        enableDamping={true}
        dampingFactor={0.2}
      />
      <CameraRig active={!atBuildPage.developmentAboutPageInView}>
        <Mosque atBuildPage={atBuildPage.developmentAboutPageInView} />
      </CameraRig>
    </Canvas>
  );
}

function CameraRig({ children, active = true }: { children: React.JSX.Element; active?: boolean }) {
  const group: any = useRef();
  // const snap = useSnapshot(state)
  useFrame((state, delta) => {
    // easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 0, 0, 2], 0.25, delta)
    if (active) {
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });
  return <group ref={group}>{children}</group>;
}
