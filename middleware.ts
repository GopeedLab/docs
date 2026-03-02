import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Remove .html extension if present
  const cleanPath = pathname.endsWith(".html")
    ? pathname.slice(0, -5)
    : pathname;

  // Check for supported language prefix (zh or zh-TW)
  const langMatch = cleanPath.match(/^\/(zh|zh-TW)(\/.*)?$/);

  let destination: string;
  if (langMatch) {
    const lang = langMatch[1];
    const rest = langMatch[2] ?? "";
    destination = `https://gopeed.com/${lang}/docs${rest}`;
  } else {
    destination = `https://gopeed.com/docs${cleanPath}`;
  }

  return NextResponse.redirect(destination, { status: 301 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
