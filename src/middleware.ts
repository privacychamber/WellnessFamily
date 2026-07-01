import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Only protect /admin and /api/content paths
  if (req.nextUrl.pathname.startsWith('/admin') || req.nextUrl.pathname.startsWith('/api/content')) {
    
    // Get the basic auth credentials from the request headers
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      const expectedUser = process.env.ADMIN_USERNAME;
      const expectedPwd = process.env.ADMIN_PASSWORD;

      if (user === expectedUser && pwd === expectedPwd) {
        return NextResponse.next();
      }
    }

    // Require Basic Auth if credentials are not provided or incorrect
    url.pathname = '/api/auth';
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/content/:path*'],
};
