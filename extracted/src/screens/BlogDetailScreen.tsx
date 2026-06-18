import { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, Clock, Calendar, Globe, Share2, Tag, Search, CheckCircle2, 
  ChevronRight, Phone, Send, FileText, HelpCircle, MapPin, CheckSquare, 
  Check, ThumbsUp, MessageSquare, Twitter, Facebook, Linkedin, ArrowUp,
  Award, RefreshCw, AlertCircle, Info, Play, Volume2, ShieldCheck
} from 'lucide-react';
import { BlogArticle } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { BLOG_LOCALES } from './BlogScreen';
import { KIWI_RUSSIA_TRANSLATIONS } from '../utils/kiwiRussiaTranslations';

interface CountryItem {
  name: string;
  code: string;
  flag: string;
}

const COUNTRIES: CountryItem[] = [
  { name: 'Iran', code: '98', flag: '🇮🇷' },
  { name: 'Russia', code: '7', flag: '🇷🇺' },
  { name: 'United Arab Emirates', code: '971', flag: '🇦🇪' },
  { name: 'India', code: '91', flag: '🇮🇳' },
  { name: 'Turkey', code: '90', flag: '🇹🇷' },
  { name: 'Kazakhstan', code: '7', flag: '🇰🇿' },
  { name: 'Iraq', code: '964', flag: '🇮🇶' },
  { name: 'Azerbaijan', code: '994', flag: '🇦🇿' },
  { name: 'Oman', code: '968', flag: '🇴🇲' },
  { name: 'Saudi Arabia', code: '966', flag: '🇸🇦' },
  { name: 'Qatar', code: '974', flag: '🇶🇦' },
  { name: 'Kuwait', code: '965', flag: '🇰🇼' },
  { name: 'China', code: '86', flag: '🇨🇳' },
  { name: 'Germany', code: '49', flag: '🇩🇪' },
  { name: 'United Kingdom', code: '44', flag: '🇬🇧' },
  { name: 'United States', code: '1', flag: '🇺🇸' },
  { name: 'Canada', code: '1', flag: '🇨🇦' },
  { name: 'Uzbekistan', code: '998', flag: '🇺🇿' },
  { name: 'Belarus', code: '375', flag: '🇧🇾' },
  { name: 'Ukraine', code: '380', flag: '🇺🇦' },
  { name: 'Georgia', code: '995', flag: '🇬🇪' },
  { name: 'Armenia', code: '374', flag: '🇦🇲' },
  { name: 'Kyrgyzstan', code: '996', flag: '🇰🇬' },
  { name: 'Tajikistan', code: '992', flag: '🇹🇯' },
  { name: 'Turkmenistan', code: '993', flag: '🇹🇲' },
  { name: 'Pakistan', code: '92', flag: '🇵🇰' },
  { name: 'Afghanistan', code: '93', flag: '🇦🇫' },
  { name: 'Egypt', code: '20', flag: '🇪🇬' },
  { name: 'Australia', code: '61', flag: '🇦🇺' },
  { name: 'New Zealand', code: '64', flag: '🇳🇿' },
  { name: 'Japan', code: '81', flag: '🇯🇵' },
  { name: 'South Korea', code: '82', flag: '🇰🇷' },
  { name: 'Singapore', code: '65', flag: '🇸🇬' },
  { name: 'Malaysia', code: '60', flag: '🇲🇾' },
  { name: 'Thailand', code: '66', flag: '🇹🇭' },
  { name: 'Vietnam', code: '84', flag: '🇻🇳' },
  { name: 'Indonesia', code: '62', flag: '🇮🇩' },
  { name: 'Brazil', code: '55', flag: '🇧🇷' },
  { name: 'Argentina', code: '54', flag: '🇦🇷' },
  { name: 'Mexico', code: '52', flag: '🇲🇽' },
  { name: 'South Africa', code: '27', flag: '🇿🇦' },
  { name: 'France', code: '33', flag: '🇫🇷' },
  { name: 'Italy', code: '39', flag: '🇮🇹' },
  { name: 'Spain', code: '34', flag: '🇪🇸' },
  { name: 'Netherlands', code: '31', flag: '🇳🇱' },
  { name: 'Belgium', code: '32', flag: '🇧🇪' },
  { name: 'Switzerland', code: '41', flag: '🇨🇭' },
  { name: 'Sweden', code: '46', flag: '🇸🇪' },
  { name: 'Norway', code: '47', flag: '🇳🇴' },
  { name: 'Finland', code: '358', flag: '🇫🇮' },
  { name: 'Poland', code: '48', flag: '🇵🇱' },
  { name: 'Austria', code: '43', flag: '🇦🇹' },
  { name: 'Czech Republic', code: '420', flag: '🇨🇿' },
  { name: 'Denmark', code: '45', flag: '🇩🇰' },
  { name: 'Greece', code: '30', flag: '🇬🇷' },
  { name: 'Hungary', code: '36', flag: '🇭🇺' },
  { name: 'Ireland', code: '353', flag: '🇮🇪' },
  { name: 'Portugal', code: '351', flag: '🇵🇹' },
  { name: 'Romania', code: '40', flag: '🇷🇴' },
  { name: 'Slovakia', code: '421', flag: '🇸🇰' },
  { name: 'Slovenia', code: '386', flag: '🇸🇮' },
  { name: 'Bahrain', code: '973', flag: '🇧🇭' },
  { name: 'Jordan', code: '962', flag: '🇯🇴' },
  { name: 'Lebanon', code: '961', flag: '🇱🇧' },
  { name: 'Syria', code: '963', flag: '🇸🇾' },
  { name: 'Yemen', code: '967', flag: '🇾🇪' },
  { name: 'Algeria', code: '213', flag: '🇩🇿' },
  { name: 'Morocco', code: '212', flag: '🇲🇦' },
  { name: 'Tunisia', code: '216', flag: '🇹🇳' },
  { name: 'Libya', code: '218', flag: '🇱🇾' },
  { name: 'Kenya', code: '254', flag: '🇰🇪' },
  { name: 'Nigeria', code: '234', flag: '🇳🇬' },
  { name: 'Ghana', code: '233', flag: '🇬🇭' },
  { name: 'Philippines', code: '63', flag: '🇵🇭' },
  { name: 'Chile', code: '56', flag: '🇨🇱' },
  { name: 'Colombia', code: '57', flag: '🇨🇴' },
  { name: 'Peru', code: '51', flag: '🇵🇪' },
  { name: 'Venezuela', code: '58', flag: '🇻🇪' },
  { name: 'Ecuador', code: '593', flag: '🇪🇨' },
  { name: 'Bolivia', code: '591', flag: '🇧🇴' },
  { name: 'Paraguay', code: '595', flag: '🇵🇾' },
  { name: 'Uruguay', code: '598', flag: '🇺🇾' },
  { name: 'Costa Rica', code: '506', flag: '🇨🇷' },
  { name: 'Panama', code: '507', flag: '🇵🇦' },
  { name: 'Guatemala', code: '502', flag: '🇬🇹' },
  { name: 'Honduras', code: '504', flag: '🇭🇳' },
  { name: 'El Salvador', code: '503', flag: '🇸🇻' },
  { name: 'Nicaragua', code: '505', flag: '🇳🇮' },
  { name: 'Cuba', code: '53', flag: '🇨🇺' },
  { name: 'Dominican Republic', code: '1', flag: '🇩🇴' },
  { name: 'Puerto Rico', code: '1', flag: '🇵🇷' },
  { name: 'Jamaica', code: '1', flag: '🇯🇲' },
  { name: 'Sri Lanka', code: '94', flag: '🇱🇰' },
  { name: 'Bangladesh', code: '880', flag: '🇧🇩' },
  { name: 'Nepal', code: '977', flag: '🇳🇵' },
  { name: 'Maldives', code: '960', flag: '🇲🇻' },
  { name: 'Mongolia', code: '976', flag: '🇲🇳' },
  { name: 'Cyprus', code: '357', flag: '🇨🇾' },
  { name: 'Malta', code: '356', flag: '🇲🇹' },
  { name: 'Iceland', code: '354', flag: '🇮🇸' },
  { name: 'Luxembourg', code: '352', flag: '🇱🇺' }
];

const RELATED_POSTS_LOCALIZATION: Record<string, string> = {
  en: "Related Posts",
  fa: "مطالب مرتبط",
  ru: "Похожие статьи",
  ar: "مقالات ذات صلة",
  tr: "İlgili Yazılar",
  uz: "Tegishli maqolalar",
  az: "Aid olan yazılar",
  hi: "संबंधित पोस्ट",
  uk: "Схожі статті"
};

const EXPORT_LOCALIZATION: Record<string, string> = {
  en: "Export",
  fa: "صادرات",
  ru: "Экспорт",
  ar: "تصدير",
  tr: "İhracat",
  uz: "Eksport",
  az: "Eksport",
  hi: "निर्यात",
  uk: "Експорт"
};

