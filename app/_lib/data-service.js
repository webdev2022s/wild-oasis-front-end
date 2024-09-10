import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { eachDayOfInterval } from "date-fns";

export const getCountries = async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const data = await res.json();

    return data;
  } catch {
    throw new Error("could not fetch countries");
  }
};

export const getCabin = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  await new Promise((res) => setTimeout(res, 1000));

  if (error) throw new Error("Cant get cabins data");

  return data;
};

export const getCabinById = async (id) => {
  let query = supabase.from("cabins");

  if (id) query = query.select("*").eq("id", id).single();

  const { data, error } = await query;

  await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error.message);
    notFound();
  }

  return data;
};

export const getBookDateCabinById = async (id) => {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  let query = supabase.from("bookings");

  if (id)
    query = query
      .select("*")
      .eq("cabinId", id)
      .or(`startDate.gte.${today},status.eq.check-in`);

  const { data, error } = await query;

  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error.message);
  }

  const bookDates = data
    .map((dates) =>
      eachDayOfInterval({
        start: new Date(dates.startDate),
        end: new Date(dates.endDate),
      })
    )
    .flat();

  return bookDates;
};

export const getSetting = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error.message);
  }

  return data;
};

export async function getGuest(email) {
  let query = supabase.from("guests");

  if (email) query = query.select("*").eq("email", email).single();
  const { data, error } = await query;

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export const createGuest = async (newGuest) => {
  const { data, error } = await supabase.from("guests").insert({ ...newGuest });

  if (error) throw new Error("Cant create new guest");

  return data;
};

export const getBooking = async (guestId) => {
  let query = supabase.from("bookings");

  if (guestId)
    query = query
      .select(
        "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)"
      )
      .eq("guestId", guestId)
      .order("startDate");

  const { data, error } = await query;

  if (error) throw new Error("Cant load Booking data");

  return data;
};
