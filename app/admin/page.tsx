import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminPageClient from './AdminPageClient';
import { getAdminCookieName, isAdminTokenValid } from '../../lib/admin-auth';

export default function AdminPage() {
  const session = cookies().get(getAdminCookieName())?.value;

  if (!isAdminTokenValid(session)) {
    redirect('/admin-login');
  }

  return <AdminPageClient />;
}
