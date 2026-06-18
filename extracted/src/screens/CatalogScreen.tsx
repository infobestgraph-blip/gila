import { useState, useMemo } from 'react';
import { 
  FileText, Download, BookmarkCheck, CornerDownRight, 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search, Printer, RotateCw, Maximize2,
  CheckCircle2, Info, Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CATALOG_TEXTS } from './catalogTexts';

export default function CatalogScreen() {
  const { language } = useLanguage();
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

  const ln = CATALOG_TEXTS[language] || CATALOG_TEXTS.en;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setAlertMessage(ln.alSuccess + (emailInput || 'guest') + ').');
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
    setAlertMessage(ln.alPrint);
  };

  // Specific catalog page specs
  const catalogPages = useMemo(() => {
    const pInfo = ln.pages;
    const p1Obj = pInfo.p1;
    const p2Obj = pInfo.p2;
    const p3Obj = pInfo.p3;
    const p4Obj = pInfo.p4;
    const p5Obj = pInfo.p5;

    return [
      {
        page: 1,
        title: p1Obj.title,
        subtitle: p1Obj.subtitle,
        content: (
          <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 text-justify relative">
            <div className="absolute top-4 right-4 opacity-5 pointer-events-none select-none z-0">
              <Award className="w-48 h-48 text-[#01261d]" />
            </div>
            
            <div className="border-b border-emerald-900/20 pb-6 text-center relative z-10">
              <span className="font-mono text-xs text-amber-600 font-bold uppercase tracking-widest">{p1Obj.prefaceTitle}</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-emerald-950 uppercase mt-1 tracking-tight">{ln.title}</h2>
              <p className="text-[10px] sm:text-xs text-slate-500 font-mono mt-1">{p1Obj.docRef}</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm pt-4 leading-relaxed relative z-10">
              <p className="font-semibold">{p1Obj.dear}</p>
              <p>{p1Obj.para1}</p>
              <p>{p1Obj.para2}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 bg-slate-50 p-4 rounded-xl relative z-10 text-[11px] text-left">
              <div>
                <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">{p1Obj.orgLabel}</span>
                <span className="text-emerald-900 font-bold">{p1Obj.orgVal}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">{p1Obj.phytoLabel}</span>
                <span className="text-emerald-900 font-bold">{p1Obj.phytoVal}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">{p1Obj.wareLabel}</span>
                <span className="text-emerald-900 font-bold">{p1Obj.wareVal}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">{p1Obj.palletLabel}</span>
                <span className="text-emerald-900 font-bold">{p1Obj.palletVal}</span>
              </div>
            </div>

            <div className="text-center pt-8 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-[10px] font-bold">
                {p1Obj.copyLabel}
              </span>
            </div>
          </div>
        )
      },
      {
        page: 2,
        title: p2Obj.title,
        subtitle: p2Obj.subtitle,
        content: (
          <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 relative text-left">
            <div className="border-b border-emerald-900/10 pb-4">
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">{p2Obj.sec}</span>
              <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">{p2Obj.led}</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed text-left">
              {p2Obj.desc}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead>
                  <tr className="bg-[#014134] text-white">
                    {p2Obj.tableHeaders && p2Obj.tableHeaders.map((head: string, hIdx: number) => (
                      <th key={hIdx} className="p-2 border border-emerald-950/20 font-bold">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {p2Obj.items && p2Obj.items.map((row: string[], rIdx: number) => (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? "bg-slate-50/55 hover:bg-slate-50" : "hover:bg-slate-50"}>
                      <td className="p-2 border border-slate-100 font-bold">{row[0]}</td>
                      <td className="p-2 border border-slate-100 font-mono text-slate-700">{row[1]}</td>
                      <td className="p-2 border border-slate-100">{row[2]}</td>
                      <td className="p-2 border border-slate-100 text-emerald-800 font-semibold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-xl text-[11px] leading-relaxed text-amber-900 space-y-1 text-left">
              <span className="font-extrabold block">{p2Obj.warnTitle}</span>
              <p className="text-justify">{p2Obj.warnDesc}</p>
            </div>
          </div>
        )
      },
      {
        page: 3,
        title: p3Obj.title,
        subtitle: p3Obj.subtitle,
        content: (
          <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 text-left">
            <div className="border-b border-emerald-900/10 pb-4">
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">{p3Obj.sec}</span>
              <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">{p3Obj.led}</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              {p3Obj.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-xl space-y-2 text-[11px] text-left">
                <span className="font-extrabold text-emerald-900 uppercase tracking-wider text-[10px] block">{p3Obj.col1Title}</span>
                <ul className="space-y-1.5 text-slate-755 list-disc pl-4">
                  {p3Obj.col1List && p3Obj.col1List.map((li: string, idx: number) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200/40 p-4 rounded-xl space-y-2 text-[11px] text-left">
                <span className="font-extrabold text-emerald-900 uppercase tracking-wider text-[10px] block">{p3Obj.col2Title}</span>
                <ul className="space-y-1.5 text-slate-755 list-disc pl-4">
                  {p3Obj.col2List && p3Obj.col2List.map((li: string, idx: number) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200/40 p-4 rounded-xl text-xs flex gap-3 text-emerald-950 text-left">
              <Info className="w-5 h-5 text-emerald-900 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold block">{p3Obj.warnTitle}</span>
                <p className="text-[11px] leading-relaxed text-emerald-900">
                  {p3Obj.warnDesc}
                </p>
              </div>
            </div>
          </div>
        )
      },
      {
        page: 4,
        title: p4Obj.title,
        subtitle: p4Obj.subtitle,
        content: (
          <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 text-left">
            <div className="border-b border-emerald-900/10 pb-4">
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">{p4Obj.sec}</span>
              <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">{p4Obj.led}</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              {p4Obj.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center text-slate-800">
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                <span className="text-[10px] text-slate-550 block font-semibold">{p4Obj.stat1Title}</span>
                <span className="font-mono text-sm font-extrabold text-emerald-950 block mt-1">{p4Obj.stat1Val}</span>
                <span className="text-[9px] text-emerald-850">{p4Obj.stat1Sub}</span>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                <span className="text-[10px] text-slate-550 block font-semibold">{p4Obj.stat2Title}</span>
                <span className="font-mono text-sm font-extrabold text-emerald-950 block mt-1">{p4Obj.stat2Val}</span>
                <span className="text-[9px] text-emerald-850 font-medium">{p4Obj.stat2Sub}</span>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
                <span className="text-[10px] text-slate-550 block font-semibold">{p4Obj.stat3Title}</span>
                <span className="font-mono text-sm font-extrabold text-emerald-950 block mt-1">{p4Obj.stat3Val}</span>
                <span className="text-[9px] text-emerald-850">{p4Obj.stat3Sub}</span>
              </div>
            </div>

            <div className="space-y-3 path-padding text-xs text-slate-705 leading-relaxed pt-2 text-left">
              <span className="font-extrabold text-slate-800 block text-xs">{p4Obj.stowageTitle}</span>
              <p className="text-justify">{p4Obj.stowageP1}</p>
              <p className="text-justify">{p4Obj.stowageP2}</p>
            </div>
          </div>
        )
      },
      {
        page: 5,
        title: p5Obj.title,
        subtitle: p5Obj.subtitle,
        content: (
          <div className="space-y-6 text-slate-800 font-sans p-6 sm:p-10 text-left">
            <div className="border-b border-emerald-900/10 pb-4">
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest font-extrabold">{p5Obj.sec}</span>
              <h3 className="font-display font-black text-xl text-emerald-950 tracking-tight">{p5Obj.led}</h3>
            </div>

            <div className="space-y-4 text-left">
              <div className="space-y-2">
                <span className="font-extrabold text-xs text-slate-800 block">{p5Obj.sec1Title}</span>
                <p className="text-xs text-slate-650 leading-relaxed text-justify">{p5Obj.sec1Desc}</p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="font-extrabold text-xs text-slate-800 block">{p5Obj.sec2Title}</span>
                <p className="text-xs text-slate-650 leading-relaxed text-justify">{p5Obj.sec2Desc}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-750">
                <div className="bg-slate-50 p-3 rounded-lg text-left">
                  <span className="text-slate-400 block font-bold text-[9px] uppercase">{p5Obj.grid1Title}</span>
                  <span className="text-slate-850 font-mono font-bold block mt-0.5">{p5Obj.grid1Val}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-left">
                  <span className="text-slate-400 block font-bold text-[9px] uppercase">{p5Obj.grid2Title}</span>
                  <span className="text-slate-850 font-mono font-bold block mt-0.5">{p5Obj.grid2Val}</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ];
  }, [ln, language]);

  const currentPageData = catalogPages[currentPage - 1] || catalogPages[0];

  const bulletList = [
    ln.bullet1,
    ln.bullet2,
    ln.bullet3,
    ln.bullet4,
    ln.bullet5
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-[148px] pb-20 animate-fade-in text-left" id="catalog-view">
      
      {/* 1. Header Banner block */}
      <div className="max-w-3xl space-y-4 mb-16 text-left" id="catalog-banner-block">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5 text-emerald-700" />
          {ln.b2bTag}
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-none uppercase">
          {ln.title}
        </h1>
        <p className="text-slate-655 text-xs sm:text-sm md:text-base leading-relaxed">
          {ln.subtitle}
        </p>
      </div>

      {/* 2. Registration cards Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16" id="registry-row">
        
        {/* Left column: Overview & checklist */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 shadow-sm text-left">
          <h3 className="font-display font-black text-slate-900 text-lg sm:text-xl tracking-tight flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-emerald-800" />
            {ln.insideHeader}
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
            {ln.insideDesc}
          </p>

          <ul className="space-y-3.5">
            {bulletList.map((sec, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-700 text-left">
                <CornerDownRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{sec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: Simulated Download Box */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-xl text-left" id="download-box">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
          
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-amber-400 uppercase tracking-wide">{ln.downloadTitle}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {ln.downloadDesc}
            </p>
          </div>

          <form onSubmit={handleDownload} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">{ln.emailInputLabel}</label>
              <input 
                type="email" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="purchasing@company.com" 
                className="w-full px-4 py-2.5 bg-slate-105 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-400 font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={downloadSuccess}
              className={`w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                downloadSuccess 
                  ? 'bg-emerald-600 text-white animate-pulse' 
                  : 'bg-[#eab308] hover:bg-amber-600 text-slate-950'
              }`}
            >
              <Download className="w-4 h-4" />
              {downloadSuccess ? ln.submitBtnDownloading : ln.submitBtnDefault}
            </button>
          </form>

          <p className="text-[10px] text-slate-500 text-center font-sans">
            {ln.downloadConsent}
          </p>
        </div>

      </div>

      {/* 3. ALERT / SYSTEM LOG FEEDBACK DISMISSABLE */}
      {alertMessage && (
        <div className="bg-emerald-50 border border-emerald-250 p-4 rounded-xl flex items-center justify-between text-xs text-emerald-950 px-4 sm:px-6 mb-8 animate-fade-in" id="pdf-alert-dismiss">
          <div className="flex gap-2 items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{alertMessage}</span>
          </div>
          <button 
            type="button"
            onClick={() => setAlertMessage(null)}
            className="text-emerald-800 hover:text-black font-bold font-sans text-xs ml-4 cursor-pointer"
          >
            {ln.dismissBtn}
          </button>
        </div>
      )}

      {/* 4. EMBEDDED DIGITAL INTERACTIVE PDF VIEWER SECTION */}
      <div className="space-y-4 mt-8" id="embedded-pdf-anchor">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-left">
            <h3 className="font-display font-black text-lg sm:text-xl text-slate-950 tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-800" />
              {ln.filenameLabel}
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              {ln.fileSizeLabel}
            </span>
          </div>
          
          {/* Quick tab toggle */}
          <div className="bg-slate-200 border border-slate-350 p-1 rounded-xl flex items-center gap-1 text-[11px] self-start sm:self-auto font-bold w-fit">
            <button 
              type="button"
              onClick={() => setViewType('pdf')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewType === 'pdf' 
                  ? 'bg-[#014134] text-white shadow font-extrabold' 
                  : 'text-slate-755 hover:text-[#014134]'
              }`}
            >
              {ln.embedPdfTab}
            </button>
            <button 
              type="button"
              onClick={() => setViewType('simulated')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewType === 'simulated' 
                  ? 'bg-[#014134] text-white shadow font-extrabold' 
                  : 'text-slate-755 hover:text-[#014134]'
              }`}
            >
              {ln.simulatedSheetTab}
            </button>
          </div>
        </div>

        {viewType === 'pdf' ? (
          <div className="bg-slate-100 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-2 flex flex-col min-h-[620px]" id="pdf-embed-wrapper">
            <div className="bg-slate-800 text-slate-200 px-4 py-2.5 text-[10px] font-mono flex justify-between items-center border-b border-slate-900 rounded-t-xl select-none">
              <span>{ln.embedHeading}</span>
              <span className="text-amber-400 font-bold tracking-widest uppercase">{ln.embedSubheading}</span>
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
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-lg hover:bg-slate-705 disabled:opacity-30 disabled:hover:bg-transparent text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <span className="text-slate-400 font-bold font-sans">{ln.pageLabel}</span>
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
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === 5}
                className="w-8 h-8 rounded-lg hover:bg-slate-705 disabled:opacity-30 disabled:hover:bg-transparent text-white flex items-center justify-center cursor-pointer transition-colors"
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
                placeholder={ln.searchPagesPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 w-48 bg-slate-900 border border-slate-700/80 focus:border-amber-400 rounded-lg text-slate-205 outline-none text-xs transition-colors font-sans"
              />
            </div>

            {/* Zoom / Orientation & Tools Controls */}
            <div className="flex items-center gap-2 sm:gap-4 font-mono">
              <div className="flex items-center bg-slate-900/60 rounded-lg p-0.5 border border-slate-700/30">
                <button 
                  type="button"
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
                  type="button"
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
                  type="button"
                  onClick={() => setRotation((rotation + 90) % 360)}
                  className="w-8 h-8 rounded-lg hover:bg-slate-710 text-white flex items-center justify-center cursor-pointer"
                  title="Rotate Document View"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
                <button 
                  type="button"
                  onClick={handlePrint}
                  className="w-8 h-8 rounded-lg hover:bg-slate-710 text-white flex items-center justify-center cursor-pointer"
                  title="Spool Print Document"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button 
                  type="button"
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
                  className="w-8 h-8 rounded-lg hover:bg-slate-710 text-white flex items-center justify-center cursor-pointer"
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
            <div className="hidden sm:block w-48 bg-slate-80s border-r border-slate-950/40 p-4 space-y-4 overflow-y-auto max-h-[750px]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">{ln.catalogPagesHeading}</span>
              <div className="space-y-3">
                {catalogPages.map((catalogPage) => {
                  const isActive = currentPage === catalogPage.page;
                  return (
                    <button
                      key={catalogPage.page}
                      type="button"
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
            <div className="flex-1 p-4 sm:p-10 overflow-y-auto bg-slate-655 flex justify-center items-start max-h-[750px] relative scroll-smooth shadow-inner">
              
              {/* Actual paper sheet simulator */}
              <div 
                id="pdf-paper-sheet"
                style={{ 
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`, 
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' 
                }}
                className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-450 relative overflow-hidden flex flex-col justify-between aspect-[1/1.414] min-h-[640px] text-left"
              >
                
                {/* Diagonal watermark diagonal ribbon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[35deg] text-slate-205/10 pointer-events-none select-none font-sans font-black text-2xl sm:text-4xl text-center leading-none tracking-widest uppercase z-0 whitespace-nowrap">
                  TECHNICAL EXPORT CODES<br />
                  SABZ GOSTARAN GILAN FRUIT CO.
                </div>

                {/* Header Page Tag */}
                <div className="bg-[#01261d]/5 p-3 sm:px-6 border-b border-slate-100 flex items-center justify-between relative z-10 text-[9px] sm:text-[10px] text-slate-400 font-mono">
                  <span>GilaFruit S.G. Co • Export Trade Specification</span>
                  <span className="font-bold">{ln.pageLabel} {currentPage} of 5</span>
                </div>

                {/* Content body wrapper of the selected page */}
                <div className="flex-1 overflow-y-auto relative z-10 text-left">
                  {currentPageData.content}
                </div>

                {/* Footer Page Tag */}
                <div className="bg-[#01261d]/5 p-3 px-6 border-t border-slate-100 flex items-center justify-between relative z-10 text-[9px] text-slate-400 font-mono">
                  <span className="truncate max-w-[280px] sm:max-w-none">{ln.contactFooter}</span>
                  <span className="hidden sm:inline-block shrink-0">{ln.confidentialLabel.split('•')[0]}</span>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom quick page guide */}
          <div className="bg-slate-900 border-t border-slate-950 p-2 text-center text-[10px] font-mono text-slate-400 flex items-center justify-between px-6 font-semibold">
            <span>{ln.quickPageGuideLabel} <strong className="text-amber-400">{currentPageData.title}</strong> ({currentPageData.subtitle})</span>
            <span className="hidden sm:inline">{ln.quickPageGuideDesc}</span>
          </div>

        </div>
        )}
      </div>

    </div>
  );
}
