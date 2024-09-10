import { unstable_noStore as noStore } from "next/cache";
import { getCabin } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({ filter }) {
  // noStore();
  const cabin = await getCabin();

  if (!cabin.length) return null;
  let filteredDataCabin;

  if (filter === "all") filteredDataCabin = cabin;

  if (filter === "small")
    filteredDataCabin = cabin.filter((data) => data.maxCapacity <= 3);
  if (filter === "medium")
    filteredDataCabin = cabin.filter(
      (data) => data.maxCapacity >= 4 && data.maxCapacity <= 7
    );
  if (filter === "large")
    filteredDataCabin = cabin.filter((data) => data.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredDataCabin.map((cabins) => (
        <CabinCard cabins={cabins} key={cabins.id} />
      ))}
    </div>
  );
}
