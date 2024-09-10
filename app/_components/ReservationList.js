"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/action";

export default function ReservationList({ booking }) {
  const [optimisticBooking, optimisticDelete] = useOptimistic(
    booking,
    (curBooking, bookingId) =>
      curBooking.filter((data) => data.id !== bookingId)
  );

  const onDelete = async (bookingId) => {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  };

  return (
    <div className="h-[400px] overflow-auto scroll p-4 ">
      {" "}
      <ul className="space-y-6">
        {optimisticBooking.map((booking) => (
          <ReservationCard
            bookings={booking}
            key={booking.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
