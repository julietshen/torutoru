import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full p-4 text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Kem Cho!</h1>
        <h2 className="text-2xl mt-2">Ready to Learn Gujarati?</h2>

        <div className="card bg-accent text-neutral shadow-xl my-8 w-full">
          <figure className="px-10 pt-10">
            {/* Placeholder for illustration */}
            <div className="bg-neutral/20 h-32 w-full rounded-lg"></div>
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-3xl">કેમ છો?</h3>
            <p>How are you?</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link href="/learn" className="btn btn-neutral">
          Vocabulary
        </Link>
        <Link href="/phrases" className="btn btn-neutral">
          Phrases
        </Link>
        <Link href="/quiz" className="btn btn-neutral">
          Quiz
        </Link>
        <Link href="/account" className="btn btn-neutral">
          Progress
        </Link>
      </div>
    </div>
  );
}
