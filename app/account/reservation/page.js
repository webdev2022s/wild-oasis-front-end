import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBooking } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const booking = await getBooking(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {booking.length === 0 ? (
        <p className="text-lg">
          You have no reservation yet. Check out our{" "}
          <Link href={"/cabin"} className="underline text-accent-500 ">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList booking={booking} />
      )}
    </div>
  );
}
