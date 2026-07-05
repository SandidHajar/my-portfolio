import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { getAdminTokenFromCookieHeader, isAdminTokenValid } from '../../../../lib/admin-auth';

function sanitizeFileName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9.\-_]/g, '-');
}

export async function POST(request: Request) {
  const session = getAdminTokenFromCookieHeader(request.headers.get('cookie'));
  if (!isAdminTokenValid(session)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File) || !file.type.startsWith('image/')) {
    return NextResponse.json({ ok: false, message: 'Image file required.' }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'projects');
  await fs.mkdir(uploadDir, { recursive: true });

  const targetName = `${Date.now()}-${sanitizeFileName(file.name)}`;
  const targetPath = path.join(uploadDir, targetName);
  const bytes = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(targetPath, bytes);

  return NextResponse.json({ ok: true, imageUrl: `/uploads/projects/${targetName}` });
}
