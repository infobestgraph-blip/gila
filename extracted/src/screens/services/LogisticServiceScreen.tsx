import { useState } from 'react';
import { 
  Eye, ShieldCheck, Search, FileDown, AppWindow, 
  MapPin, HelpCircle, Phone, Lock, Sparkles, Navigation,
  FileText, ClipboardCheck, Scale, Award, Layers, HelpCircle as HelpIcon,
  Route, Compass, Zap, LayoutGrid, CheckSquare, ClipboardList, Activity, Package, Sprout
} from 'lucide-react';

interface LogisticServiceScreenProps {
  onNavigate?: (targetHash: string) => void;
}

// Custom High-fidelity Supply Chain Icon vector to match the original screenshot
const SupplyChainIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Map location pins and routes */}
    <circle cx="50" cy="25" r="5" fill="#e8f5e9" />
    <circle cx="25" cy="70" r="5" />
    <circle cx="75" cy="70" r="5" />
    {/* Interconnected paths */}
    <path d="M45 28 L28 67 M55 28 L72 67 M30 70 L70 70" strokeDasharray="3 3" />
    {/* Node indicators */}
    <circle cx="50" cy="48" r="8" stroke="#1a8a42" />
    <path d="M48 48 L52 48" />
  </svg>
);

// Custom High-fidelity Global Quality Specialist Icon
const GlobalStandardIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Profile outline with clipboard */}
    <rect x="35" y="25" width="30" height="42" rx="3" fill="#e8f5e9" strokeWidth="1.5" />
    {/* Clipboard clip */}
    <path d="M44 25 L44 20 C44 18, 56 18, 56 20 L56 25" fill="#cbd5e1" />
    {/* Checklist lines */}
    <line x1="42" y1="36" x2="58" y2="36" />
    <line x1="42" y1="44" x2="58" y2="44" stroke="#1a8a42" />
    <line x1="42" y1="52" x2="50" y2="52" />
    {/* Approved seal checkmark */}
    <circle cx="68" cy="68" r="10" stroke="#1a8a42" fill="white" />
    <path d="M64 68 L67 71 L73 65" stroke="#1a8a42" strokeWidth="2" />
  </svg>
);

// Custom High-fidelity Smart Logistics tech Icon
const SmartLogisticsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Fast truck moving inside digital signals */}
    <path d="M15 45 L55 45 L62 55 L78 55 L78 68 L15 68 Z" fill="#e8f5e9" />
    <circle cx="28" cy="68" r="6" />
    <circle cx="58" cy="68" r="6" />
    {/* Wireless technology loops */}
    <path d="M40 35 C 50 30, 60 40, 65 35" strokeDasharray="2 2" />
    {/* Dynamic cargo signals */}
    <path d="M72 32 A 18 18 0 0 1 88 52" stroke="#1a8a42" strokeWidth="2" />
    <path d="M66 26 A 25 25 0 0 1 92 58" stroke="#818cf8" strokeWidth="1.5" />
  </svg>
);

