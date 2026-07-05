const COOKIE_NAME = 'hajar-admin-session';

export function isAdminTokenValid(token: string | undefined | null) {
  return token === process.env.ADMIN_SESSION_TOKEN;
}

export function getAdminTokenFromCookieHeader(cookieHeader: string | null) {
  return cookieHeader?.match(new RegExp(`${COOKIE_NAME}=([^;]+)`))?.[1] ?? null;
}

export function getAdminCookieName() {
  return COOKIE_NAME;
}
