import React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / Window.innerHeight,
      0.1,
      1000
    );
    const render = new THREE.WebGLRenderer();
  });

  return <div></div>;
};

export default ThreeBackground;
