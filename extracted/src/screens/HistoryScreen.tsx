import React, { useState } from 'react';
import { 
  Calendar, 
  Sprout, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  BarChart3, 
  Clock, 
  Sparkles, 
  Globe, 
  Leaf, 
  Truck, 
  Users, 
  TrendingUp, 
  BookOpen,
  Compass,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  tag: string;
  category: 'foundation' | 'expansion' | 'excellence';
  description: string;
  iconType: string;
  highlights: string[];
}

const TEXTS: Record<string, {
  heroTag: string;
  heroTitle: string;
  sect2Badge: string;
  sect2Title: string;
  para1: string;
  para2: string;
  para3: string;
  quote: string;
  yearsBadgeValue: string;
  yearsBadgeText: string;
  brandLabel: string;
  brandValue: string;
  stat1: string;
  stat2: string;
  stat3: string;
  stat4: string;
  exploreLabel: string;
  exploreTitle: string;
  exploreDesc: string;
  milestoneComplete: string;
  noMilestones: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaDesc: string;
  browseCatalog: string;
  harvestCalendar: string;
  eras: { id: string; label: string; years: string }[];
  timelineItems: TimelineItem[];
}> = {
  en: {
    heroTag: "Chronology & Legacy",
    heroTitle: "Our Proud Heritage",
    sect2Badge: "ESTABLISHED 2001",
    sect2Title: "From Pristine Gardens to the Global Market",
    para1: "From its humble beginnings situated amidst the verdant, sun-soaked kiwi orchards of Gilan in 2001, GilaFruit has emerged as a powerhouse in agricultural export logistics across the Eurasian and Middle Eastern domains.",
    para2: "As a proud branch of the registered Sabzgustaran Gilan Fruit Company, GilaFruit was founded with an unyielding commitment to premium calibration, elite cold preservation, and sustainable cultivation. Over 23 years, we have mastered complex customs clearance frameworks and built cutting-edge terminal refrigeration networks.",
    quote: "\"Our history chronicles a relentless focus on quality over compromise. We believe that global trading should be built on absolute trust and highly systematic operations.\"",
    para3: "Today, our state-of-the-art packaging systems and synchronized cold trucking networks supply international hotel chains, elite restaurants, and global wholesale distributors with top-tier agricultural items, directly verified from origin.",
    yearsBadgeValue: "23+ Years",
    yearsBadgeText: "Of Agronomic Excellence",
    brandLabel: "Registered Brand:",
    brandValue: "Sabzgustaran Gilan Fruit",
    stat1: "Established Since",
    stat2: "Countries Served",
    stat3: "Elite Certifications",
    stat4: "Annual Export Capacity",
    exploreLabel: "Explore Millennial Milestones",
    exploreTitle: "Interactive Era Chronology",
    exploreDesc: "Select an era to explore GilaFruit's historical highlights, certification milestones, and trade breakthroughs.",
    milestoneComplete: "Milestone Complete",
    noMilestones: "No milestones found in this filter.",
    ctaBadge: "Ready to Partner?",
    ctaTitle: "Bring GilaFruit Premium Standards to Your Business",
    ctaDesc: "Whether you are an international supermarket chain or a high-end food distributor, we stand ready to deliver verified quality.",
    browseCatalog: "Browse Catalog",
    harvestCalendar: "Harvest Calendar",
    eras: [
      { id: 'all', label: 'All Milestones', years: '2001 - Present' },
      { id: 'foundation', label: 'Foundations', years: '2001 - 2010' },
      { id: 'expansion', label: 'Global Push', years: '2011 - 2019' },
      { id: 'excellence', label: 'Modern Premium', years: '2020 - Present' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'Dreams That Bore Fruit',
        tag: 'ORIGIN STORY',
        category: 'foundation',
        description: 'Amidst the lush, fragrant kiwi orchards of Iran in 2001, a grand vision took root. Our founders, with tireless devotion and hopeful hearts, planted the first seeds of what would become GilaFruit. In those early years, they worked hand-in-hand with the local agricultural community to deliver exceptional produce to domestic markets, always planning for premium expansion.',
        iconType: 'sprout',
        highlights: ['Verdant Kiwi Fields', 'Community Empowerment', 'Local Distribution Setup']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'A New Era of Growth',
        tag: 'SYSTEMIZATION',
        category: 'foundation',
        description: 'During the global agricultural and transport adjustments of this period, our managers executed intelligent supply chains to secure steady market-share growth. In late 2010, responsibilities for modernizing administrative operations and planning large-scale multi-national cold logistics were proudly passed to a highly motivated second generation of specialists.',
        iconType: 'trending',
        highlights: ['Cold Storage Upgrades', 'Logistics Standardization', 'Generational Transition']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Registration of Sabz Gostaran Gilan Fruit Company',
        tag: 'REGISTRATION',
        category: 'expansion',
        description: 'Sabz Gostar Gilan Fruit Company was officially registered, introducing the "GilaFruit" brand to international traders. The business modernized the wholesale collection and export of direct citrus crops and high-grade fruits. In this era, GilaFruit quickly developed long-term customer pipelines in Georgia, Turkey, Iraq, and Pakistan.',
        iconType: 'globe',
        highlights: ['Sabz Gostaran Foundation', 'Brand Trademark', 'First Cross-Border Contracts']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'Transition to High-Quality Digital Processing',
        tag: 'TRANSFORMATION',
        category: 'expansion',
        description: 'This period brought significant visual and technical shifts. The brand launched its premium online portal to update bulk prices, established brand-new sorting depots, and opened secure kiwi pipelines straight to the Eurasian custom entries. Concurrently, seeking specialized quality standards became the core corporate mandate.',
        iconType: 'compass',
        highlights: ['First Online Price Sheets', 'Kiwi Pipeline to Eurasia', 'Packaging Re-engineering']
      },
      {
        id: '5',
        year: '2016 - 2519',
        title: 'Pioneering Sustainable Supply Chains',
        tag: 'SUSTAINABILITY',
        category: 'expansion',
        description: 'Between 2016 and 2019, GilaFruit redefined its sourcing contracts. By integrating drip irrigation guidelines with partnered fields, providing fair wages, and recycling water throughout the packhouses, we guaranteed eco-responsible footprints. This secured our partnerships with first-tier regional supermarkets.',
        iconType: 'leaf',
        highlights: ['Water Recycling Protocols', 'Supermarket-Grade Packhouse', 'Fair Farmer Alliance']
      },
      {
        id: '6',
        year: '2520',
        title: 'Achieving Elite Global Standards',
        tag: 'CERTIFICATIONS',
        category: 'excellence',
        description: 'GilaFruit took quality assurance to the peak of international compliance. In 2020, we secured prestigious certifications including ISO 9001, ISO 22000, ISO 14001, ISO 45001, HACCP, GMP, IMS, and ISO 22301. These achievements allowed us to sign direct procurement contracts with renowned hotel chains and giant retail hypermarkets.',
        iconType: 'award',
        highlights: ['ISO 22000 & HACCP Certified', 'Direct Hotel Sourcing', 'Eurasian Customs Protocol']
      },
      {
        id: '7',
        year: '2021',
        title: 'Empowering Regional Joint-Ventures',
        tag: 'JOINT VENTURES',
        category: 'excellence',
        description: 'We established long-term strategic sorting and brokerage offices in the most promising agricultural nodes of Iran. Facilitating instant customs clearances for massive convoys, GilaFruit consolidated imports and exports with major trade hubs, taking active leadership roles in agricultural conferences.',
        iconType: 'users',
        highlights: ['Regional Custom Brokerage', 'Mass Cargo Consolidation', 'Active Agro-Expositions']
      },
      {
        id: '8',
        year: '2022',
        title: 'Unified Sourcing & Unified Sea Logistics',
        tag: 'MULTIMODAL SHIPS',
        category: 'excellence',
        description: 'To simplify wholesale imports, GilaFruit offered clients a single-window interface covering crop selection, cooling, customized package design, custom clearance, and door-to-door delivery. Under partnerships with elite refrigerated shipping lines, we expanded maritime transit lanes across regional ports with flawless cold chain tracking.',
        iconType: 'truck',
        highlights: ['Single-Window Cargo Booking', 'Reefer Container Shipping', 'GPS-Tracked Cold Supply']
      },
      {
        id: '9',
        year: '2023',
        title: 'Digital Logistics & Market Leadership',
        tag: 'LOGISTICS LEADER',
        category: 'excellence',
        description: 'GilaFruit achieved peak efficiency across export corridors. By launching proprietary digital tracking of temperature states inside containers, establishing advanced cooling halls, and contracting with sovereign commercial buyers in Belarus, Russia, India, and the Arab Gulf, the brand solidified its leadership.',
        iconType: 'sparkles',
        highlights: ['Autonomous Temp Logs', 'MENA Area Expansion', 'Premium Wholesale Leadership']
      },
      {
        id: '10',
        year: '2024',
        title: 'The Smart Agro-Trade Revolution',
        tag: 'SMART TRADE',
        category: 'excellence',
        description: 'We created an advanced trading workflow and debuted the third generation of the GilaFruit digital platform. This breakthrough features live ocean & land freight rate calculations, interactive fruit catalogs with high-end multimedia indexes, and real-time support channels for international traders.',
        iconType: 'book',
        highlights: ['Live Freight Rates Portal', 'Expert Consultations', 'Wholesale Price Tickers']
      },
      {
        id: '11',
        year: '2025',
        title: 'A Vision for the Coming Horizon',
        tag: 'THE COMING CORRIDOR',
        category: 'excellence',
        description: 'We are already cataloging and designing new agricultural processing facilities. Introducing solar-powered packhouses and robotic calibration systems, we look forward to presenting even more premium surprises to global wholesaling partners very soon.',
        iconType: 'clock',
        highlights: ['Robotic Fruit Sorters', 'Solar Power Integration', 'Next-Gen Fruit Processing']
      }
    ]
  },
  fa: {
    heroTag: "تاریخچه و اصالت",
    heroTitle: "میراث افتخارآمیز ما",
    sect2Badge: "تأسیس شده در ۱۳۸۰",
    sect2Title: "از باغ‌های سرسبز گیلان تا بازارهای عمده‌فروشی جهانی",
    para1: "گیلافروت فعالیت خود را در سال ۱۳۸۰ در میان باغ‌های حاصلخیز و پر محصول کیوی گیلان به عنوان بومی و محلی پایه‌گذاری کرد و امروز به یکی از بزرگترین شرکت‌های زنجفرصت در بسته‌بندی، سورتینگ و لجستیک مواد غذایی صادراتی اوراسیا و خلیج‌فارس تبدیل شده است.",
    para2: "ما به عنوان بازوی تجاری رسمی شرکت سبز گستران گیلا فروت، از همان ابتدا تعهد سفت و سختی را به بسته بندی لوکس، درجه بندی و سورتینگ مدرن و پایش دائم زنجیره سرما اختصاص داده‌ایم. در طول این ۲۳ سال، بهترین روابط گمرکی و حمل و ترانزیت کانتینرهای سردخانه‌ای را پایه‌ریزی کرده‌ایم.",
    quote: "«تاریخچه ما داستان تمرکز همیشگی بر کیفیت و حذف سازش‌های زیان‌بار است. ما صمیمانه ایمان داریم که تجارت کشاورزی ممتاز باید بر بستری کاملا شفاف و اعتماد متقابل صورت گیرد.»",
    para3: "امروز، پکیج‌های پیشرفته سورتینگ مجهز به چشم الکترونیک و خطوط کانتینری مجهز به جی‌پی‌اس دمایی، بهترین خروجی مزارع ایران را به هتل‌ها، هایپرمارکت‌ها و هاب‌های عمده فروشی مسکو، سن پترزبورگ و دبی تحویل می‌دهند.",
    yearsBadgeValue: "۲۳+ سال",
    yearsBadgeText: "پیشگامی و اصالت در کشاورزی صادراتی",
    brandLabel: "نام تجاری رسمی ثبت شده:",
    brandValue: "شرکت سبز گستران گیلافروت",
    stat1: "سالیان فعالیت ممتد",
    stat2: "کشورهای زنجیره تامین",
    stat3: "گواهینامه‌های معتبر جهانی",
    stat4: "ظرفیت سالانه بارگیری",
    exploreLabel: "مرور دستاوردهای کلیدی",
    exploreTitle: "تاریخچه تعاملی ادوار رشد",
    exploreDesc: "برای بررسی دقیق گام‌های اساسی، گواهینامه‌ها، تحولات مرزی و موفقیت‌های صادراتی گیلافروت، دوره مورد نظر خود را فیلتر کنید.",
    milestoneComplete: "میراث و دستاورد نهایی",
    noMilestones: "هیچ دستاوردی بر اساس این فیلتر ثبت نشده است.",
    ctaBadge: "آماده مذاکرات تجاری هستید؟",
    ctaTitle: "کیفیت لوکس گیلافروت را به زنجیره تامین خود بیفزایید",
    ctaDesc: "چه یک زنجیره بزرگ هایپرمارکت بین‌المللی باشید و چه خریدار عمده میوه صادراتی، ما تمامی فرآیند فراری، سورت، بارگیری و تحویل در مقصد گمرک را پوشش می‌دهیم.",
    browseCatalog: "کاتالوگ غنی محصولات",
    harvestCalendar: "تقویم برداشت محصولات کشاورزی",
    eras: [
      { id: 'all', label: 'تمامی ادوار کلیدی', years: '۱۳۸۰ - اکنون' },
      { id: 'foundation', label: 'مراحل احیا و بومی‌سازی', years: '۱۳۸۰ - ۱۳۸۹' },
      { id: 'expansion', label: 'جهش صادرات منطقه', years: '۱۳۹۰ - ۱۳۹۸' },
      { id: 'excellence', label: 'کیفیت برتر دیجیتال', years: '۱۳۹۹ - اکنون' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '۱۳۸۰ - ۱۳۸۴',
        title: 'رویایی که شکوفه داد',
        tag: 'آغاز داستان',
        category: 'foundation',
        description: 'کاشت و برداشت نخستین کیوی‌های هایوارد با همکاری گسترده باغداران بومی گیلان و توزیع مستقیم آن در بازارهای داخلی.',
        iconType: 'sprout',
        highlights: ['باغ‌های سرسبز کیوی تالش', 'توانمندسازی باغداران بومی', 'راه‌اندازی ناوگان اولیه توزیع']
      },
      {
        id: '2',
        year: '۱۳۸۴ - ۱۳۸۹',
        title: 'عصر ارتقا و انتقال',
        tag: 'سیستم‌سازی فرآیند',
        category: 'foundation',
        description: 'مدرن‌سازی سردخانه‌ها و ساختارهای مدیریت زنجیره تامین. انتقال فیزیکی و تجاری به نسل دوم متخصصان زبده جهت پیاده‌سازی گمرک.',
        iconType: 'trending',
        highlights: ['ارتقای تکنولوژی سردخانه‌ها', 'تسهیل ترانزیت کالا', 'ورود نسل دوم جدی مدیران متخصص']
      },
      {
        id: '3',
        year: '۱۳۹۰ - ۱۳۹۲',
        title: 'ثبت قانونی شرکت سبز گستران گیلا فروت',
        tag: 'تولد برند رسمی',
        category: 'expansion',
        description: 'تولد برند تجاری "گیلافروت" به منظور ورود چشمگیر به صادرات مرکبات و کیوی به قفقاز، پاکستان، گرجستان و عراق.',
        iconType: 'globe',
        highlights: ['تاسیس رسمی شخصیت حقوقی', 'انحصار ثبت علامت تجاری', 'عقد قراردادهای بزرگ فرامرزی']
      },
      {
        id: '4',
        year: '۱۳۹۳ - ۱۳۹۴',
        title: 'توسعه فرآیندهای مکانیزه سورتینگ',
        tag: 'تحول دیجیتال گمرک',
        category: 'expansion',
        description: 'تاسیس اولین پورتال دیجیتال بورس روزانه و افتتاح شعب بسته‌بندی مکانیزه کیوی جهت ارسال به بنادر آستاراخان روسیه.',
        iconType: 'compass',
        highlights: ['پورتال قیمت‌گذاری روزانه', 'صادرات حرفه‌ای به بنادر روسیه', 'بازطراحی کلمپ‌های بسته‌بندی']
      },
      {
        id: '5',
        year: '۱۳۹۵ - ۱۳۹۸',
        title: 'پیشگامی در صرفه‌جویی و کشاورزی پایدار',
        tag: 'حفظ آب‌های زیرزمینی',
        category: 'expansion',
        description: 'کاهش شدید هدر رفت آب با تجهیز لوله‌کشی‌های قطره‌ای و پیاده‌سازی سیستم‌های هوشمند تخلیه پسماند بسته‌بندی.',
        iconType: 'leaf',
        highlights: ['سیستم نوین بازیافت آب شستشو', 'گرید فوق‌العاده کیفیت صادراتی', 'اتحاد مستقیم باغداران پایدار']
      },
      {
        id: '6',
        year: '۱۳۹۹',
        title: 'تحقق جامع‌ترین استانداردهای کیفی جهانی',
        tag: 'گواهینامه‌های استاندارد',
        category: 'excellence',
        description: 'دستیابی به تمامی تائیدیه‌های بین‌المللی ISO 9001, ISO 22000, HACCP, GMP و آغاز تجارت مستقیم با هتل‌های زنجیره‌ای ممتاز.',
        iconType: 'award',
        highlights: ['اخذ همزمان ایزو ۹۰۰۱ و ۲۲۰۰۰', 'تجارت با برندهای لوکس هتل', 'پروتکل ترخیص فوق‌سریع اوراسیا']
      },
      {
        id: '7',
        year: '۱۴۰۰',
        title: 'تاسیس کارگزاری‌های ترخیص کالا در گمرکات',
        tag: 'سرعت در ترانزیت مرز',
        category: 'excellence',
        description: 'کاهش زمان ماندگاری کالا در مرز آستارا با پیاده‌سازی کارگزاری‌های بومی و اختصاصی ترخیص یاری گیلافروت.',
        iconType: 'users',
        highlights: ['ترخیص تخصصی گمرک آستارا', 'تجمیع کانال‌های بار سردخانه‌ای', 'حضور پررنگ در پنل‌های اقتصادی']
      },
      {
        id: '8',
        year: '۱۴۰۱',
        title: 'یکپارچه‌سازی لجستیک حمل چندوجهی دریایی',
        tag: 'حمل با کانتینرهای سرد دریایی',
        category: 'excellence',
        description: 'امضای توافق‌نامه با شرکت‌های کشتیرانی جهت رزرو لاین‌های مجهز به کانتینرهای فریزر با بهترین کیفیت پایش دما.',
        iconType: 'truck',
        highlights: ['یکپارچه‌سازی بارانداز خزر', 'حمل کانتینر یخچالی دریایی', 'پایش اتوماتیک دمای کانتینر']
      },
      {
        id: '9',
        year: '۱۴۰۲',
        title: 'رهبری بلامنازع در ترانزیت کریدور شمال-جنوب',
        tag: 'استاندارد دیجیتال دما',
        category: 'excellence',
        description: 'پایش اتوماتیک دیتا لاگرهای سردخانه‌ای، توسعه بازارهای بلاروس، هند و تثبیت نفوذ در بزرگترین هایپرمارکت‌های روسیه.',
        iconType: 'sparkles',
        highlights: ['دیتا لاگرهای نظارت مداوم', 'توسعه بازار بلاروس و هند', 'رهبری صادرات تندمصرف کشاورزی']
      },
      {
        id: '10',
        year: '۱۴۰۳',
        title: 'انقلاب ابزارهای دیجیتال تجارت کشاورزی',
        tag: 'راهکارهای تجاری مدرن',
        category: 'excellence',
        description: 'شکوفایی نسل سوم پورتال هوشمند گیلافروت با استعلام زنده کرایه‌ حمل جاده‌ای و دریایی برای راحتی سفارش تجار خارجی.',
        iconType: 'book',
        highlights: ['پورتال زنده قیمت و لجستیک', 'مشاوره آنلاین صادرات کیوی', 'شفافیت حداکثری معاملات تجاری']
      },
      {
        id: '11',
        year: '۱۴۰۴',
        title: 'افق روشن کالیبراسیون لیزری و رباتیک',
        tag: 'صادرات پویای قرن جدید',
        category: 'excellence',
        description: 'برنامه‌ریزی و طراحی سوله‌های بسته‌بندی مجهز به خط رباتیک MAF RODA فرانسه و تامین انرژی پاک خورشیدی پایانه صادراتی.',
        iconType: 'clock',
        highlights: ['سورتینگ رباتیک نوری', 'تجهیز نیروگاه خورشیدی', 'تجهیزات مدرن سرمایش خلأ']
      }
    ]
  },
  ru: {
    heroTag: "Хронология и Наследие",
    heroTitle: "Наша Гордая История",
    sect2Badge: "ОСНОВАНО В 2001",
    sect2Title: "От чистейших садов до глобального рынка",
    para1: "Начиная с скромных садов киви в провинции Гилян в 2001 году, бренд GilaFruit превратился в мощного экспортера и лидера сельскохозяйственной логистики в Евразийском регионе.",
    para2: "Являясь официальным подразделением компании Sabzgustaran Gilan Fruit, мы изначально ориентировались на премиальную калибровку, передовые технологии хранения и строгий температурный контроль.",
    quote: "\"Наша история — это хроника бесконечного фокуса на качестве. Мы верим, что торговля должна строиться на доверии и высокой точности всех бизнес-процессов.\"",
    para3: "Сегодня мы гордимся тем, что поставляем свежайшие фрукты и овощи напрямую в крупнейшие торговые сети России, Беларуси и стран Персидского залива.",
    yearsBadgeValue: "23+ Года",
    yearsBadgeText: "Выдающегося агрономического опыта",
    brandLabel: "Зарегистрированный бренд:",
    brandValue: "Sabzgustaran Gilan Fruit Co.",
    stat1: "Основано в",
    stat2: "Обслуживаемые страны",
    stat3: "Премиум Сертификаты",
    stat4: "Ежегодный экспорт",
    exploreLabel: "Ключевые Вехи истории",
    exploreTitle: "Интерактивная Хронология",
    exploreDesc: "Выберите период, чтобы узнать больше о международной сертификации и логистических триумфах GilaFruit.",
    milestoneComplete: "Веха достигнута",
    noMilestones: "В этом фильтре ничего не найдено.",
    ctaBadge: "Готовы к Партнерству в Сфере Оптом?",
    ctaTitle: "Внедрите премиальные стандарты GilaFruit в Ваш бизнес",
    ctaDesc: "Независимо от того, являетесь ли вы международной торговой сетью или дистрибьютором фруктов, мы гарантируем фитосанитарную безопасность и точность поставок.",
    browseCatalog: "Каталог Продукции",
    harvestCalendar: "Календарь Сбора Урожая",
    eras: [
      { id: 'all', label: 'Все События', years: '2001 - Настоящее' },
      { id: 'foundation', label: 'Создание бренда', years: '2001 - 2010' },
      { id: 'expansion', label: 'Глобальный Рост', years: '2011 - 2019' },
      { id: 'excellence', label: 'Лидерство в РФ и СНГ', years: '2020 - Настоящее' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'Мечты дают плоды',
        tag: 'НАЧАЛО ИСТОРИИ',
        category: 'foundation',
        description: 'Высадка первых плантаций Hayward киви в провинции Гилян и организация стабильных локальных поставок.',
        iconType: 'sprout',
        highlights: ['Сады киви в Гиляне', 'Поддержка фермеров', 'Локальная сеть сбыта']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'Эра Систематизации',
        tag: 'МОДЕРНИЗАЦИЯ',
        category: 'foundation',
        description: 'Модернизация холодильного оборудования и передача операционного управления второму поколению амбициозных специалистов.',
        iconType: 'trending',
        highlights: ['Обновление холодильников', 'Стандартизация процессов', 'Новое поколение лидеров']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Регистрация компании Sabz Gostaran Gilan Fruit',
        tag: 'ОФИЦИАЛЬНЫЙ СТАТУС',
        category: 'expansion',
        description: 'Официальная регистрация международной торговой марки GilaFruit. Заключение первых зарубежных контрактов на поставку цитрусовых.',
        iconType: 'globe',
        highlights: ['Юридическое оформление', 'Защита торговой марки', 'Экспорт в Ирак и Пакистан']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'Переход на цифровые стандарты калибровки',
        tag: 'ТЕХНОЛОГИЧНОСТЬ',
        category: 'expansion',
        description: 'Запуск онлайн-портала цен, открытие автоматизированных цехов сортировки и налаживание каналов в РФ.',
        iconType: 'compass',
        highlights: ['Онлайн-цены на опт', 'Экспорт в Россию через Астрахань', 'Премиум упаковка']
      },
      {
        id: '5',
        year: '2016 - 2019',
        title: 'Устойчивые цепочки поставок',
        tag: 'ЭКО-ОТВЕТСТВЕННОСТЬ',
        category: 'expansion',
        description: 'Внедрение систем капельного орошения на партнерских полях и сокращение экологического следа.',
        iconType: 'leaf',
        highlights: ['Экономия водных ресурсов', 'Супермаркетный стандарт упаковки', 'Фермерский альянс']
      },
      {
        id: '6',
        year: '2020',
        title: 'Получение всемирно признанных сертификатов',
        tag: 'СЕРТИФИКАЦИЯ',
        category: 'excellence',
        description: 'Успешное прохождение международных аудитов на получение сертификатов ISO 9001, ISO 22000, HACCP, GMP и IMS.',
        iconType: 'award',
        highlights: ['Стандарты ISO 22000 и HACCP', 'Прямые контракты в ритейле', 'Быстрый таможенный протокол']
      },
      {
        id: '7',
        year: '2021',
        title: 'Усиление таможенного присутствия на границах',
        tag: 'ТАМОЖЕННЫЙ БРОКЕРИДЖ',
        category: 'excellence',
        description: 'Открытие специализированных логистических офисов GilaFruit в Астаре для ускоренного прохождения таможни.',
        iconType: 'users',
        highlights: ['Прямая растаможка в Астаре', 'Консолидация крупных грузов', 'Агропромышленные выставки']
      },
      {
        id: '8',
        year: '2022',
        title: 'Мультимодальные перевозки морским флотом',
        tag: 'МОРСКАЯ ЛОГИСТИКА',
        category: 'excellence',
        description: 'Заключение альянсов с судовладельцами на Каспии, гарантирующими наличие рефрижераторных контейнеров высшего класса.',
        iconType: 'truck',
        highlights: ['Каспийский экспресс-маршрут', 'Рефрижераторные контейнеры', 'GPS контроль температуры']
      },
      {
        id: '9',
        year: '2023',
        title: 'Цифровая логистика и доминирование на рынке EAEU',
        tag: 'ТЕМПЕРАТУРНЫЙ КОНТРОЛЬ',
        category: 'excellence',
        description: 'Установка автономных датчиков мониторинга влажности и температуры в пути и расширение поставок в РФ, Беларусь и ОАЭ.',
        iconType: 'sparkles',
        highlights: ['Логгеры данных реального времени', 'Экспансия в Минск и Дубай', 'Лидерство в сегменте Premium киви']
      },
      {
        id: '10',
        year: '2024',
        title: 'Цифровая агро-платформа GilaFruit 3.0',
        tag: 'ИННОВАЦИИ',
        category: 'excellence',
        description: 'Презентация инновационной платформы с живым калькулятором грузоперевозок и быстрой подачей документов на фитосанитарный контроль.',
        iconType: 'book',
        highlights: ['Калькулятор тарифов онлайн', 'Цифровая отчетность и сертификаты', 'Прозрачность оптовых сделок']
      },
      {
        id: '11',
        year: '2025',
        title: 'Роботизированная сортировка MAF RODA',
        tag: 'БУДУЩИЕ ГОРИЗОНТЫ',
        category: 'excellence',
        description: 'Подготовка к вводу в эксплуатацию роботизированных калибраторов с машинным зрением и переход на солнечные батареи на базах.',
        iconType: 'clock',
        highlights: ['Роботы сортировки MAF RODA', 'Солнечная энергетика складов', 'Революционные упаковочные решения']
      }
    ]
  },
  ar: {
    heroTag: "الجدول الزمني والإرث",
    heroTitle: "تاريخنا العريق وفخرنا",
    sect2Badge: "تأسست في عام ٢٠٠١",
    sect2Title: "من البساتين الحيوية إلى أسواق البيع بالجملة العالمية",
    para1: "منذ بداياتها المتواضعة في بساتين الكيوي الغنية في جيلان في عام ٢٠٠1، برزت شركة جيلا فروت كقوة رائدة في مجال لوجستيات التصدير الزراعي على مستوى قارة أوراسيا والشرق الأوسط.",
    para2: "كفرع تجاري لشركة سبز گستران جيلا فروت الرسمية ومسجلة، التزمنا التزامًا صارمًا بالمعايير العالمية للتعبئة والتغليف، الفرز والتدريج الآلي الدقيق، وضمان استقرار سلسلة التبريد والجمارك.",
    quote: "\"يجسد تاريخنا التركيز الدائم على تقديم الفئة الممتازة دون مساومة. نؤمن بأن التجارة العالمية يجب أن تُبنى على الثقة والشفافية التامة في سلاسل التوريد.\"",
    para3: "اليوم، تضمن أنظمتنا لفرز الفواكه وشبكات النقل بالشاحنات المبردة المجهزة بأجهزة GPS تموين كبار الفنادق وهايبر ماركت التجزئة بأجود المحاصيل الطازجة والموثقة.",
    yearsBadgeValue: "٢٣+ سنة",
    yearsBadgeText: "من التميز والأصالة الزراعية",
    brandLabel: "العلامة التجارية المسجلة:",
    brandValue: "شركة سبز گستران جيلا فروت",
    stat1: "تأسست منذ",
    stat2: "البلدان التي نخدمها",
    stat3: "الشهادات الدولية الممتازة",
    stat4: "القدرة التصديرية السنوية",
    exploreLabel: "استكشف محطات التطوير الأساسية",
    exploreTitle: "التسلسل التاريخي لنمو أعمالنا",
    exploreDesc: "اختر حقبة زمنية محددة لاستكشاف أهم الانجازات والشهادات والتحولات اللوجستية التي مرت بها شركة جيلا فروت.",
    milestoneComplete: "اكتمال المحطة التاريخية",
    noMilestones: "لم يتم العثور على محطات ضمن هذا الفلتر.",
    ctaBadge: "هل أنت جاهز للشراكة التجارية؟",
    ctaTitle: "احصل على معايير النخبة لجيلا فروت لشركتك",
    ctaDesc: "سواء كنت سلسلة سوبرماركت دولية أو موزع جملة للأغذية، نحن نضمن التعبئة الفاخرة، الفحص الحجري الدقيق وسرعة اللوجستيات.",
    browseCatalog: "تصفح كتالوج المنتجات",
    harvestCalendar: "تقويم حصاد المحاصيل",
    eras: [
      { id: 'all', label: 'جميع المحطات', years: '٢٠٠١ - الحالي' },
      { id: 'foundation', label: 'بدايات التأسيس', years: '٢٠٠١ - ٢٠١٠' },
      { id: 'expansion', label: 'التوسع العالمي وأوراسيا', years: '٢٠١١ - ٢٠١٩' },
      { id: 'excellence', label: 'الريادة والتميز الرقمي', years: '٢٠٢٠ - الحالي' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '٢٠٠١ - ٢٠٠٥',
        title: 'أحلام أثمرت نجاحًا',
        tag: 'قصة البداية',
        category: 'foundation',
        description: 'بدء زراعة الكيوي من نوع هيفارد في جيلان والتعاون المثمر مع المزارعين المحليين لتموين البورصة المحلية.',
        iconType: 'sprout',
        highlights: ['بساتين الكيوي الغنية', 'تمكين وإرشاد المزارعين', 'تنظيم خطوط التوزيع المحلي']
      },
      {
        id: '2',
        year: '٢٠٠٥ - ٢٠١٠',
        title: 'فترة النظام اللوجستي وتحديث المعايير',
        tag: 'مأسسة العمليات',
        category: 'foundation',
        description: 'تطوير مخازن التبريد القديمة ونقل إدارة العمليات بسلاسة للجيل الثاني من المهندسين والمتخصصين.',
        iconType: 'trending',
        highlights: ['ترقية مخازن وغرف التبريد', 'توحيد سلاسل الإمداد والخدمات اللوجستية', 'دخول الجيل الثاني والتحول المؤسسي']
      },
      {
        id: '3',
        year: '٢٠١١ - ٢٠١٣',
        title: 'تسجيل شركة سبز گستران جيلا فروت رسميًا',
        tag: 'تسجيل رسمي للبريد',
        category: 'expansion',
        description: 'التسجيل القانوني لاسم وعلامة GilaFruit وتوسيع التصدير بشكل مكثف لجمهوريات القوقاز، العراق وباكستان.',
        iconType: 'globe',
        highlights: ['تأسيس الشخصية القانونية وحمايتها', 'إشهار العلامة التجارية الفاخرة', 'توسيع التصدير الإقليمي']
      },
      {
        id: '4',
        year: '٢٠١٤ - ٢٠١٥',
        title: 'الانتقال إلى المكننة والفرز الميكانيكي',
        tag: 'ثورة التحول الإلكتروني',
        category: 'expansion',
        description: 'بناء منصة حية لتحديث الأسعار وتأسيس مراكز تصنيف الكيوي المصممة للتصدير المباشر لأسواق روسيا عبر بحر قزوين.',
        iconType: 'compass',
        highlights: ['بث الأسعار الرقمية لخدمة التجار', 'قنوات التصدير لروسيا عبر آستاراخان', 'إعادة تصميم حاويات التعبئة الفاخرة']
      },
      {
        id: '5',
        year: '٢٠١٦ - ٢٠١٩',
        title: 'الريادة في الإستدامة والمحافظة على الموارد',
        tag: 'البيئة المستدامة',
        category: 'expansion',
        description: 'عقود ذكية للمزارع لضمان جودة الري بالتنقيط وإعادة تكرير وتصفية مياه الغسيل داخل محطات التعبئة للحلفاء.',
        iconType: 'leaf',
        highlights: ['إعادة تدوير المياه بالمحطة', 'تعبئة مطابقة لمعايير السوبر ماركت', 'التحالف العادل لمزارعي الكيوي']
      },
      {
        id: '6',
        year: '٢٠٢٠',
        title: 'تحقيق أعلى الشهادات العالمية أيزو وهسب',
        tag: 'تميز الشهادات الدولية',
        category: 'excellence',
        description: 'الحصول الفوري على شهادات الأيزو ISO 9001، ۲۲۰۰۰، HACCP وGMP وغيرها لضمان الصادرات النخبوية والجمارك.',
        iconType: 'award',
        highlights: ['الامتثال لمعايير أيزو ٢٢٠٠٠ وهسب', 'عقود تموين لسلاسل الفنادق', 'تبسيط تخليص جمارك أوراسيا بسرعة']
      },
      {
        id: '7',
        year: '٢٠٢١',
        title: 'تنظيم كارگزاری ترخيص البضائع بالجمارك',
        tag: 'تخطي حواجز المنافذ بسرعة',
        category: 'excellence',
        description: 'شغل دور قيادي في تذليل عقبات المنافذ في معبر آستارا لضمان تسريع عبور الحاويات المبردة التابعة للشركة.',
        iconType: 'users',
        highlights: ['التخليص المباشر بجمارك آستارا والحدود', 'تسهيل تجميع قوافل الشحن العملاق', 'الحضور والمشاركة بمؤتمرات الزراعة الدولية']
      },
      {
        id: '8',
        year: '٢٠٢٢',
        title: 'تكامل اللوجستيك البحري بحرا وبرا چندوجهی',
        tag: 'النقل البحري المبرد',
        category: 'excellence',
        description: 'عقد اتفاقيات استراتيجية مع كبار ملاك السفن المجهزة بحاويات التجميد المتطورة ومتابعة مستمرة لبيانات التبريد والتحكير.',
        iconType: 'truck',
        highlights: ['الربط اللوجستي لموانئ بحر قزوين', 'حاويات تجميد وتبريد آلي', 'نقل آمن وصارم للسلع الطازجة']
      },
      {
        id: '9',
        year: '٢٠٢٣',
        title: 'بوابة المراقبة الرقمية لظروف النقل والشحن',
        tag: 'ريادة المراقبة الالية للحرارة',
        category: 'excellence',
        description: 'تركيب أجهزة قراءة آلية للحرارة لتوليد سجلات درجة الحرارة على مدار الساعة للحاويات المتجهة إلى بيلاروسيا وروسيا.',
        iconType: 'sparkles',
        highlights: ['أجهزة تسجيل الحرارة المستقلة', 'توسع منافذ الشحن لبيلاروسيا ومنطقة الخليج', 'ريادة سوق فواكه Hayward الكيوي الفاخرة']
      },
      {
        id: '10',
        year: '٢٠٢٤',
        title: 'منصة تسعير النقل البري والبحري المباشر ٣.٠',
        tag: 'حلول ذكية لخدمة التجار',
        category: 'excellence',
        description: 'تطوير الإصدار الثالث لخدمات النقل البري والبحري يتيح للتجار استعلاما لأسعار الشحن المتغيرة بشكل مباشر ويسير.',
        iconType: 'book',
        highlights: ['استعلام فوري لأسعار التصدير والشحن', 'استشارات التوضيب والتخليص الجمركي', 'أعلى مراتب الأمان لعمليات تداول السلع']
      },
      {
        id: '11',
        year: '٢٠٢٥',
        title: 'الفرز والتدريج بالروبوت والذكاء الآلي',
        tag: 'تطور مستمر للقرن الجديد',
        category: 'excellence',
        description: 'تخطيط وبناء محطات مجهزة بخط الفرز بالليزر المتكامل MAF RODA والاستثمار في مصادر الطاقة المستدامة.',
        iconType: 'clock',
        highlights: ['روبوتات الفرز بالليزر والفرن', 'النظام اللوجستي النظيف المستدام', 'صناعات تحويلية للفواكه والمنتجات الزراعية']
      }
    ]
  },
  tr: {
    heroTag: "Zaman Çizelgesi & Miras",
    heroTitle: "Gurur Dolu Geçmişimiz",
    sect2Badge: "KURULUŞ 2001",
    sect2Title: "Bereketli Bahçelerden Küresel Toptan Pazara",
    para1: "2001 yılında Gilan'ın verimli ve güneşli kivi bahçelerinde mütevazı adımlarla kurulan GilaFruit, bugün Avrasya ve Orta Doğu genelinde tarımsal ihracat lojistiğinin öncüsü haline gelmiştir.",
    para2: "Sabzgustaran Gilan Fruit Co. bünyesinde, premium standartlarda paketleme, lazerle ayıklama ve soğuk zincir korumasını temel önceliğimiz yaptık.",
    quote: "\"Tarihimiz, kaliteden ödün vermeyen duruşumuzun hikayesidir. Küresel ticaretin dürüstlük ve kusursuz lojistik süreçler üzerine kurgulanması gerektiğine inanıyoruz.\"",
    para3: "Bugün optik ayıklama sistemlerimiz ve ısı kontrollü reefer araçlarımızla, Rusya, Belarus ve Körfez ülkelerindeki büyük marketlere ve otellere doğrudan sevkiyat sağlamaktayız.",
    yearsBadgeValue: "23+ Yıl",
    yearsBadgeText: "Tarımsal ve İhracat Mükemmelliği",
    brandLabel: "Tescilli Marka:",
    brandValue: "Sabzgustaran Gilan Fruit",
    stat1: "Kuruluş Yılı",
    stat2: "Hizmet Verilen Ülke",
    stat3: "Uluslararası Sertifika",
    stat4: "Yıllık İhracat Kapasitesi",
    exploreLabel: "Önemli Kilometre Taşlarını Keşfedin",
    exploreTitle: "İnteraktif Dönem Kronolojisi",
    exploreDesc: "GilaFruit'in tarihsel başarılarını, gümrük kolaylıklarını ve küresel sertifikasyon süreçlerini incelemek için bir dönem seçin.",
    milestoneComplete: "Kilometre Taşı Tamamlandı",
    noMilestones: "Bu filtrede sonuç bulunamadı.",
    ctaBadge: "Ticarete Hazır mısınız?",
    ctaTitle: "GilaFruit Premium Standartlarını İşletmenize Taşıyın",
    ctaDesc: "İster uluslararası bir süper market zinciri olun, ister toptan meyve ithalatçısı, kusursuz gümrükleme ve lojistik ağımızla hizmete hazırız.",
    browseCatalog: "Ürün Kataloğu",
    harvestCalendar: "Hasat Takvimi",
    eras: [
      { id: 'all', label: 'Tüm Dönemler', years: '2001 - Günümüz' },
      { id: 'foundation', label: 'Kuruluş ve Sistemleşme', years: '2001 - 2010' },
      { id: 'expansion', label: 'Bölgesel Yayılım', years: '2011 - 2019' },
      { id: 'excellence', label: 'Dijitalleşme & Liderlik', years: '2020 - Günümüz' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'Meyve Veren Hayaller',
        tag: 'BAŞLANGIÇ HİKAYESİ',
        category: 'foundation',
        description: 'Gilan bölgesinde ilk Hayward kivi bahçelerinin kurulması ve yerel çiftçilerle birlikte iç pazar dağıtım ağının başlatılması.',
        iconType: 'sprout',
        highlights: ['Gilan Kivi Bahçeleri', 'Yerel Çiftçi Desteği', 'Dağıtım Standartları']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'Sistemleşme ve Dönüşüm',
        tag: 'SİSTEMLEŞME',
        category: 'foundation',
        description: 'Soğuk hava depolarının modernize edilmesi ve lojistik operasyonların ikinci nesil dinamik uzmanlara devredilmesi.',
        iconType: 'trending',
        highlights: ['Soğuk Depo Modernizasyonu', 'Lojistik Standartları', 'Yönetim Devri']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Sabz Gostaran Gilan Fruit Şirketinin Kurulması',
        tag: 'RESMİLEŞME',
        category: 'expansion',
        description: 'Sabz Gostaran Gilan Fruit şirketinin ve GilaFruit markasının resmen tescil edilmesi. Kafkasya ve Körfeze ilk kivi ihracatı.',
        iconType: 'globe',
        highlights: ['Şirketleşme Süreci', 'Marka Tescili', 'İhracat Noktaları']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'Mekanik Ayıklama ve Dijitalleşme',
        tag: 'DÖNÜŞÜM',
        category: 'expansion',
        description: 'Çevrimiçi fiyat güncelleyen portalın yayına girmesi, optik ayıklama merkezlerinin açılması ve Hazar Denizi üzerinden Rusya hattı.',
        iconType: 'compass',
        highlights: ['Online Fiyat Yapısı', 'Rusya İhracat Koridoru', 'Ambalaj Revizyonu']
      },
      {
        id: '5',
        year: '2016 - 2019',
        title: 'Sürdürülebilirlik Odaklı Tedarik Zincirleri',
        tag: 'SÜRDÜRÜLEBİLİRLİK',
        category: 'expansion',
        description: 'Çiftçilerle damlama sulama sözleşmeleri imzalanması ve tesislerde su geri kazanım sistemlerinin kurulması.',
        iconType: 'leaf',
        highlights: ['Su Geri Kazanımı', 'Premium Ambalaj Kalitesi', 'Çiftçi İttifakı']
      },
      {
        id: '6',
        year: '2020',
        title: 'Küresel Kalite Standartları ve ISO',
        tag: 'SERTİFİKASYON',
        category: 'excellence',
        description: 'ISO 9001, ISO 22000, HACCP, GMP ve IMS gibi prestijli uluslararası kalite sertifikalarının başarıyla alınması.',
        iconType: 'award',
        highlights: ['ISO 22000 & HACCP Standartları', 'Zincir Market Ortaklıkları', 'Hızlı Avrasya Gümrüğü']
      },
      {
        id: '7',
        year: '2021',
        title: 'Astara Sınır Gümrük Kolaylığı',
        tag: 'GÜMRÜKLEME',
        category: 'excellence',
        description: 'Ürünlerin sınır kapısında beklemesini önlemek için sınır bölgesinde kendi özel gümrük ofislerimizin kurulması.',
        iconType: 'users',
        highlights: ['Hızlı Gümrükleme Hizmetleri', 'Büyük Filo Yönetimi', 'Tarımsal İşbirlikleri']
      },
      {
        id: '8',
        year: '2022',
        title: 'Çok Modlu Deniz ve Kara Lojistiği',
        tag: 'DENİZ LOJİSTİĞİ',
        category: 'excellence',
        description: 'Gemilerde en kaliteli reefer dondurucu konteyner rezervasyon anlaşmaları ile kivi transit sürelerinin kısaltılması.',
        iconType: 'truck',
        highlights: ['Denizyolu Entegrasyonu', 'Isı Kontrollü Konteynerler', 'Sıkı Isı Takibi']
      },
      {
        id: '9',
        year: '2023',
        title: 'Avrasya Lojistik Liderliği ve Isı Logları',
        tag: 'KONTROL MEKANİZMASI',
        category: 'excellence',
        description: 'Tüm sevkiyat araçlarına yerleştirilen IoT sıcaklık takip cihazları ile verilerin anlık kontrol edilmesi.',
        iconType: 'sparkles',
        highlights: ['IoT Sıcaklık Logları', 'Rusya-Belarus Genişlemesi', 'Toptan Pazar Liderliği']
      },
      {
        id: '10',
        year: '2024',
        title: 'Dijital İhracat Devrimi GilaFruit 3.0',
        tag: 'İNOVASYON',
        category: 'excellence',
        description: 'Tüccarların kolayca nakliye ve lojistik ücreti hesaplayabildiği yeni nesil akıllı ihracat portalının sunumu.',
        iconType: 'book',
        highlights: ['Canlı Navlun Hesaplama', 'Uzman Paketleme Desteği', 'Şeffaf Borsa Fiyatları']
      },
      {
        id: '11',
        year: '2025',
        title: 'Gelecek Vizyonu Lazer MAF RODA',
        tag: 'YENİ UFUKLAR',
        category: 'excellence',
        description: 'Lazerli kivi segmentasyon robotları ve güneş enerjili yeşil depolarla donatılarak yeni yüzyılın tarım kompleksinin inşası.',
        iconType: 'clock',
        highlights: ['MAF RODA Lazer Robotlar', 'Depolarda Solar Enerji', 'Yeni Nesil Tarım Teknolojisi']
      }
    ]
  },
  uz: {
    heroTag: "Yillar va Meros",
    heroTitle: "Bizning Faxrli Merosimiz",
    sect2Badge: "2001-YILDA ASOS SOLINGAN",
    sect2Title: "Yashil bog'lardan jahon ulgurji bozoriga",
    para1: "2001-yilda Gilanning kivi bog'larida boshlangan kamtarona qadamlarimiz, bugungi kunda Yevroosiyo va Yaqin Sharq bo'ylab qishloq xo'jaligi eksport logistikasining peshqadamiga aylandi.",
    para2: "Sabzgustaran Gilan Fruit Co. tarkibida premium paketlash, optik saralash va sovuq zanjir nazoratini asosiy qadriyat sohasiga aylantirdik.",
    quote: "\"Tariximiz sifatga bo'lgan murosasiz sodiqligimizning hikoyasidir. Savdo mustahkam ishonch va aniq logistika ustiga qurilishi kerakligiga ishonamiz.\"",
    para3: "Bugun optik saralash va harorat nazoratidagi muzlatgichli transportlarimiz bilan yirik tarmoqlarga mahsulot yetkazib bermoqdamiz.",
    yearsBadgeValue: "23+ Yil",
    yearsBadgeText: "Agronomik va Eksport Mukammalligi",
    brandLabel: "Ro'yxatdan o'tgan brend:",
    brandValue: "Sabzgustaran Gilan Fruit",
    stat1: "Tashkil etilgan",
    stat2: "Xizmat Davlatlari",
    stat3: "Xalqaro Sertifikat",
    stat4: "Yillik Eksport hajmi",
    exploreLabel: "Asosiy tarixiy bosqichlarni kashf eting",
    exploreTitle: "Interaktiv Davrlar xaritasi",
    exploreDesc: "GilaFruit tarixiy muvaffaqiyatlari, bojxona qulayliklari va eksport sertifikatlarini ko'rish uchun davrni tanlang.",
    milestoneComplete: "Tarixiy Davr Yakunlandi",
    noMilestones: "Ushbu filtrda ma'lumotlar topilmadi.",
    ctaBadge: "Hamkorlikka Tayyormisiz?",
    ctaTitle: "GilaFruit Premium Standartlarini Biznesingizga kiriting",
    ctaDesc: "Xalqaro tarmoq do'koni yoki ulgurji meva xaridori bo'lishingizdan qat'i nazar, biz yuqori xizmat ko'rsatishga tayyormiz.",
    browseCatalog: "Mahsulotlar Katalogi",
    harvestCalendar: "Hosil Taqvimi",
    eras: [
      { id: 'all', label: 'Barcha Davrlar', years: '2001 - Hozirgi' },
      { id: 'foundation', label: 'Asos Solinishi', years: '2001 - 2010' },
      { id: 'expansion', label: 'Batafsil Eksport', years: '2011 - 2019' },
      { id: 'excellence', label: 'Liderlik va Raqamlashtirish', years: '2020 - Hozirgi' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'Hosil bergan orzular',
        tag: 'BOSHLANISHI',
        category: 'foundation',
        description: "Gilan viloyatida birinchi Hayward kivi bog'larining tashkil etilishi.",
        iconType: 'sprout',
        highlights: ["Kivi bog'lari", 'Dehqonlar Dastagi', 'Sifat Nazorati']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'Tizimlashtirish Davri',
        tag: 'RIVOJLANISH',
        category: 'foundation',
        description: 'Omborlarni modernizatsiya qilish va biznesni ikkinchi avlod mutaxassislariga topshirish.',
        iconType: 'trending',
        highlights: ['Sovuq Omborlarni Yangilash', 'Logistika standarti', 'Yangi Avlod Liderlari']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Sabz Gostaran Gilan Fruit tarkib topishi',
        tag: 'QONUNIY STATUS',
        category: 'expansion',
        description: 'Sabz Gostaran kompaniyasi hamda GilaFruit savdo belgisining rasman ro\'yxatdan o\'tishi.',
        iconType: 'globe',
        highlights: ['Rasmiylashtirish jarayoni', 'Tovar belgisini himoya qilish', 'Yangi eksport shartnomalari']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'Mexanik saralash va raqamli platformalar',
        tag: 'MODERNIZATSIYA',
        category: 'expansion',
        description: 'Eksport narxlarini onlayn ko\'rsatuvchi portalning ishga tushirilishi va Rossiya eksport yo\'nalishi.',
        iconType: 'compass',
        highlights: ['Onlayn narxlar tizimi', 'Rossiya tomon logistika yo\'li', 'Paketlar modernizatsiyasi']
      },
      {
        id: '5',
        year: '2016 - 2019',
        title: 'Ekologik barqaror zanjirlar',
        tag: 'BARQARORLIK',
        category: 'expansion',
        description: 'Yangi tomchilatib sug\'orish tizimlarining bog\'larda o\'rnatilishi va suv zahiralarini tejash.',
        iconType: 'leaf',
        highlights: ['Suvni qayta ishlash', 'Supermarket standarti', 'Dehqonlar alyansi']
      },
      {
        id: '6',
        year: '2020',
        title: 'ISO va HACCP xalqaro sertifikatlari',
        tag: 'SERTIFIKATLAR',
        category: 'excellence',
        description: 'ISO 9001, ISO 22000, HACCP va GMP sertifikatlarining tantanali ravishda qo\'lga kiritilishi.',
        iconType: 'award',
        highlights: ['ISO 22000 va HACCP talablari', 'Mehmonxona tarmoqlari yetkazuvchisi', 'Yevroosiyo tezkor bojxonasi']
      },
      {
        id: '7',
        year: '2021',
        title: 'Astarada cheklanmagan tezkor bojxona',
        tag: 'TAQDIMOT',
        category: 'excellence',
        description: 'Astarada yuklarning tezkor o\'tishini ta\'minlash maqsadida xususiy bojxona ofislarining ochilishi.',
        iconType: 'users',
        highlights: ['Tezkor bojxona xizmati', 'Katta transport portfeli', 'Xalqaro ko\'rgazmalar']
      },
      {
        id: '8',
        year: '2022',
        title: 'Multimodal yuk tashish zanjiri',
        tag: 'KASPIY LOGISTIKASI',
        category: 'excellence',
        description: 'Dengiz kemalarida muzlatgichli reefer konteynerlarni band etish orqali kivi tranziti tezlashishi.',
        iconType: 'truck',
        highlights: ['Dengiz transportlar zanjiri', 'Isitish nazorati kamerasiz', 'GPS monitoring tizimi']
      },
      {
        id: '9',
        year: '2023',
        title: 'Aqlli datchiklar va MDH logistikasi',
        tag: 'LOGISTIK KONTROL',
        category: 'excellence',
        description: 'Hamma yuk transportlarida IoT datchiklarining o\'rnatilishi va Rossiya-Belarus oqimi kengayishi.',
        iconType: 'sparkles',
        highlights: ['IoT datchik ma\'lumotlari', 'Rossiya-Belarus eksport yo\'li', 'Ulgurji savdo bozoridagi kuch']
      },
      {
        id: '10',
        year: '2024',
        title: 'Aqlli eksport portali GilaFruit 3.0',
        tag: 'RAQAMLI INOVATSIYA',
        category: 'excellence',
        description: 'Xalqaro yuklar narxini hisoblaydigan uchinchi avlod raqamli platformaning ochilishi.',
        iconType: 'book',
        highlights: ['Navlun hisoblagich onlayn', 'Mutaxassis maslahati', 'Shaffof birja narxi']
      },
      {
        id: '11',
        year: '2025',
        title: 'Lazerli saralash va robot MAF RODA',
        tag: 'KELAJAK GOYASI',
        category: 'excellence',
        description: 'Mashina ko\'zi va kivi kromatografiyasi o\'rnatilgan robotlarni ishga tushirishga harakat qilmoqdamiz.',
        iconType: 'clock',
        highlights: ['MAF RODA saralash robotlari', 'Omborlarda quyosh energiyasi', 'Kelajak agrotexnologiyasi']
      }
    ]
  },
  az: {
    heroTag: "Zaman xətti və İrs",
    heroTitle: "Qürurverici Keçmişimiz",
    sect2Badge: "2001-Cİ İLDƏ QURULUB",
    sect2Title: "Bərəkətli Gilan bağlarından dünya ticarətinə",
    para1: "2001-ci ildə Gilannın zəngin kivi bağlarında atılan ilk addımlarımız bü gün bütün Avrasiyada kənd təsərrüfatı logistikasının liderinə çevrilmişdir.",
    para2: "Sabzgustaran Gilan Fruit Co. tərkibində təmiz çeşidləmə, müasir soyuducu anbarlar və limitsiz logistikanı hədəflədik.",
    quote: "\"Tariximiz keyfiyyətə verilən dürüst dəyərin dastanıdır. Ticarətin güvən və dəqiq fəaliyyət üzərində qurulmasına inanırıq.\"",
    para3: "İndi optik idarəetmə və soyuduculu yüklərimizlə Rusiya, Belarusiya və paytaxt bazarlarına birbaşa kivi və sarmısaq ixrac edirik.",
    yearsBadgeValue: "23+ İl",
    yearsBadgeText: "Təsərrüfat və İxrac Mükəmməlliyi",
    brandLabel: "Qeydiyyatlı Marka:",
    brandValue: "Sabzgustaran Gilan Fruit Co.",
    stat1: "Qurulma Tarixi",
    stat2: "Ticarət Ölkələri",
    stat3: "Beynəlxalq Sertifikat",
    stat4: "Yıllık İxrac Həcmi",
    exploreLabel: "Əsas mərhələləri kəşf edin",
    exploreTitle: "İnteraktiv İllər Xronologiyası",
    exploreDesc: "GilaFruit-in ixrac yolları, gömrük asanlıqları və beynəlxalq standartlarını yoxlamaq üçün illəri seçin.",
    milestoneComplete: "Mərhələ Tamamlandı",
    noMilestones: "Bu filtrdə məlumat tapılmadı.",
    ctaBadge: "Biznes tərəfdaşlığına hazırsınız?",
    ctaTitle: "GilaFruit Premium Standartlarını şirkətinizə gətirin",
    ctaDesc: "İstər beynəlxalq supermarket olun, istərsə də topdan meyvə alıcısı, limitsiz logistikamız xidmətinizdədir.",
    browseCatalog: "Məhsul Kataloqu",
    harvestCalendar: "Məhsul Təqvimi",
    eras: [
      { id: 'all', label: 'Bütün İllər', years: '2001 - İndi' },
      { id: 'foundation', label: 'Başlanğıc İlləri', years: '2001 - 2010' },
      { id: 'expansion', label: 'Bölgələrin Fəthi', years: '2011 - 2019' },
      { id: 'excellence', label: 'Rəqəmsal İnkişaf', years: '2020 - İndi' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'Meyvə verən arzular',
        tag: 'İLK ADDIMLAR',
        category: 'foundation',
        description: 'Gilan bağlarında Hayward növ kivi yetişdirilməsi və daxili satışın təşkili.',
        iconType: 'sprout',
        highlights: ['Gilan Kivi Bağları', 'Yerli fermer dəstəyi', 'Dağıtım idarəolunması']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'Sistemləşmə və Proseslər',
        tag: 'MODERNİZASİYA',
        category: 'foundation',
        description: 'Müasir anbarların və soyuducu sistemlərinin qurulması. Biznesin ikinci nəsl mütəxəssislərə keçməsi.',
        iconType: 'trending',
        highlights: ['Soyuq Anbar Sistemləri', 'Logistika standartları', 'Yangi Avlod İdarəçiliyi']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Sabz Gostaran Gilan Fruit Co-nun yaradılması',
        tag: 'RƏSMİ STATUS',
        category: 'expansion',
        description: 'Şirkətin və GilaFruit ixrac markasının rəsmi qeydiyyatdan keçməsi. Qafqaza ilk kivi ixracı.',
        iconType: 'globe',
        highlights: ['Rəsmiləşmə mərhələsi', 'Əmtəə nişanının qorunması', 'Yeni xarici kontraktlar']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'Rəqəmsal qiymət bazası və mexaniki idarəetmə',
        tag: 'İNOVASİYA',
        category: 'expansion',
        description: 'İnternet üzərindən qiymətləri yeniləyən platformanın qurulması və Xəzər dənizi terminalı vasitəsilə ixrac.',
        iconType: 'compass',
        highlights: ['Onlayn qiymət bazası', 'Rusiya ixrac yolları', 'Bağlama üsullarının yenilənməsi']
      },
      {
        id: '5',
        year: '2016 - 2019',
        title: 'Davamlı Təsərrüfat Zəncirləri',
        tag: 'DAVAMLILIQ',
        category: 'expansion',
        description: 'Fermerlərlə damcı suvarma sistemlərinin yaradılması və su ehtiyatlarının qorunması.',
        iconType: 'leaf',
        highlights: ['Suyun təmizlənməsi anbarı', 'Supermarket səviyyəsində', 'Fermer Hərəkatı']
      },
      {
        id: '6',
        year: '2020',
        title: 'Beynəlxalq ISO və HACCP standartları',
        tag: 'IXRAC SERTİFİKATLARI',
        category: 'excellence',
        description: 'Şirkət tərəfindən ISO 9001, ISO 22000, HACCP, GMP sertifikatlarının müvəffəqiyyətlə alınması.',
        iconType: 'award',
        highlights: ['ISO 22000 və HACCP standartı', 'Böyük Otel müqavilələri', 'Sürətli Avrasiya gömrüyü']
      },
      {
        id: '7',
        year: '2021',
        title: 'Astarada gömrük ofisinin açılması',
        tag: 'GÖMRÜK SÜRƏTİ',
        category: 'excellence',
        description: 'Astarada ixrac yüklərinin sərhəddə gözləməməsi üçün özəl gömrük xidməti ofisimizin yaradılması.',
        iconType: 'users',
        highlights: ['Astara gömrük həlləri', 'İri karvanların idarəolunması', 'Kənd təsərrüfatı görüşləri']
      },
      {
        id: '8',
        year: '2022',
        title: 'Multimodal nəqliyyat logistikası',
        tag: 'DƏNİZ IXRACI',
        category: 'excellence',
        description: 'Gəmilərdə reefer donduruculu konteyner razılaşmaları ilə kivi ixracatının sürətlənməsi.',
        iconType: 'truck',
        highlights: ['Xəzər dəniz logistikası', 'Soyuducu konteyner ticarəti', 'GPS harorat izlənilməsi']
      },
      {
        id: '9',
        year: '2023',
        title: 'Ağıllı sensorlar və rəqəmsal ixrac zənciri',
        tag: 'ISTİLİK KONTROLU',
        category: 'excellence',
        description: 'IoT sensorlar sisteminin kivi va sarımsaq konteynerlərinə yerləşdirilməsi ilə logistika idarə edilməsi.',
        iconType: 'sparkles',
        highlights: ['IoT temperatur loqqerləri', 'Rusiya-Belarus ixracat hədəfi', 'Topdan meyvə bazarı lideri']
      },
      {
        id: '10',
        year: '2024',
        title: 'IXRAC PORTALI GilaFruit 3.0',
        tag: 'RƏGƏMSAL MODEL',
        category: 'excellence',
        description: 'Ticarətçilərin anlıq nəqliyyat qiymətlərini hesablamasını təmin edən raqəmsal platformanın yaradılması.',
        iconType: 'book',
        highlights: ['Canlı nəqliyyat kalkulyatoru', 'Texniki ambalaj xidməti', 'Açıq birja qiyməti']
      },
      {
        id: '11',
        year: '2025',
        title: 'Lazerli kivi segmentasiyası və robot mərkəzi',
        tag: 'YENİ SURPRİZLƏR',
        category: 'excellence',
        description: 'MAF RODA lazer kivi çeşidləyici robotlar və anbarlarda yaşıl daxili enerji mənbələrindən istifadə hədəfi.',
        iconType: 'clock',
        highlights: ['MAF RODA Lazer Robot sistemi', 'Anbarda yaşıl daxili günəş enerjisi', 'Yeni əsr aqrotexnologiyası']
      }
    ]
  },
  uk: {
    heroTag: "Хронологія та Спадщина",
    heroTitle: "Наша Горда Історія",
    sect2Badge: "ЗАСНОВАНО В 2001",
    sect2Title: "Від екологічних садів до світового ринку",
    para1: "Починаючи з перших садів ківі у провінції Гілян у 2001 році, бренд GilaFruit виріс у потужного лідера сільськогосподарського експорту.",
    para2: "Як офіційне торгове крило компанії Sabzgustaran Gilan Fruit, ми гарантуємо преміальне сортування, сучасне зберігання та суворий температурний контроль.",
    quote: "\"Наша історія — це хроніка безкомпромісного фокусу на преміальній якості. Ми віримо, що торгівля повинна будуватися на довірі та точності всіх процесів.\"",
    para3: "Сьогодні ми поставляємо свіжі ківі, часник та овочі безпосередньо в найбільші торговельні мережі Європи, Росії та країн Перської затоки.",
    yearsBadgeValue: "23+ Роки",
    yearsBadgeText: "Видатного агрономічного досвіду",
    brandLabel: "Зареєстрований бренд:",
    brandValue: "Sabzgustaran Gilan Fruit Co.",
    stat1: "Засновано у",
    stat2: "Кількість країн",
    stat3: "Преміум Сертифікати",
    stat4: "Щорічний експорт",
    exploreLabel: "Ключові історичні досягнення",
    exploreTitle: "Інтерактивна Хронологія розвитку",
    exploreDesc: "Оберіть історичний період, щоб більше дізнатися про технології сортування та митне оформлення GilaFruit.",
    milestoneComplete: "Крок досягнуто",
    noMilestones: "У цьому фільтрі нічого не знайдено.",
    ctaBadge: "Готові до Гуртової Співпраці?",
    ctaTitle: "Впровадьте преміум-стандарти GilaFruit у Ваш агробізнес",
    ctaDesc: "Незалежно від того, великий Ви ритейлер чи гуртовий дистриб'ютор, ми забезпечимо стабільність холодової логістики.",
    browseCatalog: "Каталог Продукції",
    harvestCalendar: "Календар Збору Врожаю",
    eras: [
      { id: 'all', label: 'Всі Події', years: '2001 - Тепер' },
      { id: 'foundation', label: 'Створення бренду', years: '2001 - 2010' },
      { id: 'expansion', label: 'Регіональне Розширення', years: '2011 - 2019' },
      { id: 'excellence', label: 'Сучасна Цифрова Ера', years: '2020 - Тепер' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'Мрії дають плоди',
        tag: 'ПОЧАТОК ІСТОРІЇ',
        category: 'foundation',
        description: 'Висадка перших плантацій ківі Hayward у Гіляні.',
        iconType: 'sprout',
        highlights: ['Сади ківі в Гіляні', 'Співпраця з фермерами', 'Локальна дистрибуція']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'Ера Управління за Золотим Стандартом',
        tag: 'СИСТЕМАТИЗАЦІЯ',
        category: 'foundation',
        description: 'Модернізація складів зберігання та передача операційної діяльності молодому поколінню спеціалістів.',
        iconType: 'trending',
        highlights: ['Оновлення холодильників', 'Холодові ланцюги', 'Друге покоління менеджерів']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Реєстрація компанії Sabz Gostaran Gila Fruit',
        tag: 'ОФІЦІЙНИЙ СТАТУС',
        category: 'expansion',
        description: 'Фірмове оформлення торгової марки GilaFruit та початок регулярного експорту у Туреччину, Ірак, Пакистан.',
        iconType: 'globe',
        highlights: ['Офіційна реєстрація', 'Захист марки', 'Перші закордонні угоди']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'Перехід на цифрову калібровку ківі',
        tag: 'ТЕХНОЛОГІЇ СОРТУВАННЯ',
        category: 'expansion',
        description: 'Відкриття ліній автоматичного калібрування ківі та надійна доставка через Каспійське море.',
        iconType: 'compass',
        highlights: ['Онлайн ціни для партнерів', 'Морська логістика в Росію', 'Переробка упаковки']
      },
      {
        id: '5',
        year: '2016 - 2019',
        title: 'Стійкість та екологічність ланцюжків',
        tag: 'ЕКО-СТАНДАРТИ',
        category: 'expansion',
        description: 'Економне крапельне зрошення садів та системи очищення побутової води в пакувальних залах.',
        iconType: 'leaf',
        highlights: ['Фільтрація та рециркуляція', 'Супермаркетний стандарт тари', 'Союз з фермерами']
      },
      {
        id: '6',
        year: '2020',
        title: 'Міжнародне підтвердження якості ISO та HACCP',
        tag: 'СЕРТИФIКАТИ КЛАСУ ЕЛIТ',
        category: 'excellence',
        description: 'Сертифікація за стандартами ISO 9001, ISO 22000, HACCP, GMP та залучення провідних міжнародних супермаркетів.',
        iconType: 'award',
        highlights: ['Відповідність ISO 22000 & HACCP', 'Робота з ритейл гігантами', 'Митна оптимізація']
      },
      {
        id: '7',
        year: '2021',
        title: 'Митна підтримка в Астарі',
        tag: 'ШВИДКИЙ ТРАНЗИТ',
        category: 'excellence',
        description: 'Створення власних брокерських структур на кордоні для запобігання затримкам рефрижераторів.',
        iconType: 'users',
        highlights: ['Брокери GilaFruit на кордоні', 'Управління автоколонами', 'Експортні конференції']
      },
      {
        id: '8',
        year: '2022',
        title: 'Мультимодальні морські маршрути',
        tag: 'МОРСЬКЕ ВАНТАЖОПОТІК',
        category: 'excellence',
        description: 'Фрахтування суден з морозильними камерами надійного температурного класу з GPS моніторами.',
        iconType: 'truck',
        highlights: ['Портовий сервіс хзавжди за розкладом', 'Мультимодальні контейнери', 'Постійний моніторинг тепла']
      },
      {
        id: '9',
        year: '2023',
        title: 'Інтернет речей IoT та температурні логгери',
        tag: 'КОНТРОЛЬ ЛОГІСТИКИ',
        category: 'excellence',
        description: 'Реєстратори IoT генерують логи у реальному часі для ківі на всьому шляху до Минська та Москви.',
        iconType: 'sparkles',
        highlights: ['Автономні трекери IoT', 'Розширення на Мінськ та ОАЕ', 'Преміум лідер ринку FMCG ківі']
      },
      {
        id: '10',
        year: '2024',
        title: 'Платформа логістики GilaFruit 3.0',
        tag: 'ИНОВАЦIЇ',
        category: 'excellence',
        description: 'Презентація оновленої онлайн платформи з розрахунками мита та вартості доставки.',
        iconType: 'book',
        highlights: ['Митний калькулятор онлайн', 'Технічна упаковка без затримок', 'Біржові новини опту']
      },
      {
        id: '11',
        year: '2025',
        title: 'Впровадження роботизованих комплексів MAF RODA',
        tag: 'КРОК У МАЙБУТНЄ',
        category: 'excellence',
        description: 'Сортувальні платформи MAF RODA із лазерним скануванням та сонячні батареї на складах компанії.',
        iconType: 'clock',
        highlights: ['Роботи сортування MAF RODA', 'Сонячна енергія пакувальних залів', 'Сучасні агрономічні розробки']
      }
    ]
  },
  hi: {
    heroTag: "कालानुक्रमिक विरासत",
    heroTitle: "हमारी गर्वशाली धरोहर",
    sect2Badge: "स्थापना वर्ष 2001",
    sect2Title: "प्राकृतिक बागानों से वैश्विक थोक बाजार तक",
    para1: "वर्ष 2001 में गिलान के हरे-भरे कीवी बागानों से शुरू हुई कंपनी गिलाफ्रूट आज यूरेशियन और मिडिल ईस्ट देशों में कृषि निर्यात की मुख्य शक्ति बन गई है।",
    para2: "Sabzgustaran Gilan Fruit Co. के हिस्से के रूप में, हमने प्रीमियम पैकिंग, लेजर सॉर्टिंग और कोल्ड चेन नियंत्रण को हमेशा प्राथमिक कार्य माना है।",
    quote: "\"हमारा इतिहास समझौते के बिना केवल सर्वोत्तम गुणवत्ता पर केंद्रित रहा है। हमारा विश्वास है कि वैश्विक कृषि व्यापार पूर्ण पारदर्शिता और सटीक नियंत्रण पर आधारित होना चाहिए।\"",
    para3: "आज हमारे ऑप्टिकल लेजर सॉर्टिंग केंद्र और स्वचालित शीतलक क्रेन अंतर्राष्ट्रीय होटलों, हाई-पार्क और वितरकों को उत्तम वस्तुएं सीधे प्रदान कर रहे हैं।",
    yearsBadgeValue: "23+ वर्ष",
    yearsBadgeText: "कृषि और थोक निर्यात उत्कृष्टता",
    brandLabel: "पंजीकृत ब्रांड नाम:",
    brandValue: "Sabzgustaran Gilan Fruit",
    stat1: "स्थापना",
    stat2: "सेवा प्रदाता देश",
    stat3: "वैश्विक प्रमाणपत्र",
    stat4: "वार्षिक निर्यात क्षमता",
    exploreLabel: "महत्वपूर्ण उपलब्धियों को देखें",
    exploreTitle: "इंटरैक्टिव युग की समयरेखा",
    exploreDesc: "गिलाफ्रूट की इतिहास की सफलताओं, प्रमाणपत्रों और परिवहन सुविधाओं का विवरण देखने के लिए एक युग का चयन करें।",
    milestoneComplete: "मील का पत्थर पूरा हुआ",
    noMilestones: "इस श्रेणी में विवरण प्राप्त नहीं हुआ।",
    ctaBadge: "क्या आप व्यापार सहयोग के लिए तैयार हैं?",
    ctaTitle: "गिलाफ्रूट के प्रीमियम गुणवत्ता मानकों को अपने व्यवसाय में जोड़ें",
    ctaDesc: "चाहे आप अंतर्राष्ट्रीय सुपरमार्केट हों या थोक सब्जी व फल आयातक, हम आपको उत्तम श्रेणी की वस्तुएं प्रदान करने के लिए तैयार हैं।",
    browseCatalog: "उत्पाद सूची पत्र (कैटलॉग)",
    harvestCalendar: "फसल कैलेंडर",
    eras: [
      { id: 'all', label: 'सभी ऐतिहासिक काल', years: '2001 - वर्तमान' },
      { id: 'foundation', label: 'स्थापना और संगठन', years: '2001 - 2010' },
      { id: 'expansion', label: 'वैश्विक फैलाव', years: '2011 - 2019' },
      { id: 'excellence', label: 'डिजिटल और आधुनिक नेतृत्व', years: '2020 - वर्तमान' }
    ],
    timelineItems: [
      {
        id: '1',
        year: '2001 - 2005',
        title: 'सपने जो फल बनकर उभरे',
        tag: 'शुरुआती कहानी',
        category: 'foundation',
        description: 'गिलान में पहले हेवर्ड कीवी बागानों का रोपण और स्थानीय किसानों के साथ मिलकर घरेलू बाजार वितरण शुरू करना।',
        iconType: 'sprout',
        highlights: ['हरे-भरे कीवी बागान', 'स्थानीय किसानों को सशक्त बनाना', 'वितरण प्रणाली की शुरुआत']
      },
      {
        id: '2',
        year: '2005 - 2010',
        title: 'सिस्टम का आधुनिकीकरण',
        tag: 'प्रबंधन प्रणाली',
        category: 'foundation',
        description: 'कोल्ड स्टोरेज कोल्ड रूम्स का सुधार करना और युवा विशेषज्ञ प्रबंधन को कार्य सौंपना।',
        iconType: 'trending',
        highlights: ['सफाई व कोठरी सुधार', 'परिवहन मानकीकरण', 'नए गतिशील नेताओं का प्रवेश']
      },
      {
        id: '3',
        year: '2011 - 2013',
        title: 'Sabz Gostaran Gilan Fruit की आधिकारिक स्थापना',
        tag: 'संवैधानिक पंजीकरण',
        category: 'expansion',
        description: 'GilaFruit निर्यात ब्रांड का पंजीकरण करना और काकेशस देशों, इराक तथा पाकिस्तान को कीवी निर्यात शुरू करना।',
        iconType: 'globe',
        highlights: ['कंपनी का आधिकारिक पंजीकरण', 'ट्रेडमार्क संरक्षण', 'प्रथम वैश्विक अनुबंध']
      },
      {
        id: '4',
        year: '2014 - 2015',
        title: 'मैकेनिकल सॉर्टिंग और डिजिटल प्राइस शीट',
        tag: 'आधुनिक बदलाव',
        category: 'expansion',
        description: 'दैनिक बाजार भाव दर्शाने वाले ऑनलाइन पोर्टल की शुरुआत और कैस्पियन सागर के रास्ते रूस को शिपमेंट।',
        iconType: 'compass',
        highlights: ['ऑनलाइन भाव सूची पत्र', 'रूस को निर्यात मार्ग', 'पैकेजिंग डिजाइन में सुधार']
      },
      {
        id: '5',
        year: '2016 - 2019',
        title: 'जल संरक्षण व सतत कृषि',
        tag: 'टिकाऊ विकास',
        category: 'expansion',
        description: 'बागानों में पानी बचाने वाले आधुनिक ड्रिप इरिगेशन पाइप लगाना और पानी के रिसाइकिल प्लांट लगाना।',
        iconType: 'leaf',
        highlights: ['जल रीसाइक्लिंग प्रणाली', 'सुपरमार्केट स्तर की पैकिंग', 'किसान सहयोग联盟']
      },
      {
        id: '6',
        year: '2020',
        title: 'अंतर्राष्ट्रीय ISO व HACCP प्रमाणपत्रों की प्राप्ति',
        tag: 'वैश्विक प्रमाणपत्र प्राप्ति',
        category: 'excellence',
        description: 'ISO 9001, ISO 22000, HACCP और GMP के उत्तम प्रमाणपत्र प्राप्त करना। होटलों के साथ बड़े थोक अनुबंध।',
        iconType: 'award',
        highlights: ['ISO 22000 & HACCP मानक', 'प्रमुख होटल अनुबंध', 'यूरेशियन सीमा सुगमता']
      },
      {
        id: '7',
        year: '2021',
        title: 'कस्टम्स सुगमता व सीमावर्ती कार्यालय',
        tag: 'तेज निष्पादन सुविधा',
        category: 'excellence',
        description: 'सीमा पर वाहनों की देरी को रोकने के लिए निजी कस्टम्स ब्रोकरेज कार्यालय की स्थापना।',
        iconType: 'users',
        highlights: ['कस्टम्स आसान समाधान', 'बड़ी वाहन श्रेणियों का प्रबंधन', 'कृषि निर्यात संगोष्ठी व्यापार']
      },
      {
        id: '8',
        year: '2022',
        title: 'मल्टीमोडल समुद्री फ्रिज क्रेन कूरियर',
        tag: 'समुद्री फ्रिज रसद',
        category: 'excellence',
        description: 'समुद्री जहाजों में उत्तम तापमान वाले अत्याधुनिक रेफरी क्रेन बुक करने की व्यवस्था करना।',
        iconType: 'truck',
        highlights: ['कैस्पियन समुद्री मार्ग', 'तापमान नियंत्रित क्रेन प्रणाली', 'निरंतर GPS तापमान लॉग्स']
      },
      {
        id: '9',
        year: '2023',
        title: 'स्वचालित तापमान ट्रैकर और डिजिटल रसद नेतृत्व',
        tag: 'तापमान की निगरानी',
        category: 'excellence',
        description: 'सभी कंटेनरों में IoT तापमान सेंसर लगाना और बेलारूस, रूस व खाड़ी देशों में माल की आपूर्ति बढ़ाना।',
        iconType: 'sparkles',
        highlights: ['कंटेनर तापमान लॉग्स', 'बेलारूस विकास लक्ष्य', 'थोक बाजार में उच्च स्तर']
      },
      {
        id: '10',
        year: '2024',
        title: 'स्मार्ट ट्रेडिंग रसद प्रणाली GilaFruit 3.0',
        tag: 'डिजिटल नवाचार विकास',
        category: 'excellence',
        description: 'थोक व्यापारियों के लिए इंटरनेट पर सीधे शिपिंग किराए की जानकारी देने वाला तीसरा आधुनिक डिजिटल पोर्टल।',
        iconType: 'book',
        highlights: ['ऑनलाइन किराया गणना प्रणाली', 'विशेषज्ञ पैकेजिंग सहयोग', 'पारदर्शी बाजार मूल्य पत्र']
      },
      {
        id: '11',
        year: '2025',
        title: 'लेजर MAF RODA रोबोटिक सॉर्टिंग मशीनें',
        tag: 'आगामी भविष्य योजना',
        category: 'excellence',
        description: 'बागानों में स्वचालित रोबोटिक सॉर्टिंग मशीन लगाने का लक्ष्य और पैकेजिंग स्थलों पर सौर ऊर्जा उत्पादन की शुरुआत।',
        iconType: 'clock',
        highlights: ['MAF RODA लेजर रोबोट', 'सौर ऊर्जा भंडारण', 'आधुनिक तकनीक विकास']
      }
    ]
  }
};

