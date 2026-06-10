import { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { 
  Calendar, Truck, Printer, ChevronLeft, ChevronRight, 
  Filter, BarChart3, Navigation, Package, MapPin, 
  Award, TrendingUp, RefreshCw, CheckCircle2, CircleAlert
} from 'lucide-react';

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
  const [selectedDateKey, setSelectedDateKey] = useState<'2025-08-13' | '2025-08-14' | '2025-08-15' | '2025-08-16' | '2025-08-17'>('2025-08-17');
  const [activeTab, setActiveTab] = useState<'product' | 'border'>('product');
  const [activeTerminal, setActiveTerminal] = useState<'all' | 'astara' | 'bilesavar'>('all');
  const [showCharts, setShowCharts] = useState<boolean>(true);

  // 5-Day Data Calendar Mock Structure representing exact image configurations
  const DAILY_DATA = {
    '2025-08-13': {
      label: 'Wed',
      dateStr: 'Aug 13',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-14': {
      label: 'Thu',
      dateStr: 'Aug 14',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-15': {
      label: 'Fri',
      dateStr: 'Aug 15',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-16': {
      label: 'Sat',
      dateStr: 'Aug 16',
      trucksCount: 0,
      productsCount: 0,
      items: [] as LogItem[]
    },
    '2025-08-17': {
      label: 'Sun',
      dateStr: 'Aug 17',
      trucksCount: 46,
      productsCount: 7,
      items: [
        { border: 'Astara', product: 'Nectarine', count: 14, percent: 30, color: '#3b82f6' },
        { border: 'Astara', product: 'Lettuce', count: 1, percent: 2, color: '#10b981' },
        { border: 'Astara', product: 'Pepper', count: 10, percent: 22, color: '#f59e0b' },
        { border: 'Astara', product: 'Plum', count: 3, percent: 7, color: '#ef4444' },
        { border: 'Astara', product: 'Garlic', count: 1, percent: 2, color: '#a855f7' },
        { border: 'Astara', product: 'Orange', count: 1, percent: 2, color: '#ec4899' },
        { border: 'Astara', product: 'Peach-Nectarine-Plum Mix', count: 16, percent: 35, color: '#84cc16' }
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

  // Aggregate by Border for direct view toggle comparison
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

  // Dates slider list navigation index helper
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

  // Switch terminal filter state helper
  const toggleTerminalFilter = () => {
    if (activeTerminal === 'all') setActiveTerminal('astara');
    else if (activeTerminal === 'astara') setActiveTerminal('bilesavar');
    else setActiveTerminal('all');
  };

  return (
    <div className="bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in" id="truck-stats-detail-page">
      
      {/* 1. Header Breadcrumb Banner (matching original layout precisely) */}
      <div className="bg-[#f4f7f5] border-b border-emerald-100/30 pt-[88px] sm:pt-[104px] md:pt-[140px] pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            Truck Departure Stats
          </h1>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <a href="#/" onClick={() => onNavigate?.('#/')} className="hover:text-[#1a8a42] flex items-center gap-1 transition-colors">
              🏠 Home
            </a>
            <span className="text-slate-300">/</span>
            <span className="text-emerald-800">Truck Departure Stats</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        
        {/* 2. Main Title Banner & Intro Description (With custom green truck SVG vector) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)]" id="trucking-info-intro-banner">
          <h2 className="text-[#01251d] font-display font-black text-lg sm:text-xl lg:text-2xl mb-6 border-b border-slate-100 pb-4 text-left">
            Trucking Data: Iran's Fruit and Vegetable Exports
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Description Paragraph Container */}
            <div className="md:col-span-8 space-y-4 text-left">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <span className="font-bold text-[#16a34a]">GilaFruit</span> Company offers real-time, accurate Truck Departure Stats on trucks carrying sealed fruits and vegetables from key Iranian customs terminals such as Astara and Bilesavar. This data is designed to enhance transparency for customers, traders, and importing companies, and provides valuable insights into the flow of produce across borders.
              </p>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                This information, including detailed Truck Stats provided directly by Iranian customs, enables customers to be aware of the quantity and volume of agricultural products exported from Iran, and take full advantage of market opportunities.
              </p>
            </div>

            {/* Premium Interactive Truck Vector Box */}
            <div className="md:col-span-4 flex justify-center py-2 bg-emerald-50/20 rounded-2xl">
              <svg viewBox="0 0 400 300" className="w-full max-w-[240px] h-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background ambient bubble */}
                <circle cx="200" cy="140" r="95" fill="#f0fdf4" />
                <circle cx="140" cy="100" r="35" fill="#dcfce7" opacity="0.7" />
                
                {/* Dashed Roadway */}
                <path d="M 30 240 L 370 240" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
                
                {/* Truck Cargo Chamber */}
                <rect x="90" y="105" width="180" height="100" rx="14" fill="#22c55e" />
                <line x1="180" y1="105" x2="180" y2="205" stroke="#15803d" strokeWidth="2.5" />
                <line x1="135" y1="105" x2="135" y2="205" stroke="#15803d" strokeWidth="1" />
                <line x1="225" y1="105" x2="225" y2="205" stroke="#15803d" strokeWidth="1" />

                {/* Truck Cabin Base */}
                <path d="M 270 135 L 325 135 C 336 135 344 143 344 154 L 344 205 L 270 205 Z" fill="#15803d" />
                {/* Window */}
                <path d="M 284 143 L 314 143 C 318 143 322 147 322 151 L 322 168 L 284 168 Z" fill="#f1f5f9" />
                
                {/* Wheels */}
                <circle cx="140" cy="225" r="23" fill="#1e293b" />
                <circle cx="140" cy="225" r="10" fill="#cbd5e1" />
                <circle cx="230" cy="225" r="23" fill="#1e293b" />
                <circle cx="230" cy="225" r="10" fill="#cbd5e1" />
                <circle cx="295" cy="225" r="23" fill="#1e293b" />
                <circle cx="295" cy="225" r="10" fill="#cbd5e1" />

                {/* Steel bridge linkage */}
                <rect x="140" y="202" width="160" height="10" fill="#475569" />

                {/* Apples & Fruits stack on top */}
                {/* Red Apple */}
                <circle cx="115" cy="90" r="15" fill="#ef4444" />
                <path d="M 115 78 Q 117 71 122 73" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
                {/* Orange */}
                <circle cx="245" cy="92" r="14" fill="#f97316" />
                <circle cx="243" cy="87" r="2" fill="#ea580c" />
                {/* Yellow melon */}
                <circle cx="180" cy="85" r="17" fill="#eab308" />
                {/* Leaves popping in */}
                <path d="M 140 85 C 130 75 160 65 150 85 Z" fill="#4ade80" />
                <path d="M 205 82 C 195 72 225 64 215 82 Z" fill="#4ade80" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. Operational Toolbar Section */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-left" id="live-operational-filters">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Title Section */}
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-emerald-50 rounded-xl text-emerald-700">
                <BarChart3 className="w-5 h-5 text-[#16a34a]" />
              </span>
              <div>
                <h3 className="font-display font-black text-xl text-slate-900">
                  Statistics
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-wide mt-0.5">
                  Analytical telemetry provided directly by regional EAEU customs
                </p>
              </div>
            </div>

            {/* Print button on top edge */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-950 rounded-xl border border-slate-200/60 font-bold text-xs transition-colors shadow-sm ml-auto md:ml-0"
              title="Print Dispatch Statistics"
            >
              <Printer className="w-4 h-4 text-emerald-700" />
              <span>Print</span>
            </button>
          </div>

          {/* Selector bar exactly replicating image widgets */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mt-6 border-t border-slate-100 pt-6">
            
            {/* Range selection arrows wrapper */}
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
                <span>Aug 13 - Aug 17, 2025</span>
              </div>

              <button 
                onClick={handleNextDate}
                disabled={selectedDateKey === '2025-08-17'}
                className="p-2 bg-white hover:bg-slate-100 active:scale-95 text-slate-600 disabled:opacity-40 disabled:scale-100 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Middle buttons for terminal custom filtration & chart toggling */}
            <div className="md:col-span-7 flex flex-wrap gap-3 items-center md:justify-end w-full">
              <button
                onClick={toggleTerminalFilter}
                className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 hover:text-emerald-950 font-bold text-xs border border-slate-200/80 rounded-2xl transition-all shadow-sm cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5 text-emerald-600" />
                <span>Terminal Filter</span>
                <span className="ml-1 px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[9px] rounded-full uppercase tracking-wider">
                  {activeTerminal === 'all' ? 'All Borders' : activeTerminal}
                </span>
              </button>

              <button
                onClick={() => setShowCharts(!showCharts)}
                style={{ backgroundColor: showCharts ? '#1d4ed8' : '#64748b' }}
                className="flex items-center gap-2 px-4 py-2.5 hover:opacity-90 active:scale-95 text-white font-bold text-xs rounded-2xl transition-all shadow-md cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{showCharts ? 'Hide Charts' : 'Show Charts'}</span>
              </button>
            </div>

          </div>

          {/* Underlined static text marker centering the target duration exactly */}
          <div className="text-center mt-4">
            <span className="text-xs sm:text-xs text-slate-400 font-bold bg-[#fafbfc] border border-slate-150/40 px-4 py-1.5 rounded-full inline-block font-mono">
              Aug 13 - Aug 17, 2025
            </span>
          </div>
        </div>

        {/* 4. Calendar 5-Day Stats Summary cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.01)] text-left" id="calendar-5day-container">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
            <Calendar className="w-5 h-5 text-emerald-700" />
            <h3 className="font-display font-black text-slate-900 text-sm sm:text-base">
              5-Day Stats Summary
            </h3>
          </div>

          {/* Layout of the 5 cards */}
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
                  {/* Day marker */}
                  <div className="space-y-0.5">
                    <span className="block text-xs font-black text-slate-800">{item.label}</span>
                    <span className="block text-[10px] text-slate-400 font-bold tracking-wide font-mono">{item.dateStr}</span>
                  </div>

                  {/* Icon with Counter box */}
                  <div className={`p-2 rounded-xl flex items-center justify-center gap-1.5 ${
                    isSelected ? 'bg-amber-100/70 text-amber-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Truck className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono font-bold">{item.trucksCount}</span>
                  </div>

                  {/* Quantity of product entries */}
                  <span className={`text-[10px] font-black uppercase tracking-wider ${
                    isSelected ? 'text-emerald-700' : 'text-slate-400'
                  }`}>
                    {item.productsCount} product
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Tabular detailed logs row */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.01)] text-left" id="date-logs-table-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-3">
            <div>
              <h3 className="font-display font-black text-slate-900 text-sm sm:text-base">
                Data for {selectedDateKey.replace(/-/g, '/')}
              </h3>
              <p className="text-[10.5px] sm:text-xs text-slate-400 font-bold uppercase mt-1">
                {filteredProductCount} product row{filteredProductCount !== 1 ? 's' : ''} for this date ({filteredTruckCount} trucks total)
              </p>
            </div>
          </div>

          {/* Real data list of trucks aggregation */}
          {filteredItems.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-slate-50 rounded-2xl border border-slate-100/80">
              <CircleAlert className="w-10 h-10 text-slate-300" />
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700 text-sm">No Trucks Dispatched</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  There are no recorded custom clearance statistics for {selectedData.dateStr} with the active filters.
                </p>
              </div>
            </div>
          ) : (
            <div className="border border-slate-150 bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50/60 border-b border-slate-150 text-slate-400 font-black uppercase text-[10px] tracking-widest">
                      <th className="py-3 px-4 flex items-center gap-1.5 pl-6 font-bold">
                        <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                        Border
                      </th>
                      <th className="py-3 px-4 font-bold">
                        <div className="flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5 text-emerald-600" />
                          Products
                        </div>
                      </th>
                      <th className="py-3 px-4 text-right pr-6 font-bold">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Truck className="w-3.5 h-3.5 text-emerald-600" />
                          Trucks
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeTab === 'product' ? (
                      filteredItems.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3.5 px-4 pl-6 font-mono font-bold text-slate-700">
                            {item.border}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {item.product}
                          </td>
                          <td className="py-3.5 px-4 text-right pr-6 font-mono font-extrabold text-[#111827]">
                            {item.count}
                          </td>
                        </tr>
                      ))
                    ) : (
                      borderDataList.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3.5 px-4 pl-6 font-bold text-slate-800">
                            {item.border} Custom Gate Terminal
                          </td>
                          <td className="py-3.5 px-4 text-slate-400 font-semibold italic text-xs">
                            Active dispatched regional share: {item.percent}%
                          </td>
                          <td className="py-3.5 px-4 text-right pr-6 font-mono font-black text-emerald-800">
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

          {/* Toggle pill buttons at footer bottom of the card list */}
          <div className="flex justify-center gap-3 mt-6 border-t border-slate-100 pt-6">
            <button
              onClick={() => setActiveTab('product')}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'product'
                  ? 'bg-slate-50 border-slate-200 shadow-sm text-slate-900 font-bold'
                  : 'bg-white border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              By Product
            </button>
            <button
              onClick={() => setActiveTab('border')}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'border'
                  ? 'bg-slate-50 border-slate-200 shadow-sm text-slate-900 font-bold'
                  : 'bg-white border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              By Border
            </button>
          </div>

        </div>

        {/* 6. Chart layout wrapper container */}
        {showCharts && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.01)] text-left" id="piechart-distribution-overview">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
              <span className="p-1.5 bg-[#f0fdf4] text-emerald-800 rounded-lg">
                📊
              </span>
              <div>
                <h3 className="font-display font-black text-slate-900 text-sm sm:text-base">
                  Truck Distribution by Product Type
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5">
                  Product distribution for {selectedData.dateStr === 'Aug 17' ? 'Aug 13 - Aug 17, 2025' : selectedData.dateStr + ', 2025'}
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
                          return [`${value} Trucks (${percent}%)`, name];
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
                      Cleared
                    </span>
                  </div>
                </div>

                {/* Color and labels legend box exactly as described in mockups */}
                <div className="md:col-span-6 space-y-3">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
                    Product Dispatch Category Shares
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
                    <span>Calculations are refreshed automatically based on validated Iranian custom cargo clearances.</span>
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
