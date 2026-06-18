import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Truck, Anchor, ShieldCheck, Flame, Compass, 
  MapPin, CheckCircle, ChevronRight, Activity, Zap, ExternalLink,
  ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { useLanguage } from '../context/LanguageContext';

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

const COUNTRY_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: { ru: 'Russia', iq: 'Iraq', ae: 'United Arab Emirates', in: 'India', om: 'Oman', qa: 'Qatar', kz: 'Kazakhstan', uz: 'Uzbekistan' },
  fa: { ru: 'روسیه', iq: 'عراق', ae: 'امارات متحده عربی', in: 'هند', om: 'عمان', qa: 'قطر', kz: 'قزاقستان', uz: 'ازبکستان' },
  ru: { ru: 'Россия', iq: 'Ирак', ae: 'ОАЭ', in: 'Индия', om: 'Оман', qa: 'Катар', kz: 'Казахстан', uz: 'Узбекистан' },
  ar: { ru: 'روسيا', iq: 'العراق', ae: 'الإمارات العربية المتحدة', in: 'الهند', om: 'عمان', qa: 'قطر', kz: 'كازاخستان', uz: 'أوزبكستان' },
  tr: { ru: 'Rusya', iq: 'Irak', ae: 'Birleşik Arap Emirlikleri', in: 'Hindistan', om: 'Umman', qa: 'Katar', kz: 'Kazakistan', uz: 'Özbekistan' },
  hi: { ru: 'रूस', iq: 'इराक', ae: 'संयुक्त अरब अमीरात', in: 'भारत', om: 'ओमान', qa: 'कतर', kz: 'कजाकिस्तान', uz: 'उज्बेकिस्तान' },
  uz: { ru: 'Rossiya', iq: 'Iroq', ae: 'Birlashgan Arab Amirliklari', in: 'Hindiston', om: 'Ummon', qa: 'Qatar', kz: 'Qozog`iston', uz: 'O`zbekiston' },
  az: { ru: 'Rusiya', iq: 'İraq', ae: 'Birləşmiş Ərəb Əmirlikləri', in: 'Hindistan', om: 'Oman', qa: 'Qətər', kz: 'Qazaxıstan', uz: 'Özbəkistan' },
  uk: { ru: 'Росія', iq: 'Ірак', ae: 'Об\'єднані Арабські Емірати', in: 'Індія', om: 'Оман', qa: 'Катар', kz: 'Казахстан', uz: 'Узбекистан' }
};

const ORIGIN_TRANSLATIONS: Record<string, string> = {
  en: 'GilaFruit (IRAN)',
  fa: 'گیلافروت (ایران)',
  ru: 'GilaFruit (ИРАН)',
  ar: 'جيلافروت (إيران)',
  tr: 'GilaFruit (İRAN)',
  hi: 'गीलाफ्रूट (ईरान)',
  uz: 'GilaFruit (ERON)',
  az: 'GilaFruit (İRAN)',
  uk: 'GilaFruit (ІРАН)'
};

