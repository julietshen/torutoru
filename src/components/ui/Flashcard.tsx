"use client";

import { useState } from "react";
import type { Phrase } from "@/types";
import "./Flashcard.css"; // We'll create this file next for the flip animation

const SpeakerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Flashcard({ phrase }: { phrase: Phrase }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSound = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping when clicking the icon
    // TODO: Add text-to-speech functionality
    console.log("TTS for:", phrase.gujarati_script);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
        {/* Front of the card */}
        <div className="card flashcard-front bg-accent text-accent-content shadow-md p-4 flex flex-col">
          {/* Main content area, takes up all available space and centers its content */}
          <div className="flex-grow grid place-content-center text-center">
            <div>
              <h2 className="card-title text-5xl font-bold leading-tight">{phrase.gujarati_script}</h2>
              <p className="text-2xl mt-2">{phrase.romanized}</p>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex justify-between items-center w-full pt-2">
            <div className="badge badge-outline border-accent-content/50 text-accent-content/70 capitalize">
              {phrase.category}
            </div>
            <button
              className="btn btn-ghost btn-sm btn-circle"
              onClick={handleSound}
            >
              <SpeakerIcon />
            </button>
          </div>
        </div>

        {/* Back of the card */}
        <div className="card flashcard-back bg-accent text-accent-content shadow-md grid place-content-center p-4">
          <p className="text-2xl font-semibold italic text-center">
            {`"${phrase.english}"`}
          </p>
        </div>
      </div>
    </div>
  );
} 