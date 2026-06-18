import { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { 
  Calendar, Truck, Printer, ChevronLeft, ChevronRight, 
  Filter, BarChart3, Navigation, Package, MapPin, 
  Award, TrendingUp, RefreshCw, CheckCircle2, CircleAlert
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { subServicesTranslations } from '../servicesTranslationsSub';

interface TruckStatsServiceScreenProps {
  onNavigate?: (targetHash: string) => void;
}

interface LogItem {
  border: string;
  product: string;
  count: number;
  percent: number;
  color: string;
}

export default function TruckStatsServiceScreen({ onNavigate }: TruckStatsServiceScreenProps) {
  const { language } = useLanguage();
  const [selectedDateKey, setSelectedDateKey] = useState<'2025-08-13' | '2025-08-14' | '2025-08-15' | '2025-08-16' | '2025-08-17'>('2025-08-17');
  const [activeTab, setActiveTab] = useState<'product' | 'border'>('product');
  const [activeTerminal, setActiveTerminal] = useState<'all' | 'astara' | 'bilesavar'>('all');
  const [showCharts, setShowCharts] = useState<boolean>(true);

  const texts = subServicesTranslations[language]?.truckStats || subServicesTranslations['en'].truckStats;
  const isRtl = language === 'fa' || language === 'ar';

  const DAILY_DATA = {
    '2025-08-13': {
      label: language === 'fa' ? 'چهارشنبه' : 'Wed',
      dateStr: language === 'fa' ? '۲۲ مرداد' : 'Aug 13',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-14': {
      label: language === 'fa' ? 'پنج‌شنبه' : 'Thu',
      dateStr: language === 'fa' ? '۲۳ مرداد' : 'Aug 14',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-15': {
      label: language === 'fa' ? 'جمعه' : 'Fri',
      dateStr: language === 'fa' ? '۲۴ مرداد' : 'Aug 15',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-16': {
      label: language === 'fa' ? 'شنبه' : 'Sat',
      dateStr: language === 'fa' ? '۲۵ مرداد' : 'Aug 16',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-17': {
      label: language === 'fa' ? 'یک‌شنبه' : 'Sun',
      dateStr: language === 'fa' ? '۲۶ مرداد' : 'Aug 17',
      trucksCount: 46,
      productsCount: 7,
      items: [
        { border: 'Astara', product: language === 'fa' ? 'شلیل انجیری' : 'Nectarine', count: 14, percent: 30, color: '#3b82f6' },
        { border: 'Astara', product: language === 'fa' ? 'کاهو کلم مزارع' : 'Lettuce', count: 1, percent: 2, color: '#10b981' },
        { border: 'Astara', product: language === 'fa' ? 'فلفل دلمه‌ای رنگی' : 'Pepper', count: 10, percent: 22, color: '#f59e0b' },
        { border: 'Astara', product: language === 'fa' ? 'آلو شابلون ممتاز' : 'Plum', count: 3, percent: 7, color: '#ef4444' },
        { border: 'Astara', product: language === 'fa' ? 'سیر تازه صادراتی' : 'Garlic', count: 1, percent: 2, color: '#a855f7' },
        { border: 'Astara', product: language === 'fa' ? 'پرتقال محلی' : 'Orange', count: 1, percent: 2, color: '#ec4899' },
        { border: 'Astara', product: language === 'fa' ? 'مخلوط شلیل و هلو لوکس' : 'Peach-Nectarine-Plum Mix', count: 16, percent: 35, color: '#84cc16' }
      ] as LogItem[]
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedData = DAILY_DATA[selectedDateKey];

  // Filtering based on terminal filter ("all" | "astara" | "bilesavar")
  const filteredItems = selectedData.items.filter(item => {
    if (activeTerminal === 'all') return true;
    if (activeTerminal === 'astara' && item.border.toLowerCase() === 'astara') return true;
    if (activeTerminal === 'bilesavar' && item.border.toLowerCase() === 'bilesavar') return true;
    return false;
  });

  // Calculate sum of filtered trucks
  const filteredTruckCount = filteredItems.reduce((acc, curr) => acc + curr.count, 0);
  const filteredProductCount = filteredItems.length;

  // Aggregate by Border
  const borderAggregated = selectedData.items.reduce((acc: {[key: string]: number}, item) => {
    acc[item.border] = (acc[item.border] || 0) + item.count;
    return acc;
  }, {});

  const borderDataList = Object.keys(borderAggregated).map(key => ({
    border: key,
    count: borderAggregated[key],
    percent: Math.round((borderAggregated[key] / (selectedData.trucksCount || 1)) * 100)
  })).filter(item => {
    if (activeTerminal === 'all') return true;
    if (activeTerminal === 'astara' && item.border.toLowerCase() === 'astara') return true;
    if (activeTerminal === 'bilesavar' && item.border.toLowerCase() === 'bilesavar') return true;
    return false;
  });

  const datesArray = Object.keys(DAILY_DATA) as Array<typeof selectedDateKey>;
  const handlePrevDate = () => {
    const currentIndex = datesArray.indexOf(selectedDateKey);
    if (currentIndex > 0) {
      setSelectedDateKey(datesArray[currentIndex - 1]);
    }
  };

  const handleNextDate = () => {
    const currentIndex = datesArray.indexOf(selectedDateKey);
    if (currentIndex < datesArray.length - 1) {
      setSelectedDateKey(datesArray[currentIndex + 1]);
    }
  };

  const toggleTerminalFilter = () => {
    if (activeTerminal === 'all') setActiveTerminal('astara');
    else if (activeTerminal === 'astara') setActiveTerminal('bilesavar');
    else setActiveTerminal('all');
  };

  return (
    <div className={`bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in ${isRtl ? 'rtl text-right' : 'ltr text-left'}`} id="truck-stats-detail-page">
      
      {/* 1. Header Breadcrumb Banner */}
      <div className="bg-[#f4f7f5] border-b border-emerald-100/30 pt-[140px] sm:pt-[170px] md:pt-[210px] lg:pt-[230px] pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            {texts.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
            <a href="#/" onClick={() => onNavigate?.('#/')} className="hover:text-[#1a8a42] flex items-center gap-1 transition-colors">
              {language === 'fa' ? 'خانه' : 'Home'}
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-emerald-800">{texts.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        
        {/* 2. Main Title Banner & Intro Description */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)]" id="trucking-info-intro-banner">
          <h2 className="text-[#01251d] font-display font-black text-lg sm:text-xl lg:text-2xl mb-6 border-b border-slate-100 pb-4">
            {texts.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Description Paragraph Container */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                {texts.description}
              </p>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                {language === 'fa' ? (
                  <>نمودارها و اطلاعات تفکیکی ارائه شده در این پورتال کمک شایانی به تجار بین‌المللی و زنجیره‌های توزیع در کشورهای اوراسیا (روسیه، قزاقستان و بلاروس) می‌کند تا روند عرضه هفتگی صیفی‌جات ممتاز صادراتی ایران را تحلیل کنند.</>
                ) : (
                  <>This statistics board functions as a real-time monitor for custom-sealed reefer truck departures exiting North Iran export checkpoints, offering complete category indexing.</>
                )}
              </p>
            </div>

            {/* Premium Interactive Truck Vector Box */}
            <div className="md:col-span-4 flex justify-center py-2 bg-emerald-50/20 rounded-2xl">
              <svg viewBox="0 0 400 300" className="w-full max-w-[240px] h-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="140" r="95" fill="#f0fdf4" />
                <circle cx="140" cy="100" r="35" fill="#dcfce7" opacity="0.7" />
                
                <path d="M 30 240 L 370 240" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
                
                <rect x="90" y="105" width="180" height="100" rx="14" fill="#22c55e" />
                <line x1="180" y1="105" x2="180" y2="205" stroke="#15803d" strokeWidth="2.5" />
                <line x1="135" y1="105" x2="135" y2="205" stroke="#15803d" strokeWidth="1" />
                <line x1="225" y1="105" x2="225" y2="205" stroke="#15803d" strokeWidth="1" />

                <path d="M 270 135 L 325 135 C 336 135 344 143 344 154 L 344 205 L 270 205 Z" fill="#15803d" />
                <path d="M 284 143 L 314 143 C 318 143 322 147 322 151 L 322 168 L 284 168 Z" fill="#f1f5f9" />
                
                <circle cx="140" cy="225" r="23" fill="#1e293b" />
                <circle cx="140" cy="225" r="10" fill="#cbd5e1" />
                <circle cx="230" cy="225" r="23" fill="#1e293b" />
                <circle cx="230" cy="225" r="10" fill="#cbd5e1" />
                <circle cx="295" cy="225" r="23" fill="#1e293b" />
                <circle cx="295" cy="225" r="10" fill="#cbd5e1" />

                <rect x="140" y="202" width="160" height="10" fill="#475569" />

                <circle cx="115" cy="90" r="15" fill="#ef4444" />
                <path d="M 115 78 Q 117 71 122 73" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                <circle cx="245" cy="92" r="14" fill="#f97316" />
                <circle cx="243" cy="87" r="2" fill="#ea580c" />
                <circle cx="180" cy="85" r="17" fill="#eab308" />
                <path d="M 140 85 C 130 75 160 65 150 85 Z" fill="#4ade80" />
                <path d="M 205 82 C 195 72 225 64 215 82 Z" fill="#4ade80" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. Operational Toolbar Section */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]" id="live-operational-filters">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-emerald-50 rounded-xl text-emerald-700">
                <BarChart3 className="w-5 h-5 text-[#16a34a]" />
              </span>
              <div>
                <h3 className="font-display font-black text-xl text-slate-900">
                  {texts.liveTransitLogs}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold tracking-wide mt-0.5">
                  {language === 'fa' ? 'گزارش‌های زنده گمرک مرزی شمال کشور' : 'Analytical telemetry provided directly by regional customs'}
                </p>
              </div>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-950 rounded-xl border border-slate-200/60 font-bold text-xs transition-colors shadow-sm ml-auto md:ml-0 cursor-pointer"
              title="Print Dispatch Statistics"
            >
              <Printer className="w-4 h-4 text-emerald-700" />
              <span>{language === 'fa' ? 'چاپ گزارش' : 'Print Report'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mt-6 border-t border-slate-100 pt-6">
            
            <div className="md:col-span-5 flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-2xl p-1.5 shadow-sm max-w-sm w-full">
              <button 
                onClick={handlePrevDate}
                disabled={selectedDateKey === '2025-08-13'}
                className="p-2 bg-white hover:bg-slate-100 active:scale-95 text-slate-600 disabled:opacity-40 disabled:scale-100 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2 px-3 text-xs sm:text-xs font-black text-slate-800 font-mono">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>{language === 'fa' ? '۲۲ تا ۲۶ مرداد، ۱۴۰۴' : 'Aug 13 - Aug 17, 2025'}</span>
              </div>

              <button 
                onClick={handleNextDate}
                disabled={selectedDateKey === '2025-08-17'}
                className="p-2 bg-white hover:bg-slate-100 active:scale-95 text-slate-600 disabled:opacity-40 disabled:scale-100 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Middle buttons for terminal custom filtration */}
            <div className="md:col-span-7 flex flex-wrap gap-3 items-center md:justify-end w-full">
              <button
                onClick={toggleTerminalFilter}
                className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 hover:text-emerald-950 font-bold text-xs border border-slate-200/80 rounded-2xl transition-all shadow-sm cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'fa' ? 'فیلتر پایانه مرزی' : 'Terminal Filter'}</span>
                <span className="ml-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[9px] rounded-full uppercase tracking-wider">
                  {activeTerminal === 'all' ? (language === 'fa' ? 'همه گمرکات' : 'All Borders') : activeTerminal}
                </span>
              </button>

              <button
                onClick={() => setShowCharts(!showCharts)}
                style={{ backgroundColor: showCharts ? '#1d4ed8' : '#64748b' }}
                className="flex items-center gap-2 px-4 py-2.5 hover:opacity-90 active:scale-95 text-white font-bold text-xs rounded-2xl transition-all shadow-md cursor-pointer animate-pulse"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{showCharts ? (language === 'fa' ? 'پنهان‌سازی نمودار' : 'Hide Charts') : (language === 'fa' ? 'نمایش نمودار سهم' : 'Show Charts')}</span>
              </button>
            </div>

          </div>

          <div className="text-center mt-4">
            <span className="text-xs sm:text-xs text-slate-400 font-bold bg-[#fafbfc] border border-slate-150/40 px-4 py-1.5 rounded-full inline-block font-mono">
              {language === 'fa' ? 'پایش جامع آماری بندر آستارا و بیله‌سوار' : 'Aug 13 - Aug 17, 2025'}
            </span>
          </div>
        </div>

        {/* 4. Calendar 5-Day Stats Summary cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.01)]" id="calendar-5day-container">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
            <Calendar className="w-5 h-5 text-emerald-700" />
            <h3 className="font-display font-black text-slate-900 text-sm sm:text-base">
              {texts.dailyLogTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {(Object.keys(DAILY_DATA) as Array<typeof selectedDateKey>).map(key => {
              const item = DAILY_DATA[key];
              const isSelected = selectedDateKey === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedDateKey(key)}
                  className={`p-4 rounded-2xl border flex flex-col items-center text-center space-y-3 cursor-pointer select-none transition-all duration-300 ${
                    isSelected 
                      ? 'bg-amber-50/20 border-amber-400 shadow-[0_6px_20px_rgba(245,158,11,0.08)] scale-[1.03]' 
                      : 'bg-[#fafbfc] border-slate-150 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block text-xs font-black text-slate-800">{item.label}</span>
                    <span className="block text-[10px] text-slate-400 font-bold tracking-wide font-mono">{item.dateStr}</span>
                  </div>

                  <div className={`p-2 rounded-xl flex items-center justify-center gap-1.5 ${
                    isSelected ? 'bg-amber-100/70 text-amber-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Truck className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono font-bold">{item.trucksCount}</span>
                  </div>

                  <span className={`text-[10px] font-black uppercase tracking-wider ${
                    isSelected ? 'text-emerald-700' : 'text-slate-400'
                  }`}>
                    {item.productsCount} {language === 'fa' ? 'قلم کالا' : 'product'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Tabular detailed logs row */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.01)]" id="date-logs-table-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-3">
            <div>
              <h3 className="font-display font-black text-slate-900 text-sm sm:text-base">
                {language === 'fa' ? `آمار تفصیلی محموله‌ها مورخ ${selectedDateKey.replace(/-/g, '/')}` : `Data for ${selectedDateKey.replace(/-/g, '/')}`}
              </h3>
              <p className="text-[10.5px] sm:text-xs text-slate-400 font-bold uppercase mt-1">
                {language === 'fa' 
                  ? `${filteredProductCount} دسته تره‌بار ترخیص شده (مجموعاً ${filteredTruckCount} دستگاه تریلی)` 
                  : `${filteredProductCount} product row${filteredProductCount !== 1 ? 's' : ''} for this date (${filteredTruckCount} trucks total)`}
              </p>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-slate-50 rounded-2xl border border-slate-100/80">
              <CircleAlert className="w-10 h-10 text-slate-300 animate-bounce" />
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700 text-sm">{language === 'fa' ? 'فهرست خروج ثبت نشده' : 'No Trucks Dispatched'}</h4>
                <p className="text-xs text-slate-400 max-w-xs px-2 font-semibold">
                  {language === 'fa' 
                    ? 'هیچ آمار صادراتی برای این تاریخ در مرز انتخابی یافت نگردید.' 
                    : `There are no recorded custom clearance statistics for ${selectedData.dateStr} with the active filters.`}
                </p>
              </div>
            </div>
          ) : (
            <div className="border border-slate-150 bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50/60 border-b border-slate-150 text-slate-400 font-black uppercase text-[10px] tracking-widest text-[#1a8a42]">
                      <th className="py-3 px-4 pl-6 font-bold text-center">
                        {language === 'fa' ? 'پایانه خروج' : 'Border'}
                      </th>
                      <th className="py-3 px-4 font-bold text-center">
                        {language === 'fa' ? 'نام محصول کشاورزی' : 'Products'}
                      </th>
                      <th className="py-3 px-4 text-center font-bold">
                        {language === 'fa' ? 'تعداد کامیون' : 'Trucks'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeTab === 'product' ? (
                      filteredItems.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors text-center font-semibold">
                          <td className="py-3.5 px-4 font-bold text-slate-700">
                            {language === 'fa' ? 'آستارا (Astara)' : item.border}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {item.product}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-extrabold text-[#111827]">
                            {item.count}
                          </td>
                        </tr>
                      ))
                    ) : (
                      borderDataList.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors text-center font-semibold">
                          <td className="py-3.5 px-4 font-bold text-slate-800">
                            {language === 'fa' ? `پایانه گمرکی بندر آستارا` : `${item.border} Custom Gate Terminal`}
                          </td>
                          <td className="py-3.5 px-4 text-[#1a8a42] font-semibold italic text-xs">
                            {language === 'fa' ? `سهم از بازار خروجی: ${item.percent}%` : `Active dispatched regional share: ${item.percent}%`}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-black text-[#1a8a42]">
                            {item.count}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Toggle pill buttons at footer bottom */}
          <div className="flex justify-center gap-3 mt-6 border-t border-slate-100 pt-6">
            <button
              onClick={() => setActiveTab('product')}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'product'
                  ? 'bg-slate-50 border-slate-200 shadow-sm text-slate-900 font-bold'
                  : 'bg-white border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {language === 'fa' ? 'بر اساس نوع محصول' : 'By Product'}
            </button>
            <button
              onClick={() => setActiveTab('border')}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'border'
                  ? 'bg-slate-50 border-slate-200 shadow-sm text-slate-900 font-bold'
                  : 'bg-white border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {language === 'fa' ? 'تفکیک به تفکیک مرز' : 'By Border'}
            </button>
          </div>

        </div>

        {/* 6. Chart layout wrapper container */}
        {showCharts && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.01)]" id="piechart-distribution-overview">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
              <span className="p-1.5 bg-[#f0fdf4] text-emerald-800 rounded-lg">
                📊
              </span>
              <div>
                <h3 className="font-display font-black text-slate-900 text-sm sm:text-base">
                  {language === 'fa' ? 'سهم توزیع صیفی‌جات صادراتی بر مبنای تناژ کامیونی' : 'Truck Distribution by Product Type'}
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5 font-mono">
                  {language === 'fa' ? 'پایش لحظه‌ای بر مبنای کارهای ترخیصی موفق' : 'Calculations auto refreshed based on validated customs clearances.'}
                </p>
              </div>
            </div>

            {selectedData.items.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-slate-50 rounded-2xl border border-slate-100">
                <BarChart3 className="w-10 h-10 text-slate-300 animate-pulse" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-600 text-sm">No Statistical Shares</h4>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Please select Sunday Aug 17 in the 5-day toolbar above to access the distribution chart.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
                
                {/* Recharts Circular representation */}
                <div className="md:col-span-6 h-[260px] w-full relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={selectedData.items}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={85}
                        paddingAngle={2.5}
                        dataKey="count"
                        nameKey="product"
                      >
                        {selectedData.items.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: any, name: any, props: any) => {
                          const percent = props.payload.percent;
                          return [`${value} ${language === 'fa' ? 'کامیون' : 'Trucks'} (${percent}%)`, name];
                        }}
                        contentStyle={{ background: '#fff', border: '1px solid #f1f5f9', borderRadius: '14px', fontSize: '11px', fontWeight: 'bold' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Absolute centered percentage badge */}
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-xl font-black font-mono text-slate-900 leading-none">
                      {selectedData.trucksCount}
                    </span>
                    <span className="text-[8.5px] font-extrabold uppercase tracking-widest text-[#16a34a] mt-1.5 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {language === 'fa' ? 'کامیون ترخیص' : 'Cleared'}
                    </span>
                  </div>
                </div>

                {/* Color and legends legend box */}
                <div className="md:col-span-6 space-y-3">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
                    {language === 'fa' ? 'درصد سهم تفکیکی محصولات صادراتی' : 'Product Dispatch Category Shares'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedData.items.map((item, index) => (
                      <div 
                        key={index}
                        className="p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span 
                            className="w-3 h-3 rounded-full shrink-0" 
                            style={{ backgroundColor: item.color }} 
                          />
                          <span className="text-xs font-bold text-slate-800 truncate" title={item.product}>
                            {item.product}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-black text-slate-900 ml-2" style={{ color: item.color }}>
                          {item.percent}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-emerald-50/20 border border-emerald-100/40 rounded-xl flex items-center gap-2 text-[10.5px] text-slate-500 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                    <span>{language === 'fa' ? 'آمار بر اساس تائیدیه‌های معتبر خروجی گمرکی در تریلرهای یخچال‌دار به‌روزرسانی شده است.' : 'Calculations are refreshed automatically based on validated Iranian custom cargo clearances.'}</span>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