export default function HistoryScreen() {
  const [activeEra, setActiveEra] = useState<string>('all');
  const { language, t } = useLanguage();
  const ln = TEXTS[language] || TEXTS.en;

  const getIcon = (type: string) => {
    switch (type) {
      case 'sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'trending': return <TrendingUp className="w-5 h-5 text-amber-500" />;
      case 'globe': return <Globe className="w-5 h-5 text-blue-600" />;
      case 'compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'leaf': return <Leaf className="w-5 h-5 text-emerald-650" />;
      case 'award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'users': return <Users className="w-5 h-5 text-cyan-600" />;
      case 'truck': return <Truck className="w-5 h-5 text-indigo-600" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'book': return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'clock': return <Clock className="w-5 h-5 text-amber-500 animate-pulse" />;
      default: return <Clock className="w-5 h-5 text-emerald-600" />;
    }
  };

  const stats = [
    { label: ln.stat1, value: "2001", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { label: ln.stat2, value: "15+", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { label: ln.stat3, value: "10+", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { label: ln.stat4, value: "85K+ Tons", color: "text-indigo-500 bg-indigo-501/10 border-indigo-500/20" }
  ];

  const eras = ln.eras;
  const filteredItems = ln.timelineItems.filter(
    item => activeEra === 'all' || item.category === activeEra
  );

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 font-sans pb-24" id="history-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER - Offset Padding included for Fixed Header */}
      <div className="bg-[#f0f4f1] border-b border-emerald-900/10 pt-[88px] sm:pt-[104px] md:pt-[148px] pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3 bg-emerald-600 rounded-full" />
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#0c4722]">
                  {ln.heroTag}
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3.5xl lg:text-4xl font-black text-emerald-950 tracking-tight leading-tight">
                {ln.heroTitle}
              </h1>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white/70 backdrop-blur px-3.5 py-1.5 rounded-full border border-slate-200">
              <a href="#/" className="hover:text-emerald-800 transition-colors">{t('common.home') || 'Home'}</a>
              <span className="text-slate-300">/</span>
              <a href="#/about" className="hover:text-emerald-800 transition-colors">{t('common.aboutUs') || 'About Us'}</a>
              <span className="text-slate-300">/</span>
              <span className="font-semibold text-emerald-900">{t('common.history') || 'Our History'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE STORY SUMMARY & INTERACTIVE CAROUSEL COUNTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Paragraph Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-black tracking-widest rounded-full border border-emerald-100">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                {ln.sect2Badge}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {ln.sect2Title}
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              <p>{ln.para1}</p>
              <p>{ln.para2}</p>
              <div className="border-l-4 border-emerald-600 pl-4 py-2 bg-emerald-50/50 rounded-r-xl italic font-serif text-slate-700">
                {ln.quote}
              </div>
              <p>{ln.para3}</p>
            </div>
          </div>

          {/* Portrait Kiwi card frame with overlapping info badge */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white p-3.5 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
                
                {/* Main kiwi photo */}
                <img 
                  src="/src/assets/images/gilafruit_about_kiwi_grower_1781077370132.png" 
                  alt="Organic Kiwi Grower GilaFruit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Overlapping small circular GilaFruit seal badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full shadow-lg p-1.5 border border-slate-100 flex items-center justify-center animate-bounce">
                  <div className="w-16 h-16 rounded-full border-2 border-emerald-600/30 flex flex-col items-center justify-center bg-[#01251c] text-white p-1 text-[7px] text-center font-bold">
                    <span className="text-amber-400 text-xs">★</span>
                    GilaFruit
                    <span className="text-[5px] text-slate-300 font-normal leading-none pt-0.5">EST 2001</span>
                  </div>
                </div>

                {/* Low card banner with Green badge box */}
                <div className="absolute bottom-4 left-4 right-4 bg-emerald-900/90 backdrop-blur-md text-white p-4 rounded-xl shadow-lg border border-emerald-500/20 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-black text-xl tracking-none text-amber-400 leading-none">
                        {ln.yearsBadgeValue}
                      </h4>
                      <p className="text-[11px] font-semibold text-emerald-100 mt-1 leading-none">
                        {ln.yearsBadgeText}
                      </p>
                    </div>
                    <span className="w-[1px] h-8 bg-emerald-700 self-center mx-1" />
                    <div className="flex-1 pl-4">
                      <p className="text-[10px] font-black uppercase text-amber-300 tracking-wider">
                        {ln.brandLabel}
                      </p>
                      <p className="text-[10px] text-emerald-100 leading-tight">
                        {ln.brandValue}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Horizontal Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-200">
          {stats.map((stat, sIdx) => (
            <div 
              key={sIdx} 
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm text-center space-y-1.5 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                {stat.label}
              </p>
              <p className="text-xl sm:text-2xl font-black text-emerald-950">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 3. INTERACTIVE CHRONICLE ERA CONTROLLER (Middle segment) */}
      <div className="bg-[#f0f4f1]/60 border-y border-slate-200 mt-20 py-10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="space-y-2">
            <span className="text-emerald-700 text-xs font-black uppercase tracking-widest block">
              {ln.exploreLabel}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">
              {ln.exploreTitle}
            </h3>
            <p className="text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
              {ln.exploreDesc}
            </p>
          </div>

          {/* Era Filter Select Buttons - Styled beautifully */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-emerald-950/5 rounded-2xl max-w-3xl mx-auto">
            {eras.map((era) => {
              const isSelected = activeEra === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setActiveEra(era.id)}
                  className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl transition-all text-xs font-bold leading-normal focus:outline-none ${
                    isSelected
                      ? 'bg-emerald-900 text-white shadow-md'
                      : 'bg-white hover:bg-slate-50 text-slate-700 shadow-sm'
                  }`}
                >
                  <span className="block">{era.label}</span>
                  <span className={`text-[9px] font-normal tracking-wide block mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {era.years}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. CHIC MASTER TIMELINE STREAM */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        
        {/* Centered vertical line */}
        <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-200 via-amber-250 to-emerald-200 transform -translate-x-1/2 z-0" />

        {/* Timeline items list */}
        <div className="space-y-12 relative z-10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-slate-400 text-xs font-mono">{ln.noMilestones}</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } relative`}
                >
                  
                  {/* Timeline Node Icon Pin */}
                  <div className="absolute left-[30px] lg:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white border-2 border-emerald-600 shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer">
                      {getIcon(item.iconType)}
                    </div>
                  </div>

                  {/* Left spacing or Card block */}
                  <div className={`w-full lg:w-1/2 pl-14 lg:pl-0 ${isEven ? 'lg:pr-10 text-left' : 'lg:pl-10 text-left'}`}>
                    
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                      
                      {/* Interactive top colored tab strip */}
                      <div className="h-1.5 w-full absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-emerald-800 to-emerald-600" />
                      
                      {/* Year Indicator & Tag */}
                      <div className="flex items-center justify-between gap-2 pt-2 pb-3 border-b border-slate-100">
                        <span className="text-xs font-black uppercase tracking-widest text-[#1a8a42] font-mono">
                          {item.year}
                        </span>
                        <span className="text-[9px] font-black uppercase bg-amber-500/10 text-amber-800 tracking-wider px-2 py-0.5 rounded border border-amber-500/20">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-display text-base sm:text-lg font-black text-emerald-950 tracking-tight mt-3 mb-2">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                        {item.highlights.map((high, hIdx) => (
                          <span 
                            key={hIdx} 
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200 p-1.5 rounded-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            {high}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Date text column on opposite side on desktop */}
                  <div className="hidden lg:flex lg:w-1/2 items-center justify-start py-6 px-10">
                    <div className={`space-y-1 ${isEven ? 'text-left pl-6' : 'text-right pr-6 w-full'}`}>
                      <span className="font-display font-black text-emerald-950 text-sm tracking-tight block">
                        {ln.milestoneComplete}
                      </span>
                      <p className="text-slate-400 text-xs font-mono uppercase">
                        Era: {item.category}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

      {/* 5. GORGEOUS PREMIUM FOOTER Call To Action */}
      <div className="max-w-5xl mx-auto px-4 mt-24">
        <div className="relative bg-gradient-to-br from-[#01251d] via-[#011a14] to-[#023326] text-white p-8 sm:p-12 rounded-3xl shadow-xl overflow-hidden text-center">
          
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest block">
              {ln.ctaBadge}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              {ln.ctaTitle}
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              {ln.ctaDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="#/products" 
                className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5"
              >
                {ln.browseCatalog}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#/calendar" 
                className="px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-700 hover:border-amber-400 text-white border border-emerald-700 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5"
              >
                {ln.harvestCalendar}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