const PRODUCT_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    'Red Kiwi': 'Red Kiwi',
    'Celery': 'Celery',
    'Iceberg Lettuce': 'Iceberg Lettuce',
    'Romaine Lettuce': 'Romaine Lettuce',
    'Bell Pepper': 'Bell Pepper',
    'Fresh Garlic': 'Fresh Garlic',
    'Cabbage': 'Cabbage',
    'Kiwifruit': 'Kiwifruit',
    'Tomato': 'Tomato',
    'Hayward Premium Kiwi': 'Hayward Premium Kiwi',
    'Capsicum': 'Capsicum',
    'Cauliflower': 'Cauliflower',
    'Broccoli': 'Broccoli',
    'Hayward Green Kiwi': 'Hayward Green Kiwi',
    'Apples': 'Apples',
    'White Garlic': 'White Garlic',
    'Red Apples': 'Red Apples',
    'Sweet Bell Pepper': 'Sweet Bell Pepper',
    'Premium Herbs': 'Premium Herbs',
    'Roman Lettuce': 'Roman Lettuce',
    'Hayward Kiwi': 'Hayward Kiwi',
    'Green Apples': 'Green Apples',
    'Fresh Capsicum': 'Fresh Capsicum',
    'Red Kiwifruit': 'Red Kiwifruit',
    'Premium Kiwifruit': 'Premium Kiwifruit',
    'Sweet Bell Peppers': 'Sweet Bell Peppers',
    'Cabagges': 'Cabbages',
    'Celery/Greens': 'Celery / Greens'
  },
  fa: {
    'Red Kiwi': 'کیوی سرخ',
    'Celery': 'کرفس تازه صادراتی',
    'Iceberg Lettuce': 'کاهو آیسبرگ شسته شده',
    'Romaine Lettuce': 'کاهو رومانو ممتاز',
    'Bell Pepper': 'فلفل دلمه‌ای رنگی',
    'Fresh Garlic': 'سیر باکیفیت',
    'Cabbage': 'کلم پیچ دزفول',
    'Kiwifruit': 'کیوی هایوارد تالش',
    'Tomato': 'گوجه گلخانه‌ای',
    'Hayward Premium Kiwi': 'کیوی صادراتی هایوارد تالش',
    'Capsicum': 'فلفل دلمه‌ای ممتاز',
    'Cauliflower': 'گل کلم صادراتی',
    'Broccoli': 'کلم بروکلی تازه',
    'Hayward Green Kiwi': 'کیوی هایوارد درجه‌یک',
    'Apples': 'سیب سرخ و زرد دماوند',
    'White Garlic': 'سیر تمیز همدان',
    'Red Apples': 'سیب قرمز مراغه',
    'Sweet Bell Pepper': 'فلفل دلمه‌ای صادراتی',
    'Premium Herbs': 'سبزیجات معطر وبویا',
    'Roman Lettuce': 'کاهو رومانو ممتاز',
    'Hayward Kiwi': 'کیوی هایوارد تالش',
    'Green Apples': 'سیب سبز ارومیه',
    'Fresh Capsicum': 'فلفل دلمه‌ای رنگی',
    'Red Kiwifruit': 'کیوی تو سرخ تالش',
    'Premium Kiwifruit': 'کیوی ممتاز کاغذی',
    'Sweet Bell Peppers': 'فلفل دلمه‌ای صادراتی',
    'Cabagges': 'کلم باکیفیت داف',
    'Celery/Greens': 'کرفس و سبزیجات هاب'
  },
  ru: {
    'Red Kiwi': 'Красный киви',
    'Celery': 'Сельдерей',
    'Iceberg Lettuce': 'Салат Айсберг',
    'Romaine Lettuce': 'Салат Романо',
    'Bell Pepper': 'Болгарский перец',
    'Fresh Garlic': 'Свежий чеснок',
    'Cabbage': 'Капуста',
    'Kiwifruit': 'Киви',
    'Tomato': 'Томат',
    'Hayward Premium Kiwi': 'Киви Хейворд Премиум',
    'Capsicum': 'Капсикум',
    'Cauliflower': 'Цветная капуста',
    'Broccoli': 'Брокколи',
    'Hayward Green Kiwi': 'Зеленый киви Хейворд',
    'Apples': 'Яблоки',
    'White Garlic': 'Белый чеснок',
    'Red Apples': 'Красные яблоки',
    'Sweet Bell Pepper': 'Сладкий болгарский перец',
    'Premium Herbs': 'Пряные травы',
    'Roman Lettuce': 'Римский салат Романо',
    'Hayward Kiwi': 'Киви Хейворд',
    'Green Apples': 'Зеленые яблоки',
    'Fresh Capsicum': 'Свежий сладкий перец',
    'Red Kiwifruit': 'Розовый/Красный киви',
    'Premium Kiwifruit': 'Премиальный киви',
    'Sweet Bell Peppers': 'Сладкие перцы',
    'Cabagges': 'Капуста белокочанная',
    'Celery/Greens': 'Сельдерей и зелень'
  },
  ar: {
    'Red Kiwi': 'الكيوي الأحمر',
    'Celery': 'الكرفس الطازج',
    'Iceberg Lettuce': 'خس أيسبرغ تصديري',
    'Romaine Lettuce': 'الخس الروماني الفاخر',
    'Bell Pepper': 'الفلفل الحلو الملون',
    'Fresh Garlic': 'الثوم الطازج بمذاق رائع',
    'Cabbage': 'الملفوف البلدي الصافي',
    'Kiwifruit': 'ثمار الكيوي',
    'Tomato': 'الطماطم المحمية',
    'Hayward Premium Kiwi': 'كيوي هايفارد فاخر للتصدير',
    'Capsicum': 'الفليفلة الحلوة',
    'Cauliflower': 'القرنبيط والزهرة',
    'Broccoli': 'البروكلي الأخضر الطازج',
    'Hayward Green Kiwi': 'كيوي هايفارد الأخضر',
    'Apples': 'تفاح هضاب إيران',
    'White Garlic': 'الثوم الأبيض الجاف',
    'Red Apples': 'التفاح الأحمر الفاخر',
    'Sweet Bell Pepper': 'الفلفل الحلو الملون',
    'Premium Herbs': 'أعشاب ونعناع مميز',
    'Roman Lettuce': 'خس روماني ممتاز',
    'Hayward Kiwi': 'كيوي هيفارد تالش',
    'Green Apples': 'التفاح الأخضر الحامض',
    'Fresh Capsicum': 'الفليفلة الطازجة',
    'Red Kiwifruit': 'الكيوي الأحمر النادر',
    'Premium Kiwifruit': 'الكيوي الفاخر للتصدير',
    'Sweet Bell Peppers': 'الفلفل الرومي الطازج',
    'Cabagges': 'الكرنب الطازج الفاخر',
    'Celery/Greens': 'كرفس وخضار ورقية صادرة'
  },
  tr: {
    'Red Kiwi': 'Kırmızı Kivi',
    'Celery': 'Taze Kereviz Sapı',
    'Iceberg Lettuce': 'Aysberg Marul',
    'Romaine Lettuce': 'Yedikule Marul',
    'Bell Pepper': 'Dolmalık Biber',
    'Fresh Garlic': 'Taze Sarımsak',
    'Cabbage': 'Lahana Başları',
    'Kiwifruit': 'Hayward Kivi',
    'Tomato': 'Sera Domatesi',
    'Hayward Premium Kiwi': 'Hayward Premium Kivi',
    'Capsicum': 'Kapya Biber',
    'Cauliflower': 'Karnabahar',
    'Broccoli': 'Taze Brokoli',
    'Hayward Green Kiwi': 'Hayward Yeşil Kivi',
    'Apples': 'Kırmızı ve Sarı Elma',
    'White Garlic': 'Taze Beyaz Sarımsak',
    'Red Apples': 'Kırmızı Elma',
    'Sweet Bell Pepper': 'Tatlı Biber Çeşitleri',
    'Premium Herbs': 'Taze Yeşillikler',
    'Roman Lettuce': 'Yedikule/Romano Marul',
    'Hayward Kiwi': 'Hayward Kivi',
    'Green Apples': 'Yeşil Ekşi Elma',
    'Fresh Capsicum': 'Renkli Tatlı Biber',
    'Red Kiwifruit': 'Kırmızı Kivi',
    'Premium Kiwifruit': 'Süper Kivi',
    'Sweet Bell Peppers': 'Dolmalık Biberler',
    'Cabagges': 'Taze Lahana',
    'Celery/Greens': 'Kereviz ve Yeşillik'
  },
  hi: {
    'Red Kiwi': 'लाल कीवीफ्रूट',
    'Celery': 'ताजा अजवाइन',
    'Iceberg Lettuce': 'आइसबर्ग लेट्यूस',
    'Romaine Lettuce': 'रोमेन लेट्यूस',
    'Bell Pepper': 'शिमला मिर्च रंगीन',
    'Fresh Garlic': 'ताजा लहसुन उत्तम',
    'Cabbage': 'पत्ता गोभी ताजा',
    'Kiwifruit': 'हाइवर्ड कीवीफ्रूट',
    'Tomato': 'टमाटर उत्तम',
    'Hayward Premium Kiwi': 'हाइवर्ड प्रीमियम कीवी',
    'Capsicum': 'शिमला मिर्च',
    'Cauliflower': 'फूलगोभी ताजा',
    'Broccoli': 'ब्रोकोली ताजा',
    'Hayward Green Kiwi': 'हाइवर्ड ग्रीन कीवी',
    'Apples': 'सेब ताजे नस्लें',
    'White Garlic': 'सफेद लहसुन सूखा',
    'Red Apples': 'लाल सेब रसीले',
    'Sweet Bell Pepper': 'मीठी शिमला मिर्च',
    'Premium Herbs': 'प्रीमियम ताजा धनिया पुदीना',
    'Roman Lettuce': 'रोमन लेट्यूस ताजी',
    'Hayward Kiwi': 'हाइवर्ड कीवी',
    'Green Apples': 'हरे सेब',
    'Fresh Capsicum': 'ताजा शिमला मिर्च रंगीन',
    'Red Kiwifruit': 'लाल कीवी',
    'Premium Kiwifruit': 'प्रीमियम कीवी',
    'Sweet Bell Peppers': 'रंगीन मीठी शिमला मिर्च',
    'Cabagges': 'पत्ता गोभी वेरायटी',
    'Celery/Greens': 'अजवाइन एवं हरी भाजी'
  },
  uz: {
    'Red Kiwi': 'Qizil kivi',
    'Celery': 'Selderey (toking)',
    'Iceberg Lettuce': 'Aysberg salat bargi',
    'Romaine Lettuce': 'Romayno salatlari',
    'Bell Pepper': 'Shirin qalampir rangi',
    'Fresh Garlic': 'Sarimsoq piyoz',
    'Cabbage': 'Kalam karami',
    'Kiwifruit': 'Xitoy kivisi',
    'Tomato': 'Yangi pomidor',
    'Hayward Premium Kiwi': 'A\'lo Hayward Kivisi',
    'Capsicum': 'Qizil qalampir',
    'Cauliflower': 'Gulkaram yangi',
    'Broccoli': 'Brokkoli yangi',
    'Hayward Green Kiwi': 'Yashil Hayward kivisi',
    'Apples': 'Sarhal olma navlari',
    'White Garlic': 'Toza sarimsoq',
    'Red Apples': 'Qizil olma shirin',
    'Sweet Bell Pepper': 'Shirin qalampir rangli',
    'Premium Herbs': 'Xushbo`y ziravorlar',
    'Roman Lettuce': 'Romen salat turi',
    'Hayward Kiwi': 'Tales Hayward kivisi',
    'Green Apples': 'Yashil nordon olma',
    'Fresh Capsicum': 'Tuxumli shirin qalampir',
    'Red Kiwifruit': 'Qizil rangli kivi hovuz',
    'Premium Kiwifruit': 'Premium Kivi hosil',
    'Sweet Bell Peppers': 'Bolgar qalampiri shirin',
    'Cabagges': 'Karamboshlar ko\'p',
    'Celery/Greens': 'Selderey va yangi ko\'katlar'
  },
  az: {
    'Red Kiwi': 'Qırmızı kivi',
    'Celery': 'Kərəviz təzə',
    'Iceberg Lettuce': 'Aysberq kahı',
    'Romaine Lettuce': 'Romano kahı növləri',
    'Bell Pepper': 'Şirin bibər rəngli',
    'Fresh Garlic': 'Təzə baş sarımsaq',
    'Cabbage': 'Baş kələm dəniz',
    'Kiwifruit': 'Hayward şirin kivi',
    'Tomato': 'Sera pomidoru',
    'Hayward Premium Kiwi': 'Seçilmiş Hayward premium kivi',
    'Capsicum': 'Şirin bibər növü',
    'Cauliflower': 'Gül kələm dondurma',
    'Broccoli': 'Təzə brokoli',
    'Hayward Green Kiwi': 'Həmsərhəd Hayward yaşıl kivi',
    'Apples': 'Təzə şirin alma',
    'White Garlic': 'Ağ sarımsaq təmiz',
    'Red Apples': 'Maragheh qırmızı almaı',
    'Sweet Bell Pepper': 'İpək şirin şaxəli bibər',
    'Premium Herbs': 'Təravətli göyərti süfrəsi',
    'Roman Lettuce': 'Romano Kahısı',
    'Hayward Kiwi': 'Hayward Kivi talış',
    'Green Apples': 'Urmiya yaşıl turş alması',
    'Fresh Capsicum': 'Təzə bolqar bibəri',
    'Red Kiwifruit': 'İrandan qırmızı kivi',
    'Premium Kiwifruit': 'Super Keyfiyyətli Kivi',
    'Sweet Bell Peppers': 'Şirin fəsil bibərləri',
    'Cabagges': 'Təzə kələm sexi',
    'Celery/Greens': 'Kərəviz və təzə göyərtilər'
  },
  uk: {
    'Red Kiwi': 'Червоний ківі',
    'Celery': 'Селера свіжа',
    'Iceberg Lettuce': 'Салат Айсберг',
    'Romaine Lettuce': 'Салат Романо',
    'Bell Pepper': 'Болгарський перець солодкий',
    'Fresh Garlic': 'Свіжий сортовий часник',
    'Cabbage': 'Свіжа капуста',
    'Kiwifruit': 'Ківі Хейворд',
    'Tomato': 'Свіжі томати',
    'Hayward Premium Kiwi': 'Преміальний ківі Hayward',
    'Capsicum': 'Перець солодкий',
    'Cauliflower': 'Цвітна капуста',
    'Broccoli': 'Свіжа броколі',
    'Hayward Green Kiwi': 'Зелений ківі Hayward',
    'Apples': 'Свіжі сортові яблука',
    'White Garlic': 'Білий сухий часник',
    'Red Apples': 'Червоні солодкі яблука',
    'Sweet Bell Pepper': 'Солодкий сортовий перець',
    'Premium Herbs': 'Свіжа зелень та кінза',
    'Roman Lettuce': 'Римський салат Романо',
    'Hayward Kiwi': 'Ківі сорту Хейворд',
    'Green Apples': 'Зелені кислі яблука',
    'Fresh Capsicum': 'Перець болгарський',
    'Red Kiwifruit': 'Червоний солодкий ківі',
    'Premium Kiwifruit': 'Ківі сортовий преміум',
    'Sweet Bell Peppers': 'Солодкі болгарські перці',
    'Cabagges': 'Капуста різних сортів',
    'Celery/Greens': 'Сполучна селера та зелень'
  }
};

