"use client";
import {
  HomeIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },

  {
    name: "Reservations",
    href: "/account/reservation",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

export default function SideNavigation() {
  const highlighted = usePathname();
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`${
                link.href === highlighted ? "bg-primary-900 " : ""
              } py-3 px-5 hover:bg-primary-900 transition-colors flex item-center gap-4 font-semibold text-primary-200 `}
            >
              {link.icon} <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
