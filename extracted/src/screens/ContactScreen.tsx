import React, { useState } from 'react';
import { 
  Mail, Phone, MessageSquare, MapPin, Send, 
  CheckCircle2, Building, User 
} from 'lucide-react';
import { ContactMessage } from '../types';
import { getLocalStorageData, saveLocalStorageData, STORAGE_KEYS } from '../utils/storage';
import { useLanguage } from '../context/LanguageContext';

interface ContactScreenProps {
  onAddMessage: (msg: ContactMessage) => void;
}

const EN_CONTACT = {
  badge: "Get In Touch",
  header: "Contact GilaFruit Sales Team",
  intro: "Submit wholesale distribution inquiries, pallet quantity quotations or grading requests. Our EAEU logistics desk handles contracts in English and Russian.",
  subHotlines: "Direct Contact Hotlines",
  whatsappTitle: "WhatsApp Secure Chat:",
  subWhatsapp: "If you require instant freight rates or harvesting status for fresh kiwifruit, contact our coordinators directly on WhatsApp:",
  phoneLabel: "Central Hotlines",
  emailLabel: "Official Email Box",
  plantTitle: "Our Central Plant Address",
  plantLabel: "GILAFRUIT GRADING HUB",
  plantDesc: "Astara Customs Terminal & Border Zone Container Yard, Gilan, Iran",
  formTitle: "Submit Order Inquiry",
  labelName: "Contact Name",
  placeholderName: "Your Full Name",
  labelEmail: "Corporate Email",
  placeholderEmail: "e.g. buyer@wholesale.com",
  labelCompany: "Wholesale Company Name",
  placeholderCompany: "e.g. EvroTorg CIS Distributor LLC",
  labelMessage: "Specifications Message",
  placeholderMsg: "Outline types, grades (e.g. 70-80g Hayward Kiwi), packaging requirements, container sizes...",
  submitBtn: "Transmit wholesale inquiry",
  successHeader: "Inquiry Recorded Successfully!",
  successDesc: "Thank you, we secured your sales request. One of our bilingual coordinators (conversant in Russian / English) will formulate a proposal matching your specifications and return within 12 working hours.",
  successBtn: "Submit another inquiry"
};

const FA_CONTACT = {
  badge: "ارتباط با ما",
  header: "تماس با تیم فروش گیلافروت",
  intro: "شما می‌توانید درخواست‌های خرید مستقیم، فاکتورهای عمده پالتی و نیازهای سورت خود را ارسال کنید. کارشناسان ما به سه زبان فارسی، انگلیسی و روسی پاسخگو خواهند بود.",
  subHotlines: "خطوط ارتباطی مستقیم",
  whatsappTitle: "پیام اضطراری در واتس‌اپ:",
  subWhatsapp: "اگر نیاز به استعلام فوری قیمت بار کانتینر یا بررسی آخرین وضعیت سورتینگ کیوی گمرک آستارا دارید، از خطوط مستقیم زیر اقدام کنید:",
  phoneLabel: "شماره تماس دفتر مرکزی",
  emailLabel: "آدرس ایمیل اداری",
  plantTitle: "نشانی مرکز سورتینگ و بسته‌بندی",
  plantLabel: "امتداد مرزی گیلافروت",
  plantDesc: "ایران، گیلان، بندر آستارا، مجاورت پایانه گمرکی ترانزیت، مجتمع انبارهای گیلافروت",
  formTitle: "ثبت تقاضای خرید عمده",
  labelName: "نام متقاضی (رابط تجاری)",
  placeholderName: "نام و نام خانوادگی شما",
  labelEmail: "پست الکترونیکی شرکت",
  placeholderEmail: "buyer@wholesale.com برای مثال",
  labelCompany: "نام شرکت بازرگانی / فروشگاه",
  placeholderCompany: "مانند: هلدینگ وارداتی یورو تبرگ روسیه",
  labelMessage: "شرح مشخصات فنی و کالیبر سفارش",
  placeholderMsg: "مثال: کیوی ممتاز صادراتی هایوارد گیلان کالیبر ۷۰ تا ۹۰ گرم در کارتن‌های ۴ کیلوگرمی به تعداد ۴ کانتینر یخچال‌دار...",
  submitBtn: "ارسال درخواست تجاری ما",
  successHeader: "درخواست شما با موفقیت ثبت شد!",
  successDesc: "با تشکر از اعتماد شما به برند گیلافروت. همکاران فروش دپارتمان بازرگانی ظرف مدت حداکثر ۱۲ ساعت کاری پروپوزال متناسب با کالیبر درخواست سفارش شما را تدوین نموده و با شما در تماس خواهند بود.",
  successBtn: "ثبت فرم جدید"
};

