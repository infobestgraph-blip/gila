import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FOOTER_TRANSLATIONS: Record<string, any> = {
  en: {
    tagline: "Sabz Gostaran Gilan Fruit Company (GilaFruit) operates premier fresh produce grading facilities, cold storage cellars, and international logistic corridors from Astara and Talesh to global wholesale markets.",
    astaraSorting: "Astara Sorting Plant:",
    taleshOrchards: "Talesh Fruit Orchards:",
    astaraLoc: "Iran, Gilan, Astara",
    taleshLoc: "Iran, Gilan, Talesh",
    usefulLinks: "Useful Links",
    links: {
      catalog: "View the Catalog",
      gallery: "Multimedia gallery",
      history: "Company History",
      services: "GilaFruit Services",
      news: "The Latest News",
      certs: "Our Certificates",
      calendar: "Product Calendar",
      terms: "Terms and Conditions"
    },
    answerHeader: "We are your answer",
    whatsappContacts: "WhatsApp Contacts:",
    russiaEaeu: "Russia / EAEU",
    menaDesk: "MENA Desk",
    astaraDispatch: "Astara Dispatch",
    phone: "Phone",
    email: "Email",
    newsletters: "Newsletters",
    subTitle: "Subscribe for Harvesting Reports",
    subDesc: "By subscribing, you will get real-time email notices about harvesting season, product availability catalogs, and cold room storage clearances.",
    placeholder: "Enter your email address...",
    subscribe: "Subscribe",
    alert: "Thank you for subscribing! You will receive harvesting reports and GilaFruit crop availability logs.",
    copyrightCount: "© 2026. All Rights Reserved, Proudly powered by Sabz Gostaran Gilan Fruit Co.",
    console: "Console",
    estd: "ESTD 2001"
  },
  fa: {
    tagline: "شرکت سبز گستران گیلافروت (GilaFruit) بهره‌بردار تخصصی مجهزترین پایانه‌های سورتینگ، سردخانه‌های اتمسفر کنترل شده و دالان‌های ترانزیتی ترانسپورت از آستارا و تالش به بازارهای جهانی می‌باشد.",
    astaraSorting: "پایانه سورتینگ آستارا:",
    taleshOrchards: "باغات کیوی تالش:",
    astaraLoc: "ایران، گیلان، آستارا",
    taleshLoc: "ایران، گیلان، تالش",
    usefulLinks: "لینک‌های مفید",
    links: {
      catalog: "مشاهده کاتالوگ",
      gallery: "گالری تصاویر چندرسانه‌ای",
      history: "تاریخچه شرکت",
      services: "خدمات گیلافروت",
      news: "آخرین اخبار و وبلاگ",
      certs: "گواهینامه‌های رسمی",
      calendar: "تقویم عرضه محصولات",
      terms: "شرایط و قوانین"
    },
    answerHeader: "پاسخگوی شما هستیم",
    whatsappContacts: "تماس‌های واتساپ:",
    russiaEaeu: "بخش روسیه و اوراسیا",
    menaDesk: "بخش خاورمیانه و خلیج فارس",
    astaraDispatch: "پایانه لجستیک آستارا",
    phone: "تلفن",
    email: "ایمیل",
    newsletters: "عضویت در خبرنامه",
    subTitle: "اشتراک گزارشات دوره برداشت",
    subDesc: "با عضویت در خبرنامه، گزارشات موجودی انبارها، کاتالوگ کالاهای آماده فروش و اطلاعیه‌های فصلی را از طریق ایمیل دریافت کنید.",
    placeholder: "ایمیل خود را وارد کنید...",
    subscribe: "عضویت",
    alert: "سپاسگزاریم! ایمیل شما ثبت شد. گزارش‌های برداشت و موجودی را به زودی دریافت خواهید کرد.",
    copyrightCount: "© ۲۰۲۶. تمامی حقوق محفوظ است. شرکت سبز گستران گیلا فروت.",
    console: "کنسول مدیریت",
    estd: "تاسیس ۱۳۸۰"
  },
  ru: {
    tagline: "Компания Сабз Гостаран Гилан Фрут (GilaFruit) управляет первоклассными цехами калибровки, холодильными терминалами и международными коридорами из Астары и Талеша на мировые оптовые рынки.",
    astaraSorting: "Завод сортировки в Астаре:",
    taleshOrchards: "Сады киви в Талеше:",
    astaraLoc: "Иран, Гилян, Астара",
    taleshLoc: "Иран, Гилян, Талеш",
    usefulLinks: "Полезные ссылки",
    links: {
      catalog: "Открыть каталог",
      gallery: "Мультимедиа галерея",
      history: "История компании",
      services: "Услуги GilaFruit",
      news: "Последние статьи",
      certs: "Наши сертификаты",
      calendar: "Календарь поставок",
      terms: "Условия использования"
    },
    answerHeader: "Мы готовы ответить",
    whatsappContacts: "Контакты WhatsApp:",
    russiaEaeu: "Россия / ЕАЭС",
    menaDesk: "Ближний Восток",
    astaraDispatch: "Диспетчерская Астары",
    phone: "Телефон",
    email: "Эл. почта",
    newsletters: "Новостная рассылка",
    subTitle: "Подпишитесь на отчеты",
    subDesc: "Подпишитесь, чтобы получать актуальные отчеты о сборе урожая, новые каталоги наличия и информацию о холодильном хранении.",
    placeholder: "Введите ваш адрес эл. почты...",
    subscribe: "Подписаться",
    alert: "Спасибо за подписку! Вы начнете получать отчеты о сборе урожая и логи наличия продукции GilaFruit.",
    copyrightCount: "© 2026. Все права защищены. Sabz Gostaran Gilan Fruit Co.",
    console: "Консоль",
    estd: "ОСН. 2001"
  },
  ar: {
    tagline: "تقوم شركة سبز كستران جيلان فروت (جيلافروت) بتشغيل منشآت فرز وتعبئة حاصلات زراعية فاخرة، وغرف التبريد وخطوط النقل واللوجستيات المبردة من آستارا وتالش إلى الأسواق العالمية.",
    astaraSorting: "منشأة الفرز بآستارا:",
    taleshOrchards: "بساتين الفواكه بتالش:",
    astaraLoc: "إيران، جيلان، آستارا",
    taleshLoc: "إيران، جيلان، تالش",
    usefulLinks: "روابط مفيدة",
    links: {
      catalog: "عرض الكتالوج",
      gallery: "المعرض الإعلامي",
      history: "تاريخ الشركة",
      services: "خدمات جيلافروت",
      news: "آخر الأخبار",
      certs: "شهاداتنا الرسمية",
      calendar: "تقويم المنتجات",
      terms: "الشروط والأحكام"
    },
    answerHeader: "نحن هنا من أجلك",
    whatsappContacts: "جهات اتصال واتساب:",
    russiaEaeu: "روسيا والاتحاد الأوراسي",
    menaDesk: "الشرق الأوسط والخليج",
    astaraDispatch: "خدمات لوجستية بآستارا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    newsletters: "النشرات الإخبارية",
    subTitle: "الاشتراك في تقارير الحصاد",
    subDesc: "من خلال الاشتراك، ستتلقى إشعارات حقيقية بالبريد الإلكتروني لتقرير فترات الحصاد، وأدلة توفر السلع التصديرية.",
    placeholder: "أدخل بريدك الإلكتروني...",
    subscribe: "الاشتراك",
    alert: "شكرًا لك على الاشتراك! ستتلقى تقارير الحصاد ومستويات توفر المحاصيل من جيلافروت.",
    copyrightCount: "© 2026. جميع الحقوق محفوظة، سبز كسترan جيلان فروت.",
    console: "لوحة التحكم",
    estd: "تأسس عام ٢٠٠١"
  },
  tr: {
    tagline: "Sabz Gostaran Gilan Fruit (GilaFruit), Astara ve Talesh'ten küresel toptan satış pazarlarına kadar birinci sınıf paketleme tesisleri, soğuk hava depoları ve uluslararası lojistik koridorları işletmektedir.",
    astaraSorting: "Astara Paketleme Tesisi:",
    taleshOrchards: "Talesh Meyve Bahçeleri:",
    astaraLoc: "İran, Gilan, Astara",
    taleshLoc: "İran, Gilan, Talesh",
    usefulLinks: "Faydalı Linkler",
    links: {
      catalog: "Katalog Görüntüle",
      gallery: "Medya Galerisi",
      history: "Şirket Tarihi",
      services: "GilaFruit Hizmetleri",
      news: "Son Haberler",
      certs: "Sertifikalarımız",
      calendar: "Ürün Takvimi",
      terms: "Şartlar ve Koşullar"
    },
    answerHeader: "Size yardımcı olalım",
    whatsappContacts: "WhatsApp İletişim:",
    russiaEaeu: "Rusya / EAEU",
    menaDesk: "MENA Masası",
    astaraDispatch: "Astara Lojistik",
    phone: "Telefon",
    email: "E-posta",
    newsletters: "Bültenler",
    subTitle: "Hasat Raporları İçin Kaydolun",
    subDesc: "Kaydolarak, hasat mevsimi, ürün stok katalogları ve soğuk hava deposu boşaltma durumları hakkında gerçek zamanlı e-posta bildirimleri alırsınız.",
    placeholder: "E-posta adresinizi girin...",
    subscribe: "Abone Ol",
    alert: "Aboneliğiniz için teşekkür ederiz! Hasat raporlarını ve stok güncellemelerini almaya başlayacaksınız.",
    copyrightCount: "© 2026. Tüm Hakları Saklıdır, Sabz Gostaran Gilan Fruit Co.",
    console: "Yönetim Konsolu",
    estd: "Kuruluş 2001"
  },
  hi: {
    tagline: "सब्ज़ गोस्तारन गिलान फ्रूट कंपनी (GilaFruit) अस्टारा और तालेश से वैश्विक थोक बाजारों में ताजे फलों और सब्जियों के छंटाई, शीत गृह और अंतरराष्ट्रीय लॉजिस्टिक का संचालन करती है।",
    astaraSorting: "अस्टारा छंटाई संयंत्र:",
    taleshOrchards: "तालेश फल उद्यान:",
    astaraLoc: "ईरान, गिलان, अस्टारा",
    taleshLoc: "ईरान, गिलان, तालेश",
    usefulLinks: "उपयोगी लिंक्स",
    links: {
      catalog: "कैटलॉग देखें",
      gallery: "मल्टीमीडिया गैलरी",
      history: "कंपनी का इतिहास",
      services: "गीलाफ्रूट सेवाएं",
      news: "ताज़ा न्यूज़",
      certs: "हमारे प्रमाण पत्र",
      calendar: "उत्पाद कैलेंडर",
      terms: "नियम और शर्तें"
    },
    answerHeader: "हम आपके जवाब हैं",
    whatsappContacts: "व्हाट्सएप संपर्क:",
    russiaEaeu: "रूस / ईएईयू",
    menaDesk: "मध्य पूर्व और उत्तर अफ्रीका",
    astaraDispatch: "अस्टारा डिस्पैच",
    phone: "फ़ोन",
    email: "ईमेल",
    newsletters: "न्यूज़लेटर विज्ञापन",
    subTitle: "कटाई रिपोर्ट के लिए सदस्यता लें",
    subDesc: "सदस्यता लेने से आपको कटाई के मौसम, उत्पादों की उपलब्धता की सूची और स्टॉक रिपोर्ट के बारे में ईमेल अलर्ट मिलेंगे।",
    placeholder: "अपना ईमेल पता दर्ज करें...",
    subscribe: "सब्सक्राइब",
    alert: "सदस्यता लेने के लिए धन्यवाद! आपको जल्द ही नवीनतम फसल उपलब्धताओं की जानकारी मिल जाएगी।",
    copyrightCount: "© 2026. सर्वाधिकार सुरक्षित, सब्ज़ गोस्तारन गिलान फ्रूट कंपनी।",
    console: "कंसोल",
    estd: "स्थापना 2001"
  },
  uz: {
    tagline: "Sabz Gostaran Gilan Fruit (GilaFruit) Astara va Tales dahlizlaridan jahon ulgurji bozorlarigacha eng yaxshi saralash zavodi, muzlatgichli omborxonalar va xalqaro transport koridorlarini boshqaradi.",
    astaraSorting: "Astara saralash zavodi:",
    taleshOrchards: "Tales kivi bog'lari:",
    astaraLoc: "Eron, Gilan, Astara",
    taleshLoc: "Eron, Gilan, Tales",
    usefulLinks: "Foydali havolalar",
    links: {
      catalog: "Kataloglarni ko'rish",
      gallery: "Kino va foto galereya",
      history: "Kompaniya tarixi",
      services: "GilaFruit xizmatlari",
      news: "So'nggi yangiliklar",
      certs: "Sertifikatlarimiz",
      calendar: "Mahsulotlar taqvimi",
      terms: "Foydalanish shartlari"
    },
    answerHeader: "Biz sizga javob beramiz",
    whatsappContacts: "WhatsApp aloqalari:",
    russiaEaeu: "Rossiya / YeOII",
    menaDesk: "Yaqin Sharq bo'limi",
    astaraDispatch: "Astara logistikasi",
    phone: "Telefon",
    email: "Elektron pochta",
    newsletters: "Yangiliklar ro'yxati",
    subTitle: "Hosil hisobotlariga obuna bo'ling",
    subDesc: "Obuna bo'lish orqali siz yig'im-terim hisobotlari va mavsumiy tovarlar katalogi to'g'risida elektron xabarnomalar olasiz.",
    placeholder: "Elektron pochtangizni kiriting...",
    subscribe: "A'zo bo'lish",
    alert: "Obuna uchun rahmat! GilaFruit hosil va katalog hisobotlarini olishni boshlaysiz.",
    copyrightCount: "© 2026. Barcha huquqlar himoyalangan, Sabz Gostaran Gilan Fruit.",
    console: "Konsol",
    estd: "Tashkil topgan 2001"
  },
  az: {
    tagline: "Sabz Gostaran Gilan Fruit (GilaFruit) Astara və Talesdən qlobal topdansatış bazarlarına qədər yüksək keyfiyyətli çeşidləmə zavodu, soyuq saxlama anbarları və beynəlxalq loqistika dəhlizləri idarə edir.",
    astaraSorting: "Astara Çeşidləmə Zavodu:",
    taleshOrchards: "Tales Kivi Bağları:",
    astaraLoc: "İran, Gilan, Astara",
    taleshLoc: "İran, Gilan, Tales",
    usefulLinks: "Faydalı linklər",
    links: {
      catalog: "Kataloqa baxış",
      gallery: "Media Qalereyası",
      history: "Şirkət Tarixi",
      services: "GilaFruit Xidmətləri",
      news: "Son Xəbərlər",
      certs: "Sertifikatlarımız",
      calendar: "Məhsul Təqvimi",
      terms: "Qaydalar və Şərtlər"
    },
    answerHeader: "Sizin xidmətinizdəyik",
    whatsappContacts: "WhatsApp Əlaqələri:",
    russiaEaeu: "Rusiya / Avrasiya",
    menaDesk: "Yaxın Şərq Şöbəsi",
    astaraDispatch: "Astara Dispetçer",
    phone: "Telefon",
    email: "E-poçt",
    newsletters: "Xəbər bülletenləri",
    subTitle: "Məhsul Hesabatlarına Abunə Olun",
    subDesc: "Abunə olaraq, biçin mövsümü, mövcud məhsul kataloqları və anbar təmizləmə statusları barədə məlumat alacaqsınız.",
    placeholder: "E-poçt ünvanınızı daxil edin...",
    subscribe: "Abunə ol",
    alert: "Abunə olduğunuz üçün təşəkkür edirik! Tezliklə məhsul məlumatlarını alacaqsınız.",
    copyrightCount: "© 2026. Bütün Hüquqlar Qorunur, Sabz Gostaran Gilan Fruit Co.",
    console: "Konsol",
    estd: "2001-ci ildən"
  },
  uk: {
    tagline: "Компанія Сабз Гостаран Гілан Фрут (GilaFruit) управляє передовими цехами калібрування, холодильними терміналами та логістичними лініями з Астари та Талешу до великих оптових ринків.",
    astaraSorting: "Сортувальний завод в Астарі:",
    taleshOrchards: "Сади ківі в Талеші:",
    astaraLoc: "Іран, Гілян, Астара",
    taleshLoc: "Іран, Гілян, Талеш",
    usefulLinks: "Корисні посилання",
    links: {
      catalog: "Переглянути каталог",
      gallery: "Мультимедіа галерея",
      history: "Історія компанії",
      services: "Послуги GilaFruit",
      news: "Останні Новини",
      certs: "Наші сертифікати",
      calendar: "Календар поставок",
      terms: "Правила та умови"
    },
    answerHeader: "Ми готові відповісти",
    whatsappContacts: "Контакти WhatsApp:",
    russiaEaeu: "Росія / ЄАЕС",
    menaDesk: "Близький Схід",
    astaraDispatch: "Диспетчерська Астари",
    phone: "Телефон",
    email: "Ел. пошта",
    newsletters: "Розсилка новин",
    subTitle: "Підпишіться на звіти",
    subDesc: "Підпишіться, щоб отримувати сповіщення про сезони збирання врожаю, нові каталоги наявності та статус холодильного зберігання.",
    placeholder: "Введіть вашу адресу електронної пошти...",
    subscribe: "Підписатися",
    alert: "Дякуємо за підписку! Ви почнете отримувати звіти про врожаї та наявність GilaFruit.",
    copyrightCount: "© 2026. Всі права захищено, Sabz Gostaran Gilan Fruit Co.",
    console: "Консоль",
    estd: "ЗАСН. 2001"
  }
};

