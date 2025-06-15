import Link from "next/link";

const categories = ["Family", "Dining", "Greetings"];

export default function PhrasesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Phrases</h1>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/phrases/${category.toLowerCase()}`}
            className="btn btn-primary btn-lg h-24 text-2xl"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
} 