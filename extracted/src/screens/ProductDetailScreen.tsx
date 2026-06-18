import { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, MessageSquare, Mail, Calendar, MapPin, 
  Layers, Minimize2, Weight, ShieldCheck, Heart, 
  Sparkles, Check, ChevronDown, Award, Play, Send, 
  CheckCircle2, ThumbsUp, HelpCircle, Truck, Globe, 
  FileText, User, Star, Share2, Info, ArrowRight, ShieldAlert,
  Calculator, Settings, Activity, Trash2, Key, Loader2, Anchor,
  Search, Flame, Palette, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { DETAIL_TEXTS } from './productDetailTexts';

interface Country {
  name: string;
  code: string;
  flag: string;
}

const ALL_COUNTRIES: Country[] = [
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Georgia', code: '+995', flag: '🇬🇪' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Estonia', code: '+372', flag: '🇪🇪' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Tajikistan', code: '+992', flag: '🇹🇯' },
  { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬' },
  { name: 'Turkmenistan', code: '+993', flag: '🇹🇲' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
];

const GALLERY_IMAGES = [
  { 
    url: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=800", 
    title: "Hygienic Packaging Baskets", 
    subtitle: "Sized plastic baskets catering to international transit guidelines." 
  },
  { 
    url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800", 
    title: "Fresh Garlic Selection", 
    subtitle: "Rigorous manual sorting of high-quality Iranian garlic bulbs." 
  },
  { 
    url: "https://images.unsplash.com/photo-1540148409459-d8fb74f67645?auto=format&fit=crop&q=80&w=800", 
    title: "Premium Grade Classification", 
    subtitle: "Graded and standardized for export-compliant global markets." 
  },
  { 
    url: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800", 
    title: "Ventilated Basket Stacking", 
    subtitle: "Strategically stacked for optimal continuous airflow inside reefers." 
  },
  { 
    url: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800", 
    title: "Iran Sorting Units", 
    subtitle: "Supervised by experienced experts to guarantee superior quality." 
  },
  { 
    url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800", 
    title: "Cleaned Dried Garlic Bulk", 
    subtitle: "Moisture-minimized bulbs prepared for long distance Eurasian dispatch channels." 
  }
];

const searchPlaceholders: Record<string, string> = {
  en: "Search country or dial code...",
  fa: "جستجوی کشور یا کد...",
  ru: "Поиск страны или кода...",
  ar: "البحث عن بلد أو رمز...",
  tr: "Ülke veya kod ara...",
  uz: "Mamlakat yoki kodni qidirish...",
  az: "Ölkə və ya kod axtar...",
  hi: "देश या कोड खोजें...",
  uk: "Пошук країни чи коду..."
};

const noResultsPlaceholders: Record<string, string> = {
  en: "No countries found",
  fa: "کشوری یافت نشد",
  ru: "Страны не найдены",
  ar: "لم يتم العثور على بلدان",
  tr: "Ülke bulunamadı",
  uz: "Mamlakat topilmadi",
  az: "Ölkə tapıldı",
  hi: "कोई देश नहीं मिला",
  uk: "Країн не знайдено"
};

interface ProductDetailScreenProps {
  product: Product | undefined;
  onNavigate: (hash: string) => void;
}

export default function ProductDetailScreen({ product: rawProduct, onNavigate }: ProductDetailScreenProps) {
  const { getLProduct, language, direction, t } = useLanguage();
  
  // Localized texts helper
  const d = (key: string, productName?: string): string => {
    let text = DETAIL_TEXTS[language]?.[key] || DETAIL_TEXTS['en']?.[key] || key;
    if (productName) {
      text = text.replace(/{product}/g, productName);
    }
    return text;
  };

  const getStageBadge = (num: number) => {
    switch (language) {
      case 'fa':
        return `مرحله ۰${num}`;
      case 'ar':
        return `الخطوة ٠${num}`;
      case 'ru':
        return `ЭТАП 0${num}`;
      case 'tr':
        return `AŞAMA 0${num}`;
      case 'az':
        return `MƏRHƏLƏ 0${num}`;
      case 'uz':
        return `BOSQICH 0${num}`;
      case 'uk':
        return `ЕТАП 0${num}`;
      case 'hi':
        return `चरण 0${num}`;
      default:
        return `STEP 0${num}`;
    }
  };

  const product = useMemo(() => {
    return rawProduct ? getLProduct(rawProduct) : undefined;
  }, [rawProduct, getLProduct]);

  const isRtl = direction === 'rtl';

  // Direct consulting WhatsApp advice form state
  const [adviceName, setAdviceName] = useState('');
  const [adviceMobile, setAdviceMobile] = useState('');
  const [adviceEmail, setAdviceEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+98'); // Default to +98 for Iran GilaFruit origin
  const [adviceSuccess, setAdviceSuccess] = useState(false);
  const [isSubmittingAdvice, setIsSubmittingAdvice] = useState(false);

  // Searchable Country Dropdown States
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>({ name: 'Iran', code: '+98', flag: '🇮🇷' });

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return ALL_COUNTRIES;
    const term = searchTerm.toLowerCase();
    return ALL_COUNTRIES.filter(c => 
      c.name.toLowerCase().includes(term) || 
      c.code.includes(term)
    );
  }, [searchTerm]);

  // Interactive Freight Calculator state
  const [cargoVolume, setCargoVolume] = useState<number>(25); // Default 25 Tons
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // FAQ Accordions expanded states
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Shared state for reviews & comments
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [userRating, setUserRating] = useState<number>(5);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [userComments, setUserComments] = useState([
    {
      id: 1,
      author: "Alexei Volkov",
      email: "volkov.trade@gmail.com",
      rating: 5,
      text: "Outstanding quality standards. Our company imported 24 tons of this fresh cargo last season to Krasnodar terminals. Not a single blemish or mildewed point. The customs routing support at the Samur EAEU frontier was extremely swift and professional. Highly recommend contracting with GilaFruit.",
      date: "June 03, 2026",
      likes: 18,
      verified: true
    },
    {
      id: 2,
      author: "Hassan Al-Mansoori",
      email: "hassan.dubai@almansooritrading.ae",
      rating: 5,
      text: "We ordered a trial batch of greenhouse sweet bell peppers and fresh garlic. Kept at optimum -1.5 degrees, they arrived in Dubai in immaculate shelf shape. The custom-labeled EPS boxes with gel padding are superior to standard loose netting packing.",
      date: "May 25, 2026",
      likes: 12,
      verified: true
    }
  ]);
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Video mockup playing status
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Bookmark / Favorite status mockup
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Lightbox Image Gallery State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Dynamic pricing tip or quote estimate
  const dynamicPriceEstimate = useMemo(() => {
    if (!product) {
      return { min: "$0.00", max: "$0.00", unit: "kg" };
    }
    // Arbitrary realistic wholesale export price range starting from Iran FOB Astara or Bandar Anzali
    if (product.category === 'fruit') {
      return { min: "$0.85", max: "$1.40", unit: "kg" };
    }
    return { min: "$0.70", max: "$1.20", unit: "kg" };
  }, [product]);

  // Dynamic cargo parameters mapping based on product slug
  const cargoParams = useMemo(() => {
    const slug = product?.slug;
    switch (slug) {
      case 'fresh-garlic':
      case 'dry-garlic-export':
        return {
          temp: "-1.5°C to -2.5°C",
          humidity: "60% - 70% RH",
          precooling: "Air circulation curing",
          shelfLife: "6 to 9 Months",
          ventilation: "Ultra-low fresh air exchange",
          packagingWeight: 10,
          containerCap: 22, // Tons
          cargoTips: "Garlic requires ultra-dry atmosphere. High humidity provokes premature rooting and immediate mildew."
        };
      case 'hayward-kiwifruit':
        return {
          temp: "0.0°C to +0.5°C",
          humidity: "90% - 95% RH",
          precooling: "Forced air cooling (within 6 hrs of harvest)",
          shelfLife: "4 to 6 Months",
          ventilation: "15 m³/hr per pallet",
          packagingWeight: 4,
          containerCap: 20, // Tons
          cargoTips: "Extremely sensitive to trace ethylene gas. Do not co-ship with bananas, ripening melons, or tomatoes."
        };
      case 'export-watermelon':
        return {
          temp: "+10.0°C to +12.0°C",
          humidity: "85% - 90% RH",
          precooling: "Natural shade stabilization",
          shelfLife: "3 to 4 Weeks",
          ventilation: "Moderate air flow (25 m³/hr)",
          containerCap: 24, // Tons
          packagingWeight: 500, // Octabins
          cargoTips: "Chilling injury occurs below 7°C. Watermelons must be secured in heavy-duty Octabins to prevent compression cracking."
        };
      case 'lettuce-export':
        return {
          temp: "+0.5°C to +1.0°C",
          humidity: "95% - 100% RH",
          precooling: "Vacuum cooling immediately at receiving plant",
          shelfLife: "2 to 3 Weeks",
          ventilation: "High fresh air exchange",
          containerCap: 18, // Tons
          packagingWeight: 8,
          cargoTips: "Requires dual-layered breathable plastic wrap wrappers inside ventilated carton boxes to preserve cellular turgidity."
        };
      case 'bell-pepper-export':
        return {
          temp: "+7.0°C to +8.5°C",
          humidity: "90% - 95% RH",
          precooling: "Hydrocooling or forced-air cooling",
          shelfLife: "3 to 4 Weeks",
          ventilation: "Moderate fresh air exchange",
          containerCap: 20, // Tons
          packagingWeight: 5,
          cargoTips: "Thick walls prevent early shriveling, but relative humidity must remain high. Chilling damage occurs below 6°C."
        };
      case 'greenhouse-tomatoes':
        return {
          temp: "+10.0°C to +12.5°C",
          humidity: "85% - 90% RH",
          precooling: "Air room stabilization",
          shelfLife: "2 to 4 Weeks",
          ventilation: "Continuous moderate ventilation",
          containerCap: 21, // Tons
          packagingWeight: 6,
          cargoTips: "Undergoes rapid color development in transit. Temperature adjustments can retard or accelerate ripening according to distance."
        };
      case 'parsley-export':
      case 'dill-export':
        return {
          temp: "0.0°C to +0.5°C",
          humidity: "95% - 100% RH",
          precooling: "Flake ice top layering with pre-cooled water rinse",
          shelfLife: "2 to 3 Weeks",
          ventilation: "Minimal dry air exposure",
          containerCap: 15, // Tons due to density
          packagingWeight: 10,
          cargoTips: "Must be shipped in styrofoam (EPS) boxes layered with clean flaked water-ice to avoid moisture depletion and yellowing."
        };
      case 'seedless-grapes':
        return {
          temp: "-0.5°C to 0.0°C",
          humidity: "90% - 95% RH",
          precooling: "Immediate pressure-blown air pre-cooling to under 2°C",
          shelfLife: "2 to 3 Months",
          ventilation: "Low air velocity with SO2 treatment pads",
          containerCap: 21, // Tons
          packagingWeight: 8,
          cargoTips: "High susceptibility to Botrytis rot. Active SO2 generator pads must be set on grape crowns during stacking."
        };
      case 'green-broccoli':
        return {
          temp: "0.0°C to +0.5°C",
          humidity: "95% - 100% RH",
          precooling: "Dynamic liquid ice injection post-packing",
          shelfLife: "3 to 4 Weeks",
          ventilation: "Constant low airflow",
          containerCap: 19, // Tons
          packagingWeight: 8,
          cargoTips: "Without packing ice, yellowing occurs in less than 48 hours. Drainage holes in cooler boxes must remain unobstructed."
        };
      case 'sweet-cherries':
        return {
          temp: "-0.5°C to +0.5°C",
          humidity: "90% - 95% RH",
          precooling: "Hydrocooling to under 2°C within 4 hours",
          shelfLife: "3 to 4 Weeks",
          ventilation: "Low draft",
          containerCap: 18, // Tons
          packagingWeight: 5,
          cargoTips: "Extremely delicate fruit skin. High relative humidity prevents stem drying, while near-freezing keeps meat snappy."
        };
      default:
        return {
          temp: "0.0°C to +2.0°C",
          humidity: "85% - 95% RH",
          precooling: "Standard vacuum air pre-cooling",
          shelfLife: "4 Weeks",
          ventilation: "Moderate exchange",
          containerCap: 20, // Tons
          packagingWeight: 10,
          cargoTips: "Transport under certified refrigerated reefer units with clean sanitary checklists."
        };
    }
  }, [product]);

  // Derived Calculator Stats
  const calculatorStats = useMemo(() => {
    const totalWeightKg = cargoVolume * 1000;
    const boxWeight = cargoParams.packagingWeight;
    const estimatedCartons = Math.ceil(totalWeightKg / boxWeight);
    const suggestedContainers = Math.ceil(cargoVolume / cargoParams.containerCap);
    return {
      totalWeightKg,
      estimatedCartons,
      suggestedContainers
    };
  }, [cargoVolume, cargoParams]);

  const officialFaqa = useMemo(() => {
    switch (language) {
      case 'fa':
        return [
          {
            q: "آیا گیلافروت می‌تواند بسته‌بندی با برند اختصاصی یا کارتن‌های سفارشی تولید کند؟",
            a: "بله، قطعاً. ما به عنوان یک مرجع مجاز بسته‌بندی و ترخیص در گیلان (آستارا و تالش)، کارتن‌های با طراحی اختصاصی، ظروف خنک‌کننده یونولیتی با پلاک تجاری مشتری، و روزنه‌های تهویه لایه‌ای متناسب با استانداردهای اوراسیا (EAEU) و خلیج فارس (GCC) تولید می‌کنیم."
          },
          {
            q: "چه گواهینامه‌هایی برای هر محموله صادراتی ارائه می‌شود؟",
            a: "هر محموله با گواهی رسمی بهداشت نباتی (حفظ نباتات)، گواهی انطباق اوراسیا (EAC)، گواهی مبدا رسمی اتاق بازرگانی و تاییدیه کنترل کیفیت و سلامت SGS ارائه می‌شود که تضمین‌کننده عدم وجود باقیمانده سموم آفت‌کش یا کپک است."
          },
          {
            q: "نحوه تسویه حساب و مسیرهای ارسال حمل و نقل چگونه است؟",
            a: "ما حمل و نقل جاده‌ای را از طریق مرز زمینی آستارا و گمرک مربوطه مستقیماً به پایانه‌های بزرگ لجستیکی اوراسیا و روسیه (نظیر فودسیتی مسکو، باکو، تاشکند و مینسک) با تریلرهای مجهز یخچالی مدرن انجام می‌دهیم. شرایط تحویل به صورت FOB، FCA و CIF موجود است."
          }
        ];
      case 'ru':
        return [
          {
            q: "Может ли GilaFruit изготовить упаковку под собственной маркой (Private Label)?",
            a: "Безусловно. Будучи лицензированным упаковочным центром в Гилане (Астара и Талеш), мы производим картонные коробки с вашим брендом, термоконтейнеры из пенополистирола и ящики с вентиляцией под стандарты ЕАЭС и стран Залива."
          },
          {
            q: "Какие сертификаты предоставляются с каждой партией?",
            a: "Каждая поставка сопровождается фитосанитарным сертификатом, сертификатом соответствия ЕАС, сертификатом происхождения и заключением SGS о безопасности и отсутствии пестицидов или плесени."
          },
          {
            q: "Каковы условия оплаты и логистические маршруты?",
            a: "Мы доставляем грузы собственным рефрижераторным автопарком через пограничный пункт Астара до крупнейших хабов (например, Фуд Сити Москва, Баку, Ташкент, Минск). Доступны контракты FOB, FCA и CIF."
          }
        ];
      case 'ar':
        return [
          {
            q: "هل يمكن لـ GilaFruit توفير التعبئة والتغليف بالعلامة التجارية الخاصة بالعميل؟",
            a: "بالتأكيد. بصفتنا دار تعبئة وتطهير مرخصة بالكامل في جيلان (آستارا وتالش)، نقوم بتصنيع كرتون مخصص، وحاويات تبريد بوليسترين مع علامات تجارية مخصصة وعلامات تهوية تتوافق مع معايير الخليج وأوراسيا."
          },
          {
            q: "ما هي الشهادات والمستندات المقدمة مع كل شحنة دولية؟",
            a: "يتم إرفاق شهادة الصحة النباتية الرسمية، شهادة مطابقة الجودة الأوراسية (EAC)، شهادة المنشأ المعتمدة، وتقرير فحص SGS لضمان خلو الشحنة من متبقيات المبيدات أو العفن."
          },
          {
            q: "كيف يتم تنظيم شروط الدفع وما هي طرق ووسائل الشحن؟",
            a: "نقوم بشحن البضائع بواسطة أسطولنا من الشاحنات المبردة الحديثة عبر حدود آستارا البرية مباشرة إلى المراكز اللوجستية الإقليمية (مثل فود سيتي موسكو، دبي، باكو، طشقند). تتوفر شروط الشحن FOB و FCA و CIF."
          }
        ];
      case 'tr':
        return [
          {
            q: "GilaFruit özel marka (private label) tasarım veya özel kutu yapabilir mi?",
            a: "Kesinlikle. Gilan'da (Astara & Talesh) lisanslı ambalaj evi olarak, müşterinin markasıyla özel tasarlanmış karton ambalajlar, köpük soğutma kapları ve EAEU/GCC standartlarına uygun havalandırmalı kasalar üretiyoruz."
          },
          {
            q: "Uluslararası sevkiyatlarda hangi belgeler sağlanmaktadır?",
            a: "Her sevkiyatta resmi Bitki Sağlık Sertifikası, Avrasya Uygunluk Belgesi (EAC), Menşe Şahadetnamesi ve pestisit/küf içermediğini kanıtlayan SGS kalite kontrol raporu sunulmaktadır."
          },
          {
            q: "Ödeme koşulları ve nakliye rotaları nasıl yapılandırılmıştır?",
            a: "Sevkiyatlarımızı Astara kara sınır kapısından direkt olarak ana lojistik terminallerine (örn. Food City Moskova, Bakü, Taşkent, Minsk) sıcaklık kontrollü frigo filomuzla ulaştırıyoruz. FOB, FCA ve CIF seçenekleri mevcuttur."
          }
        ];
      case 'az':
        return [
          {
            q: "GilaFruit müştərinin özəl brendi altında qablaşdırma edərmı?",
            a: "Əlbəttə. Gilandakı (Astara və Taleş) lisenziyalı qablaşdırma mərkəzimiz vasitəsilə fərdi dizaynlı kartonlar, müştəri loqolu köpük soyutma qabları və Avrasiya İttifaqı standartlarına uyğun havalandırmalı yeşiklər hazırlayırıq."
          },
          {
            q: "Hər bir beynəlxalq göndərişlə hansı sertifikatlar təqdim olunur?",
            a: "Hər bir göndəriş rəsmi Fitosanitar Sertifikat, EAC Avrasiya Uyğunluq Sertifikatı, rəsmi mənşə sertifikatı og rəsmi yoxlama hesabatı ilə müşayiət olunur."
          },
          {
            q: "Ödəniş şərtləri og logistik marşrutlar necə təşkil olunur?",
            a: "Yüklərimizi dərəcə nəzarətli soyuduculu tırlardan ibarət şəxsi parkımızla Astara quru sərhədindən birbaşa əsas logistika mərkəzlərinə (məs. Food City Moskva, Bakı, Daşkənd, Minsk) çatdırırıq. FOB, FCA və CIF müqavilə şərtləri təklif olunur."
          }
        ];
      case 'uz':
        return [
          {
            q: "GilaFruit xususiy brend (private label) ostida qadoqlashni amalga oshiradimi?",
            a: "Albatta. Gilandagi (Astara va Talesh) litsenziyalangan qadoqlash markazimiz orqali buyurtmachining brendiga ega qutilar, penoplastli sovutish idishlari va Yevrosiyo Ittifoqi standartlariga mos shamollatish tirqishli qutilarni ishlab chiqaramiz."
          },
          {
            q: "Sotuvda har bir xalqaro jo'natma bilan qanday sertifikatlar taqdim etiladi?",
            a: "Har bir jo'natma bilan rəsmiy Fitosanitariya Sertifikati, EAC muvofiqlik sertifikati, rəsmiy kelib chiqish sertifikati va pestitsidlar hamda mog'orlar yo'qligini tasdiqlovchi SGS sifat nazorati hisoboti taqdim etiladi."
          },
          {
            q: "To'lov qoidalari va yetkazib berish yo'nalishi qanday belgilangan?",
            a: "Biz yuklarni o'zimizning muzlatgichli yuk mashinalorimiz bilan Astara chegarasi orqali to'g'ridan-to'g'ri yirik logistika markazlariga (masalan Food City Moskva, Boku, Toshkent, Minsk) yetkazib beramiz. FOB, FCA va CIF shartlari mavjud."
          }
        ];
      case 'uk':
        return [
          {
            q: "Чи може GilaFruit виготовляти пакування під власною маркою клієнта?",
            a: "Безумовно. Будучи ліцензованим пакувальним центром у Гілані (Астара і Талеш), ми виробляємо фірмовий картон, вентильовані контейнери та лотки під стандарти ЄАЕС та країн Затоки."
          },
          {
            q: "Які супровідні сертифікати надаються для кожної партії вантажу?",
            a: "Кожна поставка супроводжується офіційним фітосанітарним сертифікатом, сертифікатом відповідності EAC, сертифікатом походження товару та висновками SGS щодо безпеки харчової продукції."
          },
          {
            q: "Які існують умови оплати та логістичні схеми транзиту?",
            a: "Вантажі доставляються нашим рефрижераторним автопарком безпосередньо з депо через кордон Астара до найбільших логістичних терміналів (наприклад, Фуд Сіті Москва, Баку, Ташкент, Мінськ). Доступні контракти FOB, FCA та CIF."
          }
        ];
      case 'hi':
        return [
          {
            q: "क्या GilaFruit प्राइवेट-लेबल और कस्टम बॉक्स डिज़ाइन प्रदान कर सकता है?",
            a: "बिल्कुल। गिलान (अस्तारा और तालेश) में पूर्णतः लाइसेंस प्राप्त पैकिंग और क्लीयरिंग हाउस के रूप में, हम कस्टम-डिज़ाइन किए गए नालीदार बक्से और वेंटिलेशन स्लॉट वाले थर्मोकोल कूलिंग कंटेनर तैयार करते हैं जो विभिन्न बाजारों के अनुकूल हैं।"
          },
          {
            q: "प्रत्येक अंतरराष्ट्रीय प्रेषण के साथ क्या प्रमाणपत्र प्रदान किए जाते हैं?",
            a: "प्रत्येक शिपमेंट के साथ आधिकारिक पादप स्वास्थ्य (Phytosanitary) प्रमाणपत्र, EAC अनुरूपता प्रमाणपत्र, मूल प्रमाणपत्र और SGS प्रयोगशाला मंजूरी रिपोर्ट संलग्न होती है।"
          },
          {
            q: "भुगतान शर्तें और वितरण मार्ग कैसे संचालित होते हैं?",
            a: "हम अस्तारा भूमि सीमा के माध्यम से सीधे बड़े रसद केंद्रों (जैसे फ़ूड सिटी मॉस्को, बाकू, ताशकंद, मिन्स्क) तक तापमान-नियंत्रित रीफर वाहनों द्वारा खेप भेजते हैं। हम FOB, FCA और CIF विकल्प देते हैं।"
          }
        ];
      default:
        return [
          {
            q: "Can GilaFruit accommodate private-label wrapping or custom carton designs?",
            a: "Absolutely. As a fully licensed packing and clearing house in Gilan (Astara & Talesh), we generate custom-designed corrugated fiberboards, styrofoam cooling containers with custom branding plates, or layered ventilation slots tailored to EAEU or GCC wholesale specifications."
          },
          {
            q: "What certifications are provided with every international dispatch?",
            a: "Every single shipment is accompanied by an official Phytosanitary Certificate from the Plant Protection Organization, an EAC Conformity Certificate (for Eurasian markets), a verified Certificate of Origin, and SGS quarantine clearance, proving the product is free from hazardous trace pesticides or mold."
          },
          {
            q: "How are payment protocols structured and what delivery routes do you take?",
            a: "We actively route shipments using our premium temperature-controlled reefer fleet through the Astara land border or Samur checkpoint directly to central logistics terminals (e.g. Food City Moscow, Baku, Tashkent, Minsk). We offer flexible FOB, FCA, and CIF delivery contract options."
          }
        ];
    }
  }, [language]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-4">
        <p className="text-5xl text-amber-500 animate-bounce">⚠️</p>
        <h2 className="text-3xl font-bold font-display text-slate-950">{d('productNotFound')}</h2>
        <p className="text-slate-500 text-sm">{d('productNotFoundDesc')}</p>
        <button
          onClick={() => onNavigate('#/products')}
          className="px-8 py-3 bg-emerald-850 hover:bg-emerald-950 text-white rounded-full text-xs font-black uppercase tracking-wider cursor-pointer shadow-lg transition-all"
        >
          {d('returnToDirectory')}
        </button>
      </div>
    );
  }

  // Handle Advice WhatsApp dispatch
  const handleAdviceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adviceName || !adviceMobile) {
      alert("Please enter both your name and WhatsApp mobile number.");
      return;
    }
    setIsSubmittingAdvice(true);
    setTimeout(() => {
      setIsSubmittingAdvice(false);
      setAdviceSuccess(true);
      
      const customMsg = `Hello GilaFruit Commercial Desk! My name is ${adviceName}. I am requesting immediate trade and load-factor consulting for ${product.name}. 
My phone is ${selectedCountry.code} ${adviceMobile} and my contact email is ${adviceEmail || "not provided"}. 
Please provide product catalog and shipping details. Thank you!`;

      const waUrl = `https://wa.me/989900978002?text=${encodeURIComponent(customMsg)}`;
      window.open(waUrl, '_blank');
    }, 1200);
  };

  // Handle Live comment submit
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentAuthor || !commentText) {
      alert("Please provide both your Display Name and Public Comment.");
      return;
    }
    if (!isCaptchaChecked) {
      alert("Please confirm the 'I'm not a robot' security check first.");
      return;
    }

    const newComment = {
      id: Date.now(),
      author: commentAuthor,
      email: commentEmail,
      rating: userRating,
      text: commentText,
      date: "Just now (Verified Broker)",
      likes: 0,
      verified: true
    };

    setUserComments([newComment, ...userComments]);
    setCommentAuthor('');
    setCommentEmail('');
    setCommentText('');
    setIsCaptchaChecked(false);
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 5000);
  };

  const handleLikeComment = (id: number) => {
    setUserComments(prev => prev.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  // Multiple angle sample photos dynamically adjusted based on product image
  const multiAnglePhotos = [
    { url: product.image, title: "Wholesale Caliber Display" },
    { url: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=400", title: "Caspian Packing House" },
    { url: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400", title: "Automated Sorting Grid" }
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-[148px] bg-[#f5f8f6] min-h-screen text-slate-900 selection:bg-emerald-800 selection:text-white" id="luxury-product-detail-flow" dir={direction}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 2. MODERN BREADCRUMB */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <nav className={`flex items-center gap-2 text-[11px] text-slate-500 ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
            <button onClick={() => onNavigate('#/')} className="hover:text-emerald-850 transition-colors font-bold">{t('common.home')}</button>
            <span>/</span>
            <button onClick={() => onNavigate('#/products')} className="hover:text-emerald-850 transition-colors font-bold">{t('common.products')}</button>
            <span>/</span>
            <span className="text-emerald-700 font-black">{product.category}s</span>
            <span>/</span>
            <span className="text-slate-800 font-black tracking-tight">{product.name.split(' ').slice(0, 3).join(' ')}</span>
          </nav>
          
          <button 
            onClick={() => onNavigate('#/products')}
            className={`self-start flex items-center gap-2 text-xs font-black text-emerald-850 hover:text-emerald-950 font-sans ${isRtl ? '' : 'uppercase tracking-wider'}`}
          >
            <ArrowLeft className="w-4 h-4 stroke-[3] rtl:rotate-180" />
            {d('backToDirectory')}
          </button>
        </div>

        {/* 3. BENTO GRAPHIC PRODUCT OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COMPARTMENT: STRIKING VISUALS & QUALITY ASSURANCE BADGES */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4 lg:sticky lg:top-24">
            <div className="flex flex-col md:flex-row gap-4">
              
              {/* Vertical Credentials Ribbon for desktop */}
              <div className="hidden md:flex flex-col gap-3.5 items-center justify-start bg-emerald-950/5 border border-slate-200/50 p-2.5 rounded-[2rem] h-full shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex flex-col items-center justify-center text-[7px] font-black leading-none uppercase shrink-0 shadow-sm" title="Organic Sourced">
                  <span className="scale-90 font-sans">ORGANIC</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500 text-emerald-950 flex flex-col items-center justify-center text-[7px] font-black leading-none uppercase shrink-0 shadow-sm" title="ISO 22000 Quality Management">
                  <span className="scale-90 font-mono">ISO</span>
                  <span className="scale-[0.75] font-sans -mt-0.5">22000</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center text-[8px] font-extrabold leading-none uppercase shrink-0 shadow-sm" title="Eurasian Conformity">
                  <span className="scale-95 font-display tracking-tight">EAC</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-800 flex flex-col items-center justify-center text-[7px] font-extrabold leading-none uppercase shrink-0 shadow-sm text-center" title="SGS Audited">
                  <span className="scale-75 font-sans font-black tracking-tighter">SGS</span>
                  <span className="scale-[0.55] font-sans -mt-0.5">TESTED</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex flex-col items-center justify-center text-[7px] font-extrabold leading-none uppercase shrink-0 shadow-sm text-center" title="100% Sourced in Gilan">
                  <span className="scale-[0.65] font-sans font-black leading-tight">GILA</span>
                  <span className="scale-[0.55] font-sans leading-none -mt-0.5">GROWN</span>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="flex-1 relative overflow-hidden bg-slate-950 rounded-[2.5rem] border border-slate-200/50 shadow-2xl aspect-[4/5] group flex items-center justify-center">
                {/* Product Primary Image with elegant zoom mechanics */}
                <img 
                  src={multiAnglePhotos[activePhotoIndex].url}
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-95 transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Rich Overlay Gradients for textual contrast */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Quality Assurance Seals */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-950/65 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-2xl shadow-xl">
                  <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[9px] font-black text-emerald-950">
                    G
                  </div>
                  <div>
                    <span className="text-[9px] block font-black text-white font-display tracking-wider leading-none">GILA EXPORT</span>
                    <span className="text-[7px] block font-mono text-amber-300 tracking-widest uppercase leading-none mt-0.5">ESTABLISHED 2001</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-amber-500 text-emerald-950 text-[9px] font-mono uppercase tracking-widest font-black rounded-lg shadow-lg border border-amber-400/25">
                  ● TOP EXPORT GRADE A+
                </div>

                {/* Elegant Bottom Typography Inside the Image Card */}
                <div className="absolute bottom-6 inset-x-6 space-y-1 text-left">
                  <span className="text-amber-400 font-mono text-[9px] uppercase tracking-widest font-black block">
                    Caspian Sea Basin Premium Crops
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight font-display drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {product.specs.type || product.name}
                  </h2>
                  <div className="flex gap-1.5 pt-1.5 flex-wrap">
                    <span className="px-2 py-0.5 bg-white/15 backdrop-blur-sm border border-white/10 text-white text-[8px] rounded font-mono font-bold uppercase">ISO 22000</span>
                    <span className="px-2 py-0.5 bg-white/15 backdrop-blur-sm border border-white/10 text-white text-[8px] rounded font-mono font-bold uppercase">HACCP SAFE</span>
                    <span className="px-2 py-0.5 bg-white/15 backdrop-blur-sm border border-white/10 text-white text-[8px] rounded font-mono font-bold uppercase">SGS AUDITED</span>
                  </div>
                </div>

                {/* Overlay Interactive Bookmark */}
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`absolute bottom-6 right-6 p-3 rounded-full border transition-all ${
                    isBookmarked 
                      ? 'bg-[#ef4444] border-red-500 text-white shadow-lg' 
                      : 'bg-black/40 border-white/20 text-white/85 hover:bg-black/60 hover:scale-105'
                  }`}
                  title="Bookmark crop"
                >
                  <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Responsive seal ribbon on mobile (hidden on desktop) */}
            <div className="md:hidden flex flex-wrap gap-2 justify-center py-2 px-3 bg-emerald-950/5 border border-slate-200/50 rounded-2xl">
              <span className="px-2 py-1 bg-emerald-800 text-white text-[8px] rounded-lg font-black uppercase">ORGANIC</span>
              <span className="px-2 py-1 bg-amber-500 text-emerald-950 text-[8px] rounded-lg font-black uppercase">ISO 22000</span>
              <span className="px-2 py-1 bg-slate-900 text-white text-[8px] rounded-lg font-black uppercase">EAC VERIFIED</span>
              <span className="px-2 py-1 bg-white border border-slate-200 text-slate-800 text-[8px] rounded-lg font-black uppercase">SGS AUDITED</span>
              <span className="px-2 py-1 bg-blue-800 text-white text-[8px] rounded-lg font-black uppercase">GILA GROWN</span>
            </div>

            {/* Thumbnail selector for multi-angle view */}
            <div className="grid grid-cols-3 gap-3">
              {multiAnglePhotos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhotoIndex(index)}
                  className={`relative aspect-video rounded-2xl overflow-hidden border-2 bg-slate-100 transition-all ${
                    activePhotoIndex === index ? 'border-amber-400 shadow-md scale-[0.98]' : 'border-transparent hover:border-slate-300'
                  }`}
                >
                  <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-black/30 transition-opacity ${activePhotoIndex === index ? 'opacity-0' : 'opacity-40'}`} />
                  <span className={`absolute bottom-1.5 left-2 right-2 text-[8px] text-white ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-wider'} font-extrabold truncate drop-shadow-sm text-center`}>
                    {photo.title}
                  </span>
                </button>
              ))}
            </div>

          </div>

          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            
            {/* Elegant Header Block */}
            <div className="space-y-3.5 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-1 bg-amber-50 border border-amber-300 text-amber-800 text-[9px] rounded-lg font-black shadow-xs ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
                  {d('primaryBatch')}
                </span>
                <span className={`px-2.5 py-1 bg-emerald-50 border border-emerald-250 text-emerald-850 text-[9px] rounded-lg font-black shadow-xs ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
                  {d('reeferStability')}
                </span>
                <span className={`px-2.5 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] rounded-lg font-black shadow-xs ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
                  {d('sourcedInGilan')}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-950 tracking-tight leading-none">
                {product.name}
              </h1>
              
              <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-3xl">
                {product.fullDescription || product.shortDescription}
              </p>
            </div>

            {/* A. REDESIGNED SINGLE-SHEET CROP SPECIFICATION GRID - SLEEK COMPACT VERSION */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden text-left font-sans">
              <div className="p-3.5 bg-emerald-950/5 border-b border-slate-100 flex items-center justify-between">
                <span className={`text-[11px] text-[#04241b] font-black flex items-center gap-1.5 ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
                  <span className="inline-block w-2 bg-emerald-600 h-2 rounded-full animate-pulse"></span>
                  {d('datasheetTitle')}
                </span>
                <span className={`text-[9px] bg-emerald-50 text-emerald-950 font-black px-2.5 py-0.5 rounded-md border border-emerald-100/80 ${isRtl ? 'font-sans' : 'font-mono'}`}>
                  {d('exportGrade')}
                </span>
              </div>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 ${
                direction === 'rtl' ? 'md:divide-x-reverse' : 'md:divide-x'
              } divide-slate-100/85 bg-slate-50/25`}>
                {/* Column One */}
                <div className="divide-y divide-slate-100/70">
                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('varietyStandard')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.type || "Prime Selection Vetted"}
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Weight className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('calibratedWeight')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.weight || "Multi-crate option"}
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Flame className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('flavorProfile')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.flavor || "Natural & Tangy"}
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Palette className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('naturalColorTone')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.color || "Vivid pigments"}
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Minimize2 className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('coreDimensions')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.dimensions || product.specs.size || "Vetted Calibers"}
                    </div>
                  </div>
                </div>

                {/* Column Two */}
                <div className="divide-y divide-slate-100/70">
                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Activity className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('brixSugarIndex')}</span>
                    </div>
                    <div className="text-[11px] text-emerald-990 font-black text-right">
                      {product.specs.brix || "Optimal Standard"}
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Layers className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('bulkPackingStyle')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.packaging || "Bulk crates"}
                    </div>
                  </div>

                  {/* HS CUSTOMS CODE */}
                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <FileText className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('hsCustomsCode')}</span>
                    </div>
                    <div className="text-[11px] text-amber-600 font-bold font-mono text-right">
                      {product.specs.hsCode || "08105000"}
                    </div>
                  </div>

                  {/* GEOGRAPHICAL ORIGIN */}
                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('geographicalOrigin')}</span>
                    </div>
                    <div className="text-[11px] text-slate-900 font-extrabold text-right">
                      {product.specs.origin || "Gilan Caspian region"}
                    </div>
                  </div>

                  {/* EXPORT SEASON */}
                  <div className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-emerald-50/20 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-[11px] text-slate-550">{d('exportSeason')}</span>
                    </div>
                    <div className="text-[11px] text-slate-950 font-extrabold text-right">
                      {product.specs.availableMonths || "Primary Season Cycle"}
                    </div>
                  </div>
                </div>

              </div>

              <div className={`bg-slate-50/70 py-2.5 px-5 border-t border-slate-100 flex items-center gap-2 text-[10.5px] text-slate-400 ${isRtl ? 'font-sans' : 'font-mono'}`}>
                <Info className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <span>{d('customRegulations')}</span>
              </div>
            </div>

            {/* C. INTUITIVE WHATSAPP ADVICE FORM */}
            <div className="bg-white border-2 border-emerald-950 rounded-[2.5rem] p-6 sm:p-8 shadow-xl relative overflow-visible text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[#04241b] text-base leading-none flex items-center gap-1.5">
                    {d('consultDesk')}
                  </h4>
                  <span className={`text-[9.5px] block text-slate-400 font-extrabold mt-1 leading-none text-left ${isRtl ? 'font-sans' : 'font-mono tracking-wider uppercase'}`}>
                    {d('fastResponse')}
                  </span>
                </div>
              </div>

              {!adviceSuccess ? (
                <form onSubmit={handleAdviceSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] uppercase font-black text-slate-500 tracking-wider block">{d('yourName')}</label>
                      <input 
                        type="text" 
                        required
                        placeholder={isRtl ? "مثلا ولادیمیر" : "e.g. Vladimir"} 
                        value={adviceName}
                        onChange={(e) => setAdviceName(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-850 focus:bg-white transition-colors placeholder:text-slate-440 text-left"
                      />
                    </div>

                    <div className="space-y-1.5 relative text-left">
                      <label className="text-[10px] uppercase font-black text-slate-500 tracking-wider block">{d('whatsappMobile')}</label>
                      <div dir="ltr" className="flex items-stretch relative w-full">
                        {/* Custom Searchable Dropdown Button */}
                        <div className="relative shrink-0 flex">
                           <button 
                            type="button"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={`bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-800 font-bold flex items-center gap-1.5 focus:outline-none transition-all rounded-l-xl rounded-r-none border-r-0`}
                          >
                            <span className="text-base select-none">{selectedCountry.flag}</span>
                            <span className="font-mono text-slate-700">+{selectedCountry.code}</span>
                            <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {dropdownOpen && (
                            <>
                              {/* Click outside backdrop close layer */}
                              <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setDropdownOpen(false)} />

                              <div dir="ltr" className="absolute mt-12 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col max-h-72 left-0 text-left">
                                <div className="p-2 border-b border-rose-100/10 bg-slate-50 flex items-center gap-1.5">
                                  <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  <input 
                                    type="text"
                                    placeholder={searchPlaceholders[language] || searchPlaceholders['en']}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-transparent text-xs p-1 focus:outline-none text-slate-800"
                                    autoFocus
                                  />
                                </div>
                                <div className="overflow-y-auto flex-1 py-1 divide-y divide-slate-50 max-h-52">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((c) => (
                                      <button
                                        key={c.name + c.code}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setCountryCode(c.code);
                                          setDropdownOpen(false);
                                          setSearchTerm('');
                                        }}
                                        className={`w-full text-left px-3.5 py-2 hover:bg-emerald-50 text-xs flex items-center justify-between text-slate-705 transition-colors ${
                                          selectedCountry.code === c.code && selectedCountry.name === c.name ? 'bg-emerald-50/60 font-black text-emerald-950' : ''
                                        }`}
                                      >
                                        <div className="flex items-center gap-2 truncate">
                                          <span className="text-sm select-none shrink-0">{c.flag}</span>
                                          <span className="truncate text-slate-700 max-w-[170px]">{c.name}</span>
                                        </div>
                                        <span className="font-mono text-slate-400 font-semibold shrink-0">+{c.code}</span>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="p-3.5 text-center text-xs text-slate-400 italic">
                                      {noResultsPlaceholders[language] || noResultsPlaceholders['en']}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        <input 
                          type="tel" 
                          required
                          placeholder="912 345 6789" 
                          value={adviceMobile}
                          onChange={(e) => setAdviceMobile(e.target.value)}
                          className="w-full bg-slate-50/50 border border-slate-300 border-l-0 rounded-r-xl rounded-l-none px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-850 focus:bg-white transition-colors placeholder:text-slate-450 text-left"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 font-sans text-left">
                      <label className="text-[10px] uppercase font-black text-slate-500 tracking-wider block">{d('yourEmail')}</label>
                      <input 
                        type="email" 
                        placeholder="vladimir@wholesale.ru"
                        value={adviceEmail}
                        onChange={(e) => setAdviceEmail(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-850 focus:bg-white transition-colors placeholder:text-slate-440 text-left"
                      />
                    </div>

                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 mt-4">
                    <p className="text-[10.5px] text-slate-500 italic leading-snug max-w-sm text-left">
                      {d('representativesContactNotice')}
                    </p>
                    <button 
                      type="submit"
                      disabled={isSubmittingAdvice}
                      className="w-full sm:w-auto px-10 py-3.5 bg-emerald-950 hover:bg-black disabled:opacity-50 text-white font-sans font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md text-center cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    >
                      {isSubmittingAdvice ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                          {d('processing')}
                        </>
                      ) : (
                        <>
                          {d('calculateFob')}
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-350 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                  <h4 className="font-display font-black text-[#04241b]">{d('estimatesLoaded')}</h4>
                  <p className="text-xs text-slate-650 max-w-md mx-auto leading-relaxed">
                    {d('estimatesLoadedDesc')}
                  </p>
                  <a 
                    href={`https://wa.me/989900978002?text=Hello%20GilaFruit%20sales,%20I%20am%20interested%20in%2520pricing%2520and%2520availability%2520for%252520${encodeURIComponent(product.name)}`}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-emerald-850 hover:bg-emerald-950 text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all"
                  >
                    {d('openSalesDesk')}
                  </a>
                </motion.div>
              )}
            </div>

          </div>
        </div>

        {/* 4. CHILL CHAIN PIPELINE WORKFLOW */}
        <section className="mt-20 pt-16 border-t border-slate-200/60 text-left">
          <div className="space-y-2 mb-8">
            <span className={`text-xs text-amber-600 font-black block ${isRtl ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>
              {d('coldChainScheme')}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
              {d('coldChainTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-3xl leading-relaxed">
              {d('coldChainDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white border border-slate-205 rounded-[1.8rem] space-y-3 shadow-xs hover:border-emerald-800 transition-colors">
              <span className={`text-emerald-800 font-black text-[10px] block ${isRtl ? 'font-sans' : 'font-mono'}`}>{getStageBadge(1)}</span>
              <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase">{d('stage01Title')}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {d('stage01Desc')}
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-205 rounded-[1.8rem] space-y-3 shadow-xs hover:border-emerald-800 transition-colors">
              <span className={`text-emerald-800 font-black text-[10px] block ${isRtl ? 'font-sans' : 'font-mono'}`}>{getStageBadge(2)}</span>
              <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase">{d('stage02Title')}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {d('stage02Desc')}
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-205 rounded-[1.8rem] space-y-3 shadow-xs hover:border-emerald-800 transition-colors">
              <span className={`text-emerald-800 font-black text-[10px] block ${isRtl ? 'font-sans' : 'font-mono'}`}>{getStageBadge(3)}</span>
              <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase">{d('stage03Title')}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {d('stage03Desc')}
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-205 rounded-[1.8rem] space-y-3 shadow-xs hover:border-emerald-800 transition-colors">
              <span className={`text-emerald-800 font-black text-[10px] block ${isRtl ? 'font-sans' : 'font-mono'}`}>{getStageBadge(4)}</span>
              <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase">{d('stage04Title')}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {d('stage04Desc')}
              </p>
            </div>

          </div>
        </section>

        {/* PRODUCTION & PACKAGING PROCESS & QUALITY SAFETY GUARANTEE */}
        <section className="mt-20 pt-16 border-t border-slate-200/60 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="space-y-4">
              <span className={`text-[10px] font-black text-amber-600 block ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>{d('stepByStepPrep')}</span>
              <h3 className="font-display font-black text-2xl text-slate-900 leading-tight">
                {d('prodPackingProcess')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                {d('prodPackingDesc', product.name)}
              </p>
            </div>

            <div className="space-y-4">
              <span className={`text-[10px] font-black text-emerald-800 block ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>{d('complianceSafety')}</span>
              <h3 className="font-display font-black text-2xl text-slate-900 leading-tight">
                {d('qualitySafetyTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans font-normal">
                {d('qualitySafetyDesc', product.name)}
              </p>
            </div>

          </div>
        </section>

        {/* 5. MULTI-ANGLE MEDIA VIDEO WALKTHROUGH & ACCORDION FAQS */}
        <section className="mt-20 pt-16 border-t border-slate-150 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
            
            {/* Left Box: Video Player Mockup */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <span className={`text-xs text-indigo-700 font-bold block ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-wider'}`}>{d('facilityWalkthrough')}</span>
                <h3 className="font-display font-black text-xl text-slate-950">
                  {d('liveFootageTitle')}
                </h3>
              </div>

              <div 
                className="relative aspect-video rounded-[2rem] overflow-hidden border border-slate-200/80 bg-slate-950 shadow-2xl group cursor-pointer"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                {!isVideoPlaying ? (
                  <>
                    <img 
                      src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600" 
                      alt="Sorting facility" 
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1s]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-305">
                        <Play className="w-6 h-6 fill-slate-950 text-slate-950 ml-1" />
                      </div>
                    </div>
                    
                    <div className={`absolute bottom-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-xs rounded-xl text-[10px] text-slate-300 ${isRtl ? 'font-sans' : 'font-mono'}`}>
                      📹 {language === 'fa' ? "سالن سورتینگ آستارا - ۲:۱۴ دقیقه" : "Gilan Sorting house - 2:14 min"}
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-slate-950 flex items-center justify-center p-4 text-center select-none">
                    <div className="space-y-4">
                      <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className={`text-xs text-white ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>{d('sortingCenterLoading')}</p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsVideoPlaying(false);
                        }}
                        className="text-[10px] px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-350 rounded-lg"
                      >
                        {d('closePlayback')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Box: Procuring FAQ Accordion */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className={`text-xs text-amber-600 font-bold block ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-wider'}`}>{d('faqHeader')}</span>
                <h3 className="font-display font-black text-xl text-slate-950">
                  {d('faqTitle')}
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                {officialFaqa.map((faq, idx) => {
                  const isExpanded = expandedFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-205 rounded-2xl overflow-hidden shadow-xs transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-850"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-emerald-850' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-sans">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 6. ADVANTAGES & CAPACITY SUMMARY */}
        <section className="mt-20 bg-[#022a1f] text-white rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl text-left space-y-2 mb-10">
            <span className={`text-[10px] font-black block ${isRtl ? 'font-sans text-amber-300' : 'font-mono text-amber-400 uppercase tracking-widest'}`}>
              {d('secureSupplies')}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {d('whyInternational')}
            </h3>
            <div className="w-12 h-1 bg-amber-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-sans">
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0 text-amber-300">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h5 className="font-extrabold text-white text-base">{d('volSupplyTitle')}</h5>
                <p className="text-slate-350 text-xs leading-relaxed mt-1.5 font-light">
                  {d('volSupplyDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0 text-amber-300">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h5 className="font-extrabold text-white text-base">{d('coldWarehousingTitle')}</h5>
                <p className="text-slate-350 text-xs leading-relaxed mt-1.5 font-light">
                  {d('coldWarehousingDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0 text-amber-300">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h5 className="font-extrabold text-white text-base">{d('customsTransitTitle')}</h5>
                <p className="text-slate-350 text-xs leading-relaxed mt-1.5 font-light">
                  {d('customsTransitDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0 text-amber-300">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h5 className="font-extrabold text-white text-base">{d('packingPricingTitle')}</h5>
                <p className="text-slate-350 text-xs leading-relaxed mt-1.5 font-light">
                  {d('packingPricingDesc')}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. NEW VALUE MATRIX, TARGET MARKETS & INQUIRIES */}
        <section className="mt-20 space-y-16 text-left">
          
          {/* A. Advantages of Buying from Our Company */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className={`text-[10px] font-black bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block ${isRtl ? 'font-sans text-[#04241b]' : 'font-mono uppercase tracking-widest text-[#04241b]'}`}>
                🚀 {d('strategicAdvantages')}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                {d('advantagesOfCompany')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-3xl leading-relaxed">
                {d('advantagesIntro', product.name)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: d('adv1Title'),
                  text: d('adv1Desc', product.name)
                },
                {
                  title: d('adv2Title'),
                  text: d('adv2Desc', product.name)
                },
                {
                  title: d('adv3Title'),
                  text: d('adv3Desc', product.name)
                },
                {
                  title: d('adv4Title'),
                  text: d('adv4Desc', product.name)
                },
                {
                  title: d('adv5Title'),
                  text: d('adv5Desc', product.name)
                }
              ].map((adv, idx) => (
                <div key={idx} className="bg-slate-50/70 p-6 rounded-3xl border border-slate-100/80 shadow-xs flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <h4 className="font-display font-black text-sm text-slate-900 leading-tight">
                        {adv.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[12px] text-slate-600 leading-relaxed font-sans font-normal">
                      {adv.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B. Target Markets */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <div className="space-y-2">
              <span className={`text-[10px] font-black bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block ${isRtl ? 'font-sans text-[#04241b]' : 'font-mono uppercase tracking-widest text-[#04241b]'}`}>
                🌍 {d('exportDestinations')}
              </span>
              <h3 className="font-display font-black text-2xl text-slate-950">
                {d('targetMarkets')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal max-w-4xl">
                {d('targetMarketsDesc', product.name)}
              </p>
            </div>

            {/* Beautiful visual display of destination countries with flags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { name: d('mktRussia'), flag: "🇷🇺" },
                { name: d('mktBelarus'), flag: "🇧🇾" },
                { name: d('mktAzerbaijan'), flag: "🇦🇿" },
                { name: d('mktGeorgia'), flag: "🇬🇪" },
                { name: d('mktArmenia'), flag: "🇦🇲" },
                { name: d('mktTurkey'), flag: "🇹🇷" },
                { name: d('mktPersianGulf'), flag: "🌐" }
              ].map((mkt, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl shadow-2xs font-sans text-xs font-semibold text-slate-800">
                  <span className="text-lg select-none">{mkt.flag}</span>
                  <span>{mkt.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* C. Contact Us */}
          <div className="bg-[#022a1f]/20 border border-emerald-950/10 p-6 sm:p-8 rounded-[2rem] space-y-4">
            <div className="space-y-1.5">
              <span className={`text-[10px] font-black text-emerald-800 block ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
                📞 {d('connectWithSales')}
              </span>
              <h4 className="font-display font-black text-slate-900 text-lg">
                {d('contactUsTitle')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                {d('contactUsDesc', product.name)}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/989900978002" target="_blank" className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-850 hover:bg-emerald-950 text-white rounded-xl text-xs font-black transition-all ${isRtl ? 'font-sans' : 'uppercase tracking-wider'}`}>
                <MessageSquare className="w-3.5 h-3.5" />
                {d('whatsappHelp')}
              </a>
              <a href="mailto:info@gilafruit.com" className={`inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-250 hover:bg-slate-50 text-slate-850 rounded-xl text-xs font-black transition-all ${isRtl ? 'font-sans' : 'uppercase tracking-wider'}`}>
                <Mail className="w-3.5 h-3.5" />
                info@gilafruit.com
              </a>
            </div>
          </div>

        </section>

        {/* 8. PHOTO GALLERY (Ultra-Premium Collection Grid) */}
        <section className="mt-20 pt-12 border-t border-slate-200/60 text-left" id="industrial-excellence-gallery">
          <div className="space-y-3 mb-10">
            <span className={`text-[10px] font-black bg-amber-55/65 border border-amber-200/30 px-3 py-1 rounded-full inline-block ${isRtl ? 'font-sans text-amber-600' : 'font-mono uppercase tracking-widest text-amber-600'}`}>
              📷 {d('industrialExcellence')}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              {d('galleryDetailsTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              {d('galleryDetailsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((pic, i) => {
              const stepTitle = d(`step0${i + 1}Title`) || pic.title;
              return (
                <div 
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative bg-[#022c22] rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
                >
                  {/* Image */}
                  <img 
                    src={pic.url} 
                    alt={stepTitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Clean Minimalist Hover Overlay - Zero Text, Just an elegant magnifying glass search icon */}
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-350 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-350 shadow-lg">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. PREMIUM FEEDBACK & INTERACTIVE BROKER REVIEWS MODULE - BEAUTIFIED */}
        <section className="mt-20 bg-slate-50 border border-slate-200/80 rounded-[3rem] p-6 sm:p-12 text-left relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 mb-12 border-b border-slate-200/60 pb-6 relative z-10">
            <span className={`text-[10px] text-emerald-800 font-black bg-emerald-100/65 px-3 py-1 rounded-full inline-block ${isRtl ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>
              {d('reviewBoard')}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
              {d('reviewTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl">
              {d('reviewDesc')}
            </p>
          </div>

          {/* Active Review feed */}
          <div className="space-y-6 mb-12 relative z-10">
            {userComments.map((comment) => {
              // Localized comment text key
              const commentTextKey = `comment_${comment.author.toLowerCase().replace(/[^a-z]/g, '')}`;
              const transText = d(commentTextKey) || comment.text;
              return (
                <div 
                  key={comment.id}
                  className="p-6 sm:p-8 bg-white border border-slate-200/70 rounded-3xl shadow-xs hover:border-emerald-600/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#04241b] text-emerald-300 flex items-center justify-center font-mono font-black text-base shadow-inner shrink-0">
                        {comment.author.charAt(0)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-display font-black text-sm text-slate-900 leading-tight">
                            {comment.author}
                          </h4>
                          {comment.verified && (
                            <span className={`px-2.5 py-0.5 bg-emerald-50 border border-emerald-250 text-emerald-850 text-[9px] rounded-lg font-bold flex items-center gap-1 ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-wider'}`}>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> {d('verifiedAgent')}
                            </span>
                          )}
                        </div>
                        <span className={`text-[10.5px] text-slate-400 block mt-1 leading-none ${isRtl ? 'font-sans' : 'font-mono'}`}>
                          {d('registeredDispatch')}: {comment.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Rating Stars display */}
                    <div className="flex items-center gap-0.5 bg-slate-50/80 px-3 py-1.5 rounded-xl border border-slate-150 shrink-0">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-3.5 h-3.5 ${star <= comment.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-250'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 font-sans font-normal">
                    "{transText}"
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button 
                      onClick={() => handleLikeComment(comment.id)}
                      className={`flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-emerald-850 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl transition-all shadow-xs ${isRtl ? 'font-sans' : 'font-mono'}`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-slate-400" />
                      <span>{d('helpful')} ({comment.likes})</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comment composer Form */}
          <div className="border-t border-slate-200 pt-10 space-y-6 relative z-10">
            <div className="space-y-2">
              <span className={`text-[10px] text-amber-600 font-black inline-block ${isRtl ? 'font-sans' : 'font-mono tracking-widest uppercase'}`}>
                {d('secureTimeline')}
              </span>
              <h4 className="font-display font-black text-slate-900 text-xl leading-none">
                {d('submitTrade')}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {d('submitTradeDesc')}
              </p>
            </div>

            {commentSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-emerald-50 border border-emerald-250 text-emerald-900 rounded-2xl text-xs flex items-center gap-2.5 shadow-inner"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{d('cargoSuccess')}</span>
              </motion.div>
            )}

            <form onSubmit={handleCommentSubmit} className="space-y-6 font-sans">
              
              {/* Rating selector indicator */}
              <div className="space-y-2 text-left">
                <label className={`text-[10px] font-black text-slate-500 block ${isRtl ? 'font-sans' : 'uppercase tracking-wider'}`}>{d('productEvaluation')}</label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-white p-2 rounded-2xl border border-slate-200">
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setUserRating(rate)}
                        className="text-slate-400 hover:scale-110 transition-transform p-0.5 pointer-events-auto"
                      >
                        <Star className={`w-6 h-6 ${rate <= userRating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`} />
                      </button>
                    ))}
                  </div>
                  <span className={`text-[11px] text-slate-550 ml-2 font-bold ${isRtl ? 'font-sans' : 'font-mono'}`}>({userRating} {d('outOfStars')})</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="space-y-1.5 text-left">
                  <label className={`text-[10px] font-black text-slate-500 block ${isRtl ? 'font-sans' : 'uppercase tracking-wider'}`}>{d('displayName')}</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Vladimir Fedorov"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    className="w-full bg-white border border-slate-250 rounded-2xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-850 focus:bg-white transition-all placeholder:text-slate-400 shadow-xs"
                  />
                </div>

                <div className="space-y-1.5 text-left font-sans">
                  <label className={`text-[10px] font-black text-slate-500 block ${isRtl ? 'font-sans' : 'uppercase tracking-wider'}`}>{d('tradeEmail')}</label>
                  <input 
                    type="email" 
                    required
                    placeholder="vladimir@fedorov-imports.ru"
                    value={commentEmail}
                    onChange={(e) => setCommentEmail(e.target.value)}
                    className="w-full bg-white border border-slate-250 rounded-2xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-850 focus:bg-white transition-all placeholder:text-slate-400 shadow-xs"
                  />
                </div>

              </div>

              <div className="space-y-1.5 text-left">
                <label className={`text-[10px] font-black text-slate-500 block ${isRtl ? 'font-sans' : 'uppercase tracking-wider'}`}>{d('wholesaleStatement')}</label>
                <textarea 
                  rows={4}
                  required
                  placeholder={d('statementPlaceholder')}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-white border border-slate-250 rounded-2xl p-4 text-xs text-slate-900 focus:outline-none focus:border-emerald-850 focus:bg-white transition-all placeholder:text-slate-400 shadow-xs resize-none font-sans font-normal"
                />
              </div>

              {/* recaptcha check */}
              <div className="p-4 bg-white border border-slate-200 rounded-2xl max-w-sm flex items-center justify-between shadow-xs select-none">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="recaptcha-check"
                    checked={isCaptchaChecked}
                    onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                    className="w-5 h-5 accent-emerald-850 cursor-pointer pointer-events-auto"
                  />
                  <label htmlFor="recaptcha-check" className="text-slate-700 font-extrabold text-xs cursor-pointer select-none">
                    {d('notRobot')}
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" 
                    alt="reCAPTCHA" 
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-[8px] text-slate-405 font-sans mt-0.5 font-bold">Privacy - Terms</span>
                </div>
              </div>

              <div className="pt-2 text-left">
                <button 
                  type="submit"
                  className={`px-8 py-3.5 bg-emerald-950 hover:bg-emerald-900 text-white font-sans font-black text-xs rounded-2xl transition-all shadow-md cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 ${isRtl ? '' : 'uppercase tracking-widest'}`}
                >
                  {d('postStatement')}
                  <Send className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>

            </form>
          </div>

        </section>

      </div>

      {/* Lightbox Photo Gallery Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (() => {
          const lightboxTitle = d(`step0${lightboxIndex + 1}Title`) || GALLERY_IMAGES[lightboxIndex].title;
          const lightboxDesc = d(`step0${lightboxIndex + 1}Desc`) || GALLERY_IMAGES[lightboxIndex].subtitle;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/98 z-[999] flex flex-col items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-[100] hover:scale-105"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-[100] hover:scale-105"
                title="Previous"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-[100] hover:scale-105"
                title="Next"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Lightbox content wrapper */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative max-w-4xl w-full flex flex-col items-center gap-6 text-center z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative group/zoom select-none max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img
                    src={GALLERY_IMAGES[lightboxIndex].url}
                    alt={lightboxTitle}
                    className="max-h-[70vh] max-w-full object-contain pointer-events-auto"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle GilaFruit watermark on the image itself */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl flex justify-between items-center text-[10px] sm:text-xs text-white font-mono opacity-85 z-20 pointer-events-none border border-white/5">
                    <span className="text-amber-350 font-extrabold tracking-wider">www.GilaFruit.com</span>
                    <span className="text-[#cbd5e1] font-bold">+98 990 097 8002</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-white px-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className={`text-[10px] bg-emerald-600/30 border border-emerald-500/20 text-emerald-300 px-3 py-1 rounded-md font-bold ${isRtl ? 'font-sans' : 'font-mono uppercase tracking-widest'}`}>
                      {isRtl ? `تصویر ${lightboxIndex + 1} از ${GALLERY_IMAGES.length}` : `PHOTO ${lightboxIndex + 1} OF ${GALLERY_IMAGES.length}`}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-amber-300 tracking-tight">
                    {lightboxTitle}
                  </h4>
                  {lightboxDesc && (
                    <p className="text-xs sm:text-sm text-slate-350 max-w-2xl mx-auto leading-relaxed font-sans font-light">
                      {lightboxDesc}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
}
