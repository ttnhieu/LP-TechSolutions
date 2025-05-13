import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { nextUrl } = request

  const pathname = nextUrl.pathname

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/home']
}
