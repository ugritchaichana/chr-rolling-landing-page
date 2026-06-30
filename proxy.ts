import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'th']
const defaultLocale = 'th'

function getLocale(request: NextRequest): string {
  // Check cookie
  const cookieLocale = request.cookies.get('chp-locale')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage && acceptLanguage.toLowerCase().includes('th')) {
    return 'th'
  }

  // Determine locale based on geo (Vercel)
  const country = request.headers.get('x-vercel-ip-country') || ''
  if (country === 'TH') {
    return 'th'
  }

  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  // Return redirect response
  const response = NextResponse.redirect(request.nextUrl)
  
  // Set the cookie on redirect so that it's persisted
  response.cookies.set('chp-locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, and static files containing a dot
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}
