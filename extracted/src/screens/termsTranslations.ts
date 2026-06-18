export interface TermItem {
  title?: string;
  text: string;
  bullets?: string[];
}

export interface Section {
  id: string;
  title: string;
  persianTitle?: string;
  icon?: any; // Configured dynamically
  tldr: string;
  paragraphs: TermItem[];
}

export interface TermsTexts {
  heroTag: string;
  heroTitle: string;
  heroTitleRegular: string;
  heroTitleHighlight: string;
  heroDesc: string;
  btnPrintCode: string;
  btnDownloadVerified: string;
  generatingPdf: string;
  searchPlaceholder: string;
  clearSearch: string;
  readingModeLabel: string;
  readingModeSub: string;
  tableOfContents: string;
  articlesCount: string;
  noMatchingArticles: string;
  wholesaleAdvisoryTitle: string;
  wholesaleAdvisoryDesc: string;
  noClausesFoundTitle: string;
  noClausesFoundDesc: string;
  clearFiltersBtn: string;
  signatoryTitle: string;
  signatorySub: string;
  signatoryDesc: string;
  complianceLabel: string;
  complianceValue: string;
  arbitrationLabel: string;
  arbitrationValue: string;
  sections: Omit<Section, "icon">[];
}

export const TERMS_TEXTS: Record<string, TermsTexts> = {
  en: {
    heroTag: "GilaFruit Legal & Quality Compliance",
    heroTitle: "Terms & Conditions",
    heroTitleRegular: "Terms & ",
    heroTitleHighlight: "Conditions",
    heroDesc: "Establishing international compliance frameworks, cold logistics standards, digital copyright, and trade dispute resolution templates for Sabz Gostaran Gilan Fruit Co.",
    btnPrintCode: "Print Code",
    btnDownloadVerified: "Download Verified copy",
    generatingPdf: "Generating",
    searchPlaceholder: "Search legal clauses (e.g. hacking, brix, liability)...",
    clearSearch: "Clear",
    readingModeLabel: "Reading mode",
    readingModeSub: "Executive TL;DR Switcher",
    tableOfContents: "Table of Contents",
    articlesCount: "{count} Articles",
    noMatchingArticles: "No matching articles found.",
    wholesaleAdvisoryTitle: "Wholesale Advisory",
    wholesaleAdvisoryDesc: "The documentation published here serves commercial compliance standards for the import-export community. All transactions require structured contract validation.",
    noClausesFoundTitle: "No clauses found",
    noClausesFoundDesc: 'We couldn\'t find any compliance paragraphs matching your terms. Try using other industrial keywords like "brix", "copyright", "logistics" or "contract".',
    clearFiltersBtn: "Clear search filters",
    signatoryTitle: "Sabz Gostaran Gilan Fruit Co.",
    signatorySub: "Executive Trade Compliance & Regulatory Protocol",
    signatoryDesc: "The terms and guidelines documented above establish safe, regulatory, and legally protected frameworks for physical crop exports, cold chain procedures, logistics packaging, and our global trading stakeholders.",
    complianceLabel: "Compliance",
    complianceValue: "FOB Certified ISO",
    arbitrationLabel: "Arbitration",
    arbitrationValue: "SGS Audit Approved",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        persianTitle: "مقدمه",
        tldr: "By exploring and interacting with our portal, you agree to both these terms and our Privacy Policy guidelines.",
        paragraphs: [
          {
            text: "Thank you for choosing GilaFruit (Sabz Gostaran Gilan Fruit Company). This page outlines the terms and conditions governing your use of our website. Please also review our Privacy Policy, which details how we collect, use, and protect your personal information."
          },
          {
            text: "By using this website, you agree to both these terms and our Privacy Policy. If you do not accept these parameters, you should cease utilizing our digital portals."
          }
        ]
      },
      {
        id: "user-definitions",
        title: "User Definitions",
        persianTitle: "تعاریف کاربر",
        tldr: "Defining casual visitors (\"User\") versus registered bulk trade buyers (\"Customer\").",
        paragraphs: [
          {
            title: "Classification Matrix",
            text: "To ensure legal precision and agreement clarity across the Sabz Gostaran Gilan cooperative systems, the following stakeholder terms hold direct meaning:",
            bullets: [
              "User: Any person who visits, uses, browses, or interacts with this website in any physical or digital way.",
              "Customer: A user or official corporate entity representative who purchases and uses our agricultural products, logistics packaging, and export contract services."
            ]
          }
        ]
      },
      {
        id: "terms-and-conditions",
        title: "Terms & Conditions",
        persianTitle: "شرایط و ضوابط",
        tldr: "Strict regulations regarding website utilization, copyright protection, hacking, and spam suppression.",
        paragraphs: [
          {
            title: "Website Use",
            text: "Use of this website is strictly for personal and non-commercial purposes. You may review current catalogs, monitoring active transport systems, and packaging lines."
          },
          {
            title: "Commercial Use",
            text: "You cannot use the information, digital media assets, specifications, or services on this website for commercial gain, unauthorized database scraping, or syndication."
          },
          {
            title: "Product Information",
            text: "You cannot copy technical product information, caliber sizes, crop datasheets, or packing specifications to post them on your own website or sell them."
          },
          {
            title: "Copyright",
            text: "Copying all or part of the content, media photography, vector assets, interface imagery, or proprietary website layout design without the website owner's written permission is strictly prohibited and subject to legal action."
          },
          {
            title: "Hacking & Penetration",
            text: "Any attempt to hack into the website's systems, exploit API access points, alter back-office database schemas, or degrade server response speeds is strictly prohibited and subject to severe prosecution."
          },
          {
            title: "Spamming",
            text: "Sending unsolicited advertising, promotional materials, automated scripts, or spam messages on the website or through our WhatsApp corporate portals is prohibited."
          },
          {
            title: "Website Destruction",
            text: "Any hostile action that disrupts wait-times, disables content delivery, orchestrates Denial of Service (DoS) runs, or damages the website's functioning is strictly prohibited."
          }
        ]
      },
      {
        id: "legal-consequences",
        title: "Legal Consequences",
        persianTitle: "عواقب قانونی",
        tldr: "Unlawful misuse of our intellectual assets or brand trademark triggers civil liability and direct damage claims.",
        paragraphs: [
          {
            title: "Intellectual Property Rights",
            text: "All intellectual property rights, including registered trademarks, logos, system patents, descriptions, design graphics, and interactive layouts on this website, are owned exclusively by GilaFruit (Sabz Gostaran Gilan Fruit Company) and are protected by the laws of the Islamic Republic of Iran and other relevant international laws. Any copying, commercial use, or modification of this content without the written permission of GilaFruit is considered a violation and is subject to legal action."
          },
          {
            title: "Prohibition of Misuse",
            text: "Users are obligated to refrain from any misuse of the name, brand, images, and other intellectual property of GilaFruit. This includes, but is not limited to: Unauthorized copying and distribution, Unauthorized use in advertising or marketing, Making any changes to published layout content, and Registering a similar domain name or using the trademark in a similar marketing manner. Any violation in this regard, in addition to swift legal prosecution, can result in the user's access to the website and other company services being instantly blocked."
          },
          {
            title: "Consequences of Misuse",
            text: "Any misuse of GilaFruit's name, brand, images, and other intellectual property can result in legal action and a claim for damages by the company. These damages include, but are not limited to, direct recovery, indirect brand dilution, and lost business opportunities."
          },
          {
            title: "User Responsibility",
            text: "The user is responsible for all of their actions in connection with using this website. If the user in any way violates GilaFruit's intellectual property rights or compromises network systems, full responsibility for the consequences will lie exclusively with the user."
          }
        ]
      },
      {
        id: "services",
        title: "Services & Contracts",
        persianTitle: "خدمات و قراردادها",
        tldr: "All wholesale supply terms, custom packaging parameters, and costs are formalized via custom written contracts.",
        paragraphs: [
          {
            text: "Complete details regarding order placement methods, product classes, payment metrics, cold chain costs and shipping conditions, the parties' mutual obligations regarding product quality, handling defects, banking details, and other conditions related to the purchase and sale of products are fully explained in the official written contract signed between the seller and the buyer."
          },
          {
            text: "This signed written contract acts as the primary legal basis of all physical interactions and trades between the parties. Values, maps, or specifications on this website serve strictly as helpful references."
          }
        ]
      },
      {
        id: "privacy",
        title: "Privacy Protection",
        persianTitle: "حریم خصوصی",
        tldr: "All client information, logistics coordinates, and communication channels are fully protected.",
        paragraphs: [
          {
            text: "Your personal registration information, commercial addresses, and WhatsApp contact data are fully protected in accordance with our corporate privacy policy. Please read our primary privacy policy documentation to review your information access rights."
          }
        ]
      },
      {
        id: "liability",
        title: "Liability Disclaimer",
        persianTitle: "سلب مسئولیت",
        tldr: "We hold no liability for improper post-clearance cargo handling, natural decay, or terminal transport delays.",
        paragraphs: [
          {
            text: "GilaFruit is not responsible for any damages resulting from the improper use or thermic neglect of physical products after transport handover, customs clearance bottlenecks, or delayed cargo arrival on international shipping routes."
          }
        ]
      },
      {
        id: "governing-laws",
        title: "Governing Laws",
        persianTitle: "قوانین حاکم",
        tldr: "All digital agreements and transactions are governed under the judicial laws of Iran.",
        paragraphs: [
          {
            text: "These terms and conditions, alongside any transactional agreements or communication conducted on this portal, are governed by and construed under the legal frameworks of the Islamic Republic of Iran."
          },
          {
            text: "Any legal issues, arbitration processes, or disputes will be handled exclusively by the competent judicial courts of Iran."
          }
        ]
      },
      {
        id: "changes",
        title: "Changes to Terms",
        persianTitle: "تغییرات در شرایط",
        tldr: "We retain the right to modify these clauses. The latest version is always immediately verified here.",
        paragraphs: [
          {
            text: "We preserve the absolute right to change or update these terms and conditions at any time without prior written notice to clients."
          },
          {
            text: "The latest verified version of these terms and conditions is always made available on this digital page. We suggest regular reviews to stay current on compliance protocols."
          }
        ]
      },
      {
        id: "contact",
        title: "Contact & Compliance Desk",
        persianTitle: "دفتر ارتباطات و انطباق",
        tldr: "Reach out directly to our corporate legal affairs and export compliance team.",
        paragraphs: [
          {
            text: "For any legal compliance questions, trademark inquiries, or detailed contract negotiations, please connect with us directly:"
          },
          {
            text: "Sabz Gostaran Gilan Fruit Company Legal Desk Contact Matrix:",
            bullets: [
              "Official Corporate Name: Sabz Gostaran Gilan Fruit Co.",
              "General Support: support@gilafruit.com",
              "Business Phone Support: +98 21 9109 9091",
              "Corporate Headquarters Address: Iran, Gilan, Astara city"
            ]
          }
        ]
      }
    ]
  },
  fa: {
    heroTag: "امور انطباق و رعایت استانداردهای حقوقی و کیفی گیلافروت",
    heroTitle: "شرایط و ضوابط",
    heroTitleRegular: "شرایط و ",
    heroTitleHighlight: "ضوابط",
    heroDesc: "تدوین چارچوب‌های انطباق بین‌المللی، استانداردهای لجستیک سرد، قوانین حق تکثیر دیجیتال و روش‌های حل اختلاف تجاری برای شرکت سبز گستران گیلافروت.",
    btnPrintCode: "چاپ سند",
    btnDownloadVerified: "دانلود نسخه تایید شده",
    generatingPdf: "در حال ایجاد",
    searchPlaceholder: "جستجو در بندهای قانونی (مانند هک، بریکس، مسئولیت)...",
    clearSearch: "پاک کردن",
    readingModeLabel: "حالت مطالعه",
    readingModeSub: "نمایش خلاصه اجرایی (TL;DR)",
    tableOfContents: "فهرست مطالب",
    articlesCount: "{count} بند قانونی",
    noMatchingArticles: "هیچ بند قانونی مطابقت‌یافته‌ای پیدا نشد.",
    wholesaleAdvisoryTitle: "توصیه‌نامه عمده‌فروشی",
    wholesaleAdvisoryDesc: "اسناد منتشر شده در اینجا به منظور تایید استانداردهای انطباق تجاری برای جامعه صادرات و واردات است. تمامی مبادلات فیزیکی و تجاری نیازمند تنظیم قراردادهای رسمی است.",
    noClausesFoundTitle: "بندی پیدا نشد",
    noClausesFoundDesc: "ما نتوانستیم هیچ بند انطباقی منطبق با معیارهای شما پیدا کنیم. کلمات کلیدی صنعتی دیگری مانند «بریکس»، «حق تکثیر»، «لجستیک» یا «قرارداد» را امتحان کنید.",
    clearFiltersBtn: "پاک کردن فیلترهای جستجو",
    signatoryTitle: "شرکت سبز گستران گیلافروت",
    signatorySub: "امور انطباق تجاری و پروتکل‌های نظارتی اجرایی",
    signatoryDesc: "شرایط و دستورالعمل‌های مندرج در بالا، چارچوب‌های ایمن، قانونی و تحت حمایت حقوقی را برای صادرات فیزیکی محصولات، فرآیندهای زنجیره سرد، بسته‌بندی‌های لجستیکی و ذینفعان تجاری ما ایجاد می‌کند.",
    complianceLabel: "تأییدیه‌های نظارتی",
    complianceValue: "FOB با گواهینامه ISO",
    arbitrationLabel: "داوری رسمی",
    arbitrationValue: "مورد تایید بازرسی SGS",
    sections: [
      {
        id: "introduction",
        title: "مقدمه",
        persianTitle: "مقدمه",
        tldr: "با گشت و گذار و تعامل با پورتال ما، شما با هر دو این شرایط و دستورالعمل‌های سیاست حریم خصوصی ما موافقت می‌کنید.",
        paragraphs: [
          {
            text: "از اینکه گیلافروت (شرکت سبز گستران گیلان) را انتخاب کرده‌اید سپاسگزاریم. این صفحه شرایط و ضوابط حاکم بر استفاده شما از وب‌سایت ما را تشریح می‌کند. لطفاً سیاست حفظ حریم خصوصی ما را نیز مطالعه کنید که جزئیات مربوط به نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شخصی شما را شرح می‌دهد."
          },
          {
            text: "با استفاده از این وب‌سایت، شما با هر دو این شرایط و سیاست حفظ حریم خصوصی ما موافقت می‌کنید. اگر این پارامترها را نمی‌پذیرید، باید از استفاده از پورتال‌های دیجیتال ما خودداری کنید."
          }
        ]
      },
      {
        id: "user-definitions",
        title: "تعاریف کاربر",
        persianTitle: "تعاریف کاربر",
        tldr: "تعریف بازدیدکنندگان عادی («کاربر») در مقابل خریداران عمده و تجاری ثبت‌شده («مشتری»).",
        paragraphs: [
          {
            title: "ماتریس طبقه‌بندی",
            text: "جهت اطمینان از دقت حقوقی و شفافیت توافقات در سیستم‌های تعاونی سبز گستران گیلان، اصطلاحات ذینفعان زیر دارای معنای مستقیم می‌باشند:",
            bullets: [
              "کاربر: هر شخصی که از این وب‌سایت بازدید می‌کند، استفاده می‌کند، مرور می‌کند یا به هر روش فیزیکی یا دیجیتالی با آن تعامل دارد.",
              "مشتری: کاربر یا نماینده رسمی یک شخصیت حقوقی که محصولات کشاورزی، بسته‌بندی‌های لجستیکی و خدمات قرارداد صادرات ما را خریداری و استفاده می‌کند."
            ]
          }
        ]
      },
      {
        id: "terms-and-conditions",
        title: "شرایط و ضوابط استفاده",
        persianTitle: "شرایط و ضوابط",
        tldr: "مقررات سختگیرانه در خصوص نحوه استفاده از وب‌سایت، قوانین حق تکثیر و مالکیت بر محتوا، جلوگیری از هک و تلاش برای نفوذ و اسپم.",
        paragraphs: [
          {
            title: "نحوه استفاده از وب‌سایت",
            text: "استفاده از این وب‌سایت صرفاً برای مقاصد شخصی و غیرتجاری مجاز است. شما می‌توانید کاتالوگ‌های فعلی را بررسی، سیستم‌های حمل و نقل فعال و خطوط بسته‌بندی را رصد نمایید."
          },
          {
            title: "استفاده تجاری",
            text: "شما مجاز به استفاده از اطلاعات، دارایی‌های رسانه‌ای دیجیتال، مشخصات یا خدمات این وب‌سایت برای کسب منافع تجاری، استخراج غیرمجاز اطلاعات از پایگاه داده یا انتشار مجدد نیستید."
          },
          {
            title: "اطلاعات محصول",
            text: "شما مجاز به کپی کردن اطلاعات فنی محصول، اندازه‌های کالیبر، برگه اطلاعات محصولات یا مشخصات بسته‌بندی برای قرار دادن در وب‌سایت خود یا فروش آنها نیستید."
          },
          {
            title: "حق تکثیر (کپی‌رایت)",
            text: "کپی‌برداری از تمام یا بخشی از محتوا، عکس‌های رسانه‌ای، دارایی‌های برداری، تصاویر رابط کاربری یا طراحی قالب اختصاصی وب‌سایت بدون اجازه کتبی مالک وب‌سایت اکیداً ممنوع بوده و مشمول پیگرد قانونی می‌باشد."
          },
          {
            title: "هک و نفوذ مخرّب",
            text: "هرگونه تلاش برای هک سیستم‌های وب‌سایت، سوء استفاده از نقاط دسترسی API، تغییر ساختار پایگاه داده یا کاهش سرعت پاسخ‌دهی سرور اکیداً ممنوع بوده و مشمول پیگرد قضایی شدید خواهد بود."
          },
          {
            title: "ارسال هرزنامه",
            text: "ارسال تبلیغات ناخواسته، مواد ترویجی، اسکریپت‌های خودکار یا پیام‌های هرزنامه در وب‌سایت یا از طریق پورتال‌های واتس‌اپ شرکتی ما ممنوع است."
          },
          {
            title: "تخریب وب‌سایت",
            text: "هرگونه اقدام خصمانه که موجب اختلال در زمان پاسخ‌دهی، غیرفعال شدن تحویل محتوا، سازماندهی حملات محروم‌سازی از سرویس (DoS) یا آسیب به عملکرد وب‌سایت شود، اکیداً ممنوع است."
          }
        ]
      },
      {
        id: "legal-consequences",
        title: "حقوق مالکیت معنوی و عواقب قانونی",
        persianTitle: "عواقب قانونی",
        tldr: "استفاده غیرقانونی از دارایی‌های معنوی یا علائم تجاری برند ما موجب مسئولیت مدنی و ادعای مستقیم خسارت خواهد شد.",
        paragraphs: [
          {
            title: "حقوق مالکیت معنوی (مادی و معنوی)",
            text: "کلیه حقوق مالکیت معنوی از جمله علائم تجاری ثبت شده، لوگوها، ثبت اختراعات سیستم، توضیحات، گرافیک‌های طراحی و چیدمان‌های تعاملی در این وب‌سایت، منحصراً متعلق به شرکت گیلافروت (شرکت سبز گستران گیلان) بوده و تحت حمایت قوانین جمهوری اسلامی ایران و سایر قوانین بین‌المللی مرتبط می‌باشد. هرگونه کپی‌برداری، استفاده تجاری یا تغییر این محتوا بدون اجازه کتبی گیلافروت تخلف محسوب شده و مشمول پیگرد قانونی است."
          },
          {
            title: "ممنوعیت سوء استفاده از نام تجاری",
            text: "کاربران موظفند از هرگونه سوء استفاده از نام، برند، تصاویر و سایر مالکیت معنوی گیلافروت خودداری نمایند. این سوء استفاده شامل مواردی نظیر کپی و توزیع غیرمجاز، استفاده در تبلیغات یا بازاریابی بدون مجوز، اعمال تغییر در محتوای منتشر شده، و ثبت نام دامنه مشابه یا استفاده از علامت تجاری در بازاریابی مشابه می‌باشد. هرگونه تخلف در این زمینه علاوه بر پیگرد قانونی سریع، می‌تواند منجر به مسدود شدن فوری دسترسی کاربر به وب‌سایت و سایر خدمات شرکت شود."
          },
          {
            title: "پیامدهای سوء استفاده",
            text: "هرگونه سوء استفاده از نام، برند، تصاویر و سایر حقوق مالکیت معنوی گیلافروت می‌تواند منجر به اقدام قانونی و مطالبه خسارت توسط شرکت شود. این خسارات شامل بهبود مستقیم، تضعیف نام تجاری و فرصت‌های تجاری از دست رفته خواهد بود."
          },
          {
            title: "مسئولیت مطلق کاربر",
            text: "کاربر مسئول تمامی اقدامات خود در ارتباط با استفاده از این وب‌سایت می‌باشد. چنانچه کاربر به هر نحوی حقوق مالکیت معنوی گیلافروت را نقض کند یا امنیت سیستم‌های شبکه را مخدوش سازد، مسئولیت کامل عواقب آن منحصراً بر عهده کاربر خواهد بود."
          }
        ]
      },
      {
        id: "services",
        title: "خدمات و عقود تجاری",
        persianTitle: "خدمات و قراردادها",
        tldr: "حقوق و شرایط تامین عمده، پارامترهای بسته‌بندی سفارشی و فرآیندهای مالی با قراردادهای کتبی رسمی رسمیت می‌یابند.",
        paragraphs: [
          {
            text: "جزئیات کامل در خصوص روش ثبت سفارش، کلاس‌های محصول، شرایط پرداخت، هزینه‌های زنجیره سرد و حمل و نقل، تعهدات متقابل طرفین در خصوص کیفیت محصول، نحوه حل عیوب بار، مشخصات بانکی و سایر شروط مربوط به خرید و فروش محصولات به طور کامل در قرارداد کتبی رسمی منعقد شده بین خریدار و فروشنده تشریح می‌گردد."
          },
          {
            text: "این قرارداد امضا شده به عنوان مبنای اصلی حقوقی تمام تعاملات فیزیکی و تجاری بین طرفین عمل می‌کند. اطلاعات، نقشه‌ها یا مشخصات موجود در این وب‌سایت صرفاً به عنوان مرجع کمکی ارائه شده‌اند."
          }
        ]
      },
      {
        id: "privacy",
        title: "حفاظت از حریم خصوصی",
        persianTitle: "حریم خصوصی",
        tldr: "اطلاعات ثبت‌نامی مشتریان، آدرس‌ها و مکاتبات آنها تحت شدیدترین پروتکل‌های محرمانه شرکتی ما محافظت می‌گردد.",
        paragraphs: [
          {
            text: "اطلاعات ثبت نام شخصی، آدرس‌های تجاری و اطلاعات تماس واتس‌اپ شما کاملاً مطابق با سیاست حفظ حریم خصوصی سازمانی ما محافظت می‌شود. لطفاً برای بررسی حقوق دسترسی خود به اسناد اصلی سیاست حریم خصوصی مراجعه فرمایید."
          }
        ]
      },
      {
        id: "liability",
        title: "سلب مسئولیت و حد تعهدات",
        persianTitle: "سلب مسئولیت",
        tldr: "ما هیچ مسئولیتی در قبال عدم جابجایی مناسب بار پس از ترخیص گمرکی، فساد طبیعی و دیرکرد در حمل و نقل بین‌المللی نداریم.",
        paragraphs: [
          {
            text: "گیلافروت مسئولیتی در قبال خسارات ناشی از استفاده نادرست، عدم رعایت دما (زنجیره سرد) بار پس از تحویل به بخش حمل و نقل، یا گمرک و تاخیر در تحویل محموله‌ها در مسیرهای حمل و نقل بین‌المللی ندارد."
          }
        ]
      },
      {
        id: "governing-laws",
        title: "قوانین حاکم و مجمع قضایی",
        persianTitle: "قوانین حاکم",
        tldr: "تمامی موافقت‌نامه‌ها و تراکنش‌های الکترونیکی تحت نظارت قضایی دادگاه‌های ذی‌صلاح ایران اداره می‌شوند.",
        paragraphs: [
          {
            text: "این شرایط و ضوابط، در کنار هرگونه توافق تجاری یا ارتباط انجام شده در این پرتال، تحت چارچوب‌های قانونی جمهوری اسلامی ایران تفسیر و اجرا می‌گردند."
          },
          {
            text: "هرگونه موضوع حقوقی، فرآیندهای داوری یا اختلافات منحصراً توسط مراجع و دادگاه‌های قضایی ذیصلاح ایران رسیدگی خواهد شد."
          }
        ]
      },
      {
        id: "changes",
        title: "تغییر و بروزرسانی شرایط",
        persianTitle: "تغییرات در شرایط",
        tldr: "ما حق تغییر بندها را در هر زمان برای خود محفوظ می‌داریم. نسخه منتشرشده در اینجا همواره معتبر خواهد بود.",
        paragraphs: [
          {
            text: "ما حق مطلق برای تغییر یا به‌روزرسانی این شرایط و ضوابط را در هر زمان، بدون اطلاع کتبی قبلی به مشتریان، برای خود محفوظ می‌داریم."
          },
          {
            text: "آخرین نسخه تایید شده این شرایط و ضوابط همواره در این صفحه دیجیتال در دسترس خواهد بود. پیشنهاد می‌کنیم به طور منظم آن را مرور کنید تا از پروتکل‌های منطبق مطلع باشید."
          }
        ]
      },
      {
        id: "contact",
        title: "میز ارتباطات و انطباق حقوقی",
        persianTitle: "دفتر ارتباطات و انطباق",
        tldr: "برقراری ارتباط مستقیم با دپارتمان امور حقوقی شرکتی و بخش انطباق صادرات گیلافروت.",
        paragraphs: [
          {
            text: "برای هرگونه سؤال در خصوص انطباق حقوقی، استعلام علامت تجاری یا مذاکرات دقیق قرارداد، لطفاً مستقیماً با ما تماس بگیرید:"
          },
          {
            text: "راه‌های ارتباطی بخش امور حقوقی شرکت سبز گستران گیلافروت:",
            bullets: [
              "نام رسمی حقوقی: شرکت سبز گستران گیلافروت (سهامی خاص)",
              "پشتیبانی عمومی مکاتبات: support@gilafruit.com",
              "خط تماس دپارتمان بازرگانی: 9091 9109 21 98+",
              "نشانی دفتر مرکزی تجاری: ایران، گیلان، شهرستان مرزی آستارا"
            ]
          }
        ]
      }
    ]
  },
  ru: {
    heroTag: "Юридический отдел и контроль качества GilaFruit",
    heroTitle: "Правила и Условия",
    heroTitleRegular: "Правила и ",
    heroTitleHighlight: "Условия",
    heroDesc: "Установление международных стандартов комплаенса, правил холодовой логистики, защиты авторских прав и разрешения торговых споров для ООО Sabz Gostaran Gilan Fruit.",
    btnPrintCode: "Печать кода",
    btnDownloadVerified: "Скачать копию договора",
    generatingPdf: "Генерация",
    searchPlaceholder: "Поиск юридических положений (например, кража, ответственность)...",
    clearSearch: "Очистить",
    readingModeLabel: "Режим чтения",
    readingModeSub: "Переключатель краткого изложения TL;DR",
    tableOfContents: "Содержание",
    articlesCount: "Статей: {count}",
    noMatchingArticles: "Статьи не найдены.",
    wholesaleAdvisoryTitle: "Рекомендации оптовой торговли",
    wholesaleAdvisoryDesc: "Опубликованная здесь документация служит стандартам торгового соответствия импортно-экспортного сообщества. Все транзакции требуют письменного договора.",
    noClausesFoundTitle: "Положения не найдены",
    noClausesFoundDesc: "Мы не нашли статей, соответствующих вашему запросу. Попробуйте поискать по другим ключевым словам, например, «авторское право», «логистика» или «контракт».",
    clearFiltersBtn: "Сбросить поисковые фильтры",
    signatoryTitle: "ООО Sabz Gostaran Gilan Fruit Co.",
    signatorySub: "Департамент торгового комплаенса и регулирования экспорта",
    signatoryDesc: "Условия и руководства, изложенные выше, устанавливают безопасную и юридически защищенную базу для экспорта фруктов, холодовой логистики, брендирования и взаимодействия со стейкхолдерами по всему миру.",
    complianceLabel: "Сертификация",
    complianceValue: "FOB сертифицирован по ISO",
    arbitrationLabel: "Арбитраж",
    arbitrationValue: "Одобрено аудитом SGS",
    sections: [
      {
        id: "introduction",
        title: "Введение",
        persianTitle: "مقدمه",
        tldr: "Пользуясь нашим веб-порталом, вы соглашаетесь с настоящими условиями совместной работы и нашей политикой защиты данных.",
        paragraphs: [
          {
            text: "Благодарим вас за выбор GilaFruit (Компания Sabz Gostaran Gilan Fruit). На этой странице изложены правила и условия, регулирующие использование нашего веб-сайта. Пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности, в которой подробно описано, как мы собираем, используем и защищаем вашу информацию."
          },
          {
            text: "Используя этот сайт, вы соглашаетесь как с настоящими условиями, так и с нашей Политикой конфиденциальности. Если вы не согласны с ними, вы должны прекратить использование наших цифровых порталов."
          }
        ]
      },
      {
        id: "user-definitions",
        title: "Определения пользователей",
        persianTitle: "تعاریف کاربر",
        tldr: "Разделение понятий обычного посетителя сайта («Пользователь») и зарегистрированного оптового покупателя («Клиент»).",
        paragraphs: [
          {
            title: "Классификационная матрица",
            text: "Для обеспечения юридической точности во всех системах Sabz Gostaran Gilan используются следующие определения:",
            bullets: [
              "Пользователь: Любое лицо, которое посещает, использует, просматривает или взаимодействует с этим веб-сайтом любым физическим или цифровым способом.",
              "Клиент: Пользователь или официальный представитель юридического лица, который приобретает и использует нашу сельскохозяйственную продукцию, логистическую упаковку и услуги экспортных контрактов."
            ]
          }
        ]
      },
      {
        id: "terms-and-conditions",
        title: "Правила и условия сервиса",
        persianTitle: "شرایط و ضوابط",
        tldr: "Строгие правила использования веб-сайта, защиты интеллектуальных прав, пресечения попыток взлома и спама.",
        paragraphs: [
          {
            title: "Использование веб-сайта",
            text: "Использование этого веб-сайта разрешено строго в личных и некоммерческих целях. Вы можете просматривать каталоги, отслеживать логистику и системы упаковки."
          },
          {
            title: "Коммерческое использование",
            text: "Вы не имеете права использовать информацию, медиа-активы или спецификации этого веб-сайта в коммерческих целях, а также для несанкционированного парсинга данных."
          },
          {
            title: "Информация о продукции",
            text: "Запрещается копировать техническую информацию о продукции, калибры, паспорта культур или спецификации упаковки для размещения на других ресурсах."
          },
          {
            title: "Авторские права",
            text: "Копирование всего или части контента, фотографий, векторных файлов или уникального дизайна макета без письменного разрешения строго запрещено и преследуется по закону."
          },
          {
            title: "Хакинг и взлом",
            text: "Любые попытки взлома систем веб-сайта, эксплуатации точек доступа API или изменения баз данных строго запрещены и подлежат строгой юридической ответственности."
          },
          {
            title: "Спам",
            text: "Отправка нежелательной рекламы, рекламных материалов, автоматических скриптов или спам-сообщений на сайте или через официальные каналы WhatsApp запрещена."
          },
          {
            title: "Нарушение работы сайта",
            text: "Любые враждебные действия, нарушающие доставку контента, организующие DOS-атаки или вредящие функционированию сайта, строго запрещены."
          }
        ]
      },
      {
        id: "legal-consequences",
        title: "Юридические последствия",
        persianTitle: "عواقب قانونی",
        tldr: "Незаконное использование нашего бренда или контента влечет за собой гражданско-правовую ответственность и иски об убытках.",
        paragraphs: [
          {
            title: "Права на интеллектуальную собственность",
            text: "Все права интеллектуальной собственности, включая товарные знаки, логотипы, описания, графический дизайн и интерактивные макеты на этом веб-сайте, принадлежат исключительно компании GilaFruit (Sabz Gostaran Gilan) и защищены законами Исламской Республики Иран и международными нормами. Копирование, коммерческое использование или изменение без письменного согласия GilaFruit запрещено."
          },
          {
            title: "Запрет на ненадлежащее использование",
            text: "Пользователи обязаны воздерживаться от любого ненадлежащего использования имени, бренда, изображений и интеллектуальной собственности GilaFruit. Сюда входят копирование, несанкционированное использование в рекламе, изменение контента, или регистрация схожих доменных имен. Любое нарушение может привести к блокировке доступа к сайту и услугам компании вкупе с судебным разбирательством."
          },
          {
            title: "Последствия незаконного использования",
            text: "Ненадлежащее использование бренда и ресурсов может повлечь компенсацию ущерба через суд, включая упущенную выгоду и ущерб репутации бренда."
          },
          {
            title: "Ответственность пользователя",
            text: "Пользователь несет полную ответственность за свои действия на сайте. В случае нарушения интеллектуальных прав или взлома серверов вся ответственность за последствия лежит исключительно на пользователе."
          }
        ]
      },
      {
        id: "services",
        title: "Услуги и контракты",
        persianTitle: "خدمات و قراردادها",
        tldr: "Любые оптовые поставки и индивидуальное изготовление тары требуют заключения письменного контракта.",
        paragraphs: [
          {
            text: "Все условия заказа, классы продукции, методы оплаты, расходы на холодовую цепь и транспортировку, обязательства по качеству и банковские реквизиты подробно излагаются в официальном контракте, подписываемом покупателем и продавцом."
          },
          {
            text: "Этот подписанный контракт служит единственной правовой основой для всех сделок. Данные, размещенные на этом сайте, носят исключительно справочный характер."
          }
        ]
      },
      {
        id: "privacy",
        title: "Защита конфиденциальности",
        persianTitle: "حریم خصوصی",
        tldr: "Ваши личные данные при регистрации, адреса и история переписки надлежащим образом скрыты.",
        paragraphs: [
          {
            text: "Ваши регистрационные данные, адреса и контактная информация WhatsApp защищены в соответствии с нашей корпоративной политикой конфиденциальности. Пожалуйста, ознакомьтесь с основными документами защиты данных."
          }
        ]
      },
      {
        id: "liability",
        title: "Ограничение ответственности",
        persianTitle: "سلب مسئولیت",
        tldr: "Мы не отвечаем за ущерб грузу при несоблюдении температурного режима после передачи в порту или задержки на таможне.",
        paragraphs: [
          {
            text: "GilaFruit не несет ответственности за ущерб, возникший вследствие несоблюдения температурного режима после передачи груза перевозчику, задержек на таможне или задержек доставки судов на международных маршрутах."
          }
        ]
      },
      {
        id: "governing-laws",
        title: "Применимое право",
        persianTitle: "قوانین حاکم",
        tldr: "Все цифровые споры и сделки регулируются судебной системой Исламской Республики Иран.",
        paragraphs: [
          {
            text: "Настоящие правила и условия, наряду со всеми соглашениями и перепиской на портале, регулируются и трактуются в соответствии с правовой базой Исламской Республики Иран."
          },
          {
            text: "Любые споры, арбитражные процессы или судебные иски будут разрешаться исключительно в компетентных судах Ирана."
          }
        ]
      },
      {
        id: "changes",
        title: "Изменения в правилах",
        persianTitle: "تغییرات در شرایط",
        tldr: "Компания имеет право изменять данные правила в любое время. Самая новая версия представлена здесь.",
        paragraphs: [
          {
            text: "Мы сохраняем за собой полное право изменять или обновлять эти правила в любое время без предварительного уведомления клиентов."
          },
          {
            text: "Последняя проверенная версия условий всегда доступна на этой странице. Мы рекомендуем регулярно проверять ее на наличие обновлений."
          }
        ]
      },
      {
        id: "contact",
        title: "Контакты и юридический отдел",
        persianTitle: "دفتر ارتباطات و انطباق",
        tldr: "Свяжитесь напрямую с нашими специалистами по контрактному комплаенсу.",
        paragraphs: [
          {
            text: "По любым вопросам комплаенса, товарным знакам или переговорам по контрактам обращайтесь к нам напрямую:"
          },
          {
            text: "Контакты юридического отдела компании Sabz Gostaran Gilan Fruit:",
            bullets: [
              "Официальное название: Sabz Gostaran Gilan Fruit Co.",
              "Электронная почта: support@gilafruit.com",
              "Рабочий телефон поддержки: +98 21 9109 9091",
              "Юридический адрес штаб-квартиры: Иран, провинция Гилян, г. Астара"
            ]
          }
        ]
      }
    ]
  },
  ar: {
    heroTag: "الامتثال القانوني وضمان الجودة لشركة جيلافروت",
    heroTitle: "الشروط والأحكام",
    heroTitleRegular: "الشروط و ",
    heroTitleHighlight: "الأحكام",
    heroDesc: "تأسيس أطر الامتثال الدولية، معايير سلسلة التبريد اللوجستية، حقوق الطبع والنشر الرقمية وحل النزاعات مخصصة لشركة سبز غستران غيلان فروت.",
    btnPrintCode: "طباعة الوثيقة",
    btnDownloadVerified: "تحميل نسخة معتمدة من العقد",
    generatingPdf: "جاري الإنشاء",
    searchPlaceholder: "البحث في البنود القانونية (مثل الاختراق، المسؤولية)...",
    clearSearch: "مسح",
    readingModeLabel: "وضع القراءة",
    readingModeSub: "خلاصة تنفيذية تفعيلية",
    tableOfContents: "جدول المحتويات",
    articlesCount: "{count} بنود قانونية",
    noMatchingArticles: "لم يتم العثور على أي بنود قانونية مطابقة.",
    wholesaleAdvisoryTitle: "تنبيه تجارة الجملة",
    wholesaleAdvisoryDesc: "الوثائق المنشورة هنا تخدم معايير الامتثال التجاري لمجتمع الاستيراد والتصدير. جميع المعاملات تتطلب صياغة عقود مكتوبة وموقعة.",
    noClausesFoundTitle: "لم يتم العثور على أي بنود",
    noClausesFoundDesc: "لم نتمكن من العثور على أي بنود تطابق كلمات البحث. جرب استخدام كلمات رئيسية أخرى مثل \"حقوق النشر\"، \"الخدمات اللوجستية\"، أو \"العقد\".",
    clearFiltersBtn: "إعادة تعيين فلاتر البحث",
    signatoryTitle: "شركة سبز غستران غيلان فروت",
    signatorySub: "قسم الامتثال التجاري والتنظيم الدولي للصادرات",
    signatoryDesc: "تؤسس الشروط والقواعد الموضحة أعلاه أطرًا قانونية آمنة ومحمية للتصدير الفعلي للمنتجات الزراعية، وإجراءات الخدمات اللوجستية الباردة وذوي العلاقة بنا.",
    complianceLabel: "الشهادات والتراخيص",
    complianceValue: "خاضع لشروط FOB وشهادات ISO",
    arbitrationLabel: "التحكيم الدولي",
    arbitrationValue: "معتمد من قبل مؤسسة SGS",
    sections: [
      {
        id: "introduction",
        title: "مقدمة وتوطئة",
        persianTitle: "مقدمه",
        tldr: "من خلال تصفح موقعنا والتفاعل معه، فإنك توافق التزامًا كاملاً على هذه الشروط وسياسة الخصوصية.",
        paragraphs: [
          {
            text: "نشكرك على اختيارك لشركة جيلافروت (شركة سبز غستران غيلان فروت). توضح هذه الصفحة الشروط والأحكام التي تحكم استخدامك لموقعنا الإلكتروني. يرجى مراجعة سياسة الخصوصية التي تحدد كيفية جمع واستخدام وحماية البيانات."
          },
          {
            text: "باستخدامك للموقع، فإنك تقر وتوافق على هذه الشروط وسياسة الخصوصية، وإذا كنت لا تقبلها يرجى التوقف فورًا عن تصفح بواباتنا."
          }
        ]
      },
      {
        id: "user-definitions",
        title: "تعريف المستخدمين",
        persianTitle: "تعاریف کاربر",
        tldr: "تحديد الفروق القانونية لزوار الموقع العاديين («مستخدم») والمسجلين كأطراف تجارية («عميل»).",
        paragraphs: [
          {
            title: "مصفوفة التصنيف والمسؤوليات",
            text: "لضمان الدقة القانونية للتعاقدات عبر نظام سبز غستران غيلان، فإن المسميات التالية تملك تفسيرات قانونية مباشرة:",
            bullets: [
              "المستخدم: أي شخص يقوم بزيارة الموقع، تصفحه أو التفاعل معه رقميًا أو فنيًا.",
              "العميل: أي كيان تجاري أو ممثل رسمي لشركة يشتري المنتجات الزراعية أو تعبئة الخدمات اللوجستية والتعاقدات التصديرية."
            ]
          }
        ]
      },
      {
        id: "terms-and-conditions",
        title: "الشروط والأحكام التفصيلية",
        persianTitle: "شرایط و ضوابط",
        tldr: "قواعد صارمة تضمن الحماية الفنية وحقوق النشر، وتواجه عمليات الاختراق أو الإغراق التسويقي العشوائي.",
        paragraphs: [
          {
            title: "استخدام موقع الويب",
            text: "يقتصر استخدام الموقع على الأغراض الشخصية أو الاسترشادية غير التجارية. يسمح بمراجعة الكتالوجات وتتبع أنظمة الشحن وخطوط التغليف."
          },
          {
            title: "حظر الاستغلال التجاري",
            text: "لا يجوز استخدام المعلومات، أو الأصول الإعلامية، أو المواصفات المنشورة لتحقيق عوائد مالية غير مصرح بها أو استقطاع البيانات تلقائيًا."
          },
          {
            title: "بيانات المنتجات",
            text: "يمنع نسخ تفاصيل مواصفات المنتجات وأحجام الكابلير وكتالوجات التعبئة بغرض إعادة بيعها أو استخدامها تجاريًا لأطراف أخرى."
          },
          {
            title: "حقوق الطبع والنشر",
            text: "حفظ حقوق التصميم والهوية والشعارات والصور المنشورة لمالك الموقع حصريًا، وأي نسخ غير مصرح به يعرض صاحبه لمسؤوليات الملاحقة القضائية."
          },
          {
            title: "مكافحة الهجمات الرقمية",
            text: "أي محاولات اختراق للأجهزة أو تعديل لقواعد البيانات أو التلاعب بمخارج الـ API تعد بمثابة اعتداء فني صارخ يلاحق قانونيًا فورًا."
          },
          {
            title: "حظر الرسائل العشوائية والاسبام",
            text: "يمنع كليًا إرسال الرسائل الإعلانية التلقائية أو استغلال نوافذ التواصل الخاصة بهواتف الشركاء في واتساب لأغراض ترويج خارجي."
          },
          {
            title: "عدم تدمير أو تشويه الموقع",
            text: "تعتبر كافة محاولات تعطيل استجابة الخوادم أو تشويه المحتوى أو تنظيم هجمات (DoS) خاضعة لأقصى اللوائح العقابية والقانونية الدولية."
          }
        ]
      },
      {
        id: "legal-consequences",
        title: "الحقوق المترتبة والعواقب القانونية",
        persianTitle: "عواقب قانونی",
        tldr: "الاستغلال غير القانوني لعلامتنا التجارية وهويتنا يترتب عليه مسؤوليات مدنية ومطالبات تعويض قضائية دولية.",
        paragraphs: [
          {
            title: "حقوق الممتلكات الفكرية والاسم التجاري",
            text: "جميع الحقوق بما في ذلك العلامات التجارية والشعارات المنشورة في هذا الموقع مملوكة حصريًا لشركة سبز غستران غيلان (جيلافروت)، ومحمية بموجب اللوائح الوطنية والدولية. أي تلاعب يعرض الفرد والكيان لأشد التدابير القضائية."
          },
          {
            title: "منع إساءة الاستخدام",
            text: "يلتزم المستخدم بعدم إساءة استخدام اسم العلامة التجارية أو تسجيل عناوين نطاقات إنترنت مشابهة تضلل الجمهور، مع حظر الوصول للخدمات لأي أطراف مخالفة."
          },
          {
            title: "آثار عواقب الضرر",
            text: "مطالبات التعويض تشمل تغطية الخسائر المباشرة وغير المباشرة الناتجة عن تشويه الهوية أو تقليل فرص العمل المستهدفة."
          },
          {
            title: "مسؤولية المستخدم الفردية",
            text: "يتحمل المستخدم كافة التبعات الفردية لتصرفاته أو محاولات إضعاف حماية الأنظمة المرتبطة بالبوابة الإلكترونية."
          }
        ]
      },
      {
        id: "services",
        title: "الخدمات والعقود الرسمية",
        persianTitle: "خدمات و قراردادها",
        tldr: "تخضع جميع الالتزامات الفعلية ومعايير التغليف وحل المشكلات للعقود الثنائية الموقعة بين الطرفين.",
        paragraphs: [
          {
            text: "توضح التفاصيل الكاملة لشروط الشحن والتعبئة والجودة والتعامل مع البنوك وكيفية تسوية عيوب البضائع في العقد الرسمي والمكتوب الموقع بين البائع والمشتري."
          },
          {
            text: "يعتبر العقد الرسمي الموقع هو المرجع القانوني الأوحد والملزم، وكل البيانات الإرشادية في الموقع توضع فقط للتوضيح ونشر المعرفة المسبقة."
          }
        ]
      },
      {
        id: "privacy",
        title: "حماية الخصوصية والأسرار",
        persianTitle: "حریم خصوصی",
        tldr: "تحظى جميع أرقام هواتف الشركاء والمستندات ببروتوكولات التشفير والسرية الأكثر صرامة.",
        paragraphs: [
          {
            text: "يتم تشفير وتأمين معلوماتكم المسجلة وعناوين الشحنات والاتصالات الهواتفية لدينا، بما يتسق تمامًا مع مبادئ الخصوصية التي تضمن سرية العقود التجارية الدولية."
          }
        ]
      },
      {
        id: "liability",
        title: "إخلاء المسؤولية القانونية",
        persianTitle: "سلب مسئولیت",
        tldr: "لا نتحمل أي عواقب تنتج عن التخزين السيء للمنتجات بعد تسليمها، أو تأخير التخليص الجمركي الخارجي.",
        paragraphs: [
          {
            text: "جيلافروت غير مسؤولة بالكامل عن أي أضرار ناجمة عن إهمال درجات الحرارة المطلوبة بعد استلام شركات الشحن المستقلة أو العوائق والانتظار في البوابات الجمركية الدولية."
          }
        ]
      },
      {
        id: "governing-laws",
        title: "القوانين الحاكمة والاختصاص",
        persianTitle: "قوانین حاکم",
        tldr: "تخضع جميع العقود وحالات التحكيم والمعالجة القضائية للمحاكم الرسمية في إيران.",
        paragraphs: [
          {
            text: "تفصل وتفسر هذه الشروط وكل تفاعل حاصل بناء عليها داخل الأطر والتفسيرات القانونية والقضائية لجمهورية إيران الإسلامية."
          },
          {
            text: "أية خلافات تجارية لم ينته الطرفان من حلها وديًا تسوى بشكل نهائي في المحاكم القضائية المختصة."
          }
        ]
      },
      {
        id: "changes",
        title: "تحديث الشروط والتعديلات",
        persianTitle: "تغییرات در شرایط",
        tldr: "نحتفظ بالحق الكامل في تعديل البنود وفق مقتضيات القوانين، والنسخة المنشورة هي المعتبرة فورًا.",
        paragraphs: [
          {
            text: "يحق لإدارة القانونية تحديث هذه اللوائح في أي وقت بناء على النظم الجديدة دون حاجة لإشعار كلي مسبق، وينبغي مراجعة هذه البوابة دوريًا لمعرفة المتغيرات."
          }
        ]
      },
      {
        id: "contact",
        title: "مكتب الاتصالات والشؤون القانونية",
        persianTitle: "دفتر ارتباطات و انطباق",
        tldr: "التواصل المباشر مع لجنة الامتثال والمسؤوليات التصديرية والعلاقات القانونية.",
        paragraphs: [
          {
            text: "لأي استفسارات بخصوص الامتثال للعقود، أو التحقق من استخدام العلامة والاتفاقات الثنائية، يرجى التواصل عبر النوافذ الحالية:"
          },
          {
            text: "بيانات الاتصال القانونية لشركة سبز غستران غيلان (جيلافروت):",
            bullets: [
              "الاسم القانوني: شركة سبز غستران غيلان فروت (مساهمة خاصة)",
              "البريد الإلكتروني المعتمد: support@gilafruit.com",
              "خط الهاتف الدولي المباشر: 9091 9109 21 98+",
              "المقر الرئيسي للشركة: الجمهورية الإسلامية الإيرانية، محافظة جيلان، مدينة آستارا"
            ]
          }
        ]
      }
    ]
  }
};
