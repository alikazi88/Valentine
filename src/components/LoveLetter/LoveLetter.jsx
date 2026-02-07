import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import './LoveLetter.css';

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const message = `There are moments when I just stop and realize how incredibly lucky I am to have you by my side. You aren't just my girlfriend; you're my safe haven, my biggest laugh, and the person I want to share every single sunrise with. 

I know I don't always say it enough, but every little thing about you—the way your eyes light up when you're excited, the warmth of your hand in mine, and the way you just 'get' me—is what makes my world whole. Being with you is the easiest 'yes' I've ever said.

This 3D world we're walking through is a small shadow of the beautiful life we're building. Thank you for choosing me, for loving me, and for being the most incredible woman I know. 

I am yours, completely and forever.`;

    return (
        <div className="love-letter-section">
            <h2 className="section-title">A Message for You</h2>

            <motion.div
                layout
                className="letter-container"
                onClick={() => !isOpen && setIsOpen(true)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            className="envelope-closed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <Heart fill="#c41e3a" color="#c41e3a" size={64} />
                            </motion.div>
                            <p className="closed-text">Tap to Open</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            className="letter-open-content"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="letter-header">My Dearest Mitali,</div>
                            <div className="letter-body">{message}</div>
                            <div className="letter-footer">
                                Yours forever,<br />
                                Ali
                            </div>

                            <button
                                className="back-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                            >
                                Close Letter
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default LoveLetter;
