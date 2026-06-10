import React from 'react';
import { 
  Check, 
  Play, 
  ShoppingCart, 
  Globe, 
  Users, 
  Hotel,
  Award,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Boxes
} from 'lucide-react';

interface AboutScreenProps {
  onNavigate?: (targetHash: string) => void;
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  // Navigation helper
  const handleNav = (hash: string) => {
    if (onNavigate) {
      onNavigate(hash);
    } else {
      window.location.hash = hash;
    }
  };

  const partnerBenefits = [
    'Producing and Exporting Iranian Products',
    'Expertise in Iranian Kiwis',
    'Global Logistics and Supply Chain',
    'Complete Supply Chain Management',
    'Commitment to Global Standards',
    'Utilizing Advanced Technologies'
  ];

  const valueCards = [
    {
      icon: ShoppingCart,
      title: 'Supermarket Chains',
      desc: 'Supplying fresh produce to major retail outlets worldwide.'
    },
    {
      icon: Globe,
      title: 'Import Companies',
      desc: 'Partnering with leading fruit and vegetable importers globally.'
    },
    {
      icon: Users,
      title: 'Traders & Merchants',
      desc: 'Supporting international trade with reliable supply and quality.'
    },
    {
      icon: Hotel,
      title: 'Hospitality Sector',
      desc: 'Serving top hotels and restaurants with premium Iranian produce.'
    }
  ];

  const visionPoints = [
    {
      title: 'Modernization',
      desc: 'Implementing automated harvesting and packaging processes. Streamlining operations for efficiency.'
    },
    {
      title: 'Logistics Optimization',
      desc: 'Improving transportation and customs clearance procedures. Ensuring smoother international trade.'
    },
    {
      title: 'Market Expansion',
      desc: 'Tailoring products to new markets. Considering local food cultures and regulations.'
    },
    {
      title: 'Customer Partnership',
      desc: 'Offering comprehensive support. From product selection to competitive pricing and marketing strategies.'
    }
  ];

  // Helper list of images to build the 3x3 gallery grid gracefully
  const galleryImages = [
    'src/assets/images/gilafruit_kiwi_basket_banner_1781014515822.png',
    'src/assets/images/gilafruit_kiwi_box_1781013956397.png',
    'src/assets/images/gilafruit_lettuce_box_1781013975529.png',
    'src/assets/images/gilafruit_dill_carton_banner_1781014534023.png',
    'src/assets/images/gilafruit_lettuce_carton_banner_1781014565410.png',
    'src/assets/images/gilafruit_parsley_carton_banner_1781014550921.png',
    'src/assets/images/gilafruit_kiwi_white_10kg_banner_1781014580644.png',
    'src/assets/images/gilafruit_packing_vector_illustration_1781014820562.png'
  ];

