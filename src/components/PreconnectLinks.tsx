// components/PreconnectLinks.tsx
'use client';

import { useEffect } from 'react';

export default function PreconnectLinks() {
  useEffect(() => {
    const ga = document.createElement('link');
    ga.rel = 'preconnect';
    ga.href = 'https://www.google-analytics.com';
    document.head.appendChild(ga);

    const gtm = document.createElement('link');
    gtm.rel = 'preconnect';
    gtm.href = 'https://www.googletagmanager.com';
    document.head.appendChild(gtm);
  }, []);

  return null;
}