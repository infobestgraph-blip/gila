import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, FileText, ExternalLink, Globe, Check, Users, Building, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TEXTS: Record<string, {
  heroTitle: string;
  heroDesc: string;
  bodyTitle: string;
  bodyDesc: string;
  certNumber: string;
  phytosanitaryScope: string;
  issueDate: string;
  expiryDate: string;
  verificationSummaryTitle: string;
  verificationSummaryDesc: string;
  closeWindow: string;
  requestSealedCopier: string;
  guaranteeTag: string;
  guaranteeTitle: string;
  guaranteeDesc: string;
  globalCompliance: string;
  sgsVerified: string;
}> = {
  en: {
    heroTitle: "GilaFruit's International Certificates",
    heroDesc: "At GilaFruit, we prioritize the quality and safety of our agricultural products. To demonstrate our commitment to providing healthy and high-quality products to our valued customers, we have obtained prestigious international ISO, GMP, and HACCP certifications.",
    bodyTitle: "A Comprehensive Set of Global Standard Certifications",
    bodyDesc: "The certifications acquired by GilaFruit encompass all aspects of our import and export operations, demonstrating our commitment to global trade. We supply fresh fruits and vegetables of the highest quality to customers worldwide.",
    certNumber: "Certificate Number",
    phytosanitaryScope: "Phytosanitary Scope",
    issueDate: "Initial Issue Date",
    expiryDate: "Expiry Date",
    verificationSummaryTitle: "Verification Summary:",
    verificationSummaryDesc: "This official document registers that Sabz Gostaran Gilan Fruit Co. fulfills all phytosanitary, temperature guidelines, and sorting accuracy laws as set by international border regulations. Audits occur annually and copying is permitted for verified wholesale cargo buyers.",
    closeWindow: "Close Window",
    requestSealedCopier: "Request Sealed Copy",
    guaranteeTag: "🌱 Phytosanitary Standard Guarantee",
    guaranteeTitle: "Our Guarantee of Rigorous Phytosanitary Screening",
    guaranteeDesc: "Every carton loaded into GilaFruit's temperature-controlled reefer trucks undergoes a pre-departure quarantine inspection under the supervisory guidelines of the Ministry of Agriculture of Iran. This double safeguarding stage checks for scale insects, brix level, and core temperature limits, producing healthy, impeccable, compliant shipments guaranteed to glide across customs terminals without delay.",
    globalCompliance: "Global Compliance",
    sgsVerified: "SGS Verified Loading"
  },
  fa: {
    heroTitle: "گواهینامه‌های بین‌المللی گیلافروت",
    heroDesc: "در گیلافروت، کیفیت و سلامت محصولات کشاورزی در اولویت اول ماست. برای اثبات تعهد خود در ارائه محصولات سالم و باکیفیت به مشتریان، گواهینامه‌های معتبر بین‌المللی همچون ISO، GMP و HACCP را دریافت کرده‌ایم.",
    bodyTitle: "مجموعه‌ای جامع از استانداردهای معتبر جهانی",
    bodyDesc: "گواهینامه‌های بین‌المللی شرکت گیلافروت تمامی مراحل مدیریت کیفیت، بسته‌بندی، انبارداری و صادرات را پوشش داده و ضامن کیفیت عالی در بازارهای هدف صادراتی است.",
    certNumber: "شماره گواهینامه",
    phytosanitaryScope: "دامنه بهداشت نباتی",
    issueDate: "تاریخ صدور اولیه",
    expiryDate: "تاریخ انقضا",
    verificationSummaryTitle: "خلاصه تأییدیه:",
    verificationSummaryDesc: "این سند رسمی ثبت می‌کند که شرکت سبز گستران گیلا فروت تمامی دستورالعمل‌های بهداشتی، دمایی و سورتینگ دقیق را مطابق قوانین بین‌المللی گمرک رعایت می‌کند.",
    closeWindow: "بستن پنجره",
    requestSealedCopier: "درخواست نسخه مهر شده",
    guaranteeTag: "🌱 تضمین استاندارد حفظ نباتات",
    guaranteeTitle: "تضمین ما بر غربالگری دقیق بهداشت نباتی",
    guaranteeDesc: "هر کارتن بارگیری شده در کامیون‌های یخچال‌دار گیلافروت تحت نظارت دقیق وزارت جهاد کشاورزی ایران مورد بازرسی قرنطینه پیش از خروج قرار می‌گیرد تا باری بدون آفت، با بریکس استاندارد و کیفیت عالی ارسال شود.",
    globalCompliance: "انطباق جهانی",
    sgsVerified: "بارگیری تحت نظارت SGS"
  },
  ru: {
    heroTitle: "Международные сертификаты GilaFruit",
    heroDesc: "В GilaFruit мы уделяем приоритетное внимание качеству и безопасности продукции. Чтобы подтвердить нашу приверженность качеству, мы получили престижные международные сертификаты ISO, GMP и HACCP.",
    bodyTitle: "Комплексный набор глобальных стандартов",
    bodyDesc: "Сертификаты, полученные GilaFruit, охватывают все аспекты наших экспортно-импортных операций, подтверждая наше стремление к высоким стандартам.",
    certNumber: "Номер сертификата",
    phytosanitaryScope: "Фитосанитарный охват",
    issueDate: "Дата выдачи",
    expiryDate: "Дата окончания",
    verificationSummaryTitle: "Проверка документа:",
    verificationSummaryDesc: "Этот документ подтверждает, что Sabz Gostaran Gilan Fruit Co. соответствует всем фитосанитарным стандартам и правилам калибровки.",
    closeWindow: "Закрыть",
    requestSealedCopier: "Запросить копию с печатью",
    guaranteeTag: "🌱 Фитосанитарная гарантия",
    guaranteeTitle: "Наша гарантия строгого фитосанитарного контроля",
    guaranteeDesc: "Каждая коробка, загружаемая в рефрижераторы GilaFruit, проходит карантинный контроль перед отправкой под руководством Министерства сельского хозяйства Ирана.",
    globalCompliance: "Мировой стандарт",
    sgsVerified: "Контроль загрузки SGS"
  },
  ar: {
    heroTitle: "شهادات جيلا فروت الدولية",
    heroDesc: "في جيلا فروت، نضع جودة وسلامة المنتجات الزراعية على رأس أولوياتنا. لإثبات التزامنا بتقديم منتجات صحية وعالية الجودة، حصلنا على شهادات أيزو، GMP، وهاسب الدولية المرموقة.",
    bodyTitle: "مجموعة شاملة من الشهادات والمعايير العالمية",
    bodyDesc: "تغطي الشهادات التي حصلت عليها جيلا فروت جميع جوانب وفئات عمليات التصدير والاستيراد لدينا، مما يضمن معايير النخبة لشركائنا.",
    certNumber: "رقم الشهادة",
    phytosanitaryScope: "المرجعية الصحية",
    issueDate: "تاريخ الإصدار",
    expiryDate: "تاريخ الانتهاء",
    verificationSummaryTitle: "ملخص التحقق:",
    verificationSummaryDesc: "يسجل المستند أن شركة سبز گستران جيلا فروت تلتزم بجميع معايير درجات الحرارة والفرز والتوضيب.",
    closeWindow: "إغلاق النافذة",
    requestSealedCopier: "طلب نسخة مختومة",
    guaranteeTag: "🌱 ضمان الصحة النباتية",
    guaranteeTitle: "ضمان الفحص الدقيق للصحة النباتية والقرنطينة",
    guaranteeDesc: "تخضع كل كرتونة يتم شحنها في شاحناتنا لفحص وقائي صارم قبل المغادرة لضمان عدم وجود آفات وسلامة حرارة المنتج.",
    globalCompliance: "الامتثال العالمي",
    sgsVerified: "فحص بضائع SGS"
  },
  tr: {
    heroTitle: "GilaFruit Uluslararası Sertifikaları",
    heroDesc: "GilaFruit'te tarım ürünlerimizin kalitesine ve güvenliğine öncelik veriyoruz. Müşterilerimize sağlıklı ve kaliteli ürünler sunma taahhüdümüzü kanıtlamak için prestijli uluslararası ISO, GMP ve HACCP sertifikalarını aldık.",
    bodyTitle: "Küresel Standart Sertifikalarının Kapsamlı Seti",
    bodyDesc: "GilaFruit tarafından alınan sertifikalar, ithalat ve ihracat operasyonlarımızın tüm yönlerini kapsamakta ve küresel ticarete olan bağlılığımızı göstermektedir.",
    certNumber: "Sertifika Numarası",
    phytosanitaryScope: "Fitosaniter Kapsamı",
    issueDate: "İlk Yayın Tarihi",
    expiryDate: "Son Kullanma Tarihi",
    verificationSummaryTitle: "Doğrulama Özeti:",
    verificationSummaryDesc: "Bu resmi belge, Sabz Gostaran Gilan Fruit Co.'nun uluslararası sınırlardaki fitosaniter standartları tam olarak karşıladığını onaylar.",
    closeWindow: "Pencereyi Kapat",
    requestSealedCopier: "Mühürlü Kopya İste",
    guaranteeTag: "🌱 Fitosaniter Standart Garantisi",
    guaranteeTitle: "Sıkı Fitosaniter Tarama Garantimiz",
    guaranteeDesc: "GilaFruit reefer tırlarına yüklenen her karton, İran Tarım Bakanlığı yönergeleri altında karantina kontrolünden geçer.",
    globalCompliance: "Küresel Uyum",
    sgsVerified: "SGS Denetimli Yükleme"
  },
  uz: {
    heroTitle: "GilaFruit xalqaro sertifikatlari",
    heroDesc: "GilaFruit kompaniyasida mahsulotlarimiz sifati va xavfsizligi birinchi o'rinda turadi. Mijozlarimizga sog'lom va sifatli meva-sabzavot yetkazib berish maqsadida xalqaro ISO, GMP va HACCP sertifikatlarini qo'lga kiritdik.",
    bodyTitle: "Yevropa va Jahon standartlarining to'liq to'plami",
    bodyDesc: "GilaFruit sertifikatlari eksport va transport liniyalarining har bir bosqichini kafolatlab, to'liq xavfsizlik va barqarorlikni ta'minlaydi.",
    certNumber: "Sertifikat raqami",
    phytosanitaryScope: "Fitosanitariya sohasi",
    issueDate: "Berilgan sana",
    expiryDate: "Amal qilish muddati",
    verificationSummaryTitle: "Hujjat tasdig'i:",
    verificationSummaryDesc: "Ushbu hujjat Sabz Gostaran Gilan Fruit Co kompaniyasi eksport mahsulotlarining to'liq nazoratdan o'tganligini kafolatlaydi.",
    closeWindow: "Yopish",
    requestSealedCopier: "Sertifikat nusxasini so'rash",
    guaranteeTag: "🌱 Fitosanitar standart kafolati",
    guaranteeTitle: "Bizning qat'iy nazorat kafolatimiz",
    guaranteeDesc: "Har bir yuk mashinasidagi mahsulotlar eksport qilinishidan oldin to'liq fitosanitar laboratoriya tekshiruvidan va sinovdan o'tkaziladi.",
    globalCompliance: "Global moslik",
    sgsVerified: "SGS nazorati"
  },
  az: {
    heroTitle: "GilaFruit Beynəlxalq Sertifikatları",
    heroDesc: "GilaFruit-də kənd təsərrüfatı məhsullarımızın keyfiyyəti və təhlükəsizliyinə xüsusi önəm veririk. Müştərilərimizə sağlam və yüksək keyfiyyətli məhsullar təqdim etmək üçün beynəlxalq ISO, GMP və HACCP sertifikatlarını əldə etmişik.",
    bodyTitle: "Qlobal Standartların Tam və Geniş Toplusu",
    bodyDesc: "GilaFruit tərəfindən əldə olunan sertifikatlar, kənd təsərrüfatı ixracatı sahəsindəki peшəkarlığımızın və keyfiyyətimizin rəsmi sübutudur.",
    certNumber: "Sertifikat nömrəsi",
    phytosanitaryScope: "Fitosanitar sahəsi",
    issueDate: "Verilmə tarixi",
    expiryDate: "Bitmə tarixi",
    verificationSummaryTitle: "Sənəd təsdiqi:",
    verificationSummaryDesc: "Bu sənəd Sabz Gostaran Gilan Fruit şirkətinin beynəlxalq standartlara tam riayət etdiyini göstərir.",
    closeWindow: "Bağla",
    requestSealedCopier: "Möhürlü surətini istə",
    guaranteeTag: "🌱 Fitosanitar Standart Zəmanəti",
    guaranteeTitle: "Ciddi Fitosanitar Yoxlama Zəmanətimiz",
    guaranteeDesc: "Yüklənən hər bir soyuduculu yük maşını İttifaq və idxalçı ölkələrin tələblərinə uyğun olaraq bitki karantini nəzarətindən keçir.",
    globalCompliance: "Qlobal Uyğunluq",
    sgsVerified: "SGS Nəzarətində Yüklənmə"
  },
  hi: {
    heroTitle: "गीलाफ्रूट के अंतर्राष्ट्रीय प्रमाणपत्र",
    heroDesc: "गीलाफ्रूट में, हम अपनी कृषि उपज की गुणवत्ता और सुरक्षा को सर्वोच्च प्राथमिकता देते हैं। अपने मूल्यवान ग्राहकों को स्वस्थ उत्पाद प्रदान करने की हमारी प्रतिबद्धता के रूप में हमने ISO, GMP और HACCP प्रमाणपत्र प्राप्त किए हैं।",
    bodyTitle: "वैश्विक मानक प्रमाणपत्रों का एक व्यापक सेट",
    bodyDesc: "गीलाफ्रूट द्वारा प्राप्त प्रमाणपत्र हमारे आयात और निर्यात संचालन के सभी पहलुओं को कवर करते हैं, जो वैश्विक व्यापार के प्रति हमारी प्रतिबद्धта को दर्शाते हैं।",
    certNumber: "प्रमाणपत्र संख्या",
    phytosanitaryScope: "फाइटोसैनिटरी क्षेत्र",
    issueDate: "जारी करने की तारीख",
    expiryDate: "समाप्ति तिथि",
    verificationSummaryTitle: "सत्यापन सारांश:",
    verificationSummaryDesc: "यह दस्तावेज़ प्रमाणित करता है कि सबज़ गोस्तरन गिला फ्रूट कंपनी सभी निर्यात मानकों का पूरी तरह से पालन करती है।",
    closeWindow: "बंद करें",
    requestSealedCopier: "मुहरबंद प्रति का अनुरोध करें",
    guaranteeTag: "🌱 फाइटोसैनिटरी मानक गारंटी",
    guaranteeTitle: "कठोर फाइटोसैनिटरी स्क्रीनिंग की हमारी गारंटी",
    guaranteeDesc: "गीलाफ्रूट के तापमान-नियंत्रित ट्रकों में लोड किए गए प्रत्येक कार्टन की प्रस्थान से पहले जांच की जाती है।",
    globalCompliance: "वैश्विक अनुपालन",
    sgsVerified: "SGS सत्यापित लोडिंग"
  },
  uk: {
    heroTitle: "Міжнародні сертифікати GilaFruit",
    heroDesc: "У GilaFruit ми ставимо в пріоритет якість та безпеку сільськогосподарської продукції. Щоб продемонструвати наше прагнення постачати корисні та високоякісні продукти, ми отримали міжнародні сертифікати ISO, GMP та HACCP.",
    bodyTitle: "Комплексний набір сертифікатів світового стандарту",
    bodyDesc: "Сертифікати, отримані компанією GilaFruit, охоплюють усі аспекти наших експортно-імпортних операцій, демонструючи відданість світовим стандартам торгівлі.",
    certNumber: "Номер сертифіката",
    phytosanitaryScope: "Фітосанітарна відповідність",
    issueDate: "Дата видачі",
    expiryDate: "Термін дії",
    verificationSummaryTitle: "Перевірка документа:",
    verificationSummaryDesc: "Цей документ підтверджує, що Sabz Gostaran Gilan Fruit Co. виконує фітосанітарні обмеження та вимоги країн-імпортерів.",
    closeWindow: "Закрити",
    requestSealedCopier: "Запросити сертифіковану копію",
    guaranteeTag: "🌱 Фітосанітарна державна гарантія",
    guaranteeTitle: "Наша гарантія ретельного фітосанітарного контролю",
    guaranteeDesc: "Кожна коробка, яка завантажується в рефрижератори GilaFruit, проходить державний оглядовий карантин перед відправкою з Ірану.",
    globalCompliance: "Світові стандарти",
    sgsVerified: "Завантаження перевірено SGS"
  }
};

