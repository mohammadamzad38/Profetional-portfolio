import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, OrbitControls, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import React from 'react';

function loadingBar({progress}){
    return(
        <div style={{position: "fixed", top: 0, left:0, width:"100%", height: "5px", background: "#ffc107", transform:`scale(${progress})`, transformOrigin: "left", transition:"transform 0.01s ease-out", zIndex:999}}>

        </div>
    )
}

const LoadingSpinner = () => {
    return (
        <div>
            
        </div>
    );
};

export default LoadingSpinner;