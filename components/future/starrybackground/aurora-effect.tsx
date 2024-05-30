"use client";
import { useFrame, extend } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import {
  vertexShader,
  fragmentShader,
} from "@/components/future/starrybackground/shaders";
extend({ ...THREE, PlaneBufferGeometry: THREE.BufferGeometry });

const Aurora = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color: { value: new THREE.Color(0x8a2be2) },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
    if (meshRef.current) {
      meshRef.current.position.z = (clock.getElapsedTime() * 10) % 2000;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1000]}>
      <planeBufferGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
};

export default Aurora;
