"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="font-semibold text-3xl">Something went wrong</h1>
      <p className="text-xl text-red-500">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-accent-400 text-primary-800 px-6 py-3 text-lg hover:bg-accent-600 hover:text-primary-950 transition-all"
      >
        Try Again!
      </button>
    </main>
  );
}