export default function Footer() {
  const { language, direction } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const tF = FOOTER_TRANSLATIONS[language] || FOOTER_TRANSLATIONS['en'];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  const menuLinks = [
    { label: tF.links.catalog, hash: '#/catalog' },
    { label: tF.links.gallery, hash: '#/product-photo-gallery' },
    { label: tF.links.history, hash: '#/history' },
    { label: tF.links.services, hash: '#/services' },
    { label: tF.links.news, hash: '#/blog' },
    { label: tF.links.certs, hash: '#/certificates' },
    { label: tF.links.calendar, hash: '#/calendar' },
    { label: tF.links.terms, hash: '#/terms-and-conditions' }
  ];

  const dirClass = direction === 'rtl' ? 'text-right' : 'text-left';

  return (
    <footer id="main-footer" className="bg-slate-50 border-t border-slate-200 mt-auto" dir={direction}>
      
      {/* Primary Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-start">
          
          {/* Column 1: Company Intro (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 col-span-1">
            <h3 className="font-display text-xl font-bold text-emerald-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              GilaFruit
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              {tF.tagline}
            </p>
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-700">{tF.astaraSorting}</p>
                  <a 
                    href="https://maps.google.com/?q=Astara,+Gilan+Province,+Iran" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-emerald-800 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    {tF.astaraLoc}
                    <ExternalLink className="w-2.5 h-2.5 inline" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-700">{tF.taleshOrchards}</p>
                  <a 
                    href="https://maps.google.com/?q=Talesh,+Gilan+Province,+Iran" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-emerald-800 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    {tF.taleshLoc}
                    <ExternalLink className="w-2.5 h-2.5 inline" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 md:pl-6 col-span-1">
            <h4 className="font-display text-sm font-bold text-slate-900 tracking-wide uppercase">
              {tF.usefulLinks}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-start" id="footer-links">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.hash}
                    className="text-slate-600 hover:text-emerald-850 transition-colors inline-block hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 col-span-1">
            <h4 className="font-display text-sm font-bold text-slate-900 tracking-wide uppercase">
              {tF.answerHeader}
            </h4>
            <div className="space-y-4 text-xs sm:text-sm" id="footer-contact-info">
              
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2 text-start">
                <span className="text-xs font-semibold text-emerald-805 tracking-wider uppercase flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {tF.whatsappContacts}
                </span>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium font-sans">
                  <a
                    href="https://wa.me/989900978002"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-emerald-850 hover:underline transition-all"
                  >
                    +98 990 097 8002 ({tF.russiaEaeu})
                  </a>
                  <a
                    href="https://wa.me/989900978005"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-emerald-850 hover:underline transition-all"
                  >
                    +98 990 097 8005 ({tF.menaDesk})
                  </a>
                  <a
                    href="https://wa.me/989113893051"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-emerald-850 hover:underline transition-all"
                  >
                    +98 911 389 3051 ({tF.astaraDispatch})
                  </a>
                </div>
              </div>

              <div className="space-y-2 pl-1 text-xs">
                <div className="flex items-center gap-2.5 text-slate-600">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-sans">
                    {tF.phone}: <a href="tel:+982191099091" className="font-semibold text-slate-800 hover:underline">+98 21 9109 9091</a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-600">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    {tF.email}: <a href="mailto:info@gilafruit.com" className="font-semibold text-slate-800 hover:underline">info@gilafruit.com</a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-600">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    {tF.email}: <a href="mailto:support@gilafruit.com" className="font-semibold text-slate-800 hover:underline">support@gilafruit.com</a>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter Section Placement */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-start max-w-lg md:mr-4">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">{tF.newsletters}</span>
              <h4 className="font-display font-semibold text-base sm:text-md text-white">{tF.subTitle}</h4>
              <p className="text-xs text-emerald-100/75 leading-relaxed">
                {tF.subDesc}
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0">
              {newsletterSubscribed ? (
                <div className="bg-emerald-900 border border-emerald-500/30 rounded-2xl px-6 py-4 flex items-center gap-2.5 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold leading-relaxed">{tF.alert}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-2.5">
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={tF.placeholder}
                    className="px-4 py-2 bg-emerald-900 border border-emerald-800/80 rounded-xl text-xs text-emerald-100 placeholder:text-emerald-200/50 focus:outline-none focus:border-amber-400 w-full sm:w-64"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0 animate-scale-in"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {tF.subscribe}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Lower Banner */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <p>{tF.copyrightCount}</p>
          <div className="flex space-x-4 font-sans">
            <a href="#/admin" className="hover:text-emerald-850 transition-colors font-semibold">{tF.console}</a>
            <span>•</span>
            <span className="text-slate-400 font-mono">{tF.estd}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