const TAG_LOCALIZATION: Record<string, Record<string, string>> = {
  en: { export: "Export", kiwi: "Kiwi", russia: "Russia" },
  fa: { export: "صادرات", kiwi: "کیوی", russia: "روسیه" },
  ru: { export: "Экспорт", kiwi: "Киви", russia: "Россия" },
  ar: { export: "تصدير", kiwi: "كيوي", russia: "روسيا" },
  tr: { export: "İhracat", kiwi: "Kivi", russia: "Rusya" },
  uz: { export: "Eksport", kiwi: "Kivi", russia: "Rossiya" },
  az: { export: "Eksport", kiwi: "Kivi", russia: "Rusiya" },
  hi: { export: "निर्यात", kiwi: "किवी", russia: "रूस" },
  uk: { export: "Експорт", kiwi: "Ківі", russia: "Росія" }
};

const SHARE_LOCALIZATION: Record<string, string> = {
  en: "Share this post:",
  fa: "اشتراک‌گذاری این مطلب:",
  ru: "Поделиться статьей:",
  ar: "شارك هذا المنشور:",
  tr: "Bu yazıyı paylaşın:",
  uz: "Ushbu xabarni ulashing:",
  az: "Bu yazını paylaşın:",
  hi: "इस पोस्ट को साझा करें:",
  uk: "Поділитися статтею:"
};

const COMMENTS_LOCALIZATION: Record<string, {
  commentsTitle: string;
  offlineStorageLabel: string;
  helpfulReviewLabel: string;
  leaveReplyTitle: string;
  emailNoteLabel: string;
  commentTextLabel: string;
  commentTextPlaceholder: string;
  nameLabel: string;
  emailLabel: string;
  websiteLabel: string;
  savePropsLabel: string;
  notARobotLabel: string;
  postButtonLabel: string;
  postingLabel: string;
}> = {
  en: {
    commentsTitle: "Comments",
    offlineStorageLabel: "Offline-moderated storage",
    helpfulReviewLabel: "Helpful review",
    leaveReplyTitle: "Leave a Reply",
    emailNoteLabel: "Your email address will not be published. Required fields are marked",
    commentTextLabel: "Comment",
    commentTextPlaceholder: "Share your thoughts or questions about importing fruits from Iran...",
    nameLabel: "Name",
    emailLabel: "Email Address",
    websiteLabel: "Website Link",
    savePropsLabel: "Save my name, email, and website in this browser for the next time I comment.",
    notARobotLabel: "I'm not a robot",
    postButtonLabel: "Post Comment",
    postingLabel: "Posting comment..."
  },
  fa: {
    commentsTitle: "دیدگاه‌ها",
    offlineStorageLabel: "ذخیره‌سازی با نظارت آفلاین",
    helpfulReviewLabel: "بررسی مفید بود",
    leaveReplyTitle: "ارسال دیدگاه",
    emailNoteLabel: "نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند",
    commentTextLabel: "دیدگاه",
    commentTextPlaceholder: "دیدگاه‌ها یا پرسش‌های خود را درباره واردات میوه از ایران به اشتراک بگذارید...",
    nameLabel: "نام",
    emailLabel: "نشانی ایمیل",
    websiteLabel: "وبگاه (وب‌سایت)",
    savePropsLabel: "ذخیره نام، ایمیل و وب‌سایت من در این مرورگر برای دفعات بعدی که دیدگاه ارسال می‌کنم.",
    notARobotLabel: "من ربات نیستم",
    postButtonLabel: "فرستادن دیدگاه",
    postingLabel: "در حال فرستادن دیدگاه..."
  },
  ru: {
    commentsTitle: "Комментарии",
    offlineStorageLabel: "Офлайн-модерируемое хранилище",
    helpfulReviewLabel: "Полезный отзыв",
    leaveReplyTitle: "Оставить комментарий",
    emailNoteLabel: "Ваш электронный адрес не будет опубликован. Обязательные поля помечены",
    commentTextLabel: "Комментарий",
    commentTextPlaceholder: "Поделитесь своими мыслями или вопросами об импорте фруктов из Ирана...",
    nameLabel: "Имя",
    emailLabel: "Электронная почта",
    websiteLabel: "Веб-сайт",
    savePropsLabel: "Сохранить мое имя, email и веб-сайт в этом браузере для последующих комментариев.",
    notARobotLabel: "Я не робот",
    postButtonLabel: "Отправить комментарий",
    postingLabel: "Отправка комментария..."
  },
  ar: {
    commentsTitle: "التعليقات",
    offlineStorageLabel: "تخزين خاضع للإشراف دون اتصال بالإنترنت",
    helpfulReviewLabel: "مراجعة مفيدة",
    leaveReplyTitle: "اترك تعليقًا",
    emailNoteLabel: "لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ",
    commentTextLabel: "التعليق",
    commentTextPlaceholder: "شاركنا أفكارك أو أسئلتك حول استيراد الفواكه من إيران...",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    websiteLabel: "الموقع الإلكتروني",
    savePropsLabel: "احفظ اسمي، بريدي الإلكتروني، وموقعي الإلكتروني في هذا المتصفح للمرة القادمة التي أعلق فيها.",
    notARobotLabel: "أنا لست برنامج روبوت",
    postButtonLabel: "إرسال التعليق",
    postingLabel: "جاري إرسال التعليق..."
  },
  tr: {
    commentsTitle: "Yorumlar",
    offlineStorageLabel: "Çevrimdışı denetimli depolama",
    helpfulReviewLabel: "Faydalı değerlendirme",
    leaveReplyTitle: "Yorum Yazın",
    emailNoteLabel: "E-posta adresiniz yayınlanmayacaktır. Gerekli alanlar işaretlenmiştir",
    commentTextLabel: "Yorum",
    commentTextPlaceholder: "İran'dan meyve ithalatı hakkındaki düşüncelerinizi veya sorularınızı paylaşın...",
    nameLabel: "Ad",
    emailLabel: "Eposta Adresi",
    websiteLabel: "Web Sitesi",
    savePropsLabel: "Bir dahaki sefere yorum yaptığımda kullanılmak üzere adımı, e-postamı ve web sitemi bu tarayıcıya kaydet.",
    notARobotLabel: "Ben robot değilim",
    postButtonLabel: "Yorumu Gönder",
    postingLabel: "Yorum gönderiliyor..."
  },
  uz: {
    commentsTitle: "Fikr-mulohazalar",
    offlineStorageLabel: "Oflayn moderatsiya qilinadigan saqlash joyi",
    helpfulReviewLabel: "Foydali sharh",
    leaveReplyTitle: "Fikr qoldiring",
    emailNoteLabel: "Sizning elektron pochta manzilingiz chop etilmaydi. Majburiy maydonlar belgilangan",
    commentTextLabel: "Izoh",
    commentTextPlaceholder: "Erandan meva import qilish haqidagi fikrlaringiz yoki savollaringizni baham ko'ring...",
    nameLabel: "Ism",
    emailLabel: "Elektron pochta",
    websiteLabel: "Veb-sayt",
    savePropsLabel: "Keyingi safar sharh qoldirishim uchun ismim, elektron pochta va veb-saytimni ushbu brauzerda saqlang.",
    notARobotLabel: "Men robot emasman",
    postButtonLabel: "Izoh qoldirish",
    postingLabel: "Izoh yuborilmoqda..."
  },
  az: {
    commentsTitle: "Şərhlər",
    offlineStorageLabel: "Oflayn moderasiya olunan yaddaş",
    helpfulReviewLabel: "Faydalı rəy",
    leaveReplyTitle: "Rəy bildirin",
    emailNoteLabel: "E-poçt ünvanınız dərc olunmayacaq. Mütləq sahələr işarələnib",
    commentTextLabel: "Şərh",
    commentTextPlaceholder: "İrandan meyvə idxalı ilə bağlı fikirlərinizi və ya suallarınızı paylaşın...",
    nameLabel: "Ad",
    emailLabel: "E-poçt ünvanı",
    websiteLabel: "Vebsayt",
    savePropsLabel: "Növbəti rəy bildirməyim üçün adımı, e-poçtumu və vebsaytımı bu brauzərdə yadda saxla.",
    notARobotLabel: "Mən robot deyiləm",
    postButtonLabel: "Şərh yaz",
    postingLabel: "Şərh göndərilir..."
  },
  hi: {
    commentsTitle: "टिप्पणियाँ",
    offlineStorageLabel: "ऑफ़लाइन-मध्यस्थता वाली स्टोरेज",
    helpfulReviewLabel: "उपयोगी समीक्षा",
    leaveReplyTitle: "एक जवाब छोड़ें",
    emailNoteLabel: "आपका ईमेल पता प्रकाशित नहीं किया जाएगा। आवश्यक फ़ील्ड चिह्नित हैं",
    commentTextLabel: "टिप्पणी",
    commentTextPlaceholder: "इरान से फलों के आयात के बारे में अपने विचार या प्रश्न साझा करें...",
    nameLabel: "नाम",
    emailLabel: "ईमेल पता",
    websiteLabel: "वेबसाइट",
    savePropsLabel: "अगली बार टिप्पणी करने के लिए इस ब्राउज़र में मेरा नाम, ईमेल और वेबसाइट सहेजें।",
    notARobotLabel: "मैं रोबOT नहीं हूँ",
    postButtonLabel: "टिप्पणी भेजें",
    postingLabel: "टिप्पणी पोस्ट की जा रही है..."
  },
  uk: {
    commentsTitle: "Коментарі",
    offlineStorageLabel: "Офлайн-модероване сховище",
    helpfulReviewLabel: "Корисний відгук",
    leaveReplyTitle: "Залишити відповідь",
    emailNoteLabel: "Ваша електронна адреса не буде опублікована. Обов'язкові поля позначені",
    commentTextLabel: "Коментар",
    commentTextPlaceholder: "Поділіться своїми думками або питаннями про імпорт фруктів з Ірану...",
    nameLabel: "Ім'я",
    emailLabel: "Електронна пошта",
    websiteLabel: "Веб-сайт",
    savePropsLabel: "Зберегти моє ім'я, email та веб-сайт у цьому браузері для наступних коментарів.",
    notARobotLabel: "Я не robot",
    postButtonLabel: "Надіслати коментар",
    postingLabel: "Надсилання коментаря..."
  }
};

