import { FileCheck, Globe, Users, Warehouse, ShieldCheck, Boxes, Star, Eye } from 'lucide-react';

interface ServicesScreenProps {
  onNavigate?: (targetHash: string) => void;
}

export default function ServicesScreen({ onNavigate }: ServicesScreenProps) {
  return (
    <div className="bg-[#fcfdfc] min-h-screen text-slate-800" id="services-screen-wrapper">
      
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10 pt-16">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            GilaFruit: Bridging Iran's Orchards with Global Markets
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-4xl mx-auto leading-relaxed font-sans font-medium">
            Our <span className="font-semibold text-emerald-400">Services</span> cover product selection, competitive pricing, effective Marketing, Export procedures, Customs Clearance, and International Transportation. We offer comprehensive Services for seamless Export, including Customs Clearance, International Transportation, and strategic Marketing.
          </p>
        </div>
      </div>

      {/* 2. OVERLAPPING WHITE CARD BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 sm:-mt-16 md:-mt-20 mb-16">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            
            {/* Column 1: Customs Clearance */}
            <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:pr-8 last:border-r-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner group hover:scale-105 transition-all">
                <FileCheck className="w-8 h-8 text-[#015a45]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#01251d]">Customs Clearance</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                Entrust the complex process of customs clearance to us. Our customs experts, with a thorough understanding of customs laws and regulations in various countries, handle all stages of customs clearance swiftly and smoothly.
              </p>
              <button 
                onClick={() => onNavigate?.('#/services/customs')}
                className="text-xs font-bold text-center text-emerald-700 hover:text-[#015a45] transition-colors mt-2 underline cursor-pointer"
              >
                Customs Detail Page →
              </button>
            </div>

            {/* Column 2: International Transportation */}
            <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:px-4 last:border-r-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner hover:scale-105 transition-all">
                <Globe className="w-8 h-8 text-[#015a45]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#01251d]">International Transportation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                We utilize a diverse range of transportation methods, including sea, air, and land, to deliver your products to your desired destination in the shortest possible time while adhering to international standards.
              </p>
              <button 
                onClick={() => onNavigate?.('#/services/transportation')}
                className="text-xs font-bold text-center text-emerald-700 hover:text-[#015a45] transition-colors mt-2 underline cursor-pointer"
              >
                Fleet & Routes Detail Page →
              </button>
            </div>

            {/* Column 3: Specialized Export Consulting */}
            <div className="flex flex-col items-center space-y-4 md:pl-8 last:border-r-0">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner hover:scale-105 transition-all">
                <Users className="w-8 h-8 text-[#015a45]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#01251d]">Specialized Export Consulting</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                Our experienced experts, considering your target market, food culture, and country-specific regulations, provide the best solutions for exporting your products. From selecting suitable products to setting competitive prices and marketing, we are by your side.
              </p>
              <button 
                onClick={() => onNavigate?.('#/contact')}
                className="text-xs font-bold text-center text-emerald-700 hover:text-[#015a45] transition-colors mt-2 underline cursor-pointer"
              >
                Inquire Consultation →
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. PARAGRAPH TEXT SECTION */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center" id="services-intro-paragraph">
        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-sans max-w-4xl mx-auto">
          With over two decades of experience in the <span className="text-emerald-600 font-bold">fruit and vegetable</span> export industry, <span className="text-emerald-700 font-extrabold">GilaFruit</span> stands as a pioneer in Iran. Our extensive network of professional farmers and modern orchards enables us to deliver fresh, <span className="text-emerald-600 font-bold">high-quality</span> produce directly from the farm to customers worldwide. Our expertise lies in carefully selecting the finest fruit and vegetable varieties, employing precise <span className="text-emerald-600 font-bold">packaging</span> techniques adhering to international standards, and maintaining an unbroken cold chain to ensure product freshness and quality. GilaFruit Services encompass all aspects of the export process, from product selection and competitive <span className="text-emerald-600 font-bold">pricing</span> to marketing and streamlining customs processes. We provide comprehensive support to help you successfully export your <span className="text-emerald-600 font-bold">products</span>. By choosing GilaFruit, you gain a reliable business partner committed to increasing your market share in competitive global markets.
        </p>
      </div>

      {/* 4. CERTIFICATIONS PROMOTIONAL CARD */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="quality-promo-card">
        <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border-l-4 border-emerald-600 border border-slate-100 p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-3xl text-left">
            <h2 className="font-display text-xl sm:text-2xl font-black text-emerald-950 tracking-tight leading-snug">
              GilaFruit: Quality Guaranteed with Global Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              At GilaFruit, we prioritize the health and well-being of our consumers above all else. Our unwavering commitment to quality and food safety is reflected in our rigorous adherence to internationally recognized standards. We are proud to hold <span className="font-semibold text-emerald-700">certifications</span> such as ISO 9001, ISO 22000, HACCP, and GMP, which attest to our dedication to providing safe, wholesome, and consistently high-quality products and Services. These certifications encompass every aspect of our operations, from sourcing and production to packaging and distribution, ensuring that our products meet the strictest global benchmarks.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-start md:justify-end">
            <button
              onClick={() => onNavigate?.('#/certificates')}
              className="px-6 py-3 bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4.5 h-4.5 text-amber-300" />
              Certifications
            </button>
          </div>

        </div>
      </div>

      {/* 5. GLOBAL LOGISTICS PARTNER SECTION */}
      <div className="bg-[#f8faf8] border-t border-b border-slate-100 py-16 md:py-24" id="logistics-partner-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Your Trusted Partner for Global Logistics
            </h2>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              Benefit from our integrated approach to logistics, including transportation, warehousing, and customs clearance
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
                <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base group-hover:text-emerald-800">Warehousing and Distribution</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  We offer warehousing facilities in equipped cold storage warehouses and, through precise planning, deliver your products to your customers on time
                </p>
                <span className="text-xs font-bold text-center text-emerald-700 group-hover:underline">Cold Depot Page →</span>
              </div>

              {/* Card 2: Cargo Insurance */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md transition-all duration-300">
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <ShieldCheck className="w-7 h-7 text-[#1a8a42]" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">Cargo Insurance</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  To ensure the safety of your shipments throughout the journey, we offer cargo insurance with diverse coverage options
                </p>
              </div>

              {/* Card 3: Customized Packaging */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md transition-all duration-300">
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <Boxes className="w-7 h-7 text-[#1a8a42]" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">Customized Packaging</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  We design and implement custom packaging tailored to your product type, target market, and brand to differentiate your product in global markets
                </p>
              </div>

            </div>

            {/* Centered Row Box 4: Branding */}
            <div className="flex justify-center pt-2">
              <div className="bg-white md:max-w-md w-full rounded-2xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-4 group hover:shadow-md transition-all duration-300">
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-700">
                  <Star className="w-7 h-7 text-[#1a8a42] fill-amber-400 stroke-[#1a8a42]" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">Branding</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  By designing attractive packaging and creating a strong visual identity for your products, we help you build your brand in global markets
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
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 text-left space-y-4 shadow-lg border border-emerald-800 relative overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute top-6 right-6 animate-pulse" />
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">Live Spot Rates</span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">Daily Freight Rates Dashboard</h3>
            <p className="text-xs sm:text-sm text-emerald-110/90 leading-relaxed">
              Plan and estimate your regional shipping costs dynamically. Check regional spot indexes, average seasonal trend calculations and use our active container weight calculator.
            </p>
            <button
              onClick={() => onNavigate?.('#/services/freight-rates')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Access Rates Calculator →
            </button>
          </div>

          {/* Spotlight 2: Terminal dispatch stats */}
          <div className="bg-white rounded-3xl p-8 text-left space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-150/85 relative overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-6 right-6 animate-pulse" />
            <span className="text-[#1a8a42] font-mono text-xs font-bold uppercase tracking-widest block">Operational Analytics</span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">Truck Departure Stats & Logs</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Stay fully informed about GilaFruit's shipping frequencies. Review destination shares pie-charts, monthly trailers dispatched, and live transit clearing logs telemetry.
            </p>
            <button
              onClick={() => onNavigate?.('#/services/truck-stats')}
              className="px-5 py-2.5 bg-[#1a8a42] hover:bg-[#156e34] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Analyze Dispatch Telemetry →
            </button>
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
                International Shipping
              </h3>
              <div className="flex justify-center">
                <button
                  onClick={() => onNavigate?.('#/contact')}
                  className="px-5 py-2 bg-black/60 border border-white/25 hover:bg-[#1a8a42] hover:border-transparent text-white font-semibold text-xs tracking-wide uppercase rounded-full shadow transition-all cursor-pointer"
                >
                  More Information
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

