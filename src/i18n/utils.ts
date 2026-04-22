import en from './en.json';
import my from './my.json';

const translations: Record<string, Record<string, string>> = { en, my };
export type Lang = 'en' | 'my';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'my';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return translations[lang]?.[key] || translations['my']?.[key] || key;
  };
}

export function localize(obj: { en: string; my: string }, lang: Lang): string {
  return obj[lang] || obj.my;
}

export function getSwitchLangPath(currentPath: string, currentLang: Lang): string {
  if (currentLang === 'my') {
    return `/en${currentPath === '/' ? '' : currentPath}` || '/en';
  }
  return currentPath.replace(/^\/en/, '') || '/';
}
