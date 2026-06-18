import { useState } from 'react';
import { 
  Eye, ShieldCheck, FileText, CheckCircle2, AlertCircle, HelpCircle, 
  ArrowRight, ClipboardCheck, Scale, Award, Layers, HelpCircle as HelpIcon,
  Zap, LayoutGrid, CheckSquare, ClipboardList, Activity, Package, Sprout, Check
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { subServicesTranslations } from '../servicesTranslationsSub';

interface CustomsServiceScreenProps {
  onNavigate?: (targetHash: string) => void;
}

// Custom High-fidelity SVG vector for Comprehensive Services
const ComprehensiveServicesIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 15 L50 22 M50 78 L50 85 M15 50 L22 50 M78 50 L85 50" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="14" fill="#e8f5e9" />
    <circle cx="50" cy="50" r="8" stroke="#1a8a42" />
    <path d="M25 35 C 32 20, 68 20, 75 35" strokeDasharray="3 3" />
    <path d="M22 65 C 30 82, 70 82, 78 65" />
  </svg>
);

// Custom High-fidelity SVG vector for Agricultural Expertise
const AgriculturalExpertiseIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="35" y="25" width="30" height="42" rx="3" fill="#e8f5e9" strokeWidth="1.5" />
    <path d="M44 25 L44 20 C44 18, 56 18, 56 20 L56 25" fill="#cbd5e1" />
    <path d="M48 48 C43 48, 41 53, 48 57 C55 53, 53 48, 48 48 Z" fill="#2e7d32" stroke="none" />
    <line x1="48" y1="48" x2="48" y2="59" stroke="#1a8a42" strokeWidth="1.5" />
    <line x1="42" y1="36" x2="58" y2="36" />
    <line x1="52" y1="44" x2="58" y2="44" />
    <line x1="42" y1="60" x2="58" y2="60" />
  </svg>
);

// Custom High-fidelity SVG vector for Extensive Market Coverage
const MarketCoverageIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="28" fill="#e8f5e9" />
    <path d="M22 50 H78 M50 22 V78" stroke="#1a8a42" strokeWidth="1.5" />
    <path d="M27 35 Q50 45 73 35 M27 65 Q50 55 73 65" stroke="#1a8a42" strokeWidth="1" />
    <circle cx="34" cy="38" r="3" fill="#2e7d32" stroke="none" />
    <circle cx="68" cy="42" r="3" fill="#2e7d32" stroke="none" />
    <circle cx="50" cy="62" r="3.5" fill="#2e7d32" stroke="none" />
  </svg>
);

