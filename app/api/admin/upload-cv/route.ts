import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { getAdminTokenFromCookieHeader, isAdminTokenValid } from '../../../../lib/admin-auth';
import { readSiteContent, writeSiteContent } from '../../../../lib/site-content';

export async function POST(request: Request) {
  const session = getAdminTokenFromCookieHeader(request.headers.get('cookie'));
  if (!isAdminTokenValid(session)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File) || file.type !== 'application/pdf') {
    return NextResponse.json({ ok: false, message: 'PDF file required.' }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'cv');
  await fs.mkdir(uploadDir, { recursive: true });

  const targetName = 'hajar-cv.pdf';
  const targetPath = path.join(uploadDir, targetName);
  const bytes = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(targetPath, bytes);

  const current = await readSiteContent();
  const cvUrl = `/uploads/cv/${targetName}`;
  await writeSiteContent({
    ...current,
    cvUrl,
    cvLabel: file.name.replace(/\.pdf$/i, '') || current.cvLabel
  });

  return NextResponse.json({ ok: true, cvUrl, cvLabel: file.name.replace(/\.pdf$/i, '') });
}
