// src/Components/Music.jsx
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import musicAnimation from "../assets/animated-music-icon.json";

export default function MusicButton() {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);

    useEffect(() => {
        const newAudio = new Audio("/music.m4a");
        newAudio.loop = true;
        newAudio.volume = 0.4;
        setAudio(newAudio);
    }, []);

    const startMusic = () => {
        if (!audio) return;
        audio.volume = 0; // start muted
        audio.play().then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
            document.body.style.overflow = "auto";

            // fade in effect
            let vol = 0;
            const fadeIn = setInterval(() => {
                if (vol < 0.4) {
                    vol += 0.05;
                    audio.volume = vol;
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);
        });
    };

    const declineMusic = () => {
        setShowPrompt(false);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        if (showPrompt) {
            document.body.style.overflow = "hidden";
        }
    }, [showPrompt]);

    return (
        <>
            {showPrompt && (
                <div className="music-modal-overlay">
                    <div className="music-modal">
                        <h2>🎶 Enjoy background music?</h2>
                        <p>Would you like to enable music while browsing?</p>
                        <div className="modal-buttons">
                            <button onClick={startMusic} className="yes-btn">Yes, play music</button>
                            <button onClick={declineMusic} className="no-btn">No, thanks</button>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={isPlaying ? audio.pause : startMusic}
                className="music-btn"
                title="Toggle music 🎶"
            >
                <Lottie
                    animationData={musicAnimation}
                    loop={isPlaying}
                    autoplay={isPlaying}
                    style={{ width: 40, height: 40 }}
                />
            </button>
        </>
    );
}
