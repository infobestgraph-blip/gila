import { useState, useMemo } from 'react';
import { 
  Calendar, Info, Search, Apple, Sprout, BookOpen, 
  Layers, Warehouse, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PRODUCT_NAMES: Record<string, Record<string, string>> = {
  en: {
    "Kiwi": "Kiwi (Hayward)", "Iceberg Lettuce": "Iceberg Lettuce", "Bell Pepper": "Bell Pepper", "Tangerine": "Tangerine", "Orange": "Orange (Thomson)",
    "Romaine Lettuce": "Romaine Lettuce", "Celery": "Celery", "Broccoli": "Broccoli", "Grapes": "Grapes (Seedless)", "Fresh Dill": "Fresh Dill",
    "Fresh Parsley": "Fresh Parsley", "Watermelon": "Watermelon", "Tomato": "Tomato Greenhouse", "Sweet Corn": "Sweet Corn", "Fresh Garlic": "Fresh Garlic",
    "Dried Garlic": "Dried Garlic", "Nectarine": "Nectarine", "Apple": "Apple (Red/Yellow)", "Cherry": "Cherry Export", "Onion": "Onion",
    "Eggplant": "Eggplant", "Potato": "Potato", "Cabbage": "Cabbage (Red/White)", "Cucumber": "Cucumber Greenhouse", "Cauliflower": "Cauliflower"
  },
  fa: {
    "Kiwi": "کیوی مِیود صادراتی", "Iceberg Lettuce": "کاهو آیس‌برگ گلخانه‌ای", "Bell Pepper": "فلفل دلمه‌ای رنگی", "Tangerine": "نارنگی بندری و شمال", "Orange": "پرتقال تامسون درجه‌یک",
    "Romaine Lettuce": "کاهو رسمی (رومين)", "Celery": "کرفس شسته شده صادراتی", "Broccoli": "کلم بروکلی ممتاز", "Grapes": "انگور بی‌دانه کلوش و عسکری", "Fresh Dill": "شوید مکانیزه تازه",
    "Fresh Parsley": "جعفری معطر تازه", "Watermelon": "هندوانه صادراتی گرد و بیضی", "Tomato": "گوجه‌فرنگی نارس گلخانه‌ای", "Sweet Corn": "ذرت شیرین شیرین", "Fresh Garlic": "سیر سبز صادراتی",
    "Dried Garlic": "سیر سفید خشک ممتاز", "Nectarine": "شلیل مغان", "Apple": "سیب سرخ دماوند و سمیرم", "Cherry": "گیلاس تکدانه مشهد", "Onion": "پیاز سفید و زرد صادراتی",
    "Eggplant": "بادمجان دلمه‌ای و قلمی", "Potato": "سیب‌زمینی جیرفت و اردبیل", "Cabbage": "کلم قالب‌خورده سرخ و سفید", "Cucumber": "خیار رسمی گلخانه‌ای", "Cauliflower": "گل کلم سفید"
  },
  ru: {
    "Kiwi": "Киви Hayward", "Iceberg Lettuce": "Салат Айсберг", "Bell Pepper": "Болгарский перец", "Tangerine": "Иранский мандарин", "Orange": "Апельсин Томсон",
    "Romaine Lettuce": "Салат Романо", "Celery": "Сельдерей экспортный", "Broccoli": "Брокколи премиум", "Grapes": "Иранский виноград", "Fresh Dill": "Свежий укроп",
    "Fresh Parsley": "Свежая петрушка", "Watermelon": "Экспортный арбуз", "Tomato": "Тепличные томаты", "Sweet Corn": "Сладкая кукуруза", "Fresh Garlic": "Свежий зеленый чеснок",
    "Dried Garlic": "Белый сушеный чеснок", "Nectarine": "Нектарин крупный", "Apple": "Красное/Желтое яблоко", "Cherry": "Крупная черешня", "Onion": "Репчатый лук",
    "Eggplant": "Экспортный баклажан", "Potato": "Картофель отборный", "Cabbage": "Капуста красно-белая", "Cucumber": "Огурец тепличный", "Cauliflower": "Цветная капуста"
  },
  ar: {
    "Kiwi": "كيوي هايفارد", "Iceberg Lettuce": "خس أيسبرغ فاخر", "Bell Pepper": "فلفل حلو ملون", "Tangerine": "يوسفي بلدي", "Orange": "برتقال تامسون ممتاز",
    "Romaine Lettuce": "خس روماني ممتاز", "Celery": "كرفس مغسول", "Broccoli": "بروكلي طازج", "Grapes": "عنب التصدير", "Fresh Dill": "شبت طازج مرشوش",
    "Fresh Parsley": "بقدونس طازج ورقة", "Watermelon": "بطيخ التصدير الأحمر", "Tomato": "طماطم البيوت المحمية", "Sweet Corn": "ذرة حلوة ممتازة", "Fresh Garlic": "ثوم أخضر بلدي",
    "Dried Garlic": "ثوم أبيض مجفف فاخر", "Nectarine": "نكتارين ممتاز", "Apple": "تفاح أحمر وأصفر ديموند", "Cherry": "كرز تصدير فاخر", "Onion": "بصل تصدير أبيض وأحمر",
    "Eggplant": "باذنجان تصدير", "Potato": "بطاطس عالية النشا", "Cabbage": "ملفوف للتصدير أحمر وأخضر", "Cucumber": "خيار البيوت الزجاجية", "Cauliflower": "قرنبيط أبيض فاخر"
  },
  tr: {
    "Kiwi": "Kivi (Hayward)", "Iceberg Lettuce": "Aysberg Marul", "Bell Pepper": "Renk Renk Dolmalık Biber", "Tangerine": "Mandalina", "Orange": "Portakal (Thomson)",
    "Romaine Lettuce": "Romen Marulu", "Celery": "Seçme Kereviz", "Broccoli": "Premium Brokoli", "Grapes": "Çekirdeksiz Üzüm", "Fresh Dill": "Taze Dereotu",
    "Fresh Parsley": "Taze Maydanoz", "Watermelon": "İhracatlık Karpuz", "Tomato": "Sera Domatesi", "Sweet Corn": "Tombul Tatlı Mısır", "Fresh Garlic": "Taze Yeşil Sarımsak",
    "Dried Garlic": "Kuru Beyaz Sarımsak", "Nectarine": "Kırmızı Nektarin", "Apple": "Kırmızı ve Sarı Elma", "Cherry": "İri Kiraz", "Onion": "Kuru Soğan",
    "Eggplant": "İhracatlık Patlıcan", "Potato": "Taze Patates", "Cabbage": "Kırmızı ve Beyaz Lahana", "Cucumber": "Sera Salatalığı", "Cauliflower": "Beyaz Karnabahar"
  },
  hi: {
    "Kiwi": "कीवी (Hayward)", "Iceberg Lettuce": "आइसबर्ग लेट्यूस", "Bell Pepper": "रंगीन शिमला मिर्च", "Tangerine": "टैंजरीन संतरा", "Orange": "थॉमसन संतरा",
    "Romaine Lettuce": "रोमेन लेट्यूस", "Celery": "धुली अजवाइन (सेलरी)", "Broccoli": "प्रीमियम ब्रोकोली", "Grapes": "अंगूर (बिना बीज)", "Fresh Dill": "ताजा सोआ",
    "Fresh Parsley": "ताजा अजमोद", "Watermelon": "निर्यात श्रेणी तरबूज", "Tomato": "ग्रीनहाउस टमाटर", "Sweet Corn": "स्वीट कॉर्न", "Fresh Garlic": "ताजा हरा लहसुन",
    "Dried Garlic": "सूखा सफेद लहसुन", "Nectarine": "नेक्टराइन", "Apple": "लाल और पीला सेब", "Cherry": "निर्यात उत्तम चेरी", "Onion": "निर्यात प्याज",
    "Eggplant": "बैंगन (निर्यात योग्य)", "Potato": "आलू", "Cabbage": "पत्ता गोभी (लाल/सफेद)", "Cucumber": "ग्रीनहाउस खीरा", "Cauliflower": "फूलगोभी"
  },
  uz: {
    "Kiwi": "Kivi (Hayward)", "Iceberg Lettuce": "Aysberg karami", "Bell Pepper": "Rangi bolgar qalampiri", "Tangerine": "Mandarin", "Orange": "Apelsin (Thomson)",
    "Romaine Lettuce": "Romano salati", "Celery": "Yuvilgan seldr", "Broccoli": "Premium brokkoli", "Grapes": "Urug'siz uzum", "Fresh Dill": "Taze ukrop",
    "Fresh Parsley": "Yangi petrushka", "Watermelon": "Eksportbop tarvuz", "Tomato": "Issiqxona pomidori", "Sweet Corn": "Shirin makkajo'xori", "Fresh Garlic": "Yashil taze sarimsoq",
    "Dried Garlic": "Quritilgan oq sarimsoq", "Nectarine": "Nektarin", "Apple": "Qizil/Sarg'ish olma", "Cherry": "Gilos eksportbop", "Onion": "Eksportbop piyoz",
    "Eggplant": "Eksportbop baqlajon", "Potato": "Kartoshka", "Cabbage": "Qizil va oq karam", "Cucumber": "Issiqxona bodringi", "Cauliflower": "Gulkaram"
  },
  az: {
    "Kiwi": "Kivi (Hayward)", "Iceberg Lettuce": "Aysberq kahısı", "Bell Pepper": "Rəngli bibər", "Tangerine": "Mandarin", "Orange": "Portaxal (Thomson)",
    "Romaine Lettuce": "Romano salatı", "Celery": "Təmizlənmiş kərəviz", "Broccoli": "Premium brokkoli", "Grapes": "Çəyirdəksiz üzüm", "Fresh Dill": "Təzə şüyüd",
    "Fresh Parsley": "Təzə cəfəri", "Watermelon": "Yüksək keyfiyyətli qarpız", "Tomato": "İstixana pomidoru", "Sweet Corn": "Şirin qarğıdalı", "Fresh Garlic": "Təzə yaşıl sarımsaq",
    "Dried Garlic": "Quru ağ sarımsaq", "Nectarine": "Nektarin", "Apple": "Qırmızı və Sarı alma", "Cherry": "İxracat albalı", "Onion": "İxracat soğan",
    "Eggplant": "İxraclıq badımcan", "Potato": "Keyfiyyətli kartof", "Cabbage": "Kələm (Qırmızı/Ağ)", "Cucumber": "İstixana xiyarı", "Cauliflower": "Gül kələm"
  },
  uk: {
    "Kiwi": "Ківі Hayward", "Iceberg Lettuce": "Салат Айсберг", "Bell Pepper": "Болгарський перець", "Tangerine": "Мандарин іранський", "Orange": "Апельсин Томсон",
    "Romaine Lettuce": "Ромен салат", "Celery": "Селера мита", "Broccoli": "Брокколі преміум", "Grapes": "Виноград Кишмиш", "Fresh Dill": "Свіжий кріп",
    "Fresh Parsley": "Свіжа петрушка", "Watermelon": "Експортний кавун", "Tomato": "Тепличний томат", "Sweet Corn": "Солодка кукурудза", "Fresh Garlic": "Свіжий зелений часник",
    "Dried Garlic": "Білий сушений часник", "Nectarine": "Нектарин великий", "Apple": "Червоне/Жовте яблуко", "Cherry": "Великі черешні", "Onion": "Ріпчаста цибуля",
    "Eggplant": "Експортний баклажан", "Potato": "Добірна картопля", "Cabbage": "Капуста червоно-біла", "Cucumber": "Огірок тепличний", "Cauliflower": "Цвітна капуста"
  }
};

const TEXTS: Record<string, {
  heroTitle: string;
  heroSubtitle: string;
  heroTag: string;
  card1Title: string;
  card1Desc: string;
  card2Title: string;
  card2Desc: string;
  card3Title: string;
  card3Desc: string;
  premiumTag: string;
  soundCrops: string;
  caliberPill: string;
  textBody1: string;
  textBody2: string;
  fruitsBtn: string;
  vegsBtn: string;
  catalogBtn: string;
  packingBtn: string;
  p2nTitle: string;
  p2nBody1: string;
  p2nBody2: string;
  p2nBody3: string;
  intermediateTitle: string;
  intermediateSub: string;
  availableSeasonalProducts: string;
  allTab: string;
  fruitsTab: string;
  vegsTab: string;
  searchPlaceholder: string;
  noProductsFound: string;
  resetFilters: string;
  viewDetails: string;
  guideCardTitle: string;
  guideCardDesc: string;
  statusGuideHeader: string;
  statusAvailable: string;
  statusLimited: string;
  statusUnavailable: string;
  descAvailable: string;
  descLimited: string;
  descUnavailable: string;
  monthIndicatorGuide: string;
  monthIndicatorSubset: string;
  availablePill: string;
  limitedPill: string;
  unavailablePill: string;
  availableMonthsHeader: string;
  months: string[];
}> = {
  en: {
    heroTitle: "Harvest Season Calendar & Fresh Crop Availability",
    heroSubtitle: "Direct supply windows from Gilan packaging complexes straight to wholesale markets",
    heroTag: "Harvest season and months of product availability",
    card1Title: "Cold Storage Retention",
    card1Desc: "We utilize modern refrigeration and pre-cooling units to maintain the freshness of various fruits for months after harvesting.",
    card2Title: "Year-Round Production",
    card2Desc: "Due to Iran's diverse equatorial micro-climates and modern greenhouse nodes, vital vegetables are dispatched year-round.",
    card3Title: "Optimal Sourcing Flow",
    card3Desc: "Our calendar maps harvest cycles enabling international purchasing managers to coordinate logistics loops effectively.",
    premiumTag: "Premium Export Tier",
    soundCrops: "100% Sound Iranian Crops",
    caliberPill: "CALIBER A+",
    textBody1: "In this section of GilaFruit Company's product calendar, you dear traders can be informed about the harvest season of Iranian products such as fresh fruits and vegetables. In the list below, you can check the product you are looking for for each month to be aware of the harvest time and the possibility of providing it and plan your order for that month. It should be noted that due to the diversity of climate in Iran and the existence of numerous greenhouses in different cities, GilaFruit Company has provided the possibility of offering some vegetables for most of the year.",
    textBody2: "We possess extensive experience in storing fruits within our cold storage facilities, ensuring the preservation of freshness and quality for months beyond the harvest season. Each fruit variety presents unique storage requirements, enabling us to accurately determine optimal cold storage durations based on these specific needs and the inherent shelf life of each fruit. Leveraging our expertise, we offer a comprehensive product calendar that outlines the availability and storage periods for a wide range of fruits. This valuable resource empowers you to plan your sourcing and distribution strategies effectively, ensuring a consistent supply of high-quality produce throughout the year.",
    fruitsBtn: "Fruits",
    vegsBtn: "Vegetables",
    catalogBtn: "Catalog",
    packingBtn: "Packing",
    p2nTitle: "Points to Note:",
    p2nBody1: "At the beginning and end of the harvest season for each product, the supply time may be a few days earlier or later than the scheduled date. For example, the time of availability of",
    p2nBody2: "kiwi fruit",
    p2nBody3: "is early September, but its sugar may be low, and the Iranian government may delay the global supply of this product until the sugar content of the fruit reaches a desirable level. To obtain more accurate information about the supply time of each product, consultation and purchase, our colleagues at GilaFruit Company are always ready to answer your questions, dear buyers.",
    intermediateTitle: "List of Product Availability Seasons",
    intermediateSub: "GilaFruit: Your Year-Round Source for Fresh Produce",
    availableSeasonalProducts: "Seasonal Availability Schedules",
    allTab: "All",
    fruitsTab: "Fruits Only",
    vegsTab: "Vegetables Only",
    searchPlaceholder: "Search calendar products...",
    noProductsFound: "No products found matching active keywords.",
    resetFilters: "Clear Search",
    viewDetails: "View Details",
    guideCardTitle: "Seasonal Fruits and Vegetables Guide",
    guideCardDesc: "Our guide shows you when fruits and vegetables are in season throughout the year. Use this information to plan your shipping and enjoy fresh seasonal produce.",
    statusGuideHeader: "Product Status Guide",
    statusAvailable: "Available",
    statusLimited: "Limited",
    statusUnavailable: "Unavailable",
    descAvailable: "Products that are in active harvest and stably available in the current season.",
    descLimited: "Products with limited stock reserves or nearing the final weeks of their storage window.",
    descUnavailable: "Products that are out of season and currently unavailable for wholesale logistics.",
    monthIndicatorGuide: "Month Indicator Guide",
    monthIndicatorSubset: "Each abbreviation represents a specific Gregorian month of the year:",
    availablePill: "Available",
    limitedPill: "Limited",
    unavailablePill: "Unavailable",
    availableMonthsHeader: "AVAILABLE MONTHS",
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  fa: {
    heroTitle: "تقویم عرضه محصولات و فصل برداشت صیفی‌جات و میوه",
    heroSubtitle: "برنامه زمان‌بندی زنجیره تأمین مستقیم از مزارع و سردخانه‌های گیلان به بازارهای عمده‌فروشی",
    heroTag: "فصل برداشت و وضعیت عرضه و موجودی ماهانه کالاها",
    card1Title: "ذخیره‌سازی بهینه در سردخانه",
    card1Desc: "ما از مدرن‌ترین تجهیزات پیش‌سرمایش و کنترل رطوبت برای حفظ ماندگاری بلندمدت محصولات کشاورزی استفاده می‌کنیم.",
    card2Title: "موجودی در تمام فصول سال",
    card2Desc: "به دلیل تنوع اقلیمی چهارفصل ایران و گستردگی گلخانه‌های مدرن، تأمین صیفی‌جات هرگز متوقف نمی‌شود.",
    card3Title: "بهینه‌سازی لجستیک خرید",
    card3Desc: "این تقویم به تجار بین‌المللی اجازه می‌دهد تا بازه‌های کشتی‌رانی و کامیونی را دقیقاً طبق برداشت هماهنگ کنند.",
    premiumTag: "کیفیت فوق‌العاده صادراتی",
    soundCrops: "محصولات کشاورزی ممتاز و ۱۰۰٪ سالم",
    caliberPill: "کالیبر لوکس A+",
    textBody1: "در این بخش از تقویم عرضه محصولات شرکت گیلافروت، شما بازرگانان عزیز می‌توانید از فصل برداشت محصولات کشاورزی صادراتی ایران شامل میوه و صیفی‌جات مطلع شوید. در لیست زیر به سادگی می‌توانید محصول مورد نظر را به تفکیک ماه‌های سال بررسی کرده، از زمان دقیق برداشت و امکان سفارش‌گیری مطلع شوید و خریدهای ماهانه خود را مستقیماً برنامه‌ریزی کنید. شایان ذکر است که با توجه به شرایط خاص آب و هوایی ایران و وجود گلخانه‌های فراوان در شهرهای مختلف، امکان تأمین برخی کالاها در اکثر ماه‌های سال وجود دارد.",
    textBody2: "ما با دارا بودن سال‌ها تجربه تخصصی در زمینه نگهداری میوه‌ها در سردخانه‌های اختصاصی، حفظ طراوت، ارگانیک بودن و کیفیت محصولات را در ماه‌های پس از برداشت تضمین می‌کنیم. هر ارقام میوه نیازمند رطوبت و دمای خاصی است که سردخانه‌داران ما آن را مانیتور می‌کنند. با بهره‌گیری از این دانش فنی، محصولاتی نظیر کیوی و سیب در زمان طلایی خود برای شما بسته‌بندی و ارسال می‌شوند. این مرجع ارزشمند به شما امکان تداوم زنجیره توزیع و تضمین جلب رضایت مشتریان پایانی در کشورهای مقصد را می‌دهد.",
    fruitsBtn: "بخش میوه‌ها",
    vegsBtn: "بخش صیفی‌جات",
    catalogBtn: "دانلود کاتالوگ",
    packingBtn: "بسته‌بندی",
    p2nTitle: "نکات حائز اهمیت برای خریداران:",
    p2nBody1: "در زمان شروع یا پایان فصل برداشت هر محصول کشاورزی، تاریخ تأمین ممکن است به دلیل نوسانات جوی چند روز زودتر یا دیرتر آغاز شود. برای مثال، برای عرضه محصول",
    p2nBody2: "میوه کیوی",
    p2nBody3: "در اوایل شهریور ممکن است قند میوه هنوز به حد استاندارد نرسیده باشد و سازمان‌های ناظر صادرات دولتی، صدور گواهی را تا رسیدن به قند مطلوب چند روز به تأخیر بیندازند. جهت هماهنگی‌های نهایی و استعلامات تخصصی، کارشناسان بخش فروش گیلافروت همواره آماده پاسخگویی آنلاین به شما خریداران محترم هستند.",
    intermediateTitle: "جدول جامع وضعیت عرضه و فصول مختلف",
    intermediateSub: "شرکت گیلافروت: زنجیره تأمین بدون وقفه محصولات درجه‌یک ایران",
    availableSeasonalProducts: "برنامه و بازه‌های زمانی موجودی کالاها",
    allTab: "همه کالاها",
    fruitsTab: "میوه‌های صادراتی",
    vegsTab: "صیفی‌جات صادراتی",
    searchPlaceholder: "جستجو در تقویم عرضه...",
    noProductsFound: "هیچ محصولی با کلمات کلیدی مورد نظر یافت نشد.",
    resetFilters: "پاک کردن جستجو",
    viewDetails: "مشاهده مشخصات",
    guideCardTitle: "راهنمای فصول عرضه میوه و صیفی‌جات صادراتی",
    guideCardDesc: "این جدول به شما زمان‌بندی دقیق برداشت محصولات صادراتی ارايه می‌دهد تا لجستیک ترانزیت و قیمت کالای خود را مدیریت نمایید.",
    statusGuideHeader: "راهنمای رنگ‌ها و وضعیت موجودی",
    statusAvailable: "موجود جهت سفارش",
    statusLimited: "موجودی رو به کاهش",
    statusUnavailable: "عدم موجودی فصل",
    descAvailable: "محصولاتی که در زمان برداشت فعال قرار دارند و امکان بسته‌بندی در خطوط بدون محدودیت وجود دارد.",
    descLimited: "محصولاتی که زمان برداشت آن‌ها پایان یافته اما موجودی انبارها یا سردخانه‌ها به صورت محدود در دسترس است.",
    descUnavailable: "محصولاتی که در حال حاضر فصل کشت یا توزیع آن‌ها نبوده و ترخیص یا بارگیری ناممکن است.",
    monthIndicatorGuide: "راهنمای ماه‌های میلادی",
    monthIndicatorSubset: "برای راحتی در تبادلات بین‌المللی، ماه‌ها بر اساس تقویم میلادی در زیر مشخص شده‌اند:",
    availablePill: "موجود",
    limitedPill: "محدود",
    unavailablePill: "غیرموجود",
    availableMonthsHeader: "ماه‌های عرضه محصول",
    months: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
  },
  ru: {
    heroTitle: "Календарь сезона сбора урожая и доступности",
    heroSubtitle: "Окна прямых поставок из упаковочных комплексов Гилана на оптовые рынки",
    heroTag: "Сезон сбора урожая и месяцы доступности продукции",
    card1Title: "Холодильное хранение",
    card1Desc: "Мы используем системы быстрого охлаждения и современные склады для долгосрочного продления свежести плодов.",
    card2Title: "Поставки круглый год",
    card2Desc: "Благодаря разнообразию микроклимата Ирана и тепличным мощностям, свежие овощи отгружаются круглый год.",
    card3Title: "Оптимизация экспорта",
    card3Desc: "Наш календарь помогает импортерам координировать транспортную логистику в соответствии с циклами созревания.",
    premiumTag: "Премиальный экспортный класс",
    soundCrops: "100% качественные иранские культуры",
    caliberPill: "КАЛИБР A+",
    textBody1: "В этом разделе товарного календаря компании GilaFruit вы, уважаемые трейдеры, можете подробно ознакомиться с сезонами сбора иранских свежих фруктов и овощей. В таблице ниже вы можете отследить интересующую вас культуру по месяцам, узнать о готовности к отгрузке и спланировать график импорта. Стоит отметить, что благодаря климатическим зонам Ирана и наличию современных технологичных теплиц, некоторые овощи доступны почти круглый год.",
    textBody2: "Мы обладаем многолетним опытом хранения плодов на собственных хладокомбинатах, что гарантирует сохранение первозданного вида продукта спустя месяцы после сбора. Каждому сорту фрукта закладываются индивидуальные параметры влажности и вентиляции. Опираясь на эту экспертизу, мы предлагаем максимально точный календарь планового импорта. Данный ресурс позволяет вашему дистрибуторскому бизнесу работать бесперебойно круглый год.",
    fruitsBtn: "Фрукты",
    vegsBtn: "Овощи",
    catalogBtn: "Каталог",
    packingBtn: "Упаковка",
    p2nTitle: "Важная информация:",
    p2nBody1: "В начале и конце сезона сбора даты могут незначительно смещаться на несколько дней по климатическим причинам. Например, сбор",
    p2nBody2: "иранского киви",
    p2nBody3: "начинается в начале сентября, но если показатель сахаристости плодов снижен, правительство Ирана может ограничить экспорт на пару дней. Для получения точной информации и отправки контрактов, наши специалисты всегда готовы помочь вам.",
    intermediateTitle: "Календарь поставок по видам культур",
    intermediateSub: "GilaFruit: Ваш надежный круглогодичный источник свежего урожая",
    availableSeasonalProducts: "Графики сезонного сбора и отгрузок",
    allTab: "Все товары",
    fruitsTab: "Только фрукты",
    vegsTab: "Только овощи",
    searchPlaceholder: "Поиск продуктов в календаре...",
    noProductsFound: "Товаров с такими ключевыми словами не найдено.",
    resetFilters: "Очистить поиск",
    viewDetails: "Смотреть детали",
    guideCardTitle: "Справочник доступности овощей и фруктов",
    guideCardDesc: "Наш справочник наглядно показывает сезоны созревания, помогая рассчитать логистику и заказать свежие овощи вовремя.",
    statusGuideHeader: "Цветовая шкала статусов",
    statusAvailable: "В наличии",
    statusLimited: "Ограничено",
    statusUnavailable: "Нет сезона",
    descAvailable: "Культуры в фазе активного сбора с полей и стабильной доступности для закупки.",
    descLimited: "Продукция, сбор которой завершен, но остатки бережно хранятся на холодильных складах.",
    descUnavailable: "Товары вне сезона вегетации, отгрузка и таможенное оформление которых временно закрыты.",
    monthIndicatorGuide: "Обозначения месяцев",
    monthIndicatorSubset: "Для удобства международной логистики месяцы распределены по григорианскому календарю:",
    availablePill: "Доступно",
    limitedPill: "Ограничено",
    unavailablePill: "Недоступно",
    availableMonthsHeader: "МЕСЯЦЫ ПОСТАВОК",
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  },
  ar: {
    heroTitle: "تقويم مواسم الحصاد وتأمين الفواكه والخضروات الإيرانية",
    heroSubtitle: "مواعيد الشحن المباشرة من مراكز التغليف والتخزين في جيلان إلى الأسواق العالمية مبردة بالكامل",
    heroTag: "موسم سحب المحاصيل والتوفر الشهري للمنتجات",
    card1Title: "تكنولوجيا الحفظ بالتبريد",
    card1Desc: "نستخدم تبريداً متقدماً لابقاء الفواكه ناضجة ومستقرة لعدة أشهر حتى ما بعد انقضاء الحصاد.",
    card2Title: "جاهزية طوال العام",
    card2Desc: "مناخات إيران المتعددة والدفيئات الحديثة تدعم شحن وتصدير الخضروات في كل فصول السنة.",
    card3Title: "مخطط التوريد الأمثل",
    card3Desc: "يساعد هذا المرجع الشركاء والمدراء اللوجستيين على تنظيم شاحنات التبريد بدقة مسبقة.",
    premiumTag: "فئة تصدير فاخرة دقيقة",
    soundCrops: "محاصيل زراعية إيرانية ١٠٠٪ سليمة",
    caliberPill: "كاليبر لوكس A+",
    textBody1: "في هذا القسم من تقويم المنتجات الزراعية لشركة كيلافروت، يمكن للتجار الأفاضل الاطلاع على فترات حصاد وتأمين المحاصيل الإيرانية الممتازة من الفواكه والخضروات الطازجة. بالنظر في الجدول أدناه، تستطيع رصد وقت توافر أي محصول والتخطيط لاستيراد البضائع بشكل مريح لكل شهر من السنة. نود الإشارة إلى أنه وبسبب الفوارق البيئية الخصبة في إيران والدفيئات المتطورة، يمكن شراء بعض الخضار طوال شهور العام.",
    textBody2: "إننا مدعومون بخبرة عريضة في التعامل وحفظ المنتجات الزراعية داخل مجمداتنا وصالات تبريدنا لمنع تأكسد أو بهتان المحاصيل طازجة ولذيذة. كل فاكهة لها درجات رطوبة وحرارة يتم رصدها من قبل الفنيين لدينا. تتيح لكم أداتنا البحث والجدولة الذكية تفادي فترات الندرة والحصول على بضائع كاليبر ممتاز لعملائكم في الخارج طوال العام.",
    fruitsBtn: "الفواكه",
    vegsBtn: "الخضروات",
    catalogBtn: "تحميل الكتالوج",
    packingBtn: "التعبئة والتغليف",
    p2nTitle: "نقاط بارزة للمشترين:",
    p2nBody1: "في هوامش نهاية أو بداية سحب المحاصيل، قد تتغير تواريخ الإمداد الفعلي بأيام طفيفة بسبب المطر أو قرارات الصادرات. على سبيل المثال، إطلاق",
    p2nBody2: "ثمار الكيوي",
    p2nBody3: "يكون في مطلع سبتمبر، غير أن نضج السكر قد يدفع الحكومة الإيرانية لتأخير الشحن لبضعة أيام للوصول إلى العيار المثالي. للتفاصيل والاتفاقيات المباشرة، يسعد فريق مبيعاتنا التواصل معكم.",
    intermediateTitle: "جدول مواسم التوريد السنوية والتنبؤ",
    intermediateSub: "شركة كيلافروت: جودة لا تنقطع وإمداد مستقر من إيران",
    availableSeasonalProducts: "مواعيد وجداول نضج المحاصيل للتصدير",
    allTab: "كل المحاصيل",
    fruitsTab: "الفواكه فقط",
    vegsTab: "الخضروات فقط",
    searchPlaceholder: "البحث عن صنف في التقويم...",
    noProductsFound: "لم يتم العثور على أي صنف مطابق لمصطلحات البحث الخاصة بك.",
    resetFilters: "مسح كلمة البحث",
    viewDetails: "رؤية التفاصيل",
    guideCardTitle: "دليل الفواكه والخضروات الموسمية",
    guideCardDesc: "يفصل الدليل فصول النشوء والحصاد لتسهيل التنبؤ وطلب الشحن في ذروة الجودة والسعر المناسب.",
    statusGuideHeader: "دليل المعايير والألوان المعتمدة",
    statusAvailable: "متاح للشحن",
    statusLimited: "كميات محدودة",
    statusUnavailable: "غير متوفر موسمياً",
    descAvailable: "المحاصيل في قمة الحصاد وتتوفر بغزارة تتيح الشحن بأي كميات دون عقبات تبريد.",
    descLimited: "انتهى حصادها مع توفر مخزونات احتياطية تبريدية معينة تكفي لشحنات مقننة.",
    descUnavailable: "محاصيل خارج دورتها تماماً وغير قابلة للطلب أو التعبئة في الوقت الحالي.",
    monthIndicatorGuide: "تفسير الشهور الميلادية",
    monthIndicatorSubset: "الشهور مطابقة للمقاييس العالمية ولتسهيل الاستيراد:",
    availablePill: "متاح",
    limitedPill: "محدود",
    unavailablePill: "غير متاح",
    availableMonthsHeader: "أشهر التوفر المتاحة",
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  },
  tr: {
    heroTitle: "Hasat Sezonu Takvimi ve Taze Ürün İhracat Dönemleri",
    heroSubtitle: "Gilan paketleme tesislerinden toptan pazarlara doğrudan ve güvenli sevkiyat pencereleri",
    heroTag: "Hasat zamanı ve taze ürünlerin aylara göre sevkiyat durumları",
    card1Title: "Korumalı Soğuk Depolama",
    card1Desc: "Meyvelerin tazeliğini hasattan aylar sonra bile korumak için gelişmiş soğuk hava depo ve ön soğutma ünitelerimizi kullanıyoruz.",
    card2Title: "Kesintisiz Yıllık Üretim",
    card2Desc: "İran'ın eşsiz mikroklimaya sahip bereketli toprakları ve sera altyapıları sayesinde temel sebze tedariği hiç aksamaz.",
    card3Title: "İdeal Tedarik Planlama",
    card3Desc: "Bu takvim, satın alma müdürlerinin lojistik adımlarını doğru hasat zamanına göre optimize etmesini sağlar.",
    premiumTag: "Premium İhracat Kalitesi",
    soundCrops: "%100 Hasarsız Seçkin İran Ürünleri",
    caliberPill: "LÜKS KALİBRE A+",
    textBody1: "GilaFruit Firması ürün takviminin bu bölümünde siz değerli ithalatçılar taze meyve ve sebzelerimizin hasat mevsimlerini inceleyebilirsiniz. Aşağıdaki listeden her ay hangi ürünlerin sevkiyata uygun olduğunu kontrol edebilir, sipariş süreçlerinizi kolayca planlayabilirsiniz. İran'ın zengin iklim yapısı ve modern seraları sayesinde birçok sebze türünde yıl boyu aralıksız tedarik sağlandığını unutmayınız.",
    textBody2: "Kendi soğuk hava depolarımızda ürünlerimizi muhafaza etmedeki engin deneyimimiz, hasattan aylar sonra dahi sofralara aynı tazelikte ürün ulaşmasını sağlar. Her çeşit ürünün kendine has nem ve derecelere göre ayarlanması, dayanıklılığı artırır. GilaFruit uzmanlığı ile doğru zamanda doğru paketlemeyle lojistik döngünüzü kesintisiz tamamlayabilirsiniz.",
    fruitsBtn: "Meyve Grubu",
    vegsBtn: "Sebze Grubu",
    catalogBtn: "Katalog İndir",
    packingBtn: "Paketleme",
    p2nTitle: "Alıcıların Dikkatine:",
    p2nBody1: "Hasat başlama ve bitiş dönemlerinde, hava sıcaklığı gibi doğal etkenler nedeniyle tedarik tarihinde birkaç gün kayma yaşanabilir. Örneğin,",
    p2nBody2: "Kivi meyvesi",
    p2nBody3: "Eylül başında hasada hazırdır, ancak şeker oranı kıvamına gelene kadar İran hükümeti ihracat çıkışını birkaç gün erteleyebilir. Tam zamanında planlama için satış ekibimiz her zaman yardıma hazırdır.",
    intermediateTitle: "Mevsimlik Ürün Durum Tablosu",
    intermediateSub: "GilaFruit: Yüksek Kaliteli Taze Ürün Tedarik Zinciriniz",
    availableSeasonalProducts: "Hasat ve İhracat Dönemleri Aylık Listesi",
    allTab: "Tüm Ürünler",
    fruitsTab: "Sadece Meyveler",
    vegsTab: "Sadece Sebzeler",
    searchPlaceholder: "Takvimde ürün ara...",
    noProductsFound: "Filtrelere uygun ürün bulunamadı.",
    resetFilters: "Aramayı Temizle",
    viewDetails: "Detayları Gör",
    guideCardTitle: "Sezonluk Meyve ve Sebze Rehberi",
    guideCardDesc: "Bu takvim ürünlerin taze hasat dönemlerini göstererek lojistik adımlarınızı ve fiyat avantajınızı korumanıza rehberlik eder.",
    statusGuideHeader: "Ürün Durum Rehberi",
    statusAvailable: "Tedarik Hazır",
    statusLimited: "Sınırlı Stok",
    statusUnavailable: "Sezon Dışı",
    descAvailable: "Hasat döneminde olan ve süre sınırı olmadan her miktarda siparişe uygun taze ürünler.",
    descLimited: "Hasat dönemi bitmiş ancak soğuk depolarda sevkiyata hazır sınırlı rezerv durumdaki ürünler.",
    descUnavailable: "Sezonu olmayan ve şu anda paketleme hattı kapalı olan ürünler.",
    monthIndicatorGuide: "Ayların Gösterimi",
    monthIndicatorSubset: "Uluslararası ticaret koordinasyonu için aylar miladi takvime göre listelenmiştir:",
    availablePill: "Mevcut",
    limitedPill: "Sınırlı",
    unavailablePill: "Mevcut Değil",
    availableMonthsHeader: "SEVKİYAT AYLARI",
    months: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
  },
  hi: {
    heroTitle: "फसल कटाई का मौसम कैलेंडर और ईरानी फसलों की उपलब्धता",
    heroSubtitle: "गिलान पैकेजिंग परिसरों से सीधे थोक बाजारों तक ताजा फसलों की समयबद्ध आपूर्ति",
    heroTag: "फसल कटाई का मौसम और महीनेवार उत्पाद उपलब्धता",
    card1Title: "शीत गृह अवधारण (कोल्ड स्टोरेज)",
    card1Desc: "हम कटाई के कई महीनों बाद तक फलों की ताज़गी को बनाए रखने के लिए प्री-कूलिंग और आधुनिक शीत गृहों का उपयोग करते हैं।",
    card2Title: "साल भर उत्पादन प्रक्रिया",
    card2Desc: "ईरान की विविध विजातीय जलवायु और आधुनिक ग्रीनहाउस सुविधाओं के कारण सब्जियां साल भर उपलब्ध रहती हैं।",
    card3Title: "अनुकूलित खरीद योजना",
    card3Desc: "हमारा कैलेंडर कृषि चक्र को दर्शाता है जिससे थोक खरीद प्रबंधकों को अपनी रसद योजना बनाने में आसानी होती है।",
    premiumTag: "प्रीमियम निर्यात ग्रेड",
    soundCrops: "100% उत्कृष्ट स्वस्थ ईरानी फसलें",
    caliberPill: "कैलियर A+",
    textBody1: "गीलाफ्रूट कंपनी के उत्पाद कैलेंडर के इस भाग में, आप सम्मानित व्यापारी ईरानी ताजे फल और सब्जियों की कटाई के मौसम के बारे में जानकारी प्राप्त कर सकते हैं। नीचे दी गई सूची से आप जान सकते हैं कि आपकी मनचाही फसल किस महीने में उपलब्ध होगी जिससे आप अपनी थोक रसद का समय पर समन्वय कर सकें। कृपया ध्यान दें कि जलवायु विविधता और ग्रीनहाउस नेटवर्क के कारण कई सब्जियां लगभग पूरे साल उपलब्ध होती हैं।",
    textBody2: "कोल्ड स्टोरेज में फलों के सफल संरक्षण में हमारा लंबा अनुभव है, जो फसल के समय के बाद लंबे समय तक उत्कृष्ट गुणवत्ता बनाए रखता है। कवक और सुक्रोज गुणवत्ता मानदंडों को पूरा करने के लिए प्रत्येक फल को विशिष्ट तापमान पर रखा जाता है। गीलाफ्रूट टीम के परामर्श और शिपिंग समर्थन से आप निरंतर आपूर्ति चक्र बनाए रख सकते हैं।",
    fruitsBtn: "फल श्रेणियां",
    vegsBtn: "सब्जियां",
    catalogBtn: "कैटलॉग",
    packingBtn: "पैकेजिंग नियम",
    p2nTitle: "व्यापारियों के लिए मुख्य बातें:",
    p2nBody1: "फसल कटाई की शुरुआत या अंत में मौसमी परिस्थितियों के कारण तारीखों में कुछ दिनों का अंतर हो सकता है। उदाहरण के लिए,",
    p2nBody2: "कीवी फल",
    p2nBody3: "की उपलब्धता सितंबर की शुरुआत में होती है, लेकिन अगर शर्करा का स्तर पर्याप्त नहीं है, तो ईरानी सरकार उच्च गुणवत्ता बनाए रखने के लिए निर्यात को कुछ दिन आगे बढ़ा सकती है। नवीनतम मूल्य निर्धारण व शिपमेंट के लिए हमारी बिक्री टीम से संपर्क करें।",
    intermediateTitle: "मासिक उत्पाद उपलब्धता तालिका",
    intermediateSub: "GilaFruit: ताजे जैविक कृषि उत्पादों की निरंतर आपूर्ति श्रृंखला",
    availableSeasonalProducts: "फसलों के पकने और शिपिंग का मासिक रिकॉर्ड",
    allTab: "सभी फसलें",
    fruitsTab: "केवल फल",
    vegsTab: "केवल सब्जियां",
    searchPlaceholder: "कैलेंडर में उत्पाद का नाम खोजें...",
    noProductsFound: "चयनित फिल्टर के लिए कोई उत्पाद उपलब्ध नहीं है।",
    resetFilters: "खोज साफ़ करें",
    viewDetails: "विवरण जांचें",
    guideCardTitle: "फसल के मौसम का सटीक गाइड",
    guideCardDesc: "यह गाइड आपको बताता है कि ताजी फसलें कब उत्कृष्ट स्थिति और सर्वोत्तम मूल्य पर उपलब्ध होती हैं ताकि रसद चक्र निर्बाध चले।",
    statusGuideHeader: "उत्पाद उपलब्धता संकेतक",
    statusAvailable: "उपलब्ध",
    statusLimited: "सीमित",
    statusUnavailable: "अनुपलब्ध",
    descAvailable: "सक्रिय मौसम में उपलब्ध फसलें जिनका उत्पादन निरंतर हो रहा है और जो ऑर्डर के लिए तैयार हैं।",
    descLimited: "फसल का मौसम समाप्त हो चुका है, लेकिन कोल्ड स्टोरेज की मदद से सीमित मात्रा में शिपमेंट उपलब्ध है।",
    descUnavailable: "वह फसलें जिनका सीजन वर्तमान में नहीं है और जिनकी पैकेजिंग इकाइयां अस्थाई रूप से बंद हैं।",
    monthIndicatorGuide: "महीनों के नाम",
    monthIndicatorSubset: "वैश्विक व्यापार और शिपिंग की सुविधा के लिए महीनों को ग्रेगोरियन कैलेंडर के अनुसार दिखाया गया है:",
    availablePill: "उपलब्ध",
    limitedPill: "सीमित",
    unavailablePill: "अनुपलब्ध",
    availableMonthsHeader: "उपलब्धता के महीने",
    months: ['जन', 'फर', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अग', 'सित', 'अक्तू', 'नव', 'दिस']
  },
  uz: {
    heroTitle: "Hosil o'rimi taqvimi va yangi ekinlar yetkazilishi",
    heroSubtitle: "Gilon qadoqlash ob'ektlaridan ulgurji bozorlarga to'g'ridan-to'g'ri yetkazib berish",
    heroTag: "Mavsumiy tayyorlik va oylik mahsulot zaxiralari o'lchovlari",
    card1Title: "Sovuq omborxonalarda saqlash",
    card1Desc: "Yig'im-terimdan so'ng bir necha oy davomida sifatni ta'minlash uchun mevalarni sovuq zaxiralarda saqlaymiz.",
    card2Title: "Yil davomida ta'minot",
    card2Desc: "Eronning iqlim boyligi va issiqxona tarmoqlari sababli eng yangi sabzavotlar har kuni jo'natiladi.",
    card3Title: "Optimal sotib olish rejasi",
    card3Desc: "Ushbu taqvim import menejerlariga transport zaxiralarini to'g'ri o'rim davriga moslashtirish imkonini beradi.",
    premiumTag: "Eksportbop birinchi toifa",
    soundCrops: "100% sog'lom va foydali ekinlar",
    caliberPill: "KALIBRI A+",
    textBody1: "GilaFruit kompaniyasi mahsulot taqvimining ushbu bo'limida siz yangi mevalarimiz va sabzavotlarimiz o'rim mavsumi bilan tanishib chiqishingiz mumkin. Quyidagi ro'yxatda har oy qaysi mahsulotlarni sotib olish mumkinligini bilishingiz, narx takliflarini so'rashingiz va yetkazib berish amallarini oson plan qilishingiz mumkin. Eron iqlimining boyligi tufayli bir nechta sabzavot turlari yil bo'yi mavjudligini eslatamiz.",
    textBody2: "Sovuq omborxonalarimizda sifatni saqlash bo'yicha kuchli tajribamiz hosildan keyin ham mevalarning maza va ta'mini bir xilda saqlashga xizmat qiladi. To'g'ri paketlash tizimi yordamida yuklaringizni buzilmasdan va o'z vaqtida belgilangan manzillarga tashiymiz.",
    fruitsBtn: "Meva bo'limi",
    vegsBtn: "Sabzavot bo'limi",
    catalogBtn: "Katalogni yuklash",
    packingBtn: "Qadoqlash",
    p2nTitle: "Iste'molchilar diqqatiga:",
    p2nBody1: "Mavsum boshlanishi va tugashida ob-havo sharoitlariga asosan yetkazib berish kunlarida biroz o'zgarish bo'lishi mumkin. Masalan,",
    p2nBody2: "Kivi mevasi",
    p2nBody3: "Sentabr boshida tayyor bo'ladi, lekin uning shirinligi me'yoriga kelguncha eksport bir necha kunga kechikishi mumkin. To'g'ri vaqtda rejalar tuzish uchun sotuvlar bo'limimizga murojaat qiling.",
    intermediateTitle: "Mavsumiy mahsulotlar oylik jadvali",
    intermediateSub: "GilaFruit: Sifatli va yangi meva va sabzavot yetkazib beruvchingiz",
    availableSeasonalProducts: "Hosil va eksport bo'yicha oylik jadval",
    allTab: "Barcha mahsulotlar",
    fruitsTab: "Faqat mevalar",
    vegsTab: "Faqat sabzavotlar",
    searchPlaceholder: "Taqvimdan mahsulot izlash...",
    noProductsFound: "Izlangan kriteriyalarga mos mahsulot topilmadi.",
    resetFilters: "Qidiruvni tozalash",
    viewDetails: "Batafsil ko'rish",
    guideCardTitle: "Yangi sabzavot va meva qo'llanmasi",
    guideCardDesc: "Ushbu qo'llanma mahsulotlarning hosil vaqti va eng arzon narxda bo'lish davrini ko'rsatib, logistika xarajatlaringizni kamaytirishga yordam beradi.",
    statusGuideHeader: "Mahsulot tayyorlik ko'rsatkichlari",
    statusAvailable: "Sotuvda mavjud",
    statusLimited: "Zaxira kam",
    statusUnavailable: "Mavsumda emas",
    descAvailable: "Faol o'rim vaqtida bo'lgan va cheksiz miqdorda jo'natishga tayyor yangi ekinlar.",
    descLimited: "O'rim mavsumi tugagan, ammo sovuq omborxonalarimizda saqlanayotgan va buyurtma qilish uchun qisman tayyor mahsulotlar.",
    descUnavailable: "Ushbu oylarda mavjud bo'lmagan va qadoqlash tarmoqlari o'chirilgan tovarlar.",
    monthIndicatorGuide: "Oylarning tartibi",
    monthIndicatorSubset: "Xalqaro koordinatsiya qulayligi uchun oylar Grigorian taqvimiga mos yozilgan:",
    availablePill: "Mavjud",
    limitedPill: "Kam",
    unavailablePill: "Mavjud emas",
    availableMonthsHeader: "ETKAZIB BERISH OYLARI",
    months: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek']
  },
  az: {
    heroTitle: "Mövsümi Məhsul Yığımı və Anbar Mövcudluğu Təqvimi",
    heroSubtitle: "Gilan qablaşdırma mərkəzlərindən birbaşa topdansatış bazarlarına soyuq zəncir tədarük pəncərələri",
    heroTag: "Hosil mövsümü və aylara görə məhsul sifarişi statusu",
    card1Title: "Xüsusi Soyuq Hava Anbarı",
    card1Desc: "Məhsulların təravətini uzun müddət saxlamaq üçün ən son soyutma və rütubət tənzimləmə sistemlərindən faydalanırıq.",
    card2Title: "Daimi Mövsümi İstehsal",
    card2Desc: "İranın dörd fəsilli müxtəlif coğrafiyası və müasir istixana şəbəkəsi sayəsində tərəvəz ixracatı il boyu davam edir.",
    card3Title: "Düzgün Lojistik Planlama",
    card3Desc: "Bu təqvim beynəlxalq alıcıların nəqliyyat planlamasını məhsul çıxış vaxtına uyğun tənzimləməsini təmin edir.",
    premiumTag: "Premium İxracat Standartı",
    soundCrops: "100% Zədəsiz Seçmə İran Məhsulları",
    caliberPill: "LÜKS KALİBR A+",
    textBody1: "GilaFruit şirkətinin təqdim etdiyi bu mövsüm təqvimində siz hörmətli idxalatçılar təbii mevə və tərəvəzlərimizin yığım vaxtı ilə yaxından tanış ola bilərsiniz. Aşağıdakı siyahıda hər ay hansı məhsulların hazır olduğunu görüb, logistika işlərinizi və mövsüm sifarişlərinizi asanlıqla qura bilərsiniz. İstixanalar sayəsində bəzi tərəvəzlərin il boyu kəsilmədən ixrac olunduğunu nəzərə almağınızı xahiş edirik.",
    textBody2: "Məhsullarımızı soyuq anbarlarda mühafizə etməkdəki böyük təcrübəmiz, yığımdan aylar keçdikdən sonra belə təzə qalmasına imkan yaradır. Temperatur və rütubət rejimləri xüsusi komandamız tərəfindən idarə olunur. Bu yolla tədarük zəncirinizi ən yüksək səviyyədə davam etdirə bilərsiniz.",
    fruitsBtn: "Meyvə Bölməsi",
    vegsBtn: "Tərəvəz Bölməsi",
    catalogBtn: "Kataloq Yüklə",
    packingBtn: "Qablaşdırma",
    p2nTitle: "Alıcıların Diqqətinə:",
    p2nBody1: "Hosil dövrünün əvvəllərində və sonlarında hava şərtləri səbəbilə hazır olma tarixlərində bir neçə gün fərq yaşana bilər. Məsələn,",
    p2nBody2: "Kivi meyvəsi",
    p2nBody3: "Sentyabrın əvvəlində yığıma hazır olur, lakin şəkər səviyyəsi standart həddə çatana qədər ixrac icazəsi bir neçə gün gecikə bilər. Ən doğru və təhlükəsiz planlama üçün mütəxəssislərimiz sizə kömək edəcəklər.",
    intermediateTitle: "Aylıq Məhsul Sifariş Statusu",
    intermediateSub: "GilaFruit: Təzə Kənd Təsərrüfatı Məhsullarının Doğru Təchizatçısı",
    availableSeasonalProducts: "Doğru yığım və göndərmə mövsümləri siyahısı",
    allTab: "Bütün Məhsullar",
    fruitsTab: "Yalnız Meyvələr",
    vegsTab: "Yalnız Tərəvəzlər",
    searchPlaceholder: "Təqvimdə məhsul axtarın...",
    noProductsFound: "Filtirlərə uyğun məhsul tapılmadı.",
    resetFilters: "Axtarışı təmizlə",
    viewDetails: "Məlumatı İncele",
    guideCardTitle: "Mövsümlük Meyvə-Tərəvəz Kitabı",
    guideCardDesc: "Bu cədvəl sizə məhsulların yığım dövrünü izah edərək logistika xərclərinizi düzgün qurmağa rəhbərlik edir.",
    statusGuideHeader: "Məhsul Mövcudluğu Bələdçisi",
    statusAvailable: "Tarixə uyğundur",
    statusLimited: "Məhdud ehtiyat",
    statusUnavailable: "Mövsüm kənarı",
    descAvailable: "Hosil vaxtı aktiv olan və limitsiz həcmdə ixraca tam yarayan təzə məhsullar.",
    descLimited: "Mövsüm bitmiş, lakin soyuq anbarlarda qorunan və qismən sifariş verilə bilən zərif məhsullar.",
    descUnavailable: "Dövrü bitmiş və hazırda xəttləri müvəqqəti bağlı olan məhsullar.",
    monthIndicatorGuide: "Ayların Qısa Adları",
    monthIndicatorSubset: "Beynəlxalq ticarət planlaması üçün aylar miladi təqvimlə listələnmişdir:",
    availablePill: "Mövcud",
    limitedPill: "Məhdud",
    unavailablePill: "Mövcud deyil",
    availableMonthsHeader: "İXRAC AYLARI",
    months: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyun', 'İyul', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek']
  },
  uk: {
    heroTitle: "Календар сезону збору врожаю та наявності",
    heroSubtitle: "Вікна прямих поставок з пакувальних комплексів Гілану на оптові ринки",
    heroTag: "Сезон збору врожаю та місяці доступності продукції",
    card1Title: "Холодильне зберігання",
    card1Desc: "Ми використовуємо системи швидкого охолодження та сучасні склади для довгострокового продовження свіжості плодів.",
    card2Title: "Поставки круглий рік",
    card2Desc: "Завдяки різноманітності мікроклімату Ірану та тепличним потужностям, свіжі овочі відвантажуються круглий рік.",
    card3Title: "Оптимізація експорту",
    card3Desc: "Наш календар допомагає імпортерам координувати транспортну логістику відповідно до циклів дозрівання.",
    premiumTag: "Преміальний експортний клас",
    soundCrops: "100% якісні іранські культури",
    caliberPill: "КАЛІБР A+",
    textBody1: "У цьому розділі товарного календаря компанії GilaFruit ви, шановні трейдери, можете детально ознайомитися з сезонами збору іранських свіжих фруктів та овочів. У таблиці нижче ви можете відстежити зацікавлену вас культуру за місяцями, дізнатися про готовність до відвантаження та спланувати графік імпорту. Варто зазначити, що завдяки кліматичним зонам Ірану та наявності сучасних технологічних теплиць, деякі овочі доступні майже круглий рік.",
    textBody2: "Ми володіємо багаторічним досвідом зберігання плодів на власних хладокомбінатах, що гарантує збереження першокласного виду продукту через місяці після збору. Кожному сорту фрукта закладаються індивідуальні параметри вологості та вентиляції. Спираючись на цю експертизу, ми пропонуємо максимально точний календар планового імпорту. Даний ресурс дозволяє вашому дистриб'юторському бізнесу працювати безперебійно круглий рік.",
    fruitsBtn: "Фрукти",
    vegsBtn: "Овочі",
    catalogBtn: "Каталог",
    packingBtn: "Упаковка",
    p2nTitle: "Важлива інформація:",
    p2nBody1: "На початку та наприкінці сезону збору дати можуть незначно зміщуватися з кліматичних причин. Наприклад, збір",
    p2nBody2: "іранського ківі",
    p2nBody3: "починається на початку вересня, але якщо показник цукристості плодів знижений, уряд Ірану може обмежити експорт на пару днів. Для отримання точної інформації та відправлення контрактів, наші фахівці завжди готові допомогти вам.",
    intermediateTitle: "Календар поставок за видами культур",
    intermediateSub: "GilaFruit: Ваше надійне цілорічне джерело свіжого врожаю",
    availableSeasonalProducts: "Графіки сезонного збору та відвантажень",
    allTab: "Всі товари",
    fruitsTab: "Лише фрукти",
    vegsTab: "Лише овочі",
    searchPlaceholder: "Пошук продуктів у календарі...",
    noProductsFound: "Товарів з такими ключовими словами не знайдено.",
    resetFilters: "Очистити пошук",
    viewDetails: "Дивитися деталі",
    guideCardTitle: "Довідник доступності овочів та фруктів",
    guideCardDesc: "Наш довідник наочно показує сезони дозрівання, допомагаючи розрахувати логістику та замовити свіжі овочі вчасно.",
    statusGuideHeader: "Колірна шкала статусів",
    statusAvailable: "В наявності",
    statusLimited: "Обмежено",
    statusUnavailable: "Немає сезону",
    descAvailable: "Культури у фазі активного збору з полів та стабільної доступності для закупівлі.",
    descLimited: "Продукція, збір якоء завершений, але залишки дбайливо зберігаються на холодильних складах.",
    descUnavailable: "Товари поза сезону вегетації, відвантаження та митне оформлення яких тимчасово закриті.",
    monthIndicatorGuide: "Позначення місяців",
    monthIndicatorSubset: "Для зручності міжнародної логістики місяці розподілені за григоріанським календарем:",
    availablePill: "Доступно",
    limitedPill: "Обмежено",
    unavailablePill: "Недоступно",
    availableMonthsHeader: "МІСЯЦІ ПОСТАВОК",
    months: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Лист', 'Груд']
  }
};

const DETAILED_PRODUCTS = [
  {
    id: "p1",
    name: "Kiwi",
    category: "fruit",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], // Jan-May, Nov-Dec
    image: "https://images.unsplash.com/photo-1591796079474-7a40647a26c6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p2",
    name: "Iceberg Lettuce",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], // Jan-May, Nov-Dec
    image: "https://images.unsplash.com/photo-1556801712-76c8cb079901?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p3",
    name: "Bell Pepper",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], // Year-round
    image: "https://images.unsplash.com/photo-1563565312871-247d12df0a6c?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p4",
    name: "Tangerine",
    category: "fruit",
    status: "Unavailable" as const,
    months: [true, true, false, false, false, false, false, false, false, true, true, true], // Jan-Feb, Oct-Dec
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p5",
    name: "Orange",
    category: "fruit",
    status: "Limited" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], // Jan-Apr, Oct-Dec
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p6",
    name: "Romaine Lettuce",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], // Jan-May, Nov-Dec
    image: "https://images.unsplash.com/photo-1556801712-76c8cb079901?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p7",
    name: "Celery",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, false, false, false, false, true, true], 
    image: "https://images.unsplash.com/photo-1610485078500-bf7f6e80bca6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p8",
    name: "Broccoli",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p9",
    name: "Grapes",
    category: "fruit",
    status: "Unavailable" as const,
    months: [false, false, false, false, false, false, true, true, true, true, true, false], // Jul-Nov
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p10",
    name: "Fresh Dill",
    category: "vegetable",
    status: "Unavailable" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p11",
    name: "Fresh Parsley",
    category: "vegetable",
    status: "Unavailable" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p12",
    name: "Watermelon",
    category: "fruit",
    status: "Available" as const,
    months: [false, false, false, true, true, true, true, true, true, false, false, false], // Apr-Sep
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p13",
    name: "Tomato",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p14",
    name: "Sweet Corn",
    category: "vegetable",
    status: "Available" as const,
    months: [false, false, false, false, false, true, true, true, true, true, false, false], // Jun-Oct
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d20f6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p15",
    name: "Fresh Garlic",
    category: "vegetable",
    status: "Available" as const,
    months: [false, false, false, false, true, true, true, true, false, false, false, false], // May-Aug
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p16",
    name: "Dried Garlic",
    category: "vegetable",
    status: "Limited" as const,
    months: [true, true, true, true, false, false, false, false, true, true, true, true], // High dry stock retention
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p17",
    name: "Nectarine",
    category: "fruit",
    status: "Limited" as const,
    months: [false, false, false, false, false, true, true, true, false, false, false, false], // Jun-Aug
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p18",
    name: "Apple",
    category: "fruit",
    status: "Limited" as const,
    months: [true, true, true, true, false, false, false, false, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p19",
    name: "Cherry",
    category: "fruit",
    status: "Available" as const,
    months: [false, false, false, false, true, true, true, false, false, false, false, false], // May-Jul
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p20",
    name: "Onion",
    category: "vegetable",
    status: "Unavailable" as const,
    months: [true, true, true, false, false, false, false, false, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p21",
    name: "Eggplant",
    category: "vegetable",
    status: "Available" as const,
    months: [false, false, false, false, true, true, true, true, true, true, false, false], 
    image: "https://images.unsplash.com/photo-1610485078500-bf7f6e80bca6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p22",
    name: "Potato",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p23",
    name: "Cabbage",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p24",
    name: "Cucumber",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, true, true, true, true, true, true, true, true], 
    image: "https://images.unsplash.com/photo-1449339091483-366a5068cf0a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "p25",
    name: "Cauliflower",
    category: "vegetable",
    status: "Available" as const,
    months: [true, true, true, true, false, false, false, false, false, true, true, true], 
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ec3?auto=format&fit=crop&q=80&w=300"
  }
];

