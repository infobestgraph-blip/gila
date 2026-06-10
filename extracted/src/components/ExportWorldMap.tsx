import React, { useState, useEffect } from 'react';
import { 
  Globe, Truck, Anchor, ShieldCheck, Flame, Compass, 
  MapPin, CheckCircle, ChevronRight, Activity, Zap, ExternalLink,
  ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';

// Official standard low-resolution world atlas TopoJSON (50KB)
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

interface ExportCountry {
  id: string;
  name: string;
  faName: string;
  coordinates: [number, number]; // [Longitude, Latitude]
  products: string[];
  transitTime: string;
  distance: string;
  type: 'truck' | 'sea' | 'rail';
  port: string;
  status: string;
  bgDot: string;
}

export default function ExportWorldMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [animateLanes, setAnimateLanes] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  // GilaFruit core export countries & precise geographic coordinates (Longitude, Latitude)
  const exportCountries: ExportCountry[] = [
    {
      id: 'ru',
      name: 'Russia',
      faName: 'روسیه',
      coordinates: [37.6173, 55.7558], // Moscow Central
      products: ['Red Kiwi', 'Celery', 'Iceberg Lettuce', 'Romaine Lettuce', 'Bell Pepper'],
      transitTime: '4 - 6 Days',
      distance: '2,500 km',
      type: 'truck',
      port: 'Astrakhan Port / Moscow Central',
      status: 'Daily Cold-Chain Shipments',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'iq',
      name: 'Iraq',
      faName: 'عراق',
      coordinates: [44.3661, 33.3152], // Baghdad
      products: ['Fresh Garlic', 'Cabbage', 'Kiwifruit', 'Romaine Lettuce', 'Tomato'],
      transitTime: '1 - 2 Days',
      distance: '650 km',
      type: 'truck',
      port: 'Erbil Coldrooms / Baghdad Market',
      status: 'High-Volume Land Logistics',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'ae',
      name: 'United Arab Emirates',
      faName: 'امارات متحده عربی',
      coordinates: [55.2708, 25.2048], // Dubai / Jebel Ali
      products: ['Hayward Premium Kiwi', 'Capsicum', 'Cauliflower', 'Broccoli'],
      transitTime: '2 - 3 Days',
      distance: '1,200 km',
      type: 'sea',
      port: 'Jebel Ali Port (Dubai)',
      status: 'Active Marine Reefer',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'in',
      name: 'India',
      faName: 'هند',
      coordinates: [72.8777, 19.0760], // Mumbai / Nhava Sheva
      products: ['Hayward Green Kiwi', 'Apples', 'White Garlic'],
      transitTime: '8 - 10 Days',
      distance: '3,200 km',
      type: 'sea',
      port: 'Nhava Sheva Port (Mumbai)',
      status: 'Strategic Reefer Container lines',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'om',
      name: 'Oman',
      faName: 'عمان',
      coordinates: [58.4059, 23.5859], // Muscat / Sohar Port
      products: ['Celery', 'Red Apples', 'Iceberg Lettuce'],
      transitTime: '3 Days',
      distance: '1,400 km',
      type: 'sea',
      port: 'Sohar Port / Muscat Terminals',
      status: 'Weekly Marine Logistics',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'qa',
      name: 'Qatar',
      faName: 'قطر',
      coordinates: [51.5310, 25.2854], // Doha / Hamad Port
      products: ['Sweet Bell Pepper', 'Premium Herbs', 'Roman Lettuce'],
      transitTime: '2 Days',
      distance: '1,100 km',
      type: 'sea',
      port: 'Hamad Port (Doha)',
      status: 'Active Marine Port Access',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'kz',
      name: 'Kazakhstan',
      faName: 'قزاقستان',
      coordinates: [76.8512, 43.2220], // Almaty
      products: ['Hayward Kiwi', 'White Garlic', 'Green Apples'],
      transitTime: '4 - 5 Days',
      distance: '1,900 km',
      type: 'rail',
      port: 'Almaty Railway Reefer Terminal',
      status: 'Active Rail Cold-Chain',
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'uz',
      name: 'Uzbekistan',
      faName: 'ازبکستان',
      coordinates: [69.2401, 41.2995], // Tashkent
      products: ['Fresh Capsicum', 'Red Kiwifruit', 'Celery'],
      transitTime: '4 Days',
      distance: '1,650 km',
      type: 'truck',
      port: 'Tashkent Distribution Center',
      status: 'Active Land Route',
      bgDot: 'bg-emerald-500'
    }
  ];

  // Precise geographic origin: Gilan Packhouses near Caspian coast (Iran)
  const origin = { 
    coordinates: [49.5886, 37.2809] as [number, number], // Gilan Province Longitude, Latitude
    name: 'GilaFruit (IRAN)', 
    faName: 'گیلا فروت (ایران)' 
  };

  // Set map loaded state after a short delay for fluid rendering
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setMapLoaded(true);
    }, 650);

    return () => clearTimeout(loadTimer);
  }, []);

  const activeCountry = selectedId ? (exportCountries.find(c => c.id === selectedId) || null) : null;

  // Dynamic projection configuration based on selected country
  const getMapProjection = () => {
    if (!selectedId) {
      // Default: Centered on Iran, zoomed nicely but showing surroundings
      const defaultCenter: [number, number] = [53.5, 34.0];
      const defaultScale = 350 * zoomLevel; // A little larger focus on Iran and close neighbours
      return { center: defaultCenter, scale: defaultScale };
    }

    const country = exportCountries.find(c => c.id === selectedId);
    if (!country) {
      return { center: [58, 38] as [number, number], scale: 180 * zoomLevel };
    }

    // Dynamic zoom calculation:
    // Focus the viewport beautifully on both Iran (origin) and the Selected Country
    const dx = country.coordinates[0] - origin.coordinates[0];
    const dy = country.coordinates[1] - origin.coordinates[1];
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Midpoint calculation to center the projection exactly between Iran and the target country
    const centerLng = (origin.coordinates[0] + country.coordinates[0]) / 2;
    const centerLat = (origin.coordinates[1] + country.coordinates[1]) / 2;

    // Dynamic scale factor calculation: fits both points in the viewport comfortably
    // Smaller distance -> higher scale (zoom in). e.g., Iraq/Qatar will zoom in tightly.
    const calculatedScale = Math.max(160, Math.min(850, 11000 / (dist + 10)));
    
    return {
      center: [centerLng, centerLat] as [number, number],
      scale: calculatedScale * zoomLevel
    };
  };

  const { center, scale } = getMapProjection();

  // Unified animated projection state to minimize re-renders to only 1 state change per frame
  const [animatedProjection, setAnimatedProjection] = useState<{ center: [number, number]; scale: number }>({
    center: [53.5, 34.0],
    scale: 350
  });

  // Keep track of the current values in a ref to make precise decisions in the RAF loop
  const currentProjectionRef = React.useRef({ center: [53.5, 34.0] as [number, number], scale: 350 });

  // Smooth Ease-Out Interpolation (LERP) loop for elegant panning and zooming
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const current = currentProjectionRef.current;
      const targetLng = center[0];
      const targetLat = center[1];
      const targetScale = scale;

      const [currLng, currLat] = current.center;
      const currScale = current.scale;

      const diffLng = targetLng - currLng;
      const diffLat = targetLat - currLat;
      const diffScale = targetScale - currScale;

      if (Math.abs(diffLng) < 0.005 && Math.abs(diffLat) < 0.005 && Math.abs(diffScale) < 0.1) {
        // Snapped exactly to the target to stop CPU utilization
        currentProjectionRef.current = { center, scale };
        setAnimatedProjection({ center, scale });
        return;
      }

      // 0.12 interpolation factor provides ultra-premium smooth, fluid easing
      const rate = 0.12;
      const nextLng = currLng + diffLng * rate;
      const nextLat = currLat + diffLat * rate;
      const nextScale = currScale + diffScale * rate;

      const nextProj = {
        center: [nextLng, nextLat] as [number, number],
        scale: nextScale
      };

      currentProjectionRef.current = nextProj;
      setAnimatedProjection(nextProj);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [center, scale]);

  return (
    <div className="bg-slate-950 text-white rounded-[2.5rem] border border-slate-800 p-6 sm:p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
      
      {/* Background radial soft light overlay simulation */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
      
      {/* Decorative Grid Mesh lines with CSS */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Map Upper Console Bar */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
        <div className="space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-mono text-emerald-400">
              Live Transit Monitor & Active Corridors
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
            GilaFruit Global Export Trade Hub
          </h3>
          <p className="text-xs text-slate-400 font-light">
            Interactive visual displaying real-time cooling supply corridors from Gilan packhouse facilities straight to wholesale hubs.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setAnimateLanes(!animateLanes)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
              animateLanes 
                ? 'bg-emerald-950 text-emerald-405 border border-emerald-500/30 font-bold' 
                : 'bg-slate-900 text-slate-550 border border-slate-800 font-bold'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 ${animateLanes ? 'animate-pulse' : ''}`} />
            {animateLanes ? 'Animate Stream: ON' : 'Animate Stream: OFF'}
          </button>
          
          <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Active Corridors: {exportCountries.length}
          </span>
        </div>
      </div>

      {/* Main Map Visualization Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Hand Details Side-Panel (Glassmorphic) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-slate-800 space-y-5 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            {activeCountry ? (
              <>
                {/* Header of Active Route */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-emerald-400 block">Active Selected Corridor</span>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-display text-xl font-bold text-white leading-tight">
                      {activeCountry.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium font-sans">
                      ({activeCountry.faName})
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    Secure cold-chain logistics from Gilan, Iran to {activeCountry.name}.
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Logistics Type</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      {activeCountry.type === 'truck' && <Truck className="w-3.5 h-3.5 text-emerald-400" />}
                      {activeCountry.type === 'sea' && <Anchor className="w-3.5 h-3.5 text-emerald-400" />}
                      {activeCountry.type === 'rail' && <Globe className="w-3.5 h-3.5 text-emerald-400" />}
                      {activeCountry.type === 'truck' ? 'Cold-Chain' : activeCountry.type === 'sea' ? 'Marine Reefer' : 'Rail Cargo'}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Transit Duration</span>
                    <span className="text-xs font-bold text-white block truncate">
                      🚀 {activeCountry.transitTime}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Est. Distance</span>
                    <span className="text-xs font-bold text-slate-300 block">
                      📏 {activeCountry.distance}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Status</span>
                    <span className="text-[10px] font-bold text-[#a3e635] block truncate font-mono">
                      ● ACTIVE
                    </span>
                  </div>
                </div>

                {/* Target Delivery Hub */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Primary Delivery Port / Hub</span>
                  <p className="text-xs font-bold text-slate-200">
                    🏢 {activeCountry.port}
                  </p>
                </div>

                {/* Target Export Products Checklist */}
                <div className="space-y-2 pt-1 border-t border-slate-800/60">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400 block">Core Products Exported</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCountry.products.map((p, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-emerald-950/40 text-emerald-300 border border-emerald-900/50 rounded-lg text-[10px] font-medium"
                      >
                        🌿 {p}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Header for Default GilaFruit Packhouse Center */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-amber-400 block">Global Packaging Hub</span>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                      GilaFruit Central Complex
                    </h4>
                    <span className="text-xs text-emerald-400 font-semibold font-mono">
                      (گیلان، ایران)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    The premier agricultural pre-cooling, optical sorting, and advanced cardboard packaging center in Northern Iran.
                  </p>
                </div>

                {/* Hub Statistics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Export Lines</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-emerald-400" />
                      6 Active Lines
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Pre-Cooling tech</span>
                    <span className="text-xs font-bold text-white block truncate">
                      ❄️ Hydro / Air-jet
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Cold Storage</span>
                    <span className="text-xs font-bold text-slate-300 block">
                      🏢 10,000+ Tonnes
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Operation Status</span>
                    <span className="text-[10px] font-bold text-emerald-400 block truncate font-mono">
                      ● ONLINE (QC HQ)
                    </span>
                  </div>
                </div>

                {/* Hub Entry Points */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">Primary Transit Exit Outlets</span>
                  <p className="text-xs font-bold text-slate-205">
                    🚢 Anzali / Astara Ports & Caspi Trans
                  </p>
                </div>

                {/* Core Products Catalog */}
                <div className="space-y-2 pt-1 border-t border-slate-800/60">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400 block">Main Fresh Crops Certified</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Premium Kiwifruit', 'Celery', 'Iceberg Lettuce', 'Romaine Lettuce', 'White Garlic', 'Sweet Bell Peppers', 'Cabagges'].map((p, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-lg text-[10px] font-medium"
                      >
                        ✨ {p}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Interactive B2B Quick Navigation country list selector */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-slate-500 block">
                Select Destination Country to Monitor
              </span>
              <button
                onClick={() => { setSelectedId(null); setZoomLevel(1.0); }}
                className={`px-2 py-0.5 rounded-md text-[8.5px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 border ${
                  selectedId === null 
                    ? 'bg-amber-400 text-slate-950 border-amber-400 font-black' 
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-250 hover:bg-slate-800'
                }`}
              >
                <RotateCcw className="w-2.5 h-2.5" />
                Reset (Focus Iran Hub)
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5">
              {exportCountries.map((c) => {
                const isActive = c.id === selectedId;
                return (
                  <button
                    key={c.id}
                    onClick={() => { setSelectedId(c.id); setZoomLevel(1.0); }}
                    onMouseEnter={() => setHoveredId(c.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`py-2 px-1 rounded-xl text-[10px] font-bold uppercase transition-all duration-300 text-center flex flex-col justify-center items-center gap-1 cursor-pointer border ${
                      isActive 
                        ? 'bg-[#3b7521] text-white border-emerald-400 shadow-md shadow-emerald-900/20 scale-105' 
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[9px]">{c.id.toUpperCase()}</span>
                    <span className="truncate max-w-full text-[9px]">{c.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Hand Dynamic, Real-world Vector Map Container */}
        <div className="lg:col-span-8 bg-slate-900/30 rounded-3xl border border-slate-800 p-2 relative flex items-center justify-center min-h-[350px] sm:min-h-[480px] overflow-hidden">
          
          {/* Main Map Box Wrapper */}
          <div className="w-full h-full relative" style={{ minHeight: "inherit" }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                center: animatedProjection.center,
                scale: animatedProjection.scale
              }}
              className="w-full h-full absolute inset-0 select-none"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.5))" }}
            >
              <Geographies 
                geography={geoUrl}
              >
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties?.name || "";
                    
                    // Standard properties names check for 100% correct matching
                    const isIran = countryName.toLowerCase().includes("iran");
                    
                    // Identify if active export destination with 100% precise matching
                    const targetCountry = exportCountries.find(c => {
                      const geoLower = countryName.toLowerCase().trim();
                      const targetLower = c.name.toLowerCase().trim();
                      if (geoLower === targetLower) return true;
                      if (c.id === 'ru') return geoLower === 'russia' || geoLower === 'russian federation';
                      if (c.id === 'ae') return geoLower === 'united arab emirates' || geoLower === 'uae';
                      return false;
                    });
                    const isDestination = !!targetCountry;
                    const isSelected = targetCountry?.id === selectedId;
                    const isHovered = targetCountry?.id === hoveredId;

                    // Exquisite dark themed visualization values
                    let fill = "#0d1527"; // deep ocean slate
                    let stroke = "#1c2c47"; // clean border lines
                    let opacity = 0.5;

                    if (isIran) {
                      fill = "#064e3b"; // rich forest green hub
                      stroke = "#10b981"; // neon green glowing borders
                      opacity = 0.95;
                    } else if (isDestination) {
                      opacity = 0.9;
                      if (isSelected) {
                        fill = "#14532d"; // active target green
                        stroke = "#a3e635"; // radiant golden lime border
                      } else if (isHovered) {
                        fill = "#14532d";
                        stroke = "#10b981";
                      } else {
                        fill = "#1e293b"; // passive target grey-blue
                        stroke = "#475569";
                      }
                    }

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isIran || isSelected ? 1.4 : 0.4}
                        style={{
                          default: { fill, stroke, opacity, outline: "none", transition: "fill 0.4s ease, stroke 0.4s ease, opacity 0.4s ease" },
                          hover: { 
                            fill: isDestination ? "#163a21" : isIran ? "#064e3b" : "#131a29", 
                            stroke: isDestination ? "#a3e635" : stroke,
                            opacity: 0.95, 
                            cursor: isDestination ? "pointer" : "default",
                            outline: "none" 
                          },
                          pressed: { fill: "#111827", outline: "none" }
                        }}
                        onClick={() => {
                          if (isDestination && targetCountry) {
                            setSelectedId(targetCountry.id);
                          }
                        }}
                        onMouseEnter={() => {
                          if (isDestination && targetCountry) {
                            setHoveredId(targetCountry.id);
                          }
                        }}
                        onMouseLeave={() => {
                          if (isDestination && targetCountry) {
                            setHoveredId(null);
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Shipping Lanes (Slick geodesics curves natively rendered) */}
              {exportCountries.map((country) => {
                const isSelected = country.id === selectedId;
                const isHovered = country.id === hoveredId;
                const strokeColor = isSelected 
                  ? '#a3e635' 
                  : isHovered 
                    ? '#10b981' 
                    : 'rgba(16, 185, 129, 0.16)';
                const strokeWidth = isSelected ? 2.5 : isHovered ? 1.8 : 0.8;

                return (
                  <React.Fragment key={`lane-${country.id}`}>
                    {/* The Soft Backglow under the active lane */}
                    {isSelected && (
                      <Line
                        from={origin.coordinates}
                        to={country.coordinates}
                        stroke="#10b981"
                        strokeWidth={6}
                        strokeLinecap="round"
                        style={{ opacity: 0.15, filter: "blur(3px)" }}
                      />
                    )}
                    
                    {/* The SOLID shipping dynamic route */}
                    <Line
                      from={origin.coordinates}
                      to={country.coordinates}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                    />

                    {/* Laser Flow stream travel animation along curved path */}
                    {animateLanes && (
                      <Line
                        from={origin.coordinates}
                        to={country.coordinates}
                        stroke={isSelected ? '#a3e635' : '#10b981'}
                        strokeWidth={isSelected ? 3 : 1}
                        strokeLinecap="round"
                        className="animate-map-dash"
                        style={{ 
                          opacity: isSelected ? 1 : isHovered ? 0.8 : 0.3,
                          strokeDasharray: isSelected ? "8, 12" : "4, 10"
                        }}
                      />
                    )}
                  </React.Fragment>
                );
              })}

              {/* Target countries label markers (Standard pins with text) */}
              {exportCountries.map((country) => {
                const isSelected = country.id === selectedId;
                const isHovered = country.id === hoveredId;

                return (
                  <Marker 
                    key={`marker-${country.id}`} 
                    coordinates={country.coordinates}
                  >
                    <g 
                      className="cursor-pointer"
                      onClick={() => setSelectedId(country.id)}
                      onMouseEnter={() => setHoveredId(country.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* Quiet static dot indicator (Pulsing rings removed to maintain executive look) */}
                      <circle 
                        r={isSelected ? 6 : 4} 
                        fill={isSelected ? '#a3e635' : '#10b981'} 
                        className="transition-colors duration-300 stroke-slate-950 stroke-width-[1.2]" 
                      />
                      <circle 
                        r="1.5" 
                        fill="#FFFFFF" 
                      />

                      {/* Map label overlay */}
                      <text
                        x="8"
                        y="3"
                        fill={isSelected ? '#a3e635' : '#cbd5e1'}
                        fontSize="8"
                        fontWeight={isSelected ? 'bold' : '500'}
                        fontFamily="Inter, system-ui, sans-serif"
                        className="hidden sm:inline pointer-events-none drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.95)]"
                      >
                        {country.name}
                      </text>
                    </g>
                  </Marker>
                );
              })}

              {/* Gilan Province Central Hub Star Marker */}
              <Marker coordinates={origin.coordinates}>
                <g className="translate-y-[-1px]">
                  {/* Clean static pinpoint of origin */}
                  <circle 
                    r="8" 
                    fill="#059669" 
                    className="stroke-white stroke-width-1" 
                  />
                  <circle 
                    r="3" 
                    fill="#FFFFFF" 
                  />

                  {/* High Contrast badge for Iran */}
                  <g transform="translate(0, -17)" className="pointer-events-none">
                    <rect 
                      x="-25" 
                      y="-7" 
                      width="50" 
                      height="13" 
                      rx="3.5" 
                      fill="#047857" 
                      stroke="#a3e635" 
                      strokeWidth="1" 
                    />
                    <text 
                      y="2" 
                      fill="#FFFFFF" 
                      fontSize="7" 
                      fontWeight="bold" 
                      textAnchor="middle"
                      fontFamily="Inter, Space Grotesk, sans-serif"
                    >
                      IRAN
                    </text>
                  </g>
                </g>
              </Marker>
            </ComposableMap>

            {/* Elegant Floating Map Controls HUD */}
            <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800/80 rounded-2xl p-1.5 flex flex-col gap-1 z-25 shadow-2xl">
              <button
                onClick={() => setZoomLevel(prev => Math.min(3.0, prev + 0.25))}
                title="Zoom In (بزرگنمایی)"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-slate-800 hover:border-emerald-500/30"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.25))}
                title="Zoom Out (کوچکنمایی)"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-slate-800 hover:border-emerald-500/30"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <div className="h-[1px] bg-slate-800 my-0.5" />

              <button
                onClick={() => { setZoomLevel(1.0); setSelectedId(null); }}
                title="Reset View (نمای اولیه)"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-400 text-slate-300 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer border border-slate-800 hover:border-amber-400/30"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            
            {/* Ambient Loading indicator state */}
            {!mapLoaded && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col justify-center items-center space-y-3 z-50">
                <Globe className="w-8 h-8 text-emerald-450 animate-spin" />
                <span className="text-[10px] font-mono tracking-widest text-slate-400">LOADING VECTOR GEODATA...</span>
              </div>
            )}
            
            {/* Compass HUD indicator inside container */}
            <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-slate-800 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-[9px] text-[#a3e635] font-mono pointer-events-none z-10">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-slate-350 tracking-wider">GEO LAT-LONG CALIGNED</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-slate-950/80 border border-slate-800 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-[9px] text-[#a3e635] font-mono pointer-events-none z-10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GilaFruit Supply Stream</span>
            </div>
          </div>

        </div>

      </div>

      {/* Map Footer Informative Legend Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-8 border-t border-slate-800 text-left relative z-10">
        
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-200">Reefer Truck Dispatching</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-light">
              Continuous direct land-logistics line utilizing insulated heavy-freight temperature regulated thermo-trucks (Russia, Iraq, Uzbekistan).
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center shrink-0">
            <Anchor className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-200">Maritime Reefer Shipping</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-light">
              Premium shipping line utilizing controlled atmosphere (CA) 40ft reefer containers to achieve maximum freshness and shelf life preservation (UAE, Doha, India).
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-200">100% Phyto-Inspection Safety</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-light">
              All packaging and cooling corridors are fully ISO, HACCP, and SGS certified, securing seamless customs clearance at ports of arrival.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
