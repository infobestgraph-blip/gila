import { useState, useMemo, useEffect } from 'react';
import { Search, RotateCcw, ArrowRight, Filter, Globe } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

const TEXTS: Record<string, {
  b2bTag: string;
  title: string;
  subtitle: string;
  noticeTitle: string;
  noticeDesc: string;
  rfqBtn: string;
  searchPlaceholder: string;
  allProducts: string;
  fruitsOnly: string;
  vegetablesOnly: string;
  seasonLabel: string;
  allSeasons: string;
  autumnWinter: string;
  springSummer: string;
  resetBtn: string;
  showingLabel: string;
  showingOf: string;
  showingMatch: string;
  more: string;
  specsLabel: string;
  inspectBtn: string;
  noProducts: string;
  noProductsSub: string;
  clearFilters: string;
  fruitCategory: string;
  vegCategory: string;
}> = {
  en: {
    b2bTag: "B2B Wholesale Export Catalog",
    title: "Our Fruits & Vegetables for Export",
    subtitle: "GilaFruit provides a diverse series of fresh premium crops matching rigorous phytosanitary inspection controls. Select a category below or explore each product’s packaging and wholesale dimensions.",
    noticeTitle: "Sovereign Export Distribution Notice",
    noticeDesc: "We operate exclusively as a direct wholesale exporter (Minimum Order: 1 Full Refrigerated Container/Truck, approx. 18-22 tons). To preserve absolute flexibility and integrity, no online shopping, pricing index, or retail checkout is facilitated on this platform. Pricing is generated upon request according to destination custom protocols.",
    rfqBtn: "Request Custom RFQ",
    searchPlaceholder: "Search by name, market (e.g. Russia, Belarus), or properties...",
    allProducts: "All Products",
    fruitsOnly: "Fruits Only",
    vegetablesOnly: "Vegetables Only",
    seasonLabel: "Season:",
    allSeasons: "All Seasons Availability",
    autumnWinter: "Autumn & Winter (Oct - Mar)",
    springSummer: "Spring & Summer (Apr - Sep)",
    resetBtn: "Reset",
    showingLabel: "Showing",
    showingOf: "of",
    showingMatch: "export products matching active parameters.",
    more: "more",
    specsLabel: "Specs Ready",
    inspectBtn: "Inspect",
    noProducts: "No agricultural commodities found",
    noProductsSub: "Try adjusting your filters or search keywords above.",
    clearFilters: "Clear All Filters",
    fruitCategory: "Fruit",
    vegCategory: "Vegetable"
  },
  fa: {
    b2bTag: "کاتالوگ صادرات عمده‌فروشی B2B",
    title: "میوه‌ها و صیفی‌جات صادراتی ما",
    subtitle: "شرکت گیلافروت طیف متنوعی از محصولات درجه‌یک کشاورزی را با رعایت کامل قوانین سخت‌گیرانه گمرکی و قرنطینه بهداشت نباتی ارائه می‌دهد. دسته‌بندی مورد نظر را انتخاب کرده یا مشخصات کلی را بررسی نمایید.",
    noticeTitle: "اطلاعیه رسمی توزیع و صادرات مستقیم عمده",
    noticeDesc: "ما منحصراً به عنوان صادرکننده مستقیم عمده‌فروشی فعالیت می‌کنیم (حداقل سفارش: ۱ کانتینر یا کامیون یخچال‌دار کامل، حدود ۱۸ الی ۲۲ تن). جهت حفظ انعطاف‌پذیری و قیمت دقیق گمرکی، هیچ‌گونه خرید آنلاین در سایت صورت نمی‌گیرد و استعلام قیمت فورا صادر می‌شود.",
    rfqBtn: "درخواست استعلام قیمت صادراتی",
    searchPlaceholder: "جستجو براساس نام محصول، بازار هدف (روسیه، هند...)، یا ویژگی‌ها...",
    allProducts: "همه محصولات",
    fruitsOnly: "فقط میوه‌ها",
    vegetablesOnly: "فقط صیفی‌جات",
    seasonLabel: "فصل عرضه:",
    allSeasons: "موجودی تمام فصول",
    autumnWinter: "پاییز و زمستان (مهر تا اسفند)",
    springSummer: "بهار و تابستان (فروردین تا شهریور)",
    resetBtn: "بازنشانی",
    showingLabel: "در حال نمایش",
    showingOf: "از",
    showingMatch: "محصول صادراتی مطابق با فیلترهای فعال.",
    more: "بیشتر",
    specsLabel: "کاتالوگ آماده",
    inspectBtn: "بررسی فنی",
    noProducts: "هیچ محصول کشاورزی صادراتی یافت نشد",
    noProductsSub: "لطفاً تنظیمات فیلتر یا عبارت جستجوی خود را تغییر دهید.",
    clearFilters: "حذف تمامی فیلترها",
    fruitCategory: "میوه",
    vegCategory: "صیفی‌جات"
  },
  ru: {
    b2bTag: "B2B Экспортный каталог оптовых поставок",
    title: "Наши фрукты и овощи на экспорт",
    subtitle: "GilaFruit предлагает широкий выбор свежих премиальных культур, соответствующих строгим стандартам фитосанитарного контроля. Выберите категорию или ознакомьтесь с параметрами упаковки.",
    noticeTitle: "Официальное уведомление об экспортных поставках",
    noticeDesc: "Мы работаем исключительно как прямой экспортер оптовых партий (минимальный заказ: 1 полный рефрижераторный контейнер/грузовик, около 18-22 тонн). В целях гибкости розничные покупки на сайте не осуществляются.",
    rfqBtn: "Запрос коммерческого предложения",
    searchPlaceholder: "Поиск по названию, рынку (Россия, Беларусь) или свойствам...",
    allProducts: "Все продукты",
    fruitsOnly: "Только фрукты",
    vegetablesOnly: "Только овощи",
    seasonLabel: "Сезон:",
    allSeasons: "Доступно круглый год",
    autumnWinter: "Осень и зима (Окт - Мар)",
    springSummer: "Весна и лето (Апр - Сен)",
    resetBtn: "Сбросить",
    showingLabel: "Показано",
    showingOf: "из",
    showingMatch: "экспортных товаров, соответствующих параметрам.",
    more: "еще",
    specsLabel: "ТТХ готовы",
    inspectBtn: "Обзор",
    noProducts: "Сельскохозяйственные товары не найдены",
    noProductsSub: "Попробуйте изменить параметры поиска или фильтров.",
    clearFilters: "Сбросить фильтры",
    fruitCategory: "Фрукт",
    vegCategory: "Овощ"
  },
  ar: {
    b2bTag: "كتالوج التصدير للبيع بالجملة B2B",
    title: "الفواكه والخضروات الفاخرة للتصدير",
    subtitle: "تقدم شركة گیلافروت مجموعة متنوعة من المحاصيل الطازجة الممتازة المتوافقة مع القيود والشهادات النباتية الصارمة. اختر فئة أو تصفح خيارات التعبئة لكل منتج.",
    noticeTitle: "إشعار التوزيع والتصدير المباشر",
    noticeDesc: "نحن نعمل حصرياً كمصدر مباشر للبيع بالجملة (الحد الأدنى للطلب: شاحنة مبردة أو حاوية كاملة بوزن 18-22 طناً). لا توجد مبيعات تجزئة أو دفع إلكتروني مباشر عبر الموقع للحصول على السعر الأنسب للتصدير.",
    rfqBtn: "طلب استعلام عن السعر",
    searchPlaceholder: "البحث بالاسم، السوق (روسيا، الخليج...)، أو الخصائص...",
    allProducts: "جميع المنتجات",
    fruitsOnly: "الفواكه فقط",
    vegetablesOnly: "الخضروات فقط",
    seasonLabel: "الموسم:",
    allSeasons: "متوفر طوال العام",
    autumnWinter: "الخريف والشتاء (أكتوبر - مارس)",
    springSummer: "الربيع والصيف (أبريل - سبتمبر)",
    resetBtn: "إعادة تعيين",
    showingLabel: "عرض",
    showingOf: "من",
    showingMatch: "من منتجات التصدير المطابقة للمعايير المحددة.",
    more: "أكثر",
    specsLabel: "المواصفات جاهزة",
    inspectBtn: "التفاصيل",
    noProducts: "لم يتم العثور على أي منتج زراعي",
    noProductsSub: "يرجى محاولة تعديل إعدادات التصفية أو كلمات البحث.",
    clearFilters: "مسح جميع الفلاتر",
    fruitCategory: "فاكهة",
    vegCategory: "خضروات"
  },
  tr: {
    b2bTag: "B2B Toptan İhracat Kataloğu",
    title: "İhracata Uygun Meyve ve Sebzelerimiz",
    subtitle: "GilaFruit, sıkı fitosanitasyon denetim standartlarına uygun, taze ve birinci sınıf ihraç ürünleri sunar. Aşağıdan bir kategori seçin veya paketleme boyutlarını inceleyin.",
    noticeTitle: "Resmi Doğrudan İhracat Dağıtım Bildirisi",
    noticeDesc: "Sadece doğrudan toptan ihracatçı olarak faaliyet gösteriyoruz (Minimum Sipariş: 1 Tam Frigorifik Konteyner/Tır, yaklaşık 18-22 ton). Fiyat teklifleri talep üzerine gümrük protokollerine göre oluşturulur.",
    rfqBtn: "Fiyat Teklifi İsteyin (RFQ)",
    searchPlaceholder: "Ürün adı, pazar (Rusya, Belarus) veya özelliklere göre ara...",
    allProducts: "Tüm Ürünler",
    fruitsOnly: "Sadece Meyveler",
    vegetablesOnly: "Sadece Sebzeler",
    seasonLabel: "Sezon:",
    allSeasons: "Tüm Mevsimlerde Sevkiyat",
    autumnWinter: "Sonbahar ve Kış (Eki - Mar)",
    springSummer: "İlkbahar ve Yaz (Nis - Eyl)",
    resetBtn: "Sıfırla",
    showingLabel: "Gösterilen:",
    showingOf: "toplam",
    showingMatch: "ihracat ürünü kriterlerle eşleşti.",
    more: "daha fazla",
    specsLabel: "Spesifikasyon Hazır",
    inspectBtn: "İncele",
    noProducts: "Tarım ürünü bulunamadı",
    noProductsSub: "Lütfen yukarıdaki filtreleri veya arama kelimelerini ayarlamayı deneyin.",
    clearFilters: "Filtreleri Temizle",
    fruitCategory: "Meyve",
    vegCategory: "Sebze"
  },
  hi: {
    b2bTag: "B2B थोक निर्यात कैटलॉग",
    title: "निर्यात के लिए हमारे फल और सब्जियां",
    subtitle: "GilaFruit कठोर फाइटोसैनिटरी निरीक्षण नियंत्रणों के साथ ताजे और प्रीमियम उत्पादों की एक विविध श्रृंखला प्रदान करता है। श्रेणियों का चयन करें या पैकेजिंग मानदंडों का पता लगाएं।",
    noticeTitle: "आधिकारिक थोक निर्यात वितरण सूचना",
    noticeDesc: "हम विशेष रूप से प्रत्यक्ष थोक निर्यातक के रूप में काम करते हैं (न्यूनतम ऑर्डर: 1 पूर्ण रेफ्रिजेरेटेड कंटेनर/ट्रक, लगभग 18-22 टन)। मूल्य निर्धारण गंतव्य सीमा शुल्क प्रोटोकॉल के अनुसार अनुरोध पर प्रदान किया जाता है।",
    rfqBtn: "थोक परामर्श अनुरोध (RFQ)",
    searchPlaceholder: "उत्पाद के नाम, बाजार (रूस, भारत) या विशेषताओं से खोजें...",
    allProducts: "सभी उत्पाद",
    fruitsOnly: "केवल फल",
    vegetablesOnly: "केवल सब्जियां",
    seasonLabel: "सीजन:",
    allSeasons: "सभी मौसमों की उपलब्धता",
    autumnWinter: "शरद और शीत ऋतु (अक्टूबर - मार्च)",
    springSummer: "वसंत और ग्रीष्म ऋतु (अप्रैल - सितंबर)",
    resetBtn: "रीसेट",
    showingLabel: "दिखा रहा है",
    showingOf: "में से",
    showingMatch: "निर्यात उत्पाद जो सक्रिय मानकों से मेल खाते हैं।",
    more: "अधिक",
    specsLabel: "विशिष्टता तैयार",
    inspectBtn: "निरीक्षण",
    noProducts: "कोई कृषि उपज नहीं मिली",
    noProductsSub: "कृपया ऊपर दिए गए फ़िल्टर या खोज शब्द बदलने का प्रयास करें।",
    clearFilters: "सभी फ़िल्टर साफ़ करें",
    fruitCategory: "फल",
    vegCategory: "सब्जी"
  },
  uz: {
    b2bTag: "B2B ulgurji eksport katalogi",
    title: "Eksport uchun meva va sabzavotlarimiz",
    subtitle: "GilaFruit qat'iy fitosanitariya nazorati ostida yetishtirilgan sifatli eksport ekinlarini taklif etadi. Quyida kategoriyani tanlang yoki qadoqlash o'lchamlarini o'rganing.",
    noticeTitle: "Rasmiy ulgurji eksport yetkazib berish bildirishnomasi",
    noticeDesc: "Biz faqat to'g'ridan-to'g'ri ulgurji eksportchi sifatida ishlaymiz (Minimal buyurtma: 1 ta to'liq muzlatgichli yuk mashinasi, taxminan 18-22 tonna). Narxlar bojxona talablariga muvofiq so'rov bo'yicha tuziladi.",
    rfqBtn: "Kotirovka so'rash (RFQ)",
    searchPlaceholder: "Nomi, maqsadli bozori (Rossiya, Belarus) yoki xususiyatlari bo'yicha qidirish...",
    allProducts: "Barcha mahsulotlar",
    fruitsOnly: "Faqat mevalar",
    vegetablesOnly: "Faqat sabzavotlar",
    seasonLabel: "Mavsum:",
    allSeasons: "Yil davomida yetkazib berish",
    autumnWinter: "Kuz va qish (Okt - Mar)",
    springSummer: "Bahor va yoz (Apr - Sen)",
    resetBtn: "Tashlash",
    showingLabel: "Ko'rsatilmoqda",
    showingOf: "dan qariyb",
    showingMatch: "faol filtrlar bo'yicha eksport mahsuloti.",
    more: "ko'proq",
    specsLabel: "Texnik parametrlar",
    inspectBtn: "Ko'rish",
    noProducts: "Hech qanday qishloq xo'jaligi mahsuloti topilmadi",
    noProductsSub: "Filtrlarni yoki qidiruv so'zlarini o'zgartirishga harakat qiling.",
    clearFilters: "Barcha filtrlarni tozalash",
    fruitCategory: "Meva",
    vegCategory: "Sabzavot"
  },
  az: {
    b2bTag: "B2B Topdan İxrac Kataloqu",
    title: "İxrac Üçün Meyvə və Tərəvəzlərimiz",
    subtitle: "GilaFruit ciddi fitosanitar nəzarətindən keçmiş təzə premium kənd təsərrüfatı məhsulları təqdim edir. kateqoriyalardan birini seçin və ya qablaşdırma şərtlərini nəzərdən keçirin.",
    noticeTitle: "Rəsmi Birbaşa İxrac Distribütor Bildirişi",
    noticeDesc: "Biz yalnız birbaşa topdan ixracatçı kimi fəaliyyət göstəririk (Minimum sifariş: 1 tam soyuduculu tır/konteyner, təxminən 18-22 ton). Qiymətlər sorğu əsasında təyinat ölkəsinin gümrük protokollarına uyğun tərtib olunur.",
    rfqBtn: "Qiymət Təklifi Alın (RFQ)",
    searchPlaceholder: "Məhsul adı, bazar (Rusiya, Belarus) yaxud xüsusiyyətlərinə görə axtar...",
    allProducts: "Bütün Məhsullar",
    fruitsOnly: "Yalnız Meyvələr",
    vegetablesOnly: "Yalnız Tərəvəzlər",
    seasonLabel: "Mövsüm:",
    allSeasons: "Bütün Mövsümlərdə Mövcuddur",
    autumnWinter: "Payız və Qış (Okt - Mar)",
    springSummer: "Yaz və Yay (Apr - Sen)",
    resetBtn: "Sıfırla",
    showingLabel: "Göstərilən:",
    showingOf: "-dan",
    showingMatch: "ixrac məhsulu kriteriyalara uyğundur.",
    more: "daha çox",
    specsLabel: "Spesifikasiya Hazırdır",
    inspectBtn: "Nəzərdən keçir",
    noProducts: "Hech bir kənd təsərrüfatı məhsulu tapılmadı",
    noProductsSub: "Zəhmət olmasa yuxarıdakı filtrləri və ya axtarış sözlərini dəyişin.",
    clearFilters: "Bütün Filtrləri Təmizlə",
    fruitCategory: "Meyvə",
    vegCategory: "Tərəvəz"
  },
  uk: {
    b2bTag: "B2B Експортний каталог оптових поставок",
    title: "Наші фрукти та овочі на експорт",
    subtitle: "GilaFruit пропонує різноманітний асортимент свіжих преміальних культур, що відповідають суворим стандартам фітосанітарного контролю. Оберіть категорію або вивчіть характеристики пакування.",
    noticeTitle: "Офіційне повідомлення про експортні поставки",
    noticeDesc: "Ми працюємо виключно як прямий експортер оптового постачання (мінімальне замовлення: 1 повний рефрижераторний контейнер/вантажівка, близько 18-22 тонн). Роздрібний продаж через цей сайт не здійснюється.",
    rfqBtn: "Запит ціни та комерційного листа (RFQ)",
    searchPlaceholder: "Пошук за назвою, ринком збуту (Росія, Білорусь) чи властивостями...",
    allProducts: "Всі продукти",
    fruitsOnly: "Лише фрукти",
    vegetablesOnly: "Лише овочі",
    seasonLabel: "Сезон:",
    allSeasons: "Доступно цілий рік",
    autumnWinter: "Осінь та зима (Жовт - Бер)",
    springSummer: "Весна та літо (Квіт - Вер)",
    resetBtn: "Скинути",
    showingLabel: "Показано",
    showingOf: "із",
    showingMatch: "експортних товарів, що відповідають параметрам.",
    more: "ще",
    specsLabel: "Характеристики готові",
    inspectBtn: "Переглянути",
    noProducts: "Сільськогосподарські товари не знайдені",
    noProductsSub: "Спробуйте змінити параметри пошуку або фільтрів.",
    clearFilters: "Скинути всі фільтри",
    fruitCategory: "Фрукт",
    vegCategory: "Овоч"
  }
};

