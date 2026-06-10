import React, { useState } from 'react';
import { 
  Building, LayoutDashboard, ShoppingCart, BookOpen, 
  Settings, Award, Calendar, LogOut, Plus, Trash2, 
  Edit, Save, ChevronRight, CheckCircle2, MessageSquare, AlertCircle
} from 'lucide-react';
import { Product, BlogArticle, Certificate, Testimonial, CalendarItem, ContactMessage } from '../types';

interface AdminScreenProps {
  products: Product[];
  blogs: BlogArticle[];
  certificates: Certificate[];
  calendarItems: CalendarItem[];
  messages: ContactMessage[];
  pagesConfig: any;
  onUpdateProducts: (newProds: Product[]) => void;
  onUpdateBlogs: (newBlogs: BlogArticle[]) => void;
  onUpdateCertificates: (newCerts: Certificate[]) => void;
  onUpdateCalendar: (newCalendar: CalendarItem[]) => void;
  onUpdatePagesConfig: (newPagesConfig: any) => void;
}

export default function AdminScreen({
  products,
  blogs,
  certificates,
  calendarItems,
  messages,
  pagesConfig,
  onUpdateProducts,
  onUpdateBlogs,
  onUpdateCertificates,
  onUpdateCalendar,
  onUpdatePagesConfig
}: AdminScreenProps) {
  
  // Simulated Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default loaded for smooth preview!
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab state
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'blogs' | 'pages' | 'calendar' | 'messages'>('dashboard');

  // Form Edit states
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogArticle> | null>(null);
  
  // Page configurations state
  const [homeHeroTitle, setHomeHeroTitle] = useState(pagesConfig?.home?.heroTitle || '');
  const [homeHeroDesc, setHomeHeroDesc] = useState(pagesConfig?.home?.heroDescription || '');
  const [companyDesc, setCompanyDesc] = useState(pagesConfig?.home?.companyDescription || '');

  const monthsList = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Simple hardcoded login password
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin' || passwordInput === 'gilafruit') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Authentication rejected. Use "admin" or "gilafruit" as password.');
    }
  };

  // Product actions
  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product from the export catalog?')) {
      const updated = products.filter(p => p.id !== id);
      onUpdateProducts(updated);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.name || !editingProduct?.slug) return;

    let updatedList: Product[];
    if (editingProduct.id) {
      // Edit mode
      updatedList = products.map(p => p.id === editingProduct.id ? (editingProduct as Product) : p);
    } else {
      // Create mode
      const newProd: Product = {
        ...(editingProduct as Product),
        id: 'p_' + Math.random().toString(36).substring(2, 9),
        markets: editingProduct.markets || ['Russia', 'Belarus'],
        specs: editingProduct.specs || {
          size: 'Grade A Sizing',
          weight: 'Packed in standard boxes',
          packaging: 'Planimetric packing',
          standards: 'HACCP Standard'
        }
      };
      updatedList = [...products, newProd];
    }

    onUpdateProducts(updatedList);
    setEditingProduct(null);
  };

  // Blog post actions
  const handleDeleteBlog = (id: string) => {
    if (confirm('Remove this blog article permanently?')) {
      const updated = blogs.filter(b => b.id !== id);
      onUpdateBlogs(updated);
    }
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog?.title || !editingBlog?.slug) return;

    let updatedList: BlogArticle[];
    if (editingBlog.id) {
      updatedList = blogs.map(b => b.id === editingBlog.id ? (editingBlog as BlogArticle) : b);
    } else {
      const newBlog: BlogArticle = {
        ...(editingBlog as BlogArticle),
        id: 'b_' + Math.random().toString(36).substring(2, 9),
        publishDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        tags: editingBlog.tags || ['Farming', 'Export'],
      };
      updatedList = [newBlog, ...blogs];
    }
    
    onUpdateBlogs(updatedList);
    setEditingBlog(null);
  };

  // Save Home Page config adjustments
  const handleSavePagesConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...pagesConfig,
      home: {
        ...pagesConfig?.home,
        heroTitle: homeHeroTitle,
        heroDescription: homeHeroDesc,
        companyDescription: companyDesc
      }
    };
    onUpdatePagesConfig(updated);
    alert('Home Page section configuration written successfully!');
  };

  // Toggle calendar month availabilities
  const handleToggleCalendarMonth = (itemId: string, monthIdx: number) => {
    const updated = calendarItems.map((item) => {
      if (item.id === itemId) {
        const months = [...item.monthsAvailable];
        months[monthIdx] = !months[monthIdx];
        return { ...item, monthsAvailable: months };
      }
      return item;
    });
    onUpdateCalendar(updated);
  };

  // Render Login state first
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 text-center shadow-2xl">
          <div className="space-y-2">
            <h1 className="font-display text-2.5xl font-extrabold text-emerald-400">GilaFruit Console</h1>
            <p className="text-xs text-slate-400">Sabz Gostaran Gilan Fruit Co. Administrative Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Security Passkey</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            {authError && (
              <p className="text-[11px] text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider text-slate-950 rounded-xl transition-colors cursor-pointer"
            >
              Authorize Login
            </button>
          </form>
          <p className="text-[10px] text-slate-500">Credential hint: type <strong>admin</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex text-left" id="admin-view">
      
      {/* 1. LEFT SIDEBAR PANEL */}
      <aside className="w-60 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 hidden md:flex">
        
        <div className="p-6 space-y-8">
          {/* Logo brand */}
          <div className="flex flex-col">
            <span className="font-display font-black text-emerald-400 text-xl tracking-tight">GilaFruit</span>
            <span className="text-[9px] text-slate-450 uppercase tracking-wider font-semibold">Management Console</span>
          </div>

          {/* Nav Item Buttons */}
          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'products', label: 'Export Products', icon: ShoppingCart },
              { id: 'blogs', label: 'Newsroom Blog', icon: BookOpen },
              { id: 'pages', label: 'Home Settings', icon: Settings },
              { id: 'calendar', label: 'Supply Calendar', icon: Calendar },
              { id: 'messages', label: 'Inquiries Box', icon: MessageSquare }
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setEditingProduct(null);
                    setEditingBlog(null);
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-3 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <IconComp className="w-4 h-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Exit footer */}
        <div className="p-6 border-t border-slate-800">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full px-4 py-2.5 rounded-xl border border-rose-500/20 text-rose-400 flex items-center justify-center gap-2 text-xs font-bold hover:bg-rose-500/10 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Exit Console
          </button>
        </div>

      </aside>

      {/* 2. RIGHT MAIN PANEL */}
      <main className="flex-1 bg-[#020617] p-8 md:p-12 overflow-y-auto pt-24">
        
        {/* Header navigation for mobile */}
        <div className="md:hidden flex justify-between items-center mb-8 bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <span className="font-display font-bold text-emerald-400 text-sm">GilaFruit Console</span>
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as any)}
            className="bg-slate-950 text-xs border border-slate-800 rounded p-1"
          >
            <option value="dashboard">Dashboard</option>
            <option value="products">Products</option>
            <option value="blogs">Blog articles</option>
            <option value="pages">Home Settings</option>
            <option value="calendar">Supply Calendar</option>
            <option value="messages">Inquiries box</option>
          </select>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: DASHBOARD VIEW                                    */}
        {/* ======================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fade-in" id="admin-dashboard-panel">
            
            <div className="space-y-1">
              <h2 className="text-2.5xl font-display font-extrabold text-slate-100 uppercase tracking-wide">Enterprise Statistics</h2>
              <p className="text-xs text-slate-400">Total active datasets syncing with gilafruit.com</p>
            </div>

            {/* Statistics Row Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-slate-450 text-[10px] uppercase tracking-wide block font-semibold">Total Commodities</span>
                <span className="text-3xl font-display font-black text-emerald-400 mt-1 block">{products.length} Products</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-slate-450 text-[10px] uppercase tracking-wide block font-semibold">Newsroom Count</span>
                <span className="text-3xl font-display font-black text-amber-400 mt-1 block">{blogs.length} Articles</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-slate-450 text-[10px] uppercase tracking-wide block font-semibold">Buyer Inquiries</span>
                <span className="text-3xl font-display font-black text-sky-400 mt-1 block">{messages.length} Submissions</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <span className="text-slate-450 text-[10px] uppercase tracking-wide block font-semibold">Certificates</span>
                <span className="text-3xl font-display font-black text-teal-400 mt-1 block">{certificates.length} Passports</span>
              </div>
            </div>

            {/* Logs columns split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              
              {/* Left Side: Recent Orders/Inbox */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-base text-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-450"></span>
                  Recent Wholesale Inquiries Inbox
                </h3>
                
                {messages.length > 0 ? (
                  <div className="space-y-3">
                    {messages.slice(0, 3).map((item) => (
                      <div key={item.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
                        <div className="flex justify-between font-bold">
                          <span className="text-emerald-400 font-display">{item.name}</span>
                          <span className="text-slate-500">{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-slate-400 italic">Company: {item.company}</p>
                        <p className="text-slate-500 line-clamp-2">{item.message}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-xs">No customer enquiries submitted yet.</p>
                )}
              </div>

              {/* Right Side: Quick Action Panel */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-base text-slate-100">
                  Administrative Shortcuts
                </h3>
                <div className="space-y-2.5 text-xs">
                  <button
                    onClick={() => {
                      setActiveTab('products');
                      setEditingProduct({
                        name: '',
                        slug: '',
                        category: 'fruit',
                        shortDescription: '',
                        fullDescription: '',
                        season: 'Oct - Mar',
                        markets: ['Russia', 'Belarus'],
                        image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=600'
                      });
                    }}
                    className="w-full text-left p-3.5 bg-slate-950 border border-slate-800 hover:border-emerald-500/45 rounded-xl transition-all flex items-center justify-between"
                  >
                    <span>➕ Register New Commodity For Export</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('blogs');
                      setEditingBlog({
                        title: '',
                        slug: '',
                        language: 'en',
                        summary: '',
                        content: '',
                        tags: ['Agricultural', 'Wholesale'],
                        image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600'
                      });
                    }}
                    className="w-full text-left p-3.5 bg-slate-950 border border-slate-800 hover:border-emerald-500/45 rounded-xl transition-all flex items-center justify-between"
                  >
                    <span>➕ Publish Newsroom Log (EN/FA/RU)</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: PRODUCTS ADMIN MANAGER                            */}
        {/* ======================================================== */}
        {activeTab === 'products' && (
          <div className="space-y-8 animate-fade-in" id="admin-products-panel">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2.5xl font-display font-extrabold text-slate-100">Export Catalog Inventory</h2>
                <p className="text-xs text-slate-400">Total active commodities showing in products directory</p>
              </div>
              <button
                onClick={() => setEditingProduct({
                  name: '',
                  slug: '',
                  category: 'fruit',
                  shortDescription: '',
                  fullDescription: '',
                  season: 'Oct - Mar',
                  markets: ['Russia', 'Belarus'],
                  image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=600'
                })}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow"
              >
                <Plus className="w-4 h-4" />
                Add Export Crop
              </button>
            </div>

            {/* Editable Form Modal Representation if active */}
            {editingProduct ? (
              <form onSubmit={handleSaveProduct} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-5 animate-scale-up">
                <h3 className="font-display font-extrabold text-base text-slate-100">
                  {editingProduct.id ? 'Edit Commodity Details' : 'Add New Export Commodity'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Crop Name *</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.name || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      placeholder="e.g. Premium Astara Hayward Kiwi"
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Slug (Unique URL) *</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.slug || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                      placeholder="e.g. premium-astara-kiwi"
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Category *</label>
                    <select
                      value={editingProduct.category || 'fruit'}
                      onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value as any })}
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    >
                      <option value="fruit">Fruit</option>
                      <option value="vegetable">Vegetable</option>
                    </select>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Harvesting Season *</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.season || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, season: e.target.value })}
                      placeholder="e.g. October to April"
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Image Asset (URL)</label>
                    <input
                      type="text"
                      value={editingProduct.image || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono"
                    />
                  </div>

                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Short Pitch Description *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.shortDescription || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, shortDescription: e.target.value })}
                    placeholder="Short meta-description summary displaying on catalog cards"
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Full Specs Rich Description</label>
                  <textarea
                    rows={4}
                    value={editingProduct.fullDescription || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, fullDescription: e.target.value })}
                    placeholder="Provide in-depth breakdown of growing, sorting parameters, brix, cold storage, packaging specifications..."
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-250 font-sans"
                  />
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Save Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Cancel Action
                  </button>
                </div>
              </form>
            ) : null}

            {/* Catalog Grid Table representation in dark mode */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono text-[9px] font-semibold text-left">
                      <th className="px-6 py-4">Sizing name</th>
                      <th className="px-6 py-4">Slug metadata</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Wholesale Season</th>
                      <th className="px-6 py-4 text-right">Actions Panel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-800/20 text-slate-300">
                        <td className="px-6 py-4.5 font-bold text-slate-100 flex items-center gap-2">
                          <img src={p.image} className="w-8 h-8 rounded object-cover" />
                          {p.name}
                        </td>
                        <td className="px-6 py-4.5 font-mono text-slate-500">{p.slug}</td>
                        <td className="px-6 py-4.5 capitalize">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            p.category === 'fruit' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                          }`}>
                            {p.category}
                          </span>
                        </td>
                        <td className="px-6 py-4.5">{p.season}</td>
                        <td className="px-6 py-4.5 text-right space-x-2">
                          <button
                            onClick={() => setEditingProduct(p)}
                            className="p-1 px-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors inline-flex items-center gap-1 font-bold tracking-tight text-[10px] cursor-pointer"
                          >
                            <Edit className="w-3 h-3" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.id)}
                            className="p-1 px-1.5 bg-rose-950/40 hover:bg-rose-900 border border-rose-900/30 text-rose-450 rounded transition-colors inline-flex items-center gap-1 font-bold tracking-tight text-[10px] cursor-pointer animate-pulse-once"
                          >
                            <Trash2 className="w-3 h-3" /> Del
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: BLOGS ADMIN TABLE                                 */}
        {/* ======================================================== */}
        {activeTab === 'blogs' && (
          <div className="space-y-8 animate-fade-in" id="admin-blog-panel">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2.5xl font-display font-extrabold text-slate-100">Agricultural Newsroom Blog</h2>
                <p className="text-xs text-slate-400">Total informational posts publishing to visitors desk</p>
              </div>
              <button
                onClick={() => setEditingBlog({
                  title: '',
                  slug: '',
                  language: 'en',
                  summary: '',
                  content: '',
                  tags: ['Agricultural', 'Wholesale'],
                  image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600'
                })}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow"
              >
                <Plus className="w-4 h-4" />
                Publish News Post
              </button>
            </div>

            {/* Editable Blog Form Builder */}
            {editingBlog ? (
              <form onSubmit={handleSaveBlog} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-5 animate-scale-up">
                <h3 className="font-display font-extrabold text-base text-slate-100">
                  {editingBlog.id ? 'Edit Newsroom Log' : 'Configure New Blog Article'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">News Title *</label>
                    <input
                      type="text"
                      required
                      value={editingBlog.title || ''}
                      onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                      placeholder="e.g. Modern Sorting Lines in Gilan Orchards"
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Clean URL Slug *</label>
                    <input
                      type="text"
                      required
                      value={editingBlog.slug || ''}
                      onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                      placeholder="e.g. modern-sorting-lines-gilan"
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Language Filter Dialect *</label>
                    <select
                      value={editingBlog.language || 'en'}
                      onChange={(e) => setEditingBlog({ ...editingBlog, language: e.target.value as any })}
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                    >
                      <option value="en">English (en)</option>
                      <option value="ru">Russian (ru)</option>
                      <option value="fa">Persian (fa)</option>
                    </select>
                  </div>

                  <div className="space-y-1 text-left col-span-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Graphic Image Thumbnail (URL)</label>
                    <input
                      type="text"
                      value={editingBlog.image || ''}
                      onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                      className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono"
                    />
                  </div>

                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Brief Summary Abstract *</label>
                  <input
                    type="text"
                    required
                    value={editingBlog.summary || ''}
                    onChange={(e) => setEditingBlog({ ...editingBlog, summary: e.target.value })}
                    placeholder="1 to 2 sentences summarizing the article post"
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Narrative Content Body (Markdown or Text)</label>
                  <textarea
                    rows={8}
                    required
                    value={editingBlog.content || ''}
                    onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                    placeholder="Write article details. Use double newline to separate paragraphs, or outline elements..."
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-250 font-sans"
                  />
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Publish Article
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingBlog(null)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Cancel Builder
                  </button>
                </div>
              </form>
            ) : null}

            {/* List Table of Articles */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono text-[9px] font-semibold text-left">
                      <th className="px-6 py-4">Title Heading</th>
                      <th className="px-6 py-4">Slug</th>
                      <th className="px-6 py-4">Language Dialect</th>
                      <th className="px-6 py-4">Publish Date</th>
                      <th className="px-6 py-4 text-right">Actions Panel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {blogs.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-800/20 text-slate-300_">
                        <td className="px-6 py-4 font-bold text-slate-100 flex items-center gap-2">
                          <img src={b.image} className="w-8 h-8 rounded object-cover" />
                          {b.title}
                        </td>
                        <td className="px-6 py-4 font-mono text-slate-500">{b.slug}</td>
                        <td className="px-6 py-4 capitalize">
                          <span className="px-2 py-0.5 bg-slate-950/65 rounded font-bold border border-slate-850">
                            {b.language.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4">{b.publishDate}</td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <button
                            onClick={() => setEditingBlog(b)}
                            className="p-1 px-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors inline-flex items-center gap-1 font-bold text-[10px] cursor-pointer"
                          >
                            <Edit className="w-3 h-3" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(b.id)}
                            className="p-1 px-1.5 bg-rose-950/40 hover:bg-rose-900 border border-rose-900/30 text-rose-450 rounded transition-colors inline-flex items-center gap-1 font-bold text-[10px] cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" /> Del
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: PAGES SETTINGS MANAGER                            */}
        {/* ======================================================== */}
        {activeTab === 'pages' && (
          <form onSubmit={handleSavePagesConfig} className="space-y-8 animate-fade-in max-w-4xl" id="admin-pages-panel">
            
            <div className="space-y-1">
              <h2 className="text-2.5xl font-display font-extrabold text-slate-100">Dynamic Home Layout Configurator</h2>
              <p className="text-xs text-slate-400">Modify hero copywriting or about values without touching code</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-5 text-left">
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Home Hero Big Heading (H1)</label>
                <input
                  type="text"
                  required
                  value={homeHeroTitle}
                  onChange={(e) => setHomeHeroTitle(e.target.value)}
                  placeholder="Main promotional text in green hero section"
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Home Hero Paragraph Description</label>
                <textarea
                  rows={3}
                  required
                  value={homeHeroDesc}
                  onChange={(e) => setHomeHeroDesc(e.target.value)}
                  placeholder="Details displaying under big hero heading"
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-250 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Exporter Brand Introduction (Talesh & Astara Story)</label>
                <textarea
                  rows={4}
                  required
                  value={companyDesc}
                  onChange={(e) => setCompanyDesc(e.target.value)}
                  placeholder="GilaFruit history text manifesting under Greetings heading block on homepage"
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-250 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-955 font-bold text-xs rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/10"
                >
                  <Save className="w-4 h-4" />
                  Save configurations block
                </button>
              </div>

            </div>

          </form>
        )}

        {/* ======================================================== */}
        {/* TAB 5: SUPPLY HARVESTING CALENDAR                          */}
        {/* ======================================================== */}
        {activeTab === 'calendar' && (
          <div className="space-y-8 animate-fade-in" id="admin-calendar-panel">
            
            <div className="space-y-1">
              <h2 className="text-2.5xl font-display font-extrabold text-slate-100">Wholesale Product Calendar Editor</h2>
              <p className="text-xs text-slate-400">Toggle supply status boxes. Green represents active, grey represents unavailable.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-mono text-[9px] uppercase tracking-wider font-semibold text-left">
                      <th className="px-6 py-4.5 min-w-[180px]">Export Crop Name</th>
                      {monthsList.map((month) => (
                        <th key={month} className="px-1 py-4.5 text-center">{month}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {calendarItems.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-800/10 text-slate-300">
                        <td className="px-6 py-4.5 font-bold text-slate-100">
                          {item.productName}
                          <span className="text-[10px] text-slate-500 capitalize block font-mono font-normal">
                            {item.category}
                          </span>
                        </td>
                        
                        {item.monthsAvailable.map((isActive, mIdx) => (
                          <td key={mIdx} className="p-1 text-center">
                            <button
                              type="button"
                              onClick={() => handleToggleCalendarMonth(item.id, mIdx)}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer font-bold ${
                                isActive 
                                  ? 'bg-emerald-500 text-slate-955' 
                                  : 'bg-slate-950 border border-slate-800 text-slate-650 hover:bg-slate-800/40'
                              }`}
                              title={`Click to toggle availability for ${monthsList[mIdx]}`}
                            >
                              {isActive ? 'Y' : '-'}
                            </button>
                          </td>
                        ))}

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 6: INBOX MESSAGES CENTRAL                            */}
        {/* ======================================================== */}
        {activeTab === 'messages' && (
          <div className="space-y-8 animate-fade-in animate-fade-in" id="admin-messages-panel">
            
            <div className="space-y-1">
              <h2 className="text-2.5xl font-display font-extrabold text-slate-100">Wholesale Buyers Inbox Requests</h2>
              <p className="text-xs text-slate-400">Total consumer leads captured via GilaFruit directory contact form</p>
            </div>

            <div className="space-y-4">
              {messages.length > 0 ? (
                messages.map((item) => (
                  <div key={item.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-xs space-y-4 text-left">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-805/40 pb-3">
                      <div className="space-y-0.5">
                        <span className="text-sm font-bold text-emerald-400 font-display block">{item.name}</span>
                        <span className="text-slate-400 font-semibold">{item.email}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-amber-400 block font-mono font-bold uppercase tracking-wider text-[9px]">
                          Company: {item.company}
                        </span>
                        <span className="text-slate-500 text-[10px] block mt-0.5">
                          {new Date(item.date).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-350 leading-relaxed text-[12px] sm:text-xs">
                      {item.message}
                    </p>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center space-y-2 bg-slate-950 border border-dashed border-slate-800 rounded-3xl">
                  <p className="text-slate-600 text-3xl">📥</p>
                  <p className="font-bold text-slate-300 text-sm">No wholesale requests captured</p>
                </div>
              )}
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
