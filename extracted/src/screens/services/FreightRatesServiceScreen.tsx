import { useState } from 'react';
import { 
  Search, Calendar, Truck, Landmark, Info, Download, 
  MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2,
  Navigation, Plane, Anchor
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { subServicesTranslations } from '../servicesTranslationsSub';

interface FreightRatesServiceScreenProps {
  onNavigate?: (targetHash: string) => void;
}

interface RateCardItem {
  destination: string;
  flag: string;
  rate: string;
  date: string;
  country: string;
  type: string;
}

export default function FreightRatesServiceScreen({ onNavigate }: FreightRatesServiceScreenProps) {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSegment, setActiveSegment] = useState<'land' | 'sea' | 'air'>('land');
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const texts = subServicesTranslations[language]?.freightRates || subServicesTranslations['en'].freightRates;
  const isRtl = language === 'fa' || language === 'ar';

  const landRates: RateCardItem[] = [
    { destination: 'Krasnodar', flag: '🇷🇺', rate: '₽210,000', date: '2025-10-13 17:09', country: 'Russia', type: 'land' },
    { destination: 'Belarus', flag: '🇧🇾', rate: '$4,200', date: '2025-10-13 17:08', country: 'Belarus', type: 'land' },
    { destination: 'Novosibirsk', flag: '🇷🇺', rate: '₽460,000', date: '2025-10-13 17:08', country: 'Russia', type: 'land' },
    { destination: 'Saint Petersburg', flag: '🇷🇺', rate: '₽310,000', date: '2025-10-13 17:07', country: 'Russia', type: 'land' },
    { destination: 'Makhachkala', flag: '🇷🇺', rate: '₽160,000', date: '2025-10-13 17:07', country: 'Russia', type: 'land' },
    { destination: 'Moscow', flag: '🇷🇺', rate: '₽260,000', date: '2025-10-13 17:06', country: 'Russia', type: 'land' },
    { destination: 'Makhachkala', flag: '🇷🇺', rate: '₽160,000', date: '2025-10-10 19:16', country: 'Russia', type: 'land' },
    { destination: 'Yekaterinburg', flag: '🇷🇺', rate: '₽380,000', date: '2025-10-10 19:15', country: 'Russia', type: 'land' },
    { destination: 'Krasnodar', flag: '🇷🇺', rate: '₽210,000', date: '2025-10-10 19:14', country: 'Russia', type: 'land' },
    { destination: 'Saint Petersburg', flag: '🇷🇺', rate: '₽310,000', date: '2025-10-10 19:11', country: 'Russia', type: 'land' },
    { destination: 'Moscow', flag: '🇷🇺', rate: '₽260,000', date: '2025-10-10 19:10', country: 'Russia', type: 'land' },
    { destination: 'Belarus', flag: '🇧🇾', rate: '$4,300', date: '2025-10-01 16:08', country: 'Belarus', type: 'land' },
    { destination: 'Omsk', flag: '🇷🇺', rate: '₽410,000', date: '2025-10-01 16:04', country: 'Russia', type: 'land' },
    { destination: 'Krasnodar', flag: '🇷🇺', rate: '₽210,000', date: '2025-10-01 16:03', country: 'Russia', type: 'land' },
    { destination: 'Rostov', flag: '🇷🇺', rate: '₽210,000', date: '2025-10-01 16:02', country: 'Russia', type: 'land' },
    { destination: 'Saint Petersburg', flag: '🇷🇺', rate: '₽310,000', date: '2025-10-01 15:42', country: 'Russia', type: 'land' },
    { destination: 'Moscow', flag: '🇷🇺', rate: '₽260,000', date: '2025-10-01 15:41', country: 'Russia', type: 'land' }
  ];

  const filteredRates = landRates.filter(item => {
    const searchTarget = `${item.destination} ${item.country}`.toLowerCase();
    return searchTarget.includes(searchQuery.toLowerCase());
  });

  const handleDownloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["Destination,Country,Flag,Rate,Dispatch Date"].join(",") + "\n"
      + landRates.map(r => `"${r.destination}","${r.country}","${r.flag}","${r.rate}","${r.date}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `GilaFruit_Freight_Rates_Astara_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadMenu(false);
  };

  const handleDownloadJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(landRates, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `GilaFruit_Freight_Rates_Astara_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    setShowDownloadMenu(false);
  };

  return (
    <div className={`bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} id="freight-rates-page">
      
      {/* 1. Header Banner - Matching the hero look of the uploaded image */}
      <div 
        className="relative pt-[140px] pb-20 sm:pt-[170px] sm:pb-28 md:pt-[210px] md:pb-32 lg:pt-[230px] lg:pb-36 bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(1, 37, 29, 0.75), rgba(1, 15, 12, 0.82)), url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1600')` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            {texts.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-3xl mx-auto font-medium">
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

      {/* 2. Overlapping Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-150/70 shadow-[0_15px_40px_rgba(0,0,0,0.03)] text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Explanatory Description */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-semibold">
                {language === 'fa' ? (
                  <>شرکت گیلافروت با در اختیار داشتن بزرگ‌ترین پایانه‌‌های لجستیک آستارا، تعرفه‌‌های روزانه حمل‌ونقل کامیون یخچال‌دار را برای مقاصد گوناگون فراهم می‌کند. به سبب نوسانات نرخ ارز، هزینه فرآورده‌ها و حجم تقاضای رانندگان، تعرفه‌ها به صورت مستمر به‌روزرسانی می‌شوند.</>
                ) : (
                  <>Our corporate pricing matrices are synchronized continuously back with certified border brokers and trade terminal manifests. This maximizes transparency for cold storage exporters and simplifies baseline calculations.</>
                )}
              </p>
              <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-semibold">
                {language === 'fa' ? (
                  <>جهت استعلام دقیق نهایی و کرایه‌ بارگیری فصلی ویژه صیفی‌جات ممتاز و کیوی با هماهنگ‌کننده امور بازرگانی تماس حاصل فرمائید.</>
                ) : (
                  <>For contractual winter rates, peak-harvest block bookings, or custom customs-bonded cargo logistics, please secure inquiries through our primary contact portal directly.</>
                )}
              </p>
            </div>

            {/* Cartoon Shipping Truck Illustration */}
            <div className="lg:col-span-4 flex justify-center py-4 bg-slate-50/50 rounded-3xl">
              <svg viewBox="0 0 350 250" className="w-full max-w-[210px] h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="160" cy="110" r="80" fill="#ecfdf5" />
                <path d="M 230 110 C 230 130 190 160 160 160 C 130 160 90 130 90 110 C 90 80 130 50 160 50 C 190 50 230 80 230 110 Z" fill="#d1fae5" opacity="0.6" />
                <path d="M 20 195 L 330 195" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                
                {/* Semi-Trailer Truck Cartoon Vector */}
                <rect x="75" y="105" width="135" height="70" rx="8" fill="#3b82f6" />
                <rect x="210" y="125" width="55" height="50" rx="10" fill="#1e40af" />
                <rect x="75" y="130" width="135" height="15" fill="#f8fafc" />
                <text x="142" y="141" fill="#1e40af" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">SHIPPING</text>

                <path d="M 245 130 L 260 130 C 263 130 265 133 265 136 L 265 150 L 245 150 Z" fill="#38bdf8" />
                <rect x="258" y="158" width="8" height="6" fill="#f87171" rx="1" />
                <circle cx="262" cy="161" r="2" fill="#fef08a" />

                {/* Wheels */}
                <circle cx="105" cy="188" r="15" fill="#334155" />
                <circle cx="105" cy="188" r="6" fill="#94a3b8" />
                <circle cx="140" cy="188" r="15" fill="#334155" />
                <circle cx="140" cy="188" r="6" fill="#94a3b8" />
                <circle cx="185" cy="188" r="15" fill="#334155" />
                <circle cx="185" cy="188" r="6" fill="#94a3b8" />
                <circle cx="235" cy="188" r="15" fill="#334155" />
                <circle cx="235" cy="188" r="6" fill="#94a3b8" />

                <circle cx="280" cy="120" r="12" fill="#10b981" />
                <rect x="278" y="130" width="4" height="20" fill="#78350f" />
                <path d="M 80 50 Q 85 45 90 50 Q 95 45 100 50" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 115 62 Q 120 57 125 62 Q 130 57 135 62" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Filter and Search Controls Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#f4fbf7]/40 border border-emerald-100 p-4 rounded-3xl">
          
          {/* Broad Search Field */}
          <div className="relative w-full md:max-w-xl">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="w-4 h-4 text-emerald-800/60" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={texts.searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-medium shadow-sm"
            />
          </div>

          {/* Action Tabs and Download Tool Container */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto md:justify-end">
            
            {/* Land Segment */}
            <button
              onClick={() => setActiveSegment('land')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeSegment === 'land'
                  ? 'bg-[#1a8a42] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>{texts.landTab}</span>
            </button>

            {/* Sea Selector */}
            <button
              onClick={() => setActiveSegment('sea')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeSegment === 'sea'
                  ? 'bg-[#1a8a42] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Anchor className="w-3.5 h-3.5 text-blue-500" />
              <span>{texts.seaTab}</span>
            </button>

            {/* Air Selector */}
            <button
              onClick={() => setActiveSegment('air')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeSegment === 'air'
                  ? 'bg-[#1a8a42] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Plane className="w-3.5 h-3.5 text-sky-500" />
              <span>{texts.airTab}</span>
            </button>

            {/* Premium Download options drop menu */}
            <div className="relative">
              <button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-emerald-800" />
                <span>{texts.downloadLabel}</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>

              {showDownloadMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-30 text-left animate-fade-in">
                  <button
                    onClick={handleDownloadCSV}
                    className="w-full px-4 py-2 text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors block text-left"
                  >
                    Export as CSV
                  </button>
                  <button
                    onClick={handleDownloadJSON}
                    className="w-full px-4 py-2 text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors block text-left"
                  >
                    Export as JSON
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* 4. Rates Grid Output */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {activeSegment !== 'land' ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-2xl">
              {activeSegment === 'sea' ? '⚓' : '✈️'}
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-black text-slate-800 text-base">
                {activeSegment === 'sea' ? (language === 'fa' ? 'خطوط کشتیرانی کانتینری خزر' : 'Maritime Cargo Lines') : (language === 'fa' ? 'پروازهای مستقیم هوایی' : 'EAEU Air Freight Schedules')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto px-4 font-semibold">
                {language === 'fa' 
                  ? 'این بخش در حال همگام‌سازی تاییده‌ها با آژانس کشتی‌رانی منظم خزر است. جهت کسب اطلاعات تکمیلی لطفا با واحد ترانزیت گیلافروت تماس حاصل نمائید.'
                  : 'We are actively finalizing direct seasonal pricing indices with shipping custom line operators. Please contact our GilaFruit logistics branch at Astara terminal for rapid estimates.'}
              </p>
            </div>
            <button
              onClick={() => onNavigate?.('#/contact')}
              className="px-5 py-2.5 bg-[#1a8a42] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-800 transition-all cursor-pointer"
            >
              {language === 'fa' ? 'مشاوره بازرگانی و ترانزیت ➔' : 'Consult Brokerage Gate ➔'}
            </button>
          </div>
        ) : filteredRates.length === 0 ? (
          <div className="py-20 text-center bg-slate-50/50 rounded-3xl border border-slate-100 max-w-md mx-auto space-y-2">
            <span className="text-3xl">🔍</span>
            <h4 className="font-bold text-slate-800 text-sm">No spot rate clearances found</h4>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              No daily daily departures matches the search terms departuring Astara.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="rates-cards-grid">
            {filteredRates.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-emerald-500/20 p-5 shadow-[0_4px_20px_rgba(22,163,74,0.015)] hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Topline Header */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-3">
                  <div className="flex items-center gap-1.5 text-xs font-black text-slate-700">
                    <Truck className="w-4 h-4 text-[#1a8a42]" />
                    <span>{language === 'fa' ? 'ترانزیت زمینی' : 'Trucking'}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wide px-3 py-1 bg-emerald-50 text-[#1a8a42] rounded-full">
                    {language === 'fa' ? 'روز و عادی (مرز آستارا)' : 'Regular transit'}
                  </span>
                </div>

                {/* Card Main Route & Data details */}
                <div className="flex justify-between items-end gap-2">
                  <div className="space-y-3 min-w-0">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-900 min-w-0 truncate">
                      <span className="shrink-0">{language === 'fa' ? '🇮🇷 آستارا' : '🇮🇷 Astara'}</span>
                      <span className="text-slate-300">➔</span>
                      <span className="truncate">{item.flag} {item.destination}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-slate-400 font-bold font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.date}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                    </div>
                  </div>

                  {/* Core spot index quotation */}
                  <div className="text-right shrink-0">
                    <div className="text-base sm:text-lg lg:text-xl font-black text-[#1a8a42] font-mono leading-none tracking-tight">
                      {item.rate}
                    </div>
                    <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase mt-1.5 block">
                      {item.country}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* 5. Advisory Notice with a high-contrast checklist */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#f0fbf7] rounded-3xl p-6 sm:p-8 border border-emerald-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="font-display font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1a8a42]" />
              {language === 'fa' ? 'به قراردادهای طولانی‌مدت حمل بار فصلی نیاز دارید؟' : 'Need Contractual Rate Bindings for the Harvest Season?'}
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-semibold">
              {language === 'fa' 
                ? 'در فصول بارگیری سنگین کیوی و سیب، تعرفه‌های بازار نوسان شدیدی دارند. هلدینگ گیلافروت خدمات ثبت گارانتی کرایه و تخصیص منظم ردیف ترانزیتی را برای بازرگانان تضمین می‌نماید.'
                : 'During high-demand periods (e.g. key Kiwi or Bell Pepper harvests), regional market spot indices fluctuate rapidly. GilaFruit company provides guaranteed client block allocations, summer rate lock contracts, and custom customs-bonded cargo space.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('#/contact')}
            className="px-6 py-3 bg-[#eab308] hover:bg-amber-600 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0 cursor-pointer animate-pulse"
          >
            {language === 'fa' ? 'قرارداد کرایه‌ فصلی صادرات' : 'Inquire Rate Contracts'}
          </button>
        </div>
      </div>

    </div>
  );
}
