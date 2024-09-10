import { getBookDateCabinById, getCabinById } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabins, bookedDates] = await Promise.all([
      getCabinById(cabinId),
      getBookDateCabinById(cabinId),
    ]);
    return Response.json({ cabins, bookedDates });
  } catch {
    return Response.json("Requesting Failed no Data");
  }
}
