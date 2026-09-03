import type { Locale } from './locales';

export function isChinesePath(pathname: string, searchParams?: URLSearchParams): boolean {
  return pathname === '/zh' || pathname.startsWith('/zh/') || searchParams?.get('lang') === 'zh';
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === 'zh' ? `/zh${normalized === '/' ? '' : normalized}` : normalized;
}