export default function CertificatesScreen() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const { language, t } = useLanguage();
  const ln = TEXTS[language] || TEXTS.en;

  // High-fidelity certificate definitions
  const certificatesData = [
    {
      id: 1,
      code: "ISO 9001:2015",
      type: "Quality Management System",
      issuer: "GML Quality Alliance Ltd.",
      certNo: "GML-988510250-Q",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export & Packing of Fruits and Vegetables",
      sealColor: "text-amber-500",
      ribbonColor: "bg-red-650",
      frameColor: "border-emerald-800",
      description: "We are committed to providing products and services of the highest quality and customer satisfaction, as certified by ISO 9001.",
      badge: "Quality Verified"
    },
    {
      id: 2,
      code: "ISO 10004:2018",
      type: "Customer Satisfaction",
      issuer: "IGS CERT International",
      certNo: "IGS-10004-8849-C",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export of Fruit & Vegetables",
      sealColor: "text-amber-500",
      ribbonColor: "bg-[#0b5125]",
      frameColor: "border-emerald-700",
      description: "Our ISO 10004 certification demonstrates our dedication to understanding and meeting our customers' needs and expectations.",
      badge: "Customer Focus"
    },
    {
      id: 3,
      code: "ISO 10668:2010",
      type: "Knowledge Management",
      issuer: "CERTROME Certification",
      certNo: "CR-10668-3011-KM",
      issueDate: "12-May-2024",
      expiryDate: "11-May-2027",
      scope: "Export of Fruit & Vegetables",
      sealColor: "text-blue-500",
      ribbonColor: "bg-blue-800",
      frameColor: "border-blue-900",
      description: "By implementing ISO 10668, we effectively manage our knowledge and expertise, driving continuous innovation.",
      badge: "Knowledge Management"
    },
    {
      id: 4,
      code: "ISO 14001:2015",
      type: "Environmental Management",
      issuer: "GML Quality Alliance Ltd.",
      certNo: "GML-988510250-E",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export & Packing of Fruits and Vegetables",
      sealColor: "text-emerald-500",
      ribbonColor: "bg-emerald-700",
      frameColor: "border-emerald-800",
      description: "Our ISO 14001 certification reflects our commitment to environmental responsibility and minimizing our impact on the planet.",
      badge: "Eco-Friendly Exporter"
    },
    {
      id: 5,
      code: "ISO 22000:2018",
      type: "Food Safety Management",
      issuer: "TUV System Certifications",
      certNo: "TUV-F-998510242-SR",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export of Fruit & Vegetables",
      sealColor: "text-amber-500",
      ribbonColor: "bg-[#115e2e]",
      frameColor: "border-emerald-800",
      description: "We are ISO 22000 certified, demonstrating our strict adherence to international standards of food safety management in all exports of fresh agri products.",
      badge: "Phytosanitary Secured"
    },
    {
      id: 6,
      code: "ISO 22301:2019",
      type: "Business Continuity",
      issuer: "CERTROME Certification",
      certNo: "CR-22301-4991-BC",
      issueDate: "12-May-2024",
      expiryDate: "11-May-2027",
      scope: "Export of Fruit & Vegetables",
      sealColor: "text-blue-500",
      ribbonColor: "bg-blue-800",
      frameColor: "border-blue-900",
      description: "Our ISO 22301 certification confirms our robust planning and preparation to sustain delivery even under strict boundary disruptions.",
      badge: "Logistics Stability"
    },
    {
      id: 7,
      code: "ISO 45001:2018",
      type: "Occupational Health and Safety",
      issuer: "GML Quality Alliance Ltd.",
      certNo: "GML-988510250-H",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export & Packing of Fruits and Vegetables",
      sealColor: "text-amber-500",
      ribbonColor: "bg-orange-700",
      frameColor: "border-emerald-800",
      description: "We are committed to providing a safe and healthy work environment for our employees, as evidenced by our ISO 45001 certification.",
      badge: "Safe Workforce"
    },
    {
      id: 8,
      code: "ISO GMP Practice",
      type: "Good Manufacturing Practice",
      issuer: "IGS CERT International",
      certNo: "IGS-GMP-7440-G",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export of Fruit & Vegetables",
      sealColor: "text-amber-500",
      ribbonColor: "bg-[#0b5125]",
      frameColor: "border-emerald-700",
      description: "Our ISO GMP certification guarantees that all our manufacturing processes adhere to the highest quality standards.",
      badge: "Perfect Hygiene"
    },
    {
      id: 9,
      code: "ISO HACCP Points",
      type: "Hazard Analysis & Critical Points",
      issuer: "TUV System Certifications",
      certNo: "TUV-HACCP-998510263-IR",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export & Sorting of Fruits & Vegetables",
      sealColor: "text-amber-500",
      ribbonColor: "bg-[#115e2e]",
      frameColor: "border-emerald-800",
      description: "Our ISO HACCP certification ensures that we have implemented a robust system to identify and control food safety hazards.",
      badge: "Zero-Hazard Food"
    },
    {
      id: 10,
      code: "ISO IMS Certified",
      type: "Integrated Management System",
      issuer: "GML Quality Alliance Ltd.",
      certNo: "GML-988510250-IMS",
      issueDate: "14-May-2024",
      expiryDate: "13-May-2027",
      scope: "Export and Packing of Fresh Produce",
      sealColor: "text-amber-500",
      ribbonColor: "bg-[#115e2e]",
      frameColor: "border-emerald-800",
      description: "Our integrated management system ensures that we effectively manage quality, environmental, health, and safety aspects of our operations.",
      badge: "Unified Standards"
    },
    {
      id: 11,
      code: "eNAMAD Trust",
      type: "Electronic Trust Mark",
      issuer: "E-Commerce Development Center",
      certNo: "EN-1107077421",
      issueDate: "Verified",
      expiryDate: "Continuous Check",
      scope: "Online Agricultural Trade Authenticity",
      sealColor: "text-blue-500",
      ribbonColor: "bg-blue-600",
      frameColor: "border-slate-300",
      description: "This mark signifies the reliability and security of our electronic transactions, assuring you that your personal and financial information is protected.",
      badge: "SSL Secure Portal"
    },
    {
      id: 12,
      code: "Digital Media Mark",
      type: "National Registration Mark",
      issuer: "Ministry of Cultural Heritage & Digital Media",
      certNo: "SAMAN-9908001",
      issueDate: "Registered",
      expiryDate: "Active Status",
      scope: "Compliance with Digital Trade Regs",
      sealColor: "text-orange-500",
      ribbonColor: "bg-orange-600",
      frameColor: "border-slate-300",
      description: "As a certified digital media, we adhere to all relevant laws and regulations governing digital media.",
      badge: "Government Audited"
    }
  ];

  return (
    <div className="bg-[#fcfdfb] min-h-screen pt-24 sm:pt-28 md:pt-[148px] text-slate-800 font-sans pb-20" id="certificates-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER */}
      <div className="bg-[#f2f4f1] border-y border-slate-200/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold uppercase tracking-wider text-[#01261d] font-sans">{t('common.certificates') || 'Certificates'}</span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <a href="#/" className="hover:text-emerald-800 transition-colors">{t('common.home') || 'Home'}</a>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-slate-400">{t('common.certificates') || 'Certificates'}</span>
          </div>
        </div>
      </div>

      {/* 2. EMERALD UPPER HERO HERO BANNER WITH ORGANIC BOTTOM TRANSITION */}
      <div className="bg-gradient-to-br from-[#126b34] to-[#0a4820] text-white relative pt-12 pb-24 md:pb-32 overflow-hidden px-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full filter blur-3xl -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/40 rounded-full filter blur-3xl -ml-20 -mb-20" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h1 className="text-3.5xl sm:text-4.5xl lg:text-5xl font-black tracking-tight leading-none text-white">
              {ln.heroTitle}
            </h1>
            
            {/* Visual Dot separator */}
            <div className="flex items-center gap-1.5 py-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-100" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-100" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-100" />
            </div>

            <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed max-w-3xl font-normal text-justify">
              {ln.heroDesc}
            </p>
          </div>

          {/* Isometric Smart Warehouse Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full rounded-2xl overflow-hidden bg-emerald-950/40 p-2.5 border border-emerald-500/20 shadow-2xl">
              <img 
                src="/src/assets/images/gilafruit_packing_vector_illustration_1781014820562.png" 
                alt="Smart Fruit Sorting and Packing Conveyors Illustration" 
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Curved paper-like separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg className="relative block w-full h-[32px] sm:h-[48px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#fcfdfb"></path>
          </svg>
        </div>
      </div>

      {/* 3. A COMPREHENSIVE SET OF WEB STANDARDS HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-emerald-950 tracking-tight leading-tight">
            {ln.bodyTitle}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            {ln.bodyDesc}
          </p>
        </div>
      </div>

      {/* 4. THE 12 PHOTO-REALISTIC CSS DYNAMIC CERTIFICATES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificatesData.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
              id={`cert-item-card-${cert.id}`}
            >
              
              {/* UPPER PORTRAIT CERTIFICATE INTERACTIVE CANVAS */}
              <div className="p-5 bg-slate-100 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                
                {/* Visual shadow block representing real frame */}
                <div className={`w-full aspect-[1/1.30] max-w-[280px] bg-white border-8 ${cert.frameColor} shadow-md hover:shadow-2xl transition-all duration-500 relative p-3 flex flex-col justify-between select-none`}>
                  
                  {/* Outer ornamental thin line inside the frame */}
                  <div className="absolute inset-1 border border-amber-500/25 pointer-events-none" />
                  
                  {/* Cert watermark background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <img 
                      src="/src/assets/images/gilafruit_kiwi_basket_banner_1781014515822.png" 
                      alt="Watermark" 
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>

                  {/* CUSTOM SPECIFIC RENDER BY ID */}
                  {cert.id === 11 ? (
                    /* eNAMAD CUSTOM GRAPHIC PREVIEW */
                    <div className="z-10 flex-1 flex flex-col justify-between items-center text-center text-slate-800 pt-1">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black tracking-widest text-[#1a5fb4] block uppercase">eNAMAD PORTAL</span>
                        <h4 className="text-[11px] font-serif font-black text-slate-800 leading-none">Electronic Trust Symbol</h4>
                        <p className="text-[7px] text-slate-400 font-mono">ID: {cert.certNo}</p>
                      </div>

                      {/* Giant eNAMAD Blue Symbol */}
                      <div className="relative my-2 w-16 h-16 rounded-full bg-gradient-to-tr from-sky-50 to-blue-100 flex items-center justify-center border border-blue-200 shadow-inner group-hover:scale-105 transition-transform duration-200">
                        <span className="text-3xl font-black text-blue-600 select-none font-serif">e</span>
                        <div className="absolute top-1.5 right-1.5 text-amber-400 text-xs animate-pulse">★</div>
                        {/* Smaller Stars */}
                        <div className="absolute bottom-1.5 left-2 flex gap-0.5 text-[6px] text-amber-400">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                      </div>

                      <div className="space-y-1 w-full">
                        <div className="bg-blue-50 py-1 px-2 rounded border border-blue-100/60 text-[8px] text-blue-700 font-semibold leading-tight">
                          Verified Online Enterprise
                        </div>
                        <p className="text-[7px] text-slate-400 leading-tight">Ministry of Industry, Mine and Trade</p>
                      </div>
                    </div>
                  ) : cert.id === 12 ? (
                    /* SAMANDEHI CUSTOM GRAPHIC PREVIEW */
                    <div className="z-10 flex-1 flex flex-col justify-between items-center text-center text-slate-800 pt-1">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black tracking-widest text-[#d97706] block uppercase animate-pulse">SAMANDEHI REGISTRY</span>
                        <h4 className="text-[11px] font-serif font-black text-slate-800 leading-none">Digital Media Compliance</h4>
                        <p className="text-[7px] text-slate-400 font-mono">RegNo: {cert.certNo}</p>
                      </div>

                      {/* Circular Target-like Samandehi logo mockup */}
                      <div className="relative my-2 w-16 h-16 rounded-full bg-orange-50 border-4 border-orange-500/30 flex items-center justify-center shadow-inner">
                        <div className="w-10 h-10 rounded-full border-4 border-orange-600/60 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-orange-600" />
                        </div>
                        {/* Abstract technical axes */}
                        <div className="absolute w-full h-0.5 bg-orange-600/20 top-1/2 left-0" />
                        <div className="absolute h-full w-0.5 bg-orange-600/20 left-1/2 top-0" />
                      </div>

                      <div className="space-y-1 w-full">
                        <div className="bg-orange-50 py-1 px-2 rounded border border-orange-100/60 text-[8px] text-orange-700 font-semibold leading-tight">
                          National Digital Standard Mark
                        </div>
                        <p className="text-[7px] text-slate-400 leading-tight">Islamic Republic of Iran National Audited</p>
                      </div>
                    </div>
                  ) : (
                    /* STANDARDS ISO CUSTOM DOCUMENT PREVIEW */
                    <div className="z-10 flex-1 flex flex-col justify-between text-slate-800 pt-0.5">
                      
                      {/* Document Header Logo */}
                      <div className="flex items-center justify-between border-b pb-1 border-slate-200/50">
                        <div className="text-left">
                          <span className="text-[8px] font-semibold text-emerald-900 block leading-none">GilaFruit Ltd.</span>
                          <span className="text-[5px] text-slate-400 block tracking-tight leading-none">QA Division</span>
                        </div>
                        <span className="text-[10px] select-none">🏆</span>
                        <div className="text-right">
                          <span className="text-[6px] font-bold text-slate-600 block leading-none">{cert.issuer.split(' ')[0]}</span>
                          <span className="text-[5px] text-emerald-700 block font-mono leading-none">SGS-ISO Gp</span>
                        </div>
                      </div>

                      {/* CERTIFICATE TEXT SECTION */}
                      <div className="text-center py-2 space-y-1 flex-1 flex flex-col justify-center">
                        <span className="text-[8px] tracking-widest text-slate-400 font-semibold block uppercase">CERTIFICATE</span>
                        <h4 className="text-[12px] font-serif font-black text-slate-900 leading-none py-0.5 tracking-tight">
                          {cert.code}
                        </h4>
                        <p className="text-[6px] text-slate-500 italic max-w-[150px] mx-auto leading-none">
                          This is to certify that GilaFruit agricultural packing operates complete workflow of:
                        </p>
                        <p className="text-[7px] text-[#0d4622] font-black uppercase tracking-tight leading-tight pt-1">
                          {cert.type}
                        </p>
                      </div>

                      {/* Bottom stamp and signing blocks */}
                      <div className="border-t pt-1 border-slate-200/50 flex items-center justify-between text-[5px] text-slate-500">
                        <div className="text-left">
                          <p className="font-mono">No: {cert.certNo.slice(0, 15)}</p>
                          <p>Issued: {cert.issueDate}</p>
                        </div>

                        {/* Beautiful Gold/Red Seal & Ribbon */}
                        <div className="relative flex items-center justify-center w-8 h-8">
                          {/* Ribbon tails */}
                          <div className={`absolute bottom-[-4px] left-[1px] w-1.5 h-3 ${cert.ribbonColor} rotate-12 origin-top rounded-b`} />
                          <div className={`absolute bottom-[-4px] right-[1px] w-1.5 h-3 ${cert.ribbonColor} -rotate-12 origin-top rounded-b`} />
                          {/* Circle seal */}
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center shadow-sm relative z-10 border border-amber-300">
                            <span className="text-[7px] text-emerald-950 font-bold select-none">★</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-serif italic text-emerald-950 leading-none">G. Astara QA</p>
                          <span className="w-8 h-[1px] bg-slate-300 block my-0.5 ml-auto" />
                          <p className="leading-none">Authorized Sign</p>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Zoom Action Hover Indicator */}
                  <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-30">
                    <span className="bg-emerald-900 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-lg shadow-lg flex items-center gap-1">
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                      {t('common.viewMore') || 'Details'}
                    </span>
                  </div>

                </div>
              </div>

              {/* CARD EXPLANATORY INFORMATION COLUMN */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-[#1a8a42] uppercase tracking-wider">
                      {cert.badge}
                    </span>
                    <span className="font-mono text-[9px] text-slate-400">
                      {cert.id.toString().padStart(2, '0')}/12
                    </span>
                  </div>
                  
                  <h3 className="font-display font-black text-emerald-950 text-sm sm:text-base leading-tight">
                    {cert.code} : {cert.type}
                  </h3>
                  
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">
                    Reg: <strong className="font-mono text-slate-600">{cert.certNo}</strong>
                  </span>
                  <button 
                    onClick={() => setSelectedCert(cert.id)}
                    className="text-[#1a8a42] font-extrabold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {t('common.viewMore') || 'Details'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE CERTIFICATION FULLSCREEN LIGHTBOX DETAILS */}
      {selectedCert !== null && (
        <div 
          className="fixed inset-0 bg-emerald-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          {/* Lightbox dialog modal */}
          <div 
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden border border-slate-100 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Splash border coloring */}
            <div className={`h-2.5 bg-gradient-to-r from-emerald-600 to-amber-500`} />
            
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-900 rounded font-black text-[9px] uppercase tracking-wider">
                    {certificatesData[selectedCert - 1].issuer}
                  </span>
                  <h3 className="font-display font-black text-emerald-950 text-xl tracking-tight leading-none pt-1">
                    {certificatesData[selectedCert - 1].code}
                  </h3>
                  <p className="text-[#1a8a42] text-xs font-bold">
                    {certificatesData[selectedCert - 1].type}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Informative Table Lists */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400 font-semibold">{ln.certNumber}</span>
                  <span className="font-mono text-slate-800 font-bold">{certificatesData[selectedCert - 1].certNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400 font-semibold">{ln.phytosanitaryScope}</span>
                  <span className="text-slate-800 font-bold text-right">{certificatesData[selectedCert - 1].scope}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-400 font-semibold">Initial Issue Date</span>
                  <span className="text-slate-800 font-bold">{certificatesData[selectedCert - 1].issueDate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-semibold">Expiry Date</span>
                  <span className="text-slate-800 font-bold">{certificatesData[selectedCert - 1].expiryDate}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p className="font-semibold text-emerald-950">Verification Summary:</p>
                <p>
                  This official document registers that <strong>Sabz Gostaran Gilan Fruit Co.</strong> fulfills all phytosanitary, temperature guidelines, and sorting accuracy laws as set by international border regulations. Audit audits occur annually and copying is permitted for verified wholesale cargo buyers.
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-3 text-xs">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl font-bold transition-all"
                >
                  Close Window
                </button>
                <a 
                  href={`mailto:support@gilafruit.com?subject=Inquiry about Certificate ${certificatesData[selectedCert - 1].code}`}
                  className="px-4 py-2 bg-[#1a8a42] hover:bg-emerald-800 text-white font-black rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Request Sealed Copier
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 6. QA BOTTOM PLEDGE OF DILIGENT COMPLIANCE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#00261d] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/30 rounded-full filter blur-3xl -mr-16 -mt-16" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-800 text-emerald-250 rounded-full text-[10px] font-black uppercase tracking-widest text-[#a8f2bd]">
                🌱 Phytosanitary Standard Guarantee
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Our Guarantee of Rigorous Phytosanitary Screening
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-4xl">
                Every carton loaded into GilaFruit's temperature-controlled reefer trucks undergoes a pre-departure quarantine inspection under the supervisory guidelines of the Ministry of Agriculture of Iran. This double safeguarding stage checks for scale insects, brix level, and core temperature limits, producing healthy, impeccable, compliant shipments guaranteed to glide across Samur and other Caucasus customs terminals without delay.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3 font-mono text-xs text-emerald-200">
              <div className="flex items-center gap-1.5 bg-emerald-950/60 px-4 py-2.5 rounded-2xl border border-emerald-800/40">
                <Globe className="w-5 h-5 text-amber-500" />
                <span>Global Compliance</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-950/60 px-4 py-2.5 rounded-2xl border border-emerald-800/40">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>SGS Verified Loading</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
