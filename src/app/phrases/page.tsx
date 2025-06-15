"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import PhraseCard from "@/components/ui/PhraseCard";
import Flashcard from "@/components/ui/Flashcard";
import type { Phrase } from "@/types";

export default function PhrasesPage() {
  const [isListMode, setIsListMode] = useState(false);
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        const response = await fetch("/torutoru-phrases.csv");
        const reader = response.body?.getReader();
        const result = await reader?.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result?.value);
        
        Papa.parse(csv, {
          header: true,
          complete: (results) => {
            const validPhrases = (results.data as Phrase[]).filter(
              (d) => d.english && d.gujarati_script
            );
            setPhrases(validPhrases);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing phrases:", error);
        setLoading(false);
      }
    };

    fetchPhrases();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h1 className="text-3xl font-bold">Phrases</h1>
        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className={`label-text transition-all ${!isListMode ? 'font-bold' : 'opacity-60'}`}>Flashcard Mode</span>
            <input
              type="checkbox"
              className="toggle toggle-accent"
              checked={!isListMode}
              onChange={() => setIsListMode(!isListMode)}
            />
            <span className={`label-text transition-all ${isListMode ? 'font-bold' : 'opacity-60'}`}>List View</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phrases.map((phrase) =>
          phrase.english && phrase.gujarati_script ? (
            isListMode ? (
              <PhraseCard key={phrase.id} phrase={phrase} />
            ) : (
              <Flashcard key={phrase.id} phrase={phrase} />
            )
          ) : null
        )}
      </div>
    </div>
  );
} 