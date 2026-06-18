import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  Globe, 
  ShieldCheck, 
  Scale, 
  FileText, 
  FileClock, 
  Terminal, 
  User, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  Search, 
  Share2, 
  Printer, 
  Download, 
  AlertCircle, 
  Gavel, 
  ExternalLink, 
  Eye, 
  ShieldAlert,
  Sparkles,
  BookmarkCheck,
  Building,
  Mail,
  Locate
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TERMS_TEXTS, Section } from './termsTranslations';

const iconMap: Record<string, React.ComponentType<any>> = {
  'introduction': BookOpen,
  'user-definitions': Users,
  'terms-and-conditions': ShieldCheck,
  'legal-consequences': Gavel,
  'services': BookmarkCheck,
  'privacy': Eye,
  'liability': Scale,
  'governing-laws': Locate,
  'changes': FileClock,
  'contact': Mail
};

export default function TermsScreen() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTldrMode, setIsTldrMode] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const { language } = useLanguage();
  const ln = TERMS_TEXTS[language] || TERMS_TEXTS.en;
  const isCursive = language === 'fa' || language === 'ar';

  // Deriving the sections array dynamically with their designated lucide icons
  const sections: Section[] = useMemo(() => {
    return ln.sections.map(sec => ({
      ...sec,
      icon: iconMap[sec.id] || FileText
    }));
  }, [ln]);

  // Search filter matching searchQuery across title, tldr, and text
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const query = searchQuery.toLowerCase();
    return sections.filter(sec => {
      const matchTitle = sec.title.toLowerCase().includes(query) || (sec.persianTitle && sec.persianTitle.toLowerCase().includes(query));
      const matchTldr = sec.tldr.toLowerCase().includes(query);
      const matchParagraphs = sec.paragraphs.some(p => {
        const textMatch = p.text.toLowerCase().includes(query) || (p.title && p.title.toLowerCase().includes(query));
        const bulletMatch = p.bullets && p.bullets.some(b => b.toLowerCase().includes(query));
        return textMatch || bulletMatch;
      });
      return matchTitle || matchTldr || matchParagraphs;
    });
  }, [searchQuery, sections]);

  // Handle high-speed click and scroll to target layout element
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 140; // Perfect spacing accounting for corporate header bar
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Scrollspy to automatically reflect active side TOC item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Share specific clause link helper
  const handleCopyLink = (sectionId: string) => {
    const link = `${window.location.origin}/#/terms-and-conditions?section=${sectionId}`;
    navigator.clipboard.writeText(link);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Interactive agreement download loader in the user's active language
  const handleDownloadDraft = () => {
    if (downloadProgress !== null) return;
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadProgress(null), 1200);

          const docHeader = language === 'fa' 
            ? `شرایط و ضوابط همکاری و مقررات صادراتی گیلافروت (شرکت سبز گستران گیلان)\n`
            : `GILAFRUIT (SABZ GOSTARAN GILAN) - COOPERATIVE AGREEMENT TERMS & EXPORT QUALITY RULES\n`;
          
          const docDivider = "\n========================================================================\n\n";

          // Simulated safe text file generation of terms
          const blob = new Blob([
            docHeader,
            `========================================================================\n`,
            `Document compliance ID: COMP-RT-${new Date().getFullYear()}\n`,
            `Revision Date: 2026-06-17\n`,
            `Language: ${language.toUpperCase()}\n\n`,
            sections.map(s => `[${s.title.toUpperCase()}]\n${s.tldr}\n\n${s.paragraphs.map(p => `${p.title ? `${p.title}: ` : ''}${p.text}${p.bullets ? `\n   - ` + p.bullets.join('\n   - ') : ''}`).join('\n\n')}`).join(docDivider)
          ], { type: 'text/plain;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `GilaFruit-Terms-Conditions-${language}-2026.txt`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <div className="bg-gradient-to-b from-[#f2f8f4] via-[#fbfcfa] to-[#fbfcfa] min-h-screen text-slate-800 pt-[64px] sm:pt-[80px] md:pt-[118px]">
      
      {/* Brand Header & Legal Navigation Banner */}
      <div className="border-b border-emerald-900/10 bg-[#01261d] text-white py-16 px-4 relative overflow-hidden">
        {/* Decorative background visual elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-emerald-950/40 rounded-full filter blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between relative z-10 space-y-6 md:space-y-0">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <p className={`text-[11px] text-emerald-400 font-extrabold ${isCursive ? 'font-sans' : 'font-mono tracking-[0.25em] uppercase'}`}>
                {ln.heroTag}
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-none text-white max-w-3xl">
              {ln.heroTitleRegular}<span className="text-amber-400">{ln.heroTitleHighlight}</span>
            </h1>
            
            <p className="text-emerald-100/70 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {ln.heroDesc}
            </p>
          </div>

          {/* Quick interactive utility launcher */}
          <div className="flex flex-wrap gap-2.5 items-center">
            <button 
              onClick={handlePrint}
              className="px-4 py-2.5 bg-emerald-900/40 hover:bg-[#1a8a42]/30 text-emerald-100 border border-emerald-800/40 hover:border-emerald-700/50 rounded-2xl text-xs font-black tracking-wider uppercase transition-all duration-305 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              {ln.btnPrintCode}
            </button>
            
            <button 
              onClick={handleDownloadDraft}
              disabled={downloadProgress !== null}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black tracking-wider uppercase transition-all duration-305 flex items-center gap-1.5 shadow-sm border cursor-pointer ${
                downloadProgress !== null 
                  ? 'bg-amber-400/90 text-[#01261d] border-amber-500' 
                  : 'bg-amber-400 hover:bg-amber-500 text-[#01261d] border-amber-300 hover:scale-103'
              }`}
            >
              {downloadProgress !== null ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  {ln.generatingPdf} {downloadProgress}%
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  {ln.btnDownloadVerified}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main control and display wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Interactive Filter Drawer Widget */}
        <div className="bg-white rounded-[24px] border border-slate-200/60 shadow-sm p-4 sm:p-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
          
          {/* Visual pattern accent */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />

          {/* Live Clause Finder */}
          <div className="relative flex-1 max-w-lg">
            <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              type="text"
              placeholder={ln.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 bg-slate-50 border border-slate-250 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/60 focus:bg-white transition-all font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-4 flex items-center text-xs font-black text-[#1a8a42] hover:text-emerald-950 transition-colors"
                title={ln.clearSearch}
              >
                {ln.clearSearch}
              </button>
            )}
          </div>

          {/* Visual Layout Toggles (Executive Scan / Detail Scan Mode) */}
          <div className="flex items-center gap-4 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
            <div className="text-left">
              <p className={`text-[10px] text-slate-400 font-bold ${isCursive ? 'font-sans' : 'font-mono tracking-wider uppercase'}`}>{ln.readingModeLabel}</p>
              <p className="text-xs font-black text-[#01261d]">{ln.readingModeSub}</p>
            </div>
            
            <button 
              onClick={() => setIsTldrMode(!isTldrMode)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${
                isTldrMode ? 'bg-[#1a8a42]' : 'bg-slate-200'
              }`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 shadow-md ${
                isTldrMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

        </div>

        {/* Master Double-Column Legal Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Side Navigation Table of Contents - Sticky Desktop element */}
          <div className="lg:col-span-4 block">
            <div className="sticky top-[140px] space-y-5">
              
              <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <span className={`text-[11px] font-black text-slate-400 ${isCursive ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>
                    {ln.tableOfContents}
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                    {ln.articlesCount.replace('{count}', filteredSections.length.toString())}
                  </span>
                </div>

                <nav className="space-y-1.5 max-h-[50vh] overflow-y-auto pr-1">
                  {filteredSections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full flex items-center justify-between px-3 md:px-4 py-3 rounded-2xl text-xs font-extrabold text-left transition-all duration-300 hover:bg-slate-50 group border ${
                          isActive 
                            ? 'bg-emerald-50/75 text-emerald-900 border-emerald-100/80 shadow-xs' 
                            : 'text-slate-600 border-transparent hover:border-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`p-1.5 rounded-xl transition-colors ${
                            isActive ? 'bg-emerald-800 text-amber-400' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-emerald-900'
                          }`}>
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="truncate max-w-[150px] md:max-w-xs">{sec.title}</span>
                        </div>
                        
                        {isActive && (
                          <motion.span 
                            layoutId="activeSideDot" 
                            className="h-1.5 w-1.5 rounded-full bg-emerald-600"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                  {filteredSections.length === 0 && (
                    <div className="text-center py-6 text-slate-400 text-xs">
                      {ln.noMatchingArticles}
                    </div>
                  )}
                </nav>
              </div>

              {/* Legal Disclaimer Badge */}
              <div className="bg-amber-50 rounded-[28px] border border-amber-200/50 p-6 text-left space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/5 rounded-full pointer-events-none" />
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  {ln.wholesaleAdvisoryTitle}
                </h4>
                <p className="text-amber-800/80 text-[11px] sm:text-xs leading-relaxed font-sans">
                  {ln.wholesaleAdvisoryDesc}
                </p>
              </div>

            </div>
          </div>

          {/* Main Legal Documents Column */}
          <div className="lg:col-span-8 space-y-8">
            
            <AnimatePresence mode="popLayout">
              {filteredSections.map((sec, secIndex) => {
                const Icon = sec.icon;
                const isSelected = activeSection === sec.id;
                
                return (
                  <motion.div
                    key={sec.id}
                    id={sec.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(secIndex * 0.05, 0.3) }}
                    className={`bg-white rounded-[32px] border transition-all duration-500 text-left overflow-hidden ${
                      isSelected 
                        ? 'border-emerald-800/40 shadow-xl shadow-emerald-900/5 ring-1 ring-emerald-800/10' 
                        : 'border-slate-200/60 shadow-sm hover:border-slate-300'
                    }`}
                  >
                    
                    {/* Header bar of each block */}
                    <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      
                      <div className="flex items-center gap-3.5">
                        <span className={`p-3 rounded-2xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#01261d] text-amber-400' : 'bg-slate-200/75 text-slate-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </span>
                        
                        <div className="space-y-0.5">
                          {sec.persianTitle && language !== 'fa' && (
                            <span className="text-[10px] block font-black text-[#1a8a42] tracking-wider uppercase font-sans">
                              {sec.persianTitle}
                            </span>
                          )}
                          <h2 className="text-lg sm:text-xl font-black text-[#01261d] font-display">
                            {secIndex + 1}. {sec.title}
                          </h2>
                        </div>
                      </div>

                      {/* Header Interactive Utilities */}
                      <div className="flex items-center gap-1.5 self-start sm:self-auto">
                        <button 
                          onClick={() => handleCopyLink(sec.id)}
                          className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-500 hover:text-emerald-900 shadow-xs relative transition-all"
                          title="Copy Link to Clause"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          
                          {/* Copied tooltip feedback */}
                          <AnimatePresence>
                            {copiedSection === sec.id && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: -28, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded shadow-md whitespace-nowrap"
                              >
                                {language === 'fa' ? 'لینک کپی شد!' : language === 'ru' ? 'Ссылка скопирована!' : language === 'ar' ? 'تم نسخ الرابط!' : 'Link Copied!'}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>

                    </div>

                    {/* Central Area Content */}
                    <div className="p-6 sm:p-8 space-y-6">

                      {/* TL;DR Executive Core summary */}
                      <div className="bg-[#fbfcfa] border border-[#1a8a42]/10 rounded-2xl p-4.5 text-left flex gap-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-amber-400 opacity-60" />
                        <span className="text-amber-500 flex-shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4 fill-amber-400/20" />
                        </span>
                        <div className="space-y-1">
                          <p className={`text-[9px] font-black text-slate-400 ${isCursive ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>
                            {language === 'fa' ? 'خلاصه اجرایی بند' : language === 'ru' ? 'Краткое содержание статьи' : language === 'ar' ? 'ملخص تنفيذي للبند' : 'Executive TL;DR Point'}
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed font-sans">{sec.tldr}</p>
                        </div>
                      </div>

                      {/* Heavy Regulatory Paragraph Sheets */}
                      <AnimatePresence mode="wait">
                        {!isTldrMode && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-5 overflow-hidden"
                          >
                            <div className="h-px bg-slate-100" />
                            {sec.paragraphs.map((p, pIndex) => (
                              <div key={pIndex} className="space-y-2.5 text-left">
                                {p.title && (
                                  <h3 className="text-xs sm:text-sm font-black text-[#01261d] tracking-tight uppercase">
                                    • {p.title}
                                  </h3>
                                )}
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans text-justify">
                                  {p.text}
                                </p>
                                
                                {p.bullets && p.bullets.length > 0 && (
                                  <ul className="space-y-2 pl-4 pt-1 text-left">
                                    {p.bullets.map((b, bIndex) => (
                                      <li key={bIndex} className="flex gap-2.5 text-xs sm:text-sm text-slate-600 items-start">
                                        <CheckCircle2 className="w-4 h-4 text-[#1a8a42] flex-shrink-0 mt-0.5" />
                                        <span className="font-sans leading-relaxed text-left">{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Empty search matching state block */}
            {filteredSections.length === 0 && (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-[32px] p-16 text-center text-slate-400 space-y-4">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-black text-slate-800">{ln.noClausesFoundTitle}</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  {ln.noClausesFoundDesc}
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 border border-slate-200 hover:border-[#1a8a42]/30 hover:bg-[#1a8a42]/5 rounded-xl text-xs font-bold text-emerald-900 transition-all cursor-pointer"
                >
                  {ln.clearFiltersBtn}
                </button>
              </div>
            )}

            {/* Beautiful corporate signatory footer block */}
            <div className="bg-[#01261d] text-white rounded-[32px] p-8 sm:p-10 relative overflow-hidden text-left border border-emerald-800">
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-black text-amber-400 font-display">
                    {ln.signatoryTitle}
                  </h3>
                  <p className="text-xs text-emerald-100/70 font-semibold uppercase tracking-wider">
                    {ln.signatorySub}
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed font-sans">
                  {ln.signatoryDesc}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="bg-[#021f18] border border-emerald-900 px-4 py-3 rounded-2xl flex items-center gap-3">
                    <span className="p-2 bg-emerald-900/60 rounded-xl text-amber-400">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <div className="text-left leading-none space-y-1">
                      <p className={`text-[9px] text-emerald-400 font-bold ${isCursive ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>{ln.complianceLabel}</p>
                      <p className="text-xs font-bold text-white">{ln.complianceValue}</p>
                    </div>
                  </div>

                  <div className="bg-[#021f18] border border-emerald-900 px-4 py-3 rounded-2xl flex items-center gap-3">
                    <span className="p-2 bg-emerald-900/60 rounded-xl text-amber-400">
                      <Scale className="w-4 h-4" />
                    </span>
                    <div className="text-left leading-none space-y-1">
                      <p className={`text-[9px] text-[#1a8a42] font-bold ${isCursive ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>{ln.arbitrationLabel}</p>
                      <p className="text-xs font-bold text-white">{ln.arbitrationValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
