import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-center my-8 md:my-12">
        <h1 className="text-4xl md:text-5xl font-bold">Kem Cho!</h1>
        <h2 className="text-2xl md:text-3xl mt-2">
          Ready to Learn Gujarati?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column: Illustration Card */}
        <div className="card bg-primary text-primary-content shadow-xl">
          <figure className="p-6">
            <Image
              src="/kem-cho-illustration.png"
              alt="Illustration of a person waving"
              width={300}
              height={300}
              priority
            />
          </figure>
          <div className="card-body items-center text-center pt-0">
            <h3 className="card-title text-3xl">કેમ છો?</h3>
            <p>How are you?</p>
          </div>
        </div>

        {/* Middle Column: Welcome Text */}
        <div className="text-center md:col-span-1">
          <p className="text-xl mb-6">
            Start your journey to connect with family and culture.
          </p>
          <button className="btn btn-neutral">Get Started</button>
        </div>

        {/* Right Column: Progress Card */}
        <div className="card bg-base-100 text-base-content shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
          <div className="space-y-2">
            <p>
              <span className="font-bold">9 / 100</span> vocab items studied
            </p>
            <p>
              <span className="font-bold">2 hours</span> of studying
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
