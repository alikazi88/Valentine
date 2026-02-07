import React, { useMemo } from 'react';
import Polaroid from './Polaroid';

const memories = [
    { id: 1, imageUrl: "/src/assets/images/IMG_3571.jpeg", caption: "Our first walk" },
    { id: 2, imageUrl: "/src/assets/images/IMG_3578.jpeg", caption: "Beautiful moments" },
    { id: 3, imageUrl: "/src/assets/images/IMG_3580.jpeg", caption: "Summer sunsets" },
    { id: 4, imageUrl: "/src/assets/images/IMG_3595.jpeg", caption: "Always happy with you" },
    { id: 5, imageUrl: "/src/assets/images/IMG_3597.jpeg", caption: "The coffee dates" },
    { id: 6, imageUrl: "/src/assets/images/IMG_3598.jpeg", caption: "Golden hours" },
    { id: 7, imageUrl: "/src/assets/images/IMG_3606.jpeg", caption: "Paris vibes" },
    { id: 8, imageUrl: "/src/assets/images/IMG_3609.jpeg", caption: "Your beautiful smile" },
    { id: 9, imageUrl: "/src/assets/images/IMG_3651.jpeg", caption: "Every moment is a gift" },
    { id: 10, imageUrl: "/src/assets/images/IMG_3654.jpeg", caption: "Big adventures" },
    { id: 11, imageUrl: "/src/assets/images/IMG_3660.jpeg", caption: "Cherished times" },
    { id: 12, imageUrl: "/src/assets/images/IMG_3664.jpeg", caption: "Looking at the stars" },
    { id: 13, imageUrl: "/src/assets/images/IMG_3672.jpeg", caption: "Mitali mine" },
    { id: 14, imageUrl: "/src/assets/images/IMG_3716.jpeg", caption: "Love you baby" },
    { id: 15, imageUrl: "/src/assets/images/IMG_5046.jpeg", caption: "Forever together" },
    { id: 16, imageUrl: "/src/assets/images/IMG_5051.jpeg", caption: "Our journey" },
    { id: 17, imageUrl: "/src/assets/images/IMG_5083.jpeg", caption: "Aesthetic days" },
    { id: 18, imageUrl: "/src/assets/images/IMG_5105.jpeg", caption: "Sweetest girl" },
    { id: 19, imageUrl: "/src/assets/images/IMG_5112.jpeg", caption: "In your arms" },
    { id: 20, imageUrl: "/src/assets/images/IMG_5133.jpeg", caption: "Perfect Valentine" },
];

const MemoryField = () => {
    const polaroids = useMemo(() => {
        const temp = [];
        // Increase to 40 polaroids using the local images
        for (let i = 0; i < 40; i++) {
            const mem = memories[i % memories.length];
            const x = Math.random() * 8000 - 4000;
            const y = Math.random() * 6000 - 3000;
            const z = Math.random() * 2000 - 1000;

            const rotationX = (Math.random() - 0.5) * 0.4;
            const rotationY = (Math.random() - 0.5) * 0.4;
            const rotationZ = (Math.random() - 0.5) * 0.2;

            temp.push({
                ...mem,
                id: `mem-${i}`,
                position: [x, y, z],
                rotation: [rotationX, rotationY, rotationZ]
            });
        }
        return temp;
    }, []);

    return (
        <group>
            {polaroids.map((p) => (
                <Polaroid key={p.id} {...p} />
            ))}
        </group>
    );
};

export default MemoryField;
