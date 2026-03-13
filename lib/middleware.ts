import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // Block dashboard if not logged in
  if (pathname.startsWith("/student") && !token) {
    return NextResponse.redirect(new URL("/student/login", request.url));
  }

  // Prevent logged-in users from seeing login page
  if (pathname.startsWith("/student/login") && token) {
    return NextResponse.redirect(new URL("/student", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/student/:path*",
    "/student/login"
  ],
};