import { useState, useMemo, useEffect } from 'react';
import { 
  Search, BookOpen, Clock, Tag as TagIcon, CheckCircle2, ChevronRight, 
  Phone, Globe, RefreshCw, Calendar, FileText, Send, HelpCircle, 
  MapPin, CheckSquare, Sparkles, Filter, ChevronLeft
} from 'lucide-react';
import { BlogArticle } from '../types';

interface BlogScreenProps {
  blogs: BlogArticle[];
  onNavigate: (hash: string) => void;
}

export default function BlogScreen({ blogs, onNavigate }: BlogScreenProps) {
  // Defensive backup list of 10 articles if the blogs prop is somehow not fully populated
  const fallbackBlogs: BlogArticle[] = useMemo(() => [
    {
      id: 'b_importing_kiwi_russia',
      title: 'Buying and Importing Kiwi to Russia: Guide to Bulk Pricing & Supply',
      slug: 'buying-importing-kiwi-russia',
      language: 'en',
      publishDate: 'October 6, 2025',
      summary: 'Iran is now one of the largest kiwi suppliers in the world, facilitating the bulk sale and export of Iranian kiwi to Russia annually. A major portion of the Iranian kiwi destined for import to Russia is cultivated extensively in the provinces of Gilan and Mazandaran, particularly in the regions of Astara, Talesh, and C ...',
      content: 'This comprehensive guide details the logistics, standards, and import tariffs associated with bulk purchasing of premium Iranian Hayward kiwis for Russian wholesale grids in Moscow, Saint Petersburg, and Novosibirsk.',
      tags: ['Export', 'Kiwi', 'Russia'],
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_look_kiwi_exports',
      title: 'look at kiwi exports from Iran',
      slug: 'look-at-kiwi-exports',
      language: 'en',
      publishDate: 'July 25, 2022',
      summary: 'Kiwi is not originally native to Iran and was first produced and sold in bulk in China. Iran ventured into Hayward kiwi production and export, capitalizing on its worldwide popularity. ...',
      content: 'Analysing the historical development of Iranian Hayward kiwifruit plantations in Talesh and Astara, and how GilaFruit established high-volume wholesale routes to Eurasia.',
      tags: ['articles', 'Kiwi', 'Export'],
      image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_why_buy_garlic',
      title: 'Why buy Iranian garlic from Gilafruit ?',
      slug: 'why-buy-garlic',
      language: 'en',
      publishDate: 'July 9, 2022',
      summary: 'Purchasing and importing Iranian garlic is an important process that requires having a representative to inspect and be on the job at the time of planting, harvesting and packing garlic. ...',
      content: 'Why GilaFruit remains the preferred choice of dry white and violet garlic for EAEU trading groups. Our unique soil preparation, sulfur-free organic drying, and robust packing methodologies.',
      tags: ['articles', 'Garlic', 'GilaFruit'],
      image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_specs_hayward',
      title: 'Specifications of Hayward green kiwi',
      slug: 'specifications-hayward-kiwi',
      language: 'en',
      publishDate: 'June 12, 2022',
      summary: 'Renowned for its exceptional qualities and export potential, Iranian kiwi consistently meets high standards, thanks partly to meticulous storage practices that preserve freshness ...',
      content: 'A complete sheet detailing the Brix values (12.5-14+), calibers (70g-110g+), dry matter ratio, and shelf stability indicators of Hayward kiwis prepared in our modern packing houses.',
      tags: ['articles', 'Kiwi', 'Specs'],
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_kiwi_best_world',
      title: 'Iranian kiwi one of the best in the world',
      slug: 'iranian-kiwi-best-in-world',
      language: 'en',
      publishDate: 'June 2, 2022',
      summary: 'Moderate temperatures and high humidity are the main causes of these conditions. In fact, sultry conditions and moderate tropics-like temperature conditions are the keys to the fruit-bearing requirements. ...',
      content: 'Why Gilans unique humid coastal context and high loam soil deposits under the Alborz mountain range create the worlds most aromatic, sweet, and juice-dense Hayward kiwis.',
      tags: ['articles', 'Kiwi', 'Quality'],
      image: 'https://images.unsplash.com/photo-1589139885816-e568ba7a6ba8?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_how_to_buy_garlic',
      title: "How to buy Iran's export garlic with quality and reasonable price?",
      slug: 'how-to-buy-garlic-price',
      language: 'en',
      publishDate: 'May 30, 2022',
      summary: "Introducing Iran's Export Garlic Iran's export garlic has carved a niche for itself in the global market, celebrated for its exceptional quality and competitive pricing. This aromatic bulb, a staple in Iranian cuisine, has garnered international attention, making Iran a prominent garlic exporter. If you&#82...",
      content: 'Navigating trade agreements, customs checks, phytosanitary requirements, and choosing suitable mesh versus crate packing systems to procure Premium Iranian vacuum-cured garlic at factory rates.',
      tags: ['articles', 'Garlic', 'Guide'],
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_lifting_ban_india',
      title: 'Lifting the ban on the import of Iranian kiwi to India',
      slug: 'lifting-ban-kiwi-india',
      language: 'en',
      publishDate: 'May 29, 2022',
      summary: 'Export of Iranian Kiwi stands as one of the top 5 kiwi producing countries globally, sharing the stage with renowned exporters like Italy, China, New Zealand, and Chile. Iran annually produces over 280,000 tons of kiwi, exporting this delicious fruit to various countries, including Russia, India, Azerbaijan, Armen ...',
      content: 'Exploring the standard protocols, plant quarantine clearance requirements, and regulatory milestones that re-opened the high-volume Indian import market for premium Iranian kiwis.',
      tags: ['information', 'Kiwi', 'India'],
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_types_kiwi_export',
      title: 'What are the Types of Iranian kiwi for export?',
      slug: 'types-of-kiwi-export',
      language: 'en',
      publishDate: 'May 17, 2022',
      summary: 'Kiwi Varieties in Iran Iran boasts a rich selection of kiwi varieties, each with its unique appeal and export potential. Types of Iranian kiwi can be broadly categorized into two shapes: twin and oval. Additionally, they are classified into distinct varieties, including the renowned Hayward Kiwi, the vibrant Ir ...',
      content: 'From Red-Flesh kiwi varieties to Gold and Hayward kiwis, we discuss harvest seasons, brix indices, and packaging standards optimized for air terminal transit versus sea container trails.',
      tags: ['packing', 'Kiwi', 'Variety'],
      image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_sort_kiwi_machine',
      title: 'How to sort kiwi with sorting machine',
      slug: 'how-to-sort-kiwi',
      language: 'en',
      publishDate: 'May 11, 2022',
      summary: 'Technology in the Kiwifruit Industry: The Rise of Kiwi Sorting Machine The advent of technology has revolutionized various aspects of the agricultural industry, including the planting, cultivation, harvesting, and kiwi export processes. In recent years, innovative kiwi sorting machine have emerged, automating the sort ...',
      content: 'Reviewing our integration of modern optical weight-calibrator and volume-sizing sorters that handle more than 50 tons per day with zero mechanical bruising.',
      tags: ['Export', 'Tech', 'Sorting'],
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'b_kiwi_caliber_buy',
      title: 'Buying Different Kinds of Iranian Kiwi Caliber',
      slug: 'buying-kiwi-caliber',
      language: 'en',
      publishDate: 'May 5, 2022',
      summary: 'Kiwi Export Caliber: A Key Factor in Kiwi Trade Before buying kiwi fruit for export, traders should pay attention to various factors. One crucial aspect is the kiwi caliber of the export fruit, which we will explore in detail below. At Gilafruit, we utilize advanced kiwi sorting machine like MAF RODA to ensure precise ...',
      content: 'How caliber categories (ranging from 40-count to 120-count trays) map to retail preferences across Eurasian and Gulf ports. Learn what caliber maximizes your retail profit margins.',
      tags: ['articles', 'Kiwi', 'Caliber'],
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600'
    }
  ], []);

  // Use props blogs if it has content, otherwise use fallback list to ensure 10 items render correctly
  const activeBlogsList = useMemo(() => {
    return blogs.length >= 8 ? blogs : fallbackBlogs;
  }, [blogs, fallbackBlogs]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // 1) Search filter
  const filteredArticles = useMemo(() => {
    return activeBlogsList.filter((b) => {
      const q = searchQuery.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeBlogsList, searchQuery]);

  // Page tracking reset when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination bounds calculation
  const totalArticlesCount = filteredArticles.length;
  const totalPages = Math.ceil(totalArticlesCount / itemsPerPage);
  const paginatedArticles = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredArticles, currentPage, itemsPerPage]);

  // SIDEBAR WIDGETS DATA & STATE
  // SITUATION Tab state: 0 = Available, 1 = Limited, 2 = Unavailable
  const [situationTab, setSituationTab] = useState<'available' | 'limited' | 'unavailable'>('available');

  const availableProducts = [
    { name: 'Kiwi', emoji: '🥝', dateRange: 'Jan - Dec', slug: 'hayward-kiwifruit' },
    { name: 'Iceberg Lettuce', emoji: '🥬', dateRange: 'Jan - Dec', slug: 'lettuce-export' },
    { name: 'Bell Pepper', emoji: '🫑', dateRange: 'Jan - Dec', slug: 'export-bell-pepper' },
    { name: 'Romaine Lettuce', emoji: '🥬', dateRange: 'Jan - Dec', slug: 'lettuce-export' },
    { name: 'Celery', emoji: '🌿', dateRange: 'Jan - Dec', slug: 'fresh-celery-export' },
    { name: 'Broccoli', emoji: '🥦', dateRange: 'Jan - Dec', slug: 'green-broccoli-export' },
    { name: 'Watermelon', emoji: '🍉', dateRange: 'Feb - Jul', slug: 'export-watermelon' },
    { name: 'Tomato', emoji: '🍅', dateRange: 'Jan - Dec', slug: 'export-tomato' },
    { name: 'Sweet Corn', emoji: '🌽', dateRange: 'Apr - Jul', slug: 'sweet-corn-export' },
    { name: 'Fresh Garlic', emoji: '🧄', dateRange: 'Feb - Aug', slug: 'fresh-garlic' },
    { name: 'Cherry', emoji: '🍒', dateRange: 'Apr - Jul', slug: 'sweet-cherry' },
    { name: 'Eggplant', emoji: '🍆', dateRange: 'Jan - Dec', slug: 'eggplant-export' },
    { name: 'Potato', emoji: '🥔', dateRange: 'Jan - Dec', slug: 'potato-export' },
    { name: 'Cabbage', emoji: '🥬', dateRange: 'Jan - Dec', slug: 'cabbage-export' },
    { name: 'Cucumber', emoji: '🥒', dateRange: 'Jan - Dec', slug: 'cucumber-export' },
    { name: 'Cauliflower', emoji: '🥦', dateRange: 'Jan - Dec', slug: 'cauliflower-export' }
  ];

  const limitedProducts = [
    { name: 'Seedless Grapes', emoji: '🍇', dateRange: 'Jul - Nov', slug: 'seedless-grapes' },
    { name: 'Sweet Cherry', emoji: '🍒', dateRange: 'Jun - Aug', slug: 'cherry-export-premium' }
  ];

  const unavailableProducts = [
    { name: 'Yellow Onions', emoji: '🧅', dateRange: 'Nov - Jan', slug: 'onions-yellow-export' }
  ];

  const currentListProducts = useMemo(() => {
    if (situationTab === 'available') return availableProducts;
    if (situationTab === 'limited') return limitedProducts;
    return unavailableProducts;
  }, [situationTab]);

  // CUSTOMS STATISTICS Tab selection and dynamic loading simulation
  const [customsTab, setCustomsTab] = useState<'all' | 'astara' | 'bilehsavar'>('all');
  const [loadingCustoms, setLoadingCustoms] = useState(false);

  useEffect(() => {
    setLoadingCustoms(true);
    const t = setTimeout(() => {
      setLoadingCustoms(false);
    }, 600);
    return () => clearTimeout(t);
  }, [customsTab]);

  const statsByTab = useMemo(() => {
    switch (customsTab) {
      case 'astara':
        return { terminals: '18', products: '6', quantity: '9,450t' };
      case 'bilehsavar':
        return { terminals: '12', products: '4', quantity: '5,120t' };
      case 'all':
      default:
        return { terminals: '30', products: '16', quantity: '14,570t' };
    }
  }, [customsTab]);

  return (
    <div className="bg-[#fcfdfc] min-h-screen pt-24 sm:pt-28 md:pt-[148px] text-slate-800 pb-20 animate-fade-in" id="blog-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER */}
      <div className="bg-[#f2f4f1] border-y border-slate-200/60 py-4 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-2 text-left">
          <h1 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
            Blog
          </h1>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
            <span className="hover:text-[#1a8a42] cursor-pointer transition-colors" onClick={() => onNavigate('#/')}>
              Home
            </span>
            <span className="text-slate-400 font-normal">»</span>
            <span className="text-slate-800 font-semibold">Blog</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN SPLIT GRID (LEFT SIDEBAR & RIGHT POSTS COLUMN) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start text-left">
          
          {/* A. LEFT SIDEBAR COMPONENT */}
          <div className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 space-y-7" id="blog-sidebar">
            
            {/* Widget 1: Search */}
            <div className="bg-white border border-slate-100/90 rounded-2xl p-5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] space-y-4">
              <input 
                type="text" 
                placeholder="Search ..." 
                value={searchQuery}
                aria-label="Search articles"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-[#fbfcfa] border border-slate-200 rounded-xl text-xs font-medium focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
              />
              <button 
                onClick={() => setSearchQuery(searchQuery)}
                className="w-full bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-white" />
                <span>Search</span>
              </button>
            </div>

            {/* Widget 2: SITUATION */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col">
              
              {/* Situation Header */}
              <div className="bg-[#1a8a42] px-6 py-6 text-center space-y-1">
                <h3 className="text-white font-sans font-black text-2xl sm:text-3xl tracking-tight uppercase leading-none">
                  SITUATION
                </h3>
                <p className="text-emerald-100/95 font-semibold text-[9px] uppercase tracking-widest block">
                  Iranian Fruits and Vegetables
                </p>
              </div>

              {/* Status Selector Tabs */}
              <div className="grid grid-cols-3 gap-0 border-b border-slate-100 text-[11px] font-bold text-center">
                <button
                  type="button"
                  onClick={() => setSituationTab('available')}
                  className={`py-3 transition-all cursor-pointer border-r border-slate-100 ${
                    situationTab === 'available' 
                      ? 'bg-[#1a8a42]/10 text-[#1a8a42] font-extrabold' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
                  }`}
                >
                  Available
                </button>
                <button
                  type="button"
                  onClick={() => setSituationTab('limited')}
                  className={`py-3 transition-all cursor-pointer border-r border-slate-100 ${
                    situationTab === 'limited' 
                      ? 'bg-[#1a8a42]/10 text-[#1a8a42] font-extrabold' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
                  }`}
                >
                  Limited
                </button>
                <button
                  type="button"
                  onClick={() => setSituationTab('unavailable')}
                  className={`py-3 transition-all cursor-pointer ${
                    situationTab === 'unavailable' 
                      ? 'bg-[#1a8a42]/10 text-[#1a8a42] font-extrabold' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50'
                  }`}
                >
                  Unavailable
                </button>
              </div>

              {/* Active Products List */}
              <div className="p-4 max-h-[360px] overflow-y-auto divide-y divide-slate-100/80 custom-scrollbar">
                {currentListProducts.map((p, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between gap-2.5 hover:bg-slate-50/40 px-1 rounded transition-colors text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-base select-none leading-none">{p.emoji}</span>
                      <span className="font-bold text-slate-800">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-2.5 flex-shrink-0">
                      <span className="text-[10.5px] text-slate-400 font-semibold">{p.dateRange}</span>
                      <button
                        onClick={() => onNavigate(`#/product/${p.slug}`)}
                        className="text-[10px] text-[#1a8a42] hover:text-[#115e2c] font-black underline cursor-pointer"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* All Data footer action */}
              <div className="p-4 bg-slate-50/50 border-t border-slate-100">
                <button 
                  onClick={() => onNavigate('#/catalog')}
                  className="w-full bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckSquare className="w-4 h-4 text-white" />
                  <span>All Data</span>
                </button>
              </div>

            </div>

            {/* Widget 3: CUSTOMS STATISTICS */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              
              <div className="space-y-1.5 text-left border-b border-slate-100 pb-3">
                <h4 className="font-display font-black text-slate-900 text-sm tracking-tight uppercase">
                  CUSTOMS STATISTICS
                </h4>
                <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-300" />
                  <span>Tuesday, June 9, 2026</span>
                </div>
              </div>

              {/* Stat tabs */}
              <div className="flex bg-slate-100 p-1 rounded-xl gap-0.5 text-[10.5px] font-bold text-slate-600 text-center">
                <button
                  type="button"
                  onClick={() => setCustomsTab('all')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    customsTab === 'all' ? 'bg-[#1a8a42] text-white' : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  All Customs
                </button>
                <button
                  type="button"
                  onClick={() => setCustomsTab('astara')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    customsTab === 'astara' ? 'bg-[#1a8a42] text-white' : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  Astara
                </button>
                <button
                  type="button"
                  onClick={() => setCustomsTab('bilehsavar')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    customsTab === 'bilehsavar' ? 'bg-[#1a8a42] text-white' : 'hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  Bilehsavar
                </button>
              </div>

              {/* Metrics cards */}
              <div className="grid grid-cols-3 gap-2 py-1 text-center relative min-h-[50px] items-center">
                
                {loadingCustoms ? (
                  <div className="col-span-3 py-6 flex flex-col items-center justify-center gap-2 text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin text-[#1a8a42]" />
                    <span className="text-[10px] font-semibold italic">Loading data...</span>
                  </div>
                ) : (
                  <>
                    <div className="bg-[#fbfcfa] border border-slate-100 rounded-xl p-2.5">
                      <div className="text-[8.5px] text-slate-400 font-extrabold uppercase tracking-wider">Terminals</div>
                      <div className="text-sm font-bold text-slate-800 mt-1">{statsByTab.terminals}</div>
                    </div>
                    <div className="bg-[#fbfcfa] border border-slate-100 rounded-xl p-2.5">
                      <div className="text-[8.5px] text-slate-400 font-extrabold uppercase tracking-wider">Products</div>
                      <div className="text-sm font-bold text-slate-800 mt-1">{statsByTab.products}</div>
                    </div>
                    <div className="bg-[#fbfcfa] border border-slate-100 rounded-xl p-2.5">
                      <div className="text-[8.5px] text-slate-400 font-extrabold uppercase tracking-wider">Quantity</div>
                      <div className="text-sm font-bold text-slate-800 mt-1">{statsByTab.quantity}</div>
                    </div>
                  </>
                )}

              </div>

              <div className="bg-slate-50/50 border-t border-slate-100 pt-3 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-time Port Stream</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('#/services/customs')}
                  className="bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold py-1.5 px-3 rounded-lg text-[10px] uppercase tracking-wide transition-all cursor-pointer"
                >
                  All Data
                </button>
              </div>

            </div>

            {/* Widget 4: Product Price Inquiry */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h4 className="font-display font-black text-slate-950 text-sm tracking-tight border-b border-slate-150 pb-2">
                Product Price Inquiry
              </h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed font-sans">
                Esteemed Traders, Our team at Gilafruit is eager to assist you in obtaining the most up-to-date pricing for Iranian fresh fruits and vegetables.
              </p>

              {/* Graphic visual representing Trade check */}
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100">
                <svg viewBox="0 0 100 80" className="w-24 h-20 text-[#1a8a42]" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="15" y="10" width="70" height="60" rx="4" strokeWidth="1.5" />
                  <line x1="25" y1="25" x2="75" y2="25" strokeDasharray="2 2" />
                  <line x1="25" y1="40" x2="60" y2="40" />
                  <line x1="25" y1="55" x2="50" y2="55" />
                  <circle cx="70" cy="48" r="10" fill="#e8f5e9" stroke="#1a8a42" />
                  <path d="M66 48 L69 51 L75 45" stroke="#1a8a42" strokeWidth="2" />
                </svg>
              </div>

              {/* Dual call buttons */}
              <div className="grid grid-cols-2 gap-2 text-[10.5px] font-bold">
                <a 
                  href="tel:+989900978002"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Call for Price</span>
                </a>
                <a 
                  href="https://wa.me/989900978002?text=I%27m%20inquiring%20about%20Iranian%20fruit%20prices"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#1a8a42] border border-emerald-200/50 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Send className="w-3.5 h-3.5 text-[#1a8a42]" />
                  <span>In WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Widget 5: Shipping Price Inquiry */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h4 className="font-display font-black text-slate-950 text-sm tracking-tight border-b border-slate-150 pb-2">
                Shipping Price Inquiry
              </h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed font-sans">
                Experience global fruit and vegetable trade easier than ever with Gilafruit! Get instant online quotes for shipping your produce from Iran to anywhere in the world.
              </p>

              {/* Logistics Truck vector Graphic */}
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100">
                <svg viewBox="0 0 100 65" className="w-24 h-18 text-[#1a8a42]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 40 H80 V20 H45 V10 H10 Z" fill="#e8f5e9" strokeWidth="1.5" />
                  <rect x="45" y="15" width="30" height="25" stroke="#1a8a42" />
                  <path d="M80 30 L92 34 L92 45 H80 Z" />
                  <circle cx="24" cy="50" r="6" fill="#1a8a42" />
                  <circle cx="68" cy="50" r="6" fill="#1a8a42" />
                  <line x1="10" y1="30" x2="35" y2="30" strokeDasharray="3 2" />
                </svg>
              </div>

              {/* Call buttons */}
              <div className="grid grid-cols-2 gap-2 text-[10.5px] font-bold">
                <a 
                  href="tel:+989900978002"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Call for Price</span>
                </a>
                <a 
                  href="https://wa.me/989900978002?text=I%27m%20inquiring%20about%20shipping%20and%20freight%2520rates"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#1a8a42] border border-emerald-200/50 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Send className="w-3.5 h-3.5 text-[#1a8a42]" />
                  <span>In WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Widget 6: Send Product Samples */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h4 className="font-display font-black text-slate-950 text-sm tracking-tight border-b border-slate-150 pb-2">
                Send Product Samples
              </h4>
              <p className="text-[11.5px] text-slate-500 leading-relaxed font-sans">
                At Gilafruit, we are confident in the quality of our products and we arrange to provide experience that confidence too. That's why we offer free product samples to our customers before they buy.
              </p>

              {/* Express parcel box visual */}
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100">
                <svg viewBox="0 0 100 80" className="w-24 h-18 text-[#1a8a42]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M50 10 L85 25 L50 40 L15 25 Z" fill="#e8f5e9" />
                  <path d="M15 25 V60 L50 75 V40 Z" />
                  <path d="M85 25 V60 L50 75 V40 Z" />
                  <line x1="50" y1="40" x2="50" y2="75" strokeWidth="1.5" />
                  {/* Flight/speed swoosh bands */}
                  <path d="M10 15 Q 30 5 50 15" strokeDasharray="3 3"/>
                </svg>
              </div>

              {/* Call buttons */}
              <div className="grid grid-cols-2 gap-2 text-[10.5px] font-bold">
                <button 
                  onClick={() => onNavigate('#/contact')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Request</span>
                </button>
                <a 
                  href="https://wa.me/989900978002?text=Hello%20Gilafruit%2C%20I%20would%20like%20to%20request%20some%20product%20samples"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#1a8a42] border border-emerald-200/50 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Send className="w-3.5 h-3.5 text-[#1a8a42]" />
                  <span>In WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* B. RIGHT SYSTEM ARCHIVE (BLOG ENTRIES) */}
          <div className="flex-1 space-y-1">
            
            {totalArticlesCount > 0 ? (
              <div className="divide-y divide-slate-100 bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.015)]">
                {paginatedArticles.map((blog, idx) => (
                  <div 
                    key={blog.id} 
                    className="flex flex-col md:flex-row items-start gap-8 py-10 first:pt-0 last:pb-0"
                    id={`blog-item-row-${idx}`}
                  >
                    
                    {/* Left details narrative block */}
                    <div className="flex-1 space-y-4 text-left">
                      
                      {/* Blog Header: Title */}
                      <h2 
                        onClick={() => onNavigate(`#/blog/${blog.slug}`)}
                        className="font-display font-black text-slate-900 text-base sm:text-[19px] md:text-xl tracking-tight leading-snug hover:text-[#1a8a42] cursor-pointer transition-colors"
                      >
                        {blog.title}
                      </h2>

                      {/* Tag Category and Publish Date */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-1 text-[#1a8a42]">
                          <TagIcon className="w-3.5 h-3.5" />
                          <span className="normal-case">{blog.tags[0] || 'articles'}</span>
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-slate-400 font-mono text-[10px]">{blog.publishDate}</span>
                      </div>

                      {/* Summary Text */}
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-sans line-clamp-3">
                        {blog.summary}
                      </p>

                      {/* Read More button */}
                      <div className="pt-2">
                        <button
                          onClick={() => onNavigate(`#/blog/${blog.slug}`)}
                          className="px-5 py-2.5 bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold rounded-full text-xs transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-white" />
                          <span>Read More</span>
                        </button>
                      </div>

                    </div>

                    {/* Right illustrative preview image WITH CUSTOM COMPANY LOGISTICS BAR */}
                    <div className="w-full md:w-64 flex-shrink-0 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.035)] border border-slate-100 group">
                      
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* absolute green signature bar mapping GilaFruit brand directly atop bottom of photo */}
                      <div className="absolute bottom-0 left-0 right-0 h-7 bg-[#1a8a42] text-white flex items-center justify-between px-3 text-[8.5px] font-bold select-none whitespace-nowrap z-10 shadow-inner">
                        <div className="flex items-center gap-1">
                          {/* Mini WhatsApp logo replacement */}
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                          <span>+98 990 097 8002</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-100">
                          <Globe className="w-2.5 h-2.5 flex-shrink-0" />
                          <span>www.GilaFruit.com</span>
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center space-y-4 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <p className="text-slate-400 text-4xl">📚</p>
                <p className="text-slate-800 font-bold font-display text-base">No blog articles match search keywords</p>
                <p className="text-slate-500 text-xs">Try searching for other fruits or products like "Kiwi" or "Garlic".</p>
              </div>
            )}

            {/* 3. PAGINATION BUTTONS ROW */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 py-2" id="blog-pagination">
                
                {/* Prev button */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`h-9 w-9 rounded-lg border border-slate-200/80 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors cursor-pointer ${
                    currentPage === 1 ? 'opacity-40 pointer-events-none' : ''
                  }`}
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <button
                    key={pg}
                    type="button"
                    onClick={() => setCurrentPage(pg)}
                    className={`h-9 w-9 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                      currentPage === pg 
                        ? 'bg-[#1a8a42] text-white shadow-sm' 
                        : 'border border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {pg}
                  </button>
                ))}

                {/* Next button */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`h-9 w-9 rounded-lg border border-slate-200/80 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors cursor-pointer ${
                    currentPage === totalPages ? 'opacity-40 pointer-events-none' : ''
                  }`}
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            )}

          </div>

        </div>
      </div>



    </div>
  );
}
