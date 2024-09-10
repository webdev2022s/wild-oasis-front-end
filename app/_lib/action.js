"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBooking } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction(formData) {
  const google = formData.get("google");
  const github = formData.get("github");

  await signIn(google || github, { redirectTo: "/account" });
}

export async function signInActionGoogle() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signInActionGitHub() {
  await signIn("github", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuestUser(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update the profile");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const nationalID = formData.get("nationalID");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please Provide  a Valid National ID");

  const updateData = { nationalID, nationality, countryFlag };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest Profile Cant be updated");
  revalidatePath("/account/profile");
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be loggin to Access this file");

  const booking = await getBooking(session.user.guestId);
  const getBookingId = booking.map((data) => data.id);

  if (!getBookingId.includes(bookingId))
    throw new Error("Your'e not authorized to delete this booking");

  let query = await supabase.from("bookings");
  if (bookingId) query = query.delete().eq("id", bookingId);

  const { error } = await query;

  if (error) throw new Error("Cant Delete This Reservation");

  revalidatePath("/account/reservation");
}

export async function updateReserationDetails(formData) {
  const bookingId = Number(formData.get("reservationId"));

  const session = await auth();
  if (!session) throw new Error("You must be logged in to update the profile");

  //Authorization
  const guestBooking = await getBooking(session.user.guestId);
  const guestBookingId = guestBooking.map((data) => data.id);
  if (!guestBookingId.includes(bookingId))
    throw new Error("Your'e not authorized to update this booking");

  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations");
  const updatedData = { numGuests, observations };

  const { error } = await supabase
    .from("bookings")
    .update(updatedData)
    .eq("id", bookingId);

  if (error) throw new Error("failed to update reservation");

  revalidatePath(`/account/reservation/edit/${bookingId}`);
  revalidatePath(`/account/reservation`);

  redirect("/account/reservation");
}

//for many data in a form we can use Object.entries(formData.entries())

export async function createBooking(bookingDetails, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to create booking");

  const dataDetail = {
    ...bookingDetails,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations".slice(0, 100)),
    guestId: session.user.guestId,
    extraPrice: 0,
    totalPrice: bookingDetails.cabinPrice,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: false,
  };
  if (!dataDetail.startDate || !dataDetail.endDate)
    throw new Error("Selected day must not empty");
  if (!dataDetail.numGuests)
    throw new Error("Number of guest must not be empty");

  const { error } = await supabase.from("bookings").insert(dataDetail);

  if (error) throw new Error("cant create new booking");

  revalidatePath(`/cabin/${bookingDetails.cabinId}`);
  redirect("/account/reservation");
}
