/** Canonical site origin — from SITE_URL at build time, or request origin in dev. */
export function resolveSiteOrigin(site: URL | string | undefined, requestUrl: URL): string {
  if (site) {
    const href = typeof site === 'string' ? site : site.href;
    return href.replace(/\/$/, '');
  }
  return requestUrl.origin;
}

export function resolveCanonical(site: URL | string | undefined, requestUrl: URL): string {
  const origin = resolveSiteOrigin(site, requestUrl);
  const path = requestUrl.pathname.endsWith('/') && requestUrl.pathname !== '/'
    ? requestUrl.pathname
    : requestUrl.pathname.replace(/\/$/, '') || '/';
  return `${origin}${path === '/' ? '/' : path}`;
}
