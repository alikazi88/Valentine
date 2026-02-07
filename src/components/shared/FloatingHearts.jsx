import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';
import './FloatingHearts.css';

const FloatingHearts = ({ count = 20 }) => {
    const hearts = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => {
            // Ensure even distribution across the screen by dividing the width into sectors
            const sectorWidth = 100 / count;
            const left = (i * sectorWidth) + (Math.random() * (sectorWidth * 0.8));

            return {
                id: i,
                left: `${left}%`,
                size: Math.random() * 25 + 10,
                duration: Math.random() * 15 + 10,
                delay: Math.random() * 20,
                opacity: Math.random() * 0.15 + 0.05,
            };
        });
    }, [count]);

    return (
        <div className="floating-hearts-container">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: heart.left,
                        fontSize: heart.size,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                        opacity: heart.opacity,
                    }}
                >
                    <Heart fill="currentColor" size={heart.size} />
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;
