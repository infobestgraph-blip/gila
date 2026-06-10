import React, { useState } from 'react';
import { 
  Layers, ShieldCheck, Box, Sparkles, Apple, ArrowRight,
  Maximize2, Instagram, Youtube, Twitter, Linkedin, Facebook, Send, Award
} from 'lucide-react';

interface FruitPackingScreenProps {
  onNavigate?: (hash: string) => void;
}

export default function FruitPackingScreen({ onNavigate }: FruitPackingScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Social Links list
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/gilafruit", color: "hover:bg-pink-600 hover:text-white" },
    { icon: Youtube, href: "https://youtube.com/gilafruit", color: "hover:bg-red-600 hover:text-white" },
    { icon: Twitter, href: "https://twitter.com/gilafruit", color: "hover:bg-slate-950 hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com/company/gilafruit", color: "hover:bg-blue-700 hover:text-white" },
    { icon: Facebook, href: "https://facebook.com/gilafruit", color: "hover:bg-sky-600 hover:text-white" },
    { icon: Send, href: "https://t.me/gilafruit", color: "hover:bg-sky-500 hover:text-white" }
  ];

  const fruitPanoramicImage = "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=1200";

  const fruitProductBoxes = [
    {
      title: "Single Row Kiwis",
      subtitle: "Premium Red Crate",
      image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=400",
      desc: "Optimized single-row cell grid for Hayward Kiwifruits, preventing rubbing or weight pressure on skin."
    },
    {
      title: "Luxury Grape Packaging",
      subtitle: "Wide White Crate",
      image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=400",
      desc: "Specially padded, hyper-aerated compartments loaded horizontally to preserve Caspian grapes freshness."
    },
    {
      title: "Export Quality Mandarins",
      subtitle: "Exclusive Double-Row Crate",
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400",
      desc: "Heavy-duty double-row plastic lattice for direct citrus dispatch, providing structural crush defense."
    }
  ];

  const fruitBrandedFrames = [
    {
      id: "frame-kiwi-4kg",
      title: "4 KG PLASTIC BASKET PACKING",
      badge: "Kiwi",
      tag: "Grade A",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600",
      borderColor: "border-red-600 bg-red-600/5",
      badgeColor: "bg-red-600",
      textColor: "text-red-700"
    },
    {
      id: "frame-lettuce-export",
      title: "EXPORT OF VARIOUS TYPES OF LETTUCE FROM IRAN",
      badge: "Kiwi",
      tag: "Verified",
      image: "https://images.unsplash.com/photo-1622484211148-716598e0911a?auto=format&fit=crop&q=80&w=600",
      borderColor: "border-emerald-700 bg-emerald-705/5",
      badgeColor: "bg-emerald-700",
      textColor: "text-emerald-800"
    },
    {
      id: "frame-white-10kg",
      title: "WHITE 10 KG PACKAGING",
      badge: "Kiwi",
      tag: "Pure Select",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
      borderColor: "border-teal-600 bg-teal-605/5",
      badgeColor: "bg-teal-600",
      textColor: "text-teal-700"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="fruit-packing-root">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#01261d] text-white overflow-hidden pt-24 pb-20 sm:pt-[112px] sm:pb-28 md:pt-[148px] text-center" id="fruit-packing-hero">
        <div className="absolute inset-0 z-0">
          <img 
            src={fruitPanoramicImage} 
            alt="GilaFruit sorting and packaging lines" 
            className="w-full h-full object-cover opacity-20 pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021f18]/95 via-[#011a14]/98 to-[#011811]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center space-y-4">
          
          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300 tracking-wider mb-2">
            <a href="#/" className="hover:text-amber-400">Home</a>
            <span>/</span>
            <a href="#/packing" className="hover:text-amber-400">Packing</a>
            <span>/</span>
            <span className="text-white uppercase font-black">Fruit Packaging</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            Gilafruit: Present Your Fruits to the World with Freshness and Quality
          </h1>
          <p className="max-w-3xl text-emerald-300 text-xs sm:text-sm font-semibold leading-relaxed pt-1">
            Ensuring Freshness is our priority with Innovative Fruit Packaging solutions. Our advanced containment techniques guarantee the freshness of our products during fruit export. We optimize containment for efficient export, maintaining the quality and freshness essential for successful fruit export.
          </p>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-2" />
        </div>

        {/* Paper Rip Zigzag Transition SVG */}
        <div className="absolute bottom-0 left-0 right-0 z-25 text-slate-50 w-full pointer-events-none overflow-hidden select-none">
          <svg viewBox="0 0 1440 40" fill="currentColor" preserveAspectRatio="none" className="w-full h-10 transform scale-y-110">
            <path d="M0,40 L1440,40 L1440,20 L1400,32 L1360,18 L1320,30 L1280,14 L1240,28 L1200,12 L1160,26 L1120,10 L1080,24 L1040,15 L1000,28 L960,12 L920,25 L880,10 L840,24 L800,14 L760,28 L720,12 L680,26 L640,14 L600,28 L560,12 L520,26 L480,10 L440,24 L400,15 L360,28 L320,12 L280,25 L240,10 L200,24 L160,14 L120,28 L80,12 L40,26 L0,15 Z" />
          </svg>
        </div>
      </div>

      {/* 2. THREE BENEFIT BENTO BLOCKS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-35" id="benefit-cards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">Hassle-Free Export</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Easy and hassle-free export. From farm to customer, we manage every step for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">Authentic Taste of Iran</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Satisfying every taste, anywhere in the world. Our diverse product range and customized packaging meet the needs of any market.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">Quality and Freshness</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              With our specialized protective covering, deliver your Fruit's to your customers with the same freshness as the day they were harvested.
            </p>
          </div>

        </div>
      </div>

      {/* 3. PARAGRAPH DETAILED TEXT & PANORAMIC IMAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="intro-text-section">
        <div className="space-y-12">
          
          <div className="max-w-5xl mx-auto text-slate-700 text-xs sm:text-sm leading-relaxed text-justify space-y-4">
            <p>
              With a distinguished history in the fruit export industry, 
              <strong> Gilafruit</strong> offers a comprehensive range of packaging solutions to maintain the freshness 
              and quality of fruits during transportation and captivate international customers. 
              Utilizing our expertise and experience, we design and manufacture containers using high-quality materials and 
              specifically tailored to the needs of each type of fruit.
            </p>
            <p>
              Our understanding of the crucial role of proper presentation in fruit export 
              drives our commitment to providing solutions that help you preserve the freshness, vibrancy, and flavor of your 
              fruits throughout their journey to global markets. By choosing Gilafruit, you can reap numerous benefits, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-center text-xs font-bold text-emerald-950 font-mono">
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">✓ Reduced Waste</span>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">✓ Increased Profitability</span>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">✓ Attracting More Customers</span>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">✓ Reliable Brand Presence</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative max-h-[420px]" id="mosaic-wide-banner">
            <img 
              src={fruitPanoramicImage} 
              alt="Panoramic packing house workspace" 
              className="w-full h-full object-cover aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-emerald-950/10 hover:bg-transparent transition-colors duration-300" />
          </div>

        </div>
      </div>

      {/* 4. SUSTAINABLE PACKAGING SECTION */}
      <div className="bg-slate-100 border-y border-slate-200/60 py-16" id="sustainable-row">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column Green Banner Card */}
            <div className="lg:col-span-4 bg-[#014134] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-800/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center text-emerald-950">
                  <Award className="w-6 h-6 text-[#014134]" />
                </div>
                
                <h3 className="font-display font-black text-2xl sm:text-3xl leading-tight tracking-tight">
                  Sustainable Packaging for Iran's Sustainable Fruits
                </h3>
                <div className="w-16 h-1 bg-amber-400 rounded-full" />
              </div>

              <div className="space-y-4 pt-12 relative z-10">
                <div className="flex gap-2.5">
                  {socialLinks.map((soc, i) => {
                    const Icon = soc.icon;
                    return (
                      <a 
                        key={i} 
                        href={soc.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`w-9 h-9 rounded-full bg-emerald-900/60 text-emerald-100 flex items-center justify-center transition-colors border border-emerald-800/40 hover:bg-emerald-800 hover:text-white`}
                        title="Follow GilaFruit"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
                <span className="text-[10px] font-mono text-emerald-350 tracking-wider block font-bold">
                  Follow us on social networks
                </span>
              </div>
            </div>

            {/* Right Column: Three vertical boxes showing gorgeous fruit crates */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {fruitProductBoxes.map((box, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-900">
                    <img 
                      src={box.image} 
                      alt={box.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-emerald-950/20" />
                  </div>

                  <div className="p-5 bg-white border-t border-slate-100 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-black text-[#014134] text-sm uppercase tracking-tight">{box.title}</h4>
                      <p className="text-[11px] font-mono text-amber-600 font-bold uppercase tracking-wider mt-0.5">{box.subtitle}</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-sans mt-2">{box.desc}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedImage(box.image)}
                      className="mt-4 py-1.5 w-full bg-slate-50 border border-slate-200 hover:border-emerald-800 rounded-xl text-[10px] uppercase tracking-wider font-bold text-slate-700 hover:text-[#014134] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" />
                      Inspect Crate Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 5. HEADING & CORE VALUE BLOCK WITH GLOBAL STANDARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center" id="global-standards-title">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#014134] font-bold">
            "Utilization of high-quality and hygienic raw materials with the highest quality"
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-emerald-950 uppercase tracking-tight">
            Gilafruit: Global Standards, Unrivaled Quality in Fruit Packaging
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>
      </div>

      {/* 6. THREE BRAND-FRAME EXPORT CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="bottom-branded-boxes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fruitBrandedFrames.map((frame) => (
            <div 
              key={frame.id}
              className={`p-1 rounded-3xl border-4 ${frame.borderColor} transition-all duration-300 hover:scale-103 shadow-lg flex flex-col justify-between`}
            >
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
                
                <div className="px-4 py-2 border-b border-dashed border-slate-200/80 flex justify-between items-center bg-slate-50">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#014134] flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#eab308]" />
                    GilaFruit Brand
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[8px] uppercase font-bold text-white ${frame.badgeColor}`}>
                    {frame.tag}
                  </span>
                </div>

                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img 
                    src={frame.image} 
                    alt={frame.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                    <span className="text-white/20 uppercase font-sans font-black tracking-widest text-xs transform -rotate-12 border border-white/10 px-2 py-0.5 rounded bg-black/10">
                      WWW.GILAFRUIT.COM
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/40 text-white font-mono text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider backdrop-blur-xs">
                    Caspian Sourcing
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                  <h4 className="font-mono text-xs font-black text-slate-800 tracking-tight leading-snug uppercase min-h-[40px] flex items-center justify-center">
                    {frame.title}
                  </h4>
                  <div className="mt-3 bg-[#014134] text-white rounded-lg p-2 flex justify-between items-center text-[8px] font-mono select-none">
                    <span className="text-emerald-300 font-bold uppercase tracking-wider">gilafruit co.</span>
                    <span className="text-[#eab308] font-bold">+98 990 097 8002</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIALIZATION & STATS SECTION */}
      <div className="bg-white border-t border-slate-200/60 py-16 overflow-hidden md:py-20" id="specialize-stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text and stats */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-sans text-slate-400 font-medium tracking-wide uppercase">
                  Over Two Decades of Experience by Your Side
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  We specialize in <span className="text-emerald-600">Production</span>, <span className="text-emerald-600">Gardening</span>, <span className="text-emerald-600">Packaging</span>, <span className="text-emerald-600">Export</span>
                </h2>
                <div className="w-16 h-1.5 bg-emerald-600 rounded-full mt-3" />
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4">
                
                {/* Column 1 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center">
                    18<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    Fruit Variety
                  </span>
                </div>

                {/* Column 2 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center">
                    100<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    Available Orchards
                  </span>
                </div>

                {/* Column 3 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center">
                    27<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    Packaging Variety
                  </span>
                </div>

                {/* Column 4 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center">
                    40<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    Premium Growers
                  </span>
                </div>

              </div>

              {/* Functional CTA actions preserved side-by-side */}
              <div className="pt-4 flex flex-wrap gap-4 w-full">
                <button 
                  onClick={() => onNavigate?.('#/contact')}
                  className="px-6 py-3 bg-[#eab308] hover:bg-amber-600 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Order custom branding specifications
                </button>
                <button 
                  onClick={() => onNavigate?.('#/catalog')}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  Download catalogs PDF
                </button>
              </div>

            </div>

            {/* Right side flat vector illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="max-w-[460px] w-full transform hover:scale-[1.02] transition-transform duration-500 rounded-2xl select-none overflow-hidden hover:shadow-xl">
                <img 
                  src="/src/assets/images/gilafruit_packing_vector_illustration_1781014820562.png" 
                  alt="GilaFruit specialized packing workflow" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-h-[85vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl border-4 border-emerald-800"
          />
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-lg font-bold transition-all focus:outline-none border border-white/10"
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}
