import WordCard from "@/components/ui/WordCard";
import { vocabulary } from "@/data/content";
import Header from "@/components/layout/Header";

export default function VocabularyPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold my-4">Vocabulary</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vocabulary.map((word) => (
            <WordCard key={word.id} word={word} />
          ))}
        </div>
      </main>
    </div>
  );
} 