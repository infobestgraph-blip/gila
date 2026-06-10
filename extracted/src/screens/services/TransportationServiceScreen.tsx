import { useState } from 'react';
import { 
  Eye, ShieldCheck, Search, FileDown, AppWindow, 
  MapPin, HelpCircle, Phone, Lock, Sparkles, Navigation,
  FileText, ClipboardCheck, Scale, Award, Layers, HelpCircle as HelpIcon,
  Route, Compass, Zap
} from 'lucide-react';

interface TransportationServiceScreenProps {
  onNavigate?: (targetHash: string) => void;
}

// Custom High-fidelity Hot Air Balloon Icon vector to match the original screenshot
const BalloonIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Balloon envelope */}
    <path d="M50 15 C28 15, 24 45, 41 68 L59 68 C76 45, 72 15, 50 15 Z" />
    {/* Inner longitudinal lines */}
    <path d="M50 15 C41 15, 38 45, 44 68 M50 15 C59 15, 62 45, 56 68" />
    {/* Basket hanging wires */}
    <line x1="43" y1="74" x2="41" y2="68" />
    <line x1="57" y1="74" x2="59" y2="68" />
    <line x1="50" y1="74" x2="50" y2="68" />
    {/* Basket */}
    <rect x="44" y="74" width="12" height="9" rx="1" fill="#e8f5e9" />
  </svg>
);

// Custom High-fidelity Cargo Ship Icon vector
const ShipIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Cargo containers on deck */}
    <rect x="25" y="44" width="10" height="10" fill="#e8f5e9" />
    <rect x="35" y="44" width="10" height="10" fill="#e8f5e9" />
    <rect x="45" y="44" width="10" height="10" fill="#e8f5e9" />
    <rect x="30" y="34" width="10" height="10" />
    <rect x="40" y="34" width="10" height="10" />
    {/* Captain quarters superstructure */}
    <path d="M60 54 L60 36 L72 36 L72 54" />
    <line x1="64" y1="36" x2="64" y2="30" />
    {/* Ship Hull */}
    <path d="M15 54 L85 54 L78 70 L22 70 Z" strokeLinejoin="round" />
    {/* Soft water ripples */}
    <path d="M10 76 Q25 73 40 76 Q55 79 70 76 Q85 73 90 76" />
  </svg>
);

// Custom High-fidelity Reefer Trailer Truck Icon vector
const CargoTruckIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#2e7d32]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Trailer container body */}
    <rect x="15" y="28" width="50" height="30" rx="2" />
    {/* Cabin cab */}
    <path d="M65 38 L78 38 C81 38, 85 41, 85 45 L85 58 M65 58 L85 58" />
    {/* Windshield */}
    <path d="M68 40 L77 40 L75 47 L68 47 Z" />
    {/* Triple Wheel structure */}
    <circle cx="26" cy="62" r="6" />
    <circle cx="41" cy="62" r="6" />
    <circle cx="76" cy="62" r="6" />
    {/* Road floor anchor line */}
    <line x1="12" y1="58" x2="88" y2="58" />
  </svg>
);

