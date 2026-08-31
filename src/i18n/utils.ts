import { DEFAULT_LOCALE, LOCALE_CONFIG, type Locale } from './locales';

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/zh') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3) || '/';
  return pathname;
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const prefix = LOCALE_CONFIG[locale].prefix;
  if (normalized === '/') return prefix || '/';
  return `${prefix}${normalized}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

export function getAlternatePath(pathname: string, targetLocale: Locale): string {
  const base = stripLocalePrefix(pathname);
  return localePath(targetLocale, base);
}

export function insightPath(locale: Locale, slug: string): string {
  return localePath(locale, `/insights/${slug}`);
}

export function getLangUrls(
  pathname: string,
  overrides?: Partial<Record<Locale, string>>,
): Record<Locale, string> {
  const base = stripLocalePrefix(pathname);
  return {
    en: overrides?.en ?? localePath('en', base),
    zh: overrides?.zh ?? localePath('zh', base),
  };
}

export function getInsightLangUrls(
  locale: Locale,
  slug: string,
  alternateSlug?: string,
): Record<Locale, string> {
  const enSlug = locale === 'en' ? slug : (alternateSlug ?? slug);
  const zhSlug = locale === 'zh' ? slug : (alternateSlug ?? slug);
  return {
    en: insightPath('en', enSlug),
    zh: insightPath('zh', zhSlug),
  };
}

export function getInsightAlternateUrl(
  locale: Locale,
  slug: string,
  alternateSlug?: string,
): string | undefined {
  if (!alternateSlug || !import.meta.env.SITE) return undefined;
  const site = String(import.meta.env.SITE).replace(/\/$/, '');
  const altLocale = getAlternateLocale(locale);
  return `${site}${insightPath(altLocale, alternateSlug)}`;
}

export { DEFAULT_LOCALE, LOCALE_CONFIG, type Locale };
