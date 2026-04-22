import en from './en.json';
import my from './my.json';

const translations: Record<string, Record<string, string>> = { en, my };
export type Lang = 'en' | 'my';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'my') return 'my';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };
}

export function localize(obj: { en: string; my: string }, lang: Lang): string {
  return obj[lang] || obj.en;
}

export function getLocalePath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') {
    return cleanPath.replace(/^\/my/, '') || '/';
  }
  if (cleanPath.startsWith('/my')) return cleanPath;
  return `/my${cleanPath}`;
}

export function getSwitchLangPath(currentPath: string, currentLang: Lang): string {
  if (currentLang === 'en') {
    return `/my${currentPath === '/' ? '' : currentPath}` || '/my';
  }
  return currentPath.replace(/^\/my/, '') || '/';
}
