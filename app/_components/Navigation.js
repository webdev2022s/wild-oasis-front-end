import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href={"/cabin"}
            className="hover:text-accent-400 transition-colors"
          >
            Cabin
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="hover:text-accent-400 transition-colors "
          >
            About
          </Link>
        </li>
        {session?.user ? (
          <li>
            <Link
              href={"/account"}
              className="hover:text-accent-400 transition-colors flex gap-4 items-center"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest Area</span>
            </Link>
          </li>
        ) : (
          <Link
            href={"/account"}
            className="hover:text-accent-400 transition-colors"
          >
            Guest Area
          </Link>
        )}
      </ul>
    </nav>
  );
}
