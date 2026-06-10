import { useState, useEffect } from 'react';
import { 
  TrendingUp, Leaf, Award, Compass, Truck, ShieldCheck, 
  ChevronRight, Sparkles, MessageSquare, Flame, CheckCircle2,
  Calendar, Layers, FileText, ArrowRight, Phone, Send, Info, Globe, HelpCircle, CheckSquare, Shield, ChevronLeft, ChevronRight as ChevronRightIcon,
  Check, Droplet, Scale, Tag, Activity, ExternalLink
} from 'lucide-react';
import { Product, BlogArticle, Certificate, Testimonial } from '../types';
import ExportWorldMap from '../components/ExportWorldMap';
import CertificateCarousel from '../components/CertificateCarousel';


interface HomeScreenProps {
  products: Product[];
  blogs: BlogArticle[];
  certificates: Certificate[];
  testimonials: Testimonial[];
  pagesConfig: any;
  onNavigate: (hash: string) => void;
}

export default function HomeScreen({
  products,
  blogs,
  certificates,
  testimonials,
  pagesConfig,
  onNavigate
}: HomeScreenProps) {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeFeatureSlide, setActiveFeatureSlide] = useState(0);

  // Autoplay timer for Hero section slides (7 seconds rotation)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Autoplay timer for Features section slider (5 seconds rotation)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeatureSlide((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // GilaFruit visual slider images matching 'Premium Kiwi Export' theme
  const heroSlides = [
    {
      title: "Export of Premium Iranian Kiwis",
      highlight: "Iranian Kiwis",
      desc: "Supplying international markets with top-quality Iranian kiwi, along with premium wooden/carton branding and bulletproof export cold logistics.",
      image: "https://images.unsplash.com/photo-1585059895524-72359e061381?auto=format&fit=crop&q=80&w=800",
      badge: "Astara Premium Facility",
      specs: [
        "Brix Sugar: 6.2% - 6.5%+ Min",
        "Packaging: Premium Carton/Wood",
        "Transit: Refrigerated to Russia"
      ]
    },
    {
      title: "Direct Wholesale Distribution to Russia & EAEU",
      highlight: "Russia & EAEU",
      desc: "Providing temperature-regulated freight and seamless customs clearance via Astara, Baku, and Caspian maritime corridors.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      badge: "Refrigerated Sizing Lines",
      specs: [
        "Settlement: Direct RUB / IRR",
        "Min Order: 24 Tons (1 Container)",
        "Documents: 100% Phyto Cleared"
      ]
    },
    {
      title: "Controlled Atmosphere Cold Warehousing",
      highlight: "Cold Warehousing",
      desc: "Storing 12,000+ tons of pristine fresh produce at optimized humidity level and ethylene-scrubbed modern climate chambers.",
      image: "https://images.unsplash.com/photo-1610348725531-843dff14f9df?auto=format&fit=crop&q=80&w=800",
      badge: "ESTD 2001 - 23+ Years",
      specs: [
        "Capacity: 12,000+ Tons Local",
        "Humidity: 90% - 95% RH Control",
        "Sorters: Optical weight sizing"
      ]
    }
  ];

  const handleNextHero = () => {
    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevHero = () => {
    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Static list mirroring the exact checklist items from gilafruit.com in the image
  const officialFeatures = [
    { title: "Product quality", desc: "Fresh and wholesome / Free from signs of spoilage" },
    { title: "Firm and ripe", desc: "Free from bends and bruises" },
    { title: "Free from bruising", desc: "Free from stains and dehydration" },
    { title: "Weight and size", desc: "As agreed upon and according to product type" },
    { title: "Name and brand", desc: "Producer or exporter" },
    { title: "Standard", desc: "Complying with international standards" },
    { title: "Internal and external defects", desc: "Very low deviations from standards" },
    { title: "Natural flavor and aroma", desc: "Natural smell and free from signs of diseases" }
  ];

  // Specific 12 fruits and vegetables showcasing exact labels & borders as seen in screenshot
  const exportShowcaseProducts = [
    { id: "e1", name: "Export of Various Iranian Kiwis", tag: "Kiwi", slug: "hayward-kiwifruit", image: "https://images.unsplash.com/photo-1585059895524-72359e061381?auto=format&fit=crop&q=80&w=500" },
    { id: "e2", name: "Fresh Iranian Garlic for Export", tag: "Garlic", slug: "fresh-garlic", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=500" },
    { id: "e3", name: "Export of Iranian Round and Oval Watermelon", tag: "Watermelon", slug: "export-watermelon", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=500" },
    { id: "e4", name: "Export of Various Types of Lettuce from Iran", tag: "Lettuce", slug: "lettuce-export", image: "https://images.unsplash.com/photo-1629115911440-e2ce8d9ece45?auto=format&fit=crop&q=80&w=500" },
    { id: "e5", name: "Iranian Export Bell Pepper Varieties", tag: "Pepper", slug: "bell-pepper-export", image: "https://images.unsplash.com/photo-1563565315-f5b994071ec2?auto=format&fit=crop&q=80&w=500" },
    { id: "e6", name: "Iranian Export Greenhouse Tomatoes", tag: "Tomato", slug: "greenhouse-tomatoes", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=500" },
    { id: "e7", name: "Parsley with Fresh Iranian Quality", tag: "Parsley", slug: "parsley-export", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=500" },
    { id: "e8", name: "Quality Fresh Iranian Export Dill", tag: "Dill", slug: "dill-export", image: "https://images.unsplash.com/photo-1588711928096-7d60914da6bf?auto=format&fit=crop&q=80&w=500" },
    { id: "e9", name: "Dry Garlic with Iranian Export Quality", tag: "Garlic", slug: "dry-garlic-export", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=500" },
    { id: "e10", name: "Export of Various Types of Grapes from Iran", tag: "Grapes", slug: "seedless-grapes", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=500" },
    { id: "e11", name: "Fresh Iranian Export Broccoli", tag: "Broccoli", slug: "green-broccoli", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=500" },
    { id: "e12", name: "Iranian Super Export Cherries", tag: "Cherries", slug: "sweet-cherries", image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=500" }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonialAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", // Dmitry
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150", // Elena (looks like Natalia!)
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", // Farid
  ];

  const trustBadges = [
    {
      id: "enamad",
      title: "e-NAMAD",
      faName: "نماد اعتماد الکترونیکی",
      subtitle: "www.enamad.ir",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="35" ry="35" stroke="#1d4ed8" strokeWidth="1.5" strokeDasharray="3,2" />
          <path d="M52 18 C30 18, 18 36, 18 54 C18 72, 34 82, 52 82 C68 82, 78 72, 82 54 L52 54 M52 54 C52 40, 44 30, 34 30" stroke="#1e40af" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 54 C36 62, 44 68, 52 68 C60 68, 66 62, 68 54" stroke="#eab308" strokeWidth="4.5" strokeLinecap="round" />
          <g fill="#eab308">
            <polygon points="34,80 36,83 32,81 28,83 30,80 27,78 31,78 34,75 37,78 41,78" transform="scale(0.8) translate(5, 12)" />
            <polygon points="46,80 48,83 44,81 40,83 42,80 39,78 43,78 46,75 49,78 53,78" transform="scale(0.8) translate(10, 12)" />
            <polygon points="58,80 60,83 56,81 52,83 54,80 51,78 55,78 58,75 61,78 65,78" transform="scale(0.8) translate(15, 12)" />
            <polygon points="70,80 72,83 68,81 64,83 66,80 63,78 67,78 70,75 73,78 77,78" transform="scale(0.8) translate(20, 12)" />
            <polygon points="82,80 84,83 80,81 76,83 78,80 75,78 79,78 82,75 85,78 89,78" transform="scale(0.8) translate(25, 12)" />
          </g>
        </svg>
      )
    },
    {
      id: "samandehi",
      title: "SAMANDEHI",
      faName: "ستاد ساماندهی رسانه",
      subtitle: "ثبت رسانه‌های دیجیتال",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="35" ry="35" stroke="#f59e0b" strokeWidth="1" />
          <path d="M52 20 C40 20, 30 33, 30 48 C30 63, 44 76, 62 72 C74 68, 78 50, 70 38 C66 30, 58 27, 50 29 C40 31, 35 41, 41 50 C46 58, 56 55, 58 47" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 45 C24 37, 18 32, 22 24 C26 28, 30 46, 26 54" stroke="#ca8a04" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="46" r="3" fill="#854d0e" />
          <circle cx="62" cy="38" r="2.5" fill="#ca8a04" />
        </svg>
      )
    },
    {
      id: "tuv_center",
      title: "TÜV CENTER",
      faName: "توف آلمان بین‌الملل",
      subtitle: "TÜV Certification",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#1e3a8a" strokeWidth="5.5" />
          <path d="M12 50 A38 38 0 0 1 88 50" stroke="#f97316" strokeWidth="3" fill="none" strokeDasharray="5,3" />
          <circle cx="50" cy="50" r="32" stroke="#1d4ed8" strokeWidth="1" />
          <text x="50" y="46" fill="#1e3a8a" fontSize="19" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">TÜV</text>
          <text x="50" y="63" fill="#1e3a8a" fontSize="10.5" fontWeight="900" letterSpacing="0.8" textAnchor="middle" fontFamily="sans-serif">CENTER</text>
        </svg>
      )
    },
    {
      id: "gs1_global",
      title: "GS1 SYSTEM",
      faName: "کدگذاری جهانی مادی",
      subtitle: "GS1 CODES",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="45" rx="36" ry="12" stroke="#2563eb" strokeWidth="2" transform="rotate(-15 50 45)" />
          <ellipse cx="50" cy="45" rx="40" ry="5" stroke="#f59e0b" strokeWidth="1" transform="rotate(18 50 45)" />
          <circle cx="50" cy="45" r="14" fill="#2563eb" />
          <text x="51" y="49" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">GS1</text>
          <g transform="translate(18, 55)" stroke="#1e293b" strokeWidth="1.5">
            <line x1="10" y1="12" x2="10" y2="24" strokeWidth="2" />
            <line x1="14" y1="12" x2="14" y2="24" strokeWidth="0.8" />
            <line x1="17" y1="12" x2="17" y2="24" strokeWidth="3" />
            <line x1="22" y1="12" x2="22" y2="24" strokeWidth="1.2" />
            <line x1="26" y1="12" x2="26" y2="24" strokeWidth="1.8" />
            <line x1="30" y1="12" x2="30" y2="24" strokeWidth="0.8" />
            <line x1="34" y1="12" x2="34" y2="24" strokeWidth="3.5" />
            <line x1="40" y1="12" x2="40" y2="24" strokeWidth="0.8" />
            <line x1="44" y1="12" x2="44" y2="24" strokeWidth="1.8" />
            <line x1="48" y1="12" x2="48" y2="24" strokeWidth="2" />
          </g>
        </svg>
      )
    },
    {
      id: "eac_union",
      title: "EAC UNION",
      faName: "اتحادیه گمرک اوراسیا",
      subtitle: "Eurasian Compliance",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="14" width="88" height="72" rx="6" fill="#0f172a" />
          <text x="50" y="58" fill="#ffffff" fontSize="33" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" letterSpacing="-1">EAC</text>
          <rect x="14" y="70" width="72" height="4.5" fill="#ef4444" rx="1" />
        </svg>
      )
    },
    {
      id: "ir_mimt",
      title: "IR.MIMT",
      faName: "وزارت صنعت و معدن",
      subtitle: "توسعه تجارت ایران",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#059669" strokeWidth="2" />
          <circle cx="50" cy="50" r="39" stroke="#1e293b" strokeWidth="1" />
          <g stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M50 24 C47 27, 44 33, 44 45 C44 57, 47 63, 50 66 C53 63, 56 57, 56 45 C56 33, 53 27, 50 24 Z" />
            <path d="M50 26 L50 64" />
            <path d="M37 45 C37 34, 44 30, 50 30 C56 30, 63 34, 63 45" />
            <path d="M39 52 C39 59, 44 63, 50 63 C56 63, 61 59, 61 52" />
            <circle cx="50" cy="23" r="3" fill="#ef4444" stroke="none" />
          </g>
        </svg>
      )
    },
    {
      id: "chamber",
      title: "CHAMBER INFO",
      faName: "اتاق بازرگانی گیلان",
      subtitle: "اتاق صنایع و معادن",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="43" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,2" />
          <ellipse cx="50" cy="50" rx="35" ry="35" fill="#f0f9ff" />
          <g transform="translate(50,50)" fill="#0284c7" stroke="#ffffff" strokeWidth="0.75">
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M0 0 C-6 -18, -3 -26, 0 -34 C3 -26, 6 -18, 0 0" transform={`rotate(${i * 30})`} />
            ))}
            <circle cx="0" cy="0" r="11" fill="#0369a1" />
            <circle cx="0" cy="0" r="5" fill="#f0f9ff" />
          </g>
        </svg>
      )
    },
    {
      id: "russian_embassy",
      title: "RU.GOST",
      faName: "تاییدیه سفارت روسیه",
      subtitle: "Russian Federation",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#d1d5db" strokeWidth="1" />
          <g transform="translate(0, -3)">
            <path d="M50 25 L44 36 L36 33 L40 44 L28 48 L38 55 L32 70 L50 61 L68 70 L62 55 L72 48 L60 44 L64 33 L56 36 Z" fill="#ca8a04" stroke="#854d0e" strokeWidth="1" />
            <circle cx="47" cy="28" r="1.5" fill="#ca8a04" />
            <circle cx="53" cy="28" r="1.5" fill="#ca8a04" />
            <rect x="43" y="47" width="14" height="10" fill="#3b82f6" rx="1" stroke="#1d4ed8" strokeWidth="0.5" />
            <path d="M43 52 L57 52" stroke="#ffffff" strokeWidth="1" />
            <path d="M43 54 L57 54" stroke="#ef4444" strokeWidth="1" />
          </g>
          <text x="50" y="87" fill="#374151" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">RUSSIAN EMBASSY</text>
        </svg>
      )
    }
  ];

  const activeSlideObj = heroSlides[activeHeroSlide];
  const titleParts = activeSlideObj.title.includes(activeSlideObj.highlight)
    ? activeSlideObj.title.split(activeSlideObj.highlight)
    : [activeSlideObj.title, ""];

  return (
    <div className="flex flex-col space-y-0 pb-16 animate-fade-in bg-slate-50" id="home-view">
      
      {/* SECTION 1: HERO CONTAINER WITH ACTIVE IMAGE GALLERY AND ORGANIC CUTOUT BOTTOM */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white overflow-hidden">
        {/* Background orchard texture subtle overlay */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"></div>
        {/* Ambient glow lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-700/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 py-4 flex flex-col justify-between min-h-[500px]">
              
              {/* CSS Grid-stacked slides for ultra-stable content height */}
              <div className="grid grid-cols-1 grid-rows-1 relative min-h-[460px] sm:min-h-[380px] md:min-h-[280px] lg:min-h-[420px]">
                {heroSlides.map((slide, idx) => {
                  const isCurrent = idx === activeHeroSlide;
                  const slideTitleParts = slide.title.includes(slide.highlight)
                    ? slide.title.split(slide.highlight)
                    : [slide.title, ""];

                  return (
                    <div 
                      key={idx}
                      className={`col-start-1 row-start-1 space-y-6 flex flex-col justify-start transition-all duration-700 ease-in-out ${
                        isCurrent 
                          ? "opacity-100 translate-x-0 pointer-events-auto" 
                          : "opacity-0 translate-x-12 pointer-events-none"
                      }`}
                    >
                      {/* Pulsing Badge */}
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/40 backdrop-blur-md rounded-full border border-emerald-700/50 text-xs text-emerald-300 font-semibold tracking-wider uppercase">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                          <span>{slide.badge}</span>
                        </div>
                      </div>

                      {/* Spectacular responsive heading */}
                      <div>
                        <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight w-full">
                          {slideTitleParts[0]}
                          <span className="text-amber-400 block sm:inline-block relative">
                            {slide.highlight}
                            <span className="absolute left-0 bottom-1 w-full h-1 bg-amber-400/20 rounded-full"></span>
                          </span>
                          {slideTitleParts[1]}
                        </h1>
                      </div>

                      {/* Slide description */}
                      <div>
                        <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl font-light leading-relaxed">
                          {slide.desc}
                        </p>
                      </div>

                      {/* Dynamic specs indicators */}
                      <div className="py-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {slide.specs.map((spec, sIdx) => {
                          const parts = spec.split(":");
                          return (
                            <div 
                              key={sIdx} 
                              className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-850/40 p-3.5 rounded-xl flex flex-col hover:border-amber-400/40 transition-colors"
                            >
                              <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest leading-none mb-1.5">
                                {parts[0]}
                              </span>
                              <span className="text-xs text-white font-medium">
                                {parts[1] || ""}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('#/catalog')}
                  className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold font-sans text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  View Trade Catalog
                </button>
                <button
                  onClick={() => onNavigate('#/contact')}
                  className="px-8 py-3.5 bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700/60 text-white font-bold font-sans text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  Contact Sales Desk
                </button>
              </div>

              {/* Horizontal line and page-control dots */}
              <div className="pt-6 border-t border-emerald-900/40 flex items-center gap-6">
                <div className="flex gap-2">
                  {heroSlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveHeroSlide(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        dotIdx === activeHeroSlide ? 'w-8 bg-amber-400' : 'w-2 bg-emerald-850 hover:bg-emerald-800'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
                <div className="text-xs text-emerald-300 font-mono tracking-widest">
                  0{activeHeroSlide + 1} / 0{heroSlides.length}
                </div>
              </div>

            </div>

            {/* Right Media Preview Column (Gorgeous custom mockup frame) */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Backglow element behind frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 to-amber-500/10 rounded-[2.5rem] filter blur-xl opacity-70 transform scale-95 pointer-events-none"></div>

              {/* Main Bezel Card Container */}
              <div className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] overflow-hidden border-[6px] border-emerald-900 shadow-2xl bg-slate-950 group">
                {/* Active image with scale effect */}
                <img 
                  key={activeHeroSlide}
                  src={activeSlideObj.image} 
                  alt={activeSlideObj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform ease-out animate-fade-in"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient vignette overlays */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute inset-0 bg-emerald-950/10 mix-blend-color-burn"></div>

                {/* Overlay card for real export flavor */}
                <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-700/30 text-[10px] text-emerald-300 flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  <span>GILAFRUIT VERIFIED GOLD</span>
                </div>

                {/* Overlapping Slider Arrow Controls */}
                <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <button 
                    onClick={handlePrevHero} 
                    className="p-3 rounded-full bg-slate-950/80 hover:bg-amber-400 hover:text-slate-950 text-white border border-slate-800 transition-all cursor-pointer pointer-events-auto flex items-center justify-center shadow-md shrink-0"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNextHero} 
                    className="p-3 rounded-full bg-slate-950/80 hover:bg-amber-400 hover:text-slate-950 text-white border border-slate-800 transition-all cursor-pointer pointer-events-auto flex items-center justify-center shadow-md shrink-0"
                    aria-label="Next Slide"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Packaging specs detail drawer in bottom corner */}
                <div className="absolute bottom-4 left-4 right-4 text-left p-3.5 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-800/80">
                  <span className="text-[9px] uppercase font-bold text-amber-400 tracking-wider font-mono block mb-0.5">
                    Phytosanitary Clearance ID
                  </span>
                  <p className="text-xs text-slate-100 font-bold font-sans">
                    GF-IRAN-2026 / ASTARA PORT
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Beautiful bottom organic wave shape transition instead of flat line */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-50">
          <div className="absolute inset-0 bg-repeat-x bg-bottom" style={{ backgroundImage: "radial-gradient(ellipse at bottom, transparent, transparent)" }}></div>
        </div>
      </section>

      {/* SECTION 2: ORGANIC HIGHLIGHTS (Green block left + 3 columns alongside it) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block (Green base contact highlight) */}
          <div className="lg:col-span-4 bg-emerald-900 rounded-3xl p-8 text-white flex flex-col justify-between text-left relative overflow-hidden shadow-md">
            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug">
                With GilaFruit, taste Iranian fruits and vegetables in every corner of the world
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed font-light">
                Direct crop delivery from premium northern Gilan microclimates straight through automated weight categorization systems to secure international wholesale terminals.
              </p>
            </div>
            <div className="pt-8 border-t border-emerald-800/80 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WhatsApp: +98 990 097 8002</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Wholesale: +98 990 097 8005</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>Landline: +98 21 9109 9091</span>
              </div>
            </div>
          </div>

          {/* Right 3 columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                  🇮🇷
                </div>
                <h4 className="font-display font-bold text-slate-800 text-lg">Iranian Products</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Iran produces diverse and popular fruits and vegetables due to its four-season climate. GilaFruit utilizes advanced facilities and hygienic methods to offer quality products worldwide. Enjoy authentic taste experience.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider pt-4 block">100% Organic Origin</span>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <h4 className="font-display font-bold text-slate-800 text-lg">GilaFruit Company</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sabz Gostaran Gilan Fruit Company, known by its trade name “GilaFruit”, is recognized as a pioneer in Iran, relying on its experience and expertise in sorting and packaging fruits and vegetables. We meet global standards using advanced equipment.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider pt-4 block">ESTABLISHED 2001</span>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/60 hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800">
                  <Truck className="w-6 h-6 text-emerald-800" />
                </div>
                <h4 className="font-display font-bold text-slate-800 text-lg">Export Services</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  With several years of experience in international fresh produce freight, GilaFruit has become a trusted partner for those who export Fruits and Vegetables. Our team specializes in transportation, licensing, and customs for a smooth process.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider pt-4 block">EAEU & MENA LOGISTICS</span>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: GATEWAYS GRID SECTION (Premium white overlaid card on real facility backdrop) */}
      <section className="relative py-28 bg-slate-900 overflow-hidden text-center">
        {/* Hand-brushed rugged styled top border mask matching GilaFruit design */}
        <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-30 pointer-events-none">
          <svg className="absolute top-0 w-full h-6 text-slate-50 fill-current" viewBox="0 0 1200 24" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,18 L1180,10 L1150,22 L1120,8 L1090,19 L1060,5 L1035,16 L1010,4 L980,15 L950,8 L920,20 L890,7 L860,18 L830,12 L800,21 L770,6 L740,15 L710,10 L680,19 L650,11 L620,20 L590,5 L560,17 L530,10 L500,18 L470,8 L440,15 L410,10 L380,19 L350,8 L320,18 L290,11 L260,20 L230,8 L200,17 L170,11 L140,21 L110,6 L80,15 L50,9 L20,18 L0,5 Z" />
          </svg>
        </div>

        {/* Real photo background with rich corporate emerald overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200" 
            alt="Pallets of fresh agricultural goods in warehouse" 
            className="w-full h-full object-cover brightness-[0.65] saturate-[1.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/45 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/70 via-slate-950/50 to-emerald-900/40"></div>
        </div>

        {/* Left 3D Ribbon Graphic */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 sm:w-20 select-none pointer-events-none hidden md:flex items-center z-10">
          <svg className="w-full h-[500px] text-emerald-600 opacity-95 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]" viewBox="0 0 100 300" fill="currentColor">
            <path d="M0,0 L85,60 L15,150 L85,240 L0,300 Z" />
            <path d="M0,20 L65,75 L10,150 L65,225 L0,280 Z" fill="#15803d" opacity="0.85" />
            <path d="M0,40 L45,90 L5,150 L45,210 L0,260 Z" fill="#14b8a6" opacity="0.4" />
          </svg>
        </div>

        {/* Right 3D Ribbon Graphic */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 sm:w-20 select-none pointer-events-none hidden md:flex items-center justify-end z-10">
          <svg className="w-full h-[500px] text-emerald-600 opacity-95 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transform rotate-180" viewBox="0 0 100 300" fill="currentColor">
            <path d="M0,0 L85,60 L15,150 L85,240 L0,300 Z" />
            <path d="M0,20 L65,75 L10,150 L65,225 L0,280 Z" fill="#15803d" opacity="0.85" />
            <path d="M0,40 L45,90 L5,150 L45,210 L0,260 Z" fill="#14b8a6" opacity="0.4" />
          </svg>
        </div>

        {/* White Central Card Box */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="bg-white text-slate-800 rounded-[2.5rem] p-8 sm:p-12 md:p-14 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65)] border border-slate-150 relative overflow-hidden text-left hover:border-emerald-100 transition-all duration-500">
            
            {/* Background glowing gradients inside the card to keep it modern */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute left-[-50px] bottom-[-50px] w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top brand accent line */}
            <div className="w-16 h-1 bg-[#135d37] rounded-full mb-6"></div>

            {/* GilaFruit Title branding */}
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              <span className="text-[#135d37] font-black mr-1">GilaFruit:</span> Your gateway to the world of Iranian Fruits and Vegetables
            </h2>

            {/* Paragraph presentation */}
            <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              <p>
                Relying on years of experience and expertise in sorting and packaging hygienic Iranian fruits and vegetables, GilaFruit is recognized as a pioneer in this industry in Iran. The company utilizes modern equipment and advanced technologies to provide its customers with high-quality products that meet international standards. GilaFruit meticulously classifies fruits based on various criteria, including size, color, appearance, and the absence of impurities, using both automated and manual sorting methods.
              </p>
              <p>
                By employing high-quality and hygienic raw materials, the company preserves the shelf life and quality of the product until it reaches the end consumer.
              </p>
            </div>

            {/* Nested Cards Grid with Products Calendar and Our Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              
              {/* Products Calendar Gateway */}
              <div className="bg-slate-50/70 hover:bg-white border border-slate-200/50 hover:border-emerald-500/30 p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-xl group hover:-translate-y-1">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 transition-transform duration-500 group-hover:scale-110 shadow-inner">
                    <Calendar className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-black text-slate-800 text-lg transition-colors group-hover:text-emerald-700">Products Calendar</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    To accurately plan your orders, please check our product calendar and find out when products are available for purchase throughout the year.
                  </p>
                </div>
                
                <button 
                  onClick={() => onNavigate('#/calendar')} 
                  className="w-full max-w-[220px] py-3.5 bg-[#135d37] hover:bg-[#0c3c23] text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-6 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>View Calendar</span>
                </button>
              </div>

              {/* Our Products Gateway */}
              <div className="bg-slate-50/70 hover:bg-white border border-slate-200/50 hover:border-emerald-500/30 p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-xl group hover:-translate-y-1">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 transition-transform duration-500 group-hover:scale-110 shadow-inner">
                    <Leaf className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-black text-slate-800 text-lg transition-colors group-hover:text-emerald-700">Our Products</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    We are leaders in the production and supply of some fresh vegetables in global markets and have a privileged position among our competitors.
                  </p>
                </div>
                
                <button 
                  onClick={() => onNavigate('#/products')} 
                  className="w-full max-w-[220px] py-3.5 bg-[#4f9b2d] hover:bg-[#3b7521] text-white font-sans font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-6 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Leaf className="w-4 h-4 text-emerald-100" />
                  <span>Show Products</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Hand-brushed rugged styled bottom border mask matching GilaFruit design */}
        <div className="absolute bottom-0 inset-x-0 h-6 bg-transparent z-30 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-6 text-slate-50 fill-current transform rotate-180" viewBox="0 0 1200 24" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,18 L1180,10 L1150,22 L1120,8 L1090,19 L1060,5 L1035,16 L1010,4 L980,15 L950,8 L920,20 L890,7 L860,18 L830,12 L800,21 L770,6 L740,15 L710,10 L680,19 L650,11 L620,20 L590,5 L560,17 L530,10 L500,18 L470,8 L440,15 L410,10 L380,19 L350,8 L320,18 L290,11 L260,20 L230,8 L200,17 L170,11 L140,21 L110,6 L80,15 L50,9 L20,18 L0,5 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 4: FEATURES CHECKLIST WITH PREMIUM OVERLAPPING CARDS & DYNAMIC SLIDER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-visible">
        {/* Soft background decorative blobs */}
        <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -y-1/2" />
        <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column (Header Description & Embedded Overlapping Features Card) */}
          <div className="lg:col-span-7 space-y-10 text-left relative">
            <div className="space-y-4">
              <span className="text-xs text-emerald-800 uppercase font-black tracking-widest block font-mono">
                ✨ Thanks to Iran's diverse climate and four seasons
              </span>
              <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-[#3b7521] tracking-tight leading-none">
                Core Premium Features of Export Produce
              </h2>
              <div className="w-24 h-1 bg-amber-400 rounded-full my-4"></div>
              <p className="text-sm text-slate-600 leading-relaxed font-light max-w-2xl">
                Agricultural products in Iran carry exceptional taste, natural Brix levels, and unique density thanks to geographical climate varieties. Strict adherence to product safety, manual double-inspection sorting, and specialized hydro-cooling packaging remain our ultimate baseline.
              </p>
            </div>

            {/* Overlapping White Grid Card Box */}
            <div className="w-full lg:w-[125%] bg-white rounded-[2.5rem] p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(4,120,87,0.08)] border border-slate-100 hover:shadow-[0_25px_60px_rgba(4,120,87,0.15)] transition-all duration-500 relative z-30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                {officialFeatures.map((feat, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#3b7521] group-hover:text-white transition-all duration-300">
                      {idx === 0 && <Check className="w-5 h-5" />}
                      {idx === 1 && <Leaf className="w-5 h-5" />}
                      {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                      {idx === 3 && <Scale className="w-5 h-5" />}
                      {idx === 4 && <Tag className="w-5 h-5" />}
                      {idx === 5 && <Award className="w-5 h-5" />}
                      {idx === 6 && <Layers className="w-5 h-5" />}
                      {idx === 7 && <Sparkles className="w-5 h-5" />}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-800 font-display group-hover:text-[#3b7521] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Dynamic Slider with High-Quality Produce/Packhouse Images) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start py-4 lg:mt-24 w-full relative z-20">
            
            {/* The Main Slider Image Frame */}
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white max-w-md bg-slate-900 group">
              
              {/* Active Image (Beautiful fading transition) */}
              <img 
                key={activeFeatureSlide}
                src={[
                  "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&q=80&w=800", // celery greens sorting
                  "https://images.unsplash.com/photo-1629115911440-e2ce8d9ece45?auto=format&fit=crop&q=80&w=800", // lettuce sorting
                  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800", // bell pepper calibration
                  "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800", // pallets warehouse
                  "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800", // manual inspection check
                  "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800"  // four seasons crop farm
                ][activeFeatureSlide]} 
                alt="Excellent GilaFruit packing and harvesting operations" 
                className="w-full h-full object-cover group-hover:scale-105 duration-1000 transition-transform ease-out animate-fade-in"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Caption Overlay glassmorphic card */}
              <div className="absolute bottom-4 inset-x-4 bg-slate-950/75 backdrop-blur-md rounded-2xl p-4 border border-slate-800 flex flex-col space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-400">
                  EXPORT QUALITY STAGE 0{activeFeatureSlide + 1}
                </span>
                <span className="text-xs font-bold text-white tracking-wide">
                  {[
                    "Celery Sorting & Sizing Process",
                    "Fresh Lettuce Selection Cleanroom",
                    "Capsicum Calibration Sorter Line",
                    "High-Vis Warehouse Pallet Shipments",
                    "Physical Quality & Dehydration Check",
                    "Four Seasons Organic Yield Inspection"
                  ][activeFeatureSlide]}
                </span>
              </div>

              {/* Slider Chevrons Navigation with professional gold hover state */}
              <button 
                onClick={() => setActiveFeatureSlide((prev) => (prev - 1 + 6) % 6)} 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-xs hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-10 border border-slate-700/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveFeatureSlide((prev) => (prev + 1) % 6)} 
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-xs hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer z-10 border border-slate-700/30"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Thumbnail Previews Container with elegant selected states */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-md bg-stone-100 p-2.5 rounded-2xl border border-stone-200">
              {[
                "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&q=80&w=150", 
                "https://images.unsplash.com/photo-1629115911440-e2ce8d9ece45?auto=format&fit=crop&q=80&w=150", 
                "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=150", 
                "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=150", 
                "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=150", 
                "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=150"
              ].map((imgUrl, thumbIdx) => {
                const isActive = thumbIdx === activeFeatureSlide;
                return (
                  <button
                    key={thumbIdx}
                    onClick={() => setActiveFeatureSlide(thumbIdx)}
                    className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 w-12 h-9 ${
                      isActive 
                        ? "border-2 border-[#3b7521] ring-2 ring-emerald-550/30 scale-105" 
                        : "border border-stone-300 hover:border-slate-400 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt="Mini preview" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: SOME OF OUR FRUITS & VEGETABLES - REDESIGNED PREMIUM PORTFOLIO BENTO GRID */}
      <section className="bg-gradient-to-br from-[#022c22] via-[#043e2f] to-[#011c14] py-24 text-white rounded-[50px] shadow-[inset_0_4px_30px_rgba(0,0,0,0.4)] relative overflow-hidden">
        {/* Decorative gold background lights */}
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 relative z-10">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-black text-amber-400 font-mono block">
              🌿 GILAFRUIT PREMIUM PORTFOLIO 🌿
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
              Some of Our Premium Fruits & Vegetables
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full my-4"></div>
            <p className="text-sm text-emerald-250/80 leading-relaxed font-light max-w-xl mx-auto">
              Our products undergo state-of-the-art optical sizing sorting, thorough water washing, and packaging in specialized carton boxes ensuring flawless delivery.
            </p>
          </div>

          {/* Luxury Showcase Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {exportShowcaseProducts.map((prod) => (
              <div 
                key={prod.id} 
                onClick={() => onNavigate('#/product/' + prod.slug)}
                className="bg-[#053d2d]/50 border border-emerald-800/60 rounded-[2rem] overflow-hidden hover:border-amber-400 transition-all duration-300 flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-xl hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-750 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Luxury Stamp badge */}
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-slate-950/95 text-amber-400 border border-amber-400/35 rounded-xl text-[8.5px] uppercase font-black tracking-widest font-mono shadow-lg">
                    ✨ {prod.tag} SELECT
                  </span>
                  
                  {/* Shadow Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021c14] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-white text-base sm:text-lg leading-snug group-hover:text-amber-400 transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-emerald-150/80 leading-relaxed font-light">
                      Premium grading, compliant with EAEU phytosanitary inspection codes. Hand-selected and automatically calibrated in Gilan packing center.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-emerald-800/40 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-emerald-300 font-bold">
                      ● CALIBRATED SIZE
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('#/product/' + prod.slug);
                      }}
                      className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 hover:text-white flex items-center gap-1 transition-colors pointer-events-auto"
                    >
                      <span>Specifications</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={() => onNavigate('#/products')}
              className="px-10 py-4 bg-amber-400 hover:bg-amber-550 text-emerald-950 font-sans font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl hover:shadow-[0_15px_30px_rgba(251,191,36,0.3)] cursor-pointer inline-flex items-center gap-3 hover:-translate-y-0.5"
            >
              📊 View Full Export Catalog Directory
              <ArrowRight className="w-4 h-4 text-emerald-950 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: HISTORY / STORY ("From Humble Beginnings to Global Access: The GilaFruit Story") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Year card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white border-4 border-emerald-800 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-xl relative aspect-square">
              <span className="text-[90px] font-display font-black text-emerald-800 leading-none">23</span>
              <span className="text-xl font-display font-bold uppercase tracking-widest text-slate-800 my-2">YEARS</span>
              <span className="text-xs text-slate-500 font-mono tracking-widest">BOUNTIFUL OUTCOME</span>
              <div className="absolute top-4 left-4 right-4 h-1 border-t border-dashed border-emerald-800/30"></div>
              <div className="absolute bottom-4 left-4 right-4 h-1 border-b border-dashed border-emerald-800/30"></div>
            </div>
          </div>

          {/* Right Narrative with stats breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-amber-600 font-bold uppercase tracking-widest block">A little about us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 leading-none">
                From Humble Beginnings to Global Access: <br />
                <span className="text-emerald-800">The GilaFruit Story</span>
              </h2>
              <div className="w-16 h-1 bg-amber-400 rounded-full my-3"></div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A young sapling was planted in the soil one day, and over two decades of dedication and hard work, it transformed into a mighty tree. Our 23 fruitful years are filled with experience, a passion for producing and supplying high-quality agricultural products, and a commitment to providing the best taste and freshness to customers worldwide. Along this journey, significant strides have been made in enhancing skills and expertise through the efforts of 150 skilled workers across various departments.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center sm:text-left">
                <span className="block font-display text-2xl sm:text-4xl font-black text-emerald-800 font-mono">+100</span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold block">Active Gardens</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-display text-2xl sm:text-4xl font-black text-emerald-800 font-mono">+30</span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold block">Fresh Products</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-display text-2xl sm:text-4xl font-black text-emerald-800 font-mono">+20</span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold block">Business Partners</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: COHESIVE INTEGRATED NEWS / SOCIAL FLAVOR GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
            📰 Newsfeed
          </div>
          <h2 className="font-display text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight">
            Latest Blog: Everything you need to know
          </h2>
          <p className="text-slate-550 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Stay up to date with GilaFruit’s global shipment timelines, cold warehousing optimizations, packing innovations, and trade protocol shifts.
          </p>
        </div>

        {/* 3 blog posts matching style guide (green labels, Whatsapp responder labels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {blogs.slice(0, 3).map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white border border-slate-205 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-56 bg-emerald-950 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Whatsapp Fast Responder header badge baked on top of the image to mimic corporate profile screenshots */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 bg-emerald-950/80 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-emerald-800/40 flex justify-between items-center text-[9px] text-emerald-300 font-sans tracking-wide">
                    <span>💬 +98 902 097 8002</span>
                    <span>www.GilaFruit.com</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block font-mono">
                    {blog.publishDate} — {blog.language}
                  </span>
                  <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-50">
                <button
                  onClick={() => onNavigate(`#/blog/${blog.slug}`)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors pt-4 font-sans cursor-pointer"
                >
                  Read More ➜
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: COMMITMENT TO FRESHNESS (BENTO GALLERY ROW OF REAL HARVEST PHOTOS + TEXT) */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden text-left">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200" 
            alt="Field background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="max-w-xl space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block">Commitment to Freshness</span>
            <h3 className="font-display text-2xl sm:text-3.5xl font-black text-white leading-tight">
              GilaFruit: Your Gateway to the Best Fruits and Vegetables
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Masonry/Bento panel of real worker and grading photos */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-2 shrink-0">
              <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=200" alt="Sorter" className="w-full aspect-square object-cover rounded-xl border border-slate-800" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=200" alt="Sorter" className="w-full aspect-square object-cover rounded-xl border border-slate-800" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=200" alt="Sorter" className="w-full aspect-square object-cover rounded-xl border border-slate-800" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1585059895524-72359e061381?auto=format&fit=crop&q=80&w=200" alt="Sorter" className="w-full aspect-square object-cover rounded-xl border border-slate-800" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=200" alt="Sorter" className="w-full aspect-square object-cover rounded-xl border border-slate-800" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1629115911440-e2ce8d9ece45?auto=format&fit=crop&q=80&w=200" alt="Sorter" className="w-full aspect-square object-cover rounded-xl border border-slate-800" referrerPolicy="no-referrer" />
            </div>

            {/* Right explaining column */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                With advanced methods, GilaFruit ensures that every product that bears its brand is the epitome of quality and freshness. The journey of GilaFruit products begins in the heart of lush gardens and farms, where expert hands carefully select only the best fruits and vegetables.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                From fluffy kiwis and juicy oranges to vibrant peaches and juicy grapes, each harvest is carefully crafted using the latest techniques, ensuring that the natural integrity of each product remains intact. A team of skilled and experienced professionals oversees all aspects of the production process, from sorting and packing to quality control and shipping. Using manual skill as well as state-of-the-art automated machinery, GilaFruit ensures that each product meets the highest standards of consistency and presentation.
              </p>
              <p className="text-xs text-amber-400 font-semibold leading-normal pt-2">
                🌟 GilaFruit’s unwavering commitment to quality is rooted in the deep belief that consumers deserve nothing but the best.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: INTERCONNECTED WORLD MAP ROAD & EMBLEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 block">Achieving Success Together</span>
          <h2 className="font-display text-3xl sm:text-4.5xl font-black text-slate-900 leading-none">
            Our Certifications and Honors
          </h2>
          <div className="w-16 h-1 bg-amber-405 mx-auto rounded-full"></div>
        </div>

        {/* Live Vector SVG Export Trade Map Console */}
        <div className="w-full">
          <ExportWorldMap />
        </div>

        {/* Testimonials Review & Stamp Badges Row Underneath */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            
            {/* Testimonials */}
            <div className="lg:col-span-5 relative bg-slate-50 rounded-2xl p-6 pt-12 space-y-4 border border-slate-100 flex flex-col justify-between min-h-[300px]">
              {/* Overlapping top-left avatar as requested */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0">
                <div className="w-20 h-20 rounded-full border-4 border-white bg-white ring-2 ring-emerald-700/80 overflow-hidden shadow-lg">
                  <img 
                    src={testimonialAvatars[currentTestimonialIdx]} 
                    alt={testimonials[currentTestimonialIdx]?.name || "Reviewer"} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {testimonials.length > 0 && (
                <div className="space-y-4">
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest block mb-1">
                      Wholesale Partner Review
                    </span>
                    <h5 className="font-bold text-base text-slate-800 font-display">
                      {testimonials[currentTestimonialIdx].name}
                    </h5>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mt-1">
                      {testimonials[currentTestimonialIdx].company} — {testimonials[currentTestimonialIdx].country}
                    </p>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic text-center sm:text-left">
                    "{testimonials[currentTestimonialIdx].text}"
                  </p>
                </div>
              )}

              {/* Controls */}
              <div className="flex justify-center sm:justify-start gap-2 pt-2">
                <button 
                  onClick={handlePrevTestimonial}
                  className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs rounded-xl hover:bg-slate-100 font-sans font-medium transition-all cursor-pointer shadow-xs"
                >
                  ◀ Back
                </button>
                <button 
                  onClick={handleNextTestimonial}
                  className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs rounded-xl hover:bg-slate-100 font-sans font-medium transition-all cursor-pointer shadow-xs"
                >
                  Next ▶
                </button>
              </div>
            </div>

            {/* Stamp badges / official trust certification logos column */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center h-full">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.id}
                  className="bg-white hover:bg-emerald-50/50 hover:border-emerald-300 transition-all p-3.5 rounded-2xl border border-slate-100 hover:shadow-xs flex flex-col justify-between items-center gap-2 relative group overflow-hidden"
                >
                  {/* Subtle hover background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 p-1 bg-slate-50/80 rounded-xl group-hover:bg-white transition-colors duration-300">
                    {badge.logo}
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center w-full">
                    <span className="text-[10px] font-black text-slate-800 tracking-tight uppercase leading-tight font-display text-center truncate w-full" title={badge.title}>
                      {badge.title}
                    </span>
                    <span className="text-[8px] text-slate-400 font-medium tracking-tight mt-0.5 leading-none block text-center truncate w-full" title={badge.faName}>
                      {badge.faName}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Modern & beautiful touch-sliding Certificate Carousel with interactive detail magnifier modal */}
        <CertificateCarousel certificates={certificates} />

      </section>

    </div>
  );
}