  return (
    <div className="bg-[#fbfcfa] min-h-screen pt-24 sm:pt-28 md:pt-[148px] pb-16 text-slate-800 font-sans" id="about-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER */}
      <div className="bg-[#f2f4f1] border-y border-slate-200/60 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold uppercase tracking-wider text-[#01261d] font-sans">About us</span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-medium text-slate-400">About us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* 2. CHIEF BRAND INTRO & FLAGS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-intro-hero">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#01261d] tracking-tight leading-tight">
              Sabz Gostaran Gilan Fruit .Co
            </h1>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>About us:</strong> Sabz Gostaran Gilan Fruit Company, under the GilaFruit brand, is a leading Iranian exporter of fresh fruits and vegetables, notably Iranian Kiwis. We supply high-quality products globally, leveraging efficient Global Logistics.
            </p>

            {/* Premium Brand Spotlight Block */}
            <div className="bg-[#f5f8f5] border-l-4 border-[#1a8a42] p-5 rounded-r-2xl space-y-2 shadow-xs">
              <h3 className="text-lg font-black text-[#1a8a42] flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-[#1a8a42]" />
                Brand: GilaFruit
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The name GilaFruit is a beautiful combination of "Gilan Province," the cradle of Iranian agriculture, and "Fruit," signifying the company's identity and mission: to deliver the highest quality fruits and vegetables from Iran to global markets.
              </p>
            </div>

            {/* Reliable Partner Bullet Matrix */}
            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-[#01261d] text-base leading-tight">
                A Reliable Business Partner to grow your Business
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {partnerBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-[#1a8a42] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Brand stand decoration featuring Iran + GilaFruit flags photograph */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft backdrop radial shadow and decoration frame */}
            <div className="absolute -inset-4 bg-emerald-50 rounded-full blur-2xl opacity-60 -z-10" />
            <div className="relative border-8 border-white shadow-2xl rounded-2xl overflow-hidden bg-white max-w-sm sm:max-w-md">
              <img 
                src="src/assets/images/gilafruit_iran_flags_1781077352581.png" 
                alt="Sabz Gostaran Gilan Fruit Co. & Iran Flags on Standing Poles" 
                className="w-full object-cover"
                style={{ maxHeight: '420px' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </section>


        {/* 3. FROM KIWI TO GLOBAL MARKETS (Dark Green Curved Section Overlay) */}
        <section 
          className="bg-[#01261d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden" 
          id="kiwi-to-global-markets"
        >
          {/* Subtle overlay decorative lines */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-950/40 rounded-full filter blur-3xl -mr-16 -mt-16 -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a8a42]/15 rounded-full filter blur-3xl -ml-24 -mb-24 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Dual Overlapping Image Visuals */}
            <div className="lg:col-span-5 relative flex justify-center py-4">
              
              {/* Back card decoration */}
              <div className="absolute w-[240px] h-[300px] bg-slate-900/30 rounded-2xl border border-white/10 -rotate-6 transform translate-x-[-15px] translate-y-[-10px]" />
              
              {/* Front grower card image */}
              <div className="relative w-[245px] h-[310px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-350 bg-emerald-900 group">
                <img 
                  src="src/assets/images/gilafruit_about_kiwi_grower_1781077370132.png" 
                  alt="GilaFruit Kiwi Grower Harvest" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

            {/* Right details content bar */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                From Kiwi to Global Markets
              </h2>
              
              <div className="space-y-4 text-emerald-100/90 text-xs sm:text-sm leading-relaxed font-sans">
                <p>
                  In 2001, with the planting of the first kiwi seedlings, the dream of GilaFruit took shape. A grand vision to introduce the authentic taste of Iran to the world. Today, GilaFruit, with its team of experts and experienced individuals, has become one of the most recognized exporters of fruits and vegetables in Iran.
                </p>
                <p>
                  GilaFruit’s vision extends beyond the export of agricultural products. The company strives to become a global brand in sustainable agriculture by utilizing innovation and the latest technologies.
                </p>
              </div>

              {/* Signature + Button Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-emerald-800/60">
                <div className="font-serif italic text-2xl tracking-wide text-emerald-300 select-none">
                  Gilafruit.co
                </div>
                <button 
                  onClick={() => handleNav('#/services')}
                  className="px-6 py-2.5 bg-[#1a8a42] hover:bg-[#157035] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  The Story Behind Us
                </button>
              </div>

            </div>

          </div>
        </section>


        {/* 4. WHAT SETS US APART: SUPPLY CHAIN & 4-CARD BENEFIT GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-4" id="about-supply-chain">
          
          {/* Left Text Segment */}
          <div className="lg:col-span-5 text-left space-y-6 flex flex-col justify-center">
            <span className="text-[#1a8a42] text-xs font-black uppercase tracking-widest block">
              What sets us apart from others?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#01261d] tracking-tight leading-none">
              Supply Chain
            </h2>
            
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                At GilaFruit, we are committed to providing our customers with the highest quality Iranian <span className="text-[#1a8a42] font-semibold">fruits</span> and <span className="text-[#1a8a42] font-semibold">vegetables</span>.
              </p>
              <p>
                To achieve this goal, we have implemented a comprehensive supply chain system that monitors the freshness and quality of our produce at every stage of the process, from the farm to the customer's hands.
              </p>
              <p>
                For instance, we carefully select farms, ensure timely harvesting, precise <span className="text-[#1a8a42] font-semibold">packaging</span>, controlled transportation, intelligent warehousing, continuous quality control, and fast and efficient distribution to guarantee that our products, such as <span className="text-[#1a8a42] font-semibold">kiwis</span>, reach our customers quickly and in the freshest condition.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('#/products')}
                className="px-6 py-3 bg-[#1a8a42] hover:bg-[#0c4a34] text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer hover:shadow-lg"
              >
                Products
              </button>
            </div>
          </div>

          {/* Right 2x2 Grid of visual structured items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valueCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl text-left flex flex-col items-start transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-[#1a8a42]">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mt-4 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </section>


        {/* 5. LET'S GROW TOGETHER: OUR VISION & ORGANIZATIONAL CULTURE (Dark Charcoal Segment) */}
        <section 
          className="bg-[#242b28] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden" 
          id="vision-and-culture"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column visual culture element */}
            <div className="lg:col-span-5 text-left space-y-6">
              
              {/* Culture portrait photo */}
              <div className="rounded-2xl overflow-hidden border-4 border-slate-800 shadow-xl max-h-80 sm:max-h-96">
                <img 
                  src="src/assets/images/gilafruit_about_culture_workers_1781077387542.png" 
                  alt="GilaFruit Packing & Grading Workers Sorting Fruit" 
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & custom brand info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Organizational Culture
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  At GilaFruit, we believe that agriculture is the art of feeding the world. By exporting high-quality agricultural products, we contribute to the healthy nutrition of people worldwide. We respect the environment and use sustainable farming methods to preserve natural resources. Innovation and creativity are our driving forces for developing new products and meeting the needs of global markets.
                </p>
              </div>

            </div>

            {/* Right Column target items */}
            <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-between">
              
              <div className="space-y-2">
                <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">
                  Let's grow together
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Our Vision for the Future
                </h2>
              </div>

              {/* Numbers list */}
              <div className="space-y-4 pt-4 flex-1">
                {visionPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-mono text-lg font-black text-[#1a8a42] flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-white text-sm sm:text-base tracking-tight mb-1">
                        {point.title}
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={() => handleNav('#/blog')}
                  className="px-6 py-2.5 bg-[#1a8a42] hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  Visit Blog
                </button>
              </div>

            </div>

          </div>
        </section>


        {/* 6. LOGISTICS, SECURITY, GALLERY & INTERNATIONALLY RECOGNIZED CERTIFICATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-4 text-left" id="quality-and-certifications">
          
          {/* Left Visual Collage Grid with "Watch Video" element */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-3 gap-2 bg-[#f2f4f2] p-3 rounded-2xl shadow-xs border border-slate-200/50">
              
              {galleryImages.slice(0, 5).map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white shadow-xs border border-slate-100 group">
                  <img 
                    src={img} 
                    alt={`GilaFruit Process Sorter ${i}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}

              {/* Slot 6 (Center Right) */}
              <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-xs border border-slate-100 group">
                <img 
                  src={galleryImages[5]} 
                  alt="GilaFruit Packing Illustrate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slot 7 (Bottom Left - WATCH VIDEO ACTION COMPONENT) */}
              <div className="aspect-square rounded-lg flex flex-col items-center justify-center bg-[#1a8a42]/95 hover:bg-[#1a8a42] p-2 text-center text-white cursor-pointer shadow-md transition-all group">
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a8a42] shadow-sm mb-2 group-hover:scale-110 transition-transform">
                  <Play className="w-4.5 h-4.5 fill-current ml-0.5" />
                </span>
                <span className="text-[10px] sm:text-xs font-black tracking-tight leading-none block uppercase">
                  Watch Video
                </span>
                <span className="text-[7px] text-emerald-100 mt-1 uppercase block">
                  see how our team works
                </span>
              </div>

              {galleryImages.slice(6, 8).map((img, i) => (
                <div key={i + 6} className="aspect-square rounded-lg overflow-hidden bg-white shadow-xs border border-slate-100 group">
                  <img 
                    src={img} 
                    alt={`GilaFruit Process Sorter ${i + 6}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}

            </div>
          </div>

          {/* Right text detailing Certifications and security standards */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01261d] tracking-tight leading-snug">
              Ensuring Quality and Safety in Logistics Services with Internationally Recognized Certifications
            </h2>
            
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                Our company provides a wide range of value-added services including transportation, warehousing, packaging, and customs clearance. By utilizing these services, our clients benefit from numerous competitive advantages such as cost reduction, improved delivery speed, and increased customer satisfaction. Additionally, through the provision of video and image updates at every stage of the process, customers are kept fully informed about the preparation and delivery of their goods.
              </p>
              <p>
                Furthermore, our possession of internationally recognized <span className="text-[#1a8a42] font-semibold">certifications</span> such as ISO 9001, ISO 22000, ISO 10004, ISO 14001, ISO 10668, IMS, HACCP, ISO 22301, and ISO 45001 demonstrates our commitment to quality, safety, and customer satisfaction.
              </p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
