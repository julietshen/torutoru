"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import WordCard from "@/components/ui/WordCard";
import WordFlashcard from "@/components/ui/WordFlashcard";
import type { Word } from "@/types";

export default function LearnPage() {
  const [isListMode, setIsListMode] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("/torutoru_vocabulary_200_surti.csv");
        const reader = response.body?.getReader();
        const result = await reader?.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result?.value);
        
        Papa.parse(csv, {
          header: true,
          complete: (results) => {
            // Filter out any empty rows that PapaParse might create
            const validWords = results.data.filter(d => (d as any).english && (d as any).gujarati_script);
            setWords(validWords as Word[]);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing words:", error);
        setLoading(false);
      }
    };

    fetchWords();
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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Vocabulary</h1>
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
        {words.map((word) =>
          word.english && word.gujarati_script ? (
            isListMode ? (
              <WordCard key={word.id} word={word} />
            ) : (
              <WordFlashcard key={word.id} word={word} />
            )
          ) : null
        )}
      </div>
    </div>
  );
} 