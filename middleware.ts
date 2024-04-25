import { NextRequest, NextResponse } from "next/server";

// add protected route here
const protectedRoutes = ["/admin/dashboard", "/admin/dashboard", "/admin/activity", "/admin/user"];

export default function middleware(req: NextRequest) {
  const isAuthenticated = true;
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
