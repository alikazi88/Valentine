import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Photobooth.css';

const stripsData = [
    {
        id: 1,
        title: "Best Days",
        images: [
            "/src/assets/images/IMG_5120.jpeg",
            "/src/assets/images/IMG_5126.jpeg",
            "/src/assets/images/IMG_5200.jpeg",
            "/src/assets/images/IMG_5211.jpeg"
        ]
    },
    {
        id: 2,
        title: "Forever Memories",
        images: [
            "/src/assets/images/IMG_5287.jpeg",
            "/src/assets/images/IMG_5290.jpeg",
            "/src/assets/images/d498f33d-086a-4399-87f3-3feee905e270.jpeg",
            "/src/assets/images/IMG_3571.jpeg"
        ]
    },
    {
        id: 3,
        title: "Golden Hours",
        images: [
            "/src/assets/images/IMG_3595.jpeg",
            "/src/assets/images/IMG_3597.jpeg",
            "/src/assets/images/IMG_3598.jpeg",
            "/src/assets/images/IMG_3606.jpeg"
        ]
    },
    {
        id: 4,
        title: "Travel Diaried",
        images: [
            "/src/assets/images/IMG_3654.jpeg",
            "/src/assets/images/IMG_3660.jpeg",
            "/src/assets/images/IMG_3664.jpeg",
            "/src/assets/images/IMG_3672.jpeg"
        ]
    },
    {
        id: 5,
        title: "Sweet Moments",
        images: [
            "/src/assets/images/IMG_3609.jpeg",
            "/src/assets/images/IMG_3651.jpeg",
            "/src/assets/images/IMG_3716.jpeg",
            "/src/assets/images/IMG_5046.jpeg"
        ]
    },
    {
        id: 6,
        title: "Us Always",
        images: [
            "/src/assets/images/IMG_5051.jpeg",
            "/src/assets/images/IMG_5083.jpeg",
            "/src/assets/images/IMG_5105.jpeg",
            "/src/assets/images/IMG_5112.jpeg"
        ]
    }
];

const PhotoStrip = ({ data }) => {
    const [isDeveloped, setIsDeveloped] = useState(false);

    return (
        <motion.div
            className="photo-strip"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsDeveloped(!isDeveloped)}
        >
            {data.images.map((img, idx) => (
                <div key={idx} className="strip-image-container">
                    <motion.img
                        src={img}
                        alt="Memory"
                        className="strip-image"
                        initial={{ filter: "brightness(2) contrast(0.5) grayscale(1)" }}
                        animate={isDeveloped ?
                            { filter: "brightness(1) contrast(1) grayscale(0)" } :
                            { filter: "brightness(2) contrast(0.5) grayscale(1)" }
                        }
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                    {/* Subtle curl/sheen effect here if needed */}
                </div>
            ))}
            <div className="strip-caption">{data.title}</div>
        </motion.div>
    );
};

const Photobooth = () => {
    return (
        <div className="photobooth-section">
            <h2 className="section-title">Collecting Memories</h2>
            <div className="booth-container">
                {stripsData.map(strip => (
                    <PhotoStrip key={strip.id} data={strip} />
                ))}
            </div>
            <p style={{ fontStyle: 'italic', opacity: 0.6, marginTop: '2rem' }}>
                * Click a strip to develop the memories
            </p>
        </div>
    );
};

export default Photobooth;
