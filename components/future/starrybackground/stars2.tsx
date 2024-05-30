"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo, useEffect } from "react";
import * as THREE from "three";

const StarField = () => {
  const { viewport } = useThree();
  const starGeo = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 100000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = -THREE.MathUtils.randFloatSpread(10000);
      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    return geometry;
  }, []);

  const starMat = useMemo(() => {
    const sizes = new Float32Array(20000); // Array to hold sizes for each star
    for (let i = 0; i < 20000; i++) {
      sizes[i] = Math.random() * 0.5 + 0.1; // Randomize star size between 0.1 and 0.6
    }

    return new THREE.PointsMaterial({
      color: 0xffffff,
      sizeAttenuation: true,
      size: 0.3,
      sizes: sizes, // Apply varying sizes
    });
  }, []);

  const stars = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    stars.current!.rotation.z = elapsedTime * 0.1;
    if (stars.current) {
      stars.current.rotation.z = elapsedTime * 0.1;
      // stretch stars based on scroll position
      const stretchFactor = window.scrollY * 0.001;
      stars.current!.scale.x = 1 + stretchFactor;
    }
  });

  return <points ref={stars} geometry={starGeo} material={starMat} />;
};

const StarryBackground = () => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      setHeight(`${document.documentElement.scrollHeight}px`);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight(); // Initial update

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: height,
        zIndex: -1,
      }}
    >
      <Canvas>
        <StarField />
      </Canvas>
    </div>
  );
};

export default StarryBackground;
