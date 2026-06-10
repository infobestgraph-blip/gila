import React from 'react';
import { ShieldCheck, Calendar, FileText, BookmarkCheck } from 'lucide-react';

interface CertificateDocProps {
  id: string;
  title: string;
  description: string;
  docNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  accentColor?: string;
  orgName?: string;
  standardName?: string;
  scope?: string;
  compact?: boolean;
}

export default function CertificateDoc({
  id,
  title,
  description,
  docNumber = 'TUV-998510-IR',
  issueDate = 'May 16, 2024',
  expiryDate = 'May 16, 2027',
  accentColor = '#1d4ed8', // Default blue
  orgName = 'TÜV CENTER CERTIFICATION',
  standardName = 'ISO 22000:2018',
  scope = 'Export of Fresh Fruit & Vegetables',
  compact = false,
}: CertificateDocProps) {

  // Generate a distinct visual logo pattern based on id
  const renderCertLogo = () => {
    const logoClass = compact ? "w-9 h-9" : "w-16 h-16";
    switch (id) {
      case 'c1': // Phytosanitary
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="44" stroke="#059669" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="39" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
            <path d="M50 20 C42 35, 34 50, 44 65 C54 80, 50 82, 50 82" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 20 C58 35, 66 50, 56 65 C46 80, 50 82, 50 82" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 35 L40 45" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 48 L62 55" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="80" r="3" fill="#10b981" />
          </svg>
        );
      case 'c2': // HACCP
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="44" stroke="#0ea5e9" strokeWidth="3" />
            <path d="M26 40 L42 62 L74 34" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <text x="50" y="80" fill="#0369a1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HACCP OK</text>
          </svg>
        );
      case 'c3': // ISO 22000
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="44" stroke="#d97706" strokeWidth="3" />
            <path d="M35 30 L65 30 M35 50 L65 50 M35 70 L65 70" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 20 L50 80" stroke="#b45309" strokeWidth="2" strokeDasharray="3,3" />
            <text x="50" y="44" fill="#78350f" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ISO</text>
            <text x="50" y="64" fill="#78350f" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">22000</text>
          </svg>
        );
      case 'c4': // ISO 9001
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="42" stroke="#dc2626" strokeWidth="4" />
            <path d="M25 50 C25 35, 35 25, 50 25 C65 25, 75 35, 75 50" stroke="#b91c1c" strokeWidth="4.5" fill="none" />
            <circle cx="50" cy="50" r="14" fill="#991b1b" />
            <text x="50" y="82" fill="#7f1d1d" fontSize="11" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">ISO 9001</text>
          </svg>
        );
      case 'c5': // ISO 14001
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="44" stroke="#16a34a" strokeWidth="3" />
            <path d="M50 18 C30 25, 30 55, 50 82 C70 55, 70 25, 50 18 Z" fill="#22c55e" fillOpacity="0.15" stroke="#15803d" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="#15803d" />
            <text x="50" y="14" fill="#14532d" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ENVIRONMENTAL</text>
          </svg>
        );
      case 'c6': // EAC
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <rect x="10" y="15" width="80" height="70" rx="4" fill="#1e293b" />
            <text x="50" y="58" fill="#ffffff" fontSize="30" fontWeight="black" textAnchor="middle" fontFamily="sans-serif" letterSpacing="-1">EAC</text>
            <rect x="20" y="68" width="60" height="4" fill="#ef4444" rx="1" />
          </svg>
        );
      case 'c7': // HALAL
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="44" stroke="#7c3aed" strokeWidth="3" />
            <path d="M60 30 C45 30, 32 42, 32 58 C32 74, 45 86, 60 86 C48 80, 42 68, 42 58 C42 48, 48 36, 60 30 Z" fill="#6d28d9" />
            <polygon points="58,40 61,48 69,48 62,53 65,61 58,56 51,61 54,53 47,48 55,48" fill="#a78bfa" />
            <text x="50" y="24" fill="#4c1d95" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HALAL</text>
          </svg>
        );
      default: // GS1 or general
        return (
          <svg viewBox="0 0 100 100" className={logoClass} fill="none">
            <circle cx="50" cy="50" r="42" stroke="#2563eb" strokeWidth="3" />
            <g transform="translate(15, 30)" stroke="#1e3a8a" strokeWidth="1.5">
              <line x1="5" y1="5" x2="5" y2="25" strokeWidth="2.5" />
              <line x1="10" y1="5" x2="10" y2="25" strokeWidth="1" />
              <line x1="14" y1="5" x2="14" y2="25" strokeWidth="3" />
              <line x1="20" y1="5" x2="20" y2="25" strokeWidth="1.5" />
              <line x1="25" y1="5" x2="25" y2="25" strokeWidth="2" />
              <line x1="30" y1="5" x2="30" y2="25" strokeWidth="1" />
              <line x1="35" y1="5" x2="35" y2="25" strokeWidth="4" />
              <line x1="42" y1="5" x2="42" y2="25" strokeWidth="1.2" />
              <line x1="47" y1="5" x2="47" y2="25" strokeWidth="2.5" />
              <line x1="52" y1="5" x2="52" y2="25" strokeWidth="3.5" />
              <line x1="58" y1="5" x2="58" y2="25" strokeWidth="1.5" />
              <line x1="64" y1="5" x2="64" y2="25" strokeWidth="3" />
            </g>
            <text x="50" y="78" fill="#1d4ed8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">GS1 TRACEABLE</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative w-full aspect-[1/1.414] bg-[#162a1a] rounded-[16px] md:rounded-[24px] shadow-xl border-[#0d1f11] ring-1 ring-emerald-800/20 group hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 overflow-hidden flex flex-col justify-between ${
      compact ? 'p-1.5 border-2' : 'p-2.5 sm:p-3 border-4'
    }`}>
      {/* Wooden Bevel reflection overlay */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[18px]" />
      
      {/* Golden metallic inner thin border pin-stripe */}
      <div className={`absolute rounded-[12px] md:rounded-[18px] border border-amber-500/40 pointer-events-none ${
        compact ? 'inset-1' : 'inset-1.5'
      }`} />

      {/* Real Parchment Paper Background */}
      <div className={`relative w-full h-full bg-[#fcf9f2] bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#fbf8f0] to-[#f4eee0] border border-amber-800/10 overflow-hidden shadow-inner flex flex-col justify-between ${
        compact ? 'rounded-[10px] p-2' : 'rounded-[16px] p-4 sm:p-5'
      }`}>
        
        {/* Subtle Watermark texture logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-56 h-56 fill-current text-emerald-950">
            <path d="M50 15 C20 30, 20 60, 50 85 C80 60, 80 30, 50 15 Z" />
          </svg>
        </div>

        {/* Top Header Border Ribbon & Design Scroll */}
        <div className="relative">
          {/* Certificate Corner Ornaments */}
          <div className="absolute -top-1 -left-1 text-[7px] text-amber-800/40 select-none">✥</div>
          <div className="absolute -top-1 -right-1 text-[7px] text-amber-800/40 select-none">✥</div>
          
          {/* Outer Header double lines */}
          <div className={`border-t border-b border-amber-800/20 py-0.5 ${compact ? 'mt-0' : 'mt-1 border-b-2 border-double'}`}>
            <div className={`text-amber-900/60 font-mono tracking-widest text-center uppercase font-bold ${
              compact ? 'text-[4.5px]' : 'text-[7px]'
            }`}>
              ★ {compact ? 'COMPLIANCE' : 'OFFICIAL COMPLIANCE PASSPORT COLD-CHAIN INTEGRITY'} ★
            </div>
          </div>
        </div>

        {/* Certificate Authority Organism & Main Logo */}
        <div className={`flex flex-col items-center relative z-10 ${compact ? 'mt-1 space-y-0.5' : 'mt-2.5 space-y-1.5'}`}>
          <div className="p-0.5 bg-white border border-amber-800/10 rounded-full shadow-xs">
            {renderCertLogo()}
          </div>
          <div className="text-center">
            <h5 className={`font-serif font-black tracking-wider text-amber-950 uppercase leading-none ${
              compact ? 'text-[7px]' : 'text-[10px]'
            }`}>
              {orgName}
            </h5>
            {!compact && (
              <span className="text-[6px] font-mono font-bold tracking-widest text-[#713f12] uppercase block mt-0.5">
                REGISTERED REEFER AUDITING ASSOCIATION
              </span>
            )}
          </div>
        </div>

        {/* Main Certificate Title Calligraphy */}
        <div className="text-center my-1 relative z-10">
          {!compact && (
            <span className="text-[7px] italic font-serif text-[#78350f] block leading-none mb-1">
              This certifies that the food-chain workflow of
            </span>
          )}
          <h4 className={`font-serif font-extrabold text-[#0f172a] tracking-normal leading-normal select-all bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10 inline-block ${
            compact ? 'text-[8px]' : 'text-xs'
          }`}>
            Gila Fruit Co.
          </h4>
          {!compact && (
            <span className="text-[6px] text-[#451a03] font-mono tracking-tighter block mt-0.5 uppercase opacity-90">
              Astara Terminal, Gilan Province, Iran
            </span>
          )}
        </div>

        {/* Certificate Core Statement / Assessment */}
        <div className={`border-y border-dashed border-amber-800/20 text-center relative z-10 bg-[#fbf8f1]/55 backdrop-blur-3xs ${
          compact ? 'py-1 my-0.5' : 'py-2 my-1'
        }`}>
          {!compact && (
            <span className="text-[6px] text-[#451a03] uppercase tracking-wide block leading-none">
              Has been audited & found to strictly comply with:
            </span>
          )}
          <h3 className={`font-display font-black text-[#9f1239] leading-none uppercase tracking-wide select-all ${
            compact ? 'text-[10px] py-1' : 'text-base py-1.5'
          }`}>
            {standardName}
          </h3>
          {!compact && (
            <span className="text-[6.5px] font-sans font-medium text-slate-705 block leading-normal px-2 truncate" title={description}>
              {description}
            </span>
          )}
        </div>

        {/* Scope Detail */}
        <div className="px-1 text-center relative z-10">
          <span className={`uppercase font-mono tracking-widest text-slate-400 block leading-none ${
            compact ? 'text-[4.5px]' : 'text-[5.5px]'
          }`}>
            {compact ? 'QUALIFIED WORKFLOW' : 'Registered Processing Scope'}
          </span>
          <p className={`font-serif font-semibold text-emerald-950 italic mt-0.5 leading-tight truncate ${
            compact ? 'text-[6.5px]' : 'text-[8px]'
          }`}>
            "{scope}"
          </p>
        </div>

        {/* Footer Area: Signatures, Dates, QR codes & Security Seal stamps */}
        <div className={`grid grid-cols-3 gap-1 items-end border-t border-amber-800/10 text-left relative z-10 ${
          compact ? 'mt-0.5 pt-1' : 'mt-1 pt-2'
        }`}>
          
          {/* Calendar validity info */}
          <div className="space-y-0.5">
            {!compact && (
              <span className="text-[5px] uppercase font-mono font-bold tracking-tight text-slate-450 block leading-none">
                VALIDITY SYSTEM
              </span>
            )}
            <div className="flex items-center gap-0.5">
              <span className="text-[5px] font-mono font-bold text-slate-550 block leading-none">VAL:</span>
              <span className="text-[5.5px] font-mono text-[#0f172a] block tracking-tighter leading-none" title={`Issued: ${issueDate}`}>
                {issueDate.split(',')[1]?.trim() || issueDate}
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-[5px] font-mono font-bold text-red-700 block leading-none">EXP:</span>
              <span className="text-[5.5px] font-mono text-red-900 block tracking-tighter font-semibold leading-none" title={`Expires: ${expiryDate}`}>
                {expiryDate.split(',')[1]?.trim() || expiryDate}
              </span>
            </div>
          </div>

          {/* Hologram Stamp Seal inside Center bottom */}
          <div className="flex flex-col items-center justify-end h-full">
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Golden Badge Emblem */}
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.15)] relative">
                <BookmarkCheck className="w-2.5 h-2.5 text-emerald-950" />
              </div>
            </div>
            <span className="-mb-0.5 text-[4.5px] font-mono text-[#183a21] font-black tracking-tight mt-0.5 inline-block bg-emerald-500/10 px-0.5 rounded-xs uppercase leading-none">
              SEAL
            </span>
          </div>

          {/* Authority signature and code verification */}
          <div className="space-y-0.5 text-right flex flex-col items-end">
            <span className="text-[5.5px] font-mono text-[#7c2d12] font-semibold tracking-tighter block leading-none select-all">
              SECURED
            </span>
            
            {/* Elegant Signature Drawing representation */}
            <div className="h-2.5 w-8 relative flex items-center justify-end select-none opacity-85">
              <svg viewBox="0 0 50 15" className="w-full h-full stroke-blue-750 fill-none" strokeWidth="1.2">
                <path d="M5 12 C10 12, 12 3, 18 5 C24 7, 20 14, 28 8 C36 2, 40 10, 48 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
