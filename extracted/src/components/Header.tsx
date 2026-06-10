import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe, Phone, MapPin, Award, Send, ChevronDown, Apple, Sprout, BookOpen, Leaf, Layers, Image, Settings, ShieldCheck, Warehouse, Truck, BadgeDollarSign, BarChart3, Info, Users, CheckSquare, HelpCircle, CreditCard, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentHash: string;
}

const LANGUAGES_LIST = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fa', flag: '🇮🇷', label: 'فارسی' },
  { code: 'hi', flag: '🇮🇳', label: 'हिन्दी' },
  { code: 'ar', flag: '🇸🇦', label: 'العربية' },
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  { code: 'uz', flag: '🇺🇿', label: 'Oʻzbekcha' },
  { code: 'az', flag: '🇦🇿', label: 'Azərbaycanca' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
  { code: 'uk', flag: '🇺🇦', label: 'Українська' }
];

export default function Header({ currentHash }: HeaderProps) {
  const { language, activeView, navigate, changeLanguage, getLocalizedUrl, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for styling tweak if needed
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { labelKey: 'common.home', view: 'home' },
    { labelKey: 'common.products', view: 'products' },
    { labelKey: 'common.packing', view: 'packing' },
    { labelKey: 'common.services', view: 'services' },
    { labelKey: 'common.blog', view: 'blog' },
    { labelKey: 'common.about', view: 'about' },
    { labelKey: 'common.contact', view: 'contact' },
    { labelKey: 'common.faq', view: 'faq' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isViewActive = (viewName: string) => {
    if (viewName === 'home') {
      return activeView.view === 'home';
    }
    return activeView.view === viewName || activeView.view.startsWith(viewName + '-');
  };

  const isHashActive = (itemHash: string) => {
    const clean = itemHash.replace('#/', '');
    if (clean === '') return activeView.view === 'home';
    return activeView.view.startsWith(clean);
  };


  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg">
      
      {/* LEVEL 1: TOP BAR (Thin Dark Green segment) */}
      <div className="bg-emerald-950 text-[11px] text-emerald-100 font-sans border-b border-emerald-900/40 py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left contact links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/989900978002" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-emerald-300">Whatsapp Fast Responder:</span>
              <span className="font-mono">+98 990 097 8002</span>
            </a>
            
            <div className="flex items-center gap-1.5 text-emerald-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Address:</span>
              <span className="text-emerald-100 font-medium">Iran, Gilan, Astara city</span>
              <span className="text-emerald-400 font-mono"> | +98 21 9109 9091</span>
            </div>
          </div>

          {/* Right quick attributes */}
          <div className="flex items-center gap-4">
            <span className="text-emerald-300 uppercase tracking-widest font-mono text-[9px] bg-emerald-900 px-2 py-0.5 rounded border border-emerald-800">
              Direct Wholesale Only
            </span>
            <div className="relative group/lang flex items-center gap-1.5 text-emerald-200 cursor-pointer py-1 z-[110]">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300 font-medium">{t('common.language') || 'Language'}:</span>
              <span className="font-bold text-white uppercase inline-flex items-center gap-1 bg-emerald-900 border border-emerald-850 px-2 py-0.5 rounded transition-colors hover:bg-emerald-850">
                {(LANGUAGES_LIST.find(l => l.code === language) || LANGUAGES_LIST[0]).flag}{' '}
                {(LANGUAGES_LIST.find(l => l.code === language) || LANGUAGES_LIST[0]).code}
                <ChevronDown className="w-3 h-3 text-emerald-400 group-hover/lang:rotate-180 transition-transform duration-200" />
              </span>

              {/* Languages Hover List */}
              <div className="absolute top-full right-0 mt-1 w-44 bg-emerald-950 border border-emerald-800 rounded-xl shadow-2xl z-[150] overflow-hidden py-1 opacity-0 pointer-events-none group-hover/lang:opacity-100 group-hover/lang:pointer-events-auto transition-all duration-200 text-left">
                {LANGUAGES_LIST.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    type="button"
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-[11px] font-semibold transition-colors border-b border-emerald-900/30 last:border-b-0 cursor-pointer ${
                      language === lang.code
                        ? 'bg-amber-400 text-emerald-950 font-bold'
                        : 'text-emerald-100 hover:bg-emerald-900 hover:text-white'
                    }`}
                  >
                    <span className="text-sm leading-none">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* LEVEL 2: MAIN NAVIGATION (Rich Forest Green) */}
      <div className="bg-emerald-900 text-white border-b border-emerald-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo area */}
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-center gap-2.5 group" id="logo-link">
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-emerald-950 font-display font-black text-xs">GF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                  GilaFruit
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-300 font-sans font-semibold leading-none">
                  Sabz Gostaran Gilan Fruit Co.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Clean white list with hover drop-downs) */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" id="desktop-nav">
              {navItems.map((item) => {
                const label = t(item.labelKey);
                const isActive = isViewActive(item.view);
                const url = getLocalizedUrl(item.view);

                if (item.view === 'products') {
                  return (
                    <div key={item.view} className="relative group/menu py-3">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-205 cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                            : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                        }`}
                      >
                        <Sprout className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-85 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className="absolute top-[85%] left-0 mt-1 w-64 bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[100] animate-fade-in text-left">
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Sprout className="w-4 h-4 text-emerald-700" />
                          {t('common.allProducts') || 'View Products'}
                        </a>
                        <a
                          href={`${url}?category=fruit`}
                          onClick={(e) => { e.preventDefault(); navigate('products'); /* handled by url search params in products screen */ window.history.pushState({}, '', `${url}?category=fruit`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Apple className="w-4 h-4 text-amber-600" />
                          {t('nav.fruits') || 'Fruits'}
                        </a>
                        <a
                          href={`${url}?category=vegetable`}
                          onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=vegetable`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Leaf className="w-4 h-4 text-emerald-600" />
                          {t('nav.vegetables') || 'Vegetables'}
                        </a>
                        <a
                          href={getLocalizedUrl('calendar')}
                          onClick={(e) => { e.preventDefault(); navigate('calendar'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Calendar className="w-4 h-4 text-indigo-600" />
                          {t('nav.calendar') || t('common.calendar') || 'Product calendar'}
                        </a>
                        <a
                          href={getLocalizedUrl('catalog')}
                          onClick={(e) => { e.preventDefault(); navigate('catalog'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 transition-colors"
                        >
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          {t('nav.catalog') || t('common.catalog') || 'Catalog of Products'}
                        </a>
                      </div>
                    </div>
                  );
                }

                if (item.view === 'packing') {
                  return (
                    <div key={item.view} className="relative group/menu py-3">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-205 cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                            : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-85 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className="absolute top-[85%] left-0 mt-1 w-64 bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[100] animate-fade-in text-left">
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Layers className="w-4 h-4 text-emerald-700" />
                          {t('common.packing') || 'View Packing'}
                        </a>
                        <a
                          href={`${url}?tab=fruits`}
                          onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=fruits`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Apple className="w-4 h-4 text-amber-600" />
                          {t('nav.fruits') || 'Fruits'}
                        </a>
                        <a
                          href={`${url}?tab=vegetables`}
                          onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=vegetables`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Sprout className="w-4 h-4 text-emerald-600" />
                          {t('nav.vegetables') || 'Vegetables'}
                        </a>
                        <a
                          href={getLocalizedUrl('gallery')}
                          onClick={(e) => { e.preventDefault(); navigate('gallery'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 transition-colors"
                        >
                          <Image className="w-4 h-4 text-blue-600" />
                          {t('common.gallery') || 'Photo Gallery'}
                        </a>
                      </div>
                    </div>
                  );
                }

                if (item.view === 'services') {
                  return (
                    <div key={item.view} className="relative group/menu py-3">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-205 cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                            : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                        }`}
                      >
                        <Settings className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-85 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className="absolute top-[85%] left-0 mt-1 w-64 bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[100] animate-fade-in text-left">
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Settings className="w-4 h-4 text-emerald-700" />
                          {t('common.services') || 'View Services'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-customs')}
                          onClick={(e) => { e.preventDefault(); navigate('services-customs'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-700" />
                          {t('nav.customs') || 'Customs'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-logistic')}
                          onClick={(e) => { e.preventDefault(); navigate('services-logistic'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Warehouse className="w-4 h-4 text-emerald-700" />
                          {t('nav.logistics') || 'Logistic'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-transportation')}
                          onClick={(e) => { e.preventDefault(); navigate('services-transportation'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Truck className="w-4 h-4 text-emerald-700" />
                          {t('nav.transport') || 'Transportation'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-freight-rates')}
                          onClick={(e) => { e.preventDefault(); navigate('services-freight-rates'); }}
                          className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-950 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <BadgeDollarSign className="w-4 h-4 text-emerald-700" />
                            <span>{t('nav.rates') || 'Daily Freight Rates'}</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-[#8de278] shadow-sm animate-pulse shrink-0" />
                        </a>
                        <a
                          href={getLocalizedUrl('services-truck-stats')}
                          onClick={(e) => { e.preventDefault(); navigate('services-truck-stats'); }}
                          className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-950 hover:bg-emerald-50/70 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-4 h-4 text-emerald-700" />
                            <span>{t('nav.truckStats') || 'Truck Departure Stats'}</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-[#8de278] shadow-sm animate-pulse shrink-0" />
                        </a>
                      </div>
                    </div>
                  );
                }

                if (item.view === 'about') {
                  return (
                    <div key={item.view} className="relative group/menu py-3">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-205 cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                            : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                        }`}
                      >
                        <Info className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-85 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className="absolute top-[85%] left-0 mt-1 w-64 bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[100] animate-fade-in text-left">
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Info className="w-4 h-4 text-emerald-700" />
                          {t('common.aboutUs') || 'About us'}
                        </a>
                        <a
                          href={getLocalizedUrl('certificates')}
                          onClick={(e) => { e.preventDefault(); navigate('certificates'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Award className="w-4 h-4 text-amber-600" />
                          {t('common.certificates') || 'Certificates'}
                        </a>
                        <a
                          href={getLocalizedUrl('history')}
                          onClick={(e) => { e.preventDefault(); navigate('history'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          {t('common.history') || 'History'}
                        </a>
                        <a
                          href={getLocalizedUrl('team')}
                          onClick={(e) => { e.preventDefault(); navigate('team'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Users className="w-4 h-4 text-emerald-600" />
                          {t('common.team') || 'Team'}
                        </a>
                        <a
                          href={getLocalizedUrl('terms')}
                          onClick={(e) => { e.preventDefault(); navigate('terms'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 transition-colors"
                        >
                          <CheckSquare className="w-4 h-4 text-orange-655" />
                          {t('common.terms') || 'Terms & Conditions'}
                        </a>
                      </div>
                    </div>
                  );
                }

                if (item.view === 'contact') {
                  return (
                    <div key={item.view} className="relative group/menu py-3">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-205 cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                            : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-85 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className="absolute top-[85%] left-0 mt-1 w-64 bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[100] animate-fade-in text-left">
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-emerald-700" />
                          {t('common.contactUs') || 'Contact us'}
                        </a>
                        <a
                          href={getLocalizedUrl('contact-product-price')}
                          onClick={(e) => { e.preventDefault(); navigate('contact-product-price'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <BadgeDollarSign className="w-4 h-4 text-amber-600" />
                          {t('nav.productPrice') || 'Product price inquiry'}
                        </a>
                        <a
                          href={getLocalizedUrl('contact-shipping-price')}
                          onClick={(e) => { e.preventDefault(); navigate('contact-shipping-price'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Truck className="w-4 h-4 text-blue-600" />
                          {t('nav.shippingPrice') || 'Shipping price inquiry'}
                        </a>
                        <a
                          href={getLocalizedUrl('contact-social-networks')}
                          onClick={(e) => { e.preventDefault(); navigate('contact-social-networks'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 transition-colors"
                        >
                          <Globe className="w-4 h-4 text-indigo-605" />
                          {t('nav.social') || 'Social Networks'}
                        </a>
                      </div>
                    </div>
                  );
                }

                if (item.view === 'faq') {
                  return (
                    <div key={item.view} className="relative group/menu py-3 font-sans">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-205 cursor-pointer ${
                          isActive
                            ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                            : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                        }`}
                      >
                        <HelpCircle className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-85 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className="absolute top-[85%] left-0 mt-1 w-64 bg-white text-slate-800 rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[100] animate-fade-in text-left">
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <HelpCircle className="w-4 h-4 text-emerald-700" />
                          {t('common.faq') || 'FAQ Guide'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-products')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-products'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Sprout className="w-4 h-4 text-emerald-700" />
                          {t('common.products') || 'Products'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-packaging')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-packaging'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <Layers className="w-4 h-4 text-amber-600" />
                          {t('common.packing') || 'Packaging'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-payment')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-payment'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 border-b border-slate-100/70 transition-colors"
                        >
                          <CreditCard className="w-4 h-4 text-blue-600" />
                          {t('common.faq') || 'Payment'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-shipping')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-shipping'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/70 transition-colors"
                        >
                          <Truck className="w-4 h-4 text-[#1a8a42]" />
                          {t('common.faq') || 'Shipping'}
                        </a>
                      </div>
                    </div>
                  );
                }

                const isHome = item.view === 'home';
                return (
                  <a
                    key={item.view}
                    href={url}
                    onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                    className={`inline-flex items-center gap-1 px-2 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                        : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'
                    }`}
                  >
                    {isHome && <Home className="w-3.5 h-3.5 shrink-0 opacity-85 text-emerald-350" />}
                    <span>{label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right: Certified Badge action & Social Networks */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#/certificates"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-850 hover:bg-emerald-950 text-white border border-emerald-700/60 hover:border-amber-400 transition-all rounded-full text-xs font-bold uppercase tracking-wider"
                id="certificates-nav-badge"
              >
                <Award className="w-4 h-4 text-amber-400" />
                Certificates
              </a>

              {/* Social Media Rounded Square Icons Bar */}
              <div className="flex items-center gap-0.5" id="header-social-networks">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="w-7 h-7 rounded-full text-emerald-100 hover:bg-emerald-800/60 hover:text-amber-400 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  title="YouTube"
                  className="w-7 h-7 rounded-full text-emerald-100 hover:bg-emerald-800/60 hover:text-amber-400 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518-.002-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.509 9.388.509 9.388.509s7.518 0 9.388-.509a2.97 2.97 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/GilaFruit"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="w-7 h-7 rounded-full text-emerald-100 hover:bg-emerald-800/60 hover:text-amber-400 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.2]" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://wa.me/989900978002"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  className="w-7 h-7 rounded-full text-emerald-100 hover:bg-emerald-800/60 hover:text-amber-400 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/GilaFruit"
                  target="_blank"
                  rel="noreferrer"
                  title="Telegram"
                  className="w-7 h-7 rounded-full text-emerald-100 hover:bg-emerald-800/60 hover:text-amber-400 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M11.944 0C5.344 0 0 5.344 0 12c0 6.656 5.344 12 11.944 12 6.656 0 12-5.344 12-12 0-6.656-5.344-12-12-12zm5.82 8.356l-1.928 9.07c-.14.64-.52.8-.1.53l-2.935-2.163-1.415 1.362c-.156.156-.288.288-.59.288l.21-2.986 5.435-4.912c.236-.21-.051-.326-.367-.116L9.362 13.12l-2.894-.904c-.63-.2-.64-.63.13-.93l11.31-4.358c.524-.2.98.113.846.772H17.76c.004.056.004.056.004.1z" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile toggles */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="#/certificates"
                className="p-2 bg-emerald-850 rounded-full border border-emerald-700"
                title="Certificates"
              >
                <Award className="w-4 h-4 text-amber-400" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-800 focus:outline-none"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden absolute top-16 left-0 right-0 bg-emerald-950 border-b border-emerald-800 py-4 px-6 space-y-2 flex flex-col transition-all duration-300 text-left shadow-2xl"
        >
          {navItems.map((item) => {
            const label = t(item.labelKey);
            const isActive = isViewActive(item.view);
            const url = getLocalizedUrl(item.view);

            if (item.view === 'products') {
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'text-amber-400' : 'text-emerald-100'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </div>
                  <div className="pl-4 border-l border-emerald-800/60 ml-2 py-1 space-y-1">
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.allProducts') || 'View Products'}
                    </a>
                    <a
                      href={`${url}?category=fruit`}
                      onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=fruit`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Apple className="w-3.5 h-3.5 text-amber-400" />
                      {t('nav.fruits') || 'Fruits'}
                    </a>
                    <a
                      href={`${url}?category=vegetable`}
                      onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=vegetable`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      {t('nav.vegetables') || 'Vegetables'}
                    </a>
                    <a
                      href={getLocalizedUrl('calendar')}
                      onClick={(e) => { e.preventDefault(); navigate('calendar'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {t('nav.calendar') || t('common.calendar') || 'Product calendar'}
                    </a>
                    <a
                      href={getLocalizedUrl('catalog')}
                      onClick={(e) => { e.preventDefault(); navigate('catalog'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      {t('nav.catalog') || t('common.catalog') || 'Catalog of Products'}
                    </a>
                  </div>
                </div>
              );
            }

            if (item.view === 'packing') {
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'text-amber-400' : 'text-emerald-100'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </div>
                  <div className="pl-4 border-l border-emerald-800/60 ml-2 py-1 space-y-1">
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.packing') || 'View Packing'}
                    </a>
                    <a
                      href={`${url}?tab=fruits`}
                      onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=fruits`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Apple className="w-3.5 h-3.5 text-amber-400" />
                      {t('nav.fruits') || 'Fruits'}
                    </a>
                    <a
                      href={`${url}?tab=vegetables`}
                      onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=vegetables`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                      {t('nav.vegetables') || 'Vegetables'}
                    </a>
                    <a
                      href={getLocalizedUrl('gallery')}
                      onClick={(e) => { e.preventDefault(); navigate('gallery'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Image className="w-3.5 h-3.5 text-blue-400" />
                      {t('common.gallery') || 'Photo Gallery'}
                    </a>
                  </div>
                </div>
              );
            }

            if (item.view === 'services') {
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'text-amber-400' : 'text-emerald-100'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </div>
                  <div className="pl-4 border-l border-emerald-800/60 ml-2 py-1 space-y-1 text-left">
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Settings className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.services') || 'View Services'}
                    </a>
                    <a
                      href={getLocalizedUrl('services-customs')}
                      onClick={(e) => { e.preventDefault(); navigate('services-customs'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {t('nav.customs') || 'Customs'}
                    </a>
                    <a
                      href={getLocalizedUrl('services-logistic')}
                      onClick={(e) => { e.preventDefault(); navigate('services-logistic'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Warehouse className="w-3.5 h-3.5 text-emerald-400" />
                      {t('nav.logistics') || 'Logistic'}
                    </a>
                    <a
                      href={getLocalizedUrl('services-transportation')}
                      onClick={(e) => { e.preventDefault(); navigate('services-transportation'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Truck className="w-3.5 h-3.5 text-emerald-400" />
                      {t('nav.transport') || 'Transportation'}
                    </a>
                    <a
                      href={getLocalizedUrl('services-freight-rates')}
                      onClick={(e) => { e.preventDefault(); navigate('services-freight-rates'); handleNavClick(); }}
                      className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <BadgeDollarSign className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t('nav.rates') || 'Daily Freight Rates'}</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8de278] mr-2 shrink-0" />
                    </a>
                    <a
                      href={getLocalizedUrl('services-truck-stats')}
                      onClick={(e) => { e.preventDefault(); navigate('services-truck-stats'); handleNavClick(); }}
                      className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t('nav.truckStats') || 'Truck Departure Stats'}</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8de278] mr-2 shrink-0" />
                    </a>
                  </div>
                </div>
              );
            }

            if (item.view === 'about') {
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'text-amber-400' : 'text-emerald-100'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </div>
                  <div className="pl-4 border-l border-emerald-800/60 ml-2 py-1 space-y-1 text-left">
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.aboutUs') || 'About us'}
                    </a>
                    <a
                      href={getLocalizedUrl('certificates')}
                      onClick={(e) => { e.preventDefault(); navigate('certificates'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      {t('common.certificates') || 'Certificates'}
                    </a>
                    <a
                      href={getLocalizedUrl('history')}
                      onClick={(e) => { e.preventDefault(); navigate('history'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      {t('common.history') || 'History'}
                    </a>
                    <a
                      href={getLocalizedUrl('team')}
                      onClick={(e) => { e.preventDefault(); navigate('team'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.team') || 'Team'}
                    </a>
                    <a
                      href={getLocalizedUrl('terms')}
                      onClick={(e) => { e.preventDefault(); navigate('terms'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <CheckSquare className="w-3.5 h-3.5 text-orange-400" />
                      {t('common.terms') || 'Terms & Conditions'}
                    </a>
                  </div>
                </div>
              );
            }

            if (item.view === 'contact') {
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'text-amber-400' : 'text-emerald-100'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </div>
                  <div className="pl-4 border-l border-emerald-800/60 ml-2 py-1 space-y-1 text-left">
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.contactUs') || 'Contact us'}
                    </a>
                    <a
                      href={getLocalizedUrl('contact-product-price')}
                      onClick={(e) => { e.preventDefault(); navigate('contact-product-price'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <BadgeDollarSign className="w-3.5 h-3.5 text-amber-400" />
                      {t('nav.productPrice') || 'Product price inquiry'}
                    </a>
                    <a
                      href={getLocalizedUrl('contact-shipping-price')}
                      onClick={(e) => { e.preventDefault(); navigate('contact-shipping-price'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Truck className="w-3.5 h-3.5 text-blue-400" />
                      {t('nav.shippingPrice') || 'Shipping price inquiry'}
                    </a>
                    <a
                      href={getLocalizedUrl('contact-social-networks')}
                      onClick={(e) => { e.preventDefault(); navigate('contact-social-networks'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 text-indigo-400" />
                      {t('nav.social') || 'Social Networks'}
                    </a>
                  </div>
                </div>
              );
            }

            if (item.view === 'faq') {
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive ? 'text-amber-400' : 'text-emerald-100'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </div>
                  <div className="pl-4 border-l border-emerald-800/60 ml-2 py-1 space-y-1 text-left">
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.faq') || 'FAQ Guide'}
                    </a>
                    <a
                      href={getLocalizedUrl('faq-products')}
                      onClick={(e) => { e.preventDefault(); navigate('faq-products'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                      {t('common.products') || 'Products'}
                    </a>
                    <a
                      href={getLocalizedUrl('faq-packaging')}
                      onClick={(e) => { e.preventDefault(); navigate('faq-packaging'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      {t('common.packing') || 'Packaging'}
                    </a>
                    <a
                      href={getLocalizedUrl('faq-payment')}
                      onClick={(e) => { e.preventDefault(); navigate('faq-payment'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                      {t('common.faq') || 'Payment'}
                    </a>
                    <a
                      href={getLocalizedUrl('faq-shipping')}
                      onClick={(e) => { e.preventDefault(); navigate('faq-shipping'); handleNavClick(); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-200 hover:bg-emerald-900 hover:text-white transition-colors"
                    >
                      <Truck className="w-3.5 h-3.5 text-[#1a8a42]" />
                      {t('common.faq') || 'Shipping'}
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.view}
                href={url}
                onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-400 text-emerald-950 font-bold'
                    : 'text-emerald-100 hover:bg-emerald-900 hover:text-white'
                }`}
              >
                {label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-emerald-900 flex flex-col gap-3">
            <a
              href="#/certificates"
              onClick={handleNavClick}
              className="inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-emerald-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider border border-emerald-800"
            >
              <Award className="w-4 h-4 text-amber-400" />
              Certificates Passport
            </a>

            {/* Social Media Rounded Square Icons Bar in Mobile Drawer */}
            <div className="flex items-center justify-center gap-2.5 py-2.5 bg-emerald-950/60 rounded-xl border border-emerald-900" id="mobile-social-networks">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                onClick={handleNavClick}
                className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-800 text-emerald-100 flex items-center justify-center shadow-md active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                title="YouTube"
                onClick={handleNavClick}
                className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-800 text-emerald-100 flex items-center justify-center shadow-md active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518-.002-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.509 9.388.509 9.388.509s7.518 0 9.388-.509a2.97 2.97 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/GilaFruit"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                onClick={handleNavClick}
                className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-800 text-emerald-100 flex items-center justify-center shadow-md active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.2]" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/989900978002"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
                onClick={handleNavClick}
                className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-800 text-emerald-100 flex items-center justify-center shadow-md active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://t.me/GilaFruit"
                target="_blank"
                rel="noreferrer"
                title="Telegram"
                onClick={handleNavClick}
                className="w-9 h-9 rounded-lg bg-emerald-900 border border-emerald-800 text-emerald-100 flex items-center justify-center shadow-md active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current">
                  <path d="M11.944 0C5.344 0 0 5.344 0 12c0 6.656 5.344 12 11.944 12 6.656 0 12-5.344 12-12 0-6.656-5.344-12-12-12zm5.82 8.356l-1.928 9.07c-.14.64-.52.8-.1.53l-2.935-2.163-1.415 1.362c-.156.156-.288.288-.59.288l.21-2.986 5.435-4.912c.236-.21-.051-.326-.367-.116L9.362 13.12l-2.894-.904c-.63-.2-.64-.63.13-.93l11.31-4.358c.524-.2.98.113.846.772H17.76c.004.056.004.056.004.1z" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
