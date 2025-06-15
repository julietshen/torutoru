import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-primary text-primary-content rounded-lg min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Kem Cho!</h1>
          <p className="py-6 text-2xl">
            Start your journey to connect with family and culture.
          </p>
          <Link href="/vocabulary" className="btn btn-accent btn-lg">
            Get Started
          </Link>
        </div>
        <div className="card bg-base-100 text-base-content shadow-xl max-w-sm shrink-0">
          <div className="card-body items-center text-center">
            <Image
              src="/kem-cho-illustration.png"
              alt="Illustration of a person waving"
              width={300}
              height={300}
              priority
            />
            <h3 className="card-title text-3xl mt-4">કેમ છો?</h3>
            <p className="text-lg -mt-2">Kem cho?</p>
            <p>How are you?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
