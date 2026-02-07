import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import './Naughty.css';

const secretsData = [
    { id: 1, front: "Why I love you...", back: "Because you are the most beautiful person I know." },
    { id: 2, front: "A little secret...", back: "I can't stop thinking about our first kiss." },
    { id: 3, front: "Favorite memory...", back: "The way you looked at me when it went in raw" },
    { id: 4, front: "Craving...", back: "For your warm hugs on a cold night." },
    { id: 5, front: "Just for you...", back: "My D stands in attention" },
    { id: 6, front: "Psst...", back: "I'm literally hard coding this for you my darling" }
];

const SecretCard = ({ data }) => (
    <motion.div
        className="flipped-polaroid"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
    >
        <div className="polaroid-inner">
            <div className="polaroid-front">
                <Lock size={24} color="#e9d5ff" />
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.6 }}>Hover to Reveal</p>
                <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>{data.front}</p>
            </div>
            <div className="polaroid-back">
                <p>{data.back}</p>
            </div>
        </div>
    </motion.div>
);

const Naughty = () => {
    return (
        <div className="naughty-section">
            <h2 className="section-title">Our Secret Corner</h2>
            <p style={{ textAlign: 'center', opacity: 0.7, maxWidth: '600px', marginBottom: '2rem' }}>
                A place for all the things I want to tell you... and maybe a little more.
            </p>

            <div className="secret-container">
                {secretsData.map(secret => (
                    <SecretCard key={secret.id} data={secret} />
                ))}
            </div>

            <motion.div
                className="glass-card"
                style={{ marginTop: '4rem', padding: '2rem 3rem', textAlign: 'center' }}
                whileHover={{ scale: 1.02 }}
            >
                <h3 style={{ color: 'var(--romantic-red)' }}>Reason #1648 why I love you</h3>
                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                    "The way you make every ordinary day feel like an extraordinary adventure."
                </p>
            </motion.div>
        </div>
    );
};

export default Naughty;