const RU_CONTACT = {
  badge: "Связаться с нами",
  header: "Отдел продаж GilaFruit",
  intro: "Отправляйте запросы на оптовые закупки, расчет стоимости паллетных партий или калибровку. Наша служба поддержки говорит на русском и английском языках.",
  subHotlines: "Прямые горячие линии",
  whatsappTitle: "Безопасный чат WhatsApp:",
  subWhatsapp: "Если вам требуются мгновенные ставки фрахта или статус сортировки свежих фруктов, пишите прямо нашим координаторам в WhatsApp:",
  phoneLabel: "Центральный телефон",
  emailLabel: "Официальный Email",
  plantTitle: "Адрес центрального хаба",
  plantLabel: "СОРТИРОВОЧНЫЙ ХАБ GILAFRUIT",
  plantDesc: "Таможенный терминал Астара и контейнерный двор пограничной зоны, провинция Гилян, Иран",
  formTitle: "Отправить запрос стоимости",
  labelName: "Контактное лицо",
  placeholderName: "Ваше полное имя",
  labelEmail: "Корпоративный Email",
  placeholderEmail: "например, buyer@wholesale.com",
  labelCompany: "Название оптовой компании",
  placeholderCompany: "например, ООО ЕвроТорг Дистрибьютор",
  labelMessage: "Характеристики заказа",
  placeholderMsg: "Укажите сорт, вес (например, киви Хейворд 70-80 г), тип упаковки, объем партии...",
  submitBtn: "Отправить коммерческий запрос",
  successHeader: "Запрос успешно зарегистрирован!",
  successDesc: "Спасибо, мы зафиксировали вашу заявку. Один из наших русскоговорящих менеджеров подготовит лучшее ценовое предложение и вернется к вам в течение 12 рабочих часов.",
  successBtn: "Отправить еще один запрос"
};

const TRANSLATIONS: Record<string, any> = {
  en: EN_CONTACT,
  fa: FA_CONTACT,
  ru: RU_CONTACT,
  tr: {
    ...EN_CONTACT,
    badge: "İletişime Geçin",
    header: "GilaFruit Satış Ekibiyle İletişim",
    intro: "Toptan ihracat taleplerinizi gönderin. EAEU lojistik ofisimiz İngilizce ve Rusça dillerinde sözleşmeler düzenlemektedir.",
    subHotlines: "Doğrudan İletişim Hatları",
    whatsappTitle: "WhatsApp Güvenli Sohbet:",
    subWhatsapp: "Kivi fiyatları veya hasat durumu için koordinatörlerimizle doğrudan WhatsApp üzerinden iletişime geçebilirsiniz.",
    formTitle: "Talep Formu Gönderin",
    labelName: "Adınız Soyadınız",
    placeholderName: "Tam adınızı yazın",
    labelEmail: "Kurumsal E-posta",
    labelCompany: "Toptan Alıcı Firma Adı",
    labelMessage: "Sipariş Detayları",
    submitBtn: "Talebi Gönder"
  },
  ar: {
    ...FA_CONTACT,
    badge: "اتصل بنا",
    header: "الاتصال بفريق مبيعات كيلا فروت",
    intro: "أرسل استفساراتك التجارية بطلب كميات لتصدير فاكهة الكيوي الإيراني الممتاز إلى موانئ ومرابض المعمورة. طاقمنا يتواصل بالعربية والإنجليزية والروسية.",
    subHotlines: "خطوط الاتصال المباشرة",
    whatsappTitle: "محادثة واتس‌اف سريعة وآمنة:",
    subWhatsapp: "إذا كنت تريد أسعار شحن وتبريد عاجلة، تواصل مع منسقي الخدمات على الخط العابر الفوري:",
    formTitle: "تقديم طلب تصدير عميد",
    labelName: "اسم مسؤول المشتريات",
    placeholderName: "اسمك الكريم الكامل",
    labelEmail: "البريد الإلكتروني للشركة",
    labelCompany: "اسم الشركة التجارية المستوردة",
    labelMessage: "تفاصيل كاليبر ووزن الشحنة",
    submitBtn: "إرسال طلب الاستيراد",
    successHeader: "تم استلام الطلب بنجاح!",
    successDesc: "شكراً لثقتكم بمجموعة كيلا فروت. سيقوم مندوبنا بالتواصل معكم وإعداد الفواتير المطلوبة خلال ١۲ ساعة عمل."
  }
};

