"use client";

import { updateGuestUser } from "../_lib/action";
import { useFormStatus } from "react-dom";

export default function UpdateProfileForm({ guestUser, children }) {
  const { fullName, email, nationalID, countryFlag } = guestUser;

  return (
    <form
      action={updateGuestUser}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="name">Fuill Name</label>
        <input
          name="fullName"
          id="name"
          defaultValue={fullName}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email Address</label>
        <input
          name="email"
          id="name"
          defaultValue={email}
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label>Where are you from?</label>
          <img
            className="w-5 h-5"
            src={countryFlag}
            alt={`image ${countryFlag}`}
          />
        </div>

        {children}
      </div>
      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          id="nationalD"
          defaultValue={nationalID}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed  disabled:bg-gray-500"
        />
      </div>
      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "Updating..." : "Update Profile"}
    </button>
  );
}
