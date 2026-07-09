const COOKIE_NAME = 'hajar-admin-session';

export function isAdminTokenValid(token: string | undefined | null) {
  const expectedToken = process.env.ADMIN_SESSION_TOKEN;
  return Boolean(token && expectedToken && token === expectedToken);
}

export function getAdminTokenFromCookieHeader(cookieHeader: string | null) {
  return cookieHeader?.match(new RegExp(COOKIE_NAME + '=([^;]+)'))?.[1] ?? null;
}

export function getAdminCookieName() {
  return COOKIE_NAME;
}
