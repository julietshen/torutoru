import Link from "next/link";
import Image from "next/image";
import kemCho from "@/public/kem-cho-illustration.png";

export default function Home() {
  return (
    <div className="flex flex-col h-full text-center">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold">Kem Cho!</h1>
        <h2 className="text-2xl md:text-3xl mt-2">Ready to Learn Gujarati?</h2>

        <div className="card bg-accent text-neutral shadow-xl my-8 w-full max-w-sm">
          <figure className="px-10 pt-10">
            <Image
              src={kemCho}
              alt="Illustration of a person waving"
              width={300}
              height={300}
              priority
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-3xl">કેમ છો?</h3>
            <p>How are you?</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-secondary-focus/50 rounded-t-lg">
        <Link href="/learn" className="btn btn-neutral text-base md:text-lg">
          Vocabulary
        </Link>
        <Link href="/phrases" className="btn btn-neutral text-base md:text-lg">
          Phrases
        </Link>
        <Link href="/quiz" className="btn btn-neutral text-base md:text-lg">
          Quiz
        </Link>
        <Link href="/account" className="btn btn-neutral text-base md:text-lg">
          Progress
        </Link>
      </div>
    </div>
  );
}
