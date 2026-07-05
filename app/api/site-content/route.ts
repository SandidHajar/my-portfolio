import { NextResponse } from 'next/server';
import { readSiteContent, writeSiteContent } from '../../../lib/site-content';
import { getAdminTokenFromCookieHeader, isAdminTokenValid } from '../../../lib/admin-auth';
import type { ManagedEducationItem, ManagedProjectItem } from '../../../lib/types';

export async function GET() {
  return NextResponse.json(await readSiteContent());
}

export async function PUT(request: Request) {
  const session = getAdminTokenFromCookieHeader(request.headers.get('cookie'));
  if (!isAdminTokenValid(session)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const content = (await request.json()) as {
    cvUrl?: string;
    cvLabel?: string;
    projects?: ManagedProjectItem[];
    education?: ManagedEducationItem[];
  };
  const current = await readSiteContent();
  await writeSiteContent({
    ...current,
    cvUrl: content.cvUrl ?? current.cvUrl,
    cvLabel: content.cvLabel ?? current.cvLabel,
    extraProjects: {
      en: content.projects ?? current.extraProjects.en,
      fr: content.projects ?? current.extraProjects.fr
    },
    extraEducation: {
      en: content.education ?? current.extraEducation.en,
      fr: content.education ?? current.extraEducation.fr
    }
  });
  return NextResponse.json({ ok: true });
}
