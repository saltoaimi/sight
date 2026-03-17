import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@sight/i18n";
import { countries, defaultCountry } from "@sight/shared";

const validCountries = new Set(countries);
const validLocales = new Set(locales);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const second = segments[1];

  // / → /ae/en
  if (segments.length === 0) {
    return NextResponse.redirect(new URL(`/${defaultCountry}/${defaultLocale}`, request.url));
  }

  // /ae → /ae/en, /sa → /sa/en
  if (segments.length === 1 && validCountries.has(first as any)) {
    return NextResponse.redirect(new URL(`/${first}/${defaultLocale}`, request.url));
  }

  // /en/compare/... → /ae/en/compare/... (legacy locale-only URLs)
  if (segments.length >= 1 && validLocales.has(first as any) && !validCountries.has(first as any)) {
    const rest = segments.slice(1).join("/");
    return NextResponse.redirect(new URL(`/${defaultCountry}/${first}${rest ? "/" + rest : ""}`, request.url));
  }

  // /ae/en/... → valid, continue
  if (validCountries.has(first as any) && validLocales.has(second as any)) {
    return NextResponse.next();
  }

  // /ae/compare/... → /ae/en/compare/...
  if (validCountries.has(first as any) && !validLocales.has(second as any)) {
    const rest = segments.slice(1).join("/");
    return NextResponse.redirect(new URL(`/${first}/${defaultLocale}/${rest}`, request.url));
  }

  // Anything else → /ae/en
  return NextResponse.redirect(new URL(`/${defaultCountry}/${defaultLocale}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
