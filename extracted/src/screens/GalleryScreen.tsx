import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Phone, Globe, Info, Apple, Sprout
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Highly polished, extensive gallery data matching the 29 crop categories requested
const galleryCategories = [
  "All", "Kiwi", "Watermelon", "Mandarin", "Dill and Parsley", "Nectar", "Grape", 
  "Bell Pepper", "Iceberg", "Romano", "Cabbage", "Celery", "Broccoli", "Eggplant", 
  "Apple", "Garlic", "Melon", "Plum", "Peach", "Apricot", "Carrot", 
  "Cauliflower", "Cherry", "Corn", "Cucumber", "Lemon", "Orange", "Potato", 
  "Tomato", "Zucchini"
];

// Farsi Category Translations Lookup
const categoryTranslations: Record<string, string> = {
  "All": "همه موارد",
  "Kiwi": "کیوی",
  "Watermelon": "هندوانه",
  "Mandarin": "نارنگی",
  "Dill and Parsley": "شوید و جعفری",
  "Nectar": "شلیل و هلو",
  "Grape": "انگور",
  "Bell Pepper": "فلفل دلمه‌ای",
  "Iceberg": "کاهو آیسبرگ",
  "Romano": "کاهو رسمی/رومانو",
  "Cabbage": "کلم دکمه‌ای/سفید",
  "Celery": "کرفس",
  "Broccoli": "کلم بروکلی",
  "Eggplant": "بادمجان",
  "Apple": "سیب سرخ و زرد",
  "Garlic": "سیر تر و خشک",
  "Melon": "ملون و خربزه",
  "Plum": "آلو شابلون",
  "Peach": "هلو زعفرانی",
  "Apricot": "زردآلو صادراتی",
  "Carrot": "هویج سورت‌شده",
  "Cauliflower": "گل کلم سفید",
  "Cherry": "گیلاس و آلبالو",
  "Corn": "ذرت شیرین",
  "Cucumber": "خیار مجلسی",
  "Lemon": "لیمو ترش",
  "Orange": "پرتقال تامسون",
  "Potato": "سیب‌زمینی خاکزاد",
  "Tomato": "گوجه‌فرنگی گلخانه‌ای",
  "Zucchini": "کدو سبز خورشتی"
};

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
  faTitle?: string;
  faDesc?: string;
}

