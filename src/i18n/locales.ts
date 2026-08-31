export type Locale = 'en' | 'zh';

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_CONFIG = {
  en: {
    label: 'English',
    htmlLang: 'en-HK',
    ogLocale: 'en_HK',
    prefix: '',
    language: 'en',
    keywords: [] as string[],
  },
  zh: {
    label: '中文',
    htmlLang: 'zh-HK',
    ogLocale: 'zh_HK',
    prefix: '/zh',
    language: 'zh',
    keywords: [] as string[],
  },
} as const;

export const SITE_META = {
  en: {
    name: 'Search Visibility Guide',
    shortName: 'Visibility Guide',
    tagline: 'Search visibility reference',
    description:
      'Independent guide to search engines, AI-generated answers, and practical visibility topics for Hong Kong and Greater Bay Area businesses.',
    region: 'HK',
  },
  zh: {
    name: '搜尋可見度指南',
    shortName: '可見度指南',
    tagline: '搜尋可見度參考',
    description:
      '獨立指南：涵蓋搜尋引擎、AI 生成答案及實務可見度主題，供香港及大灣區企業參考。',
    region: 'HK',
  },
};
