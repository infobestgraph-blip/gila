import { useState, useEffect } from 'react';
import { 
  seedInitialData, getLocalStorageData, saveLocalStorageData, STORAGE_KEYS 
} from './utils/storage';
import { Product, BlogArticle, Certificate, CalendarItem, ContactMessage } from './types';
import { INITIAL_BLOGS } from './data';
import { useLanguage } from './context/LanguageContext';

// Importing layout parts
import Header from './components/Header';
import Footer from './components/Footer';

// Importing Screens
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import AboutScreen from './screens/AboutScreen';
import TeamScreen from './screens/TeamScreen';
import ServicesScreen from './screens/ServicesScreen';
import CustomsServiceScreen from './screens/services/CustomsServiceScreen';
import LogisticServiceScreen from './screens/services/LogisticServiceScreen';
import TransportationServiceScreen from './screens/services/TransportationServiceScreen';
import FreightRatesServiceScreen from './screens/services/FreightRatesServiceScreen';
import TruckStatsServiceScreen from './screens/services/TruckStatsServiceScreen';
import BlogScreen from './screens/BlogScreen';
import BlogDetailScreen from './screens/BlogDetailScreen';
import CalendarScreen from './screens/CalendarScreen';
import ContactScreen from './screens/ContactScreen';
import AdminScreen from './screens/AdminScreen';
import PackingScreen from './screens/PackingScreen';
import FruitPackingScreen from './screens/FruitPackingScreen';
import VegetablePackingScreen from './screens/VegetablePackingScreen';
import FAQScreen from './screens/FAQScreen';
import FAQProductsScreen from './screens/FAQProductsScreen';
import FAQPackagingScreen from './screens/FAQPackagingScreen';
import FAQPaymentScreen from './screens/FAQPaymentScreen';
import FAQShippingScreen from './screens/FAQShippingScreen';
import CertificatesScreen from './screens/CertificatesScreen';
import CatalogScreen from './screens/CatalogScreen';
import HistoryScreen from './screens/HistoryScreen';
import GalleryScreen from './screens/GalleryScreen';
import TermsScreen from './screens/TermsScreen';
import ProductPriceScreen from './screens/ProductPriceScreen';
import ShippingPriceScreen from './screens/ShippingPriceScreen';
import SocialNetworksScreen from './screens/SocialNetworksScreen';

