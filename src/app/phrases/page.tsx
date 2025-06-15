"use client";

import { useState } from "react";
import PhraseCard from "@/components/ui/PhraseCard";
import Flashcard from "@/components/ui/Flashcard";
import { allPhrases } from "@/data/content";

export default function PhrasesPage() {
  const [isListMode, setIsListMode] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Phrases</h1>
        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className={`label-text text-accent-content transition-all ${!isListMode ? 'font-bold' : 'opacity-60'}`}>Flashcard Mode</span>
            <input
              type="checkbox"
              className="toggle toggle-accent"
              checked={!isListMode}
              onChange={() => setIsListMode(!isListMode)}
            />
            <span className={`label-text text-accent-content transition-all ${isListMode ? 'font-bold' : 'opacity-60'}`}>List View</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPhrases.map((phrase) =>
          isListMode ? (
            <PhraseCard key={phrase.id} phrase={phrase} />
          ) : (
            <Flashcard key={phrase.id} phrase={phrase} />
          )
        )}
      </div>
    </div>
  );
} 