import React, { useState } from 'react';
import { 
  Calendar, 
  Sprout, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  BarChart3, 
  Clock, 
  Sparkles, 
  Globe, 
  Leaf, 
  Truck, 
  Users, 
  TrendingUp, 
  BookOpen,
  Compass,
  ArrowRight
} from 'lucide-react';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  tag: string;
  category: 'foundation' | 'expansion' | 'excellence';
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

export default function HistoryScreen() {
  const [activeEra, setActiveEra] = useState<string>('all');

  const stats = [
    { label: "Established Since", value: "2001", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { label: "Countries Served", value: "15+", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Elite Certifications", value: "10+", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { label: "Annual Export Capacity", value: "85K+ Tons", color: "text-indigo-500 bg-indigo-501/10 border-indigo-500/20" }
  ];

  const eras = [
    { id: 'all', label: 'All Milestones', years: '2001 - Present' },
    { id: 'foundation', label: 'Foundations', years: '2001 - 2010' },
    { id: 'expansion', label: 'Global Push', years: '2011 - 2019' },
    { id: 'excellence', label: 'Modern Premium', years: '2020 - Present' }
  ];

  const timelineItems: TimelineItem[] = [
    {
      id: '1',
      year: '2001 - 2005',
      title: 'Dreams That Bore Fruit',
      tag: 'ORIGIN STORY',
      category: 'foundation',
      description: 'Amidst the lush, fragrant kiwi orchards of Iran in 2001, a grand vision took root. Our founders, with tireless devotion and hopeful hearts, planted the first seeds of what would become GilaFruit. In those early years, they worked hand-in-hand with the local agricultural community to deliver exceptional produce to domestic markets, always planning for premium expansion.',
      icon: <Sprout className="w-5 h-5 text-emerald-600" />,
      highlights: ['Verdant Kiwi Fields', 'Community Empowerment', 'Local Distribution Setup']
    },
    {
      id: '2',
      year: '2005 - 2010',
      title: 'A New Era of Growth',
      tag: 'SYSTEMIZATION',
      category: 'foundation',
      description: 'During the global agricultural and transport adjustments of this period, our managers executed intelligent supply chains to secure steady market-share growth. In late 2010, responsibilities for modernizing administrative operations and planning large-scale multi-national cold logistics were proudly passed to a highly motivated second generation of specialists.',
      icon: <TrendingUp className="w-5 h-5 text-amber-605" />,
      highlights: ['Cold Storage Upgrades', 'Logistics Standardization', 'Generational Transition']
    },
    {
      id: '3',
      year: '2011 - 2013',
      title: 'Registration of Sabz Gostaran Gilan Fruit Company',
      tag: 'REGISTRATION',
      category: 'expansion',
      description: 'Sabz Gostar Gilan Fruit Company was officially registered, introducing the "GilaFruit" brand to international traders. The business modernized the wholesale collection and export of direct citrus crops and high-grade fruits. In this era, GilaFruit quickly developed long-term customer pipelines in Georgia, Turkey, Iraq, and Pakistan.',
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      highlights: ['Sabz Gostaran Foundation', 'Brand Trademark', 'First Cross-Border Contracts']
    },
    {
      id: '4',
      year: '2014 - 2015',
      title: 'Transition to High-Quality Digital Processing',
      tag: 'TRANSFORMATION',
      category: 'expansion',
      description: 'This period brought significant visual and technical shifts. The brand launched its premium online portal to update bulk prices, established brand-new sorting depots, and opened secure kiwi pipelines straight to the Eurasian custom entries. Concurrently, seeking specialized quality standards became the core corporate mandate.',
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      highlights: ['First Online Price Sheets', 'Kiwi Pipeline to Eurasia', 'Packaging Re-engineering']
    },
    {
      id: '5',
      year: '2016 - 2019',
      title: 'Pioneering Sustainable Supply Chains',
      tag: 'SUSTAINABILITY',
      category: 'expansion',
      description: 'Between 2016 and 2019, GilaFruit redefined its sourcing contracts. By integrating drip irrigation guidelines with partnered fields, providing fair wages, and recycling water throughout the packhouses, we guaranteed eco-responsible footprints. This secured our partnerships with first-tier regional supermarkets.',
      icon: <Leaf className="w-5 h-5 text-emerald-650" />,
      highlights: ['Water Recycling Protocols', 'Supermarket-Grade Packhouse', 'Fair Farmer Alliance']
    },
    {
      id: '6',
      year: '2020',
      title: 'Achieving Elite Global Standards',
      tag: 'CERTIFICATIONS',
      category: 'excellence',
      description: 'GilaFruit took quality assurance to the peak of international compliance. In 2020, we secured prestigious certifications including ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, IMS, and ISO 22301. These achievements allowed us to sign direct procurement contracts with renowned hotel chains and giant retail hypermarkets.',
      icon: <Award className="w-5 h-5 text-amber-500" />,
      highlights: ['ISO 22000 & HACCP Certified', 'Direct Hotel Sourcing', 'Eurasian Customs Protocol']
    },
    {
      id: '7',
      year: '2021',
      title: 'Empowering Regional Joint-Ventures',
      tag: 'JOINT VENTURES',
      category: 'excellence',
      description: 'We established long-term strategic sorting and brokerage offices in the most promising agricultural nodes of Iran. Facilitating instant customs clearances for massive convoys, GilaFruit consolidated imports and exports with major trade hubs, taking active leadership roles in agricultural conferences.',
      icon: <Users className="w-5 h-5 text-cyan-600" />,
      highlights: ['Regional Custom Brokerage', 'Mass Cargo Consolidation', 'Active Agro-Expositions']
    },
    {
      id: '8',
      year: '2022',
      title: 'Unified Sourcing & Unified Sea Logistics',
      tag: 'MULTIMODAL SHIPS',
      category: 'excellence',
      description: 'To simplify wholesale imports, GilaFruit offered clients a single-window interface covering crop selection, cooling, customized package design, custom clearance, and door-to-door delivery. Under partnerships with elite refrigerated shipping lines, we expanded maritime transit lanes across regional ports with flawless cold chain tracking.',
      icon: <Truck className="w-5 h-5 text-indigo-600" />,
      highlights: ['Single-Window Cargo Booking', 'Reefer Container Shipping', 'GPS-Tracked Cold Supply']
    },
    {
      id: '9',
      year: '2023',
      title: 'Digital Logistics & Market Leadership',
      tag: 'LOGISTICS LEADER',
      category: 'excellence',
      description: 'GilaFruit achieved peak efficiency across export corridors. By launching proprietary digital tracking of temperature states inside containers, establishing advanced cooling halls, and contracting with sovereign commercial buyers in Belarus, Russia, India, and the Arab Gulf, the brand solidified its leadership.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      highlights: ['Autonomous Temp Logs', 'MENA Area Expansion', 'Premium Wholesale Leadership']
    },
    {
      id: '10',
      year: '2024',
      title: 'The Smart Agro-Trade Revolution',
      tag: 'SMART TRADE',
      category: 'excellence',
      description: 'We created an advanced trading workflow and debuted the third generation of the GilaFruit digital platform. This breakthrough features live ocean & land freight rate calculations, interactive fruit catalogs with high-end multimedia indexes, and real-time support channels for international traders.',
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      highlights: ['Live Freight Rates Portal', 'Expert Consultations', 'Wholesale Price Tickers']
    },
    {
      id: '11',
      year: '2025',
      title: 'A Vision for the Coming Horizon',
      tag: 'THE COMING CORRIDOR',
      category: 'excellence',
      description: 'We are already cataloging and designing new agricultural processing facilities. Introducing solar-powered packhouses and robotic calibration systems, we look forward to presenting even more premium surprises to global wholesaling partners very soon.',
      icon: <Clock className="w-5 h-5 text-amber-500 animate-pulse" />,
      highlights: ['Robotic Fruit Sorters', 'Solar Power Integration', 'Next-Gen Fruit Processing']
    }
  ];

  const filteredItems = timelineItems.filter(
    item => activeEra === 'all' || item.category === activeEra
  );

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 font-sans pb-24" id="history-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER - Offset Padding included for Fixed Header */}
      <div className="bg-[#f0f4f1] border-b border-emerald-900/10 pt-[88px] sm:pt-[104px] md:pt-[148px] pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3 bg-emerald-600 rounded-full" />
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-emerald-805">Chronology & Legacy</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3.5xl lg:text-4xl font-black text-emerald-950 tracking-tight leading-tight">
                Our Proud Heritage
              </h1>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white/70 backdrop-blur px-3.5 py-1.5 rounded-full border border-slate-205">
              <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
              <span className="text-slate-350">/</span>
              <a href="#/about" className="hover:text-emerald-800 transition-colors">About Us</a>
              <span className="text-slate-350">/</span>
              <span className="font-semibold text-emerald-900">History</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE STORY SUMMARY & INTERACTIVE CAROUSEL COUNTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Paragraph Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-black tracking-widest rounded-full border border-emerald-100">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                ESTABLISHED 2001
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                From Pristine Orchards to the Global Wholesale Market
              </h2>
            </div>

            <div className="space-y-4 text-slate-605 text-xs sm:text-sm leading-relaxed font-sans">
              <p>
                From its humble beginnings situated amidst the verdant, sun-soaked kiwi orchards of Gilan in 2001, <strong className="text-emerald-950 font-bold">GilaFruit</strong> has emerged as a powerhouse in agricultural export logistics across the Eurasian and Middle Eastern domains.
              </p>
              <p>
                As a proud branch of the registered <strong className="text-emerald-900">Sabzgustaran Gilan Fruit Company</strong>, GilaFruit was founded with an unyielding commitment to premium calibration, elite cold preservation, and sustainable cultivation. Over 23 years, we have mastered complex customs clearance frameworks and built cutting-edge terminal refrigeration networks.
              </p>
              <p className="border-l-4 border-emerald-600 pl-4 py-2 bg-emerald-50/50 rounded-r-xl italic font-serif text-slate-700">
                "Our history chronicles a relentless focus on quality over compromise. We believe that global trading should be built on absolute trust and highly systematic operations."
              </p>
              <p>
                Today, our state-of-the-art packaging systems and synchronized cold trucking networks supply international hotel chains, elite restaurants, and global wholesale distributors with top-tier agricultural items, directly verified from origin.
              </p>
            </div>
          </div>

          {/* Portrait Kiwi card frame with overlapping info badge */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white p-3.5 rounded-3xl border border-slate-205 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
                
                {/* Main kiwi photo */}
                <img 
                  src="/src/assets/images/gilafruit_about_kiwi_grower_1781077370132.png" 
                  alt="Organic Kiwi Grower GilaFruit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Overlapping small circular GilaFruit seal badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full shadow-lg p-1.5 border border-slate-100 flex items-center justify-center animate-bounce">
                  <div className="w-16 h-16 rounded-full border-2 border-emerald-600/30 flex flex-col items-center justify-center bg-[#01251c] text-white p-1 text-[7px] text-center font-bold">
                    <span className="text-amber-400 text-xs">★</span>
                    GilaFruit
                    <span className="text-[5px] text-slate-300 font-normal leading-none pt-0.5">EST 2001</span>
                  </div>
                </div>

                {/* Low card banner with Green badge box */}
                <div className="absolute bottom-4 left-4 right-4 bg-emerald-900/90 backdrop-blur-md text-white p-4 rounded-xl shadow-lg border border-emerald-500/20 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-black text-xl tracking-none text-amber-405 leading-none">
                        23+ Years
                      </h4>
                      <p className="text-[11px] font-semibold text-emerald-100 mt-1 leading-none">
                        Of Agronomic Excellence
                      </p>
                    </div>
                    <span className="w-[1px] h-8 bg-emerald-700 self-center mx-1" />
                    <div className="flex-1 pl-4">
                      <p className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                        Registered Brand:
                      </p>
                      <p className="text-[10px] text-emerald-100 leading-tight">
                        Sabzgustaran Gilan Fruit
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Horizontal Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-200">
          {stats.map((stat, sIdx) => (
            <div 
              key={sIdx} 
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm text-center space-y-1.5 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                {stat.label}
              </p>
              <p className="text-xl sm:text-2xl font-black text-emerald-950">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 3. INTERACTIVE CHRONICLE ERA CONTROLLER (Middle segment) */}
      <div className="bg-[#f0f4f1]/60 border-y border-slate-200 mt-20 py-10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="space-y-2">
            <span className="text-emerald-705 text-xs font-black uppercase tracking-widest block">Explore Millennial Milestones</span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">
              Interactive Era Chronology
            </h3>
            <p className="text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
              Select an era to explore GilaFruit's historical highlights, certification milestones, and trade breakthroughs.
            </p>
          </div>

          {/* Era Filter Select Buttons - Styled beautifully */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-emerald-950/5 rounded-2xl max-w-3xl mx-auto">
            {eras.map((era) => {
              const isSelected = activeEra === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setActiveEra(era.id)}
                  className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl transition-all text-xs font-bold leading-normal focus:outline-none ${
                    isSelected
                      ? 'bg-emerald-900 text-white shadow-md'
                      : 'bg-white hover:bg-slate-50 text-slate-700 shadow-sm'
                  }`}
                >
                  <span className="block">{era.label}</span>
                  <span className={`text-[9px] font-normal tracking-wide block mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {era.years}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. CHIC MASTER TIMELINE STREAM */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        
        {/* Centered vertical line */}
        <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-200 via-amber-250 to-emerald-200 transform -translate-x-1/2 z-0" />

        {/* Timeline items list */}
        <div className="space-y-12 relative z-10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-3xl border border-slate-205 shadow-sm">
              <p className="text-slate-400 text-xs font-mono">No milestones found in this filter.</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative`}
                >
                  
                  {/* Timeline Node Icon Pin */}
                  <div className="absolute left-[30px] lg:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white border-2 border-emerald-600 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer">
                      {item.icon}
                    </div>
                  </div>

                  {/* Left spacing or Card block */}
                  <div className={`w-full lg:w-1/2 pl-14 lg:pl-0 ${isEven ? 'lg:pr-10 text-left' : 'lg:pl-10 text-left'}`}>
                    
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                      
                      {/* Interactive top colored tab strip */}
                      <div className="h-1.5 w-full absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-emerald-800 to-emerald-600" />
                      
                      {/* Year Indicator & Tag */}
                      <div className="flex items-center justify-between gap-2 pt-2 pb-3 border-b border-slate-100">
                        <span className="text-xs font-black uppercase tracking-widest text-[#1a8a42] font-mono">
                          {item.year}
                        </span>
                        <span className="text-[9px] font-black uppercase bg-amber-500/10 text-amber-805 tracking-wider px-2 py-0.5 rounded border border-amber-500/20">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-display text-base sm:text-lg font-black text-emerald-950 tracking-tight mt-3 mb-2">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                        {item.highlights.map((high, hIdx) => (
                          <span 
                            key={hIdx} 
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-655 bg-slate-50 border border-slate-200 p-1.5 rounded-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            {high}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Date text column on opposite side on desktop */}
                  <div className="hidden lg:flex lg:w-1/2 items-center justify-start py-6 px-10">
                    <div className={`space-y-1 ${isEven ? 'text-left pl-6' : 'text-right pr-6 w-full'}`}>
                      <span className="font-display font-black text-emerald-950 text-sm tracking-tight block">
                        Milestone Complete
                      </span>
                      <p className="text-slate-405 text-xs font-mono">
                        Era: {item.category.toUpperCase()}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

      {/* 5. GORGEOUS PREMIUM FOOTER Call To Action */}
      <div className="max-w-5xl mx-auto px-4 mt-24">
        <div className="relative bg-gradient-to-br from-[#01251d] via-[#011a14] to-[#023326] text-white p-8 sm:p-12 rounded-3xl shadow-xl overflow-hidden text-center">
          
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest block">Ready to Partner?</span>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Bring GilaFruit Premium Standards to Your Business
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Whether you are an international supermarket chain or a high-end food distributor, we stand ready to deliver verified quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="#/products" 
                className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5"
              >
                Browse Catalog
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#/calendar" 
                className="px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-700 hover:border-amber-400 text-white border border-emerald-700 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5"
              >
                Harvest Calendar
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
