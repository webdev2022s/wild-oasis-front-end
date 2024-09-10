"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

export default function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  const handleDeleteBtn = () => {
    if (confirm("Are sure you want to delete this?"))
      startTransition(() => onDelete(bookingId));
  };

  return (
    <button
      onClick={handleDeleteBtn}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="w-5 h-5  text-red-600 group-hover:text-red-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}
