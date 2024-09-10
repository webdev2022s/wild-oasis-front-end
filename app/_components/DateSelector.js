"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";

const backgroundDropdown = {
  backgroundColor: "#141c24",
};

function isAlreadyBooked(range, dateArr) {
  return (
    range.from &&
    range.to &&
    dateArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

export default function DateSelector({ setting, bookDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  const { regularPrice, discount } = cabin;

  const displayRange = isAlreadyBooked(range, bookDates) ? {} : range;

  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLenght, maxBookingLenght } = setting;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        styles={{
          dropdown: backgroundDropdown,
        }}
        className="p-12 place-self-center"
        mode="range"
        captionLayout="dropdown"
        numberOfMonths={2}
        min={minBookingLenght}
        max={maxBookingLenght}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        onSelect={(range) => setRange(range)}
        selected={displayRange}
        disabled={(curDate) =>
          isPast(!curDate) ||
          bookDates.some((dates) => isSameDay(dates, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>{" "}
                <span className="line-through font-semibold text-primary-700 text-2xl">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>

          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>{" "}
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">{cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>
        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