export default function App() {
  const { language, activeView, navigate } = useLanguage();

  // Main state blocks synced with localStorage
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [calendarItems, setCalendarItems] = useState<CalendarItem[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [pagesConfig, setPagesConfig] = useState<any>(null);

  // Initialize and seed storage
  useEffect(() => {
    seedInitialData();

    // Pull datasets
    setProducts(getLocalStorageData<Product[]>(STORAGE_KEYS.PRODUCTS, []));
    setBlogs(getLocalStorageData<BlogArticle[]>(STORAGE_KEYS.BLOG_ARTICLES, []));
    setCertificates(getLocalStorageData<Certificate[]>(STORAGE_KEYS.CERTIFICATES, []));
    setCalendarItems(getLocalStorageData<CalendarItem[]>(STORAGE_KEYS.CALENDAR, []));
    setMessages(getLocalStorageData<ContactMessage[]>(STORAGE_KEYS.MESSAGES, []));
    setPagesConfig(getLocalStorageData<any>(STORAGE_KEYS.PAGES_CONFIG, null));
  }, []);

  // Sync state back helper functions
  const handleUpdateProducts = (updatedProds: Product[]) => {
    setProducts(updatedProds);
    saveLocalStorageData(STORAGE_KEYS.PRODUCTS, updatedProds);
  };

  const handleUpdateBlogs = (updatedBlogs: BlogArticle[]) => {
    setBlogs(updatedBlogs);
    saveLocalStorageData(STORAGE_KEYS.BLOG_ARTICLES, updatedBlogs);
  };

  const handleUpdateCertificates = (updatedCerts: Certificate[]) => {
    setCertificates(updatedCerts);
    saveLocalStorageData(STORAGE_KEYS.CERTIFICATES, updatedCerts);
  };

  const handleUpdateCalendar = (updatedCal: CalendarItem[]) => {
    setCalendarItems(updatedCal);
    saveLocalStorageData(STORAGE_KEYS.CALENDAR, updatedCal);
  };

  const handleUpdatePagesConfig = (updatedHomeCon: any) => {
    setPagesConfig(updatedHomeCon);
    saveLocalStorageData(STORAGE_KEYS.PAGES_CONFIG, updatedHomeCon);
  };

  const handleAddNewMessage = (newMsg: ContactMessage) => {
    setMessages((prev) => [newMsg, ...prev]);
  };

  const activeViewName = activeView.view;
  const isAdminView = activeViewName === 'admin';

  // Rendering matching screens
  const renderScreen = () => {
    switch (activeViewName) {
      case 'home':
        return (
          <HomeScreen
            products={products}
            blogs={blogs}
            certificates={certificates}
            testimonials={getLocalStorageData(STORAGE_KEYS.TESTIMONIALS, [])}
            pagesConfig={pagesConfig}
            onNavigate={navigate}
          />
        );
      case 'products':
        return <ProductsScreen products={products} onNavigate={navigate} />;
      
      case 'product-detail': {
        const productKey = activeView.slug || '';
        const focusedProduct = products.find(p => p.slug === productKey);
        return <ProductDetailScreen product={focusedProduct} onNavigate={navigate} />;
      }
      
      case 'about':
        return <AboutScreen onNavigate={navigate} />;
      
      case 'services':
        return <ServicesScreen onNavigate={navigate} />;
      
      case 'services-customs':
        return <CustomsServiceScreen onNavigate={navigate} />;

      case 'services-logistic':
        return <LogisticServiceScreen onNavigate={navigate} />;

      case 'services-transportation':
        return <TransportationServiceScreen onNavigate={navigate} />;

      case 'services-freight-rates':
        return <FreightRatesServiceScreen onNavigate={navigate} />;

      case 'services-truck-stats':
        return <TruckStatsServiceScreen onNavigate={navigate} />;
      
      case 'blog':
        return <BlogScreen blogs={blogs} onNavigate={navigate} />;
      
      case 'blog-detail': {
        const blogKey = activeView.id || '';
        const focusedArticle = blogs.find(b => b.slug === blogKey) || INITIAL_BLOGS.find(b => b.slug === blogKey);
        return <BlogDetailScreen article={focusedArticle} allArticles={blogs.length ? blogs : INITIAL_BLOGS} onNavigate={navigate} />;
      }

      case 'calendar':
        return <CalendarScreen calendarItems={calendarItems} onNavigate={navigate} />;
      
      case 'contact':
        return <ContactScreen onAddMessage={handleAddNewMessage} />;

      case 'contact-product-price':
        return <ProductPriceScreen />;

      case 'contact-shipping-price':
        return <ShippingPriceScreen />;

      case 'contact-social-networks':
        return <SocialNetworksScreen />;

      case 'packing': {
        const query = window.location.search;
        if (query.includes('tab=fruits') || window.location.pathname.includes('tab=fruits')) {
          return <FruitPackingScreen onNavigate={navigate} />;
        }
        if (query.includes('tab=vegetables') || window.location.pathname.includes('tab=vegetables')) {
          return <VegetablePackingScreen onNavigate={navigate} />;
        }
        return <PackingScreen onNavigate={navigate} />;
      }
      
      case 'faq':
        return <FAQScreen />;
      
      case 'faq-products':
        return <FAQProductsScreen />;
      
      case 'faq-packaging':
        return <FAQPackagingScreen />;
      
      case 'faq-payment':
        return <FAQPaymentScreen />;
      
      case 'faq-shipping':
        return <FAQShippingScreen />;
      
      case 'certificates':
        return <CertificatesScreen />;
      
      case 'catalog':
        return <CatalogScreen />;
      
      case 'history':
        return <HistoryScreen />;
      
      case 'gallery':
        return <GalleryScreen />;
      
      case 'terms':
        return <TermsScreen />;
      
      case 'team':
        return <TeamScreen />;
      
      case 'admin':
        return (
          <AdminScreen
            products={products}
            blogs={blogs}
            certificates={certificates}
            calendarItems={calendarItems}
            messages={messages}
            pagesConfig={pagesConfig}
            onUpdateProducts={handleUpdateProducts}
            onUpdateBlogs={handleUpdateBlogs}
            onUpdateCertificates={handleUpdateCertificates}
            onUpdateCalendar={handleUpdateCalendar}
            onUpdatePagesConfig={handleUpdatePagesConfig}
          />
        );

      default:
        return <div className="text-center py-20">Routing Workspace load...</div>;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isAdminView ? 'bg-[#020617] text-slate-150' : 'bg-[#fafdfb] text-slate-800'}`}>
      
      {/* Consumer Header is pinned on all non-administrative pages */}
      {!isAdminView && <Header currentHash={window.location.hash || '#/'} />}

      {/* Primary dynamic content panel */}
      <div id="root-content-wrapper" className="flex-1">
        {renderScreen()}
      </div>

      {/* Consumer footer is pinned on all non-administrative pages */}
      {!isAdminView && <Footer />}

    </div>
  );
}
