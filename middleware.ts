import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtFunc } from "./lib/utils/jwtDecode";

export default async function middleware(req: NextRequest) {
  const token = cookies().get("session_token")?.value as string;
  try {
    const payload = await jwtFunc({ token });
    console.log(payload, "payload dari midd");
  } catch (err) {
    console.log(err, "err dari midd");
    return NextResponse.redirect(new URL("/admin/auth/login", req.url));
  }
}

export const config = {
  matcher: [
    "/admin/dashboard/:path*",
    "/admin/activity/:path*",
    "/admin/user/:path*",
    "/admin/form/:path*",
  ],
};
