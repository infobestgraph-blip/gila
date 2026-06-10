import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Check, 
  MapPin,
  Lock,
  Sparkles,
  Phone,
  Mail,
  Building,
  Printer,
  MessageCircle,
  Copy,
  UserCheck,
  Truck,
  Ship,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
  tags?: string[];
}

export default function FAQShippingScreen() {
  const { language, t, navigate } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [copiedData, setCopiedData] = useState<string | null>(null);

  const shippingQuestions: FAQItem[] = [
    {
      question: 'What transportation methods are used?',
      answer: 'GilaFruit utilizes a variety of transportation methods to deliver agricultural products worldwide. The choice of transportation, ranging from land (transit and rail) to sea and air, is determined by factors such as destination distance, product type, order volume, and the customer\'s desired delivery time. Our expert team carefully evaluates each order to select the most suitable method, ensuring that products reach customers with the highest quality and in the shortest possible time. For Eurasian territories we deploy insulated refrigerated trucks (TIR reefers), while marine voyages on the Caspian Sea or Persian Gulf are completed using temperature-controlled ocean containers.',
      tags: ['transportation methods', 'land transit', 'rail', 'ocean marine reefer', 'air cargo']
    },
    {
      question: 'What factors affect the transportation time?',
      answer: 'Several variables dictate the delivery schedule, including the exact geographic distance to the destination hub, cross-border custom processing speeds, seasonal weather currents, and port handling queues.\n\n• For example, overland refrigerated truck shipping from Astara to Moscow (Russia) takes approximately 4 to 6 days under normal clearances.\n\n• Maritime transport across the Caspian Sea from Amirabad to Astrakhan typically runs between 5 to 8 working days.',
      tags: ['transit time', 'moscow', 'sea currents', 'customs clearance', 'shipping rate']
    },
    {
      question: 'How is the safe arrival of products ensured?',
      answer: 'To guarantee pristine cargo safety and retain peak nutritional status, we implement strict cold-chain parameters:\n\n• Temperature & Humidity Logs: Dual-channel USB and real-time cellular data loggers trace pulp temperatures inside the refrigerated reefers continuously.\n\n• Advanced Cold Chain: Our cargo containers are pre-cooled and loaded with ethylene scrubbing pads to eliminate premature ripening on transit tracks.\n\n• Sealed Security: High-grade custom steel seals are locked before departure and only broken by authorized receiver personnel.',
      tags: ['cargo safety', 'cold chain', 'temperature logger', 'ripening prevention', 'steel seals']
    },
    {
      question: 'What factors affect the transportation cost?',
      answer: 'Wholesale shipping expenses depend on regional carrier fuel indexes, chosen transportation vehicle class (overland TIR, marine container, or express airfreight), direct seasonal demand curves (e.g. higher demand during peak citrus harvest), and customs clearance duties. We negotiate direct shipping rates to lock the lowest logistics pricing possible for our bulk volume partners.',
      tags: ['shipping cost', 'wholesale rates', 'fuel indexes', 'customs duties', 'seasonal demand']
    },
    {
      question: 'How can I track my shipment?',
      answer: 'We run a fully transparent and modern cargo tracking regime. Every dispatch is assigned to a dedicated Export Account Manager. We provide daily progress delivery updates, forwarding direct GPS locations of transport trucks or marine vessels, immediate reefer temperature readings, and shipping/customs document drafts directly through WhatsApp or email.',
      tags: ['tracking', 'gps location', 'progress updates', 'customs documents', 'temperature readings']
    },
    {
      question: 'What is the standard overland transit timeline to Moscow (Russia)?',
      answer: 'Standard overland transit from our packaging facility in Astara (Iran) to central Moscow wholesale distribution centers (e.g. Food City) is typically 4 to 6 working days. This timeframe includes fast-track customs clearance at the Russian/Azerbaijani border crossing points and pre-arranged phytosanitary passport checkups.',
      tags: ['moscow', 'russia', 'overland', 'astara', 'food city', 'transit timeline']
    },
    {
      question: 'How do you monitor and verify temperatures inside the truck/container?',
      answer: 'Every vehicle or ocean reefer container dispatched is loaded with standard dual-state digital USB/cellular temperature loggers. These track real-time humidity and cold pulp readings at 10-minute intervals. The digital telemetry report is printed out upon arrival to verify the cold chain remains un-broken before breaking the custom steel seals.',
      tags: ['temperature tracking', 'loggers', 'humidity meter', 'cold chain verification']
    },
    {
      question: 'Do you operate shipping via Caspian Sea ocean lanes?',
      answer: 'Yes. We load and dispatch ocean reefer cargo from Bandar-e Anzali and Amirabad Ports. Vessels sail directly to Astrakhan Port (Russia) or Aktau Port (Kazakhstan). Maritime ocean reefer transit generally takes 5 to 8 days, depending on sea swell profiles and port container handling speeds.',
      tags: ['caspian sea', 'ocean shipping', 'anzali port', 'amirabad', 'astrakhan', 'aktau']
    },
    {
      question: 'How are customs and international sanitary clearance documents cleared?',
      answer: 'We supply full export documentation: Certified Phytosanitary Certificates from the Ministry of Agriculture, Chamber of Commerce Certificate of Origin, International CMR Road Consignment Notes, Commercial Invoices, Packing Lists, and Export Custom Declarations. This guarantees swift clearances upon reaching regional customs terminals.',
      tags: ['customs documentation', 'phytosanitary certificate', 'origin certificate', 'cmr consignment']
    },
    {
      question: 'What temperature settings are used for Hayward Kiwis during transit?',
      answer: 'For Hayward Kiwis, the container air temperature is kept locked at 0.0°C to +0.5°C (32°F to 33°F), accompanied by positive ventilation levels at 15-25 cbm/hr. Ethylene scrubbing filters are loaded inside the air return systems to prevent early ripening during extended road transits.',
      tags: ['hayward kiwi', 'cooling temperature', 'ethylene scrubbing', 'ripening ventilation']
    },
    {
      question: 'Can you handle shipping to GCC countries (UAE, Qatar, Kuwait)?',
      answer: 'Yes. For Middle Eastern partners, we dispatch refrigerated vehicles overland to southern marine ports (e.g. Bandar Abbas), followed by fast-tracked roll-on/roll-off (Ro-Ro) reefer vessels to Jebel Ali (Dubai) or Ruwais Ports. Typical door-to-door transit is 6 to 9 working days.',
      tags: ['gcc shipping', 'uae', 'qatar', 'kuwait', 'jebel ali', 'dubai logistics', 'ro-ro reefer']
    }
  ];

  const filteredQuestions = shippingQuestions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopyText = (text: string) => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedData(text);
      setTimeout(() => setCopiedData(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className={`bg-[#fbfcfa] min-h-screen text-slate-800 relative font-sans transition-all duration-300 overflow-hidden pt-24 sm:pt-28 md:pt-[135px] pb-24 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background blobs & organic decorative elements */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1a8a4204_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none -z-20 opacity-80" />

      {/* Copy Alert Toast */}
      <AnimatePresence>
        {copiedData && (
          <motion.div
            initial={{ opacity: 0, y: -45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#01261d] text-white border border-[#1a8a42]/30 px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-fade-in"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-xs font-semibold">Answer copied successfully to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb row - Sleek header bar */}
        <div className="flex items-center justify-between gap-4 text-xs text-slate-500 font-semibold mb-8 border-b border-slate-100 pb-3" id="faq-ship-breadcrumbs">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('home')} className="hover:text-[#1a8a42] transition-colors cursor-pointer bg-transparent border-none p-0 font-semibold text-xs">Home</button>
            <ChevronRightIcon className={`w-3.5 h-3.5 text-slate-400 ${isRtl ? 'rotate-180' : ''}`} />
            <button onClick={() => navigate('faq')} className="hover:text-[#1a8a42] transition-colors cursor-pointer bg-transparent border-none p-0 font-semibold text-xs">FAQ</button>
            <ChevronRightIcon className={`w-3.5 h-3.5 text-slate-400 ${isRtl ? 'rotate-180' : ''}`} />
            <span className="text-emerald-950 font-bold">Shipping and Delivery</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
            Section: EXPORT-LOGISTICS
          </span>
        </div>

        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-12 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#1a8a42]/10 border border-[#1a8a42]/20 text-[#1a8a42] rounded-full text-xs font-bold uppercase tracking-wider font-mono">
              <Truck className="w-4 h-4 text-[#1a8a42] shrink-0" />
              <span>Logistics Transit Durations & Temperature Control</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[#01261d] tracking-tight leading-tight">
              Do you have any questions about our <span className="text-[#1a8a42]">Shipping Process?</span>
            </h1>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-full">
              Please refer to the following pages for answers to your questions. If you cannot find the answer you are looking for on those pages, please send us your question and we will get back to you as soon as possible regarding Shipping and Delivery or any other inquiries related to the Shipping Process and Export from Iran. For more information about different Transportation Methods, please contact our customer support.
            </p>

            {/* Keyword Fast Filter Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono">
              <span className="text-[10px] bg-emerald-50 text-[#1a8a42] border border-emerald-100 px-3 py-1 rounded-full font-bold">#TransitTimeline</span>
              <span className="text-[10px] bg-emerald-50 text-[#1a8a42] border border-emerald-100 px-3 py-1 rounded-full font-bold">#TemperatureControl</span>
              <span className="text-[10px] bg-emerald-50 text-[#1a8a42] border border-emerald-100 px-3 py-1 rounded-full font-bold">#CaspianShipping</span>
              <span className="text-[10px] bg-emerald-50 text-[#1a8a42] border border-emerald-100 px-3 py-1 rounded-full font-bold">#CustomsClearance</span>
            </div>
          </div>
        </div>

        {/* --- MAIN SPLIT GRID VIEW --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-11 items-start">
          
          {/* LEFT COLUMN: VISUAL MEDIA AND CONTACT DIRECTORY */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visual Quality Worker Card representing wholesale cargo orders */}
            <div className="bg-white rounded-[24px] border border-slate-200/90 shadow-sm overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-192514ad74e4?auto=format&fit=crop&w=600&q=80"
                  alt="GilaFruit Reliable Transportation TIR Truck"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="bg-[#1a8a42] text-white text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded-md">
                    RELIABLE TRANSPORTATION
                  </span>
                  <span className="text-[11px] font-bold drop-shadow">
                    Insulated TIR Reefers
                  </span>
                </div>
              </div>
              
              <div className="p-5 space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#1a8a42]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm">
                    Ask any Questions you have.
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Our shipment coordinators and regional freight advisors are available round-the-clock to track reefer loggers, verify border customs stamps, and coordinate transit schedules.
                </p>
              </div>
            </div>

            {/* Premium B2B Copiable Contact Directories */}
            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest">
                  Official Channels
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-4 text-xs">
                {/* Whatsapp 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Whatsapp (Commercial Desk)
                    </span>
                    <span className="font-mono text-emerald-600 font-bold">Fast Responder</span>
                  </div>
                  <button
                    onClick={() => handleCopyText('+98 990 097 8002')}
                    className="w-full flex items-center justify-between p-2.5 bg-slate-50 hover:bg-[#25D366]/5 rounded-xl border border-slate-150 text-slate-700 font-mono font-bold transition-all group/cell cursor-pointer"
                  >
                    <span>+98 990 097 8002</span>
                    <Copy className="w-3.5 h-3.5 text-slate-350 group-hover/cell:text-[#1a8a42] transition-colors" />
                  </button>
                </div>

                {/* Whatsapp 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Whatsapp (Logistics Support)
                    </span>
                    <span className="font-mono text-emerald-600 font-bold">Active 24/7</span>
                  </div>
                  <button
                    onClick={() => handleCopyText('+98 990 097 8005')}
                    className="w-full flex items-center justify-between p-2.5 bg-slate-50 hover:bg-[#25D366]/5 rounded-xl border border-slate-150 text-slate-700 font-mono font-bold transition-all group/cell cursor-pointer"
                  >
                    <span>+98 990 097 8005</span>
                    <Copy className="w-3.5 h-3.5 text-slate-350 group-hover/cell:text-[#1a8a42] transition-colors" />
                  </button>
                </div>

                {/* Office Phones */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Office Telephone</span>
                  <button
                    onClick={() => handleCopyText('+98 21 9109 9091')}
                    className="w-full flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-emerald-50/40 rounded-xl border border-slate-150 text-slate-700 font-bold transition-colors cursor-pointer text-left"
                  >
                    <Phone className="w-4 h-4 text-[#1a8a42] shrink-0" />
                    <span>+98 21 9109 9091</span>
                  </button>
                </div>

                {/* Fax */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Office Fax</span>
                  <button
                    onClick={() => handleCopyText('+98 21 9109 9091')}
                    className="w-full flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-150 text-slate-500 font-semibold transition-colors cursor-pointer text-left"
                  >
                    <Printer className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>+98 21 9109 9091</span>
                  </button>
                </div>

                {/* Corporate Mail */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Office E-mail</span>
                  <button
                    onClick={() => handleCopyText('info@gilafruit.com')}
                    className="w-full flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-emerald-50/40 rounded-xl border border-slate-150 text-slate-700 font-semibold transition-colors cursor-pointer text-left"
                  >
                    <Mail className="w-4 h-4 text-[#1a8a42] shrink-0" />
                    <span className="truncate">info@gilafruit.com</span>
                  </button>
                </div>

                {/* Support Mail */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Support Section</span>
                  <button
                    onClick={() => handleCopyText('support@gilafruit.com')}
                    className="w-full flex items-center gap-3 p-2.5 bg-slate-50 hover:bg-emerald-50/40 rounded-xl border border-slate-150 text-slate-600 font-semibold transition-colors cursor-pointer text-left"
                  >
                    <Building className="w-4 h-4 text-[#1a8a42] shrink-0" />
                    <span className="truncate">support@gilafruit.com</span>
                  </button>
                </div>

                {/* Corporate Address */}
                <div className="space-y-2.5 pt-3.5 border-t border-slate-100 font-sans text-[11px] text-slate-600">
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-[#1a8a42] shrink-0 mt-0.5" />
                    <div className="leading-tight">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Company Address</span>
                      <strong className="text-slate-800">Iran, Gilan Province, Astara</strong>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div className="leading-tight">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Warehouse Address</span>
                      <strong className="text-slate-700">Iran, Gilan, Talesh, Choobar city</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE ACCORDION LIST */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Inner Title & Fast Instant Search */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-150 pb-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1a8a42]/10 flex items-center justify-center text-[#1a8a42]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h2 className="font-display font-black text-[#01261d] text-lg">
                  Frequently asked questions
                </h2>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full sm:w-64">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setExpandedIndex(0);
                  }}
                  placeholder="Filter shipping & transit..."
                  className="w-full pl-9 pr-6 py-2 bg-white border border-slate-200 rounded-xl text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/30 focus:border-[#1a8a42] transition-colors font-semibold shadow-xs"
                />
              </div>
            </div>

            {/* Accordion Questions Component */}
            <div className="space-y-4">
              {filteredQuestions.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <h4 className="font-bold text-slate-800">No matching search shipping & delivery details</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    We could not locate matching items for &ldquo;{searchQuery}&rdquo;. Try typing terms like &ldquo;transportation&rdquo;, &ldquo;moscow&rdquo;, or &ldquo;cost&rdquo;.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 bg-[#1a8a42] text-white font-bold text-xs rounded-xl hover:bg-[#147034] transition-colors"
                  >
                    Clear Search Filter
                  </button>
                </div>
              ) : (
                filteredQuestions.map((item, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`bg-white rounded-2xl border transition-all duration-200 ${
                        isExpanded 
                          ? 'border-[#1a8a42]/35 shadow-md shadow-emerald-950/[0.015]' 
                          : 'border-slate-200 hover:border-slate-300'
                      } overflow-hidden`}
                    >
                      {/* Accordion Button Trigger */}
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className={`w-full p-5 text-left flex justify-between items-center gap-4 transition-colors cursor-pointer ${
                          isExpanded ? 'bg-[#1a8a42]/5' : 'hover:bg-slate-50/40'
                        }`}
                      >
                        <span className="font-display text-slate-900 text-xs sm:text-sm tracking-wide leading-snug flex items-start gap-3.5">
                          <span className={`font-mono font-bold text-[10px] uppercase text-left sm:text-xs px-2.5 py-0.5 rounded-md border shrink-0 select-none ${
                            isExpanded 
                              ? 'bg-[#1a8a42] text-white border-[#1a8a42]' 
                              : 'bg-emerald-55/60 text-[#1a8a42] border-emerald-100'
                          }`}>
                            Q{idx + 1}
                          </span>
                          <span className="font-black text-slate-900 text-xs sm:text-sm md:text-base pr-2 pt-0.5">
                            {item.question}
                          </span>
                        </span>
                        <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                          isExpanded ? 'bg-[#1a8a42]/10 text-[#1a8a42]' : 'bg-slate-50 text-slate-400'
                        }`}>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Smooth Animating Body */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/20">
                              <div className="pl-0 sm:pl-12 text-slate-655 font-sans leading-relaxed text-xs sm:text-sm text-slate-600 whitespace-pre-line space-y-2">
                                {item.answer}
                              </div>

                              {/* Copiable Technical Badges */}
                              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] sm:pl-12 text-slate-400 font-semibold gap-3">
                                <span className="flex items-center gap-1.5">
                                  <Lock className="w-3.5 h-3.5 text-[#1a8a42]" />
                                  <span>Official GilaFruit Shipping & Safety Standards</span>
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleCopyText(item.answer)}
                                  className="inline-flex items-center gap-1.5 text-[#1a8a42] hover:text-[#147034] bg-white px-2.5 py-1 rounded border border-slate-150 hover:border-slate-250 cursor-pointer shadow-2xs font-bold transition-all active:scale-[0.98]"
                                >
                                  <Copy className="w-3 h-3" />
                                  <span>Copy Explanation</span>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              )}
            </div>

            {/* --- ASK US MODULE (Custom Contact Block from Screenshot) --- */}
            <div className="p-8 bg-[#01261d] text-emerald-100 rounded-[28px] border border-[#1a8a42]/30 mt-10 relative overflow-hidden shadow-md">
              {/* Leaf pattern overlay */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#1a8a42]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-lg">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#1a8a42]/20 border border-[#1a8a42]/30 text-[#1a8a42] rounded-md text-[10px] font-bold uppercase tracking-wider font-mono">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Let\'s find it together</span>
                  </div>
                  <h3 className="font-display font-black text-white text-base sm:text-lg">
                    Ask Us
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Please, if you can\'t find your answer in the above, please send us your question, we will reply you as soon as possible.
                  </p>
                </div>

                <button
                  onClick={() => navigate('contact')}
                  className="px-6 py-3.5 bg-[#1a8a42] hover:bg-[#147034] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap active:scale-[0.98] shadow-sm flex items-center gap-2 shrink-0 cursor-pointer border-none"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Contact us</span>
                </button>
              </div>
            </div>

            {/* Back anchor link to main directory */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => navigate('faq')}
                className="inline-flex items-center gap-1.5 text-xs text-[#1a8a42] font-black hover:underline cursor-pointer bg-transparent border-none p-0"
              >
                <span>Go Back to General FAQs directory</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
