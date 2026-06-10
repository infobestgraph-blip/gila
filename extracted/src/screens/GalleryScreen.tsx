import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Phone, Globe, Info, Apple, Sprout
} from 'lucide-react';

// Highly polished, extensive gallery data matching the 29 crop categories requested
const galleryCategories = [
  "All", "Kiwi", "Watermelon", "Mandarin", "Dill and Parsley", "Nectar", "Grape", 
  "Bell Pepper", "Iceberg", "Romano", "Cabbage", "Celery", "Broccoli", "Eggplant", 
  "Apple", "Garlic", "Melon", "Plum", "Peach", "Apricot", "Carrot", 
  "Cauliflower", "Cherry", "Corn", "Cucumber", "Lemon", "Orange", "Potato", 
  "Tomato", "Zucchini"
];

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
}

const initialGalleryItems: GalleryItem[] = [
  // Kiwi Packings (The flagship crop)
  {
    id: 1,
    title: 'Twin Row Kiwi Grading',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=600',
    desc: 'Hayward kiwis sorted in precise physical weight calibers at GilaFruit Astara.'
  },
  {
    id: 2,
    title: 'Plastic Basket Kiwi Pack',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600',
    desc: '4 kg food grade red crates filled with premium organic fuzzy kiwifruits.'
  },
  {
    id: 3,
    title: 'Caspian Greenbelt Orchards',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600',
    desc: 'Morning harvesting operations inside the coastal region of Talesh.'
  },
  {
    id: 4,
    title: 'Bulk 10 KG Kiwi Crates',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    desc: 'High ventilation white polymer trays, stacked for Russian maritime container dispatch.'
  },
  {
    id: 5,
    title: 'Strap Secured Pallet Stack',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600',
    desc: 'EAEU-compliant strapping bands securing cold-storage kiwifruits pallet towers.'
  },

  // Watermelon Packings
  {
    id: 6,
    title: 'Charleston Gray Selection',
    category: 'Watermelon',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    desc: 'Thick rind Caspians watermelons with high shock resistance during trans-national haul.'
  },
  {
    id: 7,
    title: 'Sweet Caspian Watermelons',
    category: 'Watermelon',
    image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&q=80&w=600',
    desc: 'Symmetric round and stripe-textured watermelons loaded in customized wood baskets.'
  },

  // Mandarin Packings
  {
    id: 8,
    title: 'Double-Row Mandarin Crates',
    category: 'Mandarin',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600',
    desc: 'Premium orange mandarins hand-folded inside protective wrapping covers.'
  },
  {
    id: 9,
    title: 'Satsuma Citrus Load',
    category: 'Mandarin',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=600',
    desc: 'Freshly plucked thin-skinned mandarins ready for calibration grader cups.'
  },

  // Dill and Parsley Packings
  {
    id: 10,
    title: 'Iced Herbs Packing Case',
    category: 'Dill and Parsley',
    image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=600',
    desc: 'Fresh green dill bundled in paraffin waxed moisture-shield waterboards.'
  },
  {
    id: 11,
    title: 'Organic Fragrant Parsley',
    category: 'Dill and Parsley',
    image: 'https://images.unsplash.com/photo-1515471204580-c11cffe9f0f9?auto=format&fit=crop&q=80&w=600',
    desc: 'Vibrant green herbs kept cool with dry-ice gel caps inside our CA holding bay.'
  },

  // Nectar Packings
  {
    id: 12,
    title: 'Tasting Sweet Necta',
    category: 'Nectar',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600',
    desc: 'Fleshy sweet nectar fruits, graded by color index and firmness gauges.'
  },

  // Grape Packings
  {
    id: 13,
    title: 'High-Density Premium Grapes',
    category: 'Grape',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600',
    desc: 'White seedless and red ruby grapes carefully aligned in micro-aerated cartons.'
  },

  // Bell Pepper Packings
  {
    id: 14,
    title: 'Californian Wonder Peppers',
    category: 'Bell Pepper',
    image: 'https://images.unsplash.com/photo-1563565312-9ab2e6a52651?auto=format&fit=crop&q=80&w=600',
    desc: 'Red, yellow, and green blocky bell peppers with zero surface blemishes.'
  },

  // Iceberg Packings
  {
    id: 15,
    title: 'Pre-cooled Iceberg Cartons',
    category: 'Iceberg',
    image: 'https://images.unsplash.com/photo-1622484211148-716598e0911a?auto=format&fit=crop&q=80&w=600',
    desc: 'Wrapped iceberg lettuce heads packed in triple-walled waxed containers.'
  },

  // Romano Packings
  {
    id: 16,
    title: 'Romaine Lettuce Yield',
    category: 'Romano',
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&q=80&w=600',
    desc: 'Long leaves of fresh Romaine greens, hydro-cooled and readied for EAEU trucks.'
  },

  // Cabbage Packings
  {
    id: 17,
    title: 'Dense Sweet Cabbage Stacks',
    category: 'Cabbage',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600',
    desc: 'Round white cabbage heads packed in grid pattern bags on standard wood pallets.'
  },

  // Celery Packings
  {
    id: 18,
    title: 'Premium Celery Boxes',
    category: 'Celery',
    image: 'https://images.unsplash.com/photo-1610397551046-d5673df6cf92?auto=format&fit=crop&q=80&w=600',
    desc: 'Stiff celery stalks trim-cut to 35cm, packed tightly to prevent fiber damage.'
  },

  // Broccoli Packings
  {
    id: 19,
    title: 'Ice-Injected Broccoli Florets',
    category: 'Broccoli',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600',
    desc: 'Deep green broccoli crown bundles packed vertically in paraffin boxes.'
  },

  // Eggplant Packings
  {
    id: 20,
    title: 'Glossy Caspian Eggplants',
    category: 'Eggplant',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4bc820?auto=format&fit=crop&q=80&w=600',
    desc: 'Dark purple oval eggplants sorted on soft sponge beds before pack sealing.'
  },

  // Apple Packings
  {
    id: 21,
    title: 'Symmetric Red Apples Tray',
    category: 'Apple',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600',
    desc: 'Polish apples nested in custom pulp-board dimple liners for export safety.'
  },

  // Garlic Packings
  {
    id: 22,
    title: 'High-Pungency Cured Garlic',
    category: 'Garlic',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600',
    desc: 'White and purple garlic heads cured in continuous wind tunnels for low moisture.'
  },

  // Melon Packings
  {
    id: 23,
    title: 'Cantaloupe Sweet Melons',
    category: 'Melon',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600',
    desc: 'Mesh-veined orange flesh melons, packed in dual protective padding caps.'
  },

  // Plum Packings
  {
    id: 24,
    title: 'Deep Purple Sweet Plums',
    category: 'Plum',
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?auto=format&fit=crop&q=80&w=600',
    desc: 'Caspian wild plums sorted by optical graders in Astara plants.'
  },

  // Peach Packings
  {
    id: 25,
    title: 'Polished Velvet Peaches',
    category: 'Peach',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=600',
    desc: 'Fragrant and tender velvet peaches snuggly nested in single-level cell-trays.'
  },

  // Apricot Packings
  {
    id: 26,
    title: 'Golden Honey Apricotes',
    category: 'Apricot',
    image: 'https://images.unsplash.com/photo-1559181567-c3190cb9959b?auto=format&fit=crop&q=80&w=600',
    desc: 'Grade-A orange-flesh apricots sorted down to firm textures.'
  },

  // Carrot Packings
  {
    id: 27,
    title: 'Sweet Wash-Cleaned Carrots',
    category: 'Carrot',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=600',
    desc: 'Sweet deep orange carrots washed, trimmed, and bagged in 10kg poly sacks.'
  },

  // Cauliflower Packings
  {
    id: 28,
    title: 'Winter Cauliflower Heads',
    category: 'Cauliflower',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=600',
    desc: 'Pure snowy white cauliflowers wrapped in defensive cling-wrap with leaves intact.'
  },

  // Cherry Packings
  {
    id: 29,
    title: 'Astara Royal Sweet Cherries',
    category: 'Cherry',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=600',
    desc: 'Glossy red cherries checked carefully for stem connections.'
  },

  // Corn Packings
  {
    id: 30,
    title: 'Sweetcorn Export Sacks',
    category: 'Corn',
    image: 'https://images.unsplash.com/photo-1551754625-70c9048734dd?auto=format&fit=crop&q=80&w=600',
    desc: 'Sweet golden cobs hand-harvested and packed in highly aerated mesh.'
  },

  // Cucumber Packings
  {
    id: 31,
    title: 'Caspian Green Cucumbers',
    category: 'Cucumber',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=600',
    desc: 'Firm, straight cucumbers calibrated for perfect dimensions and crisp shelf-life.'
  },

  // Lemon Packings
  {
    id: 32,
    title: 'Lisbon Acidic Lemons',
    category: 'Lemon',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=600',
    desc: 'Bright yellow juicy lemons processed inside our degreening vaults.'
  },

  // Orange Packings
  {
    id: 33,
    title: 'Caspian Valencia Oranges',
    category: 'Orange',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600',
    desc: 'Lush valencia oranges aligned in three-tier sturdy wood baskets.'
  },

  // Potato Packings
  {
    id: 34,
    title: 'Gilan Russet Potatoes',
    category: 'Potato',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600',
    desc: 'Low-starch high-durability baking potatoes packed in durable jute bags.'
  },

  // Tomato Packings
  {
    id: 35,
    title: 'Cluster Greenhouse Tomatoes',
    category: 'Tomato',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600',
    desc: 'High brix tomatoes packed beautifully in cardboard flats with soft nestings.'
  },

  // Zucchini Packings
  {
    id: 36,
    title: 'Dark Green Local Zucchini',
    category: 'Zucchini',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600',
    desc: 'Firm summer zucchini packed face-down in single rows for direct retail markets.'
  }
];

