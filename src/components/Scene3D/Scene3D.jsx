import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Stars, Float } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Petals from './Petals';
import Architecture from './Architecture';
import './Scene3D.css';

gsap.registerPlugin(ScrollTrigger);

const SceneContent = () => {
    const { camera } = useThree();
    const groupRef = useRef();

    useLayoutEffect(() => {
        // Camera Animation Path: Move slower through the scene
        gsap.to(camera.position, {
            z: -140,
            ease: "none",
            scrollTrigger: {
                trigger: ".cinematic-section",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // Subtitle animations - Fixed trigger points
        gsap.utils.toArray(".cinematic-text").forEach((text, i) => {
            gsap.fromTo(text,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: text,
                        start: "top 90%",
                        end: "top 10%",
                        scrub: true,
                    }
                }
            );
        });
    }, [camera]);

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <fog attach="fog" args={['#fef2f2', 20, 180]} />

            <Architecture />
            <Petals count={500} />
            <Stars radius={150} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
        </group>
    );
};

const Scene3D = () => {
    return (
        <div className="cinematic-section">
            <div className="cinematic-canvas-container">
                <Canvas shadows gl={{ antialias: true }}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
                    <color attach="background" args={['#fef2f2']} />
                    <SceneContent />
                </Canvas>
            </div>

            <div className="cinematic-overlay">
                <div className="cinematic-text">
                    <div className="message-box">
                        <h2>Ethereal Beauty</h2>
                        <p>Every step we take together feels like a journey through paradise.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scene3D;
