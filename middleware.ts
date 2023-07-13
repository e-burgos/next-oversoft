import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest | any) {
  const token = req.cookies.get('token');
  console.log('token', token);
  const { pathname, origin } = req.nextUrl;
  const url = req.url;

  if (url.includes('/login') && token) {
    return NextResponse.redirect(`${origin}/`);
  }

  if (url.includes('/')) {
    if (!token) {
      return NextResponse.redirect(`${origin}/login`);
    }
  }

  if (url.includes('/companies')) {
    if (!token) {
      return NextResponse.redirect(`${origin}/login`);
    }
  }

  return NextResponse.next();
}
