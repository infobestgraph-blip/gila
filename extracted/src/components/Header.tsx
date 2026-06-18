import { useState, useEffect } from 'react';
import { 
  Menu, X, Calendar, Globe, Phone, MapPin, Award, ChevronDown, 
  Apple, Sprout, BookOpen, Leaf, Layers, Image, Settings, 
  ShieldCheck, Warehouse, Truck, BadgeDollarSign, BarChart3, 
  Info, Users, CheckSquare, HelpCircle, CreditCard, Home, MessageSquare
} from 'lucide-react';
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
  const { 
    language, direction, activeView, navigate, changeLanguage, getLocalizedUrl, t
  } = useLanguage();
  const isRtl = direction === 'rtl';
  const isLongLang = ['fa', 'ar', 'uz', 'ru', 'uk'].includes(language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    const currentView = activeView.view;
    if (viewName === 'home') {
      return currentView === 'home';
    }
    if (viewName === 'products') {
      return (
        currentView === 'products' ||
        currentView === 'product-detail' ||
        currentView === 'category' ||
        currentView === 'calendar' ||
        currentView === 'catalog'
      );
    }
    if (viewName === 'packing') {
      return currentView === 'packing' || currentView === 'gallery';
    }
    if (viewName === 'services') {
      return currentView === 'services' || currentView.startsWith('services-');
    }
    if (viewName === 'blog') {
      return currentView === 'blog' || currentView === 'blog-detail';
    }
    if (viewName === 'about') {
      return (
        currentView === 'about' ||
        currentView === 'certificates' ||
        currentView === 'history' ||
        currentView === 'team' ||
        currentView === 'terms'
      );
    }
    if (viewName === 'contact') {
      return currentView === 'contact' || currentView.startsWith('contact-');
    }
    if (viewName === 'faq') {
      return currentView === 'faq' || currentView.startsWith('faq-');
    }
    return currentView === viewName || currentView.startsWith(viewName + '-');
  };

  const currentLangObj = LANGUAGES_LIST.find(l => l.code === language) || LANGUAGES_LIST[0];

  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. UPPER BAR: Deep Charcoal (#1c1a17) with Logo & Info Panels */}
      <div className="bg-[#1c1a17] text-white pt-4 pb-[50px] px-4 sm:px-6 lg:px-8 hidden md:block border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <a 
            href="#/" 
            onClick={(e) => { e.preventDefault(); navigate('home'); }} 
            className="flex items-center gap-3 group shrink-0"
            id="logo-link"
          >
            {/* Round Green Emblem */}
            <div className="w-12 h-12 rounded-full bg-[#1db124] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 relative border border-emerald-400/20">
              <Sprout className="w-6 h-6 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 bg-amber-400 w-3.5 h-3.5 rounded-full flex items-center justify-center border border-emerald-950">
                <span className="text-[7.5px] text-emerald-950 font-bold leading-none">★</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-white leading-tight">
                GilaFruit
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#1db124] font-sans font-bold leading-none">
                {language === 'fa' ? 'محصولات ممتاز ایران' : 'IRANIAN PRODUCTS'}
              </span>
            </div>
          </a>

          {/* Quick Contact Panels Grid */}
          <div className="flex items-center gap-8">
            
            {/* Block 1: WhatsApp Fast Responder */}
            <a 
              href="https://wa.me/989900978002" 
              className="flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col justify-center">
                <span className="text-[10.5px] uppercase font-bold text-stone-400 tracking-wide">
                  {language === 'fa' ? 'پاسخگوی سریع واتس‌اپ' : 'Whatsapp Fast Responder'}
                </span>
                <span className="text-[14px] font-black text-white font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#1db124] animate-pulse inline-block"></span>
                  +98 990 097 8002
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#1db124] text-white flex items-center justify-center transform group-hover:scale-105 transition-all shadow-md">
                {/* Custom WhatsApp Icon layout */}
                <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>

            {/* Block 2: Corporate Address & Line */}
            <div className="flex items-center gap-3.5 group">
              <div className="flex flex-col justify-center">
                <span className="text-[10.5px] uppercase font-bold text-stone-400 tracking-wide">
                  {language === 'fa' ? 'آدرس: ایران، گیلان، شهرستان آستارا' : 'Address: Iran, Gilan, Astara'}
                </span>
                <span className="text-[14px] font-black text-white font-mono mt-0.5">
                  +98 21 9109 9091
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#1db124] text-white flex items-center justify-center shadow-md">
                <Warehouse className="w-5 h-5 text-white" />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. LOWER BAR: Elegant White Floating Navigation Toolbar Overlay */}
      <div className="transition-all duration-300 pt-0 pb-0 -mt-[30px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-full border border-stone-250/70 shadow-xl py-1.5 px-2 md:px-4 lg:px-5 flex justify-between items-center transition-all duration-300 relative z-30">
            
            {/* Mobile-Only Logo element */}
            <a 
              href="#/" 
              onClick={(e) => { e.preventDefault(); navigate('home'); }} 
              className="flex md:hidden items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#1db124] flex items-center justify-center">
                <Sprout className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-display font-black text-stone-900 text-base">GilaFruit</span>
            </a>

            {/* Floating Navigation Menu Links */}
            <nav 
              className={`hidden md:flex items-center font-bold tracking-wide transition-all flex-row ${isLongLang ? 'gap-0 md:gap-0.5 lg:gap-1' : 'gap-0.5 md:gap-1 lg:gap-1.5'}`} 
              id="desktop-nav"
            >
              {navItems.map((item) => {
                const label = t(item.labelKey);
                const isActive = isViewActive(item.view);
                const url = getLocalizedUrl(item.view);

                // Check link font rules
                const linkStyleClass = `inline-flex items-center gap-1 px-1.5 py-1.5 md:px-2 md:py-2 rounded-xl text-xs md:text-[12px] lg:text-[12.5px] font-bold tracking-normal transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1db124] text-white shadow-md'
                    : 'text-stone-700 hover:text-[#1db124] hover:bg-stone-50'
                }`;

                // --- 1. Products Dropdown ---
                if (item.view === 'products') {
                  return (
                    <div key={item.view} className="relative group/menu py-1.5">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={linkStyleClass}
                      >
                        <Sprout className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className={`absolute top-[90%] ${isRtl ? 'right-0' : 'left-0'} mt-1.5 w-60 bg-white text-stone-800 rounded-2xl border border-stone-200 shadow-xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[120] ${isRtl ? 'text-right' : 'text-left'}`}>
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Sprout className="w-4 h-4 text-[#1db124]" />
                          {t('common.allProducts') || 'View Products'}
                        </a>
                        <a
                          href={`${url}?category=fruit`}
                          onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=fruit`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Apple className="w-4 h-4 text-amber-600" />
                          {t('nav.fruits') || 'Fruits'}
                        </a>
                        <a
                          href={`${url}?category=vegetable`}
                          onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=vegetable`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Leaf className="w-4 h-4 text-emerald-600" />
                          {t('nav.vegetables') || 'Vegetables'}
                        </a>
                        <a
                          href={getLocalizedUrl('calendar')}
                          onClick={(e) => { e.preventDefault(); navigate('calendar'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Calendar className="w-4 h-4 text-indigo-600" />
                          {t('nav.calendar') || 'Product calendar'}
                        </a>
                        <a
                          href={getLocalizedUrl('catalog')}
                          onClick={(e) => { e.preventDefault(); navigate('catalog'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 transition-colors"
                        >
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          {t('nav.catalog') || 'Catalog of Products'}
                        </a>
                      </div>
                    </div>
                  );
                }

                // --- 2. Packing Dropdown ---
                if (item.view === 'packing') {
                  return (
                    <div key={item.view} className="relative group/menu py-1.5">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={linkStyleClass}
                      >
                        <Layers className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className={`absolute top-[90%] ${isRtl ? 'right-0' : 'left-0'} mt-1.5 w-60 bg-white text-stone-800 rounded-2xl border border-stone-200 shadow-xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[120] ${isRtl ? 'text-right' : 'text-left'}`}>
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Layers className="w-4 h-4 text-stone-700" />
                          {t('common.packing') || 'View Packing'}
                        </a>
                        <a
                          href={`${url}?tab=fruits`}
                          onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=fruits`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Apple className="w-4 h-4 text-amber-652" />
                          {t('nav.fruits') || 'Fruits'}
                        </a>
                        <a
                          href={`${url}?tab=vegetables`}
                          onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=vegetables`); window.dispatchEvent(new Event('popstate')); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Sprout className="w-4 h-4 text-emerald-600" />
                          {t('nav.vegetables') || 'Vegetables'}
                        </a>
                        <a
                          href={getLocalizedUrl('gallery')}
                          onClick={(e) => { e.preventDefault(); navigate('gallery'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 transition-colors"
                        >
                          <Image className="w-4 h-4 text-blue-600" />
                          {t('common.gallery') || 'Photo Gallery'}
                        </a>
                      </div>
                    </div>
                  );
                }

                // --- 3. Services Dropdown ---
                if (item.view === 'services') {
                  return (
                    <div key={item.view} className="relative group/menu py-1.5">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={linkStyleClass}
                      >
                        <Settings className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className={`absolute top-[90%] ${isRtl ? 'right-0' : 'left-0'} mt-1.5 w-60 bg-white text-stone-800 rounded-2xl border border-stone-200 shadow-xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[120] ${isRtl ? 'text-right' : 'text-left'}`}>
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Settings className="w-4 h-4 text-stone-700" />
                          {t('common.services') || 'View Services'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-customs')}
                          onClick={(e) => { e.preventDefault(); navigate('services-customs'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <ShieldCheck className="w-4 h-4 text-[#1db124]" />
                          {t('nav.customs') || 'Customs'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-logistic')}
                          onClick={(e) => { e.preventDefault(); navigate('services-logistic'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Warehouse className="w-4 h-4 text-[#1db124]" />
                          {t('nav.logistics') || 'Logistic'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-transportation')}
                          onClick={(e) => { e.preventDefault(); navigate('services-transportation'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Truck className="w-4 h-4 text-[#1db124]" />
                          {t('nav.transport') || 'Transportation'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-freight-rates')}
                          onClick={(e) => { e.preventDefault(); navigate('services-freight-rates'); }}
                          className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <BadgeDollarSign className="w-4 h-4 text-amber-600" />
                            <span>{t('nav.rates') || 'Daily Freight Rates'}</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-[#1db124] animate-pulse shrink-0" />
                        </a>
                        <a
                          href={getLocalizedUrl('services-truck-stats')}
                          onClick={(e) => { e.preventDefault(); navigate('services-truck-stats'); }}
                          className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-4 h-4 text-blue-600" />
                            <span>{t('nav.truckStats') || 'Truck Departure Stats'}</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-[#1db124] animate-pulse shrink-0" />
                        </a>
                      </div>
                    </div>
                  );
                }

                // --- 5. About Dropdown ---
                if (item.view === 'about') {
                  return (
                    <div key={item.view} className="relative group/menu py-1.5">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={linkStyleClass}
                      >
                        <Info className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className={`absolute top-[90%] ${isRtl ? 'right-0' : 'left-0'} mt-1.5 w-60 bg-white text-stone-800 rounded-2xl border border-stone-200 shadow-xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[120] ${isRtl ? 'text-right' : 'text-left'}`}>
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Info className="w-4 h-4 text-stone-700" />
                          {t('common.aboutUs') || 'About us'}
                        </a>
                        <a
                          href={getLocalizedUrl('certificates')}
                          onClick={(e) => { e.preventDefault(); navigate('certificates'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Award className="w-4 h-4 text-amber-600" />
                          {t('common.certificates') || 'Certificates'}
                        </a>
                        <a
                          href={getLocalizedUrl('history')}
                          onClick={(e) => { e.preventDefault(); navigate('history'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          {t('common.history') || 'History'}
                        </a>
                        <a
                          href={getLocalizedUrl('team')}
                          onClick={(e) => { e.preventDefault(); navigate('team'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Users className="w-4 h-4 text-emerald-600" />
                          {t('common.team') || 'Team'}
                        </a>
                        <a
                          href={getLocalizedUrl('terms')}
                          onClick={(e) => { e.preventDefault(); navigate('terms'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 transition-colors"
                        >
                          <CheckSquare className="w-4 h-4 text-amber-700" />
                          {t('common.terms') || 'Terms & Conditions'}
                        </a>
                      </div>
                    </div>
                  );
                }

                // --- 6. Contact Dropdown ---
                if (item.view === 'contact') {
                  return (
                    <div key={item.view} className="relative group/menu py-1.5">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={linkStyleClass}
                      >
                        <Phone className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className={`absolute top-[90%] ${isRtl ? 'right-0' : 'left-0'} mt-1.5 w-60 bg-white text-stone-800 rounded-2xl border border-stone-200 shadow-xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[120] ${isRtl ? 'text-right' : 'text-left'}`}>
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-stone-700" />
                          {t('common.contactUs') || 'Contact us'}
                        </a>
                        <a
                          href={getLocalizedUrl('contact-product-price')}
                          onClick={(e) => { e.preventDefault(); navigate('contact-product-price'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <BadgeDollarSign className="w-4 h-4 text-amber-600" />
                          {t('nav.productPrice') || 'Product price inquiry'}
                        </a>
                        <a
                          href={getLocalizedUrl('contact-shipping-price')}
                          onClick={(e) => { e.preventDefault(); navigate('contact-shipping-price'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-[12px] font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Truck className="w-4 h-4 text-blue-600" />
                          {t('nav.shippingPrice') || 'Shipping price inquiry'}
                        </a>
                        <a
                          href={getLocalizedUrl('contact-social-networks')}
                          onClick={(e) => { e.preventDefault(); navigate('contact-social-networks'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-[12px] font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 transition-colors"
                        >
                          <Globe className="w-4 h-4 text-indigo-655" />
                          {t('nav.social') || 'Social Networks'}
                        </a>
                      </div>
                    </div>
                  );
                }

                // --- 7. FAQ Dropdown ---
                if (item.view === 'faq') {
                  return (
                    <div key={item.view} className="relative group/menu py-1.5 font-sans">
                      <a
                        href={url}
                        onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                        className={linkStyleClass}
                      >
                        <HelpCircle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />
                        <span>{label}</span>
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover/menu:rotate-180 transition-transform duration-200" />
                      </a>
                      
                      {/* Sub-menu Dropdown Card */}
                      <div className={`absolute top-[90%] ${isRtl ? 'right-0' : 'left-0'} mt-1.5 w-60 bg-white text-stone-800 rounded-2xl border border-stone-200 shadow-xl overflow-hidden py-2 hidden group-hover/menu:block transition-all duration-200 z-[120] ${isRtl ? 'text-right' : 'text-left'}`}>
                        <a
                          href={url}
                          onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <HelpCircle className="w-4 h-4 text-stone-700" />
                          {t('common.faq') || 'FAQ Guide'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-products')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-products'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Sprout className="w-4 h-4 text-emerald-600" />
                          {t('common.products') || 'Products'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-packaging')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-packaging'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-[12px] font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <Layers className="w-4 h-4 text-amber-600" />
                          {t('common.packing') || 'Packaging'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-payment')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-payment'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-[12px] font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 border-b border-stone-100 transition-colors"
                        >
                          <CreditCard className="w-4 h-4 text-blue-600" />
                          {t('common.faq') || 'Payment'}
                        </a>
                        <a
                          href={getLocalizedUrl('faq-shipping')}
                          onClick={(e) => { e.preventDefault(); navigate('faq-shipping'); }}
                          className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#1db124] hover:bg-stone-50 transition-colors"
                        >
                          <Truck className="w-4 h-4 text-[#1a8a42]" />
                          {t('common.faq') || 'Shipping'}
                        </a>
                      </div>
                    </div>
                  );
                }

                // Normal un-dropdown links
                const isHome = item.view === 'home';
                const isBlog = item.view === 'blog';
                return (
                  <a
                    key={item.view}
                    href={url}
                    onClick={(e) => { e.preventDefault(); navigate(item.view); }}
                    className={linkStyleClass}
                  >
                    {isHome && <Home className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />}
                    {isBlog && <BookOpen className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#1db124]'}`} />}
                    <span>{label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right-most Group: Language, Social Links & Award Badge Certificates */}
            <div className={`hidden md:flex items-center gap-2 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
              
              {/* Dynamic Certificates badge button at the extreme end of floating white toolbar */}
              <a
                href="#/certificates"
                onClick={(e) => { e.preventDefault(); navigate('certificates'); }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 bg-[#1db124] hover:bg-[#1a8a42] text-white rounded-xl text-xs font-black shadow-md border hover:border-amber-400 active:scale-95 transition-all cursor-pointer"
                id="certificates-nav-badge"
              >
                <Award className="w-4 h-4 text-amber-100" />
                <span>{t('common.certificates') || 'Certificates'}</span>
              </a>

              {/* Language selection dropdown on white bar */}
              <div className="relative group/lang flex items-center gap-1 cursor-pointer py-1">
                <button 
                  type="button"
                  className="flex items-center gap-1 px-2.5 py-1.5 md:px-3 md:py-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#1db124]" />
                  <span>{currentLangObj.flag}</span>
                  <span>{currentLangObj.label}</span>
                  <ChevronDown className="w-3 h-3 text-stone-500 group-hover/lang:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Container */}
                <div className={`absolute top-full ${isRtl ? 'left-0' : 'right-0'} mt-1 w-44 bg-white border border-stone-200 rounded-xl shadow-2xl z-[150] overflow-hidden py-1 opacity-0 pointer-events-none group-hover/lang:opacity-100 group-hover/lang:pointer-events-auto transition-all duration-200 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {LANGUAGES_LIST.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      type="button"
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-[12px] font-bold transition-colors border-b border-stone-50 last:border-b-0 cursor-pointer ${
                        language === lang.code
                          ? 'bg-[#1db124] text-white font-bold'
                          : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                      }`}
                    >
                      <span className="text-sm leading-none">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social Media Rounded Buttons Row */}
              <div className="flex items-center gap-1" id="header-social-networks">
                {[
                  {
                    href: 'https://wa.me/989900978002',
                    title: 'WhatsApp',
                    svg: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  },
                  {
                    href: 'https://instagram.com/GilaFruit',
                    title: 'Instagram',
                    svg: <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" clipRule="evenodd" />
                  },
                  {
                    href: 'https://t.me/GilaFruit',
                    title: 'Telegram',
                    svg: <path d="M11.944 0C5.344 0 0 5.344 0 12c0 6.656 5.344 12 11.944 12 6.656 0 12-5.344 12-12 0-6.656-5.344-12-12-12zm5.82 8.356l-1.928 9.07c-.14.64-.52.8-.1.53l-2.935-2.163-1.415 1.362c-.156.156-.288.288-.59.288l.21-2.986 5.435-4.912c.236-.21-.051-.326-.367-.116L9.362 13.12l-2.894-.904c-.63-.2-.64-.63.13-.93l11.31-4.358c.524-.2.98.113.846.772H17.76c.004.056.004.056.004.1z" />
                  }
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.title}
                    className="w-7.5 h-7.5 rounded-full border border-stone-200 hover:border-[#1db124] text-stone-600 hover:text-[#1db124] transition-all flex items-center justify-center cursor-pointer bg-white"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                      {s.svg}
                    </svg>
                  </a>
                ))}
              </div>

            </div>

            {/* Mobile View Hamburger and Mobile-Menu controls */}
            <div className="md:hidden flex items-center gap-2">
              {/* Simple Language Trigger for Mobile */}
              <button 
                onClick={() => {
                  const nextIndex = (LANGUAGES_LIST.findIndex(l => l.code === language) + 1) % LANGUAGES_LIST.length;
                  changeLanguage(LANGUAGES_LIST[nextIndex].code);
                }}
                className="p-1 px-2.5 bg-stone-150 border border-stone-200 text-stone-700 text-xs font-semibold rounded-lg flex items-center gap-1"
                title="Change language"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase text-[10px]">{language}</span>
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU STREAMLINED DRAWER PANEL */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className={`md:hidden absolute top-full left-4 right-4 bg-white border border-stone-200 rounded-2xl p-4 space-y-2 flex flex-col transition-all duration-300 shadow-2xl max-h-[80vh] overflow-y-auto ${
            isRtl ? 'text-right' : 'text-left'
          }`}
        >
          {navItems.map((item) => {
            const label = t(item.labelKey);
            const isActive = isViewActive(item.view);
            const url = getLocalizedUrl(item.view);

            if (item.view === 'products' || item.view === 'packing' || item.view === 'services' || item.view === 'faq' || item.view === 'about' || item.view === 'contact') {
              // Expandable standard sections in mobile view
              return (
                <div key={item.view} className="space-y-1">
                  <div className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between ${
                    isActive ? 'bg-[#1db124]/10 text-[#1db124]' : 'text-[#1db124]'
                  }`}>
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#1db124]/70" />
                  </div>
                  <div className={`ml-2 mr-2 py-1 space-y-1 ${
                    isRtl ? 'border-r-2 border-[#1db124]/20 pr-3' : 'border-l-2 border-[#1db124]/20 pl-3'
                  }`}>
                    <a
                      href={url}
                      onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                      className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                    >
                      {t('common.viewMore') || 'Details'}
                    </a>
                    {item.view === 'products' && (
                      <>
                        <a
                          href={`${url}?category=fruit`}
                          onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=fruit`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🍃 {t('nav.fruits') || 'Fruits'}
                        </a>
                        <a
                          href={`${url}?category=vegetable`}
                          onClick={(e) => { e.preventDefault(); navigate('products'); window.history.pushState({}, '', `${url}?category=vegetable`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🌿 {t('nav.vegetables') || 'Vegetables'}
                        </a>
                        <a
                          href={getLocalizedUrl('calendar')}
                          onClick={(e) => { e.preventDefault(); navigate('calendar'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          📅 {t('nav.calendar') || 'Product calendar'}
                        </a>
                        <a
                          href={getLocalizedUrl('catalog')}
                          onClick={(e) => { e.preventDefault(); navigate('catalog'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          📖 {t('nav.catalog') || 'Catalog of Products'}
                        </a>
                      </>
                    )}
                    {item.view === 'packing' && (
                      <>
                        <a
                          href={`${url}?tab=fruits`}
                          onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=fruits`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🍏 {t('nav.fruits') || 'Fruits Packing'}
                        </a>
                        <a
                          href={`${url}?tab=vegetables`}
                          onClick={(e) => { e.preventDefault(); navigate('packing'); window.history.pushState({}, '', `${url}?tab=vegetables`); window.dispatchEvent(new Event('popstate')); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🍀 {t('nav.vegetables') || 'Vegetables Packing'}
                        </a>
                      </>
                    )}
                    {item.view === 'services' && (
                      <>
                        <a
                          href={getLocalizedUrl('services-customs')}
                          onClick={(e) => { e.preventDefault(); navigate('services-customs'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🛡️ {t('nav.customs') || 'Customs Clearance'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-logistic')}
                          onClick={(e) => { e.preventDefault(); navigate('services-logistic'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🏢 {t('nav.logistics') || 'Logistics & cold storage'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-transportation')}
                          onClick={(e) => { e.preventDefault(); navigate('services-transportation'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🚛 {t('nav.transport') || 'Refrigerated Transportation'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-freight-rates')}
                          onClick={(e) => { e.preventDefault(); navigate('services-freight-rates'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          💵 {t('nav.rates') || 'Freight Rates'}
                        </a>
                        <a
                          href={getLocalizedUrl('services-truck-stats')}
                          onClick={(e) => { e.preventDefault(); navigate('services-truck-stats'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          📊 {t('nav.truckStats') || 'Truck Tracking'}
                        </a>
                      </>
                    )}
                    {item.view === 'about' && (
                      <>
                        <a
                          href={getLocalizedUrl('certificates')}
                          onClick={(e) => { e.preventDefault(); navigate('certificates'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          🏅 {t('common.certificates') || 'Certificates'}
                        </a>
                        <a
                          href={getLocalizedUrl('history')}
                          onClick={(e) => { e.preventDefault(); navigate('history'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          📜 {t('common.history') || 'Our History'}
                        </a>
                        <a
                          href={getLocalizedUrl('team')}
                          onClick={(e) => { e.preventDefault(); navigate('team'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          👥 {t('common.team') || 'Expert Team'}
                        </a>
                        <a
                          href={getLocalizedUrl('terms')}
                          onClick={(e) => { e.preventDefault(); navigate('terms'); handleNavClick(); }}
                          className="block px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-50"
                        >
                          ⚖️ {t('common.terms') || 'Terms & Conditions'}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.view}
                href={url}
                onClick={(e) => { e.preventDefault(); navigate(item.view); handleNavClick(); }}
                className={`block px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#1db124] text-white shadow-xs'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-stone-150 flex flex-col gap-2">
            
            <a
              href="#/certificates"
              onClick={(e) => { e.preventDefault(); navigate('certificates'); handleNavClick(); }}
              className="inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-[#1db124] hover:bg-[#1a8a42] text-white rounded-xl text-xs font-black shadow-md border"
            >
              <Award className="w-4.5 h-4.5 text-white" />
              <span>{t('common.certificates') || 'Certificates'}</span>
            </a>

            {/* Language grid inside mobile drawer */}
            <div className="grid grid-cols-3 gap-1.5 py-1.5">
              {LANGUAGES_LIST.slice(0, 9).map((lang) => (
                <button
                  key={lang.code}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all ${
                    language === lang.code 
                      ? 'bg-[#1db124]/15 border-[#1db124] text-[#1db124]' 
                      : 'border-stone-200 text-stone-600 hover:bg-[#1db124]/10'
                  }`}
                  onClick={() => { changeLanguage(lang.code); handleNavClick(); }}
                >
                  <span className="mr-0.5">{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Quick whatsapp and address under mobile drawer */}
            <div className="text-[10px] text-stone-600 space-y-1.5 py-2 px-3 bg-stone-50 rounded-xl font-sans tracking-wide">
              <a 
                href="https://wa.me/989900978002"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1db124] inline-block animate-pulse"></span>
                <strong>Whatsapp:</strong> +98 990 097 8002
              </a>
              <div>
                <strong>Astara Office:</strong> +98 21 9109 9091
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
