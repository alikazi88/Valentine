import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';
import './Countdown.css';

const daysData = [
    {
        id: 7,
        title: "Rose Day",
        riddle: "mitali",
        hint: "What's your name? (All lowercase)",
        icon: "🌹",
        content: "A bouquet of virtual roses for the most beautiful girl."
    },
    {
        id: 8,
        title: "Propose Day",
        riddle: "forever",
        hint: "How long will I love you?",
        icon: "💍",
        content: "Will you stay by my side through every 3D adventure?"
    },
    {
        id: 9,
        title: "Choco Day",
        riddle: "sweet",
        hint: "Your smile is as ___ as candy?",
        icon: "🍫",
        content: "You're sweeter than the finest Swiss chocolate."
    },
    {
        id: 10,
        title: "Teddy Day",
        riddle: "hug",
        hint: "What I want to give you right now?",
        icon: "🧸",
        content: "A virtual teddy to keep you warm until I can hold you."
    },
    {
        id: 11,
        title: "Promise Day",
        riddle: "always",
        hint: "When will I be there for you?",
        icon: "🤝",
        content: "I promise to always make you smile."
    },
    {
        id: 12,
        title: "Hug Day",
        riddle: "warm",
        hint: "A hug feels ___ and cozy?",
        icon: "🤗",
        content: "Sending you the biggest, warmest virtual hug."
    },
    {
        id: 13,
        title: "Kiss Day",
        riddle: "kiss",
        hint: "A romantic peck?",
        icon: "💋",
        content: "Can't wait for our next real kiss."
    },
    {
        id: 14,
        title: "V-Day",
        riddle: "love",
        hint: "The Four Letter Word?",
        icon: "💝",
        content: "You are the love of my life. Happy Valentine's Day, Mitali!"
    },
];

const DayBox = ({ data }) => {
    const [input, setInput] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);

    const checkRiddle = (e) => {
        const val = e.target.value.toLowerCase();
        if (val === data.riddle) {
            setIsUnlocked(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#c41e3a', '#ffccd5', '#ffffff']
            });
        }
        setInput(e.target.value);
    };

    return (
        <div className={`day-box ${isUnlocked ? 'unlocked' : ''}`}>
            <div className="box-inner">
                <div className="box-front">
                    <div className="day-number">{data.id}</div>
                    <div className="day-title">{data.title}</div>
                    {!isUnlocked ? (
                        <div style={{ width: '100%' }}>
                            <div className="hint-label">Hint: {data.hint}</div>
                            <input
                                type="text"
                                placeholder="Type the answer..."
                                className="unlock-input"
                                value={input}
                                onChange={checkRiddle}
                            />
                            <div className="lock-overlay" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                                <Lock size={16} /> <span style={{ fontSize: '0.7rem' }}>Locked</span>
                            </div>
                        </div>
                    ) : (
                        <div className="lock-overlay" style={{ color: '#22c55e' }}>
                            <Unlock size={16} /> <span style={{ fontSize: '0.7rem' }}>Unlocked!</span>
                        </div>
                    )}
                </div>
                <div className="box-back">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isUnlocked ? { scale: 1, rotate: 0 } : {}}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="reward-icon"
                    >
                        {data.icon}
                    </motion.div>
                    <h4 style={{ color: 'var(--romantic-red)', margin: '1rem 0 0.5rem' }}>{data.title}</h4>
                    <p style={{ fontSize: '0.9rem', textAlign: 'center', padding: '0 1rem' }}>{data.content}</p>
                </div>
            </div>
        </div>
    );
};

const Countdown = () => {
    return (
        <div className="countdown-section">
            <h2 className="section-title">The Countdown Challenge</h2>
            <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '2rem' }}>
                Unlock each day of Valentine's week with a little riddle.
            </p>
            <div className="calendar-grid">
                {daysData.map(day => (
                    <DayBox key={day.id} data={day} />
                ))}
            </div>
        </div>
    );
};

export default Countdown;