const WHATSAPP_ADVICE_LOCALIZATION: Record<string, {
  title: string;
  subtitle: string;
  successTitle: string;
  successDesc: string;
  yourNameLabel: string;
  yourNamePlaceholder: string;
  mobileLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  searchCountryPlaceholder: string;
  noCountriesPlaceholder: string;
  footerText: string;
  submitButton: string;
}> = {
  en: {
    title: "Advice on WhatsApp",
    subtitle: "GilaFruit Export Advisory",
    successTitle: "Advice Inquiry Sent Successfully!",
    successDesc: "Connecting you to WhatsApp Specialists...",
    yourNameLabel: "Your Name *",
    yourNamePlaceholder: "e.g. Vladimir",
    mobileLabel: "Mobile (WhatsApp) *",
    emailLabel: "Email Address",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "Search country...",
    noCountriesPlaceholder: "No countries found",
    footerText: "Instant connection to buy and import this product? We're here to guide you!",
    submitButton: "Submit Advice Request"
  },
  fa: {
    title: "مشاوره در واتس‌اپ",
    subtitle: "دپارتمان مشاوره صادرات گیلافرود",
    successTitle: "درخواست مشاوره با موفقیت ارسال شد!",
    successDesc: "در حال اتصال شما به کارشناسان واتس‌اپ...",
    yourNameLabel: "نام شما *",
    yourNamePlaceholder: "مثلاً ولادیمیر",
    mobileLabel: "موبایل (واتس‌اپ) *",
    emailLabel: "آدرس ایمیل",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "جستجوی کشور...",
    noCountriesPlaceholder: "کشوری یافت نشد",
    footerText: "برای خرید و واردات این محصول به راهنمایی نیاز دارید؟ ما همراه شما هستیم!",
    submitButton: "ارسال درخواست مشاوره"
  },
  ru: {
    title: "Консультация в WhatsApp",
    subtitle: "Экспортный советник GilaFruit",
    successTitle: "Запрос на консультацию успешно отправлен!",
    successDesc: "Подключаем вас к специалистам WhatsApp...",
    yourNameLabel: "Ваше имя *",
    yourNamePlaceholder: "например, Владимир",
    mobileLabel: "Мобильный (WhatsApp) *",
    emailLabel: "Электронная почта",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "Поиск страны...",
    noCountriesPlaceholder: "Страны не найдены",
    footerText: "Хотите купить и импортировать этот продукт? Мы готовы вам помочь!",
    submitButton: "Отправить запрос"
  },
  ar: {
    title: "استشارة عبر الواتساب",
    subtitle: "المستشار التصديري لجيلا فروت",
    successTitle: "تم إرسال طلب الاستشارة بنجاح!",
    successDesc: "جاري توصيلك بأخصائيي الواتساب...",
    yourNameLabel: "الاسم *",
    yourNamePlaceholder: "مثال: فلاديمير",
    mobileLabel: "الجوال (واتساب) *",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "البحث عن بلد...",
    noCountriesPlaceholder: "لم يتم العثور على بلدان",
    footerText: "هل ترغب في شراء واستيراد هذا المنتج؟ نحن هنا لإرشادك!",
    submitButton: "إرسال طلب الاستشارة"
  },
  tr: {
    title: "WhatsApp'ta Danışmanlık",
    subtitle: "GilaFruit İhracat Danışmanlığı",
    successTitle: "Danışmanlık Talebi Başarıyla Gönderildi!",
    successDesc: "Sizi WhatsApp Uzmanlarına bağlıyoruz...",
    yourNameLabel: "Adınız *",
    yourNamePlaceholder: "Örn: Vladimir",
    mobileLabel: "Mobil (WhatsApp) *",
    emailLabel: "E-posta Adresi",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "Ülke ara...",
    noCountriesPlaceholder: "Ülke bulunamadı",
    footerText: "Bu ürünü satın almak ve ithal etmek mi istiyorsunuz? Size rehberlik etmek için buradayız!",
    submitButton: "Danışmanlık Talebi Gönder"
  },
  uz: {
    title: "WhatsApp orqali maslahat",
    subtitle: "GilaFruit eksport bo'yicha maslahati",
    successTitle: "Maslahat so'rovi muvaffaqiyatli yuborildi!",
    successDesc: "Sizni WhatsApp mutaxassislariga ulamoqdamiz...",
    yourNameLabel: "Ismingiz *",
    yourNamePlaceholder: "Masalan: Vladimir",
    mobileLabel: "Mobil telefon (WhatsApp) *",
    emailLabel: "Elektron pochta manzili",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "Mamlakatni izlash...",
    noCountriesPlaceholder: "Mamlakatlar topilmadi",
    footerText: "Ushbu mahsulotni sotib olish va import qilishni xohlaysizmi? Biz sizga yo'l ko'rsatishga tayyormiz!",
    submitButton: "Maslahat so'rovini yuborish"
  },
  az: {
    title: "WhatsApp vasitəsilə məsləhət",
    subtitle: "GilaFruit Eksport Məsləhəti",
    successTitle: "Məsləhət sorğusu uğurla göndərildi!",
    successDesc: "Sizi WhatsApp mütəxəssislərinə bağlayırıq...",
    yourNameLabel: "Adınız *",
    yourNamePlaceholder: "Məsələn: Vladimir",
    mobileLabel: "Mobil (WhatsApp) *",
    emailLabel: "E-poçt ünvanı",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "Ölkə axtar...",
    noCountriesPlaceholder: "Ölkə tapılmadı",
    footerText: "Bu məhsulu almaq və idxal etmək istəyirsiniz? Sizə kömək etməyə hazırıq!",
    submitButton: "Məsləhət sorğusunu göndərin"
  },
  hi: {
    title: "WhatsApp पर सलाह",
    subtitle: "गिलाफ्रूट निर्यात सलाहकार",
    successTitle: "सलाह अनुरोध सफलतापूर्वक भेजा गया!",
    successDesc: "हम आपको WhatsApp विशेषज्ञों से जोड़ रहे हैं...",
    yourNameLabel: "आपका नाम *",
    yourNamePlaceholder: "जैसे: व्लादिमीर",
    mobileLabel: "मोबाइल (WhatsApp) *",
    emailLabel: "ईमेल पता",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "देश खोजें...",
    noCountriesPlaceholder: "कोई देश नहीं मिला",
    footerText: "इस उत्पाद को खरीदने और आयात करने में सहायता चाहिए? हम आपका मार्गदर्शन करने के लिए यहाँ हैं!",
    submitButton: "सलाह अनुरोध सबमिट करें"
  },
  uk: {
    title: "Консультація у WhatsApp",
    subtitle: "Експортний консультант GilaFruit",
    successTitle: "Запит на консультацію успішно надіслано!",
    successDesc: "Підключаємо вас до спеціалістів WhatsApp...",
    yourNameLabel: "Ваше ім'я *",
    yourNamePlaceholder: "наприклад, Володимир",
    mobileLabel: "Мобільний (WhatsApp) *",
    emailLabel: "Електронна пошта",
    emailPlaceholder: "buyer@import.ru",
    searchCountryPlaceholder: "Пошук країни...",
    noCountriesPlaceholder: "Країн не знайдено",
    footerText: "Бажаєте придбати та імпортувати цей продукт? Ми тут, щоб допомогти вам!",
    submitButton: "Надіслати запит на консультацію"
  }
};

interface BlogDetailScreenProps {
  article: BlogArticle | undefined;
  allArticles: BlogArticle[];
  onNavigate: (hash: string) => void;
}

