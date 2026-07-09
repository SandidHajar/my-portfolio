import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminPageClient from './AdminPageClient';
import { getAdminCookieName, isAdminTokenValid } from '../../lib/admin-auth';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(getAdminCookieName())?.value;

  if (!isAdminTokenValid(session)) {
    redirect('/admin-login');
  }

  return <AdminPageClient />;
}
