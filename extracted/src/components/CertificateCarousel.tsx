import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, Shield, FileDown, Printer, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { Certificate } from '../types';
import CertificateDoc from './CertificateDoc';

interface CertificateCarouselProps {
  certificates: Certificate[];
}

interface EnhancedCertMeta {
  id: string;
  title: string;
  description: string;
  docNumber: string;
  issueDate: string;
  expiryDate: string;
  accentColor: string;
  orgName: string;
  standardName: string;
  scope: string;
}

// 8 Premium pre-designed certificates to look extremely realistic
const ENHANCED_CERTS: EnhancedCertMeta[] = [
  {
    id: 'c1',
    title: 'Phytosanitary Health & Quarantine Permit',
    description: 'Issued by the Plant Protection Organization, verifying complete absence of pests, chemical residues, or mold.',
    docNumber: 'IR-PPO-3849103',
    issueDate: 'May 16, 2024',
    expiryDate: 'May 16, 2027',
    accentColor: '#059669',
    orgName: 'IRAN PLANT PROTECTION CORP',
    standardName: 'SPS INTER-COMPLIANCE',
    scope: 'Inspection, Sorting, Packaging & Outbound Transit Quarantine Clearances'
  },
  {
    id: 'c2',
    title: 'HACCP Food Safety Certificate',
    description: 'International Hazard Analysis Critical Control Point standard compliance, covering our entire sorting, packing and transit pipeline.',
    docNumber: 'EU-HACCP-202495',
    issueDate: 'May 16, 2024',
    expiryDate: 'May 16, 2027',
    accentColor: '#0ea5e9',
    orgName: 'TÜV CENTER CERTIFICATION',
    standardName: 'HACCP INTER-DIRECTIVE',
    scope: 'Mechanical Fruit Grading, Dynamic Weight Calibrator & Reefer Container Freight'
  },
  {
    id: 'c3',
    title: 'ISO 22000:2018 Management System',
    description: 'Confirms that GilaFruit complies with the premier global food chain safety management requirements.',
    docNumber: 'CH-ISO-22000-88',
    issueDate: 'May 16, 2024',
    expiryDate: 'May 16, 2027',
    accentColor: '#d97706',
    orgName: 'EURO-UNION CERT CENTER',
    standardName: 'ISO 22000:2018',
    scope: 'Multi-Chamber CA Cold Preservation, Sorting & Packaging of Fresh Agroproducts'
  },
  {
    id: 'c4',
    title: 'ISO 9001:2015 Quality Management',
    description: 'Global standard validation of systematic traceability, strict product verification and management performance optimization.',
    docNumber: 'TUV-QMS-9001-2026',
    issueDate: 'June 02, 2024',
    expiryDate: 'June 02, 2027',
    accentColor: '#dc2626',
    orgName: 'TÜV CENTER CERTIFICATION',
    standardName: 'ISO 9001:2015 QMS',
    scope: 'Administrative Export Sourcing, Farm-To-Table Packaging & Border Transit Tracking'
  },
  {
    id: 'c5',
    title: 'ISO 14001:2015 Environmental System',
    description: 'Certified environmental compliance on green agricultural waste reduction, eco-friendly grading, and water filtration recovery.',
    docNumber: 'SGS-ENV-14001-99',
    issueDate: 'June 18, 2024',
    expiryDate: 'June 17, 2027',
    accentColor: '#16a34a',
    orgName: 'SGS GLOBAL AUDIT ASSOC',
    standardName: 'ISO 14001:2015',
    scope: 'Zero-Waste Organic Soil Enrichment & Clean Air Controlled Storage Filters'
  },
  {
    id: 'c6',
    title: 'EAC Eurasian Customs Declaration',
    description: 'EAEU Uniform Customs compliance passport, permitting express border clearance through Belarus and Russian Customs Checkpoints.',
    docNumber: 'EAC-RU-BY-KG-9201',
    issueDate: 'April 10, 2024',
    expiryDate: 'April 09, 2027',
    accentColor: '#1e293b',
    orgName: 'INTERKOM CUSTOM UNION',
    standardName: 'EAC EAEU CUSTOM UNION',
    scope: 'Express Transit Certification across Astara-Samur-Derbent Truck Terminals'
  },
  {
    id: 'c7',
    title: 'HALAL Islamic Food Standard',
    description: 'Verified Islamic food processing norms, safeguarding hygienic surface rinsing, non-alcohol sanitization, and organic purity.',
    docNumber: 'HL-MEA-293810',
    issueDate: 'July 11, 2024',
    expiryDate: 'July 10, 2027',
    accentColor: '#7c3aed',
    orgName: 'HALAL FOOD COUNCIL',
    standardName: 'HALAL REGULATORY NORMS',
    scope: 'Hygienic Washing of Fresh Fruits & Chemical-Free Sorting Procedures'
  },
  {
    id: 'c8',
    title: 'GS1 Global Barcode Registry',
    description: 'Registered company unique barcode tracking system to allow immediate scanning, tracing and retail verification worldwide.',
    docNumber: 'GS1-GLOBAL-92813',
    issueDate: 'May 01, 2024',
    expiryDate: 'May 01, 2029',
    accentColor: '#2563eb',
    orgName: 'GS1 GLOBAL REGISTRY SYSTEM',
    standardName: 'GS1 GTIN-13 SYSTEM',
    scope: 'Export Shipment Traceability Barcoding & Unique Retail Box GTIN Assignment'
  }
];

