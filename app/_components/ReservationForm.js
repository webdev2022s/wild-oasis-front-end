"use client";
import { differenceInDays, formatISO, isWithinInterval } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/action";
import { useFormStatus } from "react-dom";

function isAlreadyBooked(range, dateArr) {
  return (
    range.from &&
    range.to &&
    dateArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

export default function ReservationFrom({ cabin, user, bookDates }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const displayRange = isAlreadyBooked(range, bookDates) ? {} : range;

  const startDate = displayRange?.from && new Date(displayRange.from);

  const endDate = displayRange?.to && new Date(displayRange.to);

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingDetails = {
    cabinId: id,
    startDate: startDate ? formatISO(startDate) : null,
    endDate: endDate ? formatISO(endDate) : null,
    numNights,
    cabinPrice,
  };

  const createBookingWithDetails = createBooking.bind(null, bookingDetails);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      {displayRange.from !== undefined && displayRange.to !== undefined ? (
        <p>
          {String(startDate)} to {String(endDate)}
        </p>
      ) : null}
      <form
        action={async (formData) => {
          await createBookingWithDetails(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm "
            required
          >
            <option>select number of guests....</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? " guest" : " guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>

          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets. alergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base ">
            Start by selecting dates
          </p>
          {startDate && endDate ? <Button /> : null}
        </div>
      </form>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "Creating Booking ..." : "Reserve now"}
    </button>
  );
}