const COUNTRY_DETAILS_TRANSLATIONS: Record<string, Record<string, { transit: string; dist: string; port: string; status: string }>> = {
  en: {
    ru: { transit: '4 - 6 Days', dist: '2,500 km', port: 'Astrakhan Port / Moscow Central', status: 'Daily Cold-Chain Shipments' },
    iq: { transit: '1 - 2 Days', dist: '650 km', port: 'Erbil Coldrooms / Baghdad Market', status: 'High-Volume Land Logistics' },
    ae: { transit: '2 - 3 Days', dist: '1,200 km', port: 'Jebel Ali Port (Dubai)', status: 'Active Marine Reefer' },
    in: { transit: '8 - 10 Days', dist: '3,200 km', port: 'Nhava Sheva Port (Mumbai)', status: 'Strategic Reefer Container lines' },
    om: { transit: '3 Days', dist: '1,400 km', port: 'Sohar Port / Muscat Terminals', status: 'Weekly Marine Logistics' },
    qa: { transit: '2 Days', dist: '1,100 km', port: 'Hamad Port (Doha)', status: 'Active Marine Port Access' },
    kz: { transit: '4 - 5 Days', dist: '1,900 km', port: 'Almaty Railway Reefer Terminal', status: 'Active Rail Cold-Chain' },
    uz: { transit: '4 Days', dist: '1,650 km', port: 'Tashkent Distribution Center', status: 'Active Land Route' }
  },
  fa: {
    ru: { transit: '۴ تا ۶ روز', dist: '۲,۵۰۰ کیلومتر', port: 'بندر آستراخان / پایانه مسکو', status: 'ارسال روزانه زنجیره سرد جاده‌ای' },
    iq: { transit: '۱ تا ۲ روز', dist: '۶۵۰ کیلومتر', port: 'سردخانه‌های اربیل / بازار بغداد', status: 'ترانزیت زمینی مستمر تریلی' },
    ae: { transit: '۲ تا ۳ روز', dist: '۱,۲۰۰ کیلومتر', port: 'بندر جبل علی (دبی)', status: 'ارسال منظم دریایی کانتینر مبرد' },
    in: { transit: '۸ تا ۱۰ روز', dist: '۳,۲۰۰ کیلومتر', port: 'بندر ناوا شیوا (بمبئی)', status: 'تحت پوشش کانتینر CA مبرد دریایی' },
    om: { transit: '۳ روز', dist: '۱,۴۰۰ کیلومتر', port: 'بندر صحار / هاب توزیع مسقط', status: 'سرویس دریایی مبرد هفتگی عمومی' },
    qa: { transit: '۲ روز', dist: '۱,۱۰۰ کیلومتر', port: 'بندر حمد (دوحه)', status: 'ترانزیت منظم بوسیله لجستیک خلیج فارس' },
    kz: { transit: '۴ تا ۵ روز', dist: '۱,۹۰۰ کیلومتر', port: 'پایانه ریلی یخچال‌دار آلماتی', status: 'ترانزیت فعال ریلی فصلی' },
    uz: { transit: '۴ روز', dist: '۱,۶۵۰ کیلومتر', port: 'هاب توزیع مرکزی تاشکند', status: 'ارسال مستقیم رمپ زمینی مبرد' }
  },
  ru: {
    ru: { transit: '4 - 6 Дней', dist: '2,500 км', port: 'Порт Астрахань / Терминал Москва', status: 'Ежедневные поставки в холодовой цепи' },
    iq: { transit: '1 - 2 Дня', dist: '650 км', port: 'Холодильники Эрбиля / Рынок Багдада', status: 'Диспетчеризация сухопутных фур' },
    ae: { transit: '2 - 3 Дня', dist: '1,200 км', port: 'Порт Джебель-Али (Дубай)', status: 'Морские реф-контейнеры активны' },
    in: { transit: '8 - 10 Дней', dist: '3,200 км', port: 'Порт Нава-Шева (Мумбаи)', status: 'Контейнерные морские реф-перевозки' },
    om: { transit: '3 Дня', dist: '1,400 км', port: 'Порт Сохар / Терминалы Маската', status: 'Еженедельный морской реф-транспорт' },
    qa: { transit: '2 Дня', dist: '1,100 км', port: 'Порт Хамад (Доха)', status: 'Прямой морской транзит' },
    kz: { transit: '4 - 5 Дней', dist: '1,900 км', port: 'Ж/Д Рефрижераторный Терминал Алматы', status: 'Действующий ж/д реф-коридор' },
    uz: { transit: '4 Дня', dist: '1,650 км', port: 'Центр Распределения Ташкента', status: 'Постоянный наземный автокоридор' }
  },
  ar: {
    ru: { transit: '٤ - ٦ أيام', dist: '٢,٥٠٠ كم', port: 'ميناء أستراخان / وسط موسكو', status: 'شحنات يومية مجمدة لوجستية' },
    iq: { transit: '١ - ٢ يوم', dist: '٦٥٠ كم', port: 'مستودعات أربيل / أسواق بغداد', status: 'طريق بري مستمر للشاحنات' },
    ae: { transit: '٢ - ٣ أيام', dist: '١,٢٠٠ كم', port: 'ميناء جبل علي (دبي)', status: 'شحن حاويات مبردة نشط' },
    in: { transit: '٨ - ١٠ أيام', dist: '٣,٢٠٠ كم', port: 'ميناء نهافا شيفا (مومباي)', status: 'خطوط حاويات مبردة استراتيجية' },
    om: { transit: '٣ أيام', dist: '١,٤٠٠ كم', port: 'ميناء صحار / محطة مسقط', status: 'لوجستيات بحرية أسبوعية' },
    qa: { transit: 'يومين', dist: '١,١٠٠ كم', port: 'ميناء حمد (الدوحة)', status: 'وصول بحري جمركي مباشر' },
    kz: { transit: '٤ - ٥ أيام', dist: '١,٩٠٠ كم', port: 'محطة ألماتي للسكك الحديدية المبردة', status: 'ترانزيت قطارات مبردة مستمر' },
    uz: { transit: '٤ أيام', dist: '١,٦٥٠ كم', port: 'مركز توزيع تاشقند المركزي', status: 'مسار بري مباشر للشاحنات المبردة' }
  },
  tr: {
    ru: { transit: '4 - 6 Gün', dist: '2.500 km', port: 'Astrakhan Limanı / Moskova Merkez', status: 'Günlük Soğuk Zincir Sevkiyatı' },
    iq: { transit: '1 - 2 Gün', dist: '650 km', port: 'Erbil Soğuk Depoları / Bağdat Pazarı', status: 'Sürekli Kara Yolu Taşımacılığı' },
    ae: { transit: '2 - 3 Gün', dist: '1.200 km', port: 'Jebel Ali Limanı (Dubai)', status: 'Aktif Denizyolu Reefer Taşımacılığı' },
    in: { transit: '8 - 10 Gün', dist: '3.200 km', port: 'Nhava Sheva Limanı (Mumbai)', status: 'Stratejik Reefer Konteyner Nakliyesi' },
    om: { transit: '3 Gün', dist: '1.400 km', port: 'Sohar Limanı / Maskat Terminalleri', status: 'Haftalık Denizyolu Soğuk Zincir' },
    qa: { transit: '2 Gün', dist: '1.100 km', port: 'Hamad Limanı (Doha)', status: 'Aktif Denizyolu Terminal Erişim' },
    kz: { transit: '4 - 5 Gün', dist: '1.900 km', port: 'Almatı Demiryolu Soğuk Terminali', status: 'Aktif Raylı Soğuk Lojistik Koridoru' },
    uz: { transit: '4 Gün', dist: '1.650 km', port: 'Taşkent Dağıtım Merkezi', status: 'Aktif Karayolu Frigo Sevkiyatları' }
  },
  hi: {
    ru: { transit: '4 - 6 दिन', dist: '2,500 किमी', port: 'अस्ट्राखान पोर्ट / मास्को सेंट्रल', status: 'दैनिक कोल्ड-चेन शिपमेंट्स' },
    iq: { transit: '1 - 2 दिन', dist: '650 किमी', port: 'एर्बिल कोल्डरूम / बगदाद बाजार', status: 'लैंड लॉजिस्टिक्स हैवी ट्रक्स' },
    ae: { transit: '2 - 3 दिन', dist: '1,200 किमी', port: 'जेबेल अली पोर्ट (दुबई)', status: 'सक्रिय समुद्री रीफर सेवा' },
    in: { transit: '8 - 10 दिन', dist: '3,200 किमी', port: 'नहावा शेवा पोर्ट (मुंबई)', status: 'रीफर कंटेनर लाइनें सतत' },
    om: { transit: '3 दिन', dist: '1,400 किमी', port: 'सोहर बंदरगाह / मस्कट हब', status: 'साप्ताहिक समुद्री शिपिंग लाइन्स' },
    qa: { transit: '2 दिन', dist: '1,100 किमी', port: 'हमाद पोर्ट (दोहा)', status: 'सक्रिय समुद्री बंदरगाह लॉजिस्टिक्स' },
    kz: { transit: '4 - 5 दिन', dist: '1,900 किमी', port: 'अल्माटी रेलवे रीफर टर्मिनल', status: 'रेलवे कोल्ड चेन सुचारू' },
    uz: { transit: '4 दिन', dist: '1,650 किमी', port: 'ताशकंद वितरण केंद्र मुख्यालय', status: 'सक्रिय लैंड फ्रूट ट्रेलर लाइन्स' }
  },
  uz: {
    ru: { transit: '4 - 6 Kun', dist: '2,500 km', port: 'Astraxan porti / Moskva markazi', status: 'Kundalik sovuq zanjir yuklari' },
    iq: { transit: '1 - 2 Kun', dist: '650 km', port: 'Erbil muzxonalari / Bag`dod bozori', status: 'Katta hajmli quruqlik transporti' },
    ae: { transit: '2 - 3 Kun', dist: '1,200 km', port: 'Jebel Ali porti (Dubay)', status: 'Faol dengiz muzlatgichli transporti' },
    in: { transit: '8 - 10 Kun', dist: '3,200 km', port: 'Nhava Sheva porti (Mumbay)', status: 'Strategik dengiz muzlatgichli liniyasi' },
    om: { transit: '3 Kun', dist: '1,400 km', port: 'Sohar porti / Maskat terminalleri', status: 'Haftalik dengiz transporti' },
    qa: { transit: '2 Kun', dist: '1,100 km', port: 'Hamad porti (Doha)', status: 'Dengiz porti orqali faol bog`lanish' },
    kz: { transit: '4 - 5 Kun', dist: '1,900 km', port: 'Olmaota temir yo`l muzlatgich kargo', status: 'Faol temir yo`l sovuq zanjiri' },
    uz: { transit: '4 Kun', dist: '1,650 km', port: 'Toshkent tarqatish markazi dahlizi', status: 'Faol quruqlik marshruti' }
  },
  az: {
    ru: { transit: '4 - 6 Gün', dist: '2,500 km', port: 'Həştərxan Limanı / Moskva Mərkəzi', status: 'Gündəlik Soyuq Zəncir Tədarükü' },
    iq: { transit: '1 - 2 Gün', dist: '650 km', port: 'Ərbil Soyuducu Anbarları / Bağdad', status: 'Yüksək Həcmli Quru Loqistika' },
    ae: { transit: '2 - 3 Gün', dist: '1,200 km', port: 'Cebel Əli Limanı (Dubay)', status: 'Aktiv Dəniz Reefer Daşınması' },
    in: { transit: '8 - 10 Gün', dist: '3,200 km', port: 'Nhava Sheva Limanı (Mumbay)', status: 'Stratejik Reefer Konteyner Xəttləri' },
    om: { transit: '3 Gün', dist: '1,400 km', port: 'Sohar Limanı / Maskat Terminalı', status: 'Həftəlik Dəniz Soyuq Zəncir' },
    qa: { transit: '2 Gün', dist: '1,100 km', port: 'Hamad Limanı (Doha)', status: 'Aktiv Dəniz Portu Çıxışı' },
    kz: { transit: '4 - 5 Gün', dist: '1,900 km', port: 'Almatı Dəmiryolu Soyuducu Stansiya', status: 'Aktiv Dəmiryolu Soyuq Zənciri' },
    uz: { transit: '4 Gün', dist: '1,650 km', port: 'Daşkənd Mərkəzi Dağıtım Deposu', status: 'Aktiv Quru Frigo Şəbəkəsi' }
  },
  uk: {
    ru: { transit: '4 - 6 Днів', dist: '2,500 км', port: 'Порт Астрахань / Термінал Москва', status: 'Щоденні поставки в рефрижераторах' },
    iq: { transit: '1 - 2 Дні', dist: '650 км', port: 'Холодильники Ербіля / Ринок Багдада', status: 'Постійна доставка сухопутними фурами' },
    ae: { transit: '2 - 3 Дні', dist: '1,200 км', port: 'Порт Джебель-Алі (Дубай)', status: 'Морські реф-перевезення активні' },
    in: { transit: '8 - 10 Днів', dist: '3,200 км', port: 'Порт Нава-Шева (Мумбаї)', status: 'Морські рефрижераторні контейнери' },
    om: { transit: '3 Дні', dist: '1,400 км', port: 'Порт Сохар / Термінали Маската', status: 'Щотижневе морське сполучення' },
    qa: { transit: '2 Дні', dist: '1,100 км', port: 'Порт Хамад (Доха)', status: 'Постійне морське реф-сполучення' },
    kz: { transit: '4 - 5 Днів', dist: '1,900 км', port: 'Залізничний реф-термінал Алмати', status: 'Залізничний реф-коридор активний' },
    uz: { transit: '4 Дні', dist: '1,650 км', port: 'Центр Розподілу Ташкента', status: 'Постійний автотранспортний фриго-канал' }
  }
};

