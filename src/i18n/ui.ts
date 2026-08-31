import type { Locale } from './locales';

export const NAV_LINKS: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: '/services', label: 'Topics' },
    { href: '/insights', label: 'Articles' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  zh: [
    { href: '/services', label: '主題' },
    { href: '/insights', label: '文章' },
    { href: '/about', label: '關於' },
    { href: '/contact', label: '聯絡' },
  ],
};

export const UI = {
  en: {
    skipLink: 'Skip to main content',
    readGuide: 'Read articles',
    readArticles: 'All articles',
    readArticle: 'Read article →',
    viewAllInsights: 'View all articles',
    exploreTopics: 'Browse topics',
    learnMore: 'Learn more',
    contactNote: 'General enquiries',
    sendMessage: 'Send enquiry',
    home: 'Home',
    footerExplore: 'Site',
    footerServices: 'Topics',
    footerContact: 'Contact',
    footerNote: 'Independent reference on search engines and AI platform visibility.',
    rights: 'All rights reserved.',
    tradSeo: 'Traditional SEO',
    geo: 'Generative Engine Optimization',
    aiRanking: 'AI search visibility',
    localSeo: 'Hong Kong & GBA SEO',
    languageLabel: 'Language',
    by: 'By',
    updated: 'Updated',
    needHelpTitle: 'Want hands-on help?',
    needHelpDesc:
      'This guide explains common approaches. For general enquiries about topics covered here, use the contact form.',
    contactCta: 'General enquiry',
    servicesCta: 'View topic overview',
  },
  zh: {
    skipLink: '跳至主要內容',
    readGuide: '閱讀文章',
    readArticles: '全部文章',
    readArticle: '閱讀全文 →',
    viewAllInsights: '查看全部文章',
    exploreTopics: '瀏覽主題',
    learnMore: '了解更多',
    contactNote: '一般查詢',
    sendMessage: '送出查詢',
    home: '首頁',
    footerExplore: '網站',
    footerServices: '主題',
    footerContact: '聯絡',
    footerNote: '獨立參考資料，涵蓋搜尋引擎與 AI 平台可見度。',
    rights: '版權所有。',
    tradSeo: '傳統 SEO 優化',
    geo: '生成式引擎優化 (GEO)',
    aiRanking: 'AI 搜尋可見度',
    localSeo: '香港及大灣區 SEO',
    languageLabel: '語言',
    by: '作者',
    updated: '更新於',
    needHelpTitle: '需要實際協助？',
    needHelpDesc:
      '本指南說明常見做法。如對所涵蓋主題有一般查詢，可使用聯絡表格。',
    contactCta: '一般查詢',
    servicesCta: '查看主題概覽',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale) {
  return UI[locale];
}