export default function ContactScreen({ onAddMessage }: ContactScreenProps) {
  const { language, direction } = useLanguage();
  const isRtl = direction === 'rtl';
  const t_contact = TRANSLATIONS[language] || TRANSLATIONS['en'];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert(language === 'fa' ? 'لطفاً تمامی موارد ستاره‌دار را تکمیل کنید.' : 'Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: 'msg_' + Math.random().toString(36).substring(2, 9),
        name,
        email,
        company: company || 'Not specified',
        message,
        date: new Date().toISOString()
      };

      const currentMessages = getLocalStorageData<ContactMessage[]>(STORAGE_KEYS.MESSAGES, []);
      const updatedMessages = [newMessage, ...currentMessages];
      saveLocalStorageData(STORAGE_KEYS.MESSAGES, updatedMessages);
      
      onAddMessage(newMessage);

      setIsSubmitting(false);
      setIsSuccess(true);
      
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-[148px] pb-20 animate-fade-in text-start font-sans" id="contact-view">
      
      {/* Intro section */}
      <div className={`max-w-3xl space-y-4 mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          {t_contact.badge}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight leading-none animate-fade-in">
          {t_contact.header}
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          {t_contact.intro}
        </p>
      </div>

      {/* Grid of details + interactive form */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Left column: Contact Info Details */}
        <div className={`lg:col-span-5 space-y-8 text-start ${isRtl ? 'order-2 lg:order-1' : ''}`}>
          
          <div className="space-y-4">
            <h3 className="font-display text-xl font-extrabold text-slate-950">
              {t_contact.subHotlines}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t_contact.subWhatsapp}
            </p>
          </div>

          <div className="space-y-4">
            
            {/* WhatsApp direct links */}
            <div className="p-5 bg-[#f5fbf6] rounded-2xl border border-emerald-150 space-y-3.5">
              <span className={`text-xs font-bold text-emerald-800 tracking-wider uppercase flex items-center gap-1.5 leading-none ${isRtl ? 'flex-row-reverse' : ''}`}>
                <MessageSquare className="w-4 h-4" />
                {t_contact.whatsappTitle}
              </span>
              <div className="space-y-2">
                <a
                  href="https://wa.me/989900978002"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-800 hover:text-emerald-900 font-bold text-xs"
                >
                  🟢 +98 990 097 8002 — Russia, Belarus & CIS Logistics
                </a>
                <a
                  href="https://wa.me/989900978005"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-800 hover:text-emerald-900 font-bold text-xs"
                >
                  🟢 +98 990 097 8005 — Global, India & MENA Sales
                </a>
              </div>
            </div>

            {/* Calling and Email detail boxes */}
            <div className="space-y-3 pl-1">
              
              <div className={`flex gap-3 text-slate-600 text-sm ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-850 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">{t_contact.phoneLabel}</span>
                  <a href="tel:+982191099091" className="font-bold text-slate-800 text-sm hover:underline">
                    +98 21 9109 9091
                  </a>
                </div>
              </div>

              <div className={`flex gap-3 text-slate-600 text-sm ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-850 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">{t_contact.emailLabel}</span>
                  <a href="mailto:info@gilafruit.com" className="font-bold text-slate-800 text-sm hover:underline">
                    info@gilafruit.com
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Plant Maps locations */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/50 space-y-4">
            <h4 className="font-display font-bold text-slate-900 text-sm">
              {t_contact.plantTitle}
            </h4>
            
            {/* Astrara Map Area representation */}
            <div className="h-44 bg-slate-200 rounded-xl overflow-hidden relative border border-slate-300/40 flex items-center justify-center text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              
              <div className="relative z-10 space-y-1.5 p-4">
                <MapPin className="w-8 h-8 text-emerald-800 mx-auto animate-bounce" />
                <p className="text-xs font-bold text-slate-800">{t_contact.plantLabel}</p>
                <p className="text-[10px] text-slate-500 max-w-sm font-semibold">{t_contact.plantDesc}</p>
                <span className="inline-block px-2.5 py-0.5 bg-emerald-800 text-white rounded text-[9px] font-mono font-bold tracking-tight">
                  GPS: 38.4239° N, 48.8681° E
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right column: Interactive Form */}
        <div className={`lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs text-start ${isRtl ? 'order-1 lg:order-2' : ''}`}>
          
          <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mb-6">
            {t_contact.formTitle}
          </h3>

          {isSuccess ? (
            <div className="py-8 text-center space-y-4 animate-scale-up" id="contact-success-card">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 text-lg">{t_contact.successHeader}</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                {t_contact.successDesc}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2 bg-emerald-800 hover:bg-emerald-700 font-bold text-xs text-white rounded-full cursor-pointer"
              >
                {t_contact.successBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-sales-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5 text-start">
                  <label className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">
                    {t_contact.labelName} <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <User className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5`} />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t_contact.placeholderName}
                      className={`w-full py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'}`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-start">
                  <label className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">
                    {t_contact.labelEmail} <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5`} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t_contact.placeholderEmail}
                      className={`w-full py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'}`}
                    />
                  </div>
                </div>

              </div>

              <div className="space-y-1.5 text-start">
                <label className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">
                  {t_contact.labelCompany}
                </label>
                <div className="relative">
                  <Building className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5`} />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t_contact.placeholderCompany}
                    className={`w-full py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'}`}
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-start">
                <label className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">
                  {t_contact.labelMessage} <span className="text-amber-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t_contact.placeholderMsg}
                  className="w-full p-4 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-800"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin">⏳</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                    <span>{t_contact.submitBtn}</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