const MAP_TRANSLATIONS: Record<string, any> = {
  en: {
    liveMonitor: "Live Transit Monitor & Active Corridors",
    tradeHubTitle: "GilaFruit Global Export Trade Hub",
    tradeHubDesc: "Interactive visual displaying real-time cooling supply corridors from Gilan packhouse facilities straight to wholesale hubs.",
    animateOn: "Animate Stream: ON",
    animateOff: "Animate Stream: OFF",
    activeCorridorsCount: "Active Corridors",
    activeSelectedCorridor: "Active Selected Corridor",
    gilanToTarget: "Secure cold-chain logistics from Gilan, Iran to {target}.",
    logisticsType: "Logistics Type",
    transitDuration: "Transit Duration",
    estDistance: "Est. Distance",
    statusLabel: "Status",
    statusActive: "● ACTIVE",
    deliveryPort: "Primary Delivery Port / Hub",
    coreProductsExported: "Core Products Exported",
    logisticTypes: {
      coldChain: "Cold-Chain",
      marineReefer: "Marine Reefer",
      railCargo: "Rail Cargo"
    },
    defaultHub: {
      globalHub: "Global Packaging Hub",
      complexName: "GilaFruit Central Complex",
      complexLoc: "(Gilan, Iran)",
      complexDesc: "The premier agricultural pre-cooling, optical sorting, and advanced cardboard packaging center in Northern Iran.",
      exportLines: "Export Lines",
      sixLines: "6 Active Lines",
      preCooling: "Pre-Cooling tech",
      coolingType: "❄️ Hydro / Air-jet",
      coldStorage: "Cold Storage",
      tonnes: "🏢 10,000+ Tonnes",
      opStatus: "Operation Status",
      onlineStatus: "● ONLINE (QC HQ)",
      transitOutlets: "Primary Transit Exit Outlets",
      exitDesc: "🚢 Anzali / Astara Ports & Caspi Trans",
      certifiedCrops: "Main Fresh Crops Certified"
    },
    controls: {
      selectCountry: "Select Destination Country to Monitor",
      resetButton: "Reset (Focus Iran Hub)",
      loadingGeodata: "LOADING VECTOR GEODATA...",
      geomapLabel: "GEO LAT-LONG CALIGNED",
      supplyStream: "GilaFruit Supply Stream"
    },
    legends: {
      truckTitle: "Reefer Truck Dispatching",
      truckDesc: "Continuous direct land-logistics line utilizing insulated heavy-freight temperature regulated thermo-trucks (Russia, Iraq, Uzbekistan).",
      seaTitle: "Maritime Reefer Shipping",
      seaDesc: "Premium shipping line utilizing controlled atmosphere (CA) 40ft reefer containers to achieve maximum freshness and shelf life preservation (UAE, Doha, India).",
      phytoTitle: "100% Phyto-Inspection Safety",
      phytoDesc: "All packaging and cooling corridors are fully ISO, HACCP, and SGS certified, securing seamless customs clearance at ports of arrival."
    }
  },
  fa: {
    liveMonitor: "نمایش برخط ترانزیت فعال و دالان‌های ترابری",
    tradeHubTitle: "مرکز تجارت و دالان بین‌المللی صادرات گیلافروت",
    tradeHubDesc: "ترسیم چندرسانه‌ای تعاملی مسیرهای ترانزیت زنجیره سرد از پایانه‌های بسته‌بندی گیلان به مقاصد تجاری جهان.",
    animateOn: "متحرک‌سازی مسیر: روشن",
    animateOff: "متحرک‌سازی مسیر: خاموش",
    activeCorridorsCount: "دالان‌های فعال",
    activeSelectedCorridor: "دالان ترانزیتی فعال انتخابی",
    gilanToTarget: "پشتیبانی ارسال زنجیره سرد متمایز از گیلان، ایران به {target}.",
    logisticsType: "نوع باربری و ترابری",
    transitDuration: "دوره تخمینی ترانزیت",
    estDistance: "مسافت حمل مرسوله",
    statusLabel: "وضعیت ارسال بار",
    statusActive: "● فعال و در حال تردد",
    deliveryPort: "بندرگاه ورودی / ایستگاه توزیع نهایی",
    coreProductsExported: "اقلام ترانزیت شده اصلی",
    logisticTypes: {
      coldChain: "ترموتراک زنجیره سرد",
      marineReefer: "کانتینر مبرد دریایی",
      railCargo: "ترانزیت مسقف ریلی"
    },
    defaultHub: {
      globalHub: "پایانه بسته‌بندی مرکزی",
      complexName: "مجتمع صنایع غذایی گیلافروت",
      complexLoc: "(گیلان، ایران)",
      complexDesc: "برترین مرکز مجهز پیش‌سرمایش هیدروکولینگ، سورت هوشمند نوری و کارتن‌سازی صادراتی در شمال ایران.",
      exportLines: "خطوط فعال آماده‌سازی",
      sixLines: "۶ لاین آماده‌سازی فعال",
      preCooling: "فناوری پیش‌سرمایش",
      coolingType: "❄️ هیدرو / ایرجت پیشرفته",
      coldStorage: "ظرفیت سردخانه",
      tonnes: "🏢 بیش از ۱۰,۰۰۰ تن",
      opStatus: "وضعیت عملیاتی پایانه",
      onlineStatus: "● فعال (برخط - ستاد هماهنگی)",
      transitOutlets: "درگاه‌های خروجی فرامرزی صادرات",
      exitDesc: "🚢 بنادر انزلی، آستارا و مرز ریلی کژین (Caspian)",
      certifiedCrops: "مهم‌ترین اقلام کشاورزی دارای تاییدیه قرنطینه"
    },
    controls: {
      selectCountry: "کشور هدف را جهت رهگیری دالان انتخاب کنید",
      resetButton: "بازنشانی (مرکزیت گیلان)",
      loadingGeodata: "در حال بارگذاری داده‌های برداری جغرافیایی تعاملی...",
      geomapLabel: "انطباق مختصات مرزی کالیبر شده",
      supplyStream: "جریان ترانزیت گیلافروت"
    },
    legends: {
      truckTitle: "ترابری ترموتراک جاده‌ای صادراتی",
      truckDesc: "ارسال مستمر و مستقیم زمینی با مجهزترین کامیون‌های یخچال‌دار مجهز به سیستم پایش آنلاین دما (روسیه، عراق، ازبکستان).",
      seaTitle: "حمل و نقل دریایی مبرد رفر",
      seaDesc: "خط کشتیرانی برتر با کانتینرهای ۴۰ فوت کنترل اتمسفر (CA) برای حفظ شادابی کامل و ماندگاری حداکثری (امارات، هند، قطر).",
      phytoTitle: "۱۰۰٪ تایید صلاحیت فایتو سانحه",
      phytoDesc: "کلیه سالن‌های آماده‌سازی و کوریدورهای خنک‌کننده دارای تاییدیه بهداشت گیاهی و گواهی مکتوب ISO و SGS هستند."
    }
  },
  ru: {
    liveMonitor: "Мониторинг транзита и активные коридоры",
    tradeHubTitle: "Глобальный экспортный хаб GilaFruit",
    tradeHubDesc: "Интерактивная визуализация путей холодовой цепи поставки из упаковочных цехов Ирана на оптовые рынки мира.",
    animateOn: "Анимация: ВКЛ",
    animateOff: "Анимация: ВЫКЛ",
    activeCorridorsCount: "Активные коридоры",
    activeSelectedCorridor: "Выбранный коридор транзита",
    gilanToTarget: "Безопасная холодовая цепь доставки из Гиляна, Иран в {target}.",
    logisticsType: "Тип транспорта",
    transitDuration: "Сроки доставки",
    estDistance: "Расстояние пути",
    statusLabel: "Статус поставки",
    statusActive: "● АКТИВЕН",
    deliveryPort: "Основной порт прибытия / Хаб",
    coreProductsExported: "Ключевые экспортируемые товары",
    logisticTypes: {
      coldChain: "Рефрижератор",
      marineReefer: "Морской рефрижератор",
      railCargo: "Ж/Д Карго"
    },
    defaultHub: {
      globalHub: "Главный упаковочный комплекс",
      complexName: "Центральный комплекс GilaFruit",
      complexLoc: "(Гилян, Иран)",
      complexDesc: "Ведущий агрокомплекс высокотехнологичного охлаждения, лазерного сортинга и упаковки в Северном Иране.",
      exportLines: "Линии экспорта",
      sixLines: "6 Активных Линий",
      preCooling: "Охлаждение Hydrojet",
      coolingType: "❄️ Водное и Воздушное",
      coldStorage: "Вместимость складов",
      tonnes: "🏢 10,000+ Тонн",
      opStatus: "Статус терминала",
      onlineStatus: "● РАБОТАЕТ В СЕТИ",
      transitOutlets: "Выездные таможенные пункты",
      exitDesc: "🚢 Порты Энзели, Астара и линия Caspian",
      certifiedCrops: "Отгружаемый сертифицированный урожай"
    },
    controls: {
      selectCountry: "Выберите страну для мониторинга",
      resetButton: "Сбросить обзор (Иран Хаб)",
      loadingGeodata: "ЗАГРУЗКА ВЕКТОРНЫХ ДАННЫХ...",
      geomapLabel: "КООРДИНАТЫ ГЕО-КАЛИБРОВАНЫ",
      supplyStream: "Поток снабжения GilaFruit"
    },
    legends: {
      truckTitle: "Авто-Рефрижераторы",
      truckDesc: "Непрерывный наземный транзит в изолированных тяжелых термогрузовиках с датчиками температуры (Россия, Ирак, Узбекистан).",
      seaTitle: "Морские реф-контейнеры",
      seaDesc: "Премиальные морские перевозки в 40-футовых контейнерах с автоматической газовой средой (ОАЭ, Доха, Индия).",
      phytoTitle: "100% Фитосанитарная Очистка",
      phytoDesc: "Все упаковочные цеха и линии сертифицированы ISO, HACCP и SGS, гарантируя прохождение таможни без задержек."
    }
  },
  ar: {
    liveMonitor: "مراقبة الترانزيت المباشر والممرات النشطة",
    tradeHubTitle: "مرزب دالان التصدير العالمي ل محصولات جيلافروت",
    tradeHubDesc: "مرئيات تفاعلية تعرض ممرات التوريد المبردة في الوقت الفعلي من مرافق التعبئة ب جيلان الإيرانية إلى مراكز الجملة.",
    animateOn: "الرسوم المتحركة: تشغيل",
    animateOff: "الرسوم المتحركة: إيقاف",
    activeCorridorsCount: "الممرات النشطة",
    activeSelectedCorridor: "الممر المختار لنقل المحاصيل",
    gilanToTarget: "خدمات لوجستية موثوقة في درجات حرارة خاضعة للرقابة من جيلان إلى {target}.",
    logisticsType: "نوع النقل والتبريد",
    transitDuration: "فترة النقل المتوقعة",
    estDistance: "المسافة التقريبية",
    statusLabel: "الحالة الجمركية",
    statusActive: "● ممر نشط",
    deliveryPort: "المستلم النهائي / ميناء الوصول",
    coreProductsExported: "المحاصيل المصدرة عبر الممر",
    logisticTypes: {
      coldChain: "خط سلسلة التبريد البري",
      marineReefer: "حاويات الشحن المبردة البحرية",
      railCargo: "ترانزيت سكك حديدية"
    },
    defaultHub: {
      globalHub: "مركز التعبئة العالمي",
      complexName: "مجمع جيلافروت المركزي",
      complexLoc: "(جيلان، إيران)",
      complexDesc: "المركز الزراعي الأول للتبريد المسبق، السورتينغ البصري، والتغليف بالكرتون عالي المتانة بمحافظة جيلان الإيرانية.",
      exportLines: "خطوط التصدير بالمركز",
      sixLines: "6 خطوط فرز نشطة متوازية",
      preCooling: "تقنيات التبريد المسبق",
      coolingType: "❄️ تبريد مائي وجاف",
      coldStorage: "غرف التخزين المبردة",
      tonnes: "🏢 10,000+ طن متوفرة",
      opStatus: "حالة تشغيل الغرف والخطوط",
      onlineStatus: "● قيد التشغيل والعمل الفوري",
      transitOutlets: "المنفذ الجمركي الرئيسي للخروج",
      exitDesc: "🚢 بنادر أنزلي، آستارا وخط سكة حديد Caspian",
      certifiedCrops: "أبرز المحاصيل الزراعية المصدقة بالكامل"
    },
    controls: {
      selectCountry: "حدد بلد المقصد لمراقبة مسار الشحن",
      resetButton: "إعادة تعيين التركيز (إيران هاب)",
      loadingGeodata: "جاري تحميل البيانات الجغرافية المعايرة...",
      geomapLabel: "الإحداثيات الجغرافية مطابقة ومتناسقة",
      supplyStream: "مجرى التوريد ل محصولات جيلافروت"
    },
    legends: {
      truckTitle: "نقل الشاحنات المبردة",
      truckDesc: "تصدير بري مباشر ومستمر عبر شاحنات نقل ثقيل معزولة ومبردة بتحكم حراري صارم (روسيا، العراق، أوزبكستان).",
      seaTitle: "شحن مبرّد بالبحر الدولي",
      seaDesc: "خط ملاحة مميز لاستخدام حاويات 40 قدم ذات تبريد اتمسفيري مخصص لحفظ كامل نضارة المنتجات (الإمارات، قطر، الهند).",
      phytoTitle: "فحص صحة نباتي مصدق 100%",
      phytoDesc: "جميع صالات الفرز والتعبئة مجهزة تمامًا ومطابقة لمعايير الجودة الدولية الحاصلة على نظام الأيزو و SGS لضمان تخليص جمركي فوري."
    }
  },
  tr: {
    liveMonitor: "Canlı Transit İzleme ve Aktif Koridorlar",
    tradeHubTitle: "GilaFruit Global İhracat Ticaret Merkezi",
    tradeHubDesc: "Gilan paketleme tesislerinden küresel toptancı ağlarına kadar gerçek zamanlı soğuk zincir lojistik koridorlarını sergileyen interaktif harita.",
    animateOn: "Akış Animasyonu: AÇIK",
    animateOff: "Akış Animasyonu: KAPALI",
    activeCorridorsCount: "Aktif Koridorda Teyit",
    activeSelectedCorridor: "Seçilen Aktif Koridor",
    gilanToTarget: "Gilan, İran'dan {target} pazarına güvenli soğuk zincir takibi.",
    logisticsType: "Lojistik Tipi",
    transitDuration: "Sevkiyat Süresi",
    estDistance: "Yol Mesafesi",
    statusLabel: "Durum",
    statusActive: "● AKTİF",
    deliveryPort: "Ana Teslimat Limanı / Merkez",
    coreProductsExported: "İhraç Edilen Ana Ürünler",
    logisticTypes: {
      coldChain: "Soğuk Zincir",
      marineReefer: "Denizyolu Reefer",
      railCargo: "Demiryolu Kargo"
    },
    defaultHub: {
      globalHub: "Global Paketleme Merkezi",
      complexName: "GilaFruit Merkez Kompleksi",
      complexLoc: "(Gilan, İran)",
      complexDesc: "Kuzey İran'daki en büyük tarımsal ön soğutma, optik tasnif ve gelişmiş karton ambalajlama kompleksi.",
      exportLines: "İhracat Hatları",
      sixLines: "6 Aktif Hat",
      preCooling: "Ön Soğutma Teknolojisi",
      coolingType: "❄️ Sulu / Jet Hava",
      coldStorage: "Soğuk Depo Kapasitesi",
      tonnes: "🏢 10,000+ Ton",
      opStatus: "Operasyon Durumu",
      onlineStatus: "● ÇEVRİMİÇİ (Merkez)",
      transitOutlets: "Başlıca Sınır Çıkış Noktaları",
      exitDesc: "🚢 Anzali / Astara Limanları ve Hazar Demiryolu",
      certifiedCrops: "Sertifikalı Ana Taze Ürünler"
    },
    controls: {
      selectCountry: "Canlı Sevkiyat İçin Hedef Ülke Seçin",
      resetButton: "Sıfırla (İran Merkez)",
      loadingGeodata: "COĞRAFİ VERİLER YÜKLENİYOR...",
      geomapLabel: "GEO LAT-LONG KOORDİNATLARI UYUMLU",
      supplyStream: "GilaFruit Tedarik Hattı"
    },
    legends: {
      truckTitle: "Frigorifik Tır Sevkiyatı",
      truckDesc: "Sıcaklık ayarlı ve yalıtımlı ağır vasıta frigorifik tır filomuzla kesintisiz kara nakliyesi (Rusya, Irak, Özbekistan).",
      seaTitle: "Denizyolu Reefer Taşımacılığı",
      seaDesc: "Maksimum tazelik ve raf ömrü uzatma amacıyla kontrollü atmosfer (CA) 40ft reefer konteynerlerin kullanıldığı özel denizyolu dondurucu hattı (BAE, Katar, Hindistan).",
      phytoTitle: "%100 Bitki Sağlığı ve Güvenliği",
      phytoDesc: "Tüm paketleme ve soğutma dökümleri ISO, HACCP ve SGS onaylı olup, gümrük kapılarında beklemesiz hızlı geçiş sağlar."
    }
  },
  hi: {
    liveMonitor: "लाइव ट्रांजिट मॉनिटर और सक्रिय कॉरिडोर",
    tradeHubTitle: "गीलाफ्रूट ग्लोबल एक्सपोर्ट ट्रेड हब",
    tradeHubDesc: "गिलान पैकहाउस सुविधाओं से अंतरराष्ट्रीय थोक केंद्रों तक वास्तविक समय में कीपर आपूर्ति श्रृंखला का प्रदर्शन।",
    animateOn: "एनिमेशन प्रवाह: चालू",
    animateOff: "एनिमेशन प्रवाह: बंद",
    activeCorridorsCount: "सक्रिय कॉरिडोर",
    activeSelectedCorridor: "सक्रिय चयनित कॉरिडोर",
    gilanToTarget: "नेत्रहीन कोल्ड-चेन लॉजिस्टिक्स गिलान, ईरान से {target} तक।",
    logisticsType: "लॉजिस्टिक्स प्रकार",
    transitDuration: "पारगमन अवधि",
    estDistance: "अनुमानित दूरी",
    statusLabel: "स्थिति",
    statusActive: "● सक्रिय",
    deliveryPort: "प्राथमिक वितरण पोर्ट / हब",
    coreProductsExported: "निर्यात किए जाने वाले मुख्य उत्पाद",
    logisticTypes: {
      coldChain: "कोल्ड-चेन",
      marineReefer: "समुद्री रीफर",
      railCargo: "रेल कार्गो"
    },
    defaultHub: {
      globalHub: "ग्लोबल पैकेजिंग हब",
      complexName: "गीलाफ्रूट सेंट्रल कॉम्प्लेक्स",
      complexLoc: "(गिलान, ईरान)",
      complexDesc: "उत्तरी ईरान में प्रमुख कृषि प्री-कूलिंग, ऑप्टिकल सॉर्टिंग और उन्नत कार्डबोर्ड पैकेजिंग केंद्र।",
      exportLines: "निर्यात लाइनें",
      sixLines: "6 सक्रिय लाइनें",
      preCooling: "प्री-कूलिंग तकनीक",
      coolingType: "❄️ हाइड्रो / एयर-जेट",
      coldStorage: "कोल्ड स्टोरेज क्षमता",
      tonnes: "🏢 10,000+ टन",
      opStatus: "परिचालन स्थिति",
      onlineStatus: "● ऑनलाइन (मुख्यालय)",
      transitOutlets: "मुख्य पारगमन निकास मार्ग",
      exitDesc: "🚢 अंजली / अस्टारा बंदरगाह और कैस्पीय रेल",
      certifiedCrops: "प्रमाणित मुख्य कृषि उत्पाद"
    },
    controls: {
      selectCountry: "निगरानी के लिए गंतव्य देश का चयन करें",
      resetButton: "रीसेट (ईरान हब)",
      loadingGeodata: "जियोडाटा लोड हो रहा है...",
      geomapLabel: "भौगोलिक स्थिति कैलिब्रेटेड है",
      supplyStream: "गीलाफ्रूट आपूर्ति धारा"
    },
    legends: {
      truckTitle: "रीफर ट्रक डिस्पैचिंग",
      truckDesc: "तापमान नियंत्रित और अछूता रेफ्रिजरेटर ट्रकों (रूस, इराक, उज्बेकिस्तान) का उपयोग करके निरंतर भूमि रसद।",
      seaTitle: "समुद्री रीफर शिपिंग",
      seaDesc: "ताजगी को अधिकतम बनाए रखने के लिए नियंत्रित वातावरण (CA) 40 फीट रीफर कंटेनरों का उपयोग करने वाली प्रीमियम समुद्री शिपिंग लाइन (यूएई, कतर, भारत)।",
      phytoTitle: "100% फाइटो-सर्टिफिकेशन सुरक्षा",
      phytoDesc: "हमारे सभी पैकहाउस कॉरिडोर ISO, HACCP और SGS द्वारा पूरी तरह से प्रमाणित हैं, जिससे सीमा बंदरगाहों पर त्वरित निकासी सुनिश्चित होती है।"
    }
  },
  uz: {
    liveMonitor: "Jonli tranzit monitoringi va faol yo'laklar",
    tradeHubTitle: "GilaFruit global eksport savdo markazi",
    tradeHubDesc: "Gilan qadoqlash korxonalaridan to'g'ridan-to'g'ri ulgurji bozorlargacha bo'lgan dahlizlarni ko'rsatadigan interaktiv xarita.",
    animateOn: "Animatsiya: YONIQ",
    animateOff: "Animatsiya: O'CHIQ",
    activeCorridorsCount: "Faol yo'laklar",
    activeSelectedCorridor: "Tanlangan faol yo'lak",
    gilanToTarget: "Gilan, Erondan {target}ga xavfsiz sovuq oraliqlarni ta'minlaydigan transport oqimi.",
    logisticsType: "Logistika turi",
    transitDuration: "Yuborish muddati",
    estDistance: "Est. masofa",
    statusLabel: "Status",
    statusActive: "● FAOL",
    deliveryPort: "Bosh yetkazib berish porti / markazi",
    coreProductsExported: "Eksport qilinadigan asosiy mahsulotlar",
    logisticTypes: {
      coldChain: "Sovuq zanjir",
      marineReefer: "Dengiz muzlatgichi",
      railCargo: "Temir yo'l yuk"
    },
    defaultHub: {
      globalHub: "Global qadoqlash markazi",
      complexName: "GilaFruit logistika majmuasi",
      complexLoc: "(Gilan, Eron)",
      complexDesc: "Shimoliy Erondagi etakchi qishloq xo'jaligi oldindan sovutish, optik saralash va kartonli qadoqlash markazi.",
      exportLines: "Eksport liniyalari",
      sixLines: "6 ta faol liniya",
      preCooling: "sovutish texnologiyasi",
      coolingType: "❄️ Gidro / Havo oqimi",
      coldStorage: "Muzlatgich omborlar",
      tonnes: "🏢 10,000+ Tonna",
      opStatus: "Amaliyot holati",
      onlineStatus: "● ONLINE (Shtab)",
      transitOutlets: "Asosiy chegara chiqish uzelIari",
      exitDesc: "🚢 Anzali / Astara portlari va Kaspiy tranziti",
      certifiedCrops: "Sertifikatlangan asosiy qishloq xo'jaligi mahsulotlari"
    },
    controls: {
      selectCountry: "Kuzatish uchun maqsad mamlakatni tanlang",
      resetButton: "Qayta yuklash (Eron markaziga)",
      loadingGeodata: "HUKUMAT GEODATALAR YUKLANMOQDA...",
      geomapLabel: "GEOGRAFIK MUVOLIFAT KALIBRLANGAN",
      supplyStream: "GilaFruit yetkazib berish liniyasi"
    },
    legends: {
      truckTitle: "Izolyatsiyalangan muzlatgich yuk mashinalari",
      truckDesc: "Harorata nazorat qilinadigan termo-yuk mashinalari yordamida uzluksiz quruqlikdagi logistika yo'nalishi (Rossiya, Iroq, O'zbekiston).",
      seaTitle: "Dengiz muzlatgichli yuk tashish",
      seaDesc: "Tazelikni maksimal darajada saqlash uchun 40 futlik maxsus reefer konteynerlaridan foydalanadigan premium dengiz yuk tashish transporti (BAA, Qatar, Hindiston).",
      phytoTitle: "100% Phyto-tekshiruv xavfsizligi",
      phytoDesc: "Barcha qadoqlash va sovutish liniyalari ISO, HACCP va SGS tomonidan to'liq sertifikatlangan bo'lib, chegaralarda yuklarni to'siqsiz rasmiylashtirishni kafolatlaydi."
    }
  },
  az: {
    liveMonitor: "Canlı Tranzit Monitoru və Aktiv Dəhlizlər",
    tradeHubTitle: "GilaFruit Qlobal İxrac Ticarət Mərkəzi",
    tradeHubDesc: "Gilan paketləmə mərkəzindən qlobal topdansatış qovşaqlarına qədər real vaxt soyuq zəncir loqistika axını nümayiş etdirən interaktiv vizual.",
    animateOn: "Axın Animasiyası: AÇIQ",
    animateOff: "Axın Animasiyası: QAPALI",
    activeCorridorsCount: "Aktiv dəhliz sayı",
    activeSelectedCorridor: "Seçilmiş tranzit dəhlizi",
    gilanToTarget: "Gilan, İrandan {target} bazarına etibarlı soyuq zəncir tədarükü.",
    logisticsType: "Logistika Tipi",
    transitDuration: "Daşınma Müddəti",
    estDistance: "Yol Məsafəsi",
    statusLabel: "Status",
    statusActive: "● AKTİV",
    deliveryPort: "Birləşdirilmiş Təslimat Limanı / Qovşağı",
    coreProductsExported: "İxrac olunan əsas kənd təsərrüfatı məhsulları",
    logisticTypes: {
      coldChain: "Soyuq Zəncir",
      marineReefer: "Dəniz Reefer konteyneri",
      railCargo: "Dəmiryolu Kargo"
    },
    defaultHub: {
      globalHub: "Qlobal Qablaşdırma Qovşağı",
      complexName: "GilaFruit Mərkəzi Kompleksi",
      complexLoc: "(Gilan, İran)",
      complexDesc: "Şimali İranda əsas soyutma, optik çeşidləmə və inkişaf etmiş karton qablaşdırma mərkəzi.",
      exportLines: "İxrac Xətləri",
      sixLines: "6 Aktiv Xətt",
      preCooling: "Ön Soyutma Texnologiyası",
      coolingType: "❄️ Hidro / Hava axını",
      coldStorage: "Soyuq depolama tutumu",
      tonnes: "🏢 10,000+ Ton",
      opStatus: "Əməliyyat statusu",
      onlineStatus: "● AKTİV (Qərargah)",
      transitOutlets: "Başlıca Sərhəd Çıxış Məntəqələri",
      exitDesc: "🚢 Anzali / Astara Limanları və Həsrət Dəmiryolu",
      certifiedCrops: "Sertifikatlaşdırılmış Əsas Təzə Məhsullar"
    },
    controls: {
      selectCountry: "İzləmək üçün hədəf ölkəni seçin",
      resetButton: "Sıfırla (İran Qərargahı)",
      loadingGeodata: "COĞRAFİ MƏLUMATLAR YÜKLƏNİR...",
      geomapLabel: "KOORDİNATLAR GEOFİZİKİ UYĞUNDUR",
      supplyStream: "GilaFruit Tədarük Axını"
    },
    legends: {
      truckTitle: "Ref-Konteynerli Tır Daşımacılığı",
      truckDesc: "İzolyasiya edilmiş soyutmalı ağır furqon tırlar ilə fasiləsiz quru daşımacılığı (Rusiya, İraq, Özbəkistan).",
      seaTitle: "Dəniz mətbuatlı dondurucular",
      seaDesc: "Məhsulların təravətini qorumaq üçün 45 futluq xüsusi dondurucu və nəzarət olunan qaz mühitindən istifadə edən loqistika dəhlizi (BƏƏ, Qətər, Hindistan).",
      phytoTitle: "100% Bitki Sağlamlığı Təsdiqi",
      phytoDesc: "Bütün çeşidləməvə soyutma dəhlizləri ISO, HACCP və SGS sertifikatlıdır ki, sərhəd gümrük məntəqələrində vaxt itkisinə son qoyur."
    }
  },
  uk: {
    liveMonitor: "Моніторинг транзиту та активні коридори",
    tradeHubTitle: "Глобальний експортний хаб GilaFruit",
    tradeHubDesc: "Інтерактивна візуалізація рефрижераторних транспортних коридорів прямо з пакувальних центрів Гіляна на оптові ринки.",
    animateOn: "Анімація: УВІМК",
    animateOff: "Анімація: ВИМК",
    activeCorridorsCount: "Активні коридори",
    activeSelectedCorridor: "Вибраний транзитний коридор",
    gilanToTarget: "Надійне рефрижераторне сполучення з Гіляну, Іран в {target}.",
    logisticsType: "Тип транспортування",
    transitDuration: "Терміни доставки",
    estDistance: "Відстань транзиту",
    statusLabel: "Статус",
    statusActive: "● АКТИВНИЙ",
    deliveryPort: "Основний хаб / порт прибуття",
    coreProductsExported: "Ключеві експортовані культури",
    logisticTypes: {
      coldChain: "Холодовий Ланцюг",
      marineReefer: "Контейнер рефрижераторний морський",
      railCargo: "Залізничне Карго"
    },
    defaultHub: {
      globalHub: "Головний пакувальний комплекс",
      complexName: "Центральний комплекс GilaFruit",
      complexLoc: "(Гілян, Іран)",
      complexDesc: "Провідний агрокомплекс для попереднього охолодження, автокалібрування та упаковки в Ірані.",
      exportLines: "Експортні лінії",
      sixLines: "6 Активних Ліній",
      preCooling: "Попереднє охолодження Hydro",
      coolingType: "❄️ Гідро та Повітряне",
      coldStorage: "Місткість холодильних складів",
      tonnes: "🏢 10,000+ Тонн",
      opStatus: "Поточний статус роботи",
      onlineStatus: "● ПРАЦЮЄ В МЕРЕЖІ",
      transitOutlets: "Виїзні пункти митного контролю",
      exitDesc: "🚢 Порти Ензелі, Астара та лінія Caspian",
      certifiedCrops: "Сертифікований урожай для завантаження"
    },
    controls: {
      selectCountry: "Оберіть країну для відстеження поставок",
      resetButton: "Скинути фокус (Хаб Іран)",
      loadingGeodata: "ЗАВАНТАЖЕННЯ ГЕОГРАФІЧНИХ ДАНИХ...",
      geomapLabel: "КООРДИНАТИ ПОВНІСТЮ СИНХРОНІЗОВАНІ",
      supplyStream: "Торговий канал поставок GilaFruit"
    },
    legends: {
      truckTitle: "Авто-Рефрижератори",
      truckDesc: "Безперервний сухопутний транзит в ізольованих термовантажівках з точним термоконтролем (Росія, Ірак, Узбекистан).",
      seaTitle: "Морські перевезення реф-контейнерами",
      seaDesc: "Преміальные морські перевезення в 40-футових контейнерах з контрольованим газовим середовищем для максимальної свіжості в портах призначення (ОАЕ, Катар, Індія).",
      phytoTitle: "100% Фітосанитарний контроль та сертифікація",
      phytoDesc: "Усі пакувальні цехи та коридори відповідають стандартам ISO, HACCP та SGS, забезпечуючи швидке та безпроблемне проходження митниці."
    }
  }
};

