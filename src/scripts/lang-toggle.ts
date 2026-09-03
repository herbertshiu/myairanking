export function initLangToggle() {
  const STORAGE_KEY = 'site-lang';
  const isChinesePath = window.location.pathname === '/zh' || window.location.pathname.startsWith('/zh/');

  function setLang(lang: 'en' | 'zh', persist = true) {
    const html = document.documentElement;
    html.lang = lang === 'zh' ? 'zh-HK' : 'en-HK';
    document.querySelectorAll('[data-lang]').forEach((el) => {
      const match = el.getAttribute('data-lang') === lang;
      el.classList.toggle('is-visible', match);
      if (el instanceof HTMLElement) el.hidden = !match;
    });
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      const active = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('active', active);
      if (btn instanceof HTMLElement) btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* Ignore storage restrictions. */
      }
    }
  }

  function languagePath(lang: 'en' | 'zh') {
    const path = window.location.pathname;
    const withoutChinesePrefix = path.replace(/^\/zh(?=\/|$)/, '') || '/';
    return lang === 'zh' ? `/zh${withoutChinesePrefix === '/' ? '' : withoutChinesePrefix}` : withoutChinesePrefix;
  }

  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('lang');
  const fromStorage = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  })();
  const initial: 'en' | 'zh' = isChinesePath
    ? 'zh'
    : fromQuery === 'zh' || fromStorage === 'zh'
      ? 'zh'
      : 'en';

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-set-lang');
      if (lang !== 'en' && lang !== 'zh') return;
      const target = languagePath(lang);
      if (target !== window.location.pathname) window.location.assign(target);
      else setLang(lang);
    });
  });

  setLang(initial, false);
}

initLangToggle();

export {};