export default function TransportationServiceScreen({ onNavigate }: TransportationServiceScreenProps) {
  // Slider dot active item indicator state as requested by the original look
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-[#fcfdfc] min-h-screen text-slate-800 pb-20 animate-fade-in" id="transportation-page-view">
      
      {/* 1. HERO HEADER SECTION */}
      <div 
        className="relative pt-[88px] pb-24 sm:pt-[104px] md:pt-[140px] md:pb-36 bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(1, 15, 12, 0.75), rgba(0, 0, 0, 0.78)), url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1600')` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto">
            GilaFruit: Speed and Precision in Agricultural Transportation
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 leading-relaxed max-w-4xl mx-auto font-semibold">
            GilaFruit utilizes an extensive transportation network and advanced equipment to swiftly deliver your agricultural products to their destination
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
              Air Freight
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Rapid transportation of high-value and perishable products using airlines.
            </p>
          </div>

          {/* Card 2: Sea Freight */}
          <div className="flex flex-col items-center space-y-4 md:border-r border-slate-100 md:px-6 last:border-r-0">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <ShipIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              Sea Freight
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Shipping products to various countries via reputable shipping lines, adhering to international standards.
            </p>
          </div>

          {/* Card 3: Land Transportation */}
          <div className="flex flex-col items-center space-y-4 md:pl-6">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50/50 flex items-center justify-center p-2">
              <CargoTruckIcon />
            </div>
            <h3 className="font-display text-md sm:text-lg font-black text-[#1a8a42]">
              Land Transportation
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Transporting agricultural products from farms and cold storage facilities to ports and airports using a fleet of equipped vehicles
            </p>
          </div>

        </div>
      </div>

      {/* 3. TWO COLS DESCRIPTION BLOCK & BENEFITS CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Benefits of using GilaFruit highlights */}
          <div className="border-l-4 border-l-[#1a8a42] bg-[#f8faf7] rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
                Benefits of Using <span className="text-[#1a8a42]">GilaFruit</span> Services
              </h2>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-medium">
                Exporting high-quality Iranian <span className="text-[#1a8a42] font-semibold">fruits, vegetables</span>, and other agricultural products can be challenging due to the complexities of the export process, including customs procedures. With years of experience and specialized knowledge, GilaFruit seamlessly manages all stages of your <span className="text-[#1a8a42] font-semibold">product export</span> from the farm to the final destination. By choosing GilaFruit, you can confidently introduce your products to global markets and focus on growing your business.
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
              With a rich history spanning years, <span className="text-emerald-700 font-bold">GilaFruit</span> has cultivated an in-depth understanding of the agricultural industry. Our specialized knowledge allows us to provide a comprehensive suite of transportation services tailored to the unique needs of fresh Iranian <span className="text-emerald-600 font-semibold">products</span>. From the heart of the Iranian fields to bustling global markets, we meticulously manage every aspect of the supply chain.
            </p>
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              Our services encompass land, sea, and air freight, ensuring the efficient and reliable transportation of your products. We navigate the complexities of customs clearance with precision, streamlining the process and minimizing delays.
            </p>
            <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-sans font-medium">
              Our extensive transportations network extends its reach to a vast array of global markets. By selecting GilaFruit as your partner, you gain access to a reliable and experienced team dedicated to introducing your premium agricultural products to a worldwide audience.
            </p>
          </div>

        </div>
      </div>

      {/* 4. SERVICES OFFERED BY GILAFRUIT SECTION (9 Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        
        {/* Section Heading & Dots */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Services Offered by GilaFruit
          </h2>
          
          {/* Custom central line and green/light-green boxes dots indicator to match the screenshot precisely */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <span className="w-5 h-2 rounded bg-emerald-500 transition-all" />
            <span className="w-2.5 h-2 rounded bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-350" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-medium">
            GilaFruit Offers a wide Range of Services Related to the Transportation and Export of Agricultural Products
          </p>
        </div>

        {/* 3x3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center" id="services-grid-block">
          
          {/* Box 1: Cargo Insurance */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Cargo Insurance
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Comprehensive insurance coverage for products throughout the transportation process to compensate for potential losses.
            </p>
          </div>

          {/* Box 2: Preparation of Customs Documents */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <FileText className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Preparation of Customs Documents
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Accurate and complete preparation of all customs documents required for product exports
            </p>
          </div>

          {/* Box 3: Customs Clearance */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Scale className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Customs Clearance
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Handling all customs clearance procedures, including preparing necessary documents, paying duties and taxes, and obtaining health permits
            </p>
          </div>

          {/* Box 4: Quality Preservation */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Sparkles className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Quality Preservation
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Using advanced equipment and adhering to sanitary standards to maintain product quality
            </p>
          </div>

          {/* Box 5: Extensive Network */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Layers className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Extensive Network
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Access to an extensive network of shipping lines, airlines, and land transportation companies
            </p>
          </div>

          {/* Box 6: Expertise and Experience */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Award className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Expertise and Experience
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Years of experience in agricultural product transportation and mastery of international laws and regulations
            </p>
          </div>

          {/* Box 7: Expert Advice */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <HelpIcon className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Expert Advice
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Offering expert advice on exporting agricultural products and selecting the best transportation methods
            </p>
          </div>

          {/* Box 8: Integrated Services */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Route className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Integrated Services
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Providing all necessary services for product exports from a single source
            </p>
          </div>

          {/* Box 9: Speed and Accuracy */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all flex flex-col items-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50/60 rounded-full flex items-center justify-center text-emerald-600">
              <Zap className="w-7 h-7 text-[#1a8a42]" />
            </div>
            <h4 className="font-display font-black text-slate-900 text-[15px] sm:text-base">
              Speed and Accuracy
            </h4>
            <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Completing all transportation stages with speed and precision for timely product delivery
            </p>
          </div>

        </div>
      </div>

      {/* 5. DYNAMIC INTERACTIVE CAROUSEL ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Processing Stack (Kiwis in Crates) with centered overlay buttons */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group select-none flex flex-col justify-end">
            <img 
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
              alt="Processing sorted line" 
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