export default function ExportWorldMap() {
  const { language, direction } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [animateLanes, setAnimateLanes] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  const tM = MAP_TRANSLATIONS[language] || MAP_TRANSLATIONS['en'];
  const prodT = PRODUCT_TRANSLATIONS[language] || PRODUCT_TRANSLATIONS['en'];
  const detailsT = COUNTRY_DETAILS_TRANSLATIONS[language] || COUNTRY_DETAILS_TRANSLATIONS['en'];

  // GilaFruit core export countries & precise geographic coordinates (Longitude, Latitude)
  const exportCountries: ExportCountry[] = [
    {
      id: 'ru',
      name: 'Russia',
      faName: 'روسیه',
      coordinates: [37.6173, 55.7558], // Moscow Central
      products: ['Red Kiwi', 'Celery', 'Iceberg Lettuce', 'Romaine Lettuce', 'Bell Pepper'],
      transitTime: detailsT.ru.transit,
      distance: detailsT.ru.dist,
      type: 'truck',
      port: detailsT.ru.port,
      status: detailsT.ru.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'iq',
      name: 'Iraq',
      faName: 'عراق',
      coordinates: [44.3661, 33.3152], // Baghdad
      products: ['Fresh Garlic', 'Cabbage', 'Kiwifruit', 'Romaine Lettuce', 'Tomato'],
      transitTime: detailsT.iq.transit,
      distance: detailsT.iq.dist,
      type: 'truck',
      port: detailsT.iq.port,
      status: detailsT.iq.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'ae',
      name: 'United Arab Emirates',
      faName: 'امارات متحده عربی',
      coordinates: [55.2708, 25.2048], // Dubai / Jebel Ali
      products: ['Hayward Premium Kiwi', 'Capsicum', 'Cauliflower', 'Broccoli'],
      transitTime: detailsT.ae.transit,
      distance: detailsT.ae.dist,
      type: 'sea',
      port: detailsT.ae.port,
      status: detailsT.ae.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'in',
      name: 'India',
      faName: 'هند',
      coordinates: [72.8777, 19.0760], // Mumbai / Nhava Sheva
      products: ['Hayward Green Kiwi', 'Apples', 'White Garlic'],
      transitTime: detailsT.in.transit,
      distance: detailsT.in.dist,
      type: 'sea',
      port: detailsT.in.port,
      status: detailsT.in.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'om',
      name: 'Oman',
      faName: 'عمان',
      coordinates: [58.4059, 23.5859], // Muscat / Sohar Port
      products: ['Celery', 'Red Apples', 'Iceberg Lettuce'],
      transitTime: detailsT.om.transit,
      distance: detailsT.om.dist,
      type: 'sea',
      port: detailsT.om.port,
      status: detailsT.om.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'qa',
      name: 'Qatar',
      faName: 'قطر',
      coordinates: [51.5310, 25.2854], // Doha / Hamad Port
      products: ['Sweet Bell Pepper', 'Premium Herbs', 'Roman Lettuce'],
      transitTime: detailsT.qa.transit,
      distance: detailsT.qa.dist,
      type: 'sea',
      port: detailsT.qa.port,
      status: detailsT.qa.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'kz',
      name: 'Kazakhstan',
      faName: 'قزاقستان',
      coordinates: [76.8512, 43.2220], // Almaty
      products: ['Hayward Kiwi', 'White Garlic', 'Green Apples'],
      transitTime: detailsT.kz.transit,
      distance: detailsT.kz.dist,
      type: 'rail',
      port: detailsT.kz.port,
      status: detailsT.kz.status,
      bgDot: 'bg-emerald-500'
    },
    {
      id: 'uz',
      name: 'Uzbekistan',
      faName: 'ازبکستان',
      coordinates: [69.2401, 41.2995], // Tashkent
      products: ['Fresh Capsicum', 'Red Kiwifruit', 'Celery'],
      transitTime: detailsT.uz.transit,
      distance: detailsT.uz.dist,
      type: 'truck',
      port: detailsT.uz.port,
      status: detailsT.uz.status,
      bgDot: 'bg-emerald-500'
    }
  ];

  // Precise geographic origin: Gilan Packhouses near Caspian coast (Iran)
  const origin = { 
    coordinates: [49.5886, 37.2809] as [number, number], // Gilan Province Longitude, Latitude
    name: ORIGIN_TRANSLATIONS[language] || ORIGIN_TRANSLATIONS['en']
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
    // Default overview focused on Middle East & Western Asia
    const defaultCenter: [number, number] = [53.0, 36.5];
    const defaultScale = 430;

    let targetCenter = defaultCenter;
    let targetScale = defaultScale;

    if (activeCountry) {
      // Smoothly offset center closer to the target country coordinates
      const midLon = (origin.coordinates[0] + activeCountry.coordinates[0]) / 2;
      const midLat = (origin.coordinates[1] + activeCountry.coordinates[1]) / 2;
      targetCenter = [midLon, midLat + 4.0]; // Offset Lat slightly north to make space for labels

      // Zoom level adjusted dynamically based on transit line distance
      const distanceVal = parseInt(activeCountry.distance.replace(/[^0-9]/g, '')) || 1000;
      if (distanceVal > 2200) {
        targetScale = 320; // Russia & India zoom scale
      } else {
        targetScale = 540; // Iraq, UAE close paths
      }
    }

    return {
      center: targetCenter,
      scale: targetScale * zoomLevel
    };
  };

  // Smooth interpolation transition effect for vector focus shifting
  const [animatedProjection, setAnimatedProjection] = useState({
    center: [53.0, 36.5] as [number, number],
    scale: 430
  });

  const currentProjectionRef = useRef(animatedProjection);
  const { center, scale } = getMapProjection();

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 750; // ms duration of transition

    const startLng = currentProjectionRef.current.center[0];
    const startLat = currentProjectionRef.current.center[1];
    const startScale = currentProjectionRef.current.scale;

    const diffLng = center[0] - startLng;
    const diffLat = center[1] - startLat;
    const diffScale = scale - startScale;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      
      // Quartic easeInOut interpolation formula
      const rate = progress < 0.5 
        ? 8 * progress * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;

      const nextLng = startLng + diffLng * rate;
      const nextLat = startLat + diffLat * rate;
      const nextScale = startScale + diffScale * rate;

      const nextProj = {
        center: [nextLng, nextLat] as [number, number],
        scale: nextScale
      };

      currentProjectionRef.current = nextProj;
      setAnimatedProjection(nextProj);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [center[0], center[1], scale]);

  return (
    <div className="bg-slate-950 text-white rounded-[2.5rem] border border-slate-800 p-6 sm:p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden" dir={direction}>
      
      {/* Background radial soft light overlay simulation */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
      
      {/* Decorative Grid Mesh lines with CSS */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* Map Upper Console Bar */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-8 text-start">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-mono text-emerald-400">
              {tM.liveMonitor}
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
            {tM.tradeHubTitle}
          </h3>
          <p className="text-xs text-slate-400 font-light">
            {tM.tradeHubDesc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setAnimateLanes(!animateLanes)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              animateLanes 
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-bold' 
                : 'bg-slate-900 text-slate-400 border border-slate-800 font-bold'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 ${animateLanes ? 'animate-pulse' : ''}`} />
            {animateLanes ? tM.animateOn : tM.animateOff}
          </button>
          
          <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            {tM.activeCorridorsCount}: {exportCountries.length}
          </span>
        </div>
      </div>

      {/* Main Map Visualization Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Hand Details Side-Panel (Glassmorphic) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-slate-800 space-y-5 text-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            {activeCountry ? (
              <>
                {/* Header of Active Route */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-emerald-400 block">{tM.activeSelectedCorridor}</span>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-display text-xl font-bold text-white leading-tight">
                      {COUNTRY_TRANSLATIONS[language]?.[activeCountry.id] || activeCountry.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium font-sans">
                      ({activeCountry.faName})
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    {tM.gilanToTarget.replace('{target}', COUNTRY_TRANSLATIONS[language]?.[activeCountry.id] || activeCountry.name)}
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-start">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.logisticsType}</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      {activeCountry.type === 'truck' && <Truck className="w-3.5 h-3.5 text-emerald-400" />}
                      {activeCountry.type === 'sea' && <Anchor className="w-3.5 h-3.5 text-emerald-400" />}
                      {activeCountry.type === 'rail' && <Globe className="w-3.5 h-3.5 text-emerald-400" />}
                      {activeCountry.type === 'truck' ? tM.logisticTypes.coldChain : activeCountry.type === 'sea' ? tM.logisticTypes.marineReefer : tM.logisticTypes.railCargo}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.transitDuration}</span>
                    <span className="text-xs font-bold text-white block truncate">
                      🚀 {activeCountry.transitTime}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.estDistance}</span>
                    <span className="text-xs font-bold text-slate-300 block">
                      📏 {activeCountry.distance}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.statusLabel}</span>
                    <span className="text-[10px] font-bold text-[#a3e635] block truncate font-mono">
                      {tM.statusActive}
                    </span>
                  </div>
                </div>

                {/* Target Delivery Hub */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-start">
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.deliveryPort}</span>
                  <p className="text-xs font-bold text-slate-200">
                    🏢 {activeCountry.port}
                  </p>
                </div>

                {/* Target Export Products Checklist */}
                <div className="space-y-2 pt-1 border-t border-slate-800/60 text-start">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400 block">{tM.coreProductsExported}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCountry.products.map((p, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-emerald-950/40 text-emerald-300 border border-emerald-900/50 rounded-lg text-[10px] font-medium"
                      >
                        🌿 {prodT[p] || p}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Header for Default GilaFruit Packhouse Center */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-amber-400 block">{tM.defaultHub.globalHub}</span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h4 className="font-display text-lg sm:text-lg font-bold text-white leading-tight">
                      {tM.defaultHub.complexName}
                    </h4>
                    <span className="text-xs text-emerald-400 font-semibold font-mono">
                      {tM.defaultHub.complexLoc}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    {tM.defaultHub.complexDesc}
                  </p>
                </div>

                {/* Hub Statistics */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-start">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.defaultHub.exportLines}</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-emerald-400" />
                      {tM.defaultHub.sixLines}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.defaultHub.preCooling}</span>
                    <span className="text-xs font-bold text-white block truncate">
                      {tM.defaultHub.coolingType}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.defaultHub.coldStorage}</span>
                    <span className="text-xs font-bold text-slate-300 block">
                      {tM.defaultHub.tonnes}
                    </span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.defaultHub.opStatus}</span>
                    <span className="text-[10px] font-bold text-emerald-400 block truncate font-mono">
                      {tM.defaultHub.onlineStatus}
                    </span>
                  </div>
                </div>

                {/* Hub Entry Points */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-start">
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono block">{tM.defaultHub.transitOutlets}</span>
                  <p className="text-xs font-bold text-slate-200">
                    {tM.defaultHub.exitDesc}
                  </p>
                </div>

                {/* Core Products Catalog */}
                <div className="space-y-2 pt-1 border-t border-slate-800/60 text-start">
                  <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-slate-400 block">{tM.defaultHub.certifiedCrops}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Premium Kiwifruit', 'Celery', 'Iceberg Lettuce', 'Romaine Lettuce', 'White Garlic', 'Sweet Bell Peppers', 'Cabagges'].map((p, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-lg text-[10px] font-medium"
                      >
                        ✨ {prodT[p] || p}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Interactive B2B Quick Navigation country list selector */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-start gap-2">
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-slate-500 block">
                {tM.controls.selectCountry}
              </span>
              <button
                onClick={() => { setSelectedId(null); setZoomLevel(1.0); }}
                className={`px-2 py-0.5 rounded-md text-[8.5px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 border shrink-0 ${
                  selectedId === null 
                    ? 'bg-amber-400 text-slate-950 border-amber-400 font-black' 
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <RotateCcw className="w-2.5 h-2.5" />
                {tM.controls.resetButton.split(' ')[0]}
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {exportCountries.map((c) => {
                const isActive = c.id === selectedId;
                const localizedCountryName = COUNTRY_TRANSLATIONS[language]?.[c.id] || c.name;
                return (
                  <button
                    key={c.id}
                    onClick={() => { setSelectedId(c.id); setZoomLevel(1.0); }}
                    onMouseEnter={() => setHoveredId(c.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`py-2 px-1 rounded-xl text-[10px] font-semibold transition-all duration-300 text-center flex flex-col justify-center items-center gap-1 cursor-pointer border ${
                      isActive 
                        ? 'bg-[#3b7521] text-white border-emerald-400 shadow-md shadow-emerald-950/40 scale-105' 
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-mono text-[9px]">{c.id.toUpperCase()}</span>
                    <span className="truncate max-w-full text-[9px] font-sans font-medium">{localizedCountryName.split(' ')[0]}</span>
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

              {/* Shipping Lanes */}
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
                    {/* Soft Backglow */}
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
                    
                    {/* SOLID shipping route line */}
                    <Line
                      from={origin.coordinates}
                      to={country.coordinates}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                    />

                    {/* Traveling pulse flow effect */}
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

              {/* Target countries labels (Dynamic translations) */}
              {exportCountries.map((country) => {
                const isSelected = country.id === selectedId;
                const localizedCountryLabel = COUNTRY_TRANSLATIONS[language]?.[country.id] || country.name;

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
                        x="10"
                        y="4"
                        fill={isSelected ? '#a3e635' : '#cbd5e1'}
                        fontSize="8.5"
                        fontWeight={isSelected ? 'bold' : '600'}
                        fontFamily="Inter, system-ui, sans-serif"
                        className="hidden sm:inline pointer-events-none drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.95)]"
                      >
                        {localizedCountryLabel}
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

                  {/* High Contrast badge for IRAN origin */}
                  <g transform="translate(0, -17)" className="pointer-events-none">
                    <rect 
                      x="-30" 
                      y="-7" 
                      width="60" 
                      height="13" 
                      rx="3.5" 
                      fill="#047857" 
                      stroke="#a3e635" 
                      strokeWidth="1" 
                    />
                    <text 
                      y="2.5" 
                      fill="#FFFFFF" 
                      fontSize="7" 
                      fontWeight="black" 
                      textAnchor="middle"
                      fontFamily="Inter, sans-serif"
                    >
                      {language === 'fa' ? 'ایران (گیلان)' : 'IRAN (GILAN)'}
                    </text>
                  </g>
                </g>
              </Marker>
            </ComposableMap>

            {/* Elegant Floating Map Controls HUD */}
            <div className={`absolute top-4 ${direction === 'rtl' ? 'left-4' : 'right-4'} bg-slate-950/85 backdrop-blur-md border border-slate-800/80 rounded-2xl p-1.5 flex flex-col gap-1 z-25 shadow-2xl`}>
              <button
                onClick={() => setZoomLevel(prev => Math.min(3.0, prev + 0.25))}
                title="Zoom In"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-slate-800 hover:border-emerald-500/30"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.25))}
                title="Zoom Out"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-slate-800 hover:border-emerald-500/30"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <div className="h-[1px] bg-slate-800 my-0.5" />

              <button
                onClick={() => { setZoomLevel(1.0); setSelectedId(null); }}
                title="Reset View"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-400 text-slate-300 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer border border-slate-800 hover:border-amber-400/30"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            
            {/* Ambient Loading indicator state */}
            {!mapLoaded && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col justify-center items-center space-y-3 z-50">
                <Globe className="w-8 h-8 text-emerald-450 animate-spin" />
                <span className="text-[10px] font-mono tracking-widest text-slate-400">{tM.controls.loadingGeodata}</span>
              </div>
            )}
            
            {/* Compass HUD indicator inside container */}
            <div className={`absolute bottom-4 ${direction === 'rtl' ? 'right-4' : 'left-4'} bg-slate-950/80 border border-slate-800 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-[9px] text-[#a3e635] font-mono pointer-events-none z-10`}>
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-slate-300 tracking-wider">{tM.controls.geomapLabel}</span>
            </div>

            <div className={`absolute bottom-4 ${direction === 'rtl' ? 'left-4' : 'right-4'} bg-slate-950/80 border border-slate-800 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-[9px] text-[#a3e635] font-mono pointer-events-none z-10`}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{tM.controls.supplyStream}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Map Footer Informative Legend Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-8 border-t border-slate-800 text-start relative z-10">
        
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-200">{tM.legends.truckTitle}</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-light">
              {tM.legends.truckDesc}
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center shrink-0">
            <Anchor className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-200">{tM.legends.seaTitle}</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-light">
              {tM.legends.seaDesc}
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-xl bg-[#064e3b]/40 border border-emerald-900/50 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-200">{tM.legends.phytoTitle}</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed font-light">
              {tM.legends.phytoDesc}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
