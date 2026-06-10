import React, { useState } from 'react';
import { 
  Sprout, 
  Layers, 
  Weight, 
  HelpCircle, 
  Briefcase, 
  Apple, 
  ChevronRight, 
  CheckCircle2, 
  FileSpreadsheet, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Coins,
  ShieldCheck,
  Globe,
  Plus,
  Minus,
  ChevronDown,
  Phone,
  Mail,
  User,
  Building,
  MapPin,
  FileText,
  Clock,
  Info,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { getLocalStorageData, saveLocalStorageData, STORAGE_KEYS } from '../utils/storage';
import { ContactMessage } from '../types';

export default function ProductPriceScreen() {
  // Navigation / Tab states
  const [selectedProduct, setSelectedProduct] = useState('Premium Hayward Kiwifruit');
  const [caliber, setCaliber] = useState('80-90g (Standard Class A)');
  const [packingType, setPackingType] = useState('Premium Single-layer Carton Box (3kg - 4kg)');
  const [quantity, setQuantity] = useState('20 Tons (1 container)');
  const [paymentTerms, setPaymentTerms] = useState('T/T (Telegraphic Transfer)');
  const [deliveryConditions, setDeliveryConditions] = useState('FOB Astara / Bandar Abbas');
  
  // Client personal details
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompanyPhone, setClientCompanyPhone] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+98');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  // Verification check
  const [verifiedRobot, setVerifiedRobot] = useState(false);
  const [isValidatingRobot, setIsValidatingRobot] = useState(false);

  // Accordion state
  const [showAvailability, setShowAvailability] = useState(true);

  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const productPresets = [
    'Premium Hayward Kiwifruit',
    'White & Violet Garlic (cured)',
    'Red & Gala Apples',
    'Golden & Red Onions',
    'Thomson Navel Oranges',
    'Roma Greenhouse Tomatoes'
  ];

  const caliberPresets = [
    '70-80g (Single layer)',
    '80-90g (Standard Class A)',
    '90-100g (Premium Large)',
    '100g+ (Elite Jumbo)',
    '50-70mm (Medium size)',
    '70-90mm (Export select)'
  ];

  const packingPresets = [
    'Premium Single-layer Carton Box (3kg - 4kg)',
    'Durable Double-layer Plastic Crate (8kg - 10kg)',
    'Classic Wooden Export Box (10kg)',
    'Bulk Octabins / Ventilated Bags (500kg)'
  ];

  const paymentPresets = [
    'T/T (Telegraphic Transfer) - 30% Advance, 70% against original documents',
    'L/C (Irrevocable Letter of Credit at sight)',
    'CAD (Cash Against Documents)',
    '100% Cash / Advance TT'
  ];

  const deliveryPresets = [
    'FOB Astara Terminal',
    'FOB Bandar Abbas Sea Port',
    'CIF Destination Port (Sea freight)',
    'DAP Destination Warehouse (Direct Truck Transit)'
  ];

  const countriesWithFlags = [
    { code: '+98', flag: '🇮🇷', name: 'Iran' },
    { code: '+7', flag: '🇷🇺', name: 'Russia' },
    { code: '+971', flag: '🇦🇪', name: 'UAE' },
    { code: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
    { code: '+375', flag: '🇧🇾', name: 'Belarus' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: '+1', flag: '🇺🇸', name: 'USA/Canada' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' }
  ];

  const handleVerifyRobot = () => {
    if (verifiedRobot) {
      setVerifiedRobot(false);
      return;
    }
    setIsValidatingRobot(true);
    setTimeout(() => {
      setIsValidatingRobot(false);
      setVerifiedRobot(true);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientCompany || !destinationCountry) {
      alert('Please fill out all required fields marked with * (Name, Company, Destination Country, and Email).');
      return;
    }

    if (!verifiedRobot) {
      alert('Please check the "I\'m not a robot" security verification.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const priceMsg = `[PRODUCT PRICE INQUIRY MATRIX]
• Product Name: ${selectedProduct}
• Sizing Caliber: ${caliber}
• Packing Preference: ${packingType}
• Volume Requested: ${quantity}
• Desired Destination Country: ${destinationCountry}
• Payment Terms Selected: ${paymentTerms}
• Shipping Delivery terms: ${deliveryConditions}
• Corporate Phone: ${clientCompanyPhone || 'N/A'}
• WhatsApp Contact: ${countryCode} ${clientPhone}
• Additional Terms Configured: ${additionalNotes || 'N/A'}`;

      const newMessage: ContactMessage = {
        id: 'msg_price_' + Math.random().toString(36).substring(2, 9),
        name: clientName,
        email: clientEmail,
        company: clientCompany,
        message: priceMsg,
        date: new Date().toISOString()
      };

      // Store in memory
      const currentMessages = getLocalStorageData<ContactMessage[]>(STORAGE_KEYS.MESSAGES, []);
      const updatedMessages = [newMessage, ...currentMessages];
      saveLocalStorageData(STORAGE_KEYS.MESSAGES, updatedMessages);

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset
      setClientName('');
      setClientCompany('');
      setDestinationCountry('');
      setClientEmail('');
      setClientCompanyPhone('');
      setClientPhone('');
      setAdditionalNotes('');
      setVerifiedRobot(false);
    }, 1500);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 pt-24 sm:pt-28 md:pt-[148px] pb-24 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb Nav Bar */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-8 border-b border-slate-100 pb-3" id="price-breadcrumb">
          <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-350" />
          <a href="#/contact" className="hover:text-emerald-800 transition-colors">Contact</a>
          <ChevronRight className="w-3 h-3 text-slate-350" />
          <span className="text-emerald-900 font-bold">Product Price Inquiry</span>
        </div>

        {/* Title Block Header */}
        <div className="max-w-4xl space-y-4 mb-12">
          <span className="text-[10px] sm:text-xs font-bold text-[#1a8a42] uppercase tracking-[0.15em] font-mono block">
            Freight Cost Inquiry Form
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#01261d] tracking-tight leading-tight">
            Price Inquiry of Fresh Fruits and <span className="text-emerald-700">Vegetables from Iran</span>?
          </h1>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-4xl">
            Easily get daily prices for Iranian <span className="text-[#1a8a42] font-semibold">fruits</span> and <span className="text-[#1a8a42] font-semibold">vegetables</span> and other Agricultural <span className="text-emerald-700 font-semibold">products</span> for any global destination. Simply complete our Product price inquiry form with the necessary details. Our export specialists will swiftly calculate and provide accurate CIF or FOB Price metrics matching current harvest seasons.
          </p>
        </div>

        {/* Main Grid Layout containing Sidebar (Left) and Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Sidebar (Width: 4/12 on large screens) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visual Card detailing Current Produce Market Rates */}
            <div className="relative rounded-[24px] overflow-hidden border border-[#1a8a42]/20 shadow-md group bg-[#01261d]" id="crop-promo-card">
              <div className="absolute inset-0 bg-[#00100c]/40 group-hover:bg-[#00100c]/25 transition-all duration-300 z-10"></div>
              
              {/* Background patterned mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#1a8a42_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>

              {/* Crop Hero image representation */}
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200"
                  alt="Iranian Agriculture Greenhouses and kiwis"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Iranian Flag Badge representing Authenticity */}
                <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#01261d]/90 text-white rounded-full text-[10px] font-extrabold tracking-wider border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  AUTHENTIC ORIGIN
                </span>
              </div>

              {/* Text overlay bottom in image card */}
              <div className="p-6 relative z-20 space-y-3 text-left">
                <h3 className="font-display font-black text-amber-400 text-lg sm:text-xl uppercase tracking-wider">
                  CURRENT PRODUCE MARKET PRICES
                </h3>
                <p className="text-xs text-emerald-100/90 leading-relaxed font-sans">
                  Direct supply from Choobar orchards & Astara grading complexes. Class A kiwi, curing garlic bulbs, high-brix apples palletized for swift refrigeration.
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-emerald-300/85">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    BRIX RATIO CERTIFIED
                  </span>
                  <span>EAEU STANDARDS</span>
                </div>
              </div>
            </div>

            {/* Premium Collapsible Accordion Card: "Product Availability Time" */}
            <div className="bg-white rounded-[24px] border border-slate-200/85 shadow-sm overflow-hidden text-left" id="availability-accordion">
              
              <button
                type="button"
                onClick={() => setShowAvailability(!showAvailability)}
                className="w-full bg-[#1a8a42] hover:bg-[#157035] text-white p-4 font-display font-black text-xs uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Apple className="w-4 h-4 text-amber-300" />
                  Product Availability Time
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAvailability ? 'rotate-180' : ''}`} />
              </button>

              {showAvailability && (
                <div className="p-5 space-y-4 border-t border-slate-100 bg-[#fbfdfa]/50 text-xs text-slate-655 leading-relaxed font-sans animate-slide-down">
                  <p>
                    GilaFruit has developed an online system on its website to provide information about the harvest seasons and availability of authentic Iranian fruits and vegetables.
                  </p>
                  <p>
                    You can access the latest information by visiting the <span className="font-bold text-emerald-800">"Harvest Season"</span> section in our header menu, or by contacting our support team directly.
                  </p>
                  <p className="bg-emerald-50/70 text-emerald-950 p-3 rounded-xl border border-emerald-100/50 font-medium">
                    This automated feature allows you to obtain detailed information about product availability and coordinates the best time to purchase before making any commercial transactions, enabling you to plan accordingly.
                  </p>
                  
                  {/* Anchor link direct back to Contact */}
                  <a
                    href="#/contact"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-[#01261d] hover:bg-emerald-900 text-amber-400 font-extrabold text-[10px] uppercase tracking-wider rounded-lg transition-all"
                  >
                    <Phone className="w-3 h-3" />
                    Contact us
                  </a>
                </div>
              )}
            </div>

            {/* Quick Helpline widget */}
            <div className="bg-[#f0f4f1]/50 border border-emerald-900/10 p-6 rounded-3xl text-left space-y-3.5">
              <h4 className="font-display font-black text-slate-900 text-sm">Need Help? Chat Instantly</h4>
              <p className="text-xs text-slate-500 leading-normal">
                If you prefer completing details over secure instant messaging apps, click below to open GilaFruit Direct Line.
              </p>
              <a 
                href="https://wa.me/989900978002"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <div className="p-1 px-2.5 bg-emerald-100 text-emerald-800 rounded-lg flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </div>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: The Luxury Form Card (Width: 8/12 on large screens) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[32px] border border-slate-205 shadow-xl p-6 sm:p-10 space-y-8 relative">
              
              {/* Form title band */}
              <div className="flex items-start gap-4 border-b border-slate-105 pb-5">
                <span className="p-3 bg-[#1a8a42] text-white rounded-2xl shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div className="space-y-0.5 text-left">
                  <h2 className="font-display font-black text-slate-900 text-xl sm:text-2xl">
                    Price Inquiry Form
                  </h2>
                  <p className="text-xs text-slate-500">
                    Input your targeted volumes and destination terminals to receive live quote cards matching today's border rates.
                  </p>
                </div>
              </div>

              {isSuccess ? (
                /* Success Message */
                <div className="py-12 text-center space-y-5">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-900 text-xl">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-650 max-w-md mx-auto leading-relaxed">
                    We registered your customized伊朗 agricultural crop specifications. A bilingually fluent GilaFruit commercial director will contact you with current FOB Astara and dynamic CIF shipping rate matrix cards within 12 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#01261d] hover:bg-emerald-950 text-amber-400 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Raise Another Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Form content */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* 2-Column Responsive Form Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    
                    {/* 1. Full Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Your full name <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Johnathan Doe"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 2. Company Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Company Name <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <Building className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={clientCompany}
                          onChange={(e) => setClientCompany(e.target.value)}
                          placeholder="e.g. EvroAlliance CJSC"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 3. Destination Country */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Destination Country <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <Globe className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={destinationCountry}
                          onChange={(e) => setDestinationCountry(e.target.value)}
                          placeholder="e.g. Russian Federation, Uzbekistan, UAE"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 4. Product Name Selection Option */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Product name <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          {productPresets.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* 5. Product Caliber sizes */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Product caliber or size <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={caliber}
                          onChange={(e) => setCaliber(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          {caliberPresets.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* 6. Type of Packaging details */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Type of packaging <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={packingType}
                          onChange={(e) => setPackingType(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          {packingPresets.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* 7. Cargo quantity weight */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Order quantity <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          <option value="20 Tons (1 container)">20 Metric Tons (Approx. 1 x 40ft Reefer)</option>
                          <option value="40 Tons (2 containers)">40 Metric Tons (Approx. 2 x Reefer Containers)</option>
                          <option value="100 Tons (5 containers)">100 Metric Tons (Bulk Shipment block)</option>
                          <option value="Other Custom Sizing (State in description)">Other Custom volumes (Please state in description)</option>
                        </select>
                      </div>
                    </div>

                    {/* 8. Payment conditions terms */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Payment terms <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={paymentTerms}
                          onChange={(e) => setPaymentTerms(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          {paymentPresets.map((pt) => (
                            <option key={pt} value={pt}>{pt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* 9. Delivery conditions Incoterms */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Delivery conditions <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={deliveryConditions}
                          onChange={(e) => setDeliveryConditions(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          {deliveryPresets.map((dp) => (
                            <option key={dp} value={dp}>{dp}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* 10. Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Email <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="e.g. wholesale@buyer.com"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 11. Company phone */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Company phone
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          value={clientCompanyPhone}
                          onChange={(e) => setClientCompanyPhone(e.target.value)}
                          placeholder="e.g. +7 495 123 4567"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 12. Phone number connected to WhatsApp */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Phone number connected to WhatsApp <span className="text-amber-600">*</span>
                      </label>
                      <div className="flex gap-2">
                        {/* Custom Country flag dropdown selector code */}
                        <div className="relative">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="px-2.5 py-2.5 bg-[#f8faf7] border border-slate-205 rounded-xl text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 cursor-pointer flex items-center"
                          >
                            {countriesWithFlags.map((cf) => (
                              <option key={cf.flag + cf.code} value={cf.code}>
                                {cf.flag} {cf.code}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="990 097 8002"
                          className="flex-1 px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-mono placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                  </div>

                  {/* 13. Large description box */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                      Description & Custom Requirements
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-slate-400">
                        <FileText className="w-4 h-4" />
                      </span>
                      <textarea
                        rows={4}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="State any customized phytosanitary protocols, exact transit schedules, sorting requests, or priority harbor gates here..."
                        className="w-full pl-9 pr-4 py-3 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-850 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* 14. Beautiful reCAPTCHA check simulation */}
                  <div className="bg-[#fcfdfa] border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-xs max-w-sm" id="recaptcha-card">
                    <div className="flex items-center gap-3 select-none">
                      <button
                        type="button"
                        onClick={handleVerifyRobot}
                        className={`w-6 h-6 rounded border transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer ${
                          verifiedRobot 
                            ? 'bg-emerald-600 border-emerald-700 text-white shadow-xs' 
                            : 'border-slate-300 bg-white hover:border-slate-450'
                        }`}
                        disabled={isValidatingRobot}
                      >
                        {isValidatingRobot ? (
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-400 border-t-transparent animate-spin"></span>
                        ) : verifiedRobot ? (
                          <span className="font-bold text-xs">✓</span>
                        ) : null}
                      </button>
                      <span className="text-xs font-semibold text-slate-700">I'm not a robot</span>
                    </div>

                    <div className="flex flex-col items-center leading-none text-right">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-7 h-7 object-contain opacity-80"
                      />
                      <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest block pt-0.5">reCAPTCHA</span>
                      <span className="text-[7px] text-slate-350 hover:underline cursor-pointer pt-0.5">Privacy • Terms</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1a8a42] hover:bg-[#157035] text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        Compiling Trade Quotation...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>

                  {/* Footer trade labels */}
                  <div className="pt-2 flex items-center justify-center gap-6 text-[10px] text-slate-400 font-bold font-mono uppercase border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      SECURE SSL ENCRYPTED
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-[#1a8a42]" />
                      B2B DEPT EST. 2001
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