interface CalendarScreenProps {
  onNavigate: (hash: string) => void;
  calendarItems?: any[];
}

export default function CalendarScreen({ onNavigate }: CalendarScreenProps) {
  const { language } = useLanguage();
  const [filterType, setFilterType] = useState<'all' | 'fruit' | 'vegetable'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const ln = TEXTS[language] || TEXTS.en;
  
  // Fully translate the months list dynamically
  const monthsList = useMemo(() => {
    const defaultFullnames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return ln.months.map((m, idx) => ({
      label: m,
      fullname: defaultFullnames[idx]
    }));
  }, [ln.months]);

  // Translate product entities based on active language
  const localizedDetailedProducts = useMemo(() => {
    return DETAILED_PRODUCTS.map((p) => {
      const translatedName = PRODUCT_NAMES[language]?.[p.name] || p.name;
      return {
        ...p,
        name: translatedName
      };
    });
  }, [language]);

  // Combine initial & state variables to ensure 25 clean elements with query filters
  const filteredProducts = useMemo(() => {
    return localizedDetailedProducts.filter((item) => {
      const matchesCategory = filterType === 'all' || item.category === filterType;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [localizedDetailedProducts, filterType, searchQuery]);

  return (
    <div className="bg-slate-55 min-h-screen text-slate-900 selection:bg-[#014134] selection:text-white" id="calendar-view">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#01261d] text-white overflow-hidden pt-24 pb-16 sm:pt-[112px] sm:pb-24 md:pt-[148px] md:pb-28 text-center" id="calendar-hero">
        {/* Background Image of Fresh Packing Lines/Cool Store */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" 
            alt="GilaFruit Sorting Plant Background"
            className="w-full h-full object-cover opacity-25 pointer-events-none select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#021f18]/95 via-[#011a14]/98 to-[#011811]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center space-y-4">
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            {ln.heroTitle}
          </h1>
          <p className="text-emerald-400 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            {ln.heroSubtitle}
          </p>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-2" />
        </div>
      </div>

      {/* 2. THREE FLOATING SUMMARY CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 shadow-xl flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-800">
              <Warehouse className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-sm text-slate-900 tracking-tight">
              {ln.card1Title}
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed font-sans max-w-xs">
              {ln.card1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 shadow-xl flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="p-3 bg-teal-50 rounded-2xl text-teal-800">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-sm text-slate-900 tracking-tight">
              {ln.card2Title}
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed font-sans max-w-xs">
              {ln.card2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] border border-slate-200/80 p-6 shadow-xl flex flex-col items-center text-center space-y-4 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-800">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-sm text-slate-900 tracking-tight">
              {ln.card3Title}
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed font-sans max-w-xs">
              {ln.card3Desc}
            </p>
          </div>

        </div>
      </div>

      {/* 3. VISUAL SPLIT / DETAILED GUIDE SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Side: Illustrative Farm Basket Grid */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-emerald-800 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-1 transition-transform" />
            <img 
              src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" 
              alt="Iranian Farm Fruits Basket"
              className="relative w-full h-[320px] object-cover rounded-[2.5rem] shadow-2xl border border-white"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay indicators matching target design */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-md flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-emerald-800 font-extrabold uppercase block tracking-wider">{ln.premiumTag}</span>
                <span className="text-xs font-display font-black text-slate-900">{ln.soundCrops}</span>
              </div>
              <span className="text-[10px] bg-amber-400 text-teal-950 font-bold px-2 py-1 rounded-md">
                {ln.caliberPill}
              </span>
            </div>
          </div>

          {/* Right Side: Informative Text with custom navigation shortcuts */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans">
              {ln.textBody1}
            </p>
            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans">
              {ln.textBody2}
            </p>

            {/* Quick Filter & Quick Link Pill Buttons */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => { setFilterType('fruit'); }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#014134] hover:bg-[#012f26] text-white rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-emerald-950/20 animate-fade-in"
              >
                <Apple className="w-3.5 h-3.5 text-amber-400" />
                {ln.fruitsBtn}
              </button>
              <button
                onClick={() => { setFilterType('vegetable'); }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#014134] hover:bg-[#012f26] text-white rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-emerald-950/20"
              >
                <Sprout className="w-3.5 h-3.5 text-emerald-300" />
                {ln.vegsBtn}
              </button>
              <button
                onClick={() => onNavigate('#/catalog')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#eab308] hover:bg-[#ca8a04] text-[#012f26] rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-amber-600/20"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#012f26]" />
                {ln.catalogBtn}
              </button>
              <button
                onClick={() => onNavigate('#/packing')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#014134] hover:bg-[#012f26] text-white rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer shadow-md border border-[#012f26]/20"
              >
                <Layers className="w-3.5 h-3.5 text-amber-300" />
                {ln.packingBtn}
              </button>
            </div>
          </div>

        </div>

        {/* 4. "POINTS TO NOTE" NOTIFICATION BANNER */}
        <div className="mt-12 bg-sky-50/70 border border-sky-200 rounded-[2rem] p-6 text-left relative overflow-hidden shadow-xs">
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 pointer-events-none">
            <Info className="w-48 h-48 text-sky-800" />
          </div>
          <div className="flex gap-4 items-start relative z-10">
            <div className="p-2.5 bg-sky-100 rounded-xl text-sky-700 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 font-sans">
              <span className="text-xs font-mono font-black text-sky-850 uppercase tracking-widest block">{ln.p2nTitle}</span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                {ln.p2nBody1} <span className="bg-emerald-100/90 text-emerald-950 px-1 py-0.5 rounded-sm inline-flex items-center gap-0.5 font-extrabold"><Apple className="w-3 h-3 text-amber-500" /> {ln.p2nBody2}</span> {ln.p2nBody3}
              </p>
            </div>
          </div>
        </div>

        {/* 5. INTERMEDIATE SEGMENT HEADER */}
        <div className="mt-20 text-center space-y-2 mb-12">
          <span className="text-[10px] font-mono font-black text-emerald-800 uppercase tracking-wider block">{ln.intermediateSub}</span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
            {ln.intermediateTitle}
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
        </div>

        {/* 6. SIDE-BY-SIDE AVAVAILABILITY GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* A. LEFT COLUMN: Search & Filterable Product Availability List */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                <span className="font-display font-black text-lg text-slate-800 tracking-tight">
                  {ln.availableSeasonalProducts}
                </span>
                           {/* Embedded Categories filter */}
                <div className="flex bg-slate-100/85 p-1 rounded-xl text-[11px] font-bold border border-slate-200/60 shadow-inner">
                  <button 
                    onClick={() => setFilterType('all')}
                    className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${filterType === 'all' ? 'bg-[#014134] text-white shadow-md font-extrabold' : 'text-slate-750 hover:text-[#014134] hover:bg-slate-200/40'}`}
                  >
                    {ln.allTab}
                  </button>
                  <button 
                    onClick={() => setFilterType('fruit')}
                    className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${filterType === 'fruit' ? 'bg-[#014134] text-white shadow-md font-extrabold' : 'text-slate-750 hover:text-[#014134] hover:bg-slate-200/40'}`}
                  >
                    {ln.fruitsBtn}
                  </button>
                  <button 
                    onClick={() => setFilterType('vegetable')}
                    className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${filterType === 'vegetable' ? 'bg-[#014134] text-white shadow-md font-extrabold' : 'text-slate-755 hover:text-[#014134] hover:bg-slate-200/40'}`}
                  >
                    {ln.vegsBtn}
                  </button>
                </div>
              </div>

              {/* Search input bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder={ln.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200/80 focus:border-[#014134] text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none transition-colors shadow-inner"
                />
              </div>
            </div>

            {/* List of custom seasonal product cards */}
            <div className="space-y-4">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-455 font-sans">
                  <p className="font-semibold text-sm">{ln.noProductsFound}</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setFilterType('all'); }}
                    className="mt-3 text-xs font-bold text-emerald-850 underline hover:text-amber-500 cursor-pointer"
                  >
                    {ln.resetFilters}
                  </button>
                </div>
              ) : (
                filteredProducts.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-3.5xl border border-slate-200/85 p-5 shadow-sm space-y-4 hover:border-slate-300 transition-colors"
                  >
                    {/* Header info row */}
                    <div className="flex items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border border-slate-100 select-none shadow-xs"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left">
                          <h4 className="font-display font-black text-slate-900 text-sm sm:text-base tracking-tight inline-flex items-center gap-1.5">
                            {item.name}
                          </h4>
                          <p className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                            {ln.availableMonthsHeader}
                          </p>
                        </div>
                      </div>

                      {/* Pill status badge on the right */}
                      <div>
                        {item.status === 'Available' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-250/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            ✓ {ln.availablePill}
                          </span>
                        )}
                        {item.status === 'Limited' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-250/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            {ln.limitedPill}
                          </span>
                        )}
                        {item.status === 'Unavailable' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-rose-50 text-rose-600 border border-rose-250/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                            ✕ {ln.unavailablePill}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* 12 Months outline container boxes */}
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-1.5 sm:gap-2">
                      {item.months.map((isPresent, mIdx) => {
                        let styling = "bg-slate-50 text-slate-400 border-slate-100/80";
                        if (isPresent) {
                          if (item.status === 'Limited' && (mIdx === 4 || mIdx === 5 || mIdx === 6)) {
                            // Highlights in Limited yellow/orange styles
                            styling = "bg-amber-100/80 text-amber-900 font-extrabold border-amber-300";
                          } else {
                            styling = "bg-emerald-100/90 text-emerald-950 font-extrabold border-emerald-250 shadow-xs";
                          }
                        }
                        return (
                          <div 
                            key={mIdx}
                            className={`px-1 py-1.5 text-center rounded-xl text-[10px] sm:text-xs font-mono font-bold border transition-colors ${styling}`}
                            title={`${item.name} is ${isPresent ? 'Available' : 'Unavailable'} in ${monthsList[mIdx].fullname}`}
                          >
                            {monthsList[mIdx].label}
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex justify-start">
                      <button 
                        onClick={() => onNavigate('#/products')}
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-850 hover:text-amber-500 transition-colors uppercase tracking-widest font-sans cursor-pointer"
                      >
                        {ln.viewDetails} <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>

          {/* B. RIGHT COLUMN: Standard Guideline Sidebar info card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Guide Card Box */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-md space-y-6 sticky top-28">
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-base text-slate-900 tracking-tight">
                  {ln.guideCardTitle}
                </h3>
                <p className="text-xs text-slate-550 leading-relaxed font-sans font-medium">
                  {ln.guideCardDesc}
                </p>
              </div>

              {/* Status Guide list */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-wider">
                  {ln.statusGuideHeader}
                </span>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-250/20 shrink-0">
                      ✓ {ln.statusAvailable}
                    </span>
                    <p className="text-[11px] text-slate-550 leading-normal font-sans">
                      {ln.descAvailable}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-250/20 shrink-0">
                      {ln.statusLimited}
                    </span>
                    <p className="text-[11px] text-slate-550 leading-normal font-sans">
                      {ln.descLimited}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-rose-50 text-rose-600 border border-rose-250/20 shrink-0">
                      {ln.statusUnavailable}
                    </span>
                    <p className="text-[11px] text-slate-550 leading-normal font-sans">
                      {ln.descUnavailable}
                    </p>
                  </div>
                </div>

              </div>

              {/* Monthly guide sample pills */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-wider block">
                  {ln.monthIndicatorGuide}
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  {ln.monthIndicatorSubset}
                </p>

                <div className="grid grid-cols-4 gap-1.5">
                  {monthsList.slice(0, 12).map((mObj, idx) => {
                    let st = "bg-slate-105 text-slate-400 border-slate-150";
                    if (idx < 6) st = "bg-emerald-100/95 text-emerald-950 border border-emerald-250 shadow-xs";
                    if (idx === 9) st = "bg-amber-100/90 text-amber-900 border border-amber-350 shadow-xs";
                    return (
                      <div key={idx} className={`px-1 py-1.5 text-center rounded-xl text-[10px] font-mono font-bold border select-none ${st}`}>
                        {mObj.label}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-2.5 pt-3 text-[11px] text-slate-650">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-250 inline-block shadow-xs"></span>
                    <span>{ln.availablePill}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-350 inline-block shadow-xs"></span>
                    <span>{ln.limitedPill}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-150 inline-block"></span>
                    <span>{ln.unavailablePill}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