export default function GalleryScreen() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items according to state
  const filteredItems = activeCategory === "All" 
    ? initialGalleryItems 
    : initialGalleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase() || (activeCategory === "Dill and Parsley" && item.category === "Dill and Parsley"));

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="gallery-root">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#01261d] text-white overflow-hidden pt-24 pb-20 sm:pt-[112px] sm:pb-28 md:pt-[148px] md:pb-32 text-center" id="gallery-hero">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=1200" 
            alt="Lush Iranian gardens background" 
            className="w-full h-full object-cover opacity-20 pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021f18]/95 via-[#011a14]/98 to-[#011811]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            A Picture is Worth A Thousand Words
          </h1>
          <p className="max-w-2xl text-emerald-300 text-xs sm:text-sm font-semibold leading-relaxed pt-1">
            On this Product Photo Gallery, you can see examples of our export products, including high-quality fruits and vegetables. You can also see images of our various product packaging and learn about how they are prepared and exported by Gilafruit.
          </p>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-2" />
        </div>

        {/* Paper Rip Zigzag Transition SVG */}
        <div className="absolute bottom-0 left-0 right-0 z-25 text-slate-50 w-full pointer-events-none overflow-hidden select-none">
          <svg viewBox="0 0 1440 40" fill="currentColor" preserveAspectRatio="none" className="w-full h-10 transform scale-y-110">
            <path d="M0,40 L1440,40 L1440,20 L1400,32 L1360,18 L1320,30 L1280,14 L1240,28 L1200,12 L1160,26 L1120,10 L1080,24 L1040,15 L1000,28 L960,12 L920,25 L880,10 L840,24 L800,14 L760,28 L720,12 L680,26 L640,14 L600,28 L560,12 L520,26 L480,10 L440,24 L400,15 L360,28 L320,12 L280,25 L240,10 L200,24 L160,14 L120,28 L80,12 L40,26 L0,15 Z" />
          </svg>
        </div>
      </div>

      {/* 2. DESCRIPTION GREETING WHITE BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-35" id="gallery-greeting-wrapper">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-8 sm:p-10 text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-100 text-[#014134] rounded-full text-[11px] font-extrabold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            Premium Caspians Agriculture Portfolio
          </div>
          <p className="text-[#014134] font-display font-semibold text-lg sm:text-xl tracking-tight">
            "In our product photo gallery, we've opened a window to the lush gardens of Iran"
          </p>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify sm:text-center text-justify font-sans">
            Here, you can view an exhibition of the finest and highest-quality Iranian fruits and vegetables, harvested, packaged, and prepared for export by the dedicated experts at GilaFruit. By utilizing the latest knowledge and technology, we produce our products to meet the highest international standards. In this section, you'll find a variety of products, from delicious and juicy kiwis to sweet watermelons, fragrant melons, various types of flavorful citrus fruits, and fresh vegetables. By viewing the images, you can witness the production and packaging processes up close. Join us as we bring the taste of freshness and health from the heart of Iran's gardens to your tables.
          </p>
        </div>
      </div>

      {/* 3. CATEGORIES FILTERS ACCORDION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="gallery-categories-wrapper">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#014134] font-bold">
            Filter Gallery Portfolio ({initialGalleryItems.length} High-Res Images)
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl bg-white p-3 rounded-2xl border border-slate-200 shadow-sm" id="categories-tabs">
            {galleryCategories.map((category) => {
              const isActive = activeCategory.toLowerCase() === category.toLowerCase();
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-bold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-md font-extrabold border border-emerald-950/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-emerald-900 border border-slate-200/50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. PHOTO GALLERY GRID - STRICTLY 5 COLUMNS ON DESKTOP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24" id="gallery-cards-grid">
        {filteredItems.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center text-slate-500 max-w-lg mx-auto space-y-4">
            <Camera className="w-12 h-12 text-slate-300 mx-auto animate-pulse" />
            <h3 className="font-display font-bold text-slate-800">No Gallery Photos</h3>
            <p className="text-xs leading-relaxed">
              We currently do not have active photos uploaded for category <strong className="text-emerald-900 font-extrabold">"{activeCategory}"</strong>. Check other premium fruits or vegetables category!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-800/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Image Container with Watermark Overlay */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Transparent Watermark across center diagonally */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 overflow-hidden">
                    <span className="text-white/15 uppercase font-sans font-black tracking-widest text-[16px] transform -rotate-12 whitespace-nowrap bg-black/5 px-2 py-0.5 rounded border border-white/5 opacity-80">
                      WWW.GILAFRUIT.COM
                    </span>
                  </div>

                  {/* Dark transparent fade at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-100 transition-opacity" />
                  
                  {/* Category Tag overlay */}
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#014134] text-white text-[8px] uppercase font-bold tracking-wider rounded font-mono">
                    {item.category}
                  </span>

                  {/* Maximize Icon */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-display font-extrabold text-[12px] text-slate-900 leading-tight group-hover:text-emerald-800 transition-colors uppercase truncate">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Standard bottom GilaFruit tag band matching user screenshot */}
                <div className="bg-[#014134] text-white text-[8px] font-mono font-medium px-2 py-1 flex justify-between items-center w-full select-none border-t border-emerald-950/20">
                  <span className="text-[7.5px] uppercase text-emerald-300">www.gilafruit.com</span>
                  <span className="text-[7.5px] font-bold text-[#eab308]">+98 990 097 8002</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* 5. LIGHTBOX MODAL WITH INDEX NAVIGATION (NEXT / PREV) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button top-right */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl font-bold transition-all border border-white/10 shadow-lg cursor-pointer"
              title="Close Gallery Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Lightbox Frame */}
            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center space-y-4">
              
              {/* Image and Arrows Split */}
              <div 
                className="relative w-full flex items-center justify-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Prev Arrow */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-16 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Photo canvas */}
                <div className="relative max-h-[75vh] max-w-[90vw] overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-950 flex flex-col">
                  <img 
                    src={filteredItems[lightboxIndex].image} 
                    alt={filteredItems[lightboxIndex].title} 
                    className="max-h-[65vh] max-w-full object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay watermark */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-10">
                    <span className="text-white/20 uppercase font-sans font-black tracking-widest text-2xl sm:text-4xl transform -rotate-12 border-2 border-white/10 px-4 py-1.5 rounded-xl bg-black/20">
                      WWW.GILAFRUIT.COM
                    </span>
                  </div>

                  {/* Green brand band */}
                  <div className="bg-[#014134] text-white px-6 py-2.5 flex justify-between items-center w-full text-xs font-mono border-t border-emerald-950/40 select-none">
                    <span className="text-emerald-300 font-bold uppercase tracking-wider">www.gilafruit.com</span>
                    <span className="text-[#eab308] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      +98 990 097 8002
                    </span>
                  </div>
                </div>

                {/* Next Arrow */}
                <button 
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-16 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  title="Next Image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

              </div>

              {/* Sub-Info labels under image */}
              <div 
                className="text-center text-white max-w-2xl bg-black/40 p-4 rounded-2xl border border-white/5 backdrop-blur-xs select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-center items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase mb-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{filteredItems[lightboxIndex].category} • Slide {lightboxIndex + 1} of {filteredItems.length}</span>
                </div>
                <h3 className="font-display font-black text-lg text-white mb-0.5 uppercase tracking-tight">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-350 leading-relaxed font-sans">
                  {filteredItems[lightboxIndex].desc}
                </p>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
