import React, { useState } from 'react';
import { 
  Globe, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles,
  Search,
  MessageCircle,
  Video,
  Users,
  Copy,
  Check,
  Clock,
  Compass,
  ArrowUpRight,
  ShieldAlert,
  Activity,
  Layers,
  Zap,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  badge: string;
  description: string;
  url: string;
  category: 'instant_chat' | 'video_media' | 'corporate_network';
  brandColor: string; // Tailwind solid or gradient background classes
  accentColor: string; // Icon or text highlight color
  audience: string; // B2B target focus
  svgIcon: React.ReactNode;
}

export default function SocialNetworksScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (id: string, text: string) => {
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
      setCopiedText(text);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.warn('Failed to copy text: ', err);
    }
  };

  const categories = [
    { id: 'all', title: 'All Platforms', count: 12, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'instant_chat', title: 'Direct Messaging', count: 4, icon: <MessageCircle className="w-3.5 h-3.5" /> },
    { id: 'video_media', title: 'Video & Entertainment', count: 5, icon: <Video className="w-3.5 h-3.5" /> },
    { id: 'corporate_network', title: 'Professional Networks', count: 3, icon: <Briefcase className="w-3.5 h-3.5" /> },
  ];

  const socialPlats: SocialPlatform[] = [
    {
      id: 'telegram',
      name: 'Telegram',
      handle: '@GilaFruit',
      url: 'https://t.me/GilaFruit',
      category: 'instant_chat',
      brandColor: 'bg-gradient-to-br from-sky-400 to-sky-600',
      accentColor: 'text-sky-600',
      badge: 'DAILY SPOT RATES & LOGISTICS',
      audience: 'Wholesale Buyers & Freight Forwarders',
      description: 'Join our highly active channel for daily updated bulk product rates, Astara customs crossing queues, and seasonal container availability matrices.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M11.944 0C5.344 0 0 5.344 0 12c0 6.656 5.344 12 11.944 12 6.656 0 12-5.344 12-12 0-6.656-5.344-12-12-12zm5.82 8.356l-1.928 9.07c-.14.64-.52.8-.1.53l-2.935-2.163-1.415 1.362c-.156.156-.288.288-.59.288l.21-2.986 5.435-4.912c.236-.21-.051-.326-.367-.116L9.362 13.12l-2.894-.904c-.63-.2-.64-.63.13-.93l11.31-4.358c.524-.2.98.113.846.772H17.76c.004.056.004.056.004.1z" stroke="none" />
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      handle: '+98 990 097 8002',
      url: 'https://wa.me/989900978002',
      category: 'instant_chat',
      brandColor: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      accentColor: 'text-emerald-600',
      badge: '24/7 WHOLESALE HOTLINE',
      audience: 'International Importers & Procurement Heads',
      description: 'Start secure immediate B2B negotiations about container bookings, phytosanitary requirements, and tailored organic packaging options directly with our team.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'GilaFruit-Co',
      url: 'https://linkedin.com',
      category: 'corporate_network',
      brandColor: 'bg-gradient-to-br from-blue-600 to-blue-800',
      accentColor: 'text-blue-700',
      badge: 'B2B PARTNERSHIPS',
      audience: 'Global Trade Partners & Business Advisers',
      description: 'Connect with our leadership team for corporate updates, agricultural innovation journals, cross-border investment dialogs, and official press releases.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram Feed',
      handle: '@GilaFruit',
      url: 'https://instagram.com/GilaFruit',
      category: 'video_media',
      brandColor: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
      accentColor: 'text-pink-600',
      badge: 'VISUAL HARVEST LOGS',
      audience: 'Freshness Enthusiasts & Global Retailers',
      description: 'Browse spectacular daily stories showcasing sorting machine cycles, modern packaging crates, active orchard inspections, and field-to-storage dispatches.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube Global',
      handle: 'GilaFruit Logistics',
      url: 'https://youtube.com',
      category: 'video_media',
      brandColor: 'bg-gradient-to-br from-rose-500 to-rose-700',
      accentColor: 'text-rose-600',
      badge: 'INDUSTRIAL WALKTHROUGHS',
      audience: 'Quality Inspectors & B2B Wholesalers',
      description: 'Access deep-dive video walkthroughs of our mechanical grading lines, automatic hydro-coolers, kiwi skin friction testers, and massive cold storage hubs.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518-.002-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.509 9.388.509 9.388.509s7.518 0 9.388-.509a2.97 2.97 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      id: 'vk',
      name: 'VKontakte',
      handle: 'gilafruit_ru',
      url: 'https://vk.com',
      category: 'corporate_network',
      brandColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
      accentColor: 'text-blue-650',
      badge: 'EURASIAN COMMERCE FORUM',
      audience: 'Russian & Central Asian Retail Chains',
      description: 'Our primary portal for CIS logistics coordinates, shipping bill logs, customs brokerage declarations, and regional wholesale partnerships.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M23.45 6.06c.15-.5-.1-.85-.8-.85h-2.35c-.6 0-.85.3-.1.85 0 0 2.35 5.5 5.15 9.05.6.6.85.8 1.2.8h1.65c.75 0h.45c-.45-.35-.85-1.1-.85-1.1S20.3 8.36 19.35 6.06c-.3-.75-.1-.85.6-.85h2.35c.65 0 .8.35.95.85 0 0 1.85 4.35 4.45 7.15.8.8 1.15 1.05 1.6 1.05h1c.6 0 .75-.25.75-.85V9.41c0-1.25-.35-1.85-1.45-1.85h-3.7c-.25 0-.45.2-.45.45V8.5c0 1.3 1.7 1.6 1.85 3.3v4.2c0 .9-.15 1.15-.55 1.15-.1 0-.3 0-.6-.15-1.35-.8-3.35-3.3-4.75-6.05-.25-.5-.5-.85-.1-.85z" />
        </svg>
      )
    },
    {
      id: 'rutube',
      name: 'RuTube Channel',
      handle: 'GilaFruit_Ru',
      url: 'https://rutube.ru',
      category: 'video_media',
      brandColor: 'bg-gradient-to-br from-[#0c2f4d] to-[#041a2c]',
      accentColor: 'text-slate-800',
      badge: 'CIS VIDEO STREAM',
      audience: 'Eurasian Cargo Receivers & Customs Brokers',
      description: 'Official Russian language video vault documentation for quarantine clearing inspections, multi-lane fruit sorting, and cooling-warehouse updates.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M3 3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm6 4.5v9l7.5-4.5L9 7.5z" />
        </svg>
      )
    },
    {
      id: 'skype',
      name: 'Skype Premium',
      handle: 'GilaFruit.Consultation',
      url: 'https://skype.com',
      category: 'instant_chat',
      brandColor: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      accentColor: 'text-indigo-600',
      badge: 'LIVE ORCHARD VIDEO CAST',
      audience: 'VIP Clients & Enterprise Accounts',
      description: 'Schedule private high-resolution video streams to inspect harvest quality, oversee pallet stacking, or finalize custom B2B supplier agreements.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M23.064 12.836c.07-.4.1-.8.1-1.2 0-5.8-4.7-10.5-10.5-10.5-.4 0-.8.03-1.2.1C10.364.436 8.964 0 7.464 0 3.364 0 0 3.364 0 7.464c0 1.5.436 2.9 1.236 4C1.164 11.864 1.1 12.264 1.1 12.664c0 5.8 4.7 10.5 10.5 10.5.4 0 .8-.03 1.2-.1 1.1.8 2.5 1.236 4 1.236 4.1 0 7.464-3.364 7.464-7.464 0-1.5-.4-2.9-1.2-4zm-11 5.8a12.809 12.809 0 01-4.7-1.1 1.218 1.218 0 01-.2-1.7 1.258 1.258 0 011.8-.2c1.7 1.1 3.5 1.4 4.5.6.8-.6.5-1.4-.4-1.8-1.5-.7-3.9-1.3-4.9-2.9a3.844 3.844 0 013.7-5.5 11.879 11.879 0 014.2 1 1.22 1.22 0 01.3 1.7 1.26 1.26 0 01-1.8.3c-1.4-.8-2.9-1.2-3.8-.5-.7.5-.4 1.2.4 1.6 1.9.9 4 1.5 4.9 3.1a3.834 3.834 0 01-3.1 5.7z" />
        </svg>
      )
    },
    {
      id: 'x',
      name: 'X Network',
      handle: '@GilaFruit_Co',
      url: 'https://x.com',
      category: 'corporate_network',
      brandColor: 'bg-gradient-to-br from-slate-800 to-slate-950',
      accentColor: 'text-slate-900',
      badge: 'AUTOMATED CARGO TELEMETRY',
      audience: 'Logistics Operators & Analysts',
      description: 'Follow our high-tempo feeds for real-time dispatch alerts, cross-docking schedules, weather impacts on transit routes, and commercial operations.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      id: 'aparat',
      name: 'Aparat Media',
      handle: 'gilafruit',
      url: 'https://aparat.com',
      category: 'video_media',
      brandColor: 'bg-gradient-to-br from-rose-600 to-rose-800',
      accentColor: 'text-rose-600',
      badge: 'DOMESTIC LOGISTICS HUBS',
      audience: 'Local Farmers & Packaging Experts',
      description: 'Watch detailed step-by-step videos of kiwi washing lines, custom plastic basket wrapping setups, packing cardboard box testing, and loading.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      )
    },
    {
      id: 'pinterest',
      name: 'Pinterest Profile',
      handle: 'gilafruit_export',
      url: 'https://pinterest.com',
      category: 'video_media',
      brandColor: 'bg-gradient-to-br from-red-500 to-red-700',
      accentColor: 'text-red-650',
      badge: 'BOX DESIGNS & PALETTES',
      audience: 'Supermarket Brands & Retail Specialists',
      description: 'Explore high-resolution visual boards for customized export boxes, modern branded labels, container placement designs, and pristine farm setups.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.63 11.16-.1-.95-.2-2.4.04-3.44l1.42-6.03s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.52.77 1.52 1.69 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.51 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.45 2.57-5.45 5.23 0 1.03.4 2.14.9 2.74.1.12.11.23.08.35l-.34 1.39c-.06.24-.18.29-.41.18-1.53-.71-2.48-2.94-2.48-4.73 0-3.85 2.8-7.39 8.07-7.39 4.24 0 7.53 3.02 7.53 7.05 0 4.21-2.65 7.6-6.33 7.6-1.24 0-2.4-.64-2.8-1.4l-.76 2.9c-.27 1.05-1 2.37-1.49 3.16C10.53 23.78 11.26 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook Global',
      handle: 'GilaFruit.Official',
      url: 'https://facebook.com',
      category: 'corporate_network',
      brandColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
      accentColor: 'text-blue-600',
      badge: 'GLOBAL OUTREACH HUB',
      audience: 'Inter-continental Supermarkets & Wholesalers',
      description: 'Our primary anchor for commercial milestones, corporate responsibility profiles, seasonal export events, and active networking dialogues worldwide.',
      svgIcon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ];

  const filteredPlats = socialPlats.filter(plat => {
    const matchesCategory = selectedCategory === 'all' || plat.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const nameMatch = plat.name.toLowerCase().includes(searchLower);
    const handleMatch = plat.handle.toLowerCase().includes(searchLower);
    const descMatch = plat.description.toLowerCase().includes(searchLower);
    const badgeMatch = plat.badge.toLowerCase().includes(searchLower);
    return matchesCategory && (nameMatch || handleMatch || descMatch || badgeMatch);
  });

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 relative font-sans transition-all duration-300 overflow-hidden pt-24 sm:pt-28 md:pt-[148px] pb-24 text-left">
      
      {/* Decorative Brand Spot Ambient Lights */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-emerald-50/30 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Modern Grid Overlay, highly subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a8a4205_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none -z-20 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Navigation Breadcrumbs Bar */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-8 border-b border-slate-100 pb-3" id="social-breadcrumb">
          <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-350" />
          <span className="text-emerald-900 font-bold">Social Networks</span>
        </div>

        {/* --- DYNAMIC NOTIFIED TOAST --- */}
        <AnimatePresence>
          {showToast && (
            <motion.div 
              initial={{ opacity: 0, y: -45, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white border border-emerald-500/30 text-[#01261d] px-6 py-3 rounded-full shadow-[0_12px_40px_rgba(1,38,29,0.08)] flex items-center gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#1a8a42]/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#1a8a42]" />
              </div>
              <span className="text-xs font-semibold tracking-wide">Copied Handle: <code className="text-[#1a8a42] ml-1 font-mono font-bold">{copiedText}</code></span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- 1. HERO HEADER AREA --- */}
        <motion.div 
          className="max-w-5xl space-y-4 mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[10px] sm:text-xs font-bold text-[#1a8a42] uppercase tracking-[0.15em] font-mono block">
            Media & Communication Directory
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-black text-[#01261d] tracking-tight leading-none mb-4">
            Our Digital <span className="text-[#1a8a42] italic font-serif">Trade Footprint</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Stay plugged directly into live wholesale prices, cold storage operations, customs updates, and shipping logs. 
            Connect instantly via our audited, verified network accounts to negotiate pricing or request documents.
          </p>

          {/* Quick Metrics Bar with high contrast but white details */}
          <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-150 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#1a8a42] animate-pulse" />
              <span>Response: <strong className="text-emerald-950">&lt; 15 mins</strong></span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-150 shadow-xs">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Active Channels: <strong className="text-emerald-950">12 Verified</strong></span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-slate-150 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              <span>Sectors Covered: <strong className="text-emerald-950">CIS, Russia, Gulf</strong></span>
            </div>
          </div>
        </motion.div>

        {/* --- 2. B2B ACTION SPOTLIGHTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Telegram Spotlight Card */}
          <motion.div 
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-white to-sky-50/20 border border-slate-200/80 hover:border-sky-200 shadow-sm hover:shadow-md transition-all group"
            id="spotlight-telegram"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-sky-200/20 rounded-full blur-2xl group-hover:bg-sky-200/30 transition-all duration-300 pointer-events-none" />
            
            <div className="flex flex-col justify-between h-full space-y-6 relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl text-white shadow-sm">
                  <Send className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 bg-sky-50 border border-sky-100 text-[10px] font-mono font-bold tracking-wider text-sky-700 uppercase rounded-full">
                  Instant Pricing Index
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#01261d] tracking-tight">
                  GilaFruit Verified Daily Rates
                </h3>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
                  Join our active broadcast stream to parse current cold storage inventories, Astara border clearance queues, and real-time commercial produce spot rates.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://t.me/GilaFruit" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_4px_12px_rgba(14,165,233,0.15)]"
                >
                  Join Channel
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy('telegram-vip', '@GilaFruit')}
                  className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-sky-500" />
                  @GilaFruit
                </button>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Spotlight Card */}
          <motion.div 
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[24px] p-8 bg-gradient-to-br from-white to-emerald-50/20 border border-slate-200/80 hover:border-emerald-250 shadow-sm hover:shadow-md transition-all group"
            id="spotlight-whatsapp"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-250/15 rounded-full blur-2xl group-hover:bg-emerald-250/25 transition-all duration-300 pointer-events-none" />
            
            <div className="flex flex-col justify-between h-full space-y-6 relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl text-white shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-[10px] font-mono font-bold tracking-wider text-emerald-800 uppercase rounded-full">
                  Direct VIP Negotiation
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#01261d] tracking-tight">
                  VIP Wholesale Account Manager
                </h3>
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed">
                  Have trade questions? Initiate custom private dialogs in English or Russian regarding export grades, sorting specs, phytosanitary paperwork, and cargo dispatching.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://wa.me/989900978002" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebd53] text-[#01261d] rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_4px_12px_rgba(37,211,102,0.15)]"
                >
                  Direct Chat
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy('whatsapp-vip', '+98 990 097 8002')}
                  className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-emerald-500" />
                  +98 990 097 8002
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- 3. FILTER & SEARCH CONTROL BRIDGE --- */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 mb-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Realtime Search Block */}
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search feeds, handles or target countries..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-[#1a8a42]/30 focus:border-[#1a8a42]/60 transition-all font-semibold"
              />
            </div>

            {/* Platform Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#1a8a42] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.title}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* --- 4. BENTO DIRECTORY GRID --- */}
        <AnimatePresence mode="popLayout">
          {filteredPlats.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-white rounded-3xl border border-dashed border-slate-250 p-16 text-center space-y-4 shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto border border-slate-100">
                <ShieldAlert className="w-5 h-5 text-amber-500 animate-bounce" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg">No Channels Found</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                We couldn&apos;t find any verified profiles fitting &ldquo;{searchQuery}&rdquo;. Please adjust your query words.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1a8a42] hover:bg-[#147034] text-white rounded-xl text-xs font-bold transition-transform active:scale-[0.98]"
              >
                Reset Filter
              </button>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filteredPlats.map((plat) => (
                <motion.div
                  key={plat.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[24px] border border-slate-200/70 overflow-hidden shadow-[0_8px_30px_rgb(1,38,29,0.015)] hover:shadow-[0_12px_44px_rgb(1,38,29,0.06)] transition-all flex flex-col justify-between group h-full"
                  id={`directory-card-${plat.id}`}
                >
                  {/* Top card banner heading */}
                  <div className="p-6 pb-4 bg-slate-50/50 relative flex items-center justify-between border-b border-slate-100">
                    
                    {/* Pulsing state indicator */}
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-full border border-slate-150 shadow-2xs">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[8px] text-emerald-800 font-bold uppercase tracking-wider font-mono">Verified Feed</span>
                    </div>

                    {/* Channel Branding Icon circle */}
                    <div 
                      className="p-2.5 rounded-xl text-white transition-all group-hover:scale-105 duration-300 shadow-sm"
                      style={{ background: plat.brandColor }}
                    >
                      {plat.svgIcon}
                    </div>
                  </div>

                  {/* Body text information */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      
                      {/* Industrial Segment Badge */}
                      <span className="inline-block text-[9px] font-mono tracking-wider text-emerald-800 uppercase bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                        {plat.badge}
                      </span>

                      {/* Header Title with correct depth typography */}
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-black text-[#01261d] text-base sm:text-lg tracking-tight group-hover:text-[#1a8a42] transition-colors">
                          {plat.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 font-semibold bg-slate-100/80 px-2   py-0.5 rounded border border-slate-200/50">
                          {plat.handle}
                        </span>
                      </div>

                      {/* Targeted business audiences */}
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <Users className="w-3.5 h-3.5 text-[#1a8a42] shrink-0" />
                        <span>Focus: <strong className="text-slate-800 font-bold">{plat.audience}</strong></span>
                      </div>

                      {/* Detailed narrative paragraph */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                        {plat.description}
                      </p>

                    </div>

                    {/* Link triggers / actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                      
                      {/* Copy code action */}
                      <button
                        type="button"
                        onClick={() => handleCopy(plat.id, plat.handle)}
                        title="Copy handle pointer"
                        className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-250 text-slate-500 hover:text-slate-900 rounded-xl transition-all cursor-pointer shrink-0"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>

                      {/* Primary Web Redirection Link */}
                      <a
                        href={plat.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-3.5 bg-slate-50 hover:bg-[#1a8a42] border border-slate-250 hover:border-[#1a8a42] text-slate-700 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-3xs active:scale-[0.98]"
                      >
                        <span>Explore Feed</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- 5. LOGISTICS INFRASTRUCTURE SEAL FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#01261d] rounded-[32px] p-8 sm:p-10 relative overflow-hidden text-left border border-[#1a8a42]/30 shadow-md text-emerald-100"
        >
          {/* Subtle green ambient graphic glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#1a8a42]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block">
                Enterprise Logistics Authentication
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight font-display">
                Secure & Verified Communication Channels
              </h3>
              <p className="text-xs text-emerald-100/85 leading-relaxed font-sans">
                All digital resources published here are certified components of the official Sabz Gostaran Gilan Fruit Co. 
                infrastructure. We adhere to rigorous verification procedures to prevent B2B phishing, ensuring your 
                freight manifests, border cargo reports, and contract queries remain secure and authentic.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 shrink-0">
              <div className="p-4 bg-emerald-950/40 border border-emerald-800/40 rounded-2xl flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="leading-tight">
                  <span className="text-[9px] text-emerald-400 block font-mono font-bold">RATE RESOLUTION</span>
                  <span className="font-bold text-xs text-white">Live Updates</span>
                </div>
              </div>

              <div className="p-4 bg-emerald-950/40 border border-emerald-800/40 rounded-2xl flex items-center gap-3">
                <Activity className="w-5 h-5 text-emerald-400 shrink-0 animate-pulse" />
                <div className="leading-tight">
                  <span className="text-[9px] text-emerald-400 block font-mono font-bold font-mono">SYSTEM STATUS</span>
                  <span className="font-bold text-xs text-white">100% Secure</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