export default function BlogDetailScreen({ article: rawArticle, allArticles, onNavigate }: BlogDetailScreenProps) {
  const { getLBlog, language } = useLanguage();
  const loc = useMemo(() => {
    return BLOG_LOCALES[language] || BLOG_LOCALES['en'];
  }, [language]);

  const waLocale = useMemo(() => {
    return WHATSAPP_ADVICE_LOCALIZATION[language] || WHATSAPP_ADVICE_LOCALIZATION['en'];
  }, [language]);

  const commLoc = useMemo(() => {
    return COMMENTS_LOCALIZATION[language] || COMMENTS_LOCALIZATION['en'];
  }, [language]);

  const article = useMemo(() => {
    return rawArticle ? getLBlog(rawArticle) : undefined;
  }, [rawArticle, getLBlog]);

  const t = useMemo(() => {
    const langKey = language || 'en';
    return KIWI_RUSSIA_TRANSLATIONS[langKey] || KIWI_RUSSIA_TRANSLATIONS['en'];
  }, [language]);

  // Sidebar State Blocks (same logic as main blog screen for consistency)
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [situationTab, setSituationTab] = useState<'available' | 'limited' | 'unavailable'>('available');
  const [customsTab, setCustomsTab] = useState<'all' | 'astara' | 'bilehsavar'>('all');
  const [loadingCustoms, setLoadingCustoms] = useState(false);

  // Video State
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // In-content WhatsApp Advice form state
  const [adviceForm, setAdviceForm] = useState({ name: '', phone: '', email: '' });
  const [adviceSubmitted, setAdviceSubmitted] = useState(false);

  // Country code selector state
  const [selectedCountry, setSelectedCountry] = useState({ name: 'Russia', code: '7', flag: '🇷🇺' });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const filteredCountries = useMemo(() => {
    const q = countrySearch.toLowerCase().trim();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.code.includes(q)
    );
  }, [countrySearch]);

  // Close country dropdown on click outside
  useEffect(() => {
    if (!isCountryDropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.country-dropdown-container')) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isCountryDropdownOpen]);

  // Recaptcha state for comments
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);

  // Comments List State
  const [comments, setComments] = useState<any[]>([
    {
      id: 1,
      name: 'Alexander Volkov',
      date: 'June 4, 2026',
      text: 'This is the most detailed guide on importing Iranian kiwi. We have been importing kiwi to Moscow for 3 seasons, and the information about calibration and packaging is extremely accurate. GilaFruit is indeed a reliable player.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80'
    }
  ]);
  const [newComment, setNewComment] = useState({ text: '', name: '', email: '', website: '', saveProps: false });
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // FAQ collapse state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Update customs stats loader on tab switches
  useEffect(() => {
    setLoadingCustoms(true);
    const t = setTimeout(() => {
      setLoadingCustoms(false);
    }, 500);
    return () => clearTimeout(t);
  }, [customsTab]);

  const statsByTab = useMemo(() => {
    switch (customsTab) {
      case 'astara':
        return { terminals: '18', products: '6', quantity: '9,450t' };
      case 'bilehsavar':
        return { terminals: '12', products: '4', quantity: '5,120t' };
      case 'all':
      default:
        return { terminals: '30', products: '16', quantity: '14,570t' };
    }
  }, [customsTab]);

  const availableProducts = [
    { name: 'Kiwi', emoji: '🥝', dateRange: 'Jan - Dec', slug: 'hayward-kiwifruit' },
    { name: 'Iceberg Lettuce', emoji: '🥬', dateRange: 'Jan - Dec', slug: 'lettuce-export' },
    { name: 'Bell Pepper', emoji: '🫑', dateRange: 'Jan - Dec', slug: 'bell-pepper-export' },
    { name: 'Romaine Lettuce', emoji: '🥬', dateRange: 'Jan - Dec', slug: 'lettuce-export' },
    { name: 'Celery', emoji: '🌿', dateRange: 'Jan - Dec', slug: 'parsley-export' },
    { name: 'Broccoli', emoji: '🥦', dateRange: 'Jan - Dec', slug: 'green-broccoli' },
    { name: 'Watermelon', emoji: '🍉', dateRange: 'Feb - Jul', slug: 'export-watermelon' },
    { name: 'Tomato', emoji: '🍅', dateRange: 'Jan - Dec', slug: 'greenhouse-tomatoes' },
    { name: 'Fresh Garlic', emoji: '🧄', dateRange: 'Feb - Aug', slug: 'fresh-garlic' },
    { name: 'Cherry', emoji: '🍒', dateRange: 'Apr - Jul', slug: 'sweet-cherries' }
  ];

  const limitedProducts = [
    { name: 'Seedless Grapes', emoji: '🍇', dateRange: 'Jul - Nov', slug: 'seedless-grapes' },
  ];

  const unavailableProducts = [
    { name: 'Yellow Onions', emoji: '🧅', dateRange: 'Nov - Jan', slug: 'dry-garlic-export' }
  ];

  const currentListProducts = useMemo(() => {
    if (situationTab === 'available') return availableProducts;
    if (situationTab === 'limited') return limitedProducts;
    return unavailableProducts;
  }, [situationTab]);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-4">
        <p className="text-4xl">🔍</p>
        <h2 className="text-xl font-bold font-display text-slate-800">Article Not Found</h2>
        <p className="text-slate-500 text-sm">The requested blog post is not stored in our catalog.</p>
        <button
          onClick={() => onNavigate('#/blog')}
          className="px-6 py-2 bg-emerald-800 text-white rounded-full text-xs font-semibold"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  // Related Kiwi Articles
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3)
    .map((a) => getLBlog(a));

  // Search handler (triggers redirection to main blog page)
  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('#/blog');
  };

  // CAPTCHA handler
  const handleCaptchaClick = () => {
    if (captchaVerified || captchaLoading) return;
    setCaptchaLoading(true);
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaVerified(true);
    }, 850);
  };

  // Submit Comments
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.text || !newComment.name || !newComment.email) {
      alert('Please fill in the required fields (*)');
      return;
    }
    if (!captchaVerified) {
      alert('Please verify the reCAPTCHA code to confirm you are human.');
      return;
    }

    setCommentSubmitted(true);
    const added = {
      id: Date.now(),
      name: newComment.name,
      date: 'Today',
      text: newComment.text,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80'
    };

    setTimeout(() => {
      setComments((prev) => [...prev, added]);
      setNewComment({ text: '', name: '', email: '', website: '', saveProps: false });
      setCommentSubmitted(false);
      setCaptchaVerified(false);
    }, 1200);
  };

  // Advice Inquiry submit handle
  const handleAdviceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adviceForm.name || !adviceForm.phone) {
      alert('Must input your name and phone number');
      return;
    }
    setAdviceSubmitted(true);
    // Combine selected country code and phone
    const normalizedPhone = adviceForm.phone.replace(/^\+/, '').trim();
    const fullPhone = `+${selectedCountry.code} ${normalizedPhone}`;
    // Real integration: Open WhatsApp automatically with customized text details
    const textMsg = `Hello GilaFruit! I am inquiring about kiwi export pricing based on the comprehensive guide.\nName: ${adviceForm.name}\nWhatsApp: ${fullPhone}\nEmail: ${adviceForm.email}`;
    setTimeout(() => {
      window.open(`https://wa.me/989900978002?text=${encodeURIComponent(textMsg)}`, '_blank');
      setAdviceForm({ name: '', phone: '', email: '' });
      setAdviceSubmitted(false);
    }, 1500);
  };

  // Interactive Table of Contents Smooth Scroll
  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 12 green phytosanitary documents simulation
  const certificatesGrid = [
    { title: 'Phytosanitary Health Certificate', tag: 'Standard' },
    { title: 'Federal Pest Free Certification', tag: 'Customs' },
    { title: 'GlobalGAP Farm Compliance', tag: 'Audit' },
    { title: 'SGS Quality Assurance Seal', tag: 'Quality' },
    { title: 'EAC Customs Union Passport', tag: 'EAEU Transit' },
    { title: 'HACCP Safety Standard Vetted', tag: 'HACCP' },
    { title: 'Organic Soil Bio-Analysis', tag: 'Pure Bio' },
    { title: 'Traceability Origin Certificate', tag: 'Origin' },
    { title: 'Maximum Residue Limit Report', tag: 'SGS Tested' },
    { title: 'Fumigation Sanitary Record', tag: 'Sanitary' },
    { title: 'Pre-Shipment Dock Intake Permit', tag: 'Logistics' },
    { title: 'Sabz Gostaran Authenticity Seal', tag: 'GilaFruit' }
  ];

  return (
    <div className="bg-[#fbfcfa] min-h-screen pt-24 sm:pt-28 md:pt-[148px] pb-16 text-slate-800">
      
      {/* Dynamic Subheader/Breadcrumbs bar */}
      <div className="bg-[#f0f3f0] border-y border-slate-200/75 py-4 mb-8 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="font-display font-black text-slate-900 text-sm tracking-tight capitalize truncate max-w-lg">
            {article.title}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold whitespace-nowrap">
            <span className="hover:text-emerald-800 cursor-pointer transition-colors" onClick={() => onNavigate('#/')}>{loc.home}</span>
            <span>»</span>
            <span className="hover:text-emerald-800 cursor-pointer transition-colors" onClick={() => onNavigate('#/blog')}>{loc.blog}</span>
            <span>»</span>
            <span className="hover:text-emerald-800 cursor-pointer transition-colors" onClick={() => onNavigate('#/blog')}>{loc.blog}</span>
            <span>»</span>
            <span className="text-[#1a8a42] font-semibold">{EXPORT_LOCALIZATION[language] || EXPORT_LOCALIZATION['en']}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/*===================== SIDEBAR COLUMN (Left) =====================*/}
          <div className="w-full lg:w-[320px] xl:w-[350px] flex-shrink-0 space-y-7 text-left order-2 lg:order-1" id="blog-sidebar">
            
            {/* Widget 1: Search Inputs */}
            <form onSubmit={handleSearchClick} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
              <label htmlFor="sidebar-search" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {loc.blog}
              </label>
              <div className="relative">
                <input 
                  id="sidebar-search"
                  type="text" 
                  placeholder={loc.searchPlaceholder}
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  className="w-full px-4 py-2 bg-[#fbfcfa] border border-slate-200 rounded-xl text-xs font-medium focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{loc.searchBtn}</span>
              </button>
            </form>

            {/* Widget 2: SITUATION */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="bg-[#1a8a42] px-6 py-5 text-center space-y-0.5">
                <h3 className="text-white font-sans font-black text-2xl tracking-tight uppercase leading-none">
                  {loc.situation}
                </h3>
                <p className="text-emerald-100/90 font-bold text-[9px] uppercase tracking-widest block">
                  {loc.fruitsVegs}
                </p>
              </div>

              {/* Status Tabs */}
              <div className="grid grid-cols-3 gap-0 border-b border-slate-100 text-[10.5px] font-bold text-center">
                <button
                  type="button"
                  onClick={() => setSituationTab('available')}
                  className={`py-2.5 transition-all cursor-pointer border-r border-slate-100 ${
                    situationTab === 'available' 
                      ? 'bg-emerald-50 text-[#1a8a42] font-black' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {loc.available}
                </button>
                <button
                  type="button"
                  onClick={() => setSituationTab('limited')}
                  className={`py-2.5 transition-all cursor-pointer border-r border-slate-100 ${
                    situationTab === 'limited' 
                      ? 'bg-emerald-50 text-[#1a8a42] font-black' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {loc.limited}
                </button>
                <button
                  type="button"
                  onClick={() => setSituationTab('unavailable')}
                  className={`py-2.5 transition-all cursor-pointer ${
                    situationTab === 'unavailable' 
                      ? 'bg-emerald-50 text-[#1a8a42] font-black' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {loc.unavailable}
                </button>
              </div>

              {/* Status List */}
              <div className="p-4 max-h-[300px] overflow-y-auto divide-y divide-slate-100/80 custom-scrollbar">
                {currentListProducts.map((p, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between gap-1.5 hover:bg-slate-50 px-1 rounded transition-colors text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-sm select-none leading-none">{p.emoji}</span>
                      <span className="font-bold text-slate-850">{loc.productsNames[p.name] || p.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] text-slate-405 font-bold">{loc.months[p.dateRange] || p.dateRange}</span>
                      <button
                        onClick={() => onNavigate(`#/product/${p.slug}`)}
                        className="text-[9.5px] text-[#1a8a42] hover:underline font-black cursor-pointer"
                      >
                        {loc.viewDetails}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer action "All Data" */}
              <div className="p-3 bg-slate-50 border-t border-slate-150">
                <button 
                  onClick={() => onNavigate('#/catalog')}
                  className="w-full bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <CheckSquare className="w-3.5 h-3.5 text-white" />
                  <span>{loc.allData}</span>
                </button>
              </div>
            </div>

            {/* Widget 3: CUSTOMS STATISTICS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="space-y-1 text-left border-b border-slate-150 pb-2.5">
                <h4 className="font-display font-black text-slate-900 text-xs tracking-tight uppercase">
                  {loc.customsStats}
                </h4>
                <div className="text-[9.5px] text-slate-405 font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-350" />
                  <span>Tuesday, June 9, 2026</span>
                </div>
              </div>

              {/* Ports selection bar */}
              <div className="flex bg-slate-100 p-0.5 rounded-xl gap-0.5 text-[10px] font-bold text-slate-600 text-center">
                <button
                  type="button"
                  onClick={() => setCustomsTab('all')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    customsTab === 'all' ? 'bg-[#1a8a42] text-white' : 'hover:text-slate-900'
                  }`}
                >
                  {loc.allCustoms}
                </button>
                <button
                  type="button"
                  onClick={() => setCustomsTab('astara')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    customsTab === 'astara' ? 'bg-[#1a8a42] text-white' : 'hover:text-slate-900'
                  }`}
                >
                  {loc.astara}
                </button>
                <button
                  type="button"
                  onClick={() => setCustomsTab('bilehsavar')}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    customsTab === 'bilehsavar' ? 'bg-[#1a8a42] text-white' : 'hover:text-slate-900'
                  }`}
                >
                  {loc.bilehsavar}
                </button>
              </div>

              {/* Data numbers metrics */}
              <div className="grid grid-cols-3 gap-1.5 py-0.5 text-center relative min-h-[45px] items-center">
                {loadingCustoms ? (
                  <div className="col-span-3 py-4 flex flex-col items-center justify-center gap-1.5 text-slate-400">
                    <RefreshCw className="w-4 h-4 animate-spin text-[#1a8a42]" />
                    <span className="text-[9px] font-semibold italic">{loc.loading}</span>
                  </div>
                ) : (
                  <>
                    <div className="bg-[#fbfcfa] border border-slate-100 rounded-xl p-2">
                      <div className="text-[8px] text-slate-400 font-black uppercase tracking-wider">{loc.terminals}</div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">{statsByTab.terminals}</div>
                    </div>
                    <div className="bg-[#fbfcfa] border border-slate-100 rounded-xl p-2">
                       <div className="text-[8px] text-slate-400 font-black uppercase tracking-wider">{loc.products}</div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">{statsByTab.products}</div>
                    </div>
                    <div className="bg-[#fbfcfa] border border-slate-100 rounded-xl p-2">
                       <div className="text-[8px] text-slate-400 font-black uppercase tracking-wider">{loc.quantity}</div>
                      <div className="text-xs font-bold text-slate-850 mt-0.5 truncate">{statsByTab.quantity}</div>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-slate-50 border-t border-slate-100 pt-2.5 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5 text-slate-500 font-semibold italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{loc.livePortStream}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('#/services/customs')}
                  className="bg-[#1a8a42] hover:bg-[#156e34] text-white font-bold py-1 px-2.5 rounded-md text-[9.5px] uppercase transition-all"
                >
                  {loc.allData}
                </button>
              </div>
            </div>

            {/* Widget 4: Product Price Inquiry */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
              <h4 className="font-display font-black text-slate-900 text-xs tracking-tight uppercase border-b border-slate-150 pb-2">
                {loc.priceInquiryTitle}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {loc.priceInquiryDesc}
              </p>
              <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-center border border-slate-100">
                <svg viewBox="0 0 100 85" className="w-20 h-16 text-[#1a8a42]" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="15" y="10" width="70" height="65" rx="4" strokeWidth="1.5" />
                  <line x1="25" y1="25" x2="75" y2="25" strokeDasharray="2 2" />
                  <line x1="25" y1="42" x2="65" y2="42" />
                  <line x1="25" y1="58" x2="55" y2="58" />
                  <circle cx="70" cy="50" r="10" fill="#e8f5e9" stroke="#1a8a42" />
                  <path d="M66 50 L69 53 L75 47" stroke="#1a8a42" strokeWidth="2" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
                <a 
                  href="tel:+989900978002"
                  className="bg-slate-150 hover:bg-slate-200 text-slate-700 py-2 rounded-xl flex items-center justify-center gap-1 transition-all text-center"
                >
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>{loc.callForPrice}</span>
                </a>
                <a 
                  href="https://wa.me/989900978002?text=Inquiring%20about%20Kiwi%20Prices"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#1a8a42] border border-emerald-200/50 py-2 rounded-xl flex items-center justify-center gap-1 transition-all text-center"
                >
                  <Send className="w-3 h-3 text-[#1a8a42]" />
                  <span>{loc.inWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Widget 5: Shipping Price Inquiry */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
              <h4 className="font-display font-black text-slate-900 text-xs tracking-tight uppercase border-b border-slate-150 pb-2">
                {loc.shippingInquiryTitle}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {loc.shippingInquiryDesc}
              </p>
              <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-center border border-slate-100">
                <svg viewBox="0 0 100 65" className="w-20 h-14 text-[#1a8a42]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 40 H80 V20 H45 V10 H10 Z" fill="#e8f5e9" strokeWidth="1.5" />
                  <rect x="45" y="15" width="30" height="25" stroke="#1a8a42" />
                  <path d="M80 30 L92 34 L92 45 H80 Z" />
                  <circle cx="24" cy="50" r="6" fill="#1a8a42" />
                  <circle cx="68" cy="50" r="6" fill="#1a8a42" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
                <a 
                  href="tel:+989900978002"
                  className="bg-slate-150 hover:bg-slate-200 text-slate-700 py-2 rounded-xl flex items-center justify-center gap-1 transition-all text-center"
                >
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>{loc.callForPrice}</span>
                </a>
                <a 
                  href="https://wa.me/989900978002?text=Inquiring%20about%20Kiwi%20Logistics%20rates"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#1a8a42] border border-emerald-200/50 py-2 rounded-xl flex items-center justify-center gap-1 transition-all text-center"
                >
                  <Send className="w-3 h-3 text-[#1a8a42]" />
                  <span>{loc.inWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Widget 6: Send Samples */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
              <h4 className="font-display font-black text-slate-900 text-xs tracking-tight uppercase border-b border-slate-150 pb-2">
                {loc.sampleTitle}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {loc.sampleDesc}
              </p>
              <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-center border border-slate-100">
                <svg viewBox="0 0 100 80" className="w-20 h-14 text-[#1a8a42]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M50 10 L85 25 L50 40 L15 25 Z" fill="#e8f5e9" />
                  <path d="M15 25 V60 L50 75 V40 Z" />
                  <path d="M85 25 V60 L50 75 V40 Z" />
                  <line x1="50" y1="40" x2="50" y2="75" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
                <button 
                  onClick={() => onNavigate('#/contact')}
                  className="bg-slate-150 hover:bg-slate-200 text-slate-700 py-2 rounded-xl flex items-center justify-center gap-1 transition-all text-center cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>{loc.request}</span>
                </button>
                <a 
                  href="https://wa.me/989900978002?text=I%20would%20like%20to%20request%20samples%20of%20Iranian%20Kiwi"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#1a8a42] border border-emerald-200/50 py-2 rounded-xl flex items-center justify-center gap-1 transition-all text-center"
                >
                  <Send className="w-3 h-3 text-[#1a8a42]" />
                  <span>{loc.inWhatsApp}</span>
                </a>
              </div>
            </div>
          </div>

          {/*===================== MAIN CONTENT CONTAINER (Right) =====================*/}
          <div className="flex-1 w-full bg-white border border-slate-100/90 rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm text-left order-1 lg:order-2">
            
            {/* If checking the default Kiwi Import guide, we render the EXACT screenshot structure */}
            {article.id === 'b_importing_kiwi_russia' || article.slug === 'buying-importing-kiwi-russia' ? (
              <div className="space-y-8">
                
                {/* 1. Large Hero Styled Banner with beautiful Watermarks Overlay */}
                <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <img 
                    src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200"
                    alt={t.heroText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Business Brand Overlay Layout */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
                    <div className="flex justify-between items-start">
                      <span className="bg-[#1a8a42] text-white text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {t.heroTag}
                      </span>
                      <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-right text-[10px] sm:text-xs font-bold font-mono">
                        📞 +98 990 097 8002
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-3xl font-black font-display tracking-tight text-white mb-1 drop-shadow-md">
                        {t.heroSub}
                      </h2>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200 font-semibold border-t border-white/10 pt-2 font-mono">
                        <span>www.GilaFruit.com</span>
                        <span>{t.heroText}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Blog Titles & Meta Info */}
                <div className="space-y-3.5 border-b border-slate-100 pb-6">
                  <h1 className="font-display text-2xl sm:text-4.5xl font-extrabold text-slate-800 tracking-tight leading-tight">
                    {t.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                      {t.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-800" />
                      {t.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded uppercase font-bold">
                      <Globe className="w-3.5 h-3.5" />
                      {t.translationBadge}
                    </span>
                  </div>
                </div>

                {/* 3. Intro text */}
                <p className="text-slate-650 leading-relaxed text-sm sm:text-base text-justify">
                  {t.intro}
                </p>

                {/* 4. Beautiful Interactive Table of Contents */}
                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 sm:p-5 text-left space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h5 className="font-display font-black text-[#1a8a42] text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      {t.tocTitle}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-extrabold select-none hover:underline cursor-pointer">
                      {t.tocShowHide}
                    </span>
                  </div>
                  <ol className="space-y-2 text-xs text-slate-600 font-semibold list-decimal pl-4">
                    {t.tocItems.map((item, idx) => {
                      const headings = ['sec-opportunities', 'sec-exports', 'sec-standards', 'sec-certificates', 'sec-notes', 'sec-shipping', 'sec-customs-code', 'sec-advantage', 'sec-conclusion'];
                      return (
                        <li key={idx}>
                          <button onClick={() => scrollToHeading(headings[idx] || 'sec-opportunities')} className="hover:text-[#1a8a42] hover:underline text-left cursor-pointer">
                            {item}
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {/* 5. VIDEO SPOT - Dynamic Placeholder */}
                <div className="space-y-2" id="sec-opportunities">
                  <h6 className="text-[10.5px] text-[#1a8a42] font-black tracking-widest uppercase">{t.videoChannel}</h6>
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
                    {videoPlaying ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 space-y-4">
                        <RefreshCw className="w-10 h-10 animate-spin text-emerald-400" />
                        <div className="text-center">
                          <p className="font-bold text-sm">{t.videoLoading}</p>
                          <p className="text-xs text-slate-400 mt-1">{t.videoLoadingSub}</p>
                        </div>
                        <button 
                          onClick={() => setVideoPlaying(false)}
                          className="px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                        >
                          {t.videoPause}
                        </button>
                      </div>
                    ) : (
                      <>
                        <img 
                          src="https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&q=80&w=850"
                          alt="Video Placeholder cover"
                          className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-3 p-4">
                          <button 
                            type="button"
                            onClick={() => setVideoPlaying(true)}
                            aria-label="Play presentation video"
                            className="w-16 h-16 bg-[#1a8a42] hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-all scale-95 hover:scale-100 shadow-lg cursor-pointer border-2 border-white/60"
                          >
                            <Play className="w-7 h-7 fill-current ml-1" />
                          </button>
                          <div className="text-center">
                            <h4 className="font-display font-black text-sm uppercase tracking-wide">
                              {t.videoPlaceholderCover}
                            </h4>
                            <p className="text-[11px] text-emerald-200 font-bold font-mono uppercase mt-1">
                              {t.videoPlaceholderSub}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400 text-center font-bold italic">
                    {t.figureA}
                  </p>
                </div>

                {/* 6. Chapter Text paragraphs block */}
                <p className="text-slate-650 leading-relaxed text-sm text-justify">
                  {t.para1}
                </p>

                {/* IMAGE 1 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=800"
                      alt={t.img1Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img1Caption}
                  </p>
                </div>

                <p className="text-slate-650 leading-relaxed text-sm text-justify">
                  {t.para2}
                </p>

                {/* CHAPTER 2 */}
                <div className="space-y-4 pt-4" id="sec-exports">
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#1a8a42] uppercase tracking-tight">
                    {t.chapter2Title}
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm text-justify">
                    {t.chapter2Para1}
                  </p>
                  <p className="text-slate-650 leading-relaxed text-sm text-justify">
                    {t.chapter2Para2}
                  </p>
                </div>

                {/* IMAGE 2 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
                      alt={t.img2Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img2Caption}
                  </p>
                </div>

                <div className="bg-slate-50 border-l-4 border-[#1a8a42] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mb-2">
                    {t.citiesTitle}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-655 font-bold pl-2 list-none">
                    {t.cities.map((city, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5 text-left">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a8a42]" /> {city}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CHAPTER 3 */}
                <div className="space-y-4 pt-4" id="sec-standards">
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#1a8a42] uppercase tracking-tight">
                    {t.chapter3Title}
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm text-justify">
                    {t.chapter3Para1}
                  </p>
                </div>

                {/* IMAGE 3 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800"
                      alt={t.img3Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img3Caption}
                  </p>
                </div>

                {/* CHAPTER 4 */}
                <div className="space-y-4 pt-4" id="sec-certificates">
                  <h3 className="font-display text-md sm:text-lg font-bold text-slate-800 uppercase tracking-wide">
                    {t.chapter4Title}
                  </h3>
                  <p className="text-slate-655 leading-relaxed text-sm text-justify">
                    {t.chapter4Para1}
                  </p>

                  <ol className="space-y-4 text-xs sm:text-sm text-slate-655 pl-4 list-decimal font-semibold">
                    {t.certRequirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-justify">
                        <span className="text-slate-905 font-black">{req.b}</span> {req.t}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CERTIFICATES 12-GRID SIMULATOR */}
                <div className="space-y-2">
                  <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 sm:p-5">
                    <h5 className="font-display font-black text-[#1a8a42] text-xs uppercase tracking-wider text-center mb-4 flex items-center justify-center gap-1.5">
                      <Award className="w-4 h-4" />
                      {t.certGridTitle}
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                      {t.certList.map((cert, idx) => (
                        <div key={idx} className="bg-white border-2 border-emerald-120 hover:border-emerald-650 rounded-xl p-2.5 text-center transition-all shadow-xs space-y-1">
                          <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800 font-bold text-xs select-none">
                            ✓
                          </div>
                          <div className="text-[10px] font-extrabold text-[#1a8a42] tracking-wider uppercase">{cert.tag}</div>
                          <div className="text-[9.5px] font-black text-slate-800 leading-snug truncate-2-lines">{cert.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.certGridCaption}
                  </p>
                </div>

                {/* TECHNICAL NOTES SUBSECTION */}
                <div className="space-y-4 pt-4" id="sec-notes">
                  <h3 className="font-display text-md sm:text-lg font-bold text-slate-800 uppercase tracking-wide">
                    {t.chapter5Title}
                  </h3>
                  <p className="text-slate-655 leading-relaxed text-sm text-justify">
                    {t.chapter5Para1}
                  </p>

                  <ul className="space-y-3.5 text-xs sm:text-sm pl-4 list-disc text-slate-655 font-semibold">
                    {t.techNotes.map((note, nIdx) => (
                      <li key={nIdx} className="text-justify">
                        <span className="text-slate-905 font-black">{note.b}</span> {note.t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE 5 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1588711928096-7d60914da6bf?auto=format&fit=crop&q=80&w=800"
                      alt={t.img5Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img5Caption}
                  </p>
                </div>

                {/* SHIPPING COMPARISON STYLISH TABLE */}
                <div className="space-y-4 pt-4" id="sec-shipping">
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#1a8a42] uppercase tracking-tight">
                    {t.chapter6Title}
                  </h2>
                  <p className="text-slate-655 leading-relaxed text-sm text-justify">
                    {t.chapter6Para1}
                  </p>

                  <div className="overflow-x-auto border border-slate-250 rounded-2xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#1a8a42]/10 text-[#1a8a42] border-b border-slate-200">
                          {t.tableHeaders.map((hdr, hIdx) => (
                            <th key={hIdx} className="p-3 font-extrabold uppercase">{hdr}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 font-semibold text-slate-755">
                        {t.tableRows.map((rowArr, rIdx) => (
                          <tr key={rIdx}>
                            <td className="p-3 font-black text-slate-905 bg-[#fafcf9] border-r border-slate-100">{rowArr[0]}</td>
                            <td className="p-3 text-justify">{rowArr[1]}</td>
                            <td className="p-3 text-justify">{rowArr[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* IMAGE 6 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
                      alt={t.img6Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img6Caption}
                  </p>
                </div>

                {/* HS CODE & ARRANGEMENTS */}
                <div className="space-y-4 pt-4" id="sec-customs-code">
                  <h3 className="font-display text-md sm:text-lg font-bold text-slate-800 uppercase tracking-wide">
                    {t.chapter7Title}
                  </h3>
                  <p className="text-slate-655 leading-relaxed text-sm text-justify">
                    {t.chapter7Para1}
                  </p>

                  <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 sm:p-5 mt-3 space-y-3.5">
                    <h5 className="font-display font-black text-slate-800 text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 border-b border-slate-200 pb-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {t.hsCodeBlockTitle}
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-2xs">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.hsCodeLabel}</div>
                        <div className="text-xs sm:text-sm font-mono font-black text-[#1a8a42] mt-0.5">{t.hsCodeValue}</div>
                      </div>
                      <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-2xs">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.hsCodeKey1}</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-850 mt-0.5">{t.hsCodeValue1}</div>
                      </div>
                      <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-2xs">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.hsCodeKey2}</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-850 mt-0.5">{t.hsCodeValue2}</div>
                      </div>
                      <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-2xs">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.hsCodeKey3}</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{t.hsCodeValue3}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MAIN GREEN WHATSAPP ADVICE FORM */}
                <div className="bg-[#1a8a42]/95 text-white rounded-3xl p-6 sm:p-8 relative overflow-visible shadow-lg border-2 border-emerald-500">
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-white text-[#1a8a42] p-2 rounded-2xl shadow-md">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-sans font-black text-lg tracking-tight uppercase leading-tight">
                          {waLocale.title}
                        </h4>
                        <p className="text-emerald-100 font-semibold text-[10px] tracking-widest uppercase">
                          {waLocale.subtitle}
                        </p>
                      </div>
                    </div>

                    {adviceSubmitted ? (
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center space-y-2 border border-white/20 animate-fade-in">
                        <div className="w-10 h-10 bg-white text-[#1a8a42] rounded-full flex items-center justify-center mx-auto text-lg font-bold select-none animate-bounce">
                          ✓
                        </div>
                        <h5 className="font-bold text-sm">{waLocale.successTitle}</h5>
                        <p className="text-xs text-emerald-100">{waLocale.successDesc}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleAdviceSubmit} className="space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="space-y-1 text-left">
                            <label htmlFor="wa-name" className="block text-[10px] font-black uppercase text-emerald-100 tracking-wider">
                              {waLocale.yourNameLabel}
                            </label>
                            <input 
                              id="wa-name"
                              type="text" 
                              required
                              placeholder={waLocale.yourNamePlaceholder} 
                              value={adviceForm.name}
                              onChange={(e) => setAdviceForm({ ...adviceForm, name: e.target.value })}
                              className="w-full px-4 py-2 bg-white/10 focus:bg-white text-white focus:text-slate-800 border border-white/25 focus:border-white rounded-xl text-xs font-semibold focus:ring-0 focus:outline-none placeholder:text-emerald-150 transition-all"
                            />
                          </div>
                          <div className="space-y-1 text-left">
                            <label htmlFor="wa-phone" className="block text-[10px] font-black uppercase text-emerald-100 tracking-wider">
                              {waLocale.mobileLabel}
                            </label>
                            <div dir="ltr" className="country-dropdown-container relative flex bg-white/10 rounded-xl border border-white/25 focus-within:border-white focus-within:bg-white group transition-all">
                              
                              {/* Country Selector Button */}
                              <button
                                type="button"
                                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                className="flex items-center gap-1 px-3 py-2 border-r border-white/20 select-none h-full justify-center rounded-l-xl cursor-pointer text-white group-focus-within:text-slate-800 hover:bg-white/5 group-focus-within:hover:bg-slate-100"
                                style={{ minWidth: '82px' }}
                              >
                                <span className="text-sm leading-none">{selectedCountry.flag}</span>
                                <span className="font-mono text-xs font-black">+{selectedCountry.code}</span>
                                <span className="text-[7px] opacity-75">▼</span>
                              </button>

                              <input 
                                id="wa-phone"
                                type="tel" 
                                required
                                placeholder="901234567" 
                                value={adviceForm.phone}
                                onChange={(e) => setAdviceForm({ ...adviceForm, phone: e.target.value })}
                                className="w-full px-3 py-2 bg-transparent group-focus-within:text-slate-800 text-white border-none rounded-none text-xs font-bold focus:ring-0 focus:outline-none placeholder:text-emerald-150/80 group-focus-within:placeholder:text-slate-400 font-mono"
                              />

                              {/* Absolute searchable list */}
                              {isCountryDropdownOpen && (
                                <div dir="ltr" className="absolute left-0 top-full mt-2 w-72 max-h-60 bg-white border border-slate-200 rounded-xl shadow-2xl z-55 flex flex-col overflow-hidden text-slate-800 animate-fade-in text-left">
                                  <div className="p-2 border-b border-slate-100 bg-slate-50">
                                    <input
                                      type="text"
                                      placeholder={waLocale.searchCountryPlaceholder}
                                      value={countrySearch}
                                      onChange={(e) => setCountrySearch(e.target.value)}
                                      onClick={(e) => e.stopPropagation()}
                                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none placeholder:text-slate-400 text-slate-800"
                                      autoFocus
                                    />
                                  </div>
                                  <div className="overflow-y-auto flex-1 divide-y divide-slate-50 custom-scrollbar text-left max-h-44">
                                    {filteredCountries.length > 0 ? (
                                      filteredCountries.map((c) => (
                                        <button
                                          key={`${c.name}-${c.code}`}
                                          type="button"
                                          onClick={() => {
                                            setSelectedCountry(c);
                                            setIsCountryDropdownOpen(false);
                                            setCountrySearch('');
                                          }}
                                          className="w-full px-3 py-1.5 text-xs flex items-center justify-between hover:bg-emerald-50 transition-colors text-left cursor-pointer"
                                        >
                                          <span className="flex items-center gap-1.5">
                                            <span className="text-sm select-none leading-none">{c.flag}</span>
                                            <span className="font-semibold text-slate-700 truncate max-w-[170px]">{c.name}</span>
                                          </span>
                                          <span className="font-mono font-bold text-[#1a8a42]">+{c.code}</span>
                                        </button>
                                      ))
                                    ) : (
                                      <div className="p-3 text-center text-xs text-slate-400 italic">{waLocale.noCountriesPlaceholder}</div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1 text-left">
                            <label htmlFor="wa-email" className="block text-[10px] font-black uppercase text-emerald-100 tracking-wider">
                              {waLocale.emailLabel}
                            </label>
                            <input 
                              id="wa-email"
                              type="email" 
                              placeholder={waLocale.emailPlaceholder} 
                              value={adviceForm.email}
                              onChange={(e) => setAdviceForm({ ...adviceForm, email: e.target.value })}
                              className="w-full px-4 py-2 bg-white/10 focus:bg-white text-white focus:text-slate-800 border border-white/25 focus:border-white rounded-xl text-xs font-semibold focus:ring-0 focus:outline-none placeholder:text-emerald-150 transition-all"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                          <p className="text-[10.5px] text-emerald-100/90 font-bold italic text-left">
                            {waLocale.footerText}
                          </p>
                          <button 
                            type="submit"
                            className="bg-white hover:bg-emerald-50 text-[#1a8a42] font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
                          >
                            {waLocale.submitButton}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                {/* COMPETITIVE ADVANTAGE CHAPTER */}
                <div className="space-y-4 pt-4" id="sec-advantage">
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#1a8a42] uppercase tracking-tight">
                    {t.chapter8Title}
                  </h2>
                  <p className="text-slate-655 leading-relaxed text-sm text-justify">
                    {t.chapter8Para1}
                  </p>

                  <ol className="space-y-4 text-xs sm:text-sm text-slate-655 pl-4 list-decimal font-semibold">
                    {t.advantages.map((adv, idx) => (
                      <li key={idx} className="text-justify">
                        <span className="text-slate-905 font-black">{adv.b}</span> {adv.t}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* IMAGE 7 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                      alt={t.img7Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img7Caption}
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                  <p className="text-[11.5px] font-bold text-amber-900 uppercase tracking-wider mb-1">{t.pricingTransparencyNote}</p>
                  <p className="text-xs text-amber-800 leading-relaxed font-semibold">
                    {t.pricingTransparencyDesc}
                  </p>
                </div>

                {/* CONCLUSION CHAPTER */}
                <div className="space-y-4 pt-4" id="sec-conclusion">
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#1a8a42] uppercase tracking-tight">
                    {t.chapter9Title}
                  </h2>
                </div>

                {/* IMAGE 8 */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&q=80&w=800"
                      alt={t.img8Alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-white flex justify-between text-[11px] font-mono font-bold">
                      <span>www.GilaFruit.com</span>
                      <span>📞 +98 990 097 8002</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold text-center">
                    {t.img8Caption}
                  </p>
                </div>

                <p className="text-slate-655 leading-relaxed text-sm text-justify">
                  {t.conclusionParagraph}
                </p>

                {/* 7. DETAILED FAQS SEGMENT WITH DROPDOWN ACCORDIONS */}
                <div className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="font-display text-md sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
                    <HelpCircle className="w-5 h-5 text-[#1a8a42]" />
                    {t.faqTitle}
                  </h3>
                  <div className="space-y-2.5">
                    {t.faqs.map((faq, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden transition-all">
                        <button
                          type="button"
                          onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                          className="w-full px-5 py-4 text-left flex items-center justify-between text-xs sm:text-sm font-black text-slate-800 focus:outline-none hover:bg-slate-100/50"
                        >
                          <span>{faq.q}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-450 transition-transform ${openFAQ === i ? 'rotate-90 text-[#1a8a42]' : ''}`} />
                        </button>
                        {openFAQ === i && (
                          <div className="px-5 pb-4 text-xs sm:text-sm text-slate-655 font-semibold text-justify leading-relaxed border-t border-slate-100 pt-3 animate-slide-down">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              // GRACEFUL FALLBACK FOR OTHER GENERAL BLOG POSTS
              <div className="space-y-6">
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-slate-200">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="bg-[#1a8a42] text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide">
                      Export Articles
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <span>{article.publishDate}</span>
                    <span>•</span>
                    <span className="bg-emerald-50 text-[#1a8a42] px-2 py-0.5 rounded">
                      {article.language} EN
                    </span>
                  </div>
                  <h1 className="font-display text-xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-snug">
                    {article.title}
                  </h1>
                  <p className="text-slate-550 text-sm italic border-l-4 border-amber-400 pl-4 py-1 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="prose prose-slate max-w-none text-slate-705 leading-relaxed text-sm sm:text-base space-y-4 pt-4">
                  {article.content.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION: Social Shares Component */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4 text-xs sm:text-sm">
              <div className="flex gap-2 items-center">
                <Tag className="w-4 h-4 text-slate-400" />
                <div className="flex gap-1.5 flex-wrap">
                  {article.tags.map((tag, idx) => {
                    const tagKey = tag.toLowerCase();
                    const localizedTag = TAG_LOCALIZATION[language]?.[tagKey] || TAG_LOCALIZATION['en']?.[tagKey] || tag;
                    return (
                      <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-650 rounded-lg font-bold">
                        #{localizedTag}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold">
                  {SHARE_LOCALIZATION[language] || SHARE_LOCALIZATION['en']}
                </span>
                <div className="flex gap-1">
                  <button 
                    onClick={() => alert('Shared to Telegram!')}
                    className="p-1.5 bg-slate-50 hover:bg-[#1a8a42]/10 rounded-lg text-slate-500 hover:text-[#1a8a42] transition-colors"
                    aria-label="Share on Telegram"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => alert('Link copied to clipboard!')}
                    className="p-1.5 bg-slate-50 hover:bg-[#1a8a42]/10 rounded-lg text-slate-500 hover:text-[#1a8a42] transition-colors"
                    aria-label="Copy post link"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* RELATED POSTS GRID BOX LISTING */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-10 border-t border-slate-200">
                <h4 className="font-display font-black text-xs sm:text-sm text-slate-850 mb-6 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1a8a42]" />
                  {RELATED_POSTS_LOCALIZATION[language] || RELATED_POSTS_LOCALIZATION['en']}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {relatedArticles.map((rec) => (
                    <div 
                      key={rec.id} 
                      onClick={() => onNavigate(`#/blog/${rec.slug}`)}
                      className="group bg-[#fafcf9] border border-slate-150 overflow-hidden rounded-2xl hover:shadow-md hover:border-[#1a8a42]/50 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative h-36 bg-slate-100 overflow-hidden">
                        <img 
                          src={rec.image} 
                          alt={rec.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                        <div className="text-[9.5px] uppercase font-bold text-emerald-800 tracking-wider">
                          {rec.publishDate}
                        </div>
                        <h5 className="font-black text-xs text-slate-850 leading-snug line-clamp-2 uppercase">
                          {rec.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed font-semibold">
                          {rec.summary}
                        </p>
                        <div className="text-[10px] text-[#1a8a42] font-extrabold flex items-center pt-1 group-hover:underline">
                          {loc.readMore}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COMMENT SECTION */}
            <div className="mt-16 pt-10 border-t border-slate-200 space-y-8">
              
              <div className="flex items-center justify-between">
                <h4 className="font-display font-black text-slate-850 text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#1a8a42]" />
                  {commLoc.commentsTitle} ({comments.length})
                </h4>
                <span className="text-xs text-slate-400 font-semibold italic">{commLoc.offlineStorageLabel}</span>
              </div>

              {/* Comments feedback list */}
              <div className="space-y-4">
                {comments.map((comm) => (
                  <div key={comm.id} className="bg-slate-50 border border-slate-100 p-4 sm:p-5 rounded-2xl flex gap-3.5 items-start text-left">
                    <img 
                      src={comm.avatar} 
                      alt={comm.name} 
                      className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100 leading-none"
                    />
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-extrabold text-[#1a8a42]">{comm.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold">{comm.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                        {comm.text}
                      </p>
                      <button 
                        onClick={() => alert(`Upvoted Alexander's review!`)}
                        className="text-[10.5px] text-slate-400 hover:text-[#1a8a42] font-semibold flex items-center gap-1 pt-1"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{commLoc.helpfulReviewLabel}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* POST REPLY FORM */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs text-left space-y-4">
                <div className="space-y-1 border-b border-slate-100 pb-2">
                  <h4 className="font-display font-black text-slate-900 text-sm tracking-tight uppercase">
                    {commLoc.leaveReplyTitle}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold">
                    {commLoc.emailNoteLabel} <span className="text-red-500 font-extrabold">*</span>
                  </p>
                </div>

                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  {/* Comm text area */}
                  <div className="space-y-1.5">
                    <label htmlFor="comment-text" className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      {commLoc.commentTextLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="comment-text"
                      rows={4}
                      required
                      placeholder={commLoc.commentTextPlaceholder}
                      value={newComment.text}
                      onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                      className="w-full p-4 bg-[#fbfcfa] border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
                    />
                  </div>

                  {/* Name, Email, Web */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="comment-name" className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        {commLoc.nameLabel} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="comment-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={newComment.name}
                        onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                        className="w-full px-4 py-2 bg-[#fbfcfa] border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="comment-email" className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        {commLoc.emailLabel} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="comment-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={newComment.email}
                        onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                        className="w-full px-4 py-2 bg-[#fbfcfa] border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="comment-website" className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        {commLoc.websiteLabel}
                      </label>
                      <input 
                        id="comment-website"
                        type="url"
                        placeholder="https://example.com"
                        value={newComment.website}
                        onChange={(e) => setNewComment({ ...newComment, website: e.target.value })}
                        className="w-full px-4 py-2 bg-[#fbfcfa] border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:ring-1 focus:ring-[#1a8a42] focus:border-[#1a8a42] focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Browser save props checkbox toggle */}
                  <div className="flex items-start gap-2 text-xs font-bold text-slate-650 cursor-pointer select-none">
                    <input 
                      id="saveProps"
                      type="checkbox"
                      checked={newComment.saveProps}
                      onChange={(e) => setNewComment({ ...newComment, saveProps: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#1a8a42] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="saveProps" className="cursor-pointer">
                      {commLoc.savePropsLabel}
                    </label>
                  </div>

                  {/* REALISTIC ANIMATED GOOGLE RECAPTCHA EMULATOR WIDGET */}
                  <div className="bg-[#f9f9f9] border border-slate-200 rounded-lg p-3 max-w-[300px] flex items-center justify-between shadow-xs select-none">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCaptchaClick}
                        className={`w-6 h-6 rounded border-2 transition-all flex items-center justify-center cursor-pointer bg-white ${
                          captchaVerified ? 'border-emerald-500 bg-emerald-50' : 'border-slate-300'
                        }`}
                      >
                        {captchaLoading ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#1a8a42]" />
                        ) : captchaVerified ? (
                          <Check className="w-4 h-4 text-emerald-600 font-extrabold" />
                        ) : null}
                      </button>
                      <span className="text-xs font-bold text-slate-600">{commLoc.notARobotLabel}</span>
                    </div>
                    <div className="flex flex-col items-center pr-1">
                      {/* Standard reCAPTCHA aesthetic symbol representation */}
                      <div className="w-7 h-7 relative">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500 fill-current opacity-75">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                        </svg>
                      </div>
                      <span className="text-[7.5px] font-bold text-slate-400">reCAPTCHA</span>
                      <span className="text-[6.5px] text-slate-400 font-medium">Privacy - Terms</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#1a8a42] hover:bg-[#156e34] text-white font-sans font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    {commentSubmitted ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>{commLoc.postingLabel}</span>
                      </>
                    ) : (
                      <span>{commLoc.postButtonLabel}</span>
                    )}
                  </button>
                </form>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
