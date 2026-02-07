import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CameraController = () => {
    const { camera } = useThree();

    useFrame((state) => {
        // Map mouse coordinates (-1 to 1) to the example's sensitivity (windowHalf * 10)
        // Adjusting for the 2000 unit camera distance
        const mouseX = state.mouse.x * (window.innerWidth / 2) * 15;
        const mouseY = -state.mouse.y * (window.innerHeight / 2) * 15;

        // Start Z position
        if (camera.position.z === 0) camera.position.z = 2000;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;

        // Camera always faces the center
        camera.lookAt(0, 0, 0);
    });

    return null;
};

export default CameraController;
