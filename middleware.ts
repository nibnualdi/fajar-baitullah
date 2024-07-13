import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtFunc } from "./lib/utils/jwtDecode";

export default async function middleware(req: NextRequest) {
  const token = cookies().get("session_token")?.value as string;
  const res = NextResponse.next();

  try {
    const payload = await jwtFunc({ token });
    console.log(payload, "payload dari midd");
    res.cookies.set("showToast", `success_Success to Login`, { httpOnly: false });
  } catch (err) {
    const res = NextResponse.redirect(new URL("/admin/auth/login", req.url));
    console.log(err, "err dari midd");
    res.cookies.set("showToast", `error_${err}`, { httpOnly: false });
    return res;
  }

  return res;
}

export const config = {
  matcher: [
    "/admin/dashboard/:path*",
    "/admin/activity/:path*",
    "/admin/user/:path*",
    "/admin/form/:path*",
  ],
};
