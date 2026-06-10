import React, { useState } from 'react';
import { 
  Layers, ShieldCheck, Box, Check, Award, Link, Maximize2, 
  Sparkles, Apple, Sprout, ArrowRight, Image as ImageIcon
} from 'lucide-react';

interface PackingScreenProps {
  onNavigate?: (hash: string) => void;
}

interface BrandedCardProps {
  title: string;
  image: string;
  onZoom: () => void;
}

function BrandedSampleCard({ title, image, onZoom }: BrandedCardProps) {
  return (
    <div 
      onClick={onZoom} 
      className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer select-none"
    >
      <div className="relative w-full aspect-[1.6] overflow-hidden bg-emerald-950">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Soft hover overlay with interactive zoom action indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-emerald-900/90 text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg text-[10px] font-bold uppercase tracking-wider">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            Zoom Packing Design
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PackingScreen({ onNavigate }: PackingScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 12 mini-images for the grid on the left
  const miniGridImages = [
    "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=400", // kiwi sorting
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400", // cabbage crate
    "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400", // garlic crate
    "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=400", // mandarin boxes
    "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=400", // grapes sorting
    "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400", // oragnge boxes
    "https://images.unsplash.com/photo-1563565312-9ab2e6a52651?auto=format&fit=crop&q=80&w=400", // bell pepper box
    "https://images.unsplash.com/photo-1515471204580-c11cffe9f0f9?auto=format&fit=crop&q=80&w=400", // lettuce box
    "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=400", // garlic drying
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=400", // kiwi pallet
    "https://images.unsplash.com/photo-1622484211148-716598e0911a?auto=format&fit=crop&q=80&w=400", // apple crates
    "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&q=80&w=400"  // pomegranate crates
  ];

  // Fruit packaging samples (Directly displaying complete custom banner graphics)
  const fruitSamples = [
    {
      title: "4 KG PLASTIC BASKET PACKING OF KIWI",
      image: "/src/assets/images/gilafruit_kiwi_basket_banner_1781014515822.png"
    },
    {
      title: "WHITE 10 KG PACKAGING OF KIWI",
      image: "/src/assets/images/gilafruit_kiwi_white_10kg_banner_1781014580644.png"
    }
  ];

  // Vegetable packaging samples (Directly displaying complete custom banner graphics)
  const vegetableSamples = [
    {
      title: "EXPORT OF VARIOUS TYPES OF LETTUCE FROM IRAN",
      image: "/src/assets/images/gilafruit_lettuce_carton_banner_1781014565410.png"
    },
    {
      title: "CARTON PACKAGING OF FRESH IRANIAN PARSLEY",
      image: "/src/assets/images/gilafruit_parsley_carton_banner_1781014550921.png"
    },
    {
      title: "CARTON PACKAGING OF FRESH IRANIAN DILL",
      image: "/src/assets/images/gilafruit_dill_carton_banner_1781014534023.png"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="view-packing-root">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#01261d] text-white overflow-hidden pt-24 pb-20 sm:pt-[112px] sm:pb-28 md:pt-[148px] text-center" id="packing-main-hero">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=1200" 
            alt="Protecting Your Produce from Farm to Table" 
            className="w-full h-full object-cover opacity-20 pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021f18]/95 via-[#011a14]/98 to-[#011811]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300 tracking-wider mb-2">
            <a href="#/" className="hover:text-amber-400">Home</a>
            <span>/</span>
            <span className="text-white uppercase font-black">View Packing Services</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            Protecting Your Produce from Farm to Table
          </h1>
          <p className="max-w-3xl text-emerald-300 text-xs sm:text-sm font-semibold leading-relaxed pt-1">
            GilaFruit Packing delivers the taste of freshness to global markets. Our Fruit Packaging and Vegetable Packaging ensure ultimate freshness from harvest to table. Choose GilaFruit Packing for quality.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-35" id="packing-benefits">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">Creative Design</h3>
            <p className="text-xs sm:text-xs text-slate-650 leading-relaxed font-sans">
              Transforming packaging into a powerful marketing tool by combining innovation and aesthetics.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">Export Standards</h3>
            <p className="text-xs sm:text-xs text-slate-650 leading-relaxed font-sans">
              Adhering to stringent domestic and international health and quality regulations to ensure the safety of your exported products.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">Professional Packaging</h3>
            <p className="text-xs sm:text-xs text-slate-650 leading-relaxed font-sans">
              Preserving and enhancing the freshness and longevity of your produce through meticulous and intelligent design.
            </p>
          </div>

        </div>
      </div>

      {/* 3. SPLIT MID SECTION: LEFT IMAGES + PILLS, RIGHT ACCORDION PARAGRAPHS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="split-about-packing">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: 12-image grid + 4 pills */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-black text-lg text-[#014134] tracking-tight uppercase flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-amber-500" />
              Packing Line Showcase
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              {miniGridImages.map((img, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md border border-slate-200"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Showcase ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
              ))}
            </div>

            {/* 4 action pill buttons below the grid */}
            <div className="flex flex-wrap gap-2.5 pt-2 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate?.('#/packing?tab=fruits')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-850 hover:bg-emerald-900 border border-emerald-800 hover:border-amber-400 text-white font-bold rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer"
              >
                <Apple className="w-3.5 h-3.5 text-amber-400" />
                Fruits
              </button>
              <button 
                onClick={() => onNavigate?.('#/packing?tab=vegetables')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-850 hover:bg-emerald-900 border border-emerald-800 hover:border-amber-400 text-white font-bold rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer"
              >
                <Sprout className="w-3.5 h-3.5 text-emerald-450" />
                Vegetables
              </button>
              <button 
                onClick={() => onNavigate?.('#/product-photo-gallery')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#014134] hover:bg-emerald-950 border border-emerald-800 hover:border-amber-400 text-white font-bold rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer"
              >
                <ImageIcon className="w-3.5 h-3.5 text-emerald-300" />
                Sample
              </button>
              <button 
                onClick={() => onNavigate?.('#/packing')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                Packing
              </button>
            </div>
          </div>

          {/* Right Side: Elegant philosophy paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-xs sm:text-sm text-justify font-sans leading-relaxed">
            <p className="bg-emerald-50/50 p-5 rounded-2xl border-l-4 border-amber-500 shadow-xs">
              At <strong className="text-emerald-900">GilaFruit</strong>, we elevate packing beyond a mere container; it's a meticulously engineered solution that safeguards and enhances the intrinsic value of your fruits and vegetables. Our deep understanding of the delicate nature of fresh produce drives us to create packaging that not only preserves quality and extends shelf life but also ignites desire.
            </p>
            
            <p>
              Exporting produce demands unparalleled precision. We meticulously adhere to the stringent safety and quality standards mandated by both the country of origin and the demanding international markets. Our commitment to excellence ensures that your products not only meet but exceed expectations.
            </p>

            <p>
              Beyond functionality, we believe packaging is a powerful marketing tool. Our design team infuses creativity and innovation into every package, transforming it into a captivating showcase that irresistibly draws consumers in. We harmonize form and function to create packaging that not only protects your product but also positions it as a premium offering.
            </p>

            <p className="border-t border-slate-200/60 pt-4 text-emerald-950 font-medium">
              With a steadfast dedication to quality, expertise, and innovation, GilaFruit is your partner in delivering the freshness and vibrancy of your produce to a global audience.
            </p>
          </div>

        </div>
      </div>

      {/* 4. STANDARDS AND BULLET-LISTS ROW */}
      <div className="bg-[#f0f9f6] border-y border-emerald-100 py-16" id="hygiene-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left box: Ensuring Top Standards... */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-black text-emerald-950 text-md sm:text-lg mb-6 tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping" />
                  Ensuring Top Standards for Product Health and Quality:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Utilize approved and certified packaging materials.",
                    "Implement stringent controls to eliminate microbial and chemical contaminants.",
                    "Maintain optimal temperature and humidity conditions throughout transportation.",
                    "Continuously monitor the health and quality of fruits and vegetables from harvest to delivery."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-xs text-slate-700 font-sans align-top">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right box: Delivering Freshness... */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-black text-emerald-950 text-md sm:text-lg mb-6 tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full" />
                  Delivering Freshness and Vitality in Every Box:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Fruits and vegetables free from physical damage, pests, and decay.",
                    "Harvesting at the ideal time to preserve freshness and quality during transport and storage.",
                    "Packaging tailored to the product type and customer requirements.",
                    "Strict adherence to weight and size standards aligned with target market regulations."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-xs text-slate-700 font-sans align-top">
                      <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex-shrink-0 flex items-center justify-center font-bold">✓</div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. DUAL PROMOTION GRID (Fruit vs Vegetable Packaging) */}
      {/* 5. DUAL PROMOTION GRID (Fruit vs Vegetable Packaging) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="promotion-boxes">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Fruit Packaging Column Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group">
            
            {/* Centered Top Image above Header */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-48 sm:w-72 sm:h-52 flex items-center justify-center overflow-hidden mb-6">
                <img 
                  src="/src/assets/images/gilafruit_kiwi_box_1781013956397.png" 
                  alt="GilaFruit Premium Kiwi Carton Packaging" 
                  className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest block mb-1">
                Protecting the Goodness of Nature's Finest
              </span>
              <h3 className="font-display font-black text-emerald-950 text-xl sm:text-2xl tracking-tight mb-3">
                Fruit Packaging
              </h3>
              <p className="text-xs text-slate-650 leading-relaxed font-sans max-w-lg mb-6">
                Our team of experts meticulously analyzes the unique needs of each fruit variety, utilizing cutting-edge technologies and high-performance materials to create packaging that optimizes freshness:
              </p>
              
              {/* Thin stylish divider */}
              <div className="w-full h-[1px] bg-slate-100 mb-6" />
            </div>

            {/* List of custom fruit cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fruitSamples.map((sample, idx) => (
                <BrandedSampleCard 
                  key={idx}
                  title={sample.title}
                  image={sample.image}
                  onZoom={() => setSelectedImage(sample.image)}
                />
              ))}
            </div>

            {/* Learn more link */}
            <div className="mt-8 pt-2">
              <button 
                onClick={() => onNavigate?.('#/packing?tab=fruits')}
                className="w-full py-2.5 bg-emerald-850 hover:bg-emerald-900 border border-emerald-800 text-white font-bold rounded-xl text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Learn more with fruits
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Vegetable Packaging Column Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group">
            
            {/* Centered Top Image above Header */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-48 sm:w-72 sm:h-52 flex items-center justify-center overflow-hidden mb-6">
                <img 
                  src="/src/assets/images/gilafruit_lettuce_box_1781013975529.png" 
                  alt="GilaFruit Premium Lettuce Carton Packaging" 
                  className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest block mb-1">
                From Farm to Table, with Care in Every Box
              </span>
              <h3 className="font-display font-black text-emerald-950 text-xl sm:text-2xl tracking-tight mb-3">
                Vegetable Packaging
              </h3>
              <p className="text-xs text-slate-650 leading-relaxed font-sans max-w-lg mb-6">
                At GilaFruit, we believe that fresh, wholesome vegetables are nature's gift, and it's our responsibility to preserve their goodness from the moment they're harvested until they reach your table:
              </p>
              
              {/* Thin stylish divider */}
              <div className="w-full h-[1px] bg-slate-100 mb-6" />
            </div>

            {/* List of custom vegetable cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vegetableSamples.map((sample, idx) => (
                <BrandedSampleCard 
                  key={idx}
                  title={sample.title}
                  image={sample.image}
                  onZoom={() => setSelectedImage(sample.image)}
                />
              ))}
            </div>

            {/* Learn more link */}
            <div className="mt-8 pt-2">
              <button 
                onClick={() => onNavigate?.('#/packing?tab=vegetables')}
                className="w-full py-2.5 bg-emerald-850 hover:bg-emerald-900 border border-emerald-800 text-white font-bold rounded-xl text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Learn more with vegetables
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* LIGHTBOX FOR IMAGES */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Expanded visual asset" 
            className="max-h-[85vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl border-4 border-slate-800"
          />
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-md font-bold transition-all border border-white/10 focus:outline-none"
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}