export default function LogisticServiceScreen({ onNavigate }: LogisticServiceScreenProps) {
  // Carousel slideshow bullet state matching the visual
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in" id="logistic-page-view">
      
      {/* 1. HERO HEADER SECTION */}
      <div 
        className="relative pt-[88px] pb-24 sm:pt-[104px] md:pt-[140px] md:pb-36 bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(1, 15, 12, 0.75), rgba(0, 0, 0, 0.78)), url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600')` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto">
            GilaFruit: Delivering Freshness, Globally, with Precision Logistics
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-4xl mx-auto font-semibold">
            Delivering Freshness Globally with Precise Logistic. Our logistics solutions ensure Product Integrity of fruits and vegetables, meeting Global Standards. We maintain Product Integrity for all fruits and vegetables, adhering to Global Standards in every logistic step.
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
          
          {/* Card 1: Integrated Supply Chain */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:pr-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <SupplyChainIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              Integrated Supply Chain
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              An integrated and intelligent supply chain for the successful export of GilaFruit products
            </p>
          </div>

          {/* Card 2: Global Standard */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:px-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <GlobalStandardIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              Global Standard
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Iranian fruits and vegetables meet the highest global standards with advanced quality control systems
            </p>
          </div>

          {/* Card 3: Smart Logistics */}
          <div className="flex flex-col items-center space-y-4 md:pl-6">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <SmartLogisticsIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              Smart Logistics
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Increasing speed and reducing waste in exporting Iranian agricultural products using advanced technologies
            </p>
          </div>

        </div>
      </div>

      {/* 3. TWO COLS DESCRIPTION BLOCK & BENEFITS CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Global Standards left border card */}
          <div className="border-l-4 border-l-[#1a8a42] bg-[#f8faf7] rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
                Global Standards; The Pride of <span className="text-[#1a8a42]">GilaFruit Company</span>
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-semibold">
                By obtaining prestigious international <span className="text-[#1a8a42] font-black">certifications</span> such as ISO 9001, ISO 22000, and HACCP, GilaFruit has demonstrated its commitment to product quality and safety. These certifications guarantee adherence to global standards at all stages of the production and export process.
              </p>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-semibold">
                GilaFruit has significantly improved the quality of its services by investing in cutting-edge technologies. The use of GPS tracking systems enables real-time tracking of shipments and ensures their safety. Additionally, temperature control systems guarantee the preservation of product quality throughout the journey.
              </p>
            </div>

            {/* Solid Pill-shaped Eye CERTIFICATIONS Button */}
            <div className="flex justify-start">
              <button
                onClick={() => onNavigate?.('#/certificates')}
                className="px-6 py-2.5 bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4.5 h-4.5 text-white" />
                <span>Certifications</span>
              </button>
            </div>
          </div>

          {/* Right Column: Paragraph narrative */}
          <div className="space-y-6 pt-2">
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              <span className="text-emerald-700 font-bold">GilaFruit</span>, leveraging its extensive experience and knowledge in the export of <span className="text-emerald-600 font-semibold">fruits</span> and <span className="text-emerald-600 font-semibold">vegetables</span>, has managed to carve a unique niche for itself in global markets. By providing comprehensive and innovative logistic services, the company guarantees the freshness and quality of Iranian products as they journey to the far corners of the world. This article will delve into a detailed examination of GilaFruit's logistic system, the challenges and opportunities it faces, and the company's achievements in the export of agricultural products.
            </p>
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              GilaFruit has been able to overcome the complexities of the agricultural supply chain by employing a combined and focused logistic structure. This structure allows for precise control over all stages of the process, from product harvesting to final delivery to the customer.
            </p>
          </div>

        </div>
      </div>

      {/* 4. EFFICIENT LOGISTICS PROCESSES (5 Grid + Notice) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        
        {/* Section Heading & Dots */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Efficient Logistics Processes; From Farm to Customer's Table
          </h2>
          
          {/* Custom central line and green/light-green boxes dots indicator to match the screenshot precisely */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <span className="w-5 h-2 rounded bg-emerald-500 transition-all" />
            <span className="w-2.5 h-2 rounded bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-350" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-medium">
            By providing comprehensive and innovative logistics services, GilaFruit has established itself as one of the leading exporters of Iranian fruits and vegetables in the world. With its focus on cutting-edge technologies, adherence to global standards, and customer satisfaction, the company envisions a bright future for itself.
          </p>
        </div>

        {/* 3x2 Grid boxes (Custom mapped representing exactly the 5 boxes on the screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center" id="logistics-grid-block">
          
          {/* Box 1: Intelligent Warehousing */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <LayoutGrid className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Intelligent Warehousing
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Warehouses equipped with temperature and humidity control systems provide ideal conditions for product storage.
            </p>
          </div>

          {/* Box 2: Standard Packaging */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Package className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Standard Packaging
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Products are packaged in standard packaging using high-quality materials to protect them during transportation.
            </p>
          </div>

          {/* Box 3: Harvesting and Sorting */}
          <div className="bg-white rounded-2xl p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Sprout className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Harvesting and Sorting
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Products are harvested with care at the optimal time and, after being sorted based on quality and size, are prepared for packaging.
            </p>
          </div>

          {/* Box 4: Customs Matters */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center md:col-start-1 md:col-span-1.5">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Activity className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Customs Matters
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              With a complete understanding of customs laws and regulations, GilaFruit expedites the customs clearance process.
            </p>
          </div>

          {/* Box 5: Optimized Transportation */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4 text-center md:col-start-2 md:col-span-2">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Zap className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Optimized Transportation
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              By utilizing a fleet of transportation vehicles equipped with GPS tracking and temperature control systems, products are delivered to their destination in the shortest possible time while maintaining quality.
            </p>
          </div>

        </div>

        {/* 4.5 Challenges and Opportunities text callout box at bottom of grid */}
        <div className="max-w-7xl mx-auto text-left mt-8 bg-white border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.01)] rounded-2xl p-6 sm:p-8 space-y-2">
          <h4 className="font-display font-black text-slate-900 text-sm sm:text-base">
            Challenges and Opportunities
          </h4>
          <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
            Despite its remarkable successes, GilaFruit continues to face challenges such as exchange rate fluctuations, sanctions, and changes in customs regulations. However, by adopting appropriate strategies and leveraging the experience and knowledge of its employees, the company has been able to overcome these challenges and create new opportunities.
          </p>
        </div>

      </div>

      {/* 5. DYNAMIC INTERACTIVE CAROUSEL ROW MATCHING IMAGE SCHEME */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Processing Stack (Kiwis in Crates) */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group select-none flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
              alt="Customs sorted line kwiwis" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Dark green theme vignette gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
            
            {/* Navigation bullet dots mimicking screenshot sliders */}
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

            {/* Centered card prompt */}
            <div className="relative z-20 p-6 flex flex-col items-center space-y-3.5">
              <h3 className="text-white font-display text-lg sm:text-xl font-extrabold tracking-tight">
                Customs
              </h3>
              <button
                onClick={() => onNavigate?.('#/services/customs')}
                className="px-5 py-2 bg-black/60 border border-white/20 hover:bg-[#1a8a42] hover:border-transparent text-white font-black text-xs tracking-wider uppercase rounded-full shadow transition-all cursor-pointer"
              >
                More Information
              </button>
            </div>
          </div>

          {/* Card 2: Renault Cargo Truck front closeup */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group select-none">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" 
              alt="Heavy Duty Overland Transport Reefer Trailer Truck" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          {/* Card 3: Warehousing loader stack forklift */}
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
