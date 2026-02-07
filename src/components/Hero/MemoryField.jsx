import React, { useMemo } from 'react';
import Polaroid from './Polaroid';

// Dynamically import all images from the assets folder
const images = import.meta.glob('/src/assets/images/*.{jpeg,jpg,png,dng}', { eager: true });

// Extract the URL from the imported module
const imageList = Object.values(images).map(img => img.default);

// List of captions to cycle through
const captions = [
    "Our first walk", "Beautiful moments", "Summer sunsets", "Always happy with you",
    "The coffee dates", "Golden hours", "Paris vibes", "Your beautiful smile",
    "Every moment is a gift", "Big adventures", "Cherished times", "Looking at the stars",
    "Mitali mine", "Love you baby", "Forever together", "Our journey",
    "Aesthetic days", "Sweetest girl", "In your arms", "Perfect Valentine"
];

const MemoryField = () => {
    const polaroids = useMemo(() => {
        const temp = [];
        // Increase to 40 polaroids using the local images
        for (let i = 0; i < 40; i++) {
            // Use modulus to cycle through images and captions
            const imageUrl = imageList[i % imageList.length];
            const caption = captions[i % captions.length];

            const x = Math.random() * 8000 - 4000;
            const y = Math.random() * 6000 - 3000;
            const z = Math.random() * 2000 - 1000;

            const rotationX = (Math.random() - 0.5) * 0.4;
            const rotationY = (Math.random() - 0.5) * 0.4;
            const rotationZ = (Math.random() - 0.5) * 0.2;

            temp.push({
                id: `mem-${i}`,
                imageUrl,
                caption,
                position: [x, y, z],
                rotation: [rotationX, rotationY, rotationZ]
            });
        }
        return temp;
    }, []);

    if (imageList.length === 0) return null;

    return (
        <group>
            {polaroids.map((p) => (
                <Polaroid key={p.id} {...p} />
            ))}
        </group>
    );
};

export default MemoryField;
