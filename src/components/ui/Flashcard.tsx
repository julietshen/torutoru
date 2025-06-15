"use client";

import { useState } from "react";
import type { Phrase } from "@/types";
import "./Flashcard.css"; // We'll create this file next for the flip animation

export default function Flashcard({ phrase }: { phrase: Phrase }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? "is-flipped" : ""}`}>
        {/* Front of the card */}
        <div className="card flashcard-front bg-primary text-primary-content shadow-md justify-center items-center">
          <div className="card-body text-center">
            <p className="text-2xl font-semibold italic">{`"${phrase.english}"`}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="card flashcard-back bg-primary text-primary-content shadow-md">
          <div className="card-body p-4 justify-center items-center">
            <h2 className="card-title text-3xl font-bold">{phrase.gujarati}</h2>
            <p className="text-xl -mt-2">{phrase.romanized}</p>
            <div className="badge badge-outline border-primary-content/50 text-primary-content/70 capitalize mt-4">
              {phrase.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 