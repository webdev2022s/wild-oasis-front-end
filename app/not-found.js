import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font font-semibold">
        Status 404: Page could not found :(
      </h1>
      <Link
        href={"/"}
        className="inline-block bg-accent-400 text-primary-500 text-lg py-3 px-6 hover:bg-accent-600 hover:text-primary-950"
      >
        Go back home page &rarr;
      </Link>
    </main>
  );
}
