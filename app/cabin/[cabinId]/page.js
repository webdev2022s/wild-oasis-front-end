import Reservations from "@/app/_components/Reservations";
import Cabin from "@/app/_components/Cabin";
import { getCabin, getCabinById } from "@/app/_lib/data-service";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export async function generateMetadata({ params }) {
  const { name } = await getCabinById(params.cabinId);

  return { title: `Cabin ${name} ` };
}

export async function generateStaticParams() {
  const cabins = await getCabin();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}
export default async function Page({ params }) {
  const cabin = await getCabinById(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div className="mb-10">
        <h2 className="text-5xl font-semibold text-center text-accent-500">
          Reserve Cabin {cabin.name} today. Pay on arrival
        </h2>
      </div>
      <Suspense fallback={<Spinner />}>
        <Reservations cabin={cabin} />
      </Suspense>
    </div>
  );
}