const initialGalleryItems: GalleryItem[] = [
  // Kiwi Packings (The flagship crop)
  {
    id: 1,
    title: 'Twin Row Kiwi Grading',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600',
    desc: 'Perfect sizing process ensuring export quality standardization throughout the Eurasian reefer grid.',
    faTitle: 'سورتینگ دو ردیفه کیوی',
    faDesc: 'فرآیند گریدینگ و سورتینگ کاملا بهداشتی جهت یکدست‌سازی اندازه بار برای بازارهای فدراسیون روسیه.'
  },
  {
    id: 2,
    title: 'Plastic Basket Kiwi Pack',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600',
    desc: 'Dual-tier precise stacking on ventilated plastic baskets for robust protection against crushing.',
    faTitle: 'سبد پلاستیکی ویژه کیوی',
    faDesc: 'بسته‌بندی رجی دو ردیفه در سبدهای شیاردار جهت تسهیل گردش مداوم هوای سرد در کانتینر یخچال‌دار.'
  },
  {
    id: 3,
    title: 'Caspian Hay-Nestings Kiwi Flat',
    category: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&q=80&w=600',
    desc: 'Shock absorbing individual cell cardboard trays filled with protective hay-nestings.',
    faTitle: 'کارتن شانه سلولی کیوی با پوشال',
    faDesc: 'استفاده از شانه‌های سلولی زیست‌تخریب‌پذیر به همراه پوشال استریل‌شده برای خنثی‌سازی هرگونه تکان شدید.'
  },

  // Watermelon Packings
  {
    id: 4,
    title: 'Octagonal Single Watermelon Crate',
    category: 'Watermelon',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    desc: 'Thick octagonal carton boxes wrapping giant watermelons individually for stable maritime transport.',
    faTitle: 'کارتن هشت‌ضلعی تک هندوانه',
    faDesc: 'جعبه ضخیم اختصاصی مقوایی مقاوم در برابر رطوبت بالا برای صادرات به کشورهای حاشیه خلیج فارس.'
  },
  {
    id: 5,
    title: 'Wooden Slatted Watermelon Bin',
    category: 'Watermelon',
    image: 'https://images.unsplash.com/photo-1582281227220-3630f576add4?auto=format&fit=crop&q=80&w=600',
    desc: 'Heavy duty wooden pallet bins accommodating high quantity watermelons without skin bruising.',
    faTitle: 'پالت باکس چوبی بزرگ هندوانه',
    faDesc: 'باکس‌های پالت‌دار با استحکام فوق‌العاده بالا جهت مهار وزن بالای هندوانه‌ها در بارگیری ترانزیتی.'
  },

  // Mandarin Packings
  {
    id: 6,
    title: 'Single-Layer Premium Mandarin Box',
    category: 'Mandarin',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=600',
    desc: 'Compact, eye-catching cardboard flats showcasing selected glossy mandarins with pristine stalks.',
    faTitle: 'کارتن تک‌رج نارنگی صادراتی',
    faDesc: 'سورتینگ نارنگی‌های واکسینه‌شده برگ‌دار در شیت‌های لوکس مشکی مناسب ویترین فروشگاهی.'
  },

  // Dill and Parsley Packings
  {
    id: 7,
    title: 'Iced Herbs Packing Trough',
    category: 'Dill and Parsley',
    image: 'https://images.unsplash.com/photo-1515471204580-c11cffe9f0f9?auto=format&fit=crop&q=80&w=600',
    desc: 'Flaked ice layering over pristine local parsley packages keeping green cells alive for overland transits.',
    faTitle: 'بسته‌بندی سبزیجات با بسترهای یخی',
    faDesc: 'استفاده از خرده‌یخ‌های فشرده درون یونولیت‌های عایق برای جلوگیری از زرد شدن شوید و جعفری.'
  },

  // Nectar Packings
  {
    id: 8,
    title: 'Soft Foam Sleeve Nectarines',
    category: 'Nectar',
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?auto=format&fit=crop&q=80&w=600',
    desc: 'Nectarines protected within individual elastic foam nets, eliminating physical impact scars.',
    faTitle: 'فوم توری تکی محافظ شلیل و هلو',
    faDesc: 'پوشش الاستیک ضدضربه توری دور هر عدد محصول جهت خنثی کردن کبودی پوست حساس شلیل.'
  },

  // Grape Packings
  {
    id: 9,
    title: 'Perforated Clear Clamshell Grapes',
    category: 'Grape',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600',
    desc: 'Ventilated crystal clear punnets containing sweet grapes under strict sulfur dioxide pad protection.',
    faTitle: 'ظروف شفاف پانل‌دار انگور',
    faDesc: 'پت‌های شفاف مجهز به هواکش به همراه پدهای رطوبت‌گیر مخصوص حفظ شادابی حبه‌های انگور.'
  },

  // Bell Pepper Packings
  {
    id: 10,
    title: 'Tough Triple-Wall Bell Pepper Carton',
    category: 'Bell Pepper',
    image: 'https://images.unsplash.com/photo-1563565312-9ab2e6a52651?auto=format&fit=crop&q=80&w=600',
    desc: 'Shock-insulated cardboards with structural dividers mapping bell peppers according to color shades.',
    faTitle: 'کارتن سه‌جداره فلفل دلمه‌ای',
    faDesc: 'تفکیک‌کننده‌های کارتنی مجزا بر اساس رنگ‌بندی‌های زرد، قرمز و نارنجی با تحمل فشار بالا.'
  },

  // Iceberg Packings
  {
    id: 11,
    title: 'Vacuum-Cooled Film Mapped Lettuce',
    category: 'Iceberg',
    image: 'https://images.unsplash.com/photo-1622484211148-716598e0911a?auto=format&fit=crop&q=80&w=600',
    desc: 'Individually wrapped lettuce heads in high respiration micro-perforated polypropylene bags.',
    faTitle: 'سلفون‌پیچی وکیوم کاهو آیسبرگ',
    faDesc: 'استفاده از پوشش‌های پلیمری با قابلیت تنفس بالا پس از تخلیه سریع دمایی در اتاق پیش‌سرمایش.'
  },

  // Romano Packings
  {
    id: 12,
    title: 'Open Crate Romano Lettuce Bundle',
    category: 'Romano',
    image: 'https://images.unsplash.com/photo-1556801712-76c8eb07db00?auto=format&fit=crop&q=80&w=600',
    desc: 'Romano lettuce stacked carefully with root bases oriented outwards inside open aerated crates.',
    faTitle: 'بسته‌بندی باز کاهو رسمی',
    faDesc: 'قرارگیری عمودی ریشه‌ها در سبدهای باز جهت تسهیل آب‌رسانی و شاداب ماندن برگ‌ها در مسیر جاده.'
  },

  // Cabbage Packings
  {
    id: 13,
    title: 'High-Density Mesh Sacks Cabbage',
    category: 'Cabbage',
    image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=600',
    desc: 'Sturdy ultra-resilient polymeric mesh bags letting green cabbages breathe completely during transits.',
    faTitle: 'کیسه‌های توری فشرده کلم سفید',
    faDesc: 'کیسه توری مقاوم پلیمری با قابلیت تهویه هوا صددرصدی، مجهز به بند مهارکننده دهانه.'
  },

  // Celery Packings
  {
    id: 14,
    title: 'Pre-Wash Plastic Sleeve Celery Stalks',
    category: 'Celery',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600',
    desc: 'Hydroloaded premium celery stalks chopped & sealed inside crisp sleeve envelopes.',
    faTitle: 'کرفس سورت‌شده شسته با پوشش سلفونی',
    faDesc: 'شستشو با آب کلرینه سرد و جای‌گذاری در کاورهای بلند بهداشتی جهت استفاده آسان مصرف‌کننده نهایی.'
  },

  // Broccoli Packings
  {
    id: 15,
    title: 'Iced Insulated Styrofoam Broccoli',
    category: 'Broccoli',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=600',
    desc: 'Expanded polystyrene bins layered with wet flake-ice keeping broccoli florets from premature yellowing.',
    faTitle: 'باکس عایق کلم بروکلی با پودر یخ',
    faDesc: 'یونولیت پلاستوفوم عایق برای مسدودسازی ورود حرارت محیط و حفظ تازگی خوشه‌های سبز بروکلی.'
  },

  // Eggplant Packings
  {
    id: 16,
    title: 'Tissued Wrapping Eggplants Block',
    category: 'Eggplant',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=600',
    desc: 'Individual breathable tissue sheets guarding shiny black skin textures of eggplants.',
    faTitle: 'کاورهای کاغذی مجزای بادمجان',
    faDesc: 'پیچیدن بادمجان‌ها در کاغذهای پوستی نرم و بهداشتی جهت مهار ضربه و عرق کردن بار.'
  },

  // Apple Packings
  {
    id: 17,
    title: 'Two-Layer Cell Nesting Apple Cartons',
    category: 'Apple',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600',
    desc: 'Robust dual layer master cartons with customized tray partitions separating apple tiers.',
    faTitle: 'کارتن سیب دورج شانه‌دار',
    faDesc: 'کارتن‌های ۵ لایه صادراتی عایق رطوبت مجهز به ورقه‌های تفکیک سلولی سیب سرخ و زرد.'
  },

  // Garlic Packings
  {
    id: 18,
    title: 'Air Drv Sorina Garlic Crates',
    category: 'Garlic',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600',
    desc: 'Cured, lightweight plastic crates letting air move freely throughout the garlic roots.',
    faTitle: 'سبد سورت سیر با باد خشک',
    faDesc: 'رطوبت‌زدایی ریشه‌های سیر سفید با باد سرد سردخانه و بسته‌بندی در سبدهای زبانه دار ویژه.'
  },

  // Melon Packings
  {
    id: 19,
    title: 'Triple Slot Melon Corrugated Unit',
    category: 'Melon',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed635d?auto=format&fit=crop&q=80&w=600',
    desc: 'Extremely durable carton containers holding heavy melons firmly inside individual chambers.',
    faTitle: 'کارتن خانه‌بندی‌شده ملون',
    faDesc: 'شبکه‌بندی مقاوم کارتنی گلاسه ضخیم جهت قرارگیری ۳ الی ۴ عدد ملون صادراتی مرغوب.'
  },

  // Plum Packings
  {
    id: 20,
    title: 'Low Frame Plum Basket Flats',
    category: 'Plum',
    image: 'https://images.unsplash.com/photo-1601574901373-9b896e25a168?auto=format&fit=crop&q=80&w=600',
    desc: 'Low depth plastic frames avoiding multiple layers of plums pressing down on each other.',
    faTitle: 'سبد کم عمق آلو شابلون',
    faDesc: 'طراحی طبقه‌ای کوتاه جهت عدم انباشت بیش از حد میوه‌های هسته‌دار بر روی هم و عدم لهیدگی.'
  },

  // Peach Packings
  {
    id: 21,
    title: 'Glove Velvet Foam Wrapped Peaches',
    category: 'Peach',
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?auto=format&fit=crop&q=80&w=600',
    desc: 'Super soft foam sheet nestings crafted specifically for delicate velvet peach skin protection.',
    faTitle: 'شانه‌نشین فومی هلوهای زعفرانی',
    faDesc: 'قرارگیری ملایم تک‌تک هلوها در حفره‌های نرم اسفنجی ضدضربه‌ فرودگاهی.'
  },

  // Apricot Packings
  {
    id: 22,
    title: 'Petite Sized Ventilation Punnets Apricot',
    category: 'Apricot',
    image: 'https://images.unsplash.com/photo-1543888502-d99c439f0464?auto=format&fit=crop&q=80&w=600',
    desc: 'Small clear containers holding soft apricots during high altitude aerospace shipping schedules.',
    faTitle: 'ظروف درب‌دار هواکش‌دار زردآلو',
    faDesc: 'پت‌های بهداشتی کوچک ۵۰۰ گرمی ضد ضربه برای حفظ طعم و جلوگیری از ترکیدگی زردآلو.'
  },

  // Carrot Packings
  {
    id: 23,
    title: 'Polishing-Washed Carrot Bag Units',
    category: 'Carrot',
    image: 'https://images.unsplash.com/photo-1598170845058-32b996a6957b?auto=format&fit=crop&q=80&w=600',
    desc: 'Hydro-cooled high-grade carrots polished and bagged in vacuumed polymeric transparent sacks.',
    faTitle: 'کیسه پلیمری هویج شسته‌شده',
    faDesc: 'پرداخت براق هویج با دستگاه‌های مدرن پولیشر و توزین در بسته‌های شفاف وزن‌کشی شده.'
  },

  // Cauliflower Packings
  {
    id: 24,
    title: 'Foil Swirled Cauliflower Fresh-Keep',
    category: 'Cauliflower',
    image: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&q=80&w=600',
    desc: 'Individually wrapped cauliflower florets under dynamic nitrogen flushed film bags.',
    faTitle: 'روکش سلفونی محافظ گل‌کلم',
    faDesc: 'دستگاه‌های شیرینگ تمام‌اتوماتیک سلفون محافظ جهت بستن راه نفوذ باکتری‌ها به گل‌کلم سفید.'
  },

  // Cherry Packings
  {
    id: 25,
    title: 'Rigid Top Cherry Clamshell Box',
    category: 'Cherry',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=600',
    desc: 'Hygienic small bins tailored for delicate cherry transit preserving stalks green and strong.',
    faTitle: 'ظرف صلب محافظ گیلاس',
    faDesc: 'باکس‌های پلاستیکی خشک ضخیم ضدلهیدگی مناسب پروازهای طولانی و بازارهای اروپایی.'
  },

  // Corn Packings
  {
    id: 26,
    title: 'Husked Vacuumed Sealed Cob Packs',
    category: 'Corn',
    image: 'https://images.unsplash.com/photo-1551754625-703a30c3db2a?auto=format&fit=crop&q=80&w=600',
    desc: 'Sweet corn heads de-husked, pre-washed and preserved under tight secure vacuum seals.',
    faTitle: 'وکیوم بهداشتی بلال صادراتی',
    faDesc: 'پوست‌کنی برگ‌های اضافی ذرت شیرین سورت‌شده و قرارگیری تحت خلأ برای ماندگاری طولانی.'
  },

  // Cucumber Packings
  {
    id: 27,
    title: 'Caspian Green Cucumbers Pack',
    category: 'Cucumber',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=600',
    desc: 'Firm, straight cucumbers calibrated for perfect dimensions and crisp shelf-life.',
    faTitle: 'خیار سبز دستچین گلخانه‌ای',
    faDesc: 'سورتینگ خیارهای قلمی با دستگاه تراز سه‌بعدی و چیدمان یکدست با فوم تصفیه‌کننده.'
  },

  // Lemon Packings
  {
    id: 28,
    title: 'Lisbon Acidic Lemons Vault',
    category: 'Lemon',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=600',
    desc: 'Bright yellow juicy lemons processed inside our degreening vaults.',
    faTitle: 'سورتینگ لیموترش شیرازی',
    faDesc: 'کنترل دقیق اسیدیته و خنک‌سازی سریع لیموها جهت مقاومت در حمل هوایی مجلل.'
  },

  // Orange Packings
  {
    id: 29,
    title: 'Caspian Valencia Oranges Wood Crate',
    category: 'Orange',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600',
    desc: 'Lush valencia oranges aligned in three-tier sturdy wood baskets.',
    faTitle: 'جعبه چوبی پرتقال صادراتی',
    faDesc: 'جعبه سبک چوبی سه‌رج واکس‌خورده مقاوم در برابر رطوبت مداوم درون انبار کانتینر.'
  },

  // Potato Packings
  {
    id: 30,
    title: 'Gilan Russet Potatoes Bag',
    category: 'Potato',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600',
    desc: 'Low-starch high-durability baking potatoes packed in durable jute bags.',
    faTitle: 'گونی کنفی سیب‌زمینی دستچین',
    faDesc: 'بسته‌بندی در کیسه‌های کنفی ضخیم طبیعی جهت تهویه بهینه و جلوگیری از جوانه‌زنی زودهنگام.'
  },

  // Tomato Packings
  {
    id: 31,
    title: 'Cluster Greenhouse Tomatoes Flat',
    category: 'Tomato',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600',
    desc: 'High brix tomatoes packed beautifully in cardboard flats with soft nestings.',
    faTitle: 'کارتن شانه‌دار گوجه فرنگی کلاستری',
    faDesc: 'چیدمان بوته‌ای منظوم گوجه‌فرنگی‌های گیلاسی در سینی‌ها کارتنی مقاوم با مهارکننده‌های مجزا.'
  },

  // Zucchini Packings
  {
    id: 32,
    title: 'Dark Green Zucchini Row',
    category: 'Zucchini',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600',
    desc: 'Firm summer zucchini packed face-down in single rows for direct retail markets.',
    faTitle: 'کدو سبز بهداشتی تمیز‌شده',
    faDesc: 'آب‌کش کردن پرزهای ساقه کدو سبز صادراتی و تک‌رج چینی در سبدهای زرد شیاردار.'
  }
];

