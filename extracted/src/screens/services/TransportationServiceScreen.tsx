import { useState } from 'react';
import { 
  Eye, ShieldCheck, FileText, CheckCircle2, AlertCircle, HelpCircle, 
  ArrowRight, ClipboardCheck, Scale, Award, Layers, HelpCircle as HelpIcon,
  Zap, LayoutGrid, CheckSquare, ClipboardList, Activity, Package, Sprout, Check,
  Sparkles, Route
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { subServicesTranslations } from '../servicesTranslationsSub';

interface TransportationServiceScreenProps {
  onNavigate?: (targetHash: string) => void;
}

// Custom High-fidelity SVG vector for Air Freight Balloon/Plane
const BalloonIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="45" r="25" fill="#e8f5e9" />
    <path d="M50 20 V70 M30 35 H70 M35 55 H65" strokeWidth="1" />
    <rect x="44" y="70" width="12" height="10" rx="1" fill="#cbd5e1" />
    <path d="M40 70 L34 85 M60 70 L66 85" />
  </svg>
);

// Custom High-fidelity SVG vector for Maritime Cargo Ship
const ShipIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 60 L85 60 L78 78 H22 Z" fill="#e8f5e9" />
    <rect x="32" y="32" width="12" height="28" fill="#e8f5e9" />
    <rect x="48" y="24" width="14" height="36" fill="#e8f5e9" />
    <rect x="66" y="44" width="8" height="16" fill="#cbd5e1" strokeWidth="1" />
    <line x1="8" y1="78" x2="92" y2="78" stroke="#10b981" strokeWidth="1.5" />
  </svg>
);

// Custom High-fidelity SVG vector for Land Cargo Trailer Truck
const CargoTruckIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="15" y="28" width="50" height="30" rx="2" />
    <path d="M65 38 L78 38 C81 38, 85 41, 85 45 L85 58 M65 58 L85 58" />
    <path d="M68 40 L77 40 L75 47 L68 47 Z" />
    <circle cx="26" cy="62" r="6" />
    <circle cx="41" cy="62" r="6" />
    <circle cx="76" cy="62" r="6" />
    <line x1="12" y1="58" x2="88" y2="58" />
  </svg>
);

