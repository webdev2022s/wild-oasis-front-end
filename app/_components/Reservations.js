import { auth } from "../_lib/auth";
import { getBookDateCabinById, getSetting } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMeesage";
import ReservationFrom from "./ReservationForm";

export default async function Reservations({ cabin }) {
  const [bookedDates, setting] = await Promise.all([
    getBookDateCabinById(cabin.id),
    getSetting(),
  ]);

  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector setting={setting} bookDates={bookedDates} cabin={cabin} />
      {session?.user ? (
        <ReservationFrom
          cabin={cabin}
          user={session.user}
          bookDates={bookedDates}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
