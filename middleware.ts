import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAdminCookieName, isAdminTokenValid } from './lib/admin-auth';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = request.cookies.get(getAdminCookieName())?.value;
    if (!isAdminTokenValid(session)) {
      const url = new URL('/admin-login', request.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
