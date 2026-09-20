import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "../i18n/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

const protectedRoutes = ["/customer", "/provider", "/bookings"];
const authRoutes = ["/signin", "/signup"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // strip locale prefix to check route type
  const pathnameWithoutLocale = pathname.replace(/^\/(en|hi)/, "");

  if (
    protectedRoutes.some((r) => pathnameWithoutLocale.startsWith(r)) &&
    !token
  ) {
    const locale = pathname.split("/")[1] ?? defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/signin`, request.url));
  }

  if (authRoutes.some((r) => pathnameWithoutLocale.startsWith(r)) && token) {
    const locale = pathname.split("/")[1] ?? defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
