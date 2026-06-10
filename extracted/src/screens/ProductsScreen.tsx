import { useState, useMemo, useEffect } from 'react';
import { Search, RotateCcw, ArrowRight, Filter, ShoppingBag, Globe } from 'lucide-react';
import { Product } from '../types';

interface ProductsScreenProps {
  products: Product[];
  onNavigate: (hash: string) => void;
}

export default function ProductsScreen({ products, onNavigate }: ProductsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'fruit' | 'vegetable'>('all');
  const [seasonFilter, setSeasonFilter] = useState<string>('all');

  // Sync category filter from URL hash changes
  useEffect(() => {
    const handleCheckHash = () => {
      const hash = window.location.hash;
      if (hash.includes('category=fruit')) {
        setCategoryFilter('fruit');
      } else if (hash.includes('category=vegetable')) {
        setCategoryFilter('vegetable');
      } else {
        setCategoryFilter('all');
      }
    };
    
    // Check key query triggers on mount
    handleCheckHash();
    
    window.addEventListener('hashchange', handleCheckHash);
    return () => window.removeEventListener('hashchange', handleCheckHash);
  }, []);

  // Gather unique seasons keywords for filter selection
  const seasonalOptions = useMemo(() => {
    const seasonsList = ['all'];
    products.forEach((p) => {
      if (p.season.toLowerCase().includes('october') || p.season.toLowerCase().includes('winter') || p.season.toLowerCase().includes('oct')) {
        if (!seasonsList.includes('Autumn/Winter')) seasonsList.push('Autumn/Winter');
      }
      if (p.season.toLowerCase().includes('april') || p.season.toLowerCase().includes('summer') || p.season.toLowerCase().includes('june') || p.season.toLowerCase().includes('may')) {
        if (!seasonsList.includes('Spring/Summer')) seasonsList.push('Spring/Summer');
      }
    });
    return seasonsList;
  }, [products]);

  // Filter products based on state variables
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // 1. Search Query Match
      const matchesSearch = 
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.markets.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));

      // 2. Category Match
      const matchesCategory = categoryFilter === 'all' ? true : prod.category === categoryFilter;

      // 3. Season Match
      let matchesSeason = true;
      if (seasonFilter !== 'all') {
        const seasonText = prod.season.toLowerCase();
        if (seasonFilter === 'Autumn/Winter') {
          matchesSeason = seasonText.includes('oct') || seasonText.includes('nov') || seasonText.includes('dec') || seasonText.includes('jan') || seasonText.includes('feb') || seasonText.includes('mar') || seasonText.includes('winter');
        } else if (seasonFilter === 'Spring/Summer') {
          matchesSeason = seasonText.includes('apr') || seasonText.includes('may') || seasonText.includes('jun') || seasonText.includes('jul') || seasonText.includes('aug') || seasonText.includes('sep') || seasonText.includes('summer');
        }
      }

      return matchesSearch && matchesCategory && matchesSeason;
    });
  }, [products, searchQuery, categoryFilter, seasonFilter]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setSeasonFilter('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-[148px] pb-20 animate-fade-in" id="products-view">
      
      {/* Page Introduction Banner */}
      <div className="text-left space-y-4 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-150 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          B2B Wholesale Export Catalog
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-none">
          Our Fruits & Vegetables for Export
        </h1>
        <p className="text-slate-650 text-sm sm:text-base max-w-3xl leading-relaxed">
          GilaFruit provides a diverse series of fresh premium crops matching rigorous phytosanitary inspection controls. Select a category below or explore each product’s packaging and wholesale dimensions.
        </p>
      </div>

      {/* B2B Informational Banner */}
      <div className="bg-amber-500/10 border border-amber-505/20 rounded-2xl p-5 mb-12 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <strong className="text-sm font-bold text-slate-900 font-display">Sovereign Export Distribution Notice</strong>
          </div>
          <p className="text-xs text-slate-600 leading-normal max-w-2xl">
            We operate exclusively as a <strong>direct wholesale exporter</strong> (Minimum Order: 1 Full Refrigerated Container/Truck, approx. 18-22 tons). To preserve absolute flexibility and integrity, <strong>no online shopping, pricing index, or retail checkout</strong> is facilitated on this platform. Pricing is generated upon request according to destination custom protocols.
          </p>
        </div>
        <a
          href="#/contact"
          className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold font-sans uppercase tracking-wider rounded-xl transition-all shadow-xs shrink-0"
        >
          Request Custom RFQ
        </a>
      </div>

      {/* Interactive Filters Panel */}
      <div className="bg-slate-55 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-4 mb-12 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search bar block */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, market (e.g. Russia, Belarus), or properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-2xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent transition-all shadow-inner"
              id="product-search-input"
            />
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            
            {/* Category tabs */}
            <div className="bg-slate-200/60 p-1 rounded-xl flex gap-1">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setCategoryFilter('fruit')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  categoryFilter === 'fruit'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
              >
                Fruits Only
              </button>
              <button
                onClick={() => setCategoryFilter('vegetable')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  categoryFilter === 'vegetable'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
              >
                Vegetables Only
              </button>
            </div>

            {/* Harvesting Season Filter dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs font-semibold flex items-center gap-1">
                <Filter className="w-3 h-3 text-slate-400" /> Season:
              </span>
              <select
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-800"
                id="season-filter-dropdown"
              >
                <option value="all">All Seasons Availability</option>
                <option value="Autumn/Winter">Autumn & Winter (Oct - Mar)</option>
                <option value="Spring/Summer">Spring & Summer (Apr - Sep)</option>
              </select>
            </div>

            {/* Reset button */}
            {(searchQuery || categoryFilter !== 'all' || seasonFilter !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 transition-colors rounded-xl text-xs text-slate-700 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}

          </div>

        </div>

        {/* Counter indicator */}
        <p className="text-xs text-slate-500 font-semibold text-left">
          Showing {filteredProducts.length} of {products.length} export products matching active parameters.
        </p>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left" id="products-catalog-grid">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden group bg-slate-100">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-emerald-900/90 text-white rounded-full text-[10px] uppercase font-bold tracking-wider">
                  {prod.category}
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-1 bg-amber-400 text-slate-950 font-semibold text-[10px] rounded">
                  {prod.season}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-800 text-base leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal line-clamp-3">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {prod.markets.slice(0, 3).map((m, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px] font-semibold border border-slate-200/50">
                        {m}
                      </span>
                    ))}
                    {prod.markets.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-400 rounded text-[9px] font-semibold">
                        +{prod.markets.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase">
                      Specs Ready
                    </span>
                    <button
                      onClick={() => onNavigate(`#/product/${prod.slug}`)}
                      className="px-4 py-1.5 bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white transition-colors duration-150 rounded-full text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      Inspect
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center space-y-4 bg-slate-25 rounded-3xl border border-dashed border-slate-300">
          <p className="text-slate-400 text-4xl">📭</p>
          <p className="text-slate-800 font-bold text-base font-display">No agricultural commodities found</p>
          <p className="text-slate-500 text-xs">Try adjusting your filters or search keywords above.</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs rounded-full shadow transition-all cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      )}

    </div>
  );
}
