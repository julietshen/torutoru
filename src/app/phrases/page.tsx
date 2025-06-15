import PhraseCard from "@/components/ui/PhraseCard";
import { allPhrases } from "@/data/content";

export default function PhrasesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Phrases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPhrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
      </div>
    </div>
  );
} 