// import { NextResponse } from "next/server";

import { auth } from "@/app/_lib/auth";
import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request.url);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

// export const config = {
//   matcher: ["/account"],
// };

// export const middleware = auth;

export async function middleware(request) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (session?.user && pathname === "/login")
    return NextResponse.redirect(new URL("/", request.url));
  if (pathname.startsWith("/account") && !session?.user)
    return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/account", "/login", "/account/:path*"],
};
