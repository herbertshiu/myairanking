import { SITE_META, LOCALE_CONFIG, DEFAULT_LOCALE } from './i18n/locales';

export { SITE_META, LOCALE_CONFIG, DEFAULT_LOCALE };
export type { Locale } from './i18n/locales';

/** @deprecated Use SITE_META[locale] instead */
export const SITE = {
  ...SITE_META.en,
  locale: LOCALE_CONFIG.en.ogLocale,
  language: LOCALE_CONFIG.en.language,
  keywords: LOCALE_CONFIG.en.keywords,
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