interface ProductsScreenProps {
  products: Product[];
  onNavigate: (hash: string) => void;
}

export default function ProductsScreen({ products, onNavigate }: ProductsScreenProps) {
  const { getLProduct, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'fruit' | 'vegetable'>('all');
  const [seasonFilter, setSeasonFilter] = useState<string>('all');

  const ln = TEXTS[language] || TEXTS.en;

  const localizedProducts = useMemo(() => {
    return products.map(getLProduct);
  }, [products, getLProduct]);

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

  // Gathering Filter options
  const seasonalOptions = useMemo(() => {
    const seasonsList = ['all'];
    localizedProducts.forEach((p) => {
      if (p.season.toLowerCase().includes('october') || p.season.toLowerCase().includes('winter') || p.season.toLowerCase().includes('oct') || p.season.toLowerCase().includes('مهر') || p.season.toLowerCase().includes('окт')) {
        if (!seasonsList.includes('Autumn/Winter')) seasonsList.push('Autumn/Winter');
      }
      if (p.season.toLowerCase().includes('april') || p.season.toLowerCase().includes('summer') || p.season.toLowerCase().includes('june') || p.season.toLowerCase().includes('may') || p.season.toLowerCase().includes('بهار') || p.season.toLowerCase().includes('апр')) {
        if (!seasonsList.includes('Spring/Summer')) seasonsList.push('Spring/Summer');
      }
    });
    return seasonsList;
  }, [localizedProducts]);

  // Filter products based on state variables
  const filteredProducts = useMemo(() => {
    return localizedProducts.filter((prod) => {
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
  }, [localizedProducts, searchQuery, categoryFilter, seasonFilter]);

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
          {ln.b2bTag}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-none">
          {ln.title}
        </h1>
        <p className="text-slate-650 text-sm sm:text-base max-w-3xl leading-relaxed">
          {ln.subtitle}
        </p>
      </div>

      {/* B2B Informational Banner */}
      <div className="bg-amber-500/10 border border-amber-505/20 rounded-2xl p-5 mb-12 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <strong className="text-sm font-bold text-slate-900 font-display">{ln.noticeTitle}</strong>
          </div>
          <p className="text-xs text-slate-600 leading-normal max-w-2xl">
            {ln.noticeDesc}
          </p>
        </div>
        <a
          href="#/contact"
          className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold font-sans uppercase tracking-wider rounded-xl transition-all shadow-xs shrink-0"
        >
          {ln.rfqBtn}
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
              placeholder={ln.searchPlaceholder}
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
                {ln.allProducts}
              </button>
              <button
                onClick={() => setCategoryFilter('fruit')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  categoryFilter === 'fruit'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
              >
                {ln.fruitsOnly}
              </button>
              <button
                onClick={() => setCategoryFilter('vegetable')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  categoryFilter === 'vegetable'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-700 hover:text-emerald-800'
                }`}
              >
                {ln.vegetablesOnly}
              </button>
            </div>

            {/* Harvesting Season Filter dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs font-semibold flex items-center gap-1">
                <Filter className="w-3 h-3 text-slate-400" /> {ln.seasonLabel}
              </span>
              <select
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-800"
                id="season-filter-dropdown"
              >
                <option value="all">{ln.allSeasons}</option>
                <option value="Autumn/Winter">{ln.autumnWinter}</option>
                <option value="Spring/Summer">{ln.springSummer}</option>
              </select>
            </div>

            {/* Reset button */}
            {(searchQuery || categoryFilter !== 'all' || seasonFilter !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 transition-colors rounded-xl text-xs text-slate-700 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                {ln.resetBtn}
              </button>
            )}

          </div>

        </div>

        {/* Counter indicator */}
        <p className="text-xs text-slate-500 font-semibold text-left">
          {ln.showingLabel} {filteredProducts.length} {ln.showingOf} {products.length} {ln.showingMatch}
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
                  {prod.category === 'fruit' ? ln.fruitCategory : ln.vegCategory}
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
                        +{prod.markets.length - 3} {ln.more}
                      </span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-800 tracking-wider uppercase">
                      {ln.specsLabel}
                    </span>
                    <button
                      onClick={() => onNavigate(`#/product/${prod.slug}`)}
                      className="px-4 py-1.5 bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white transition-colors duration-150 rounded-full text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {ln.inspectBtn}
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
          <p className="text-slate-800 font-bold text-base font-display">{ln.noProducts}</p>
          <p className="text-slate-500 text-xs">{ln.noProductsSub}</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs rounded-full shadow transition-all cursor-pointer"
          >
            {ln.clearFilters}
          </button>
        </div>
      )}

    </div>
  );
}
