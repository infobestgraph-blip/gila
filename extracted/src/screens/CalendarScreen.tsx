import { useState, useMemo } from 'react';
import { 
  Calendar, Check, Info, Search, Apple, Sprout, BookOpen, 
  Layers, Warehouse, HelpCircle, ChevronRight, SlidersHorizontal, ArrowUpRight
} from 'lucide-react';
import { CalendarItem } from '../types';

interface CalendarScreenProps {
  calendarItems: CalendarItem[];
  onNavigate: (hash: string) => void;
}

// 25 premium items matching the screenshot exactly
const DETAILED_PRODUCTS = [
  {
    id: "p1",
    name: "Kiwi",
    category: "fruit",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], // Jan-May, Nov-Dec
    image: "https://images.unsplash.com/photo-1591796079474-7a40647a26c6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p2",
    name: "Iceberg Lettuce",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], // Jan-May, Nov-Dec
    image: "https://images.unsplash.com/photo-1556801712-76c8cb079901?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p3",
    name: "Bell Pepper",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], // Year-round
    image: "https://images.unsplash.com/photo-1563565312871-247d12df0a6c?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p4",
    name: "Tangerine",
    category: "fruit",
    status: "Unavailable" as const,
    months: [true, true, false, false, false, false, false, false, false, true, true, true], // Jan-Feb, Oct-Dec
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p5",
    name: "Orange",
    category: "fruit",
    status: "Limited" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], // Jan-Apr, Oct-Dec
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p6",
    name: "Romaine Lettuce",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], // Jan-May, Nov-Dec
    image: "https://images.unsplash.com/photo-1556801712-76c8cb079901?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p7",
    name: "Celery",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, false, false, false, false, true, true], 
    image: "https://images.unsplash.com/photo-1610485078500-bf7f6e80bca6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p8",
    name: "Broccoli",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p9",
    name: "Grapes",
    category: "fruit",
    status: "Unavailable" as const,
    months: [false, false, false, false, false, false, true, true, true, true, true, false], // Jul-Nov
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p10",
    name: "Fresh Dill",
    category: "vegetable",
    status: "Unavailable" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p11",
    name: "Fresh Parsley",
    category: "vegetable",
    status: "Unavailable" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p12",
    name: "Watermelon",
    category: "fruit",
    status: "Available" as const,
    months: [false, false, false, true, true, true, true, true, true, false, false, false], // Apr-Sep
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p13",
    name: "Tomato",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p14",
    name: "Sweet Corn",
    category: "vegetable",
    status: "Available" as const,
    months: [false, false, false, false, false, true, true, true, true, true, false, false], // Jun-Oct
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d20f6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p15",
    name: "Fresh Garlic",
    category: "vegetable",
    status: "Available" as const,
    months: [false, false, false, false, true, true, true, true, false, false, false, false], // May-Aug
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p16",
    name: "Dried Garlic",
    category: "vegetable",
    status: "Limited" as const,
    months: [true, true, true, true, false, false, false, false, true, true, true, true], // High dry stock retention
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p17",
    name: "Nectarine",
    category: "fruit",
    status: "Limited" as const,
    months: [false, false, false, false, false, true, true, true, false, false, false, false], // Jun-Aug
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p18",
    name: "Apple",
    category: "fruit",
    status: "Limited" as const,
    months: [true, true, true, true, false, false, false, false, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p19",
    name: "Cherry",
    category: "fruit",
    status: "Available" as const,
    months: [false, false, false, false, true, true, true, false, false, false, false, false], // May-Jul
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p20",
    name: "Onion",
    category: "vegetable",
    status: "Unavailable" as const,
    months: [true, true, true, false, false, false, false, false, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p21",
    name: "Eggplant",
    category: "vegetable",
    status: "Available" as const,
    months: [false, false, false, false, true, true, true, true, true, true, false, false], 
    image: "https://images.unsplash.com/photo-1610485078500-bf7f6e80bca6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p22",
    name: "Potato",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p23",
    name: "Cabbage",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p24",
    name: "Cucumber",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1449339091483-366a5068cf0a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p25",
    name: "Cauliflower",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ec3?auto=format&fit=crop&q=80&w=300"
  }
];

