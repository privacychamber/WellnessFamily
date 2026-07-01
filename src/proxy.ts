import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Exclude /admin/login from check
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect /admin and /api/content paths
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/content')) {
    const sessionCookie = req.cookies.get('admin_session');

    if (sessionCookie?.value) {
      try {
        const authValue = sessionCookie.value;
        const [user, pwd] = atob(authValue).split(':');

        const expectedUser = process.env.ADMIN_USERNAME;
        const expectedPwd = process.env.ADMIN_PASSWORD;

        if (user === expectedUser && pwd === expectedPwd) {
          return NextResponse.next();
        }
      } catch (e) {
        // Fall through to unauthorized if decoding fails
      }
    }

    // Redirect to login if accessing page, or return 401 for API
    if (pathname.startsWith('/api/content')) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const loginUrl = new URL('/admin/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/content/:path*'],
};
