import Image from "next/image";
import background from "@/public/bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24 ">
      <Image
        src={background}
        quality={100}
        fill
        placeholder="blur"
        className="object-cover object-top"
        alt="background image"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise
        </h1>
        <Link
          href={"/cabin"}
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </main>
  );
}