export default function CalendarScreen({ calendarItems, onNavigate }: CalendarScreenProps) {
  const [filterType, setFilterType] = useState<'all' | 'fruit' | 'vegetable'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const monthsList = [
    { label: 'Jan', fullname: 'January' },
    { label: 'Feb', fullname: 'February' },
    { label: 'Mar', fullname: 'March' },
    { label: 'Apr', fullname: 'April' },
    { label: 'May', fullname: 'May' },
    { label: 'Jun', fullname: 'June' },
    { label: 'Jul', fullname: 'July' },
    { label: 'Aug', fullname: 'August' },
    { label: 'Sep', fullname: 'September' },
    { label: 'Oct', fullname: 'October' },
    { label: 'Nov', fullname: 'November' },
    { label: 'Dec', fullname: 'December' }
  ];

  // Combine initial & state variables to ensure 25 clean elements with query filters
  const filteredProducts = useMemo(() => {
    return DETAILED_PRODUCTS.filter((item) => {
      const matchesCategory = filterType === 'all' || item.category === filterType;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filterType, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="calendar-view">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#01261d] text-white overflow-hidden pt-24 pb-16 sm:pt-[112px] sm:pb-24 md:pt-[148px] md:pb-28 text-center" id="calendar-hero">
        {/* Background Image of Fresh Packing Lines/Cool Store */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" 
            alt="GilaFruit Sorting Plant Background"
            className="w-full h-full object-cover opacity-25 pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021f18]/95 via-[#011a14]/98 to-[#011811]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            Harvest Season Calendar and<br />
            Availability of Iranian Fruits and Vegetables
          </h1>
          <p className="text-emerald-400 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            Harvest season and months of product availability
          </p>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-2" />
        </div>
      </div>

      {/* 2. THREE FLOATING SUMMARY CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 shadow-xl flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-800">
              <Warehouse className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-sm text-slate-900 tracking-tight">
              Cold Storage for Extended
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-xs">
              We utilize cold storage to maintain the freshness and quality of various fruits for months after harvest.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 shadow-xl flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="p-3 bg-teal-50 rounded-2xl text-teal-800">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-sm text-slate-900 tracking-tight">
              Year-Round Product Availability
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-xs">
              Due to Iran's diverse climate and numerous greenhouses, certain vegetables are available throughout most of the year.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 shadow-xl flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-800">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-sm text-slate-900 tracking-tight">
              Product Harvest Calendar
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-xs">
              This section provides information about the harvest season for crucial Iranian fruits and vegetables.
            </p>
          </div>

        </div>
      </div>

      {/* 3. VISUAL SPLIT / DETAILED GUIDE SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Side: Illustrative Farm Basket Grid */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-emerald-800 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-1 transition-transform" />
            <img 
              src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" 
              alt="Iranian Farm Fruits Basket"
              className="relative w-full h-[320px] object-cover rounded-[2.5rem] shadow-2xl border border-white"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay indicators matching target design */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-md flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-emerald-800 font-extrabold uppercase block tracking-wider">Premium Export Tier</span>
                <span className="text-xs font-display font-black text-slate-900">100% Sound Iranian Crops</span>
              </div>
              <span className="text-[10px] bg-amber-400 text-teal-950 font-bold px-2 py-1 rounded-md">
                CALIBER A+
              </span>
            </div>
          </div>

          {/* Right Side: Informative Text with custom navigation shortcuts */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              In this section of GilaFruit Company's product calendar, you dear traders can be informed about the harvest season of Iranian products such as fresh fruits and vegetables. In the list below, you can check the product you are looking for for each month to be aware of the harvest time and the possibility of providing it and plan your order for that month. It should be noted that due to the diversity of climate in Iran and the existence of numerous greenhouses in different cities, GilaFruit Company has provided the possibility of offering some vegetables for most of the year.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              We possess extensive experience in storing fruits within our cold storage facilities, ensuring the preservation of freshness and quality for months beyond the harvest season. Each fruit variety presents unique storage requirements, enabling us to accurately determine optimal cold storage durations based on these specific needs and the inherent shelf life of each fruit. Leveraging our expertise, we offer a comprehensive product calendar that outlines the availability and storage periods for a wide range of fruits. This valuable resource empowers you to plan your sourcing and distribution strategies effectively, ensuring a consistent supply of high-quality produce throughout the year.
            </p>

            {/* Quick Filter & Quick Link Pill Buttons */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => { setFilterType('fruit'); }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#014134] hover:bg-[#012f26] text-white rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-emerald-950/20"
              >
                <Apple className="w-3.5 h-3.5 text-amber-400" />
                Fruits
              </button>
              <button
                onClick={() => { setFilterType('vegetable'); }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#014134] hover:bg-[#012f26] text-white rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-emerald-950/20"
              >
                <Sprout className="w-3.5 h-3.5 text-emerald-300" />
                Vegetables
              </button>
              <button
                onClick={() => onNavigate('#/catalog')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#eab308] hover:bg-[#ca8a04] text-[#012f26] rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-amber-600/20"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#012f26]" />
                Catalog
              </button>
              <button
                onClick={() => onNavigate('#/packing')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#014134] hover:bg-[#012f26] text-white rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-[#012f26]/20"
              >
                <Layers className="w-3.5 h-3.5 text-amber-300" />
                Packing
              </button>
            </div>
          </div>

        </div>

        {/* 4. "POINTS TO NOTE" NOTIFICATION BANNER */}
        <div className="mt-12 bg-sky-55/60 border border-sky-200/65 rounded-[2rem] p-6 text-left relative overflow-hidden shadow-xs">
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 pointer-events-none">
            <Info className="w-48 h-48 text-sky-800" />
          </div>
          <div className="flex gap-4 items-start relative z-10">
            <div className="p-2.5 bg-sky-100 rounded-xl text-sky-700 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-black text-sky-800 uppercase tracking-widest block">Points to Note:</span>
              <p className="text-xs sm:text-xs text-slate-600 leading-relaxed font-sans font-medium">
                At the beginning and end of the harvest season for each product, the supply time may be a few days earlier or later than the scheduled date. For example, the time of availability of <span className="bg-emerald-100/90 text-emerald-900 px-1 py-0.5 rounded-sm inline-flex items-center gap-0.5 inline-block font-extrabold"><Apple className="w-3 h-3 text-amber-500" /> kiwi</span> fruit is early September, but its sugar may be low, and the <span className="font-extrabold">🇮🇷 Iranian government</span> may delay the global supply of this product until the sugar content of the fruit reaches a desirable level. To obtain more accurate information about the supply time of each product, consultation and purchase, our colleagues at GilaFruit Company are always ready to answer your questions, dear buyers.
              </p>
            </div>
          </div>
        </div>

        {/* 5. INTERMEDIATE SEGMENT HEADER */}
        <div className="mt-20 text-center space-y-2 mb-12">
          <span className="text-[10px] font-mono font-black text-emerald-800 uppercase tracking-wider block">GilaFruit: Your Year-Round Source for Fresh Produce</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            List of Product Availability Seasons
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* 6. SIDE-BY-SIDE AVAVAILABILITY GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* A. LEFT COLUMN: Search & Filterable Product Availability List */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                <span className="font-display font-black text-lg text-slate-800 tracking-tight">
                  Available Seasonal Products
                </span>
                           {/* Embedded Categories filter */}
                <div className="flex bg-slate-100/85 p-1 rounded-xl text-[11px] font-bold border border-slate-200/60 shadow-inner">
                  <button 
                    onClick={() => setFilterType('all')}
                    className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${filterType === 'all' ? 'bg-[#014134] text-white shadow-md font-extrabold' : 'text-slate-700 hover:text-[#014134] hover:bg-slate-200/40'}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilterType('fruit')}
                    className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${filterType === 'fruit' ? 'bg-[#014134] text-white shadow-md font-extrabold' : 'text-slate-700 hover:text-[#014134] hover:bg-slate-200/40'}`}
                  >
                    Fruits
                  </button>
                  <button 
                    onClick={() => setFilterType('vegetable')}
                    className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${filterType === 'vegetable' ? 'bg-[#014134] text-white shadow-md font-extrabold' : 'text-slate-700 hover:text-[#014134] hover:bg-slate-200/40'}`}
                  >
                    Vegetables
                  </button>
                </div>
              </div>

              {/* Search input bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200/80 focus:border-[#014134] text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* List of custom seasonal product cards */}
            <div className="space-y-4">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-455">
                  <p className="font-medium text-sm">No products found matching "{searchQuery}".</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setFilterType('all'); }}
                    className="mt-3 text-xs font-semibold text-emerald-850 underline hover:text-amber-500"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                filteredProducts.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-3.5xl border border-slate-200/85 p-5 shadow-sm space-y-4 hover:border-slate-300 transition-colors"
                  >
                    {/* Header info row */}
                    <div className="flex items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border border-slate-100 select-none shadow-xs"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left">
                          <h4 className="font-display font-black text-slate-900 text-sm sm:text-base tracking-tight inline-flex items-center gap-1.5">
                            {item.name}
                          </h4>
                          <p className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                            AVAILABLE MONTHS
                          </p>
                        </div>
                      </div>

                      {/* Pill status badge on the right */}
                      <div>
                        {item.status === 'Available' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-250/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            ✓ Available
                          </span>
                        )}
                        {item.status === 'Limited' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-250/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            Limited
                          </span>
                        )}
                        {item.status === 'Unavailable' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-rose-50 text-rose-600 border border-rose-250/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                            ✕ Unavailable
                          </span>
                        )}
                      </div>

                    </div>

                    {/* 12 Months outline container boxes */}
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-1.5 sm:gap-2">
                      {item.months.map((isPresent, mIdx) => {
                        let styling = "bg-slate-50 text-slate-400 border-slate-100/80";
                        if (isPresent) {
                          if (item.status === 'Limited' && (mIdx === 4 || mIdx === 5 || mIdx === 6)) {
                            // Highlights in Limited yellow/orange styles
                            styling = "bg-amber-100/80 text-amber-900 font-extrabold border-amber-300";
                          } else {
                            styling = "bg-emerald-100/90 text-emerald-950 font-extrabold border-emerald-250 shadow-xs";
                          }
                        }
                        return (
                          <div 
                            key={mIdx}
                            className={`px-1 py-2 text-center rounded-xl text-[10px] sm:text-xs font-mono font-bold border transition-colors ${styling}`}
                            title={`${item.name} is ${isPresent ? 'Available' : 'Unavailable'} in ${monthsList[mIdx].fullname}`}
                          >
                            {monthsList[mIdx].label}
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-2 border-t border-slate-50 flex justify-start">
                      <button 
                        onClick={() => onNavigate('#/products')}
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-850 hover:text-amber-500 transition-colors uppercase tracking-widest font-sans"
                      >
                        View Details <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>

          {/* B. RIGHT COLUMN: Standard Guideline Sidebar info card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Guide Card Box */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-md space-y-6 sticky top-28">
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">
                  Seasonal Fruits and Vegetables Guide
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  Our guide shows you when fruits and vegetables are in season throughout the year. Use this information to plan your shipping and enjoy fresh seasonal produce.
                </p>
              </div>

              {/* Status Guide list */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-wider">
                  Product Status Guide
                </span>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-250/20 shrink-0">
                      ✓ Available
                    </span>
                    <p className="text-[11px] text-slate-550 leading-normal font-sans">
                      Products that are available in the current season
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-250/20 shrink-0">
                      Limited
                    </span>
                    <p className="text-[11px] text-slate-550 leading-normal font-sans">
                      Products with limited availability or near end of season
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-rose-50 text-rose-600 border border-rose-250/20 shrink-0">
                      Unavailable
                    </span>
                    <p className="text-[11px] text-slate-550 leading-normal font-sans">
                      Products that are out of season and unavailable
                    </p>
                  </div>
                </div>

              </div>

              {/* Monthly guide sample pills */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-wider block">
                  Month Indicator Guide
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Each abbreviation represents a month of the year:
                </p>

                <div className="grid grid-cols-4 gap-1.5">
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-emerald-100/95 text-emerald-950 border border-emerald-250">
                    Jan
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-emerald-100/95 text-emerald-950 border border-emerald-250">
                    Feb
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-emerald-100/95 text-emerald-950 border border-emerald-250">
                    Mar
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-emerald-100/95 text-emerald-950 border border-emerald-250">
                    Apr
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-emerald-100/95 text-emerald-950 border border-emerald-250">
                    May
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-emerald-100/95 text-emerald-950 border border-emerald-250">
                     Jun
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-400 border-slate-100/80">
                    Jul
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-400 border-slate-100/80">
                    Aug
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-400 border-slate-100/80">
                    Sep
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-amber-100/90 text-amber-900 border border-amber-350">
                    Oct
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-400 border-slate-100/80">
                    Nov
                  </div>
                  <div className="px-1.5 py-2 text-center rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-400 border-slate-100/80">
                    Dec
                  </div>
                </div>

                <div className="space-y-2.5 pt-3 text-[11px] text-slate-650">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-250 inline-block"></span>
                    <span>Available months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-350 inline-block"></span>
                    <span>End of season, limited availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-150 inline-block"></span>
                    <span>Not available</span>
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
