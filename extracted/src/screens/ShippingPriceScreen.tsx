import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Ship, 
  Thermometer, 
  Navigation, 
  Layers, 
  HelpCircle, 
  Send,
  Plane,
  ArrowRight,
  ShieldCheck,
  Compass,
  Briefcase,
  ExternalLink,
  PhoneCall,
  ChevronRight,
  ChevronDown,
  User,
  Building,
  Mail,
  Phone,
  FileText,
  Activity,
  Globe,
  Plus,
  Minus
} from 'lucide-react';
import { getLocalStorageData, saveLocalStorageData, STORAGE_KEYS } from '../utils/storage';
import { ContactMessage } from '../types';

export default function ShippingPriceScreen() {
  // Navigation / Input states
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('Premium Hayward Kiwifruit');
  const [productWeight, setProductWeight] = useState('20 Tons (1 container)');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+7');
  const [clientWhatsApp, setClientWhatsApp] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Security check reCAPTCHA states
  const [verifiedRobot, setVerifiedRobot] = useState(false);
  const [isValidatingRobot, setIsValidatingRobot] = useState(false);

  // Sidebar interactive states
  const [showFreightRates, setShowFreightRates] = useState(true);

  // Submission control statuses
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

  const weightPresets = [
    '20 Tons (1 container)',
    '40 Tons (2 containers)',
    '100 Tons (5 containers)',
    'Other Custom Weight (details inside description)'
  ];

  const countriesWithFlags = [
    { code: '+7', flag: '🇷🇺', name: 'Russia' },
    { code: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
    { code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: '+971', flag: '🇦🇪', name: 'UAE' },
    { code: '+375', flag: '🇧🇾', name: 'Belarus' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+98', flag: '🇮🇷', name: 'Iran' },
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
    if (!clientName || !clientEmail || !clientCompany || !destinationCountry || !destinationCity) {
      alert('Please fill out all required fields marked with * (Name, Company, Destination Country & City, and Email).');
      return;
    }

    if (!verifiedRobot) {
      alert('Please complete the reCAPTCHA human security check first.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const shippingInquiryMsg = `[SHIPPING FREIGHT INQUIRY]
• Destination Country: ${destinationCountry}
• Destination City: ${destinationCity}
• Cargo Product: ${selectedProduct}
• Weight / Volumetrics: ${productWeight}
• Full Unloading Address: ${destinationAddress || 'N/A'}
• Company Registered Phone: ${companyPhone || 'N/A'}
• WhatsApp: ${countryCode} ${clientWhatsApp}
• Logistics Specifics: ${additionalNotes || 'N/A'}`;

      const newMessage: ContactMessage = {
        id: 'msg_shipping_' + Math.random().toString(36).substring(2, 9),
        name: clientName,
        email: clientEmail,
        company: clientCompany,
        message: shippingInquiryMsg,
        date: new Date().toISOString()
      };

      // Store in memory
      const currentMessages = getLocalStorageData<ContactMessage[]>(STORAGE_KEYS.MESSAGES, []);
      const updatedMessages = [newMessage, ...currentMessages];
      saveLocalStorageData(STORAGE_KEYS.MESSAGES, updatedMessages);

      setIsSubmitting(false);
      setIsSuccess(true);

      // Clear fields
      setClientName('');
      setClientCompany('');
      setDestinationCountry('');
      setDestinationCity('');
      setDestinationAddress('');
      setClientEmail('');
      setCompanyPhone('');
      setClientWhatsApp('');
      setAdditionalNotes('');
      setVerifiedRobot(false);
    }, 1500);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 pt-24 sm:pt-28 md:pt-[148px] pb-24 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs Bar */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-8 border-b border-slate-100 pb-3" id="shipping-breadcrumb">
          <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-350" />
          <a href="#/contact" className="hover:text-emerald-800 transition-colors">Contact</a>
          <ChevronRight className="w-3 h-3 text-slate-350" />
          <span className="text-emerald-900 font-bold">Shipping Price Inquiry</span>
        </div>

        {/* Header Block Title Area */}
        <div className="max-w-4xl space-y-4 mb-12">
          <span className="text-[10px] sm:text-xs font-bold text-[#1a8a42] uppercase tracking-[0.15em] font-mono block">
            Freight Cost Inquiry Form
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#01261d] tracking-tight leading-tight">
            Are you looking to export fresh fruits and <span className="text-emerald-700">vegetables from Iran</span>?
          </h1>
          <p className="text-slate-655 text-sm sm:text-base leading-relaxed max-w-4xl">
            Easily obtain accurate shipping price quotes for your fruits and vegetables from Iran to anywhere globally using this page. Simply fill out the freight cost inquiry form and provide the necessary details. Our experts will calculate the shipping price based on <span className="text-[#1a8a42] font-semibold">product</span> type, weight, destination, and other factors, providing a quote quickly. For example, for shipping costs to Russia, complete the <span className="text-emerald-700 font-semibold">freight cost inquiry</span> form for a detailed shipping price inquiry and cost breakdown for your fruits and vegetables, including specific shipping costs to Russia.
          </p>
        </div>

        {/* Split Grid Area (Sidebar vs. Forms Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* SIDEBAR BLOCK (Width: 4/12) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visual Card with World-Class Driver and Reefer Truck */}
            <div className="relative rounded-[24px] overflow-hidden border border-[#1a8a42]/20 shadow-md group bg-[#01261d]" id="driver-promo-card">
              <div className="absolute inset-0 bg-[#00100c]/45 group-hover:bg-[#00100c]/30 transition-all duration-300 z-10"></div>
              
              {/* Pattern container */}
              <div className="absolute inset-0 bg-[radial-gradient(#1a8a42_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>

              {/* Photo component */}
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern cold storage transportation truck"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Certified Driver Tag */}
                <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#01261d]/90 text-white rounded-full text-[10px] font-extrabold tracking-wider border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#1a8a42] animate-ping"></span>
                  WORLD-CLASS DRIVERS
                </span>
              </div>

              {/* Text content details */}
              <div className="p-6 relative z-20 space-y-3 text-left">
                <h3 className="font-display font-black text-amber-400 text-lg sm:text-xl uppercase tracking-wider">
                  WITH WORLD-CLASS DRIVERS
                </h3>
                <p className="text-xs text-emerald-100/90 leading-relaxed font-sans">
                  Direct transport management connecting astara custom borders, Russia, Moscow Food City hub, Belarus, Kazakhstan, and UAE ports.
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-emerald-350/90">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    THERMO-MONITORED
                  </span>
                  <span>ESTABLISHED 2001</span>
                </div>
              </div>
            </div>

            {/* Collapsible Accordion Element: "Daily Freight Rates List" */}
            <div className="bg-white rounded-[24px] border border-slate-200/85 shadow-sm overflow-hidden text-left" id="freight-rates-accordion">
              
              <button
                type="button"
                onClick={() => setShowFreightRates(!showFreightRates)}
                className="w-full bg-[#1a8a42] hover:bg-[#157035] text-white p-4 font-display font-black text-xs uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-300" />
                  Daily Freight Rates List
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFreightRates ? 'rotate-180' : ''}`} />
              </button>

              {showFreightRates && (
                <div className="p-5 space-y-4 border-t border-slate-100 bg-[#fbfdfa]/50 text-xs text-slate-655 leading-relaxed font-sans animate-slide-down">
                  <p>
                    To stay updated on real-time transit freight rates for fruits and vegetables from Iranian origins, especially Astara and Bilesvar customs, GilaFruit has developed an online system on its website.
                  </p>
                  <p>
                    By visiting this section, you can access the latest rate changes daily, even hourly. This feature allows you to accurately estimate transportation costs before any transaction, enabling you to plan accordingly.
                  </p>
                  <p className="bg-emerald-50/70 text-emerald-950 p-3 rounded-xl border border-emerald-100/50 font-medium">
                    In this system, rates are continuously updated to provide you with precise and up-to-date information. Given market fluctuations and various factors affecting freight prices, this feature is highly beneficial for traders and companies importing fruits and vegetables from Iran.
                  </p>
                  
                  {/* Anchor link to direct support */}
                  <a
                    href="#/faq"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-[#01261d] hover:bg-emerald-900 text-amber-400 font-extrabold text-[10px] uppercase tracking-wider rounded-lg transition-all"
                  >
                    <Navigation className="w-3 h-3" />
                    Freight Rate List
                  </a>
                </div>
              )}
            </div>

            {/* Quick Hotline Support block */}
            <div className="bg-[#f0f4f1]/50 border border-emerald-900/10 p-6 rounded-3xl text-left space-y-3.5">
              <h4 className="font-display font-black text-slate-900 text-sm">Need immediate B2B aid?</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Speak directly with an Astara borders clearance advisor over secure WhatsApp chat.
              </p>
              <a 
                href="https://wa.me/989900978002"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <div className="p-1 px-2.5 bg-emerald-100 text-emerald-800 rounded-lg flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </div>
              </a>
            </div>

          </div>

          {/* FORM BLOCK CARD (Width: 8/12) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[32px] border border-slate-205 shadow-xl p-6 sm:p-10 space-y-8 relative">
              
              {/* Form title details header */}
              <div className="flex items-start gap-4 border-b border-slate-105 pb-5">
                <span className="p-3 bg-[#1a8a42] text-white rounded-2xl shrink-0">
                  <Send className="w-5 h-5 animate-pulse" />
                </span>
                <div className="space-y-0.5 text-left">
                  <h2 className="font-display font-black text-slate-900 text-xl sm:text-2xl">
                    Price Inquiry Form
                  </h2>
                  <p className="text-xs text-slate-500">
                    Input your corporate details and target customs port coordinates to receive guaranteed reefer truck rate quotes.
                  </p>
                </div>
              </div>

              {isSuccess ? (
                /* Success booking message block */
                <div className="py-12 text-center space-y-5">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-900 text-xl">
                    Freight Request Lodged!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-650 max-w-md mx-auto leading-relaxed">
                    Logistics specifications have been archived successfully. Our Astara customs clearance team is coordinating with border transit authorities to produce your shipping rate quote. We'll email you within 12 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#01261d] hover:bg-emerald-950 text-amber-400 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Raise Another Freight Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Form structure */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* 2-Column Inputs Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    
                    {/* 1. Full name */}
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
                          placeholder="e.g. Johnathan Miller"
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
                          placeholder="e.g. Vostok Agro LLC"
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
                          placeholder="e.g. Russia, UAE, Kazakhstan"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 4. Destination City */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Destination City <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={destinationCity}
                          onChange={(e) => setDestinationCity(e.target.value)}
                          placeholder="e.g. Moscow, Dubai, Saint Petersburg"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 5. Product Type details */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Product type <span className="text-amber-600 font-bold">*</span>
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

                    {/* 6. Product Weight */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Product weight <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={productWeight}
                          onChange={(e) => setProductWeight(e.target.value)}
                          className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all cursor-pointer"
                        >
                          {weightPresets.map((w) => (
                            <option key={w} value={w}>{w}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* 7. Complete Unloading Destination Address */}
                    <div className="space-y-1.5 text-left md:col-span-2">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                        Complete Destination Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <Navigation className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          value={destinationAddress}
                          onChange={(e) => setDestinationAddress(e.target.value)}
                          placeholder="e.g. Russia, Moscow Food City Center, Pavilion 14, warehouse block B"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 8. Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Email <span className="text-amber-600 font-bold">*</span>
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
                          placeholder="e.g. logisticshub@company.ru"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 9. Company Phone */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Company Phone
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          value={companyPhone}
                          onChange={(e) => setCompanyPhone(e.target.value)}
                          placeholder="e.g. +7 495 555-8020"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* 10. Phone connected to WhatsApp */}
                    <div className="space-y-1.5 text-left md:col-span-2">
                      <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase flex items-center gap-1">
                        Phone number connected to WhatsApp <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <div className="flex gap-2">
                        {/* Custom Dropdown list flag selector */}
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
                          value={clientWhatsApp}
                          onChange={(e) => setClientWhatsApp(e.target.value)}
                          placeholder="990 097 8002"
                          className="flex-1 px-4 py-2.5 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-800 font-mono placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                  </div>

                  {/* 11. Large description textarea */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                      Description & Custom border conditions
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-slate-400">
                        <FileText className="w-4 h-4" />
                      </span>
                      <textarea
                        rows={4}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        placeholder="State phytosanitary card specifications, priority customs border gates, desired thermostatic levels, or transit timing targets here..."
                        className="w-full pl-9 pr-4 py-3 bg-[#fdfdfd] border border-slate-205 rounded-xl text-xs sm:text-sm text-slate-850 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/35 focus:bg-white transition-all font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* 12. Elegant Google reCAPTCHA Simulator */}
                  <div className="bg-[#fcfdfa] border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-xs max-w-sm" id="shipping-recaptcha-card">
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
                        Dispatching Freight Inquiry...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>

                  {/* Foot trade labels */}
                  <div className="pt-2 flex items-center justify-center gap-6 text-[10px] text-slate-400 font-bold font-mono uppercase border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      SECURE SSL ENCRYPTED
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-[#1a8a42]" />
                      B2B LOGISTICS EST. 2001
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
