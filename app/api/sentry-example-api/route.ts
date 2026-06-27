import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  throw new Error('Sentry Test Error from API Route (Server-side)');
  return NextResponse.json({ name: 'Sentry Test API' });
}
