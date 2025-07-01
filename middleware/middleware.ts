import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { navLinks } from '../constant/navLinks';

// Manually copy the `href`s from Navbar
const validPaths = navLinks.map(link => link.href);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!validPaths.includes(pathname)) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp)).*)'],
};
