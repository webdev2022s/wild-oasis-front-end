import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import "./_styles/global.css";

import { Josefin_Sans } from "next/font/google";

const josefinSan = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s  / The Wild Oasis",
    default: "Home / The Wild Oasis",
  },
  description: "Afforadable and Luxurious Cabins to netflix and chill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSan.className}  bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 py-12 px-8 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
