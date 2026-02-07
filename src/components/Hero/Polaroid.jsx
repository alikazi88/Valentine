import React from 'react';
import { useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';

const Polaroid = ({ position, rotation, imageUrl, caption }) => {
    const texture = useTexture(imageUrl);

    // Improve texture clarity
    if (texture) {
        texture.anisotropy = 16;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
    }

    return (
        <group position={position} rotation={rotation}>
            {/* Frame */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[800, 960, 10]} />
                <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.05} />
            </mesh>

            {/* Photo area */}
            <mesh position={[0, 80, 6]}>
                <planeGeometry args={[720, 720]} />
                <meshStandardMaterial
                    map={texture}
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Caption text */}
            <Text
                position={[0, -320, 6.1]}
                fontSize={48}
                color="#2c1e14"
                maxWidth={650}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
            >
                {caption}
            </Text>
        </group>
    );
};

export default Polaroid;
