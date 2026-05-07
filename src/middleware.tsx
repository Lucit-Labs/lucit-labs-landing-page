import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token');

  const requestHeaders = new Headers(request.headers);

  if (token) {
    requestHeaders.set('Authorization', `Bearer ${token.value}`);
  }

  const protectedRoutes = ['/dashboard'];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (request.nextUrl.pathname === '/' && token) {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'never',
});

export const config = {
  matcher: [
    /* Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
