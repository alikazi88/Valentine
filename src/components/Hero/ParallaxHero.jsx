import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import MemoryField from './MemoryField';
import ParallaxEffect from './ParallaxEffect';
import CameraController from './CameraController';
import './Hero.css';

const ParallaxHero = () => {
    return (
        <div className="hero-container">
            <Canvas
                gl={{ antialias: false, alpha: false }}
                dpr={[1, 2.5]} // High resolution for clarity
                onCreated={({ gl }) => {
                    gl.setClearColor('#fdfbfb');
                }}
            >
                <color attach="background" args={['#fdfbfb']} />

                <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 1500]}
                    fov={70}
                    near={1}
                    far={15000}
                />

                {/* White background plane to ensure pure misty look */}
                <mesh position={[0, 0, -10000]}>
                    <planeGeometry args={[20000, 20000]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>

                {/* Stronger ambient lighting for clearer photos */}
                <ambientLight intensity={3.0} />
                <pointLight position={[2000, 2000, 2000]} intensity={1} />
                <directionalLight position={[0, 1000, 1000]} intensity={0.5} />

                <Suspense fallback={null}>
                    <MemoryField />
                    <CameraController />
                    <ParallaxEffect />
                </Suspense>

            </Canvas>

            <div className="hero-ui-overlay">
                <h1 className="hero-title">For Mitali</h1>
                <p className="hero-subtitle">Happy Valentines baby</p>
            </div>

            <div className="scroll-indicator">
                Scroll to Explore
            </div>
        </div>
    );
};

export default ParallaxHero;
