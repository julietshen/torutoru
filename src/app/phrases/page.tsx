import Link from "next/link";

const categories = ["Family", "Dining", "Greetings"];

export default function PhrasesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">
        Phrases
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/phrases/${category.toLowerCase()}`}
            className="btn btn-primary btn-lg h-32 text-2xl"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
} 