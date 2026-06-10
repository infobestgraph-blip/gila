import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../../locales/en.json';
import fa from '../../locales/fa.json';
import hi from '../../locales/hi.json';
import ar from '../../locales/ar.json';
import tr from '../../locales/tr.json';
import uz from '../../locales/uz.json';
import az from '../../locales/az.json';
import ru from '../../locales/ru.json';
import uk from '../../locales/uk.json';

// Map of imported locale JSON data
export const locales: Record<string, any> = { en, fa, hi, ar, tr, uz, az, ru, uk };

const defaultLang = 'en';
const validLanguages = ['en', 'fa', 'hi', 'ar', 'tr', 'uz', 'az', 'ru', 'uk'];

interface ActiveViewDetails {
  view: string;
  slug?: string;
  id?: string;
  category?: string;
}

interface LanguageContextType {
  language: string;
  direction: 'ltr' | 'rtl';
  currentPath: string;
  activeView: ActiveViewDetails;
  t: (keyPath: string, fallback?: string) => string;
  translateRoute: (pageKey: string, langCode?: string) => string;
  translateProductSlug: (productKey: string, langCode?: string) => string;
  translateBlogSlug: (blogKey: string, langCode?: string) => string;
  getLocalizedUrl: (viewName: string, detailSlug?: string, targetLang?: string) => string;
  navigate: (viewName: string, detailSlug?: string) => void;
  changeLanguage: (langCode: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // 1. Parse initial language from ?lang=xx or fallback
  const getLangFromUrl = (): string => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang && validLanguages.includes(lang.toLowerCase())) {
      return lang.toLowerCase();
    }
    return defaultLang;
  };

  const [language, setLanguage] = useState<string>(getLangFromUrl());
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  // Sync state when URL popstate or search updates
  useEffect(() => {
    const handleUrlChange = () => {
      setLanguage(getLangFromUrl());
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleUrlChange);
    // Sync language selection if user updates search directly
    const interval = setInterval(() => {
      const activeLang = getLangFromUrl();
      if (activeLang !== language) {
        setLanguage(activeLang);
      }
      if (window.location.pathname !== currentPath) {
        setCurrentPath(window.location.pathname);
      }
    }, 500);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      clearInterval(interval);
    };
  }, [language, currentPath]);

  const activeLocale = locales[language] || en;
  const direction: 'ltr' | 'rtl' = activeLocale.direction === 'rtl' ? 'rtl' : 'ltr';

  // Set document attributes
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  // Deep key lookup helper
  const t = (keyPath: string, fallback?: string): string => {
    const keys = keyPath.split('.');
    let current = activeLocale;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English lookup
        let engCurrent = en;
        for (const engKey of keys) {
          if (engCurrent && typeof engCurrent === 'object' && engKey in engCurrent) {
            engCurrent = (engCurrent as any)[engKey];
          } else {
            return fallback || keyPath;
          }
        }
        return typeof engCurrent === 'string' ? engCurrent : (fallback || keyPath);
      }
    }
    return typeof current === 'string' ? current : (fallback || keyPath);
  };

  const translateRoute = (pageKey: string, langCode: string = language): string => {
    const loc = locales[langCode] || en;
    return loc.routes[pageKey] || en.routes[pageKey] || pageKey;
  };

  const translateProductSlug = (productKey: string, langCode: string = language): string => {
    const loc = locales[langCode] || en;
    return loc.productSlugs[productKey] || en.productSlugs[productKey] || productKey;
  };

  const translateBlogSlug = (blogKey: string, langCode: string = language): string => {
    const loc = locales[langCode] || en;
    return loc.blogSlugs[blogKey] || en.blogSlugs[blogKey] || blogKey;
  };

  // Helper to reverse search standard English key from a translated slug
  const getOriginalProductKey = (translatedSlug: string): string => {
    // Search current language productSlugs
    const match = Object.entries(activeLocale.productSlugs).find(
      ([_, val]) => (val as string).toLowerCase() === translatedSlug.toLowerCase()
    );
    if (match) return match[0];

    // Fallback: search English
    const engMatch = Object.entries(en.productSlugs).find(
      ([_, val]) => (val as string).toLowerCase() === translatedSlug.toLowerCase()
    );
    if (engMatch) return engMatch[0];

    // Extreme fallback: Search all languages
    for (const locItem of Object.values(locales)) {
      const globMatch = Object.entries(locItem.productSlugs).find(
        ([_, val]) => (val as string).toLowerCase() === translatedSlug.toLowerCase()
      );
      if (globMatch) return globMatch[0];
    }
    return translatedSlug;
  };

  const getOriginalBlogKey = (translatedSlug: string): string => {
    const match = Object.entries(activeLocale.blogSlugs).find(
      ([_, val]) => (val as string).toLowerCase() === translatedSlug.toLowerCase()
    );
    if (match) return match[0];

    const engMatch = Object.entries(en.blogSlugs).find(
      ([_, val]) => (val as string).toLowerCase() === translatedSlug.toLowerCase()
    );
    if (engMatch) return engMatch[0];

    for (const locItem of Object.values(locales)) {
      const globMatch = Object.entries(locItem.blogSlugs).find(
        ([_, val]) => (val as string).toLowerCase() === translatedSlug.toLowerCase()
      );
      if (globMatch) return globMatch[0];
    }
    return translatedSlug;
  };

  // Resolve current active view based on standard/localized pathname mapping
  const resolveActiveView = (): ActiveViewDetails => {
    const cleanPath = decodeURIComponent(currentPath).replace(/^\/+|\/+$/g, '').toLowerCase();

    if (cleanPath === '' || cleanPath === 'home') {
      return { view: 'home' };
    }

    // 1. Check if matches localized static page route
    for (const [key, val] of Object.entries(activeLocale.routes)) {
      if ((val as string).toLowerCase() === cleanPath) {
        return { view: key };
      }
    }

    // 2. Check if product path: "/product/[localized-sub-slug]"
    if (cleanPath.startsWith('product/')) {
      const urlProductSlug = cleanPath.slice(8);
      const originalProductKey = getOriginalProductKey(urlProductSlug);
      return { view: 'product-detail', slug: originalProductKey };
    }

    // 3. Check if category path: "/category/[category-slug]"
    if (cleanPath.startsWith('category/')) {
      const categoryName = cleanPath.slice(9);
      return { view: 'category', category: categoryName };
    }

    // 4. Since blog post slugs reside at root level, verify against blogSlugs
    for (const [key, val] of Object.entries(activeLocale.blogSlugs)) {
      if ((val as string).toLowerCase() === cleanPath) {
        return { view: 'blog-detail', id: key, slug: cleanPath };
      }
    }

    // fallback search: search in all other languages blogSlugs
    for (const locKey of Object.keys(locales)) {
      const locObj = locales[locKey];
      for (const [key, val] of Object.entries(locObj.blogSlugs)) {
        if ((val as string).toLowerCase() === cleanPath) {
          return { view: 'blog-detail', id: key, slug: cleanPath };
        }
      }
    }

    // fallback static routes search in other languages (cross-linking support)
    for (const locKey of Object.keys(locales)) {
      const locObj = locales[locKey];
      for (const [key, val] of Object.entries(locObj.routes)) {
        if ((val as string).toLowerCase() === cleanPath) {
          return { view: key };
        }
      }
    }

    // If matches hash-style legacy path inside path router e.g. '#/about' or 'about'
    if (cleanPath.includes('#')) {
      const hashPart = cleanPath.substring(cleanPath.indexOf('#') + 1).replace(/^\/+|\/+$/g, '');
      if (hashPart === '') return { view: 'home' };
      if (hashPart.startsWith('product/')) {
        return { view: 'product-detail', slug: hashPart.replace('product/', '') };
      }
      if (hashPart.startsWith('blog/')) {
        return { view: 'blog-detail', id: hashPart.replace('blog/', ''), slug: hashPart.replace('blog/', '') };
      }
      return { view: hashPart };
    }

    // Return as blog fallback if any slug remains, or default to home
    return { view: 'home' };
  };

  const activeView = resolveActiveView();

  // Create full path for any view in any language
  const getLocalizedUrl = (viewName: string, detailSlug?: string, targetLang: string = language): string => {
    const loc = locales[targetLang] || en;
    const queryParam = targetLang !== 'en' ? `?lang=${targetLang}` : '';

    if (viewName === 'home') {
      return `/${queryParam}`;
    }

    if (viewName === 'product-detail' && detailSlug) {
      const localizedProductSlug = loc.productSlugs[detailSlug] || en.productSlugs[detailSlug] || detailSlug;
      return `/product/${localizedProductSlug}/${queryParam}`;
    }

    if (viewName === 'category' && detailSlug) {
      return `/category/${detailSlug}/${queryParam}`;
    }

    if (viewName === 'blog-detail' && detailSlug) {
      const localizedBlogSlug = loc.blogSlugs[detailSlug] || en.blogSlugs[detailSlug] || detailSlug;
      return `/${localizedBlogSlug}/${queryParam}`;
    }

    // Look up static route
    const staticRoute = loc.routes[viewName] || en.routes[viewName] || viewName;
    return `/${staticRoute}/${queryParam}`;
  };

  const navigate = (viewName: string, detailSlug?: string) => {
    let resolvedView = viewName;
    let resolvedSlug = detailSlug;

    if (viewName && typeof viewName === 'string') {
      if (viewName.startsWith('#/')) {
        const cleanHash = viewName.slice(2).split('?')[0];
        if (cleanHash === '') {
          resolvedView = 'home';
        } else if (cleanHash.startsWith('product/')) {
          resolvedView = 'product-detail';
          resolvedSlug = cleanHash.slice(8);
        } else if (cleanHash.startsWith('blog/')) {
          resolvedView = 'blog-detail';
          resolvedSlug = cleanHash.slice(5);
        } else if (cleanHash.startsWith('services/')) {
          resolvedView = 'services-' + cleanHash.replace('services/', '');
        } else if (cleanHash.startsWith('faq/')) {
          resolvedView = 'faq-' + cleanHash.replace('faq/', '');
        } else if (cleanHash.startsWith('contact/')) {
          resolvedView = 'contact-' + cleanHash.replace('contact/', '');
        } else {
          resolvedView = cleanHash;
        }
      } else if (viewName.startsWith('/')) {
        const cleanPath = viewName.replace(/^\/+|\/+$/g, '').split('?')[0];
        if (cleanPath === '') {
          resolvedView = 'home';
        } else if (cleanPath.startsWith('product/')) {
          resolvedView = 'product-detail';
          resolvedSlug = cleanPath.slice(8);
        } else if (cleanPath.startsWith('blog/')) {
          resolvedView = 'blog-detail';
          resolvedSlug = cleanPath.slice(5);
        } else {
          resolvedView = cleanPath;
        }
      }
    }

    const targetUrl = getLocalizedUrl(resolvedView, resolvedSlug, language);
    window.history.pushState({}, '', targetUrl);
    setCurrentPath(window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeLanguage = (langCode: string) => {
    if (!validLanguages.includes(langCode)) return;
    
    // Attempt to match the current view and translate its path to the new language
    let targetPath = '/';
    if (activeView.view === 'home') {
      targetPath = '/';
    } else if (activeView.view === 'product-detail' && activeView.slug) {
      const loc = locales[langCode] || en;
      const localizedProductSlug = loc.productSlugs[activeView.slug] || activeView.slug;
      targetPath = `/product/${localizedProductSlug}/`;
    } else if (activeView.view === 'blog-detail' && activeView.id) {
      const loc = locales[langCode] || en;
      const localizedBlogSlug = loc.blogSlugs[activeView.id] || activeView.id;
      targetPath = `/${localizedBlogSlug}/`;
    } else if (activeView.view === 'category' && activeView.category) {
      targetPath = `/category/${activeView.category}/`;
    } else {
      const loc = locales[langCode] || en;
      const translatedStatic = loc.routes[activeView.view] || en.routes[activeView.view] || activeView.view;
      targetPath = `/${translatedStatic}/`;
    }

    const queryParam = langCode !== 'en' ? `?lang=${langCode}` : '';
    const newFullUrl = `${targetPath}${queryParam}`;

    window.history.pushState({}, '', newFullUrl);
    setLanguage(langCode);
    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // SEO effect: Titles, hreflang alternate tags, canonical tags & description injection
  useEffect(() => {
    const pageTitle = t(`common.${activeView.view}`, activeView.view);
    const capitalizedTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
    
    // Set Document Title
    const siteTitle = activeLocale.seo.siteTitle;
    if (activeView.view === 'home') {
      document.title = siteTitle;
    } else {
      document.title = `${capitalizedTitle} ${activeLocale.seo.titleSeparator} ${siteTitle}`;
    }

    // Set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', activeLocale.seo.description);

    // Set Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', activeLocale.seo.keywords);

    // Set Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    const currentFullOrigin = window.location.origin;
    const currentRelativeUrl = getLocalizedUrl(activeView.view, activeView.slug || activeView.id || activeView.category);
    canonicalTag.setAttribute('href', `${currentFullOrigin}${currentRelativeUrl}`);

    // Regenerate hreflang alternates
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    validLanguages.forEach(lang => {
      const altRelUrl = getLocalizedUrl(activeView.view, activeView.slug || activeView.id || activeView.category, lang);
      const altLink = document.createElement('link');
      altLink.setAttribute('rel', 'alternate');
      altLink.setAttribute('hreflang', lang);
      altLink.setAttribute('href', `${currentFullOrigin}${altRelUrl}`);
      document.head.appendChild(altLink);
    });

  }, [language, activeView.view, activeView.slug, activeView.id, activeView.category]);

  return (
    <LanguageContext.Provider value={{
      language,
      direction,
      currentPath,
      activeView,
      t,
      translateRoute,
      translateProductSlug,
      translateBlogSlug,
      getLocalizedUrl,
      navigate,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}
