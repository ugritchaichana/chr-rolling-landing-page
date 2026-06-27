'use client';

import { useEffect } from 'react';
import '../sentry.client.config';

export function SentryLoader() {
  // This ensures the client config is loaded in Turbopack development mode
  return null;
}
