import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Printer, 
  MessageCircle, 
  ExternalLink,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: FAQItem[];
}

export default function FAQScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('products');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [copiedData, setCopiedData] = useState<string | null>(null);

  const categories: FAQCategory[] = [
    {
      id: 'products',
      title: 'Products & Quality Assurance',
      description: 'Learn about our agricultural standards, strict pesticide residue limitations, GlobalGAP audits, and temperature preservation systems.',
      icon: '🍎',
      items: [
        {
          question: 'What certifications do GilaFruit products hold?',
          answer: 'All GilaFruit export shipments strictly pass standard national and international phytosanitary examinations. We harvest from partner orchards holding valid organic registration and GlobalGAP frameworks, guaranteeing zero harmful chemical residues.'
        },
        {
          question: 'How do you preserve freshness during summer harvests or transit?',
          answer: 'We utilize shock hydro-cooling and automated climate tracking in our modern packing plants in Astara and Talesh. Cold storage humidity is regulated via state-of-the-art sensors, ensuring the crops enter standard static temperature controls immediately from orchards.'
        },
        {
          question: 'Do you verify the grade consistency of products like kiwi and oranges?',
          answer: 'Yes. Our integrated mechanical sorting line grades produce automatically based on laser weight sensors, exact skin diameter, and friction resistance. This ensures that only 100% uniform-size Grade I produce is packaged inside your shipment.'
        }
      ]
    },
    {
      id: 'packaging',
      title: 'Sorting & Custom Packaging',
      description: 'Explore our multi-layered carton designs, plastic basket arrangements, custom weight layouts, and bespoke wholesale brand printing.',
      icon: '📦',
      items: [
        {
          question: 'What standard packaging layouts can GilaFruit deliver?',
          answer: 'We offer single-layer cellular trays, double-layer nested boxes, reinforced telescopic carton crates, and lightweight ventilated plastic baskets. Weight limits per box are customizable from 3.5kg up to 10kg depending on standard recipient specifications.'
        },
        {
          question: 'Can you manufacture boxed shipments under our private labels (OEM)?',
          answer: 'Absolutely. We regularly design and manufacture private brand carton boxes with custom dimensions, client artwork layouts, trade registration labels, barcodes, and specified transit weight specs in high-volume offset printing.'
        },
        {
          question: 'Is GilaFruit packaging robust enough to prevent humidity damage?',
          answer: 'Yes. We utilize high-density water-resistant corrugated cardboard specifically built for high-moisture atmosphere (CA) environments inside transit reefer containers.'
        }
      ]
    },
    {
      id: 'ordering',
      title: 'Ordering & Payment Terms',
      description: 'Answers relating to minimum contract scales, documentation, customs clearances, and bank transactions.',
      icon: '💳',
      items: [
        {
          question: 'What is the minimum order quantity (MOQ) for wholesale contracts?',
          answer: 'Our standard export minimum order quantity is one full refrigerated container block or refrigerated semi-trailer block, which holds roughly 19 to 23 metric tons depending on the fruit type and pallet configuration.'
        },
        {
          question: 'What payment procedures do you operate for international sales?',
          answer: 'We operate under standard international B2B contracts. The typical procedure is an initial advanced T/T bank transfer to guarantee container slot bookings, with the remaining balance settled upon issuance of customs declarations and shipping bills.'
        },
        {
          question: 'Are seasonal fruit wholesale rates fixed throughout the year?',
          answer: 'Rates fluctuate according to international market harvest yields and regional logistics. However, once a formal proforma contract is executed with our sales desk, the prices are 100% guaranteed and locked.'
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Shipping & Trans-Border Logistics',
      description: 'Find transit times, border clearance details, temperature logger telemetry, and destinations.',
      icon: '🚛',
      items: [
        {
          question: 'Which international ports and hubs do you regularly ship to?',
          answer: 'We regularly dispatch fresh produce to the Russian Federation (Moscow, Saint Petersburg, Krasnodar, Novosibirsk), Belarus (Minsk), Kazakhstan, Georgia, Iraq, Azerbaijan, the UAE, and various GCC markets.'
        },
        {
          question: 'How do you monitor container temperature levels in real time?',
          answer: 'Every container is locked with standard digital temperature telemetry units. These monitor temperature, humidity, and door state variations, logging data continuously to verify the cold-chain chain of custody when inspecting customs papers.'
        },
        {
          question: 'What is the typical transit duration from Astara to Moscow and CIS regions?',
          answer: 'Our typical overland road transit timeline is approximately 4 to 6 working days from our Astara plant gate directly to central Moscow wholesale distribution centers, including fast-tracked customs clearance protocols.'
        }
      ]
    }
  ];

  // Flat list for search function
  const allQuestions = categories.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryTitle: cat.title, categoryId: cat.id }))
  );

  const filteredQuestions = searchQuery.trim() !== ''
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories.find(cat => cat.id === activeCategory)?.items || [];

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
      // Ignored
    }
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 relative font-sans transition-all duration-300 overflow-hidden pt-24 sm:pt-28 md:pt-[148px] pb-24 text-left">
      
      {/* Dynamic Ambient Blur Orbs */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Very subtle dots for high-end graphic texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a8a4204_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none -z-20 opacity-80" />

      {/* Copy Alert Toast */}
      <AnimatePresence>
        {copiedData && (
          <motion.div
            initial={{ opacity: 0, y: -45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#01261d] text-white border border-[#1a8a42]/30 px-6 py-3 rounded-full shadow-[0_12px_40px_rgba(1,38,29,0.08)] flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-[#1a8a42]/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-xs font-semibold">Copied: <code className="font-mono text-emerald-300 font-bold">{copiedData}</code></span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-8 border-b border-slate-100 pb-3" id="faq-breadcrumbs">
          <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
          <ChevronRightIcon className="w-3 h-3 text-slate-350" />
          <span className="text-emerald-950 font-bold">Frequently Asked Questions</span>
        </div>

        {/* --- HERO SPLIT PROSPECTUS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1a8a42]/10 border border-[#1a8a42]/20 text-[#1a8a42] rounded-full text-xs font-bold uppercase tracking-wider font-mono">
              <HelpCircle className="w-4 h-4" />
              <span>GilaFruit Help Center</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[#01261d] tracking-tight leading-none">
              Do you have any <span className="text-[#1a8a42] italic font-serif">Trade Questions?</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find immediate answers regarding GilaFruit crop standards, mechanical sorting parameters, customs clearances, reefer temperature indexes, and wholesale payment protocols.
            </p>

            <div className="relative max-w-lg pt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setExpandedIndex(0);
                }}
                placeholder="Search specific questions or keywords (e.g. kiwi, price, Astara)..."
                className="w-full pl-11 pr-4 py-3 bg-white hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/40 focus:border-[#1a8a42] transition-all font-semibold shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700 bg-slate-100 py-1 px-2.5 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats Highlight Card */}
          <div className="bg-[#01261d] text-emerald-100 p-8 rounded-[28px] border border-[#1a8a42]/30 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a8a42]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-emerald-950 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">Audited Security & Logistics</span>
              </div>
              <h3 className="text-xl font-black text-white leading-tight font-display">
                Dedicated International Trade Support
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed font-sans">
                Our team monitors freight lanes, manages customs protocols, and updates shipping logs to keep wholesale transactions simple and secure.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-emerald-950">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">Support Status</span>
                  <span className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online & Active
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">Languages Available</span>
                  <span className="font-bold text-xs text-white">English, Russian, Persian</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN INTERACTIVE CONTAINER SCREEN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: CONSULT AND CONTACT DIRECTORIES */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visual Consult Banner */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-6 border border-slate-200/80 shadow-xs relative overflow-hidden group">
              <span className="absolute top-2 right-2 text-slate-50 opacity-30 text-8xl font-black font-serif pointer-events-none select-none">
                GF
              </span>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-[#1a8a42]/10 rounded-2xl flex items-center justify-center text-[#1a8a42] font-black">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-slate-900 text-base leading-snug">
                  Ask any questions you have. We are ready to consult.
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Connect instantaneously via commercial hotlines. Get custom rate lists and transport guidelines.
                </p>
              </div>
            </div>

            {/* Official Contact Directory Details */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-5 shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 pb-2 border-b border-slate-100">
                Official Channels
              </h4>

              <div className="space-y-4 text-xs">
                
                {/* Whatsapp Responders */}
                <div className="group space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 px-2 rounded-md bg-[#25D366]/10 text-[#15a746] font-bold text-[9px] uppercase font-mono">Whatsapp</span>
                    <span className="text-[10px] text-slate-400 font-semibold font-mono">Fast Responder</span>
                  </div>
                  <div className="space-y-1">
                    <button 
                      onClick={() => handleCopyText('+98 990 097 8002')}
                      className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-bold transition-all"
                    >
                      <span>+98 990 097 8002</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => handleCopyText('+98 990 097 8005')}
                      className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-bold transition-all"
                    >
                      <span>+98 990 097 8005</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>
                </div>

                {/* Office Phones */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Office Telephone</span>
                  <button 
                    onClick={() => handleCopyText('+98 21 9109 9091')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-150 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1a8a42]" />
                    <span>+98 21 9109 9091</span>
                  </button>
                  <button 
                    onClick={() => handleCopyText('+98 21 9109 9091')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-150 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-500">Fax: +98 21 9109 9091</span>
                  </button>
                </div>

                {/* Emails */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">E-mail Correspondence</span>
                  <button 
                    onClick={() => handleCopyText('info@gilafruit.com')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-150 text-slate-700 font-semibold hover:bg-slate-50 transition-colors overflow-hidden"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#1a8a42] shrink-0" />
                    <span className="truncate">info@gilafruit.com</span>
                  </button>
                  <button 
                    onClick={() => handleCopyText('support@gilafruit.com')}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-150 text-slate-700 font-semibold hover:bg-slate-50 transition-colors overflow-hidden"
                  >
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">support@gilafruit.com</span>
                  </button>
                </div>

                {/* Corporate Address */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-[#1a8a42] shrink-0 mt-0.5" />
                    <div className="leading-tight">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Company Address</span>
                      <span className="font-bold text-slate-800">Iran, Gilan Province, Astara</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div className="leading-tight">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Warehouse Address</span>
                      <span className="font-semibold text-slate-600">Iran, Gilan, Talesh, Choobar City</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT PANEL: INTERACTIVE CATEGORIZED FAQS LIST */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category Navigation Tabs */}
            {!searchQuery && (
              <div className="flex flex-wrap gap-2 border-b border-slate-150 pb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setExpandedIndex(0);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#1a8a42] text-white shadow-sm'
                        : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <span className="text-sm">{cat.icon}</span>
                    <span>{cat.title}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Filter title indicator when searching */}
            {searchQuery && (
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-700">
                  Search results for &ldquo;<strong className="text-[#01261d]">{searchQuery}</strong>&rdquo;:
                </span>
                <span className="font-mono font-bold text-[#1a8a42] bg-white px-2.5 py-1 rounded-md border border-emerald-150">
                  {filteredQuestions.length} Matches
                </span>
              </div>
            )}

            {/* Questions list Accordion styling */}
            <div className="space-y-3">
              {filteredQuestions.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                    <HelpCircle className="w-6 h-6 text-slate-400" />
                  </div>
                  <h4 className="font-bold text-slate-800">No Matching Questions Found</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    We couldn&apos;t find any answers fitting your search query. Try typing simpler single words like &ldquo;kiwi&rdquo;, &ldquo;rate&rdquo;, or &ldquo;shipping&rdquo;.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 bg-[#1a8a42] hover:bg-[#147034] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Reset Search Filter
                  </button>
                </div>
              ) : (
                filteredQuestions.map((item, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-[0_4px_24px_rgba(1,38,29,0.01)] hover:shadow-[0_4px_24px_rgba(1,38,29,0.035)] transition-all"
                    >
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                      >
                        <span className="font-display font-medium text-slate-900 text-xs sm:text-sm leading-snug flex items-start gap-3">
                          <span className="text-[#1a8a42] font-mono font-bold text-xs sm:text-sm bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 shrink-0 select-none">
                            Q{idx + 1}
                          </span>
                          <span className="font-bold text-slate-900">{item.question}</span>
                        </span>
                        <div className="shrink-0 p-1 bg-slate-50 rounded-lg text-slate-500">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#1a8a42]" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 bg-slate-50/40">
                              <p className="pl-0 sm:pl-10 text-slate-655 font-sans">
                                {item.answer}
                              </p>
                              
                              {/* Option to print or report issue */}
                              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:pl-10 text-slate-400">
                                <span className="flex items-center gap-1">
                                  <LockIcon className="w-3B h-3.5 text-emerald-600" />
                                  <span>Verified GilaFruit Trade Counsel</span>
                                </span>
                                <button
                                  onClick={() => handleCopyText(item.answer)}
                                  className="text-emerald-800 hover:text-emerald-900 font-bold hover:underline bg-white px-2 py-1 rounded border border-slate-150 cursor-pointer"
                                >
                                  Copy Answer
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

            {/* Prompt Block to Direct user to contact if no answer matches */}
            <div className="p-8 bg-[#01261d] text-emerald-100 rounded-[28px] relative overflow-hidden border border-[#1a8a42]/30 mt-8 shadow-sm">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#1a8a42]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-lg">
                  <span className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-black block">Additional Inquiries</span>
                  <h4 className="font-display font-black text-white text-base sm:text-lg">
                    Cannot find your answers in the directory?
                  </h4>
                  <p className="text-xs text-emerald-100/80 leading-relaxed font-sans">
                    Our administrative sales specialist is standing by to resolve custom shipping manifests, phytosanitary requirements, or packaging specs.
                  </p>
                </div>

                <a
                  href="#/contact"
                  className="px-5 py-3 bg-[#1a8a42] hover:bg-[#147034] text-white rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm shrink-0 flex items-center gap-1.5 active:scale-[0.98]"
                >
                  <span>Contact Sales Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* --- SYSTEM LOGISTICS SEAL SECURE ACCREDITED FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-[32px] p-8 sm:p-10 relative overflow-hidden text-left border border-slate-800 shadow-md text-slate-300"
        >
          {/* Subtle green ambient graphic glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#1a8a42] uppercase block">
                Enterprise Logistics Authentication
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight font-display">
                Protected B2B Operations & Contract Guides
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                All digital resources published here are certified components of the official Sabz Gostaran Gilan Fruit Co. 
                infrastructure. We adhere to rigorous verification procedures to prevent B2B phishing, ensuring your 
                freight manifests, border cargo reports, and contract queries remain secure and authentic.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="leading-tight">
                  <span className="text-[9px] text-[#1a8a42] block font-mono font-bold">RATE RESOLUTION</span>
                  <span className="font-bold text-xs text-white">Live Updates</span>
                </div>
              </div>

              <div className="p-4 bg-slate-900/40 border border-[#1a8a42]/30 rounded-2xl flex items-center gap-3">
                <CheckCircle2Icon className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="leading-tight">
                  <span className="text-[9px] text-slate-400 block font-mono font-bold font-mono">SYSTEM STATUS</span>
                  <span className="font-bold text-xs text-white">100% Certified</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

// Minimalist local icons for specific items
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CheckCircle2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
