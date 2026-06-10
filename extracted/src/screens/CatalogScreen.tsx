import React, { useState } from 'react';
import { 
  FileText, Download, BookmarkCheck, CornerDownRight, 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search, Printer, RotateCw, Maximize2,
  CheckCircle2, Info, Award
} from 'lucide-react';

export default function CatalogScreen() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [viewType, setViewType] = useState<'pdf' | 'simulated'>('pdf');
  
  // PDF Viewer States
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setAlertMessage('✓ Success! The high-definition 64-page GilaFruit Trade Brochure and Complete Packing Spec matrix has been dispatched to raw queue process (Simulated PDF download initiated with ' + (emailInput || 'guest') + ').');
    }, 1500);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= 5) {
      setCurrentPage(newPage);
    }
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in' && zoom < 150) setZoom(zoom + 10);
    if (direction === 'out' && zoom > 60) setZoom(zoom - 10);
  };

  const handlePrint = () => {
    setAlertMessage('✓ Direct wireless print spooler triggered. Connection established to GilaFruit primary Astara office printer on queue port 9100.');
  };

  const sectionsList = [
    'Hayward Kiwifruit grading specifications and size charts.',
    'Pungency analysis and drying processes for fresh Gilan Garlic.',
    'Caspian watermelons: Charleston Gray resistance parameters.',
    'Packaging tolerances: cardboard trays, wood baskets, and Styrofoam options.',
    'Cold storage ethylene scrubber guidelines.'
  ];

  // Specific catalog page specs
  const catalogPages = [
    {
      page: 1,
      title: "Cover & Technical Preface",
      subtitle: "GilaFruit General wholesale index & packing standards",
      content: (
        <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 text-justify relative">
          <div className="absolute top-4 right-4 opacity-5 pointer-events-none select-none z-0">
            <Award className="w-48 h-48 text-[#01261d]" />
          </div>
          
          <div className="border-b border-emerald-900/20 pb-6 text-center">
            <span className="font-mono text-xs text-amber-600 font-bold uppercase tracking-widest">SABZ GOSTARAN GILAN FRUIT CO.</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-emerald-950 uppercase mt-1 tracking-tight">EXPORT QUALITY CATALOG 2026</h2>
            <p className="text-[10px] sm:text-xs text-slate-500 font-mono mt-1">DOC REF: GF-EXP-2026-V3.4 • CASPIAN EXPORTS DISTRIBUTION</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm pt-4 leading-relaxed relative z-10">
            <p className="font-semibold">
              Dear Trade Partners and Freight Specialists,
            </p>
            <p>
              GilaFruit (licensed under Sabz Gostaran Gilan) is proud to present our standardized technical indexing ledger for international market procurement. Over the past twenty-four calendar years, our packing houses in Astara, Talesh, and Gilan province have specialized in providing premium agricultural commodities matching rigorous international custom guidelines.
            </p>
            <p>
              This catalog contains essential physical metrics, including caliber-weight index ratios, humidity tolerance curves, and cold-storage parameters necessary for long-distance maritime and ground freight coordinates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 bg-slate-50 p-4 rounded-xl relative z-10 text-[11px]">
            <div>
              <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">Sourcing Origins</span>
              <span className="text-emerald-900 font-bold">Talesh Highlands, Caspian Greenbelt</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">Phytosanitary Class</span>
              <span className="text-emerald-900 font-bold">Grade A - Federal EPPO Compliant</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">CA Warehouse Port</span>
              <span className="text-emerald-900 font-bold">Astara Border Customs Hub</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">Palletized Weight Rate</span>
              <span className="text-emerald-900 font-bold">980 Kg net weight standard load</span>
            </div>
          </div>

          <div className="text-center pt-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-[10px] font-bold">
              ✓ OFFICIAL DIGITAL COPY • FOR LICENSED GilaFruit TRADERS ONLY
            </span>
          </div>
        </div>
      )
    },
    {
      page: 2,
      title: "Hayward Kiwifruit Standards",
      subtitle: "Caliber-weight coordinates and harvesting standards",
      content: (
        <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 relative">
          <div className="border-b border-emerald-900/10 pb-4">
            <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">SECTION 01 // FRESH FRUITS SPECIFICATIONS</span>
            <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">HAYWARD KIWIFRUIT CALIBRATION LEDGER</h3>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Astara Kiwi is characterized by its high sugar accumulation capacity and firm flesh structure. Calibrated automatically via high-frequency weight grader cups down at Astara collection zones.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-[#014134] text-white">
                  <th className="p-2 border border-emerald-950/20 font-bold">Standard Caliber</th>
                  <th className="p-2 border border-emerald-950/20 font-bold">Individual Weight</th>
                  <th className="p-2 border border-emerald-950/20 font-bold">Average count per Box</th>
                  <th className="p-2 border border-emerald-950/20 font-bold">Target Soluble Sugar brix</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-2 border border-slate-100 font-bold">Caliber 25</td>
                  <td className="p-2 border border-slate-100 font-mono text-slate-700">130g - 145g</td>
                  <td className="p-2 border border-slate-100">25 Fruits</td>
                  <td className="p-2 border border-slate-100 text-emerald-800 font-semibold">{`> 7.2 °Bx`}</td>
                </tr>
                <tr className="bg-slate-50/50 hover:bg-slate-50">
                  <td className="p-2 border border-slate-100 font-bold">Caliber 27</td>
                  <td className="p-2 border border-slate-100 font-mono text-slate-700">115g - 130g</td>
                  <td className="p-2 border border-slate-100">27 Fruits</td>
                  <td className="p-2 border border-slate-100 text-emerald-800 font-semibold">{`> 7.0 °Bx`}</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 border border-slate-100 font-bold">Caliber 30</td>
                  <td className="p-2 border border-slate-100 font-mono text-slate-700">100g - 110g</td>
                  <td className="p-2 border border-slate-100">30 Fruits</td>
                  <td className="p-2 border border-slate-100 text-emerald-800 font-semibold">{`> 6.5 °Bx`}</td>
                </tr>
                <tr className="bg-slate-50/50 hover:bg-slate-50">
                  <td className="p-2 border border-slate-100 font-bold">Caliber 33</td>
                  <td className="p-2 border border-slate-100 font-mono text-slate-700">85g - 100g</td>
                  <td className="p-2 border border-slate-100">33 Fruits</td>
                  <td className="p-2 border border-slate-100 text-emerald-800 font-semibold">{`> 6.5 °Bx`}</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 border border-slate-100 font-bold">Caliber 36</td>
                  <td className="p-2 border border-slate-100 font-mono text-slate-700">75g - 85g</td>
                  <td className="p-2 border border-slate-100">36 Fruits</td>
                  <td className="p-2 border border-slate-100 text-emerald-800 font-semibold">{`> 6.2 °Bx`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-xl text-[11px] leading-relaxed text-amber-900 space-y-1 text-justify">
            <span className="font-extrabold block">Harvesting Limit Pressure Threshold:</span>
            We halt raw harvesting when fruit pressure metrics drop below 14 lbs/inch² to guarantee optimal shelf life during extended maritime shipments. Minimum Soluble Solids Content on vessel departure set at {`> 6.5%`}.
          </div>
        </div>
      )
    },
    {
      page: 3,
      title: "Fresh Garlic Curing & Clove Specs",
      subtitle: "Moisture levels and nitrogen storage metrics",
      content: (
        <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10">
          <div className="border-b border-emerald-900/10 pb-4">
            <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">SECTION 02 // ALLIUM SATIVUM PARAMETERS</span>
            <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">GILAN HIGH-PUNGENCY GARLIC CURING MATRIX</h3>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed text-justify">
            Our garlic crop stands out with its heavy sulfur-based compounds and high Allicin output. Our processing houses utilize dry-wind curing tunnels to reduce moisture down to non-rot baselines before packaging dispatch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-xl space-y-2 text-[11px]">
              <span className="font-extrabold text-emerald-900 uppercase tracking-wider text-[10px] block">Curing Protocol</span>
              <ul className="space-y-1.5 text-slate-755 list-disc pl-3">
                <li>15 days high-velocity warm air cycle</li>
                <li>Root trim standard: Trimmed exactly to 5.0 mm</li>
                <li>Foliage stalk height: cut to 15.0 mm maximum</li>
                <li>Maximum shell weight moisture loss: 12.4%</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-xl space-y-2 text-[11px]">
              <span className="font-extrabold text-emerald-900 uppercase tracking-wider text-[10px] block">Thermodynamic Storage Target</span>
              <ul className="space-y-1.5 text-slate-755 list-disc pl-3">
                <li>Optimum Warehouse Temp: -1.5°C to -2.0°C</li>
                <li>Relative Humidity Setpoint: 60% to 65% RH</li>
                <li>Gas Circulation Ratio: High Nitrogen flushing</li>
                <li>Ethylene tolerance threshold: Negative</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200/40 p-4 rounded-xl text-xs flex gap-3 text-emerald-950">
            <Info className="w-5 h-5 text-emerald-900 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">Chemical Analysis Index:</span>
              <p className="text-[11px] leading-relaxed text-emerald-900">
                Active Allicin concentration averages 4.8 mg/g on dry weight. Ideal for extraction laboratories and pharmaceutical imports in Eastern Europe.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      page: 4,
      title: "Caspian Vegetables & Melons Indexes",
      subtitle: "Charleston Gray Watermelon rind tolerances & details",
      content: (
        <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10">
          <div className="border-b border-emerald-900/10 pb-4">
            <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">SECTION 03 // VEGETABLES & MELONS SPECIFICATIONS</span>
            <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">CASPIAN CHARLESTON GRAY RIND DENSITY</h3>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed text-justify">
            Charleston Gray watermelons are highly prioritized by Caspian freight dispatchers because of their thick skin and high resistance during trans-national long haul shipping.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center text-slate-800">
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
              <span className="text-[10px] text-slate-500 block">Rind Thickness</span>
              <span className="font-mono text-sm font-extrabold text-emerald-950 block mt-1">1.8 cm - 2.2 cm</span>
              <span className="text-[9px] text-emerald-850">High shock deflection</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
              <span className="text-[10px] text-slate-500 block">Avg Sugar Count</span>
              <span className="font-mono text-sm font-extrabold text-emerald-950 block mt-1">11.8% Sucrose</span>
              <span className="text-[9px] text-emerald-850 font-medium">Sweet Caspian brix</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
              <span className="text-[10px] text-slate-500 block">Single Unit Weight</span>
              <span className="font-mono text-sm font-extrabold text-emerald-950 block mt-1">8.5 Kg - 14.5 Kg</span>
              <span className="text-[9px] text-emerald-850">Symmetric shape</span>
            </div>
          </div>

          <div className="space-y-3 path-padding text-xs text-slate-700 leading-relaxed pt-2">
            <span className="font-extrabold text-slate-800 block text-xs">Stowage & Handling Instructions</span>
            <p className="text-justify">
              Watermelons are laid in thick straw beds inside specialized high-sided wooden crates (bulk export parameters). Layer stacking is restricted to 4 layers high maximum to protect the lower levels from excessive static pressure.
            </p>
            <p className="text-justify">
              Air spaces must be left on the sides using vertical ventilation dividers. Optimum transit ambient temperature is set at +10°C to +12°C. Relative humidity should not exceed 75% to prevent mold formation on stems.
            </p>
          </div>
        </div>
      )
    },
    {
      page: 5,
      title: "Packaging Tolerances & Ethylene Control",
      subtitle: "Technical details on box materials and gas scrubbers",
      content: (
        <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10">
          <div className="border-b border-emerald-900/10 pb-4">
            <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">SECTION 04 // MATERIAL PHYSICS & GAS THRESHOLDS</span>
            <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">PACKING COMPONENT PARAMETERS</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <span className="font-extrabold text-xs text-slate-800 block">Waxed Kraftliner Board Resistance</span>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                Our corrugated Kraft cardboard lines are wax impregnated with food-grade paraffin. This guarantees a moisture absorption variance limit of withstanding {`< 8%`} weight expansion, even when subjected to 90% atmospheric humidity at zero degrees for over 45 days.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <span className="font-extrabold text-xs text-slate-800 block">Ethylene Scrubbing Thresholds in CA Rooms</span>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                GilaFruit Astara holding cell zones employ catalytic converters and active potassium permanganate filters to extract ethylene. This keeps local gas concentration within sealed fruit vaults {`< 0.05 ppm`}, preventing premature softening or yellowing of leafy greens and kiwi crops.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-750">
              <div className="bg-slate-50 p-3 rounded-lg">
                <span className="text-slate-400 block font-bold text-[9px]">CARDBOARD COATINGS</span>
                <span className="text-slate-800 font-mono font-medium">Paraffin Water Shield standard</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <span className="text-slate-400 block font-bold text-[9px]">PLASTIC TOXICOLOGY</span>
                <span className="text-slate-800 font-mono font-medium">100% Phthalate and BPA free</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentPageData = catalogPages[currentPage - 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-[148px] pb-20 animate-fade-in text-left" id="catalog-view">
      
      {/* 1. Header Banner block */}
      <div className="max-w-3xl space-y-4 mb-16" id="catalog-banner-block">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-emerald-700" />
          Trade Brochures
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-none">
          Wholesale Export Catalog
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Read or download our comprehensive catalog containing chemical test references, shipping weight parameters, load volume distributions, and packaging dimensions.
        </p>
      </div>

      {/* 2. Registration cards Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16" id="registry-row">
        
        {/* Left column: Overview & checklist */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 shadow-sm">
          <h3 className="font-display font-black text-slate-900 text-xl tracking-tight flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-emerald-800" />
            What is Inside the GilaFruit Catalog?
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
            Our catalog is designed for international retail logistics professionals, import managers, and wholesale partners to review grading standards before placing seasonal orders.
          </p>

          <ul className="space-y-3.5">
            {sectionsList.map((sec, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-700">
                <CornerDownRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{sec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: Simulated Download Box */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-xl" id="download-box">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
          
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-amber-400">Download Digital PDF</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Enter your corporate email below and we will trigger the active export catalog directly to your device.
            </p>
          </div>

          <form onSubmit={handleDownload} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Wholesale Email</label>
              <input 
                type="email" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="purchasing@company.com" 
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-400 font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={downloadSuccess}
              className={`w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                downloadSuccess 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-[#eab308] hover:bg-amber-600 text-slate-950'
              }`}
            >
              <Download className="w-4 h-4" />
              {downloadSuccess ? 'Preparing Document...' : 'Get Catalog PDF'}
            </button>
          </form>

          <p className="text-[10px] text-slate-500 text-center font-sans">
            By downloading, you consent to seasonal product crop availabilities updates.
          </p>
        </div>

      </div>

      {/* 3. ALERT / SYSTEM LOG FEEDBACK DISMISSABLE */}
      {alertMessage && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between text-xs text-emerald-950 px-4 sm:px-6 mb-8 animate-fade-in" id="pdf-alert-dismiss">
          <div className="flex gap-2 items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{alertMessage}</span>
          </div>
          <button 
            onClick={() => setAlertMessage(null)}
            className="text-emerald-800 hover:text-black font-bold font-sans text-xs ml-4 cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      )}

      {/* 4. EMBEDDED DIGITAL INTERACTIVE PDF VIEWER SECTION */}
      <div className="space-y-4 mt-8" id="embedded-pdf-anchor">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-display font-black text-xl text-slate-950 tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-800 animate-pulse" />
              GilaFruit_Wholesale_Export_Catalog_2026.pdf
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Document Size: 4.8 MB • Pages: 5
            </span>
          </div>
          
          {/* Quick tab toggle */}
          <div className="bg-slate-200 border border-slate-350 p-1 rounded-xl flex items-center gap-1 text-[11px] self-start sm:self-auto font-bold w-fit">
            <button 
              type="button"
              onClick={() => setViewType('pdf')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewType === 'pdf' 
                  ? 'bg-[#014134] text-white shadow' 
                  : 'text-slate-755 hover:text-[#014134]'
              }`}
            >
              Interactive PDF Embed
            </button>
            <button 
              type="button"
              onClick={() => setViewType('simulated')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewType === 'simulated' 
                  ? 'bg-[#014134] text-white shadow' 
                  : 'text-slate-755 hover:text-[#014134]'
              }`}
            >
              Digital Preview Sheets
            </button>
          </div>
        </div>

        {viewType === 'pdf' ? (
          <div className="bg-slate-100 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-2 flex flex-col min-h-[620px]" id="pdf-embed-wrapper">
            <div className="bg-slate-800 text-slate-200 px-4 py-2.5 text-[10px] font-mono flex justify-between items-center border-b border-slate-900 rounded-t-xl select-none">
              <span>ACTIVE BROWSER NATIVE DOCUMENT EMBED</span>
              <span className="text-amber-400 font-bold tracking-widest uppercase">Direct PDF Stream</span>
            </div>
            
            <iframe 
              src="https://pdfobject.com/pdf/sample.pdf" 
              className="w-full flex-1 min-h-[600px] rounded-b-xl border-t border-slate-350 shadow-inner bg-white" 
              title="GilaFruit Catalog PDF Document" 
            />
          </div>
        ) : (
          /* Gray Reader Area Background */
          <div className="bg-slate-200 border border-slate-300 rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[500px]" id="pdf-container-view">
          
          {/* Top PDF Toolbar */}
          <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 flex flex-wrap gap-4 items-center justify-between border-b border-slate-950/40">
            
            {/* Pages Navigation and Info */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-lg hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <span className="text-slate-400 font-bold font-sans">Page</span>
                <input 
                  type="number"
                  value={currentPage}
                  min={1}
                  max={5}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val >= 1 && val <= 5) setCurrentPage(val);
                  }}
                  className="w-10 text-center py-1 bg-slate-900 border border-slate-700/80 rounded-md text-xs font-mono font-bold text-amber-400 focus:outline-none"
                />
                <span className="text-slate-400">/ 5</span>
              </div>

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === 5}
                className="w-8 h-8 rounded-lg hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Global Search Document Input */}
            <div className="hidden md:flex items-center relative text-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3" />
              <input 
                type="text"
                placeholder="Search catalog page..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 w-48 bg-slate-900 border border-slate-700/80 focus:border-amber-400 rounded-lg text-slate-200 outline-none text-xs transition-colors font-sans"
              />
            </div>

            {/* Zoom / Orientation & Tools Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center bg-slate-900/60 rounded-lg p-0.5 border border-slate-700/30">
                <button 
                  onClick={() => handleZoom('out')}
                  disabled={zoom <= 60}
                  className="w-7 h-7 rounded hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent flex items-center justify-center cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5 text-white" />
                </button>
                <span className="text-[10px] font-mono px-2 font-bold text-slate-200 w-12 text-center select-none">
                  {zoom}%
                </span>
                <button 
                  onClick={() => handleZoom('in')}
                  disabled={zoom >= 150}
                  className="w-7 h-7 rounded hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent flex items-center justify-center cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Utility buttons */}
              <div className="flex gap-1 text-slate-200">
                <button 
                  onClick={() => setRotation((rotation + 90) % 360)}
                  className="w-8 h-8 rounded-lg hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer"
                  title="Rotate Document View"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={handlePrint}
                  className="w-8 h-8 rounded-lg hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer"
                  title="Spool Print Document"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('pdf-container-view');
                    if (!element) return;
                    if (!isFullscreen) {
                      element.requestFullscreen?.();
                      setIsFullscreen(true);
                    } else {
                      document.exitFullscreen?.();
                      setIsFullscreen(false);
                    }
                  }}
                  className="w-8 h-8 rounded-lg hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer"
                  title="Fullscreen Reader Mode"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Master Split Page Preview and Thumbnails Rail */}
          <div className="flex flex-1 overflow-hidden">
            
            {/* Left page jump rail sidebar (Visible on Desktop / Tablets) */}
            <div className="hidden sm:block w-48 bg-slate-800/95 border-r border-slate-950/40 p-4 space-y-4 overflow-y-auto max-h-[750px]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">Catalog Pages</span>
              <div className="space-y-3">
                {catalogPages.map((catalogPage) => {
                  const isActive = currentPage === catalogPage.page;
                  return (
                    <button
                      key={catalogPage.page}
                      onClick={() => handlePageChange(catalogPage.page)}
                      className={`w-full text-left p-2 rounded-xl transition-all cursor-pointer flex gap-1.5 items-start ${
                        isActive 
                          ? 'bg-[#014134] text-white border border-emerald-555/20 shadow-md' 
                          : 'hover:bg-slate-700/60 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="w-4 h-4 rounded bg-black/30 text-[9px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        {catalogPage.page}
                      </span>
                      <div className="min-w-0 text-[10px]">
                        <p className="font-extrabold truncate leading-tight uppercase font-mono">{catalogPage.title.split(' ')[0]}</p>
                        <p className="text-[8px] opacity-60 truncate leading-snug mt-0.5">{catalogPage.subtitle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Rendered Page Canvas Area */}
            <div className="flex-1 p-4 sm:p-10 overflow-y-auto bg-slate-600/30 flex justify-center items-start max-h-[750px] relative scroll-smooth shadow-inner">
              
              {/* Actual paper sheet simulator */}
              <div 
                id="pdf-paper-sheet"
                style={{ 
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`, 
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' 
                }}
                className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-450 relative overflow-hidden flex flex-col justify-between aspect-[1/1.414] min-h-[640px]"
              >
                
                {/* Diagonal watermark diagonal ribbon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[35deg] text-slate-200/10 pointer-events-none select-none font-sans font-black text-3xl sm:text-4xl text-center leading-none tracking-widest uppercase z-0 whitespace-nowrap">
                  TECHNICAL EXPORT CODES<br />
                  SABZ GOSTARAN GILAN FRUIT CO.
                </div>

                {/* Header Page Tag */}
                <div className="bg-[#01261d]/5 p-3 sm:px-6 border-b border-slate-100 flex items-center justify-between relative z-10 text-[9px] sm:text-[10px] text-slate-400 font-mono">
                  <span>GilaFruit S.G. Co • Wholesale Export Catalog Packet 2026</span>
                  <span className="font-bold">Page {currentPage} of 5</span>
                </div>

                {/* Content body wrapper of the selected page */}
                <div className="flex-1 overflow-y-auto relative z-10 text-left">
                  {currentPageData.content}
                </div>

                {/* Footer Page Tag */}
                <div className="bg-[#01261d]/5 p-3 px-6 border-t border-slate-100 flex items-center justify-between relative z-10 text-[9px] text-slate-400 font-mono">
                  <span>Astara, Iran Sourcing Division Direct Line: +98 21 9109 9091</span>
                  <span>CONFIDENTIAL CATALOGUE</span>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom quick page guide */}
          <div className="bg-slate-900 border-t border-slate-950 p-2 text-center text-[10px] font-mono text-slate-400 flex items-center justify-between px-6 font-semibold">
            <span>Viewing: <strong className="text-amber-400">{currentPageData.title}</strong> ({currentPageData.subtitle})</span>
            <span className="hidden sm:inline">Use sidebar thumbnails to quick swap document pages</span>
          </div>

        </div>
        )}
      </div>

    </div>
  );
}