export default function TransportationServiceScreen({ onNavigate }: TransportationServiceScreenProps) {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const texts = subServicesTranslations[language]?.transportation || subServicesTranslations['en'].transportation;
  const isRtl = language === 'fa' || language === 'ar';

  return (
    <div className={`bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} id="transportation-page-view">
      
      {/* 1. HERO HEADER SECTION */}
      <div 
        className="relative pt-[140px] pb-20 sm:pt-[170px] sm:pb-28 md:pt-[210px] md:pb-32 lg:pt-[230px] lg:pb-36 bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(1, 15, 12, 0.75), rgba(0, 0, 0, 0.78)), url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1600')` 
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
          
          {/* Card 1: Air Freight */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:pr-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <BalloonIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              {texts.card1Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              {texts.card1Desc}
            </p>
          </div>

          {/* Card 2: Sea Freight */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:px-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <ShipIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              {texts.card2Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              {texts.card2Desc}
            </p>
          </div>

          {/* Card 3: Land Transportation */}
          <div className="flex flex-col items-center space-y-4 md:pl-6">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <CargoTruckIcon />
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
          
          {/* Left Column: Benefits of using GilaFruit highlights */}
          <div className="border-l-4 border-l-[#1a8a42] bg-[#f8faf7] rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
                {texts.sectionTitle}
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-semibold">
                {texts.sectionDesc}
              </p>
            </div>

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
                <>مدیریت دمایی محموله‌‌ها از بدو خروج از سالن‌های سورتینگ گیلافروت آستارا، زیر ذره‌بین کارشناسان فنی حمل‌ونقل قرار دارد. با تدارک سیستم خنک‌کننده پیوسته، طعم، طراوت و سختی بافت انواع هلو، کیوی و تره‌بار تضمین می‌شود.</>
              ) : (
                <>Our modern heavy truck fleets are audited and cleaned to prevent microbial cross-contamination. With advanced Thermo King climate nodes, we promise zero temperature spikes during long-distance transits.</>
              )}
            </p>
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              {language === 'fa' ? (
                <>ناوگان کامل تریلرهای یخچال‌دار ملکی و همکاری نزدیک با لاین‌های معتبر دریای خزر فرصتی امن برای تجار گرامی جهت ارسال بی‌دغدغه بار فراهم ساخته است.</>
              ) : (
                <>We coordinate seamlessly across land borders and international railway hubs to expedite customs clearances and deliver cargo safely to retail centers.</>
              )}
            </p>
          </div>

        </div>
      </div>

      {/* 4. SERVICES OFFERED BY GILAFRUIT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {language === 'fa' ? 'دستاوردهای شاخص بخش ترانزیت گیلافروت' : 'Integrated Transit Operations'}
          </h2>
          
          <div className="flex items-center justify-center gap-1.5 py-1">
            <span className="w-5 h-2 rounded bg-emerald-500 transition-all" />
            <span className="w-2.5 h-2 rounded bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
          </div>
        </div>

        {/* 3x3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center" id="services-grid-block">
          
          {/* Box 1: Cargo Insurance */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {language === 'fa' ? 'بیمه تضمین کالا' : 'Cargo Insurance'}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs font-semibold">
              {language === 'fa' ? 'تحت پوشش قرار دادن کامل ارزش مادی محموله از زمان بارگیری تا تخلیه به منظور رفع دغدغه‌های تجار.' : 'Comprehensive protection plans safeguarding cargo values against transit damages and border delays.'}
            </p>
          </div>

          {/* Box 2: Preparation of Customs Documents */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <FileText className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {language === 'fa' ? 'تهیه فوری اسناد گمرکی' : 'Customs Document Preparation'}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs font-semibold">
              {language === 'fa' ? 'تنظیم سریع اسناد ترجیحی، فاکتور منشا و تاییدیه بهداشتی زیر نظر ترخیص‌کاران زبده.' : 'Rapid electronic manifest alignments protecting against quarantine delays at borders.'}
            </p>
          </div>

          {/* Box 3: Customs Clearance */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Scale className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              {language === 'fa' ? 'امور ترخیص و ویزای مرزی' : 'Meticulous Clearance Handling'}
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs font-semibold">
              {language === 'fa' ? 'تسریع فرآیندهای اداری گمرکی و پرداخت عوارض قانونی جهت سهولت حرکت کانتینر.' : 'Smooth administrative handling and payment representation through certified border brokers.'}
            </p>
          </div>

        </div>
      </div>

      {/* 5. DYNAMIC INTERACTIVE CAROUSEL ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group select-none flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
              alt="Processing sorted line" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
            
            <div className="absolute top-6 left-6 flex items-center gap-1.5 z-20">
              <button 
                onClick={() => setActiveSlide(0)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${activeSlide === 0 ? 'bg-sky-400 scale-110' : 'bg-white/40'}`} 
              />
              <button 
                onClick={() => setActiveSlide(1)}
                className={`w-2 h-2 rounded-full transition-all ${activeSlide === 1 ? 'bg-sky-400 scale-110' : 'bg-white/40'}`} 
              />
              <button 
                onClick={() => setActiveSlide(2)}
                className={`w-2 h-2 rounded-full transition-all ${activeSlide === 2 ? 'bg-sky-400 scale-110' : 'bg-white/40'}`} 
              />
            </div>

            <div className="relative z-20 p-6 flex flex-col items-center space-y-3.5">
              <h3 className="text-white font-display text-lg sm:text-xl font-extrabold tracking-tight">
                {language === 'fa' ? 'سردخانه و لجستیک' : 'Logistics'}
              </h3>
              <button
                onClick={() => onNavigate?.('#/services/logistic')}
                className="px-5 py-2 bg-black/60 border border-white/20 hover:bg-[#1a8a42] hover:border-transparent text-white font-black text-xs tracking-wider uppercase rounded-full shadow transition-all cursor-pointer"
              >
                {language === 'fa' ? 'جزئیات زنجیره سرد' : 'More Information'}
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" 
              alt="Heavy Duty Overland Transport" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          {/* Card 3 */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
              alt="Forklift loader lifting harvest green packages" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

        </div>
      </div>

    </div>
  );
}
