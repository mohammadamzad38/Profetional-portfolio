import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, OrbitControls, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import React from "react";

function loadingBar({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        background: "#ffc107",
        transform: `scale(${progress})`,
        transformOrigin: "left",
        transition: "transform 0.01s ease-out",
        zIndex: 999,
      }}
    ></div>
  );
}

function ImageMesh({ position = [0, 0, 0], scale, ...props }) {
  const ref = useRef();
  const texture = useTexture("");

  const aspectratio = 1920 / 1000;
  const width = 4 * aspectratio * scale;
  const height = 4 * scale;
  const geom = useMemo(
    () => new THREE.PlaneGeometry(width, height),
    [width, height]
  );

  useFrame((state) => {
    if (ref.current) {
      const { clock } = state;
      ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
    }
  });
  return (
    <mesh
      ref={ref}
      position={position}
      geometry={geom}
      {...props}
      castShadow
      receiveShadow
    >
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Ground(props) {
  const [floor, normal] = useTexture([""]);

  return (
    <Reflector resolution={1024} args={[0, 0]} {...props}>
      {(Material, props) => (
        <Material
          color="#fofofo"
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

const LoadingSpinner = (onComplete) => {
  const [scale, setScale] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleResizes = () => {
      if (window.innerHeight < 600) {
        setScale(0.5);
      } else {
        setScale(0.8);
      }
    };
    window.addEventListener("resize", handleResizes);
    handleResizes();

    return () => {
      window.removeEventListener("resize", handleResizes);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 1) {
          return prev + 0.1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 500);
    if (loadingProgress >= 1) {
      onComplete();
    }
    return () => clearInterval(interval);
  }, [loadingProgress, onComplete]);
  return <>
  <loadingBar progress={loadingProgress} />
  <Canvas>
    
  </Canvas>
  </>;
};

export default LoadingSpinner;