export default function CustomsServiceScreen({ onNavigate }: CustomsServiceScreenProps) {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(2);

  // Load active translations with a safe fallback
  const texts = subServicesTranslations[language]?.customs || subServicesTranslations['en'].customs;
  const isRtl = language === 'fa' || language === 'ar';

  return (
    <div className={`bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} id="customs-page-view">
      
      {/* 1. HERO HEADER SECTION */}
      <div 
        className="relative pt-[140px] pb-20 sm:pt-[170px] sm:pb-28 md:pt-[210px] md:pb-32 lg:pt-[230px] lg:pb-36 bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(1, 15, 12, 0.75), rgba(0, 0, 0, 0.78)), url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600')` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto">
            {texts.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-4xl mx-auto font-semibold">
            {texts.description}
          </p>
        </div>

        {/* Custom grass-styled bottom jagged separator to match the screenshot edge pattern */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 select-none">
          <svg className="relative block w-full h-[18px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,0 L20,60 L40,0 L60,60 L80,0 L100,60 L120,0 L140,60 L160,0 L180,60 L200,0 L220,60 L240,0 L260,60 L280,0 L300,60 L320,0 L340,60 L360,0 L380,60 L400,0 L420,60 L440,0 L460,60 L480,0 L500,60 L520,0 L540,60 L560,0 L580,60 L600,0 L620,60 L640,0 L660,60 L680,0 L700,60 L720,0 L740,60 L760,0 L780,60 L800,0 L820,60 L840,0 L860,60 L880,0 L900,60 L920,0 L940,60 L960,0 L980,60 L1000,0 L1020,60 L1040,0 L1060,60 L1080,0 L1100,60 L1120,0 L1140,60 L1160,0 L1180,60 L1200,0 L1200,120 L0,120 Z" 
              fill="#fcfdfc"
            />
          </svg>
        </div>
      </div>

      {/* 2. THREE CHANNELS FLOATING OVERLAY CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center">
          
          {/* Card 1: Comprehensive Services */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:pr-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <ComprehensiveServicesIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              {texts.card1Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              {texts.card1Desc}
            </p>
          </div>

          {/* Card 2: Agricultural Expertise */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:px-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <AgriculturalExpertiseIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              {texts.card2Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              {texts.card2Desc}
            </p>
          </div>

          {/* Card 3: Extensive Market Coverage */}
          <div className="flex flex-col items-center space-y-4 md:pl-6">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <MarketCoverageIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              {texts.card3Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              {texts.card3Desc}
            </p>
          </div>

        </div>
      </div>

      {/* 3. TWO COLS DESCRIPTION BLOCK & BENEFITS CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: The Importance of Quality Standards and Quarantine */}
          <div className="border-l-4 border-l-[#1a8a42] bg-[#f8faf7] rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
                {texts.sectionTitle}
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-semibold">
                {texts.sectionDesc}
              </p>
            </div>

            {/* Solid Pill-shaped Eye/Green CERTIFICATIONS Button */}
            <div className="flex justify-start">
              <button
                onClick={() => onNavigate?.('#/certificates')}
                className="px-6 py-2.5 bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4.5 h-4.5 text-white" />
                <span>{texts.buttonLabel}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Paragraph narrative */}
          <div className="space-y-6 pt-2">
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              {language === 'fa' ? (
                <>با بیش از سال‌ها <span className="text-[#1a8a42] font-bold">تجربه درخشان</span> در صادرات کشاورزی، پایانه صادراتی ما به ساده‌سازی صدور گواهینامه‌های رسمی انواع تندبار از جمله سیب، گلابی، سیر و کیوی کمک می‌کند و به عنوان مرجعی ایمن شناخته می‌شود.</>
              ) : (
                <>Our dedicated customs clearance processes, engineered over two decades, ensure high efficacy in handling delicate agriculture items. We specialize in swift, cold-chain compliant handling at primary border terminals.</>
              )}
            </p>
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              {language === 'fa' ? (
                <>تضمین سلامت آلی محصولات و هماهنگی دقیق با سازمان‌های ذی‌ربط کشور مقصد، از ویژگی‌های برتر این بخش است تا خروج کامیون‌های یخچال‌دار بدون کوچک‌ترین اتلاف وقتی روی دهد.</>
              ) : (
                <>Adhering strictly to bilateral trading requirements guarantees that freight dispatches avoid costly quarantine queues. We monitor compliance guidelines dynamically for all our partner countries.</>
              )}
            </p>
          </div>

        </div>
      </div>

      {/* 4. THE PROCESS OF FRUIT AND VEGETABLE CLEARANCE (7 Grid Items) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        
        {/* Section Heading & Dots */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {language === 'fa' ? 'فرآیند ترخیص محصولات کشاورزی و تفکیک گمرکی' : 'The Fruit and Vegetable Clearance Process'}
          </h2>
          
          <div className="flex items-center justify-center gap-1.5 py-1">
            <span className="w-5 h-2 rounded bg-emerald-500 transition-all" />
            <span className="w-2.5 h-2 rounded bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
          </div>
        </div>

        {/* Mapped Process Stage Grid boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center" id="customs-process-grid">
          
          {/* Box 1: Goods Inspection */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Sprout className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {texts.inspectTitle}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              {texts.inspectDesc}
            </p>
          </div>

          {/* Box 2: Customs Declaration */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Activity className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {texts.declTitle}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              {texts.declDesc}
            </p>
          </div>

          {/* Box 3: Document Preparation */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <FileText className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {texts.prepTitle}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              {texts.prepDesc}
            </p>
          </div>

          {/* Box 4: Quarantine Certificate */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Package className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {texts.quarTitle}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              {texts.quarDesc}
            </p>
          </div>

          {/* Box 5: Health Certificate */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {texts.healTitle}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              {texts.healDesc}
            </p>
          </div>

          {/* Box 6: Obtaining Necessary Permits */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <CheckSquare className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {texts.permTitle}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              {texts.permDesc}
            </p>
          </div>

        </div>

        {/* Box 7: Customs Clearance - Centered bottom element */}
        <div className="max-w-xl mx-auto mt-6 bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
          <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
            <LayoutGrid className="w-7 h-7 text-[#1a8a42]" />
          </div>
          <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
            {texts.clearTitle}
          </h4>
          <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-sm">
            {texts.clearDesc}
          </p>
        </div>

      </div>

      {/* 5. DYNAMIC INTERACTIVE CAROUSEL ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
              alt="Harvest green kiwis crates sorted" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#000000]/10" />
          </div>

          {/* Card 2 */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" 
              alt="Heavy Duty Overland Transport Reefer Trailer Truck" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#000000]/10" />
          </div>

          {/* Card 3 WITH ACTIVE INTERACTIVE REDIRECT (Logistic) */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group select-none flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
              alt="Forklift loader lifting harvest green packages" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
            
            <div className="absolute top-6 left-6 flex items-center gap-1.5 z-20">
              <button 
                onClick={() => setActiveSlide(0)}
                className={`w-2 h-2 rounded-full transition-all ${activeSlide === 0 ? 'bg-sky-400 scale-110' : 'bg-white/40'}`} 
              />
              <button 
                onClick={() => setActiveSlide(1)}
                className={`w-2 h-2 rounded-full transition-all ${activeSlide === 1 ? 'bg-sky-400 scale-110' : 'bg-white/40'}`} 
              />
              <button 
                onClick={() => setActiveSlide(2)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeSlide === 2 ? 'bg-sky-400 scale-110' : 'bg-white'}`} 
              />
            </div>

            <div className="relative z-20 p-6 flex flex-col items-center space-y-3.5">
              <h3 className="text-white font-display text-lg sm:text-xl font-extrabold tracking-tight">
                {language === 'fa' ? 'سردخانه و لجستیک' : 'Logistics & cold facilities'}
              </h3>
              <button
                onClick={() => onNavigate?.('#/services/logistic')}
                className="px-5 py-2 bg-black/60 border border-white/20 hover:bg-[#1a8a42] hover:border-transparent text-white font-black text-xs tracking-wider uppercase rounded-full shadow transition-all cursor-pointer"
              >
                {language === 'fa' ? 'جزئیات سردخانه‌' : 'More Information'}
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
