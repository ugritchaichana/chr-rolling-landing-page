import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALE_COOKIE = 'chp-locale'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // Only run for root or specific paths to not mess with static files
  if (request.nextUrl.pathname.startsWith('/_next') || request.nextUrl.pathname.includes('.')) {
    return response
  }

  // Check if cookie exists
  const localeCookie = request.cookies.get(LOCALE_COOKIE)
  if (!localeCookie) {
    // Determine locale based on Accept-Language
    const acceptLang = request.headers.get('accept-language') || ''
    // Determine locale based on geo (Vercel)
    const country = request.headers.get('x-vercel-ip-country') || ''
    
    let defaultLocale = 'en'
    if (country === 'TH' || acceptLang.toLowerCase().includes('th')) {
      defaultLocale = 'th'
    }
    
    response.cookies.set(LOCALE_COOKIE, defaultLocale, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  }

  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}
