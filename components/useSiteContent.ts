'use client';

import { useEffect, useState } from 'react';
import type { SiteContent } from '../lib/site-content';

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    let alive = true;
    fetch('/api/site-content')
      .then((res) => res.json())
      .then((data) => {
        if (alive) setContent(data);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  return content;
}
