import React from 'react';
import { 
  Check, 
  Play, 
  ShoppingCart, 
  Globe, 
  Users, 
  Hotel,
  Award,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Boxes
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutScreenProps {
  onNavigate?: (targetHash: string) => void;
}

// Full 5-Language Specialized Translations Map
const TRANSLATIONS: Record<string, any> = {
  en: {
    breadcrumbs: "About us",
    title: "Sabz Gostaran Gilan Fruit .Co",
    aboutLabel: "About us:",
    brandName: "Brand: GilaFruit",
    brandDesc: "The name GilaFruit is a beautiful combination of \"Gilan Province,\" the cradle of Iranian agriculture, and \"Fruit,\" signifying the company's identity and mission: to deliver the highest quality fruits and vegetables from Iran to global markets.",
    introDesc: "Sabz Gostaran Gilan Fruit Company, under the GilaFruit brand, is a leading Iranian exporter of fresh fruits and vegetables, notably Iranian Kiwis. We supply high-quality products globally, leveraging efficient Global Logistics.",
    partnerTitle: "A Reliable Business Partner to grow your Business",
    benefits: [
      'Producing and Exporting Iranian Products',
      'Expertise in Iranian Kiwis',
      'Global Logistics and Supply Chain',
      'Complete Supply Chain Management',
      'Commitment to Global Standards',
      'Utilizing Advanced Technologies'
    ],
    globalTitle: "From Kiwi to Global Markets",
    history1: "In 2001, with the planting of the first kiwi seedlings, the dream of GilaFruit took shape. A grand vision to introduce the authentic taste of Iran to the world. Today, GilaFruit, with its team of experts and experienced individuals, has become one of the most recognized exporters of fruits and vegetables in Iran.",
    history2: "GilaFruit’s vision extends beyond the export of agricultural products. The company strives to become a global brand in sustainable agriculture by utilizing innovation and the latest technologies.",
    storyBtn: "The Story Behind Us",
    setsApart: "What sets us apart from others?",
    supplyChain: "Supply Chain",
    supplyDesc1: "At GilaFruit, we are committed to providing our customers with the highest quality Iranian fruits and vegetables.",
    supplyDesc2: "To achieve this goal, we have implemented a comprehensive supply chain system that monitors the freshness and quality of our produce at every stage of the process, from the farm to the customer's hands.",
    supplyDesc3: "For instance, we carefully select farms, ensure timely harvesting, precise packaging, controlled transportation, intelligent warehousing, continuous quality control, and fast and efficient distribution to guarantee that our products, such as kiwis, reach our customers quickly and in the freshest condition.",
    productsBtn: "Products",
    valueCards: [
      {
        title: 'Supermarket Chains',
        desc: 'Supplying fresh produce to major retail outlets worldwide.'
      },
      {
        title: 'Import Companies',
        desc: 'Partnering with leading fruit and vegetable importers globally.'
      },
      {
        title: 'Traders & Merchants',
        desc: 'Supporting international trade with reliable supply and quality.'
      },
      {
        title: 'Hospitality Sector',
        desc: 'Serving top hotels and restaurants with premium Iranian produce.'
      }
    ],
    cultureTitle: "Organizational Culture",
    cultureDesc: "At GilaFruit, we believe that agriculture is the art of feeding the world. By exporting high-quality agricultural products, we contribute to the healthy nutrition of people worldwide. We respect the environment and use sustainable farming methods to preserve natural resources. Innovation and creativity are our driving forces for developing new products and meeting the needs of global markets.",
    growTogether: "Let's grow together",
    visionTitle: "Our Vision for the Future",
    visionPoints: [
      {
        title: 'Modernization',
        desc: 'Implementing automated harvesting and packaging processes. Streamlining operations for efficiency.'
      },
      {
        title: 'Logistics Optimization',
        desc: 'Improving transportation and customs clearance procedures. Ensuring smoother international trade.'
      },
      {
        title: 'Market Expansion',
        desc: 'Tailoring products to new markets. Considering local food cultures and regulations.'
      },
      {
        title: 'Customer Partnership',
        desc: 'Offering comprehensive support. From product selection to competitive pricing and marketing strategies.'
      }
    ],
    blogBtn: "Visit Blog",
    collLabel: "see how our team works",
    watchVideo: "Watch Video",
    certHeader: "Ensuring Quality and Safety in Logistics Services with Internationally Recognized Certifications",
    certDesc1: "Our company provides a wide range of value-added services including transportation, warehousing, packaging, and customs clearance. By utilizing these services, our clients benefit from numerous competitive advantages such as cost reduction, improved delivery speed, and increased customer satisfaction. Additionally, through the provision of video and image updates at every stage of the process, customers are kept fully informed about the preparation and delivery of their goods.",
    certDesc2: "Furthermore, our possession of internationally recognized certifications such as ISO 9001, ISO 22000, ISO 10004, ISO 14001, ISO 10668, IMS, HACCP, ISO 22301, and ISO 45001 demonstrates our commitment to quality, safety, and customer satisfaction."
  },
  fa: {
    breadcrumbs: "درباره ما",
    title: "شرکت سبز گستران گیلا فروت (سهامی خاص)",
    aboutLabel: "درباره ما:",
    brandName: "برند: گیلافروت",
    brandDesc: "نام گیلافروت ترکیبی زیبا از «استان گیلان»، مهد کشاورزی ایران، و «میوه» (Fruit) است که هویت و مأموریت شرکت را نشان می‌دهد: تحویل باکیفیت‌ترین میوه‌ها و صیفی‌جات ایران به بازارهای جهانی.",
    introDesc: "شرکت سبز گستران گیلا فروت با تولید انبوه و زنجیره تامین اختصاصی، صادرکننده پیشتاز میوه و صیفی‌جات تازه ایران به ویژه کیوی گیلان است. ما محصولات را با بهره‌گیری از زنجیره لجستیک جهانی مدرن به بازارهای هدف صادر می‌کنیم.",
    partnerTitle: "یک شریک تجاری قابل اعتماد برای رشد کسب و کار شما",
    benefits: [
      'تولید و صادرات محصولات کشاورزی ممتاز ایران',
      'تخصص استراتژیک در حوزه کیوی گیلان',
      'مدیریت زنجیره تامین سردخانه و لجستیک جهانی',
      'مدیریت صفر تا صد ترخیص و گمرکات مرزی',
      'تعهد به استانداردهای کیفی و بهداشتی جهانی',
      'بهره‌گیری از فناوری‌های پیشرفته سورتینگ اپتیکال'
    ],
    globalTitle: "از باغ‌های ایران تا بازارهای جهانی",
    history1: "در سال ۱۳۸۰ با کاشت اولین نهال‌های کیوی، رویای بزرگ گیلافروت آغاز شد. رویایی سراسر انگیزه برای معرفی طعم اصیل محصولات ممتاز حاصلخیز ایران زمین به مصرف‌کنندگان در مرزهای فراتر. امروز گیلافروت با کادری مجرب به یکی از معتبرترین صادرکنندگان تبدیل شده است.",
    history2: "هدف نهایی گیلافروت فراتر از تجارت محض است. ما در صدد استقرار یک زیرساخت دانش‌بنیان برای توسعه همیشگی خدمات پایدار کشاورزی در زنجیره صادرات اوراسیا هستیم.",
    storyBtn: "داستان رشد ما",
    setsApart: "چه چیزی ما را متمایز می‌کند؟",
    supplyChain: "زنجیره تامین یکپارچه",
    supplyDesc1: "ما خود را متعهد می‌دانیم که باکیفیت‌ترین محصولات زراعی و گلخانه‌ای ایران را در اختیار شرکای تجاری قرار دهیم.",
    supplyDesc2: "بدین منظور، یک زنجیره تامین کامل طراحی و اجرا نموده‌ایم که محصولات را از مزرعه تا قفسه مغازه‌ها تحت نظارت کیفیت دائمی حفظ می‌کند.",
    supplyDesc3: "برای نمونه، انتخاب دقیق باغ‌ها، برداشت سه‌مرحله‌ای، بسته‌بندی لوکس صادراتی، ترانزیت یخچال‌دار، گمرک سریع آستارا و استفاده از سردخانه‌های استراتژیک، تضمین‌کننده شادابی و طراوت ۱۰۰٪ محصولات ما است.",
    productsBtn: "مشاهده محصولات",
    valueCards: [
      {
        title: 'فروشگاه‌های زنجیره‌ای',
        desc: 'تامین منظم و مداوم بهترین میوه‌های تازه برای برترین هایپرمارکت‌های بین‌المللی.'
      },
      {
        title: 'شرکت‌های وارداتی بزرگ',
        desc: 'همکاری راهبردی با هلدینگ‌های بزرگ واردات مواد غذایی و میوه در دنیا.'
      },
      {
        title: 'تجار و بازرگانان عمده',
        desc: 'پشتیبانی بی‌وقفه از تجار محلی در بازارهای روسیه، کشورهای خلیج فارس و هند.'
      },
      {
        title: 'صنایع غذایی و هتل‌ها',
        desc: 'تامین و تحویل مستقیم میوه‌های درجه‌یک به هتل‌های ممتاز و رستوران‌های لوکس.'
      }
    ],
    cultureTitle: "فرهنگ سازمانی ما",
    cultureDesc: "در گیلافروت ما به کشاورزی به چشم هنری برای خدمت به تغذیه سالم انسان‌ها نگاه می‌کنیم. با صادرات سازمان‌یافته، استانداردهای کیفی را ارتقا داده و به محیط زیست احترام می‌گذاریم. بهینه‌سازی روش‌ها و احترام متبادل، بن‌مایه ارزش‌های داخلی تیم ما را تشکیل می‌دهند.",
    growTogether: "با هم رشد کنیم",
    visionTitle: "چشم‌انداز آینده ما",
    visionPoints: [
      {
        title: 'مدرن‌سازی صادرات',
        desc: 'استفاده از سیستم‌های هوشمند سورتینگ و بهینه‌سازی مداوم مراحل آماده‌سازی کالا.'
      },
      {
        title: 'لجستیک بدون وقفه',
        desc: 'روان‌سازی فرآیندهای گمرکی مرز آستارا و ترانزیت یخچال‌دار سردخانه‌ای.'
      },
      {
        title: 'توسعه مرزهای فروش',
        desc: 'معرفی طعم خارق‌العاده کیوی ایرانی به کشورهای نوظهور اروپایی و آفریقایی.'
      },
      {
        title: 'تعهد به زنجیره برد-برد',
        desc: 'ارائه بسته‌های جامع حمایتی قیمت و لجستیک جهت موفقیت همیشگی خریداران.'
      }
    ],
    blogBtn: "مشاهده مقالات وبلاگ",
    collLabel: "مراحل کار تیم ما را ببینید",
    watchVideo: "مشاهده ویدیو معرفی",
    certHeader: "تضمین ایمنی و بهداشت کالا در خدمات لجستیک با پیاده‌سازی گواهینامه‌های معتبر جهانی",
    certDesc1: "صنایع صادراتی ما گستره بزرگی از خدمات ارزش افزوده شامل حمل و نقل، سردخانه، بسته‌بندی بر اساس کالیبر و ترخیص روان اداری را ارائه می‌دهند. مزیتی که هزینه‌های سربار را کاهش و راندمان را افزایش می‌دهد. همچنین ارائه گزارش تصویری در تمامی گام‌ها، خیال مشتری را آسوده نگاه می‌دارد.",
    certDesc2: "علاوه بر این، اخذ معتبرترین گواهینامه‌های استاندارد ایمنی و کیفیت نظیر ISO 9001، ISO 22000، HACCP و IMS سند مبرهنی بر تعهد راسخ ما به اعتماد و خشنودی تام خریداران محترم است."
  },
  ru: {
    breadcrumbs: "О нас",
    title: "Sabz Gostaran Gilan Fruit Co.",
    aboutLabel: "О компании:",
    brandName: "Бренд: GilaFruit",
    brandDesc: "Название GilaFruit представляет собой красивое сочетание слов «Провинция Гилян» (колыбель иранского садоводства) и «Fruit» (Фрукты), олицетворяя миссию: поставлять отборные фрукты и овощи высшего сорта из Ирана на рынки России и СНГ.",
    introDesc: "Sabz Gostaran Gilan Fruit Co. — ведущий иранский производитель и экспортер свежих продуктов, прославившийся своим премиальным киви Hayward. Мы обладаем развитой цепочкой поставок и собственной холодовой логистикой.",
    partnerTitle: "Надежный партнер для долгосрочного роста бизнеса",
    benefits: [
      'Экспорт отборной сельскохозяйственной продукции',
      'Глубокая экспертность в продукции киви',
      'Налаженная система мировых грузоперевозок',
      'Полный спектр таможенного оформления',
      'Соответствие международным пищевым нормам',
      'Фирменная калибровка на оборудовании MAF RODA'
    ],
    globalTitle: "От плантаций до прилавков мира",
    history1: "В 2001 году скромная посадка первых саженцев киви дала старт масштабной мечте GilaFruit. Сегодня, благодаря слаженной команде профессионалов, мы являемся одним из ключевых поставщиков плодоовощной продукции из Ирана.",
    history2: "Наше будущее — это устойчивая, экологичная модель поставок с интеграцией передовых смарт-технологий сортировки и бережной упаковки.",
    storyBtn: "Наша история",
    setsApart: "Что выделяет нас на рынке?",
    supplyChain: "Стандарты Поставок",
    supplyDesc1: "В GilaFruit мы стремимся дать клиентам исключительно качественные и свежие овощи и фрукты Ирана.",
    supplyDesc2: "Мы внедрили сквозную систему контроля цепочки, гарантирующую неизменную свежесть товара на каждом километре пути до конечного потребителя.",
    supplyDesc3: "Точный отбор садов, бережный сбор плодов, надежная фасовка, рефрижераторный транзит и таможенное сопровождение в Астаре минимизируют риски.",
    productsBtn: "Каталог продуктов",
    valueCards: [
      {
        title: 'Торговые сети',
        desc: 'Стабильные регулярные отгрузки свежих фруктов в крупнейшие супермаркеты.'
      },
      {
        title: 'Крупные импортеры',
        desc: 'Надежное партнерство с ведущими дистрибьюторскими компаниями России.'
      },
      {
        title: 'Оптовые поставщики',
        desc: 'Комплексная дилерская поддержка региональных оптовых рынков и складов.'
      },
      {
        title: 'HoReCa & Отели',
        desc: 'Поставка первоклассных сортов для ресторанов премиального сегмента.'
      }
    ],
    cultureTitle: "Корпоративная культура",
    cultureDesc: "Мы относимся к сельскому хозяйству как к искусству. Экспортируя высококачественные дары природы, мы заботимся о здоровье людей во всем мире, с огромным уважением относясь к экологии и ресурсам земли.",
    growTogether: "Давайте расти вместе",
    visionTitle: "Наши ориентиры на будущее",
    visionPoints: [
      {
        title: 'Модернизация процессов',
        desc: 'Постоянное обновление калибровочного и сортировочного цеха.'
      },
      {
        title: 'Быстрая транспортировка',
        desc: 'Развитие собственного автопарка и ускоренное таможенное оформление.'
      },
      {
        title: 'Диверсификация экспорта',
        desc: 'Открытие новых торговых коридоров на рынках Азии и Европы.'
      },
      {
        title: 'Выгода для партнеров',
        desc: 'Гибкое ценообразование и предоставление фото/видео отчетов на этапах сборки.'
      }
    ],
    blogBtn: "Перейти в блог",
    collLabel: "посмотрите, как работает наша команда",
    watchVideo: "Смотреть видео",
    certHeader: "Международные стандарты безопасности и качества в сфере экспорта свежих фруктов",
    certDesc1: "GilaFruit предоставляет полный закрытый цикл обслуживания — от калибровки и укладки до логистики и таможенного декларирования. Это сокращает издержки клиента и снимает головную боль с документами.",
    certDesc2: "Наличие престижных сертификатов соответствия ISO 9001, ISO 22000, HACCP и IMS ярко доказывает наше рвение соответствовать ожиданиям самых строгих партнеров."
  }
};

// Map fallback turkish and arabic to similar or defaults
TRANSLATIONS.tr = {
  ...TRANSLATIONS.en,
  breadcrumbs: "Hakkımızda",
  title: "Sabz Gostaran Gilan Fruit Co.",
  aboutLabel: "Hakkımızda:",
  brandName: "Marka: GilaFruit",
  brandDesc: "GilaFruit ismi, İran tarımının beşiği olan Gilan Eyaleti ile en kaliteli meyve ve sebzeleri ihraç etme misyonunu simgeleyen Fruit (Meyve) kelimelerinin uyumlu bir birleşimidir.",
  introDesc: "GilaFruit markasıyla faaliyet gösteren Sabz Gostaran Gilan Fruit Co., başta taze kivi olmak üzere kaliteli İran meyve ve sebzelerinin önde gelen ihracatçılarından biridir.",
  partnerTitle: "İşinizi Büyütmek İçin Güvenilir Bir İş Ortağı",
  setsApart: "Bizi Diğerlerinden Ayıran Nedir?",
  supplyChain: "Tedarik Zinciri",
  growTogether: "Birlikte Büyüyelim",
  visionTitle: "Gelecek Vizyonumuz",
  blogBtn: "Blogu Ziyaret Et",
  watchVideo: "Videoyu İzle"
};

TRANSLATIONS.ar = {
  ...TRANSLATIONS.fa,
  breadcrumbs: "من نحن",
  title: "شركة سبز كستران كيلا فروت (مساهمة خاصة)",
  aboutLabel: "من نحن:",
  brandName: "العلامة التجارية: كيلا فروت",
  brandDesc: "اسم كيلا فروت هو مزيج رائع بين محافظة جيلان، مهد الزراعة الإيرانية، وكلمة فاكهة (Fruit)، ويعبر عن مهمة الشركة في إيصال أفضل المنتجات الزراعية الطازجة للأسواق العالمية.",
  introDesc: "تعتبر شركة جيلا فروت من كبار المصدرين للفواكه والخضروات الطازجة الإيرانية، وخاصة الكيوي والمنتجات تحت سلسلة تبريد مستدامة.",
  partnerTitle: "شريك نجاح تجاري موثوق لتنمية أعمالك",
  setsApart: "ما الذي يميزنا عن الآخرين؟",
  supplyChain: "سلسلة التوريد المتكاملة",
  growTogether: "دعونا ننمو معاً",
  visionTitle: "رؤيتنا للمستقبل",
  blogBtn: "زيارة مدونتنا",
  watchVideo: "شاهد الفيديو التعريفى"
};

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  const { language, direction } = useLanguage();
  const isRtl = direction === 'rtl';

  // Fallback map
  const t_about = TRANSLATIONS[language] || TRANSLATIONS['en'];

  // Navigation helper
  const handleNav = (hash: string) => {
    if (onNavigate) {
      onNavigate(hash);
    } else {
      window.location.hash = hash;
    }
  };

  const galleryImages = [
    'src/assets/images/gilafruit_kiwi_basket_banner_1781014515822.png',
    'src/assets/images/gilafruit_kiwi_box_1781013956397.png',
    'src/assets/images/gilafruit_lettuce_box_1781013975529.png',
    'src/assets/images/gilafruit_dill_carton_banner_1781014534023.png',
    'src/assets/images/gilafruit_lettuce_carton_banner_1781014565410.png',
    'src/assets/images/gilafruit_parsley_carton_banner_1781014550921.png',
    'src/assets/images/gilafruit_kiwi_white_10kg_banner_1781014580644.png',
    'src/assets/images/gilafruit_packing_vector_illustration_1781014820562.png'
  ];

  return (
    <div className="bg-[#fbfcfa] min-h-screen pt-24 sm:pt-28 md:pt-[148px] pb-16 text-slate-800 font-sans" id="about-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER */}
      <div className="bg-[#f2f4f1] border-y border-slate-200/60 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold uppercase tracking-wider text-[#01261d]">
            {t_about.breadcrumbs}
          </span>
          <div className={`flex items-center gap-1.5 text-[11px] ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-medium text-slate-400">
              {t_about.breadcrumbs}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* 2. CHIEF BRAND INTRO & FLAGS SECTION */}
        <section className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`} id="about-intro-hero">
          
          {/* Left Text Detail */}
          <div className={`lg:col-span-7 space-y-6 text-start ${isRtl ? 'order-1 lg:order-2' : ''}`}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#01261d] tracking-tight leading-tight">
              {t_about.title}
            </h1>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>{t_about.aboutLabel}</strong> {t_about.introDesc}
            </p>

            {/* Premium Brand Spotlight Block */}
            <div className={`bg-[#f5f8f5] border-emerald-600 p-5 rounded-2xl space-y-2 shadow-xs ${isRtl ? 'border-r-4 text-right' : 'border-l-4'}`}>
              <h3 className="text-lg font-black text-[#1a8a42] flex items-center gap-2 justify-start">
                <span className="inline-block w-3 h-3 rounded-full bg-[#1a8a42]" />
                {t_about.brandName}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t_about.brandDesc}
              </p>
            </div>

            {/* Reliable Partner Bullet Matrix */}
            <div className="space-y-4 pt-2">
              <h4 className="font-bold text-[#01261d] text-base leading-tight">
                {t_about.partnerTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t_about.benefits.map((benefit: string, i: number) => (
                  <div key={i} className={`flex items-center gap-2.5 text-xs font-semibold text-slate-700 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span className="w-5 h-5 rounded-full bg-[#1a8a42] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Brand stand decoration featuring Iran + GilaFruit flags photograph */}
          <div className={`lg:col-span-5 relative flex justify-center ${isRtl ? 'order-2 lg:order-1' : ''}`}>
            <div className="absolute -inset-4 bg-emerald-50 rounded-full blur-2xl opacity-60 -z-10" />
            <div className="relative border-8 border-white shadow-2xl rounded-2xl overflow-hidden bg-white max-w-sm sm:max-w-md">
              <img 
                src="src/assets/images/gilafruit_iran_flags_1781077352581.png" 
                alt="Sabz Gostaran Gilan Fruit Co. & Iran Flags on Standing Poles" 
                className="w-full object-cover"
                style={{ maxHeight: '420px' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </section>


        {/* 3. FROM KIWI TO GLOBAL MARKETS (Dark Green Curved Section) */}
        <section className="bg-[#01261d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden" id="kiwi-to-global-markets">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-950/40 rounded-full filter blur-3xl -mr-16 -mt-16 -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a8a42]/15 rounded-full filter blur-3xl -ml-24 -mb-24 -z-0" />

          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Left Image Visuals */}
            <div className="lg:col-span-5 relative flex justify-center py-4">
              <div className="absolute w-[240px] h-[300px] bg-slate-900/30 rounded-2xl border border-white/10 -rotate-6 transform translate-x-[-15px] translate-y-[-10px]" />
              <div className="relative w-[245px] h-[310px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-350 bg-emerald-900 group">
                <img 
                  src="src/assets/images/gilafruit_about_kiwi_grower_1781077370132.png" 
                  alt="GilaFruit Kiwi Grower Harvest" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 text-start space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t_about.globalTitle}
              </h2>
              
              <div className="space-y-4 text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
                <p>{t_about.history1}</p>
                <p>{t_about.history2}</p>
              </div>

              {/* Story Button Row */}
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-emerald-800/60 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
                <div className="font-serif italic text-2xl tracking-wide text-emerald-300 select-none">
                  Gilafruit.co
                </div>
                <button 
                  onClick={() => handleNav('#/services')}
                  className="px-6 py-2.5 bg-[#1a8a42] hover:bg-[#157035] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  {t_about.storyBtn}
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* 4. WHAT SETS US APART: SUPPLY CHAIN */}
        <section className={`grid grid-cols-1 lg:grid-cols-12 gap-12 py-4 ${isRtl ? 'lg:flex-row-reverse' : ''}`} id="about-supply-chain">
          
          <div className="lg:col-span-5 text-start space-y-6 flex flex-col justify-center">
            <span className="text-[#1a8a42] text-xs font-black uppercase tracking-widest block">
              {t_about.setsApart}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#01261d] tracking-tight leading-none">
              {t_about.supplyChain}
            </h2>
            
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>{t_about.supplyDesc1}</p>
              <p>{t_about.supplyDesc2}</p>
              <p>{t_about.supplyDesc3}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('#/products')}
                className="px-6 py-3 bg-[#1a8a42] hover:bg-[#0c4a34] text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer hover:shadow-lg"
              >
                {t_about.productsBtn}
              </button>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t_about.valueCards.map((card: any, idx: number) => {
              const icons = [ShoppingCart, Globe, Users, Hotel];
              const IconComp = icons[idx % 4];
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl text-start flex flex-col items-start transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-[#1a8a42]">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mt-4 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </section>


        {/* 5. LET'S GROW TOGETHER */}
        <section className="bg-[#242b28] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden" id="vision-and-culture">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className="lg:col-span-5 text-start space-y-6">
              <div className="rounded-2xl overflow-hidden border-4 border-slate-800 shadow-xl max-h-80 sm:max-h-96">
                <img 
                  src="src/assets/images/gilafruit_about_culture_workers_1781077387542.png" 
                  alt="GilaFruit Packing & Grading Workers" 
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {t_about.cultureTitle}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {t_about.cultureDesc}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 text-start space-y-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">
                  {t_about.growTogether}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {t_about.visionTitle}
                </h2>
              </div>

              {/* Numbers list of Vision Points */}
              <div className="space-y-4 pt-4 flex-1">
                {t_about.visionPoints.map((point: any, index: number) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5 ${isRtl ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-mono text-lg font-black text-[#1a8a42] flex-shrink-0 animate-pulse">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-white text-sm sm:text-base tracking-tight mb-1">
                        {point.title}
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={() => handleNav('#/blog')}
                  className="px-6 py-2.5 bg-[#1a8a42] hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer hover:shadow-lg"
                >
                  {t_about.blogBtn}
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* 6. LOGISTICS, SECURITY, GALLERY & CERTIFICATIONS */}
        <section className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-4 text-start ${isRtl ? 'lg:flex-row-reverse' : ''}`} id="quality-and-certifications">
          
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-3 gap-2 bg-[#f2f4f2] p-3 rounded-2xl shadow-xs border border-slate-200/50">
              {galleryImages.slice(0, 5).map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white shadow-xs border border-slate-100 group">
                  <img 
                    src={img} 
                    alt={`GilaFruit Process Sorter ${i}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}

              <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-xs border border-slate-100 group">
                <img 
                  src={galleryImages[5]} 
                  alt="GilaFruit Packing Illustrate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slot 7 (Bottom Left - WATCH VIDEO ACTION COMPONENT) */}
              <div className="aspect-square rounded-lg flex flex-col items-center justify-center bg-[#1a8a42]/95 hover:bg-[#1a8a42] p-2 text-center text-white cursor-pointer shadow-md transition-all group">
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a8a42] shadow-sm mb-2 group-hover:scale-110 transition-transform">
                  <Play className="w-4.5 h-4.5 fill-current ml-0.5" />
                </span>
                <span className="text-[10px] sm:text-xs font-black tracking-tight leading-none block uppercase">
                  {t_about.watchVideo}
                </span>
                <span className="text-[7.5px] text-emerald-100 mt-1 uppercase block">
                  {t_about.collLabel}
                </span>
              </div>

              {galleryImages.slice(6, 8).map((img, i) => (
                <div key={i + 6} className="aspect-square rounded-lg overflow-hidden bg-white shadow-xs border border-slate-100 group">
                  <img 
                    src={img} 
                    alt={`GilaFruit Process Sorter ${i + 6}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01261d] tracking-tight leading-snug">
              {t_about.certHeader}
            </h2>
            
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>{t_about.certDesc1}</p>
              <p>{t_about.certDesc2}</p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
