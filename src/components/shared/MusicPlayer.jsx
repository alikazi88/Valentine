import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './MusicPlayer.css';
import elvisTrack from '../../assets/audio/Elvis_Presley_-_Can\'t_Help_Falling_in_Love_(Lyrics)_128k.mp3';

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const music = new Howl({
            src: [elvisTrack],
            html5: true,
            loop: true,
            volume: 0.3,
            onplay: () => setPlaying(true),
            onpause: () => setPlaying(false),
            onstop: () => setPlaying(false),
            onloaderror: (id, err) => console.error('Audio Load Error:', err),
            onplayerror: (id, err) => {
                console.warn('Audio Play Error (User interaction likely needed):', err);
                music.once('unlock', () => music.play());
            }
        });
        setSound(music);

        // Auto-play workaround: Listen for the first interaction to start the song
        const handleInteraction = () => {
            if (music && !music.playing()) {
                music.play();
            }
            // Remove listeners after first successful start
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });
        window.addEventListener('keydown', handleInteraction);

        return () => {
            music.stop();
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (!sound) return;
        if (playing) {
            sound.pause();
        } else {
            sound.play();
        }
    };

    return (
        <div className="music-player-container">
            <AnimatePresence>
                {playing && (
                    <motion.div
                        className="now-playing"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        Now Playing: Can't Help Falling In Love
                    </motion.div>
                )}
            </AnimatePresence>
            <button className="music-btn" onClick={togglePlay}>
                {playing ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
        </div>
    );
};

export default MusicPlayer;
