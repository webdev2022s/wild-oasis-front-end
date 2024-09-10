"use client";

const { createContext, useContext, useState } = require("react");

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  const value = { range, setRange, resetRange };
  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("Context is Out of Range");
  return context;
}

export { ReservationProvider, useReservation };
