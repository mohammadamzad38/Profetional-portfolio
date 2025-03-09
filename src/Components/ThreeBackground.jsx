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
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appenChild(renderer.domElement);
    camera.position.z = 5;

    // Create dense whitw stats for background

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 100; //Spread Stars over a larger are
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Make stars move or intersct with the mouse (parallax effect)

    const handleMouseMove = (event) => {
      const mouseX = (event.clintX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clintY / window.innerHeight) * 2 - 1;
      starField.rotation.x += mouseY * 0.01;
      starField.rotation.y += mouseX * 0.01;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize for Responsive

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Render Loop

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.001; //Slow rotation for movement
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div></div>;
};

export default ThreeBackground;
