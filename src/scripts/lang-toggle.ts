export function initLangToggle() {
  const STORAGE_KEY = 'site-lang';

  function setLang(lang: string) {
    const html = document.documentElement;
    html.lang = lang === 'zh' ? 'zh-HK' : 'en-HK';
    document.querySelectorAll('[data-lang]').forEach((el) => {
      const match = el.getAttribute('data-lang') === lang;
      el.classList.toggle('is-visible', match);
      if (el instanceof HTMLElement) {
        el.hidden = !match;
      }
    });
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
      if (btn instanceof HTMLElement) {
        btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
      }
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
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
  const initial = fromQuery === 'zh' || fromQuery === 'en' ? fromQuery : fromStorage === 'zh' ? 'zh' : 'en';

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-set-lang');
      if (lang) setLang(lang);
    });
  });

  setLang(initial);
}

initLangToggle();