export default function GalleryScreen() {
  const { language, direction } = useLanguage();
  const isRtl = direction === 'rtl';

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Dynamic localization text helpers
  const d = (enText: string, faText: string) => (language === 'fa' ? faText : enText);

  // Filter items according to state
  const filteredItems = activeCategory === "All" 
    ? initialGalleryItems 
    : initialGalleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

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
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="gallery-root" dir={direction}>
      
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
          
          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300 tracking-wider mb-2">
            <a href="#/" className="hover:text-amber-400">
              {d("Home", "خانه")}
            </a>
            <span>/</span>
            <span className="text-white uppercase font-black">
              {d("Image Gallery", "گالری تصاویر صارداتی")}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl leading-tight text-white drop-shadow-sm">
            {d("A Picture is Worth A Thousand Words", "یک تصویر گویای هزاران کلمه تخصص و اصالت است")}
          </h1>
          <p className="max-w-2xl text-emerald-300 text-xs sm:text-sm font-semibold leading-relaxed pt-1">
            {d(
              "On this Product Photo Gallery, you can see examples of our export products, including high-quality fruits and vegetables. You can also see images of our various product packaging and learn about how they are prepared and exported by Gilafruit.",
              "در این بخش از گالری تصاویر محصولات، می‌توانید نمونه‌های بارز محصولات صادراتی ما شامل انواع میوه‌ها و صیفی‌جات ممتاز را مشاهده کنید؛ همچنین تصاویری از بسته‌بندی‌های استاندارد و فرآیند آماده‌سازی و ارسال مجهز گروه گیلافروت آورده شده است."
            )}
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
            {d("Premium Caspian Agriculture Portfolio", "نمونه کار کشاورزی ممتاز حوزه دریای خزر")}
          </div>
          <p className="text-[#014134] font-display font-semibold text-lg sm:text-xl tracking-tight">
            {d(
              "\"In our product photo gallery, we've opened a window to the lush gardens of Iran\"",
              "«در گالری تصاویر محصولات ما، دریچه‌ای به سوی باغ‌های سرسبز و مدرن ایران گشوده ایم»"
            )}
          </p>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify sm:text-center text-justify font-sans">
            {d(
              "Here, you can view an exhibition of the finest and highest-quality Iranian fruits and vegetables, harvested, packaged, and prepared for export by the dedicated experts at GilaFruit. By utilizing the latest knowledge and technology, we produce our products to meet the highest international standards. In this section, you'll find a variety of products, from delicious and juicy kiwis to sweet watermelons, fragrant melons, various types of flavorful citrus fruits, and fresh vegetables. By viewing the images, you can witness the production and packaging processes up close. Join us as we bring the taste of freshness and health from the heart of Iran's gardens to your tables.",
              "در این بخش نمایشگاهی از تازه‌ترین و باکیفیت‌ترین محصولات باغی و زراعی صادراتی ایران، برداشت، بسته‌بندی و آماده‌شده به دست کارشناسان متخصص گیلافروت را مشاهده می‌کنید. ما با بهره‌گیری از آخرین دانش فنی و سیستم‌های توری، محصولات کشاورزی را طبق الگوهای کیفی بازارهای فرامرزی تامین می‌کنیم. انواع کیوی ترش و شیرین، هندوانه‌های پوست‌صاف، خربزه عسلی، مرکبات شاداب طالش و صیفی‌جات معطر گیلان را با چند کلیک فیلتر کنید و از نزدیک شاهد هنر فرآوری ما باشید."
            )}
          </p>
        </div>
      </div>

      {/* 3. CATEGORIES FILTERS ACCORDION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="gallery-categories-wrapper">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#014134] font-bold">
            {d(`Filter Gallery Portfolio (${initialGalleryItems.length} High-Res Images)`, `دسته‌بندی‌ها و فیلتر گالری تصاویر (${initialGalleryItems.length} عکس باکیفیت صادراتی)`)}
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl bg-white p-3 rounded-2xl border border-slate-200 shadow-sm" id="categories-tabs">
            {galleryCategories.map((category) => {
              const isActive = activeCategory.toLowerCase() === category.toLowerCase();
              const displayLabel = language === 'fa' ? (categoryTranslations[category] || category) : category;
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
                  {displayLabel}
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
            <h3 className="font-display font-bold text-slate-800">{d("No Gallery Photos", "تصویری منطبق یافت نشد")}</h3>
            <p className="text-xs leading-relaxed">
              {d(
                `We currently do not have active photos uploaded for category "${activeCategory}". Check other premium fruits or vegetables category!`,
                `در حال حاضر عکس بارگذاری شده فعالی در گروه «${categoryTranslations[activeCategory] || activeCategory}» یافت نشد. مابقی دسته‌بندی‌ها را بررسی نمایید!`
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.map((item, index) => {
              const itemTitle = language === 'fa' && item.faTitle ? item.faTitle : item.title;
              const displayValCategory = language === 'fa' ? (categoryTranslations[item.category] || item.category) : item.category;
              return (
                <motion.div
                  layoutId={`gallery-card-${item.id}`}
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-900 flex-1">
                    <img 
                      src={item.image} 
                      alt={itemTitle} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform scale-75 group-hover:scale-100 z-10 border border-white/30">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <span className="absolute top-2 left-2 bg-slate-950/60 backdrop-blur-xs text-white text-[8px] sm:text-[9px] font-mono font-bold px-2 py-0.5 rounded-lg border border-white/10">
                      {displayValCategory}
                    </span>
                  </div>

                  <div className="p-3 border-t border-slate-100 text-center bg-white min-h-[54px] flex flex-col justify-center">
                    <h4 className="font-sans font-bold text-slate-800 text-[11px] leading-tight line-clamp-2">
                      {itemTitle}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. IMAGE CAROUSEL LIGHTBOX WITH CORRECT Z-INDEX STACKING */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (() => {
          const currentItem = filteredItems[lightboxIndex];
          const displayTitle = language === 'fa' && currentItem.faTitle ? currentItem.faTitle : currentItem.title;
          const displayDesc = language === 'fa' && currentItem.faDesc ? currentItem.faDesc : currentItem.desc;
          return (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-slate-950/98 flex flex-col items-center justify-center p-4 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-lg font-bold transition-all focus:outline-none border border-white/10 z-[1000] cursor-pointer"
                title={d("Close", "بستن")}
              >
                ✕
              </button>

              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all focus:outline-none border border-white/10 z-[1000] cursor-pointer hover:scale-105"
                title={d("Previous", "قبلی")}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all focus:outline-none border border-white/10 z-[1000] cursor-pointer hover:scale-105"
                title={d("Next", "بعدی")}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slider Core Body */}
              <motion.div 
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-4xl w-full flex flex-col items-center gap-6 text-center z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative group select-none max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img 
                    src={currentItem.image} 
                    alt={displayTitle} 
                    className="max-h-[70vh] max-w-full object-contain rounded-xl"
                  />
                  
                  {/* Watermark brand frame */}
                  <div className={`absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl flex justify-between items-center text-[10px] sm:text-xs text-white font-mono opacity-85 z-20 pointer-events-none border border-white/5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span className="text-amber-400 font-extrabold tracking-wider">WWW.GILAFRUIT.COM</span>
                    <span className="text-[#cbd5e1] font-bold">+98 990 097 8002</span>
                  </div>
                </div>

                <div className="space-y-2 text-white max-w-2xl px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[10px] bg-emerald-600/30 border border-emerald-500/20 text-emerald-300 px-3 py-1 rounded-md font-mono uppercase tracking-widest font-extrabold">
                      {categoryTranslations[currentItem.category] || currentItem.category}
                    </span>
                    <span className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded-md font-mono">
                      {d(`Slide ${lightboxIndex + 1} of ${filteredItems.length}`, `تصویر ${lightboxIndex + 1} از ${filteredItems.length}`)}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-amber-300 tracking-tight leading-tight">
                    {displayTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                    {displayDesc}
                  </p>
                </div>
              </motion.div>

            </motion.div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
}