export default function CertificateCarousel({ certificates }: CertificateCarouselProps) {
  // Let's combine standard certificates list with our luxurious custom designs
  const mergedCerts = ENHANCED_CERTS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<EnhancedCertMeta | null>(null);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // Check if screen width to change slider page count
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(6);
      }
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const maxIndex = Math.max(0, mergedCerts.length - visibleCount);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Drag handlers for mouse/touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setDragOffset(e.touches[0].clientX - dragStart);
  };

  const handleTouchEnd = () => {
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart !== 0) {
      setDragOffset(e.clientX - dragStart);
    }
  };

  const handleMouseUp = () => {
    if (dragStart !== 0) {
      if (dragOffset > 50) {
        prevSlide();
      } else if (dragOffset < -50) {
        nextSlide();
      }
    }
    setDragStart(0);
    setDragOffset(0);
  };

  // Handle printing
  const handlePrint = (cert: EnhancedCertMeta) => {
    const printContent = document.getElementById(`print-cert-${cert.id}`);
    if (!printContent) return;

    const win = window.open('', '_blank');
    if (!win) return;

    win.document.write(`
      <html>
        <head>
          <title>${cert.title} - GilaFruit</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @media print {
              body { margin: 0; padding: 20px; background: white; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen">
          <div class="max-w-2xl w-full">
            ${printContent.innerHTML}
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(() => { window.close(); }, 500);
            }
          </script>
        </body>
      </html>
    `);
    win.document.close();
  };

  const gap = visibleCount === 6 ? 12 : (visibleCount === 3 ? 16 : 0);
  const itemWidth = `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`;

  return (
    <div className="w-full relative py-8 select-none">
      
      {/* Decorative subtitle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="space-y-1 text-left">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-100 text-emerald-805 rounded-lg">
              <Award className="w-5 h-5 text-emerald-800" />
            </span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">
              Official Quality Badges
            </span>
          </div>
          <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl mt-1">
            Global Compliance Passports (Slider)
          </h3>
          <p className="text-xs text-slate-500 leading-none">
            Swipe or use arrow keys to browse our official certified standards. Click to inspect, download or verify.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous certificates page"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 hover:text-emerald-900 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Next certificates page"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 hover:text-emerald-900 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container Carousel viewport */}
      <div 
        className="overflow-hidden relative px-1 py-4 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div 
          className="flex"
          animate={{ x: `calc(-${currentIndex} * (${itemWidth} + ${gap}px))` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ gap: `${gap}px` }}
        >
          {mergedCerts.map((cert) => (
            <div 
              key={cert.id} 
              style={{ width: itemWidth, flexShrink: 0 }}
              className="px-1 relative group"
            >
              {/* Subtle click me badge */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/85 text-white text-[10px] font-bold tracking-wide rounded-full shadow-lg">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" /> Focus Inspect
                </span>
              </div>

              {/* Real pre-designed Certificate Doc Visual */}
              <div onClick={() => setSelectedCert(cert)} className="cursor-pointer">
                <CertificateDoc
                  id={cert.id}
                  title={cert.title}
                  description={cert.description}
                  docNumber={cert.docNumber}
                  issueDate={cert.issueDate}
                  expiryDate={cert.expiryDate}
                  accentColor={cert.accentColor}
                  orgName={cert.orgName}
                  standardName={cert.standardName}
                  scope={cert.scope}
                  compact={true}
                />
              </div>

              {/* Quick Info text block below document */}
              <div className="mt-4 px-2 space-y-1 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cert.accentColor }} />
                  <h4 className="font-display font-extrabold text-[#0B3C2D] text-xs sm:text-sm tracking-tight truncate max-w-[200px]" title={cert.title}>
                    {cert.title}
                  </h4>
                </div>
                <p className="text-[10px] text-slate-500 font-medium tracking-tight leading-normal line-clamp-1 max-w-[220px] mx-auto">
                  {cert.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="text-[10px] text-emerald-800 hover:text-emerald-900 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer mt-0.5"
                >
                  <ZoomIn className="w-3 h-3" /> Inspect Document
                </button>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dot Indicators representing absolute list pages */}
      <div className="flex justify-center items-center gap-1.5 mt-8">
        {[...Array(maxIndex + 1)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Jump to slide page ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx 
                ? 'w-6 h-2 bg-emerald-800' 
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* FULL-SCREEN ZOOM DETAILED INSPECTION MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-5 text-left"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-[32px] w-full max-w-4xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
            >
              
              {/* Left Column: Huge High-Fidelity rendered Certificate page preview */}
              <div className="md:col-span-5 bg-slate-900 p-6 flex items-center justify-center overflow-y-auto border-r border-slate-100 min-h-[350px] max-h-[50vh] md:max-h-[85vh]">
                <div id={`print-cert-${selectedCert.id}`} className="w-full max-w-xs scale-95 sm:scale-100 shadow-2xl">
                  {/* Keep custom-drawing clean print layouts */}
                  <CertificateDoc
                    id={selectedCert.id}
                    title={selectedCert.title}
                    description={selectedCert.description}
                    docNumber={selectedCert.docNumber}
                    issueDate={selectedCert.issueDate}
                    expiryDate={selectedCert.expiryDate}
                    accentColor={selectedCert.accentColor}
                    orgName={selectedCert.orgName}
                    standardName={selectedCert.standardName}
                    scope={selectedCert.scope}
                  />
                </div>
              </div>

              {/* Right Column: Detailed parameters and Actions */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-[85vh] space-y-6">
                
                {/* Header row with Close button info */}
                <div className="flex justify-between items-start gap-4 inline-block">
                  <div className="space-y-1.5 text-left">
                    <span 
                      className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider inline-block text-white"
                      style={{ backgroundColor: selectedCert.accentColor }}
                    >
                      {selectedCert.standardName} Verified
                    </span>
                    <h2 className="font-display font-black text-slate-800 text-lg sm:text-xl md:text-2xl tracking-tight leading-tight">
                      {selectedCert.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close document magnifier"
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Technical properties details */}
                <div className="space-y-4 text-left border-y border-slate-100 py-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                        CERTIFICATE IDENTIFIER
                      </span>
                      <span className="text-xs font-semibold text-slate-800 font-mono block mt-1 select-all">
                        {selectedCert.docNumber}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                        REGULATING BODY
                      </span>
                      <span className="text-xs font-semibold text-slate-800 block mt-1 uppercase font-display">
                        {selectedCert.orgName}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                        ISSUE DATE
                      </span>
                      <span className="text-xs font-semibold text-slate-800 font-mono block mt-1">
                        {selectedCert.issueDate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider text-red-500">
                        EXPIRY DATE
                      </span>
                      <span className="text-xs font-extrabold text-red-700 font-mono block mt-1">
                        {selectedCert.expiryDate}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                      CERTIFIED WORKFLOW SCOPE
                    </span>
                    <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200/50 rounded-xl p-3 inline-block mt-1 italic font-serif leading-relaxed">
                      "{selectedCert.scope}"
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
                      SUMMARY
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {selectedCert.description}
                    </p>
                  </div>
                </div>

                {/* Buttons controls */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => handlePrint(selectedCert)}
                    className="flex-1 px-5 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold font-sans flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-emerald-900/10 active:scale-98 transition-all"
                  >
                    <Printer className="w-4 h-4 shrink-0" /> Print Document PDF
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold font-sans flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 transition-all"
                  >
                    Return to Carousel
                  </button>
                </div>

                {/* Custom warning alert copy */}
                <div className="flex items-start gap-2 bg-amber-50/70 border border-amber-200/50 p-3 rounded-xl">
                  <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span className="text-[10px] text-amber-900/90 leading-normal">
                    This compliance certificate has been vetted and sealed digitally under ISO protocols. For customs submittals or bulk wholesale verification records, please request the signed paper packet.
                  </span>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
