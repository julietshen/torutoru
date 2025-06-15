"use client";

import { useState } from "react";
import type { Word } from "@/types";
import "./Flashcard.css"; // Reuse the same CSS for the flip animation

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

export default function WordFlashcard({ word }: { word: Word }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSound = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping when clicking the icon
    // TODO: Add text-to-speech functionality
    console.log("TTS for:", word.gujarati_script);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
        {/* Front of the card */}
        <div className="card flashcard-front bg-primary text-primary-content shadow-md">
          <div className="card-body justify-center items-center text-center p-4">
            <h2 className="card-title text-3xl font-bold">{word.gujarati_script}</h2>
            <p className="text-xl -mt-2">{word.romanized}</p>
          </div>
          <div className="absolute bottom-4 left-4 badge badge-outline border-primary-content/50 text-primary-content/70 capitalize">
            {word.category}
          </div>
          <button
            className="btn btn-ghost btn-sm btn-circle absolute bottom-4 right-4"
            onClick={handleSound}
          >
            <SpeakerIcon />
          </button>
        </div>

        {/* Back of the card */}
        <div className="card flashcard-back bg-primary text-primary-content shadow-md">
          <div className="card-body p-4 justify-center items-center">
            <p className="text-2xl font-semibold italic">
              {`"${word.english}"`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 