import { FileCheck, Globe, Users, Warehouse, ShieldCheck, Boxes, Star, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getServicesTranslations } from './servicesTranslations';

interface ServicesScreenProps {
  onNavigate?: (targetHash: string) => void;
}

export default function ServicesScreen({ onNavigate }: ServicesScreenProps) {
  const { language, direction } = useLanguage();
  const tServices = getServicesTranslations(language);
  const isRtl = direction === 'rtl';

  return (
    <div className={`bg-[#fcfdfc] min-h-screen text-slate-800 ${isRtl ? 'font-secondary' : 'font-sans'}`} id="services-screen-wrapper">
      
      {/* 1. HERO HEADER SECTION */}
      <div 
        className="relative bg-cover bg-center py-24 md:py-32 flex flex-col justify-center items-center overflow-hidden" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600')` 
        }}
        id="services-hero"
      >
        {/* Soft dark green-tinted overlay */}
        <div className="absolute inset-0 bg-slate-950/70 z-0" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10 pt-[110px] sm:pt-[140px] md:pt-[180px] lg:pt-[200px]">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {tServices.hero.title}
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-4xl mx-auto leading-relaxed font-sans font-medium">
            {tServices.hero.description}
          </p>
        </div>
      </div>

      {/* 2. OVERLAPPING WHITE CARD BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 sm:-mt-16 md:-mt-20 mb-16">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center items-stretch">
            
            {/* Column 1: Customs Clearance */}
            <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:pr-8 last:border-r-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner group hover:scale-105 transition-all">
                <FileCheck className="w-8 h-8 text-[#015a45]" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-black text-[#01251d]">{tServices.cards.customs.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm flex-grow">
                {tServices.cards.customs.desc}
              </p>
              <button 
                onClick={() => onNavigate?.('#/services/customs')}
                className="text-xs font-bold text-center text-emerald-700 hover:text-[#015a45] transition-colors mt-2 underline cursor-pointer"
              >
                {tServices.cards.customs.btn}
              </button>
            </div>

            {/* Column 2: International Transportation */}
            <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:px-4 last:border-r-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner hover:scale-105 transition-all">
                <Globe className="w-8 h-8 text-[#015a45]" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-black text-[#01251d]">{tServices.cards.transport.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm flex-grow">
                {tServices.cards.transport.desc}
              </p>
              <button 
                onClick={() => onNavigate?.('#/services/transportation')}
                className="text-xs font-bold text-center text-emerald-700 hover:text-[#015a45] transition-colors mt-2 underline cursor-pointer"
              >
                {tServices.cards.transport.btn}
              </button>
            </div>

            {/* Column 3: Specialized Export Consulting */}
            <div className="flex flex-col items-center space-y-4 md:pl-8 last:border-r-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner hover:scale-105 transition-all">
                <Users className="w-8 h-8 text-[#015a45]" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-black text-[#01251d]">{tServices.cards.consulting.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm flex-grow">
                {tServices.cards.consulting.desc}
              </p>
              <button 
                onClick={() => onNavigate?.('#/contact')}
                className="text-xs font-bold text-center text-emerald-700 hover:text-[#015a45] transition-colors mt-2 underline cursor-pointer"
              >
                {tServices.cards.consulting.btn}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. PARAGRAPH TEXT SECTION */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center" id="services-intro-paragraph">
        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-sans max-w-4xl mx-auto">
          {tServices.introParagraph}
        </p>
      </div>

      {/* 4. CERTIFICATIONS PROMOTIONAL CARD */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="quality-promo-card">
        <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border-l-4 border-emerald-600 border border-slate-100 p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-3xl text-start">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-emerald-950 tracking-tight leading-snug">
              {tServices.certificationsCard.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              {tServices.certificationsCard.desc}
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-start md:justify-end">
            <button
              onClick={() => onNavigate?.('#/certificates')}
              className="px-6 py-3 bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4.5 h-4.5 text-amber-300" />
              {tServices.certificationsCard.btn}
            </button>
          </div>

        </div>
      </div>

      {/* 5. GLOBAL LOGISTICS PARTNER SECTION */}
      <div className="bg-[#f8faf8] border-t border-b border-slate-100 py-16 md:py-24" id="logistics-partner-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3">
            <h2 className="font-display text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {tServices.globalPartner.title}
            </h2>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              {tServices.globalPartner.desc}
            </p>
          </div>

          {/* Logistics Grid containing 3 columns & centered 4th branding item */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Warehousing */}
              <div 
                onClick={() => onNavigate?.('#/services/logistic')}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <Warehouse className="w-7 h-7 text-[#1a8a42]" />
                </div>
                <h4 className="font-display font-black text-slate-900 text-xs sm:text-base group-hover:text-emerald-800">{tServices.grid.warehousing.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs flex-grow">
                  {tServices.grid.warehousing.desc}
                </p>
                <span className="text-xs font-bold text-center text-emerald-700 group-hover:underline">{tServices.grid.warehousing.btn}</span>
              </div>

              {/* Card 2: Cargo Insurance */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md transition-all duration-300">
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <ShieldCheck className="w-7 h-7 text-[#1a8a42]" />
                </div>
                <h4 className="font-display font-black text-slate-900 text-xs sm:text-base">{tServices.grid.insurance.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs flex-grow">
                  {tServices.grid.insurance.desc}
                </p>
              </div>

              {/* Card 3: Customized Packaging */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md transition-all duration-300">
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <Boxes className="w-7 h-7 text-[#1a8a42]" />
                </div>
                <h4 className="font-display font-black text-slate-900 text-xs sm:text-base">{tServices.grid.packaging.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs flex-grow">
                  {tServices.grid.packaging.desc}
                </p>
              </div>

            </div>

            {/* Centered Row Box 4: Branding */}
            <div className="flex justify-center pt-2">
              <div className="bg-white md:max-w-md w-full rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md transition-all duration-300">
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <Star className="w-7 h-7 text-[#1a8a42] fill-amber-400 stroke-[#1a8a42]" />
                </div>
                <h4 className="font-display font-black text-slate-900 text-xs sm:text-base">{tServices.grid.branding.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs flex-grow">
                  {tServices.grid.branding.desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Dynamic Sub-services spotlight (Freight Rates & Dispatch Telemetry) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" id="live-telemetry-highlights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Spotlight 1: Daily Freight Rates */}
          <div className={`bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 space-y-4 shadow-lg border border-emerald-800 relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute top-6 right-6 animate-pulse" />
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">{tServices.spotlights.rates.tag}</span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">{tServices.spotlights.rates.title}</h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              {tServices.spotlights.rates.desc}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate?.('#/services/freight-rates')}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                {tServices.spotlights.rates.btn}
              </button>
            </div>
          </div>

          {/* Spotlight 2: Terminal dispatch stats */}
          <div className={`bg-white rounded-3xl p-8 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-150/85 relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-6 right-6 animate-pulse" />
            <span className="text-[#1a8a42] font-mono text-xs font-bold uppercase tracking-widest block">{tServices.spotlights.telemetry.tag}</span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">{tServices.spotlights.telemetry.title}</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {tServices.spotlights.telemetry.desc}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate?.('#/services/truck-stats')}
                className="px-5 py-2.5 bg-[#1a8a42] hover:bg-[#156e34] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                {tServices.spotlights.telemetry.btn}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 6. TRIPLE CARD IMAGE HIGHLIGHT ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="media-showcase-row">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Processing plant */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
              alt="Processing sorted line" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          {/* Card 2: International Shipping (Centered highlight overlay) */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group select-none ring-4 ring-[#1a8a42]/10">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" 
              alt="International Shipping Fleet" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Absolute overlay container positioned bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6 text-center space-y-3">
              <h3 className="text-white font-display text-lg sm:text-xl font-extrabold tracking-tight">
                {tServices.media.title}
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => onNavigate?.('#/contact')}
                  className="px-5 py-2 bg-black/60 border border-white/25 hover:bg-[#1a8a42] hover:border-transparent text-white font-semibold text-xs tracking-wide uppercase rounded-full shadow transition-all cursor-pointer"
                >
                  {tServices.media.btn}
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Logistics Forklift Loader */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
              alt="Forklift warehouse loading center" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>

        </div>
      </div>

    </div>
  );
}
