import React, { useState } from 'react';
import { 
  Layers, ShieldCheck, Box, Sparkles, Sprout, ArrowRight,
  Maximize2, Instagram, Youtube, Twitter, Linkedin, Facebook, Send, Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VegetablePackingScreenProps {
  onNavigate?: (hash: string) => void;
}

export default function VegetablePackingScreen({ onNavigate }: VegetablePackingScreenProps) {
  const { language, direction } = useLanguage();
  const isRtl = direction === 'rtl';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Translation Helper
  const d = (enText: string, faText: string) => (language === 'fa' ? faText : enText);

  // Social Links list
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/gilafruit", color: "hover:bg-pink-600 hover:text-white" },
    { icon: Youtube, href: "https://youtube.com/gilafruit", color: "hover:bg-red-600 hover:text-white" },
    { icon: Twitter, href: "https://twitter.com/gilafruit", color: "hover:bg-slate-950 hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com/company/gilafruit", color: "hover:bg-blue-700 hover:text-white" },
    { icon: Facebook, href: "https://facebook.com/gilafruit", color: "hover:bg-sky-600 hover:text-white" },
    { icon: Send, href: "https://t.me/gilafruit", color: "hover:bg-sky-500 hover:text-white" }
  ];

  const vegetablePanoramicImage = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200";

  const vegetableProductBoxes = [
    {
      title: d("High-Pungency Garlic", "سیر سفید صادراتی"),
      subtitle: d("Aerated Orange Crate", "سبد هواکش‌دار نارنجی"),
      image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=400",
      desc: d("Cured Gilan white garlic bulbs, dry-wind sorted in orange lightweight crates.", "بوته‌های سیر سفید گیلان، فرآوری‌شده در دستگاه‌های خشک‌کن باد سرد، بسته‌بندی بر روی سبدهای نارنجی کم‌وزن.")
    },
    {
      title: d("Crisp Iceberg Lettuce", "کاهو آیسبرگ شاداب"),
      subtitle: d("Vacuum-Cooled White Crate", "کارتون واکسینه‌شده سفید"),
      image: "https://images.unsplash.com/photo-1622484211148-716598e0911a?auto=format&fit=crop&q=80&w=400",
      desc: d("Triple-walled waxed fiberboard cartons with ventilation windows for iceberg lettuce pre-cooling.", "کارتن‌های فیبری سه‌جداره واکسینه‌شده مجهز به دریچه‌های تهویه هوا برای خنک نگه داشتن کاهو آیسبرگ.")
    },
    {
      title: d("Bell Pepper Selects", "فلفل دلمه‌ای رنگی برگزیده"),
      subtitle: d("Tough Triple-Wall Carton", "کارتن فرورفته سه‌جداره مقاوم"),
      image: "https://images.unsplash.com/photo-1563565312-9ab2e6a52651?auto=format&fit=crop&q=80&w=400",
      desc: d("Shock-insulated segment boxes for shiny red & yellow bell peppers with structural rigidity.", "جعبه‌های سلولی مقاوم برای انواع فلفل دلمه‌ای قرمز و زرد جهت مهار ضربه‌های فیزیکی.")
    }
  ];

  const vegetableBrandedFrames = [
    {
      id: "frame-garlic",
      title: d("5 KG COMPACT GARLIC CRATE", "سبد ۵ کیلوگرمی سیر مرغوب"),
      badge: d("Garlic", "سیر"),
      tag: d("Cured", "خشک فرآوری‌شده"),
      image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600",
      borderColor: "border-orange-600 bg-orange-600/5",
      badgeColor: "bg-orange-600",
      textColor: "text-orange-700"
    },
    {
      id: "frame-parsley",
      title: d("PARSLEY CARTON REFRIGERATED EXPORT", "کارتن سردخانه‌ای جعفری صادراتی"),
      badge: d("Parsley", "جعفری"),
      tag: d("Fresh Cut", "برش تازه شاداب"),
      image: "https://images.unsplash.com/photo-1515471204580-c11cffe9f0f9?auto=format&fit=crop&q=80&w=600",
      borderColor: "border-emerald-700 bg-emerald-700/5",
      badgeColor: "bg-emerald-700",
      textColor: "text-emerald-800"
    },
    {
      id: "frame-bell-pepper",
      title: d("SHIELD PROTECTIVE COLOURED PEPPERS", "جعبه حفاظتی فلفل دلمه‌ای رنگی"),
      badge: d("Peppers", "فلفل رنگی"),
      tag: d("Optic Sorted", "سورت اپتیکال"),
      image: "https://images.unsplash.com/photo-1563565312-9ab2e6a52651?auto=format&fit=crop&q=80&w=600",
      borderColor: "border-amber-600 bg-amber-600/5",
      badgeColor: "bg-amber-600",
      textColor: "text-amber-700"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="vegetable-packing-root" dir={direction}>
      
      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#01261d] text-white overflow-hidden pt-24 pb-20 sm:pt-[112px] sm:pb-28 md:pt-[148px] text-center" id="vegetable-packing-hero">
        <div className="absolute inset-0 z-0">
          <img 
            src={vegetablePanoramicImage} 
            alt="GilaFruit sorting and packaging lines" 
            className="w-full h-full object-cover opacity-20 pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021f18]/95 via-[#011a14]/98 to-[#011811]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center space-y-4">
          
          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300 tracking-wider mb-2">
            <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }} className="hover:text-amber-400">
              {d("Home", "خانه")}
            </a>
            <span>/</span>
            <a href="#/packing" onClick={(e) => { e.preventDefault(); onNavigate?.('packing'); }} className="hover:text-amber-400">
              {d("Packing", "بسته‌بندی")}
            </a>
            <span>/</span>
            <span className="text-white uppercase font-black">
              {d("Vegetable Packaging", "بسته‌بندی صیفی‌جات")}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            {d("Gilafruit: Present Your Vegetables to the World with Freshness and Quality", "گیلافروت: معرفی صیفی‌جات صادراتی به جهان با حفظ کیفیت و تازگی بی‌نظیر")}
          </h1>
          <p className="max-w-3xl text-emerald-300 text-xs sm:text-sm font-semibold leading-relaxed pt-1">
            {d(
              "Ensuring Freshness is our priority with Innovative Vegetable Packaging solutions. Our advanced containment techniques guarantee the freshness of our products during vegetable export. We optimize containment for efficient export, maintaining the quality and freshness essential for successful vegetable export.",
              "حفظ طراوت اولویت ما با راهکارهای نوآورانه فرآیند بسته‌بندی صیفی‌جات است. روش‌های پیشرفته ما تازگی را در زمان ارسال صیفی‌جات تضمین می‌کند. ما بسته‌بندی‌ها را به منظور افزایش کیفیت نهایی صادرات بهینه‌سازی می‌کنیم."
            )}
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
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">
              {d("Hassle-Free Export", "صادرات بدون دغدغه")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {d(
                "Easy and hassle-free export. From farm to customer, we manage every step for you.",
                "صادرات آسان و بی‌دردسر. از مزارع اختصاصی تا تحویل به خریدار، ما مدیریت کلیه گام‌ها را برای شما بر عهده داریم."
              )}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">
              {d("Authentic Taste of Iran", "طعم اصیل ایرانی")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {d(
                "Satisfying every taste, anywhere in the world. Our diverse product range and customized packaging meet the needs of any market.",
                "خوشایند هر سلیقه‌ای در سراسر جهان. تنوع بالای محصولات و بسته‌بندی‌های اختصاصی ما پاسخگوی تمامی بازارهاست."
              )}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-lg text-slate-900 tracking-tight">
              {d("Quality and Freshness", "کیفیت و تازگی")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {d(
                "With our specialized protective covering, deliver your Vegetables to your customers with the same freshness as the day they were harvested.",
                "با استفاده از لایه‌های محافظ تخصصی ما، محصول نهایی را با همان کیفیتی تحویل مشتری دهید که در روز برداشت داشته است."
              )}
            </p>
          </div>

        </div>
      </div>

      {/* 3. PARAGRAPH DETAILED TEXT & PANORAMIC IMAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="intro-text-section">
        <div className="space-y-12">
          
          <div className={`max-w-5xl mx-auto text-slate-700 text-xs sm:text-sm leading-relaxed text-justify space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <p>
              {d(
                "With a distinguished history in the vegetable export industry, Gilafruit offers a comprehensive range of packaging solutions to maintain the freshness and quality of vegetables during transportation and captivate international customers. Utilizing our expertise and experience, we design and manufacture containers using high-quality materials and specifically tailored to the needs of each type of vegetable.",
                "گیلافروت با سابقه‌ای درخشان در صنعت صادرات صیفی‌جات ایرانی، طیف کاملی از طرح‌های بسته‌بندی نوین را برای حفظ کیفیت در طول حمل و نگهداری و جذب خریداران بین‌المللی ارائه می‌نماید. ما با استفاده از تخصص و تجارب خود بسته‌بندی‌ها را با مرغوب‌ترین مواد اولیه و متناسب با حساسیت‌های فیزیکی هر صیفی طراحی و تولید می‌کنیم."
              )}
            </p>
            <p>
              {d(
                "Our understanding of the crucial role of proper presentation in vegetable export drives our commitment to providing solutions that help you preserve the freshness, vibrancy, and flavor of your vegetables throughout their journey to global markets. By choosing Gilafruit, you can reap numerous benefits, including:",
                "درک عمیق ما از نقش حیاتی ارائه شکیل در فرآیند صادرات صیفی‌جات، مبنای تعهد ماست تا تازگی، رنگ و طعم واقعی محصولات جذاب شما را تا رسیدن به بازارهای جهانی زنده نگه داریم. با انتخاب گیلافروت از مزایای فراوانی بهره‌مند می‌شوید از جمله:"
              )}
            </p>
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-center text-xs font-bold text-emerald-950 font-mono ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">{d("✓ Reduced Waste", "✓ کاهش ضایعات")}</span>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">{d("✓ Increased Profitability", "✓ افزایش سودآوری")}</span>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">{d("✓ Attracting More Customers", "✓ جذب مشتریان جدید")}</span>
              <span className="bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">{d("✓ Reliable Brand Presence", "✓ حضور پایدار برند")}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative max-h-[420px]" id="mosaic-wide-banner">
            <img 
              src={vegetablePanoramicImage} 
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
                
                <h3 className={`font-display font-black text-2xl sm:text-3xl leading-tight tracking-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                  {d("Sustainable Packaging for Iran's Sustainable Vegetables", "بسته‌بندی پایدار برای صیفی‌جات فاخر ایرانی")}
                </h3>
                <div className="w-16 h-1 bg-amber-400 rounded-full" />
              </div>

              <div className="space-y-4 pt-12 relative z-10">
                <div className={`flex gap-2.5 ${isRtl ? 'justify-end' : ''}`}>
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
                <span className={`text-[10px] font-mono text-emerald-350 tracking-wider block font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                  {d("Follow us on social networks", "ما را در شبکه‌های اجتماعی دنبال کنید")}
                </span>
              </div>
            </div>

            {/* Right Column: Three vertical boxes showing gorgeous vegetable crates */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {vegetableProductBoxes.map((box, i) => (
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
                      {d("Inspect Crate Details", "بررسی جزئیات سبد")}
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
            {d(
              "\"Utilization of high-quality and hygienic raw materials with the highest quality\"",
              "«استفاده از مواد اولیه بهداشتی خلوص و بهداشتی با بالاترین درجه کیفی»"
            )}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-emerald-950 uppercase tracking-tight">
            {d(
              "Gilafruit: Global Standards, Unrivaled Quality in Vegetable Packaging",
              "گیلافروت: استانداردهای جهانی، کیفیت بی‌رقیب در بسته‌بندی صیفی‌جات"
            )}
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>
      </div>

      {/* 6. THREE BRAND-FRAME EXPORT CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="bottom-branded-boxes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vegetableBrandedFrames.map((frame) => (
            <div 
              key={frame.id}
              className={`p-1 rounded-3xl border-4 ${frame.borderColor} transition-all duration-300 hover:scale-103 shadow-lg flex flex-col justify-between`}
            >
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
                
                <div className={`px-4 py-2 border-b border-dashed border-slate-200/80 flex justify-between items-center bg-slate-50 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#014134] flex items-center gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <Award className="w-3 h-3 text-[#eab308]" />
                    <span>{d("GilaFruit Brand", "برند رسمی گیلافروت")}</span>
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
                    {d("Caspian Sourcing", "تولید حوزه خزر")}
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
            <div className={`lg:col-span-7 flex flex-col items-start space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-sans text-slate-400 font-medium tracking-wide uppercase">
                  {d("Over Two Decades of Experience by Your Side", "بیش از دو دهه تجربه درخشان در کنار شما")}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {d("We specialize in", "تخصص ما در حوزه")}{" "}
                  <span className="text-emerald-600">{d("Production", "تولید")}</span>،{" "}
                  <span className="text-emerald-600">{d("Gardening", "باغداری")}</span>،{" "}
                  <span className="text-emerald-600">{d("Packaging", "بسته‌بندی")}</span> و{" "}
                  <span className="text-emerald-600">{d("Export", "صادرات")}</span>
                </h2>
                <div className="w-16 h-1.5 bg-emerald-600 rounded-full mt-3" />
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4">
                
                {/* Column 1 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center font-mono">
                    18<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    {d("Fruit Variety", "تنوع میوه‌ها")}
                  </span>
                </div>

                {/* Column 2 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center font-mono">
                    100<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    {d("Available Orchards", "باغ‌های اختصاصی")}
                  </span>
                </div>

                {/* Column 3 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center font-mono">
                    27<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    {d("Packaging Variety", "تنوع بسته‌بندی")}
                  </span>
                </div>

                {/* Column 4 */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[145px] group">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-600 transition-all duration-300 group-hover:h-3" />
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight flex items-center font-mono">
                    40<span className="text-lg text-emerald-600 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-500 mt-2 line-clamp-2 leading-tight">
                    {d("Premium Growers", "تولیدکنندگان برتر")}
                  </span>
                </div>

              </div>

              {/* Functional CTA actions preserved side-by-side */}
              <div className={`pt-4 flex flex-wrap gap-4 w-full ${isRtl ? 'flex-row-reverse' : ''}`}>
                <button 
                  onClick={() => onNavigate?.('#/contact')}
                  className="px-6 py-3 bg-[#eab308] hover:bg-amber-600 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {d("Order custom branding specifications", "ثبت سفارش اختصاصی طرح و برندینگ")}
                </button>
                <button 
                  onClick={() => onNavigate?.('#/catalog')}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  {d("Download catalogs PDF", "دانلود کاتالوگ محصولات (PDF)")}
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
