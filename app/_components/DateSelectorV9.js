"use client";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

export default function DateSelector() {
  const defaultClassNames = getDefaultClassNames();
  const discount = 23;
  const regularPrice = 23;
  const numNights = 23;
  const cabinPrice = 23;

  console.log(DayPicker);
  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        mode="range"
        captionLayout="dropdown"
        numberOfMonths={2}
        hideNavigation
        startMonth={new Date()}
        endMonth={new Date(2030, 11)}
        classNames={{
          root: `${defaultClassNames.root} place-self-center`,
          caption_label: `${defaultClassNames.caption_label}`,
          dropdown: `${defaultClassNames.dropdown}`,
          months: `${defaultClassNames.months}`,
          weekday: `${defaultClassNames.weekday}`,
          week: `${defaultClassNames.week}`,
          dropdowns: `${defaultClassNames.dropdowns}`,
        }}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">{regularPrice - discount}</span>{" "}
                <span className="line-through font-semibold text-primary-700 text-2xl">
                  {regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">{regularPrice}</span>
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
        <button className="border border-primary-800 py-2 px-4 text-sm font-semibold">
          Clear
        </button>
      </div>
    </div>
  );
}
