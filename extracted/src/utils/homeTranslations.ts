// Home screen translations for GilaFruit (9 languages: en, fa, ru, ar, tr, hi, uz, az, uk)

export interface HomeTranslation {
  hero: {
    slides: {
      title: string;
      highlight: string;
      desc: string;
      badge: string;
      specs: string[];
    }[];
    buttons: {
      catalog: string;
      contact: string;
    };
  };
  highlights: {
    bannerTitle: string;
    bannerDesc: string;
    items: {
      badge: string;
      title: string;
      desc: string;
      footer: string;
    }[];
  };
  gateway: {
    headingPart1: string;
    headingPart2: string;
    desc1: string;
    desc2: string;
    calendar: {
      title: string;
      desc: string;
      btn: string;
    };
    products: {
      title: string;
      desc: string;
      btn: string;
    };
  };
  features: {
    topBadge: string;
    title: string;
    desc: string;
    items: {
      title: string;
      desc: string;
    }[];
    sliderCaption: string;
    stages: string[];
  };
  portfolio: {
    topBadge: string;
    title: string;
    desc: string;
    specsBtn: string;
    stamp: string;
    productDesc: string;
    allProductsBtn: string;
    productsNames: Record<string, string>;
    productTags: Record<string, string>;
  };
  story: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    yearsText: string;
    outcomeText: string;
    stats: {
      gardens: string;
      products: string;
      partners: string;
    };
  };
  news: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
  };
  freshness: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    highlight: string;
  };
  certifications: {
    badge: string;
    title: string;
    testimonialHeading: string;
    testimonialButtons: {
      back: string;
      next: string;
    };
    badgeNames: Record<string, string>;
  };
}

export const homeTranslations: Record<string, HomeTranslation> = {
  en: {
    hero: {
      slides: [
        {
          title: "Export of Premium Iranian Kiwis",
          highlight: "Iranian Kiwis",
          desc: "Supplying international markets with top-quality Iranian kiwi, along with premium wooden/carton branding and bulletproof export cold logistics.",
          badge: "Astara Premium Facility",
          specs: [
            "Brix Sugar: 6.2% - 6.5%+ Min",
            "Packaging: Premium Carton/Wood",
            "Transit: Refrigerated to Russia"
          ]
        },
        {
          title: "Direct Wholesale Distribution to Russia & EAEU",
          highlight: "Russia & EAEU",
          desc: "Providing temperature-regulated freight and seamless customs clearance via Astara, Baku, and Caspian maritime corridors.",
          badge: "Refrigerated Sizing Lines",
          specs: [
            "Settlement: Direct RUB / IRR",
            "Min Order: 24 Tons (1 Container)",
            "Documents: 100% Phyto Cleared"
          ]
        },
        {
          title: "Controlled Atmosphere Cold Warehousing",
          highlight: "Cold Warehousing",
          desc: "Storing 12,000+ tons of pristine fresh produce at optimized humidity level and ethylene-scrubbed modern climate chambers.",
          badge: "ESTD 2001 - 23+ Years",
          specs: [
            "Capacity: 12,000+ Tons Local",
            "Humidity: 90% - 95% RH Control",
            "Sorters: Optical weight sizing"
          ]
        }
      ],
      buttons: {
        catalog: "View Trade Catalog",
        contact: "Contact Sales Desk"
      }
    },
    highlights: {
      bannerTitle: "With GilaFruit, taste Iranian fruits and vegetables in every corner of the world",
      bannerDesc: "Direct crop delivery from premium northern Gilan microclimates straight through automated weight categorization systems to secure international wholesale terminals.",
      items: [
        {
          badge: "🇮🇷",
          title: "Iranian Products",
          desc: "Iran produces diverse and popular fruits and vegetables due to its four-season climate. GilaFruit utilizes advanced facilities and hygienic methods to offer quality products worldwide. Enjoy authentic taste experience.",
          footer: "100% Organic Origin"
        },
        {
          badge: "🏆",
          title: "GilaFruit Company",
          desc: "Sabz Gostaran Gilan Fruit Company, known by its trade name “GilaFruit”, is recognized as a pioneer in Iran, relying on its experience and expertise in sorting and packaging fruits and vegetables. We meet global standards using advanced equipment.",
          footer: "ESTABLISHED 2001"
        },
        {
          badge: "🚚",
          title: "Export Services",
          desc: "With several years of experience in international fresh produce freight, GilaFruit has become a trusted partner for those who export Fruits and Vegetables. Our team specializes in transportation, licensing, and customs for a smooth process.",
          footer: "EAEU & MENA LOGISTICS"
        }
      ]
    },
    gateway: {
      headingPart1: "GilaFruit: ",
      headingPart2: "Your gateway to the world of Iranian Fruits and Vegetables",
      desc1: "Relying on years of experience and expertise in sorting and packaging hygienic Iranian fruits and vegetables, GilaFruit is recognized as a pioneer in this industry in Iran. The company utilizes modern equipment and advanced technologies to provide its customers with high-quality products that meet international standards. GilaFruit meticulously classifies fruits based on various criteria, including size, color, appearance, and the absence of impurities, using both automated and manual sorting methods.",
      desc2: "By employing high-quality and hygienic raw materials, the company preserves the shelf life and quality of the product until it reaches the end consumer.",
      calendar: {
        title: "Products Calendar",
        desc: "To accurately plan your orders, please check our product calendar and find out when products are available for purchase throughout the year.",
        btn: "View Calendar"
      },
      products: {
        title: "Our Products",
        desc: "We are leaders in the production and supply of some fresh vegetables in global markets and have a privileged position among our competitors.",
        btn: "Show Products"
      }
    },
    features: {
      topBadge: "✨ Thanks to Iran's diverse climate and four seasons",
      title: "Core Premium Features of Export Produce",
      desc: "Agricultural products in Iran carry exceptional taste, natural Brix levels, and unique density thanks to geographical climate varieties. Strict adherence to product safety, manual double-inspection sorting, and specialized hydro-cooling packaging remain our ultimate baseline.",
      items: [
        { title: "Product quality", desc: "Fresh and wholesome / Free from signs of spoilage" },
        { title: "Firm and ripe", desc: "Free from bends and bruises" },
        { title: "Free from bruising", desc: "Free from stains and dehydration" },
        { title: "Weight and size", desc: "As agreed upon and according to product type" },
        { title: "Name and brand", desc: "Producer or exporter" },
        { title: "Standard", desc: "Complying with international standards" },
        { title: "Internal and external defects", desc: "Very low deviations from standards" },
        { title: "Natural flavor and aroma", desc: "Natural smell and free from signs of diseases" }
      ],
      sliderCaption: "EXPORT QUALITY STAGE",
      stages: [
        "Celery Sorting & Sizing Process",
        "Fresh Lettuce Selection Cleanroom",
        "Capsicum Calibration Sorter Line",
        "High-Vis Warehouse Pallet Shipments",
        "Physical Quality & Dehydration Check",
        "Four Seasons Organic Yield Inspection"
      ]
    },
    portfolio: {
      topBadge: "🌿 GILAFRUIT PREMIUM PORTFOLIO 🌿",
      title: "Some of Our Premium Fruits & Vegetables",
      desc: "Our products undergo state-of-the-art optical sizing sorting, thorough water washing, and packaging in specialized carton boxes ensuring flawless delivery.",
      specsBtn: "Specifications",
      stamp: "SELECT",
      productDesc: "Premium grading, compliant with EAEU phytosanitary inspection codes. Hand-selected and automatically calibrated in Gilan packing center.",
      allProductsBtn: "View Full Export Catalog Directory",
      productsNames: {
        e1: "Export of Various Iranian Kiwis",
        e2: "Fresh Iranian Garlic for Export",
        e3: "Export of Iranian Round and Oval Watermelon",
        e4: "Export of Various Types of Lettuce from Iran",
        e5: "Iranian Export Bell Pepper Varieties",
        e6: "Iranian Export Greenhouse Tomatoes",
        e7: "Parsley with Fresh Iranian Quality",
        e8: "Quality Fresh Iranian Export Dill",
        e9: "Dry Garlic with Iranian Export Quality",
        e10: "Export of Various Types of Grapes from Iran",
        e11: "Fresh Iranian Export Broccoli",
        e12: "Iranian Super Export Cherries"
      },
      productTags: {
        Kiwi: "Kiwi",
        Garlic: "Garlic",
        Watermelon: "Watermelon",
        Lettuce: "Lettuce",
        Pepper: "Pepper",
        Tomato: "Tomato",
        Parsley: "Parsley",
        Dill: "Dill",
        Grapes: "Grapes",
        Broccoli: "Broccoli",
        Cherries: "Cherries"
      }
    },
    story: {
      badge: "A little about us",
      titlePart1: "From Humble Beginnings to Global Access: ",
      titlePart2: "The GilaFruit Story",
      desc: "A young sapling was planted in the soil one day, and over two decades of dedication and hard work, it transformed into a mighty tree. Our 23 fruitful years are filled with experience, a passion for producing and supplying high-quality agricultural products, and a commitment to providing the best taste and freshness to customers worldwide. Along this journey, significant strides have been made in enhancing skills and expertise through the efforts of 150 skilled workers across various departments.",
      yearsText: "YEARS",
      outcomeText: "BOUNTIFUL OUTCOME",
      stats: {
        gardens: "Active Gardens",
        products: "Fresh Products",
        partners: "Business Partners"
      }
    },
    news: {
      badge: "📰 Newsfeed",
      title: "Latest Blog: Everything you need to know",
      subtitle: "Stay up to date with GilaFruit’s global shipment timelines, cold warehousing optimizations, packing innovations, and trade protocol shifts.",
      readMore: "Read More ➜"
    },
    freshness: {
      badge: "Commitment to Freshness",
      title: "GilaFruit: Your Gateway to the Best Fruits and Vegetables",
      desc1: "With advanced methods, GilaFruit ensures that every product that bears its brand is the epitome of quality and freshness. The journey of GilaFruit products begins in the heart of lush gardens and farms, where expert hands carefully select only the best fruits and vegetables.",
      desc2: "From fluffy kiwis and juicy oranges to vibrant peaches and juicy grapes, each harvest is carefully crafted using the latest techniques, ensuring that the natural integrity of each product remains intact. A team of skilled and experienced professionals oversees all aspects of the production process, from sorting and packing to quality control and shipping. Using manual skill as well as state-of-the-art automated machinery, GilaFruit ensures that each product meets the highest standards of consistency and presentation.",
      highlight: "🌟 GilaFruit’s unwavering commitment to quality is rooted in the deep belief that consumers deserve nothing but the best."
    },
    certifications: {
      badge: "Achieving Success Together",
      title: "Our Certifications and Honors",
      testimonialHeading: "Wholesale Partner Review",
      testimonialButtons: {
        back: "◀ Back",
        next: "Next ▶"
      },
      badgeNames: {
        enamad: "e-Commerce Trust",
        samandehi: "Digital Media Registration",
        tuv_center: "TÜV Certification",
        gs1_global: "GS1 Global Coding",
        eac_union: "Eurasian Compliance",
        ir_mimt: "Ministry of Trade",
        chamber: "Gilan Chamber of Commerce",
        russian_embassy: "Embassy Approved"
      }
    }
  },
  fa: {
    hero: {
      slides: [
        {
          title: "صادرات کیوی ممتاز هایوارد ایرانی",
          highlight: "کیوی ایرانی",
          desc: "تامین بازارهای بین‌المللی با کیوی باکیفیت ایرانی، به همراه بسته‌بندی‌های چوبی/کارتن اختصاصی و لجستیک سردبار درجه یک.",
          badge: "مرکز پیشرفته آستارا",
          specs: [
            "درجه قند بریکس: ۶٫۲٪ الی ۶٫۵٪+ حداقل",
            "نوع بسته‌بندی: کارتن و سبد چوبی ممتاز",
            "ترانزیت بار: کامیون‌های مجهز به روسیه"
          ]
        },
        {
          title: "توزیع مستقیم عمده به روسیه و اتحادیه اوراسیا",
          highlight: "روسیه و اوراسیا",
          desc: "ارائه ترابری کنترل دما پایدار و ترخیص گمرکی روان از مرزهای آستارا، باکو و بنادر دریای کاسپین.",
          badge: "ردیف‌های مکانیزه سورتینگ بار",
          specs: [
            "تسویه حساب: مستقیم روبل و ریال بی‌واسطه",
            "حداقل سفارش: ۲۴ تن (یک کانتینر ترانزیتی)",
            "اسناد قانونی: تاییدیه گمرک و فایتو"
          ]
        },
        {
          title: "انبارهای فنی مجهز به سیستم اتمسفر کنترل شده",
          highlight: "نگهداری در سردخانه",
          desc: "ذخیره بیش از ۱۲,۰۰۰ تن میوه و صیفی‌جات ممتاز در رطوبت بهینه با سیستم‌های تصفیه اتیلن مدرن.",
          badge: "تاسیس از ۲۰۰۱ - بیش از ۲۳ سال سابقه",
          specs: [
            "ظرفیت کل: بیش از ۱۲,۰۰۰ تن در سطح منطقه",
            "کنترل رطوبت: میزان ۹۰٪ الی ۹۵٪ رطوبت نسبی",
            "دستگاه‌ها: سورت بر اساس وزن اپتیکال"
          ]
        }
      ],
      buttons: {
        catalog: "مشاهده کاتالوگ بازرگانی",
        contact: "تماس با میز فروش مستقیم"
      }
    },
    highlights: {
      bannerTitle: "با گیلافروت، طعم میوه و صیفی‌جات ایرانی را در تمام نقاط جهان تجربه کنید",
      bannerDesc: "تحویل مستقیم محصول از اقلیم‌های غنی گیلان شمالی به واسطه سیستم‌های نوین درجه‌بندی تمام خودکار به پایانه‌های فروش عمده بین‌المللی.",
      items: [
        {
          badge: "🇮🇷",
          title: "محصولات برتر ایرانی",
          desc: "ایران به دلیل اقلیم چهارفصل خود میوه‌ها و صیفی‌جات متنوعی تولید می‌کند. گیلافروت با زیرساخت مناسب طعم اصیل و ارگانیک را به خریداران در سراسر دنیا هدیه می‌دهد.",
          footer: "۱۰۰٪ اصالت طبیعی محصول"
        },
        {
          badge: "🏆",
          title: "شرکت گیلا فروت",
          desc: "شرکت سبز گستران گیلافروت به عنوان یکی از پیشگامان آماده‌سازی و سورتینگ مدرن در گیلان بر اساس گواهینامه‌ها و ماشین‌آلات پیشرفته جایگاه برتری در این زمینه دارد.",
          footer: "تاسیس رسمی از سال ۱۳۸۰"
        },
        {
          badge: "🚚",
          title: "خدمات صادرات",
          desc: "تیم صادرات ما با سال‌ها تجربه ترابری، انجام امور اداری قرنطینه کشاورزی و ترخیص سریع گمرکی را برای تجار بزرگ تسهیل می‌کند.",
          footer: "لجستیک اختصاصی حاشیه خلیج و اوراسیا"
        }
      ]
    },
    gateway: {
      headingPart1: "گیلافروت: ",
      headingPart2: "دروازه طلایی شما به دنیای صادرات میوه و صیفی‌جات ممتاز ایران",
      desc1: "با تکیه بر سال‌ها تجربه و مهارت در زمینه‌های آماده‌سازی، شستشو، سورتینگ و بسته‌بندی مکانیزه صیفی‌جات و میوه‌ها، گیلافروت به عنوان یکی از پیشتازان خوش‌نام صنعت صادرات در کشور شناخته می‌شود. این مجموعه از تکنولوژی‌های روز دنیا استفاده می‌کند تا رضایت همکاران تجاری را در بازارهای هدف تامین کند. به خصوص سورت اپتیکال کیوی گیلان و تالش با تفکیک دقیق کالیبرها بر اساس وزن و ابعاد، رضایتمندی حداکثری ایجاد نموده است.",
      desc2: "به کارگیری متریال استاندارد درجه‌یک در بسته‌بندی‌ها کمک می‌کند تا ماندگاری و شادابی بافت محصولات تا رسیدن به مقصد نهایی به خوبی حفظ شود.",
      calendar: {
        title: "تقویم صادراتی محصولات",
        desc: "جهت برنامه‌ریزی دقیق سفارشات عمده خود، تقویم فصلی تامین محصولات کشاورزی ما را بررسی کنید تا از زمان دقیق عرضه مطلع شوید.",
        btn: "مشاهده تقویم تامین"
      },
      products: {
        title: "محصولات صادراتی ما",
        desc: "ما در تولید و تامین برخی اقلام کلیدی گلخانه‌ای و صیفی‌جات تازه در سطح خاورمیانه و اوراسیا جزو تامین‌کنندگان تراز اول هستیم.",
        btn: "نمایش کاتالوگ محصولات"
      }
    },
    features: {
      topBadge: "✨ به لطف اقلیم چهارفصل و مزارع غنی ایران زمین",
      title: "ویژگی‌های کلیدی محصولات صادراتی گیلافروت",
      desc: "کیفت خاک و تابش آفتاب در ایران موجب قند بریکس بی‌نظیر و عطر اصیل در میوه‌ها می‌گردد. همچنین شستشوی تمیز، بازرسی فیزیکی نهایی و بسته‌بندی‌های باکیفیت استاندارد اصلی ماست.",
      items: [
        { title: "کیفیت ظاهری محصول", desc: "تر و تازه / فاقد هرگونه علائم پوسیدگی یا افت کیفیت" },
        { title: "سفتی و رسیدگی به اندازه", desc: "بدون له شدگی یا اثر خمش در بافت" },
        { title: "فاقد لکه‌ و عارضه", desc: "بدون تغییر رنگ پوست یا کم‌آبی در لایه‌ها" },
        { title: "ابعاد و وزن یک دست", desc: "دقیقا معادل تفاهم‌نامه خرید و نوع کالیبر توافقی" },
        { title: "برند و شناسنامه محصول", desc: "درج اطلاعات دقیق تولیدکننده و صادرکننده رسمی" },
        { title: "مطابقت با استانداردها", desc: "پایبندی کامل به مقررات ورودی بنادر و مرزهای مقصد" },
        { title: "حداقل نقص فیزیکی", desc: "میزان خطا زیر ۵ درصد در کل کانتینر ارسالی" },
        { title: "عطر و طعم ۱۰۰٪ طبیعی", desc: "بوی عاری از اسانس ساختگی یا علائم آفات و بیماری" }
      ],
      sliderCaption: "گام‌های تضمین کیفیت صادرات",
      stages: [
        "فرآیند پاک‌سازی و سورتینگ کرفس",
        "سالن ایزوله تفکیک کاهو سالادی تازه",
        "خط درجه‌بندی کالیبر فلفل دلمه‌ای رنگی",
        "پالت‌بندی ایمن کالاها در سردخانه مرکزی",
        "بررسی فیزیکی جهت جلوگیری از هرگونه چروکیدگی و رطوبت اضافی",
        "کنترل نهایی اصالت طبیعی محصول مزارع چهارفصل"
      ]
    },
    portfolio: {
      topBadge: "🌿 سبد محصولات صادراتی گیلافروت 🌿",
      title: "بخش انتخابی از اقلام صادراتی ممتاز ما",
      desc: "تمامی اقلام تحت فرآیندهای سورت پیشرفته با چشم‌های الکترونیکی اپتیکال درجه‌بندی شده و در کارتن‌ها یا جعبه‌های مقاوم پالت‌بندی می‌گردد.",
      specsBtn: "مشخصات فنی صادراتی",
      stamp: "برگزیده ممتاز",
      productDesc: "گرید کیفی متمایز، سازگار با استانداردهای سخت‌گیرانه فایتوسانیتری گمرک فدراسیون روسیه و کشورهای همسایه.",
      allProductsBtn: "مشاهده گالری و کاتالوگ کامل محصولات صادراتی",
      productsNames: {
        e1: "صادرات انواع کیوی‌های هایوارد مرغوب ایران",
        e2: "سیر تازه صادراتی گیلان و استان‌های برگزیده",
        e3: "صادرات هندوانه بیضی و گرد ممتاز ایران",
        e4: "صادرات کاهو رومانو و دلمه‌ای صادراتی از ایران",
        e5: "فلفل دلمه‌ای رنگی گلخانه‌ای صادراتی ایران",
        e6: "گوجه‌فرنگی‌های گلخانه‌ای صادراتی باکیفیت عالی",
        e7: "جعفری تازه صادراتی با طراوت ماندگار",
        e8: "شوید صادراتی معطر تولید روز با شستشوی تمیز",
        e9: "سیر خشک صادراتی سفید و بنفش درجه‌یک",
        e10: "صادرات انگور بیدانه سفید و قرمز صادراتی",
        e11: "بروکلی سبز تازه صادراتی با طراوت کامل",
        e12: "گیلاس سوپر صادراتی قرمز و مشکی ایرانی"
      },
      productTags: {
        Kiwi: "کیوی",
        Garlic: "سیر",
        Watermelon: "هندوانه",
        Lettuce: "کاهو",
        Pepper: "فلفل دلمه‌ای",
        Tomato: "گوجه فرنگی",
        Parsley: "جعفری",
        Dill: "شوید",
        Grapes: "انگور",
        Broccoli: "بروکلی",
        Cherries: "گیلاس"
      }
    },
    story: {
      badge: "درباره شرکت ما",
      titlePart1: "از رویش اولین نهال تا دسترسی جهانی: ",
      titlePart2: "داستان پر افتخار گیلافروت",
      desc: "در طول بیش از دو دهه تلاش خستگی‌ناپذیر، نهال کوچکی که در خاک گیلان کاشته شده بود، به درختی تنومند در عرصه بازرگانی خارجی مبدل گشت. افتخار ۲۳ سال فعالیت صادراتی، نمادی از وفاداری ما به ارائه برترین کیفیت طعم و زنجیره توزیع به خریداران در سراسر جهان است. تا به امروز سهم بزرگی از رشد اقتصادی شمال کشور و بکارگیری ۱۵۰ نیروی متخصص و کارگر شایسته در بسته‌بندی را مایه سرافرازی خود می‌دانیم.",
      yearsText: "سال فعالیت",
      outcomeText: "دستاورد و تعهد صادراتی",
      stats: {
        gardens: "باغات تحت قرارداد",
        products: "سبد اقلام تازه",
        partners: "همکاران تجاری فعال"
      }
    },
    news: {
      badge: "📰 تازه ترین اخبار کشاورزی",
      title: "وبلاگ تخصصی: دانستنی‌های صادرات میوه",
      subtitle: "اطلاعات دقیق ترافیک مرزها، ترانزیت یخچال‌دار، پروتکل‌های صادراتی اوراسیا و روش‌های حفظ تازگی در سردخانه را بخوانید.",
      readMore: "مطالعه ادامه مقاله ➜"
    },
    freshness: {
      badge: "تعهد به حفظ طراوت بار",
      title: "گیلافروت: نماد پایداری، کیفیت و شادابی در تحویل کالا",
      desc1: "بهره‌گیری از تکنولوژی‌های مدرن پیش‌سرمایش و رطوبت‌دهی کنترل شده تضمین می‌کند که کالا بدون هیچگونه افت حجم یا چروکیدگی به دست مصرف‌کننده برسد. مزارع ما در شمالی‌ترین نقاط گیلان با بهترین متدولوژی‌ها مراقبت شده و برداشت‌ها تحت نظارت کیفی قرار می‌گیرند.",
      desc2: "از کیوی هایوارد ترد تا پرتقال‌های پرآب شمال و صیفی‌جات گلخانه‌ای چشم‌نواز، تمام بارهای صادراتی با ماشین‌آلات تمام‌اتوماتیک درجه‌بندی گردیده تا استاندارد نهایی ظاهری به شکل یکنواخت تضمین شود. کنترل کیفی مجدد در پالت‌ها نیز توسط بازرسان باتجربه صورت می‌گیرد.",
      highlight: "🌟 باور قلبی ما در شرکت گیلافروت این است که شرکای تجاری ما سزاوار دریافت باکیفیت‌ترین بسته‌ها و بهترین طراوت ممکن هستند."
    },
    certifications: {
      badge: "مسیر موفقیت‌های مشترک ما",
      title: "گواهینامه‌ها، مجوزها و تاییدیه‌های رسمی",
      testimonialHeading: "دیدگاه بازرگانان و مشتریان عمده",
      testimonialButtons: {
        back: "◀ قبلی",
        next: "بعدی ▶"
      },
      badgeNames: {
        enamad: "نماد اعتماد الکترونیکی",
        samandehi: "ثبت رسانه‌های دیجیتال",
        tuv_center: "گواهینامه TÜV آلمان",
        gs1_global: "کد ملی و جهانی GS1",
        eac_union: "اتحادیه گمرکی اوراسیا",
        ir_mimt: "وزارت صنعت و معدن",
        chamber: "اتاق بازرگانی گیلان",
        russian_embassy: "تاییدیه سفارت روسیه"
      }
    }
  },
  ru: {
    hero: {
      slides: [
        {
          title: "Экспорт и сортинга премиум киви из Ирана",
          highlight: "Иранские Киви",
          desc: "Поставка на международные рынки отборного иранского киви сорта Хайвард в премиальной деревянной и картонной упаковке с надежной логистикой.",
          badge: "Современный комплекс в Астаре",
          specs: [
            "Сахаристость Brix: минимум 6.2% - 6.5%+",
            "Тип упаковки: премиум картон / ящик",
            "Логистика: рефрижераторы в Россию"
          ]
        },
        {
          title: "Прямые оптовые поставки в Россию и страны ЕАЭС",
          highlight: "Россия и ЕАЭС",
          desc: "Предоставление грузоперевозок с температурным контролем и быстрое таможенное оформление через коридоры Астара, Баку и порты Каспия.",
          badge: "Линии калибровки веса",
          specs: [
            "Расчеты: напрямую в рублях / риалах",
            "Мин. заказ: 24 тонны (1 рефрижератор)",
            "Документы: 100% Фитосанитарная очистка"
          ]
        },
        {
          title: "Хранение в камерах с регулируемой атмосферой",
          highlight: "Холодные Склады",
          desc: "Хранение более 12000 тонн свежей продукции при оптимальном уровне влажности с современными очистителями этилена.",
          badge: "Основано в 2001 году — 23 года опыта",
          specs: [
            "Общая мощность: 12,000+ тонн",
            "Контроль влажности: 90% - 95% RH",
            "Сортировка: лазерная калибровка веса"
          ]
        }
      ],
      buttons: {
        catalog: "Открыть каталог продукции",
        contact: "Связаться с отделом продаж"
      }
    },
    highlights: {
      bannerTitle: "С GilaFruit вы почувствуете вкус иранских овощей и фруктов в любом уголке мира",
      bannerDesc: "Прямая доставка урожая из экологически чистых садов севера провинции Гилян через автоматизированные системы калибровки веса на мировые оптовые терминалы.",
      items: [
        {
          badge: "🇮🇷",
          title: "Продукты Ирана",
          desc: "Благодаря четырем сезонам в году, Иран производит богатый ассортимент фруктов и овощей. GilaFruit предлагает качественные товары на мировом рынке, сохраняя аутентичный вкус.",
          footer: "100% Органическое происхождение"
        },
        {
          badge: "🏆",
          title: "Компания GilaFruit",
          desc: "Компания Sabz Gostaran Gilan Fruit Co, известная как GilaFruit, является признанным лидером в сфере высокотехнологичной сортировки и упаковки свежей продукции в Иране.",
          footer: "ОСНОВАНО В 2001 ГОДУ"
        },
        {
          badge: "🚚",
          title: "Экспортные услуги",
          desc: "Обладая многолетним опытом в международной доставке овощей и фруктов, GilaFruit является надежным партнером для оптовиков. Мы берем на себя транспорт и таможню.",
          footer: "ЛОГИСТИКА ЕАЭС И БЛИЖНИЙ ВОСТОК"
        }
      ]
    },
    gateway: {
      headingPart1: "GilaFruit: ",
      headingPart2: "Ваш надежный проводник в мир иранских овощей и фруктов",
      desc1: "Опираясь на многолетний опыт калибровки, сортировки, мойки и технологичной упаковки свежих иранских овощей и фруктов, GilaFruit завоевала статус пионера отрасли в Исламской Республике Иран. Наша компания использует автоматическое оптическое оборудование MAF RODA для точной весовой калибровки киви, гарантируя отсутствие дефектов кожицы и однородность плодов в коробке.",
      desc2: "Использование высококачественных гигиеничных упаковочных материалов позволяет сохранить свежесть, сочность и органолептические свойства продукции на протяжении всего транзитного пути до конечного прилавка.",
      calendar: {
        title: "Календарь поставок",
        desc: "Чтобы составить точный годовой план закупок, пожалуйста, изучите наш календарь сезонности, чтобы узнать точные периоды сбора каждого урожая.",
        btn: "Посмотреть Календарь"
      },
      products: {
        title: "Наши Продукты",
        desc: "Мы являемся ведущими производителями и поставщиками зелени, салатов и овощей на рынках Ближнего Востока и СНГ.",
        btn: "Показать Продукты"
      }
    },
    features: {
      topBadge: "✨ Благодаря уникальному четырехсезонному климату Ирана",
      title: "Основные преимущества экспортной продукции",
      desc: "Иранская продукция отличается великолепным натуральным вкусом, уникальной плотностью и высоким индексом Brix. Тройной физический аудит качества и гидроохлаждение перед загрузкой рефрижератора — наш стандарт.",
      items: [
        { title: "Качество продукта", desc: "Свежие, отборные и плотные плоды / без признаков порчи" },
        { title: "Твердость и спелость", desc: "Оптимальная спелость, отсутствие вмятин и деформаций" },
        { title: "Отсутствие пятен", desc: "Идеально чистая кожица без следов обезвоживания" },
        { title: "Точный калибр", desc: "Соответствие оговоренным спецификациям и весовому ряду" },
        { title: "Маркировка бренда", desc: "Полная прослеживаемость от сертифицированного экспортера" },
        { title: "Соответствие стандартам", desc: "Полное соответствие импортным требованиям стран назначения" },
        { title: "Минимум погрешностей", desc: "Минимальный процент отклонения калибра на всю партию" },
        { title: "Натуральный аромат", desc: "Природный запах, полное отсутствие болезней плодов" }
      ],
      sliderCaption: "ЭТАПЫ ЭКСПОРТНОГО КОНТРОЛЯ КАЧЕСТВА",
      stages: [
        "Очистка и сортировка свежего сельдерея",
        "Цех отбора салата Айсберг в чистой зоне",
        "Калибровочная линия сладкого болгарского перца",
        "Формирование паллет в холодильном терминале",
        "Аудит плотности кожицы и влажности овощей",
        "Финальная проверка урожая с полей перед погрузкой"
      ]
    },
    portfolio: {
      topBadge: "🌿 ПРЕМИАЛЬНЫЙ ЭКСПОРТНЫЙ ПОРТФЕЛЬ GilaFruit 🌿",
      title: "Наши экспортные овощи и фрукты",
      desc: "Продукция проходит сортировку на оптических весовых машинах, бережную очистку и укладывается на паллеты в прочной таре.",
      specsBtn: "Спецификации экспорта",
      stamp: "ПРЕМИУМ КЛАСС",
      productDesc: "Экспортный класс качества, полностью сертифицированный по фитосанитарным инспекционным кодам стран ЕАЭС.",
      allProductsBtn: "Посмотреть весь каталог экспортной продукции",
      productsNames: {
        e1: "Иранский зеленый киви Хайвард (экспорт класс)",
        e2: "Свежий иранский чеснок напрямую от поставщика",
        e3: "Круглые и овальные иранские арбузы оптом",
        e4: "Салат Романо, Айсберг и другие виды зелени",
        e5: "Перец болгарский грунтовой и тепличный разноцветный",
        e6: "Тепличные томаты премиального товарного вида",
        e7: "Свежая петрушка иранского качества",
        e8: "Ароматный укроп свежего ежедневного среза",
        e9: "Чеснок сушеный белый и фиолетовый калиброванный",
        e10: "Столовый бескосточковый виноград (белый и красный)",
        e11: "Свежая иранская брокколи (зеленые соцветия)",
        e12: "Свежая черешня экстра-калибра (темные сорта)"
      },
      productTags: {
        Kiwi: "Киви",
        Garlic: "Чеснок",
        Watermelon: "Арбуз",
        Lettuce: "Салат",
        Pepper: "Перец",
        Tomato: "Томаты",
        Parsley: "Петрушка",
        Dill: "Укроп",
        Grapes: "Виноград",
        Broccoli: "Брокколи",
        Cherries: "Черешня"
      }
    },
    story: {
      badge: "Коротко о нашей истории",
      titlePart1: "От небольшого сада до глобального экспорта: ",
      titlePart2: "История успеха GilaFruit",
      desc: "Маленький саженец, посаженный более двадцати лет назад, превратился в надежное дерево международной торговли. Наш 23-летний путь — это сплав традиций садоводства и передовых агротехнологий. Сегодня штат компании насчитывает более 150 профессионалов в нескольких департаментах, от логистики до контроля качества.",
      yearsText: "ЛЕТ",
      outcomeText: "БОГАТОГО УРОЖАЯ И ОПЫТА",
      stats: {
        gardens: "Активных садов",
        products: "Наименований продукции",
        partners: "Партнеров по бизнесу"
      }
    },
    news: {
      badge: "📰 Новости компании",
      title: "Блог: Все об экспорте свежих продуктов",
      subtitle: "Будьте в курсе графиков отгрузок GilaFruit, инноваций в хранении и изменений фитосанитарных норм ЕАЭС.",
      readMore: "Подробнее ➜"
    },
    freshness: {
      badge: "Гарантия Свежести",
      title: "GilaFruit: Ваш надежный мост к свежим плодам",
      desc1: "Использование современных упаковочных сетей и холодильной цепи предохраняет фрукты от обезвоживания и порчи. Продукция тщательно укладывается вручную, исключая любые физические ушибы плодов.",
      desc2: "Начиная от бархатистых киви, заканчивая сочной зеленью — каждый объем калибруется на весовых столах в упаковочном центре провинции Гилян. Мы контролируем каждый кубометр влажности и содержание этилена в камерах для долгого срока хранения.",
      highlight: "🌟 Наша твердая уверенность в компании GilaFruit состоит в том, что каждый покупатель достоин премиальных сезонных фруктов первой свежести."
    },
    certifications: {
      badge: "Достигаем Успеха Вместе",
      title: "Наши сертификаты и знаки отличия",
      testimonialHeading: "Отзывы оптовых покупателей",
      testimonialButtons: {
        back: "◀ Назад",
        next: "Вперед ▶"
      },
      badgeNames: {
        enamad: "e-Commerce Доверие",
        samandehi: "Реестр цифровых СМИ",
        tuv_center: "Немецкий сертификат TÜV",
        gs1_global: "Штрихкодирование GS1",
        eac_union: "Таможенный союз ЕАС",
        ir_mimt: "Министерство торговли Ирана",
        chamber: "Торговая палата Гиляна",
        russian_embassy: "Одобрено Посольством"
      }
    }
  },
  ar: {
    hero: {
      slides: [
        {
          title: "تصدير الكيوي الإيراني الفاخر",
          highlight: "الكيوي الإيراني",
          desc: "تزويد الأسواق الدولية بأجود أنواع الكيوي الإيراني مع عبوات خشبية وكرتونية ممتازة ودعم لوجستي مبرد ومتكامل لضمان وصولها بنضارة تامة.",
          badge: "منشأة آستارا المتطورة",
          specs: [
            "مؤشر السكر بريكس: 6.2% - 6.5%+ كحد أدنى",
            "التعبئة: كرتون وصناديق خشبية فاخرة",
            "الشحن: شاحنات مبردة مجهزة إلى روسيا"
          ]
        },
        {
          title: "توزيع مبيعات الجملة المباشرة إلى روسيا والاتحاد الأوراسي",
          highlight: "روسيا والاتحاد الأوراسي",
          desc: "توفير نقل مبرد ومحكم مع تخليص جمركي سلس عبر ممرات آستارا، باكو، وموانئ بحر قزوين.",
          badge: "خطوط فرز ومعايرة ميكانيكية",
          specs: [
            "الدفع: روبل ورال إيراني مباشرة دون وسيط",
            "أدنى طلب: 24 طنًا (حاوية واحدة كاملة)",
            "المستندات: شهادة صحية نباتية جمركية 100%"
          ]
        },
        {
          title: "مستودعات تبريد مجهزة بالتحكم في الغلاف الجوي",
          highlight: "مستودعات التبريد الفنية",
          desc: "تخزين أكثر من 12000 طن من المنتجات الطازجة في مستويات رطوبة مثالية وغرف تنقية الإيثيلين الحديثة.",
          badge: "تأسست عام 2001 - أكثر من 23 عامًا",
          specs: [
            "القدرة التخزينية: 12,000+ طن محليًا",
            "الرطوبة: 90% - 95% تحكم نسبي بالرطوبة",
            "الفرز: معايرة الوزن بصرية بالليزر"
          ]
        }
      ],
      buttons: {
        catalog: "عرض كتالوج التصدير",
        contact: "الاتصال بمكتب المبيعات"
      }
    },
    highlights: {
      bannerTitle: "مع جيلافروت، تذوق الخضار والفواكه الإيرانية الطبيعية في كل ركن من أركان العالم",
      bannerDesc: "تسليم مباشر للمحصول من حقول جيلان الشمالية الغنية بالتربة الخصبة عبر خطوط فرز آلية حديثة إلى محطات البيع بالجملة الدولية.",
      items: [
        {
          badge: "🇮🇷",
          title: "المنتجات الإيرانية",
          desc: "تنتج إيران خضروات وفواكه متنوعة بفضل مناخها الذي يمتد على فصول السنة الأربعة. توفر جيلافروت جودة مثالية تلبي المعايير العالمية لعملائها كافة عبر القارات.",
          footer: "100% منشأ عضوي طبيعي"
        },
        {
          badge: "🏆",
          title: "شركة جيلا فروت",
          desc: "تعتبر شركة سبز غستران جيلا فروت من رواد فرز وتعبئة الفواكه الطازجة في إيران، معتمدة على التجهيزات والمقاييس الدولية وأحدث تقنيات المعايرة البصرية.",
          footer: "تأسست رسمياً عام 2001"
        },
        {
          badge: "🚚",
          title: "خدمات التصدير",
          desc: "بفضل خبرة طويلة في النقل المبرد والشحن الدولي، تعد شركة جيلافروت الشريك الموثوق لتصدير الخضار والفاكهة وإجراءات الحجر الزراعي والتخليص الجمركي السريع.",
          footer: "لوجستيات الخليج العربي وأوراسيا"
        }
      ]
    },
    gateway: {
      headingPart1: "جيلافروت: ",
      headingPart2: "بوابتك الذهبية إلى عالم الخضار والفواكه الإيرانية الفاخرة",
      desc1: "بالاعتماد على سنوات من الخبرة والمهارة في مجال غسيل وتدريج وتعبئة المنتجات الزراعية الطازجة، تتبوأ شركة جيلافروت الريادة في قطاع التصدير الإيراني. تستخدم المجموعة أحدث الآلات لفرز الكيوي بوزن وأبعاد بالغة الدقة وتصفيتها من الشوائب والعيوب فحصاً بالعين الإلكترونية واليدوية.",
      desc2: "تساهم التعبئة المستعملة في الاحتفاظ برطوبة ومذاق وصلاحية الثمار لفترات طويلة حتى وصولها إلى يد المستهلك الأخير بنضارتها الأصلية.",
      calendar: {
        title: "جدول تصدير المحاصيل",
        desc: "لتخطيط طلبياتكم السنوية بدقة، يرجى مراجعة جدول التوافر الموسمي لكل صنف من محاصيلنا لمعرفة مواعيد البدء والانتهاء وطاقة الإنتاج.",
        btn: "عرض تقويم المحاصيل"
      },
      products: {
        title: "منتجات التصدير لدينا",
        desc: "نحن في طليعة مزودي وموزعي الخضروات الورقية والطهي والبيوت المحمية في الشرق الأوسط وبلدان رابطة الدول المستقلة.",
        btn: "إظهار قائمة المنتجات"
      }
    },
    features: {
      topBadge: "✨ بفضل التنوع المناخي الفريد وفصول إيران الأربعة",
      title: "أبرز مميزات منتجات التصدير والفرز",
      desc: "تتمتع المنتجات الزراعية هنا بمستويات سكر طبيعية ومذاق كثيف بفضل خصوبة البيئة الجغرافية. الغسيل الدقيق والتفتيش الفيزيائي المزدوج هما لغتنا اليومية لضمان سلامة الغذاء.",
      items: [
        { title: "سلامة وجودة الثمار", desc: "طازجة بالكامل / خالية من علامات التلف أو الذبول" },
        { title: "الصلابة والنضج الكافي", desc: "قوام صلب ومتماسك ولا توجد رضوض" },
        { title: "خالية من البقع والخدوش", desc: "مظهر خارجي طبيعي متجانس وخالي من الجفاف" },
        { title: "تجانس المقاس والوزن", desc: "متطابق تماماً مع مواصفات الصفقة المقابلة لطلبكم" },
        { title: "وجود علامة تجارية موثوقة", desc: "تسجيل بيانات المُصدر الرسمي لتسهيل التتبع والتوثيق" },
        { title: "الامتثال للمواصفات", desc: "مواكبة اللوائح الصحية والقوانين الجمركية لموانئ الاستلام" },
        { title: "الحد الأدنى من العيوب", desc: "نسبة هامش خطأ لا تتعدى المقادير العالمية المسموح بها" },
        { title: "نكهة ورائحة عطرية طبيعية", desc: "رائعة ونقية ومبرأة بالكامل من علامات الآفات والأمراض" }
      ],
      sliderCaption: "مراحل وخطوات ضمان الجودة للتصدير",
      stages: [
        "فرز وتدريج الكرفس الطازج",
        "صالة تفتيش الخس في المنطقة المعقمة",
        "خط معايرة الفلفل الرومي الملون",
        "تحزيم المنصات الخشبية في مستودع التبريد",
        "الفحص الفيزيائي للتأكد من مستويات الرطوبة ومقاومة الجفاف",
        "المراجعة الختامية لثمار المزارع قبل عملية الشحن"
      ]
    },
    portfolio: {
      topBadge: "🌿 محفظة جيلافروت الزراعية الممتازة 🌿",
      title: "أصناف مختارة من خضرواتنا وفواكهنا المصدرة",
      desc: "يتم فحص وتعبئة البضائع بفرز بصري فائق، وتنظيفها بعناية، ثم تجميعها على ألواح خشبية صلبة وكرتون مقوى.",
      specsBtn: "المواصفات الفنية للتصدير",
      stamp: "خيار ممتاز",
      productDesc: "درجة تصدير فائقة الجودة، متوافقة كلياً مع قوانين الحجر وشهادات الفحص في البلدان المستوردة.",
      allProductsBtn: "عرض كل خيارات ودليل المنتجات الزراعية للتصدير",
      productsNames: {
        e1: "تصدير الكيوي الأخضر الهايوارد الإيراني الفاخر",
        e2: "الثوم الإيراني الطازج مباشرة من مزارع جيلان",
        e3: "تصدير البطيخ الأحمر الإيراني الدائري والبيضاوي",
        e4: "خس رومانو، آيسبرغ وأصناف الخضروات الورقية",
        e5: "الفلفل الرومي الملون للبيوت المحمية والحقول",
        e6: "طماطم البيوت المحمية بالغة النقاء والجودة",
        e7: "بقدونس طازج عالي الجودة بنضارة دائمة",
        e8: "شبت معطر ومغسول تم قطفه طازجاً وتعبئته يومياً",
        e9: "الثوم الجاف الأبيض والأرجواني المصنف بنظافة تامة",
        e10: "العنب الخالي من البذور (الأبيض والأحمر) الفاخر",
        e11: "بروكلي أخضر مغسول وطازج بالكامل",
        e12: "كرز هيرفورد سوبر تصدير بلون داكن ومذاق رائع"
      },
      productTags: {
        Kiwi: "كيوي",
        Garlic: "ثوم",
        Watermelon: "بطيخ",
        Lettuce: "خس",
        Pepper: "فلفل",
        Tomato: "طماطم",
        Parsley: "بقدونس",
        Dill: "شبت",
        Grapes: "عنب",
        Broccoli: "بروكلي",
        Cherries: "كرز"
      }
    },
    story: {
      badge: "نبذة عن تاريخنا",
      titlePart1: "منذ غرس الشتلة الأولى حتى الأسواق العالمية: ",
      titlePart2: "قصة نجاح جيلافروت",
      desc: "من شتلة يافعة ترعرعت في تربة الشمال المعطاء، نمت شركة جيلافروت عبر عقدين من المثابرة لتصير شجرة راسخة في مضمار التجارة الدولية. إن فخر 23 عاماً من التصدير يعكس تفانينا في الحفاظ على المذاق وسلسلة الإمداد للعملاء حول العالم. ونعتز بمشاركتنا الكبيرة في توفير فرص العمل لمئة وخمسين كادراً تجارياً وخبيراً محترفاً.",
      yearsText: "سنة",
      outcomeText: "من الجهد والالتزام الزراعي",
      stats: {
        gardens: "المزارع والحدائق المتعاقدة",
        products: "أصناف الخضار والفاكهة",
        partners: "الشركاء التجاريين النشطين"
      }
    },
    news: {
      badge: "📰 أحدث المستجدات",
      title: "مدونة تصدير الفواكه: كل ما تود معرفته",
      subtitle: "اطلع على خدمات النقل المبرد واللوائح الجمركية وتحديثات طرق التخزين في مستودعاتنا.",
      readMore: "قراءة المزيد ➜"
    },
    freshness: {
      badge: "الالتزام التام بالنضارة وصلاحية البضائع",
      title: "جيلافروت: رمز الأصالة والفاعلية والجاذبية في التسليم",
      desc1: "نستفيد من أحدث تقنيات الترطيب البارد والتحكم المتطور في مستويات ثاني أكسيد الكربون لضمان بقاء المنتج ممتلئاً ونضراً وخالياً من كرمشة الجفاف السطحية.",
      desc2: "بدءاً من الكيوي المخملي وصولاً إلى الحمضيات الوفيرة، يتم وزن ومعايرة المنتجات في مراكزنا بولاية جيلان. نهيئ الظروف المناخية في مخازننا للحفاظ على جودة الأوراق والثمار وتأجيل عمليات التقادم.",
      highlight: "🌟 معتقدنا الراسخ في شركة جيلافروت هو أن شركائنا في الأعمال يستحقون فقط الأجود والأنضر دائماً."
    },
    certifications: {
      badge: "معاً نبني شراكات النجاح",
      title: "مجمل الاعتمادات والشهادات الرسمية والوفود",
      testimonialHeading: "آراء شركائنا من تجار الجملة",
      testimonialButtons: {
        back: "◀ السابق",
        next: "التالي ▶"
      },
      badgeNames: {
        enamad: "الثقة الإلكترونية الرسمية",
        samandehi: "منتدى الإعلام الرقمي",
        tuv_center: "شهادة TÜV الألمانية",
        gs1_global: "الترميز العالمي GS1",
        eac_union: "اتحاد الجمارك الأوراسي",
        ir_mimt: "وزارة الصناعة والتجارة",
        chamber: "غرفة تجارة جيلان",
        russian_embassy: "تأييد سفارة روسيا"
      }
    }
  },
  tr: {
    hero: {
      slides: [
        {
          title: "Premium İran Kivisinin İhracatı",
          highlight: "İran Kivisi",
          desc: "Uluslararası pazarlara en yüksek kalitede İran kivisi sağlamak, premium ahşap/karton ambalajlama ve güvenli frigorifik soğuk ihracat lojistiği.",
          badge: "Astara Gelişmiş Tesisi",
          specs: [
            "Brix Şeker Oranı: en az %6.2 - %6.5 ve üzeri",
            "Mekanik Paketleme: Premium Ahşap/Karton Kutu",
            "Transit Süreç: Rusya'ya Frigorifik Tırlar"
          ]
        },
        {
          title: "Rusya ve Avrasya Ekonomik Birliğine Doğrudan Toptan Tedarik",
          highlight: "Rusya ve Avrasya",
          desc: "Sıcaklık kontrollü frigorifik taşımacılık ve Astara, Bakü ve Hazar deniz limanları üzerinden sorunsuz gümrükleme hizmetleri.",
          badge: "Optik Kalibrasyon Hatları",
          specs: [
            "Ödeme Şekli: Doğrudan Ruble / Riyal Havalesi",
            "Minimum Sipariş: 24 Ton (1 Tır Kargo)",
            "Belgeler: %100 Bitki Sağlık Sertifikalı"
          ]
        },
        {
          title: "Kontrollü Atmosferli Soğuk Hava Depoları",
          highlight: "Soğuk Depolama",
          desc: "12.000 tonun üzerindeki taze mahsulü, özel nemlendirme üniteleri ve etilen arıtıcı odalarımızda ilk günkü tazeliğinde saklıyoruz.",
          badge: "Tesis Kuruluş 2001 - 23 Yıllık Deneyim",
          specs: [
            "Toplam Kapasite: Bölgede 12,000+ Ton",
            "Nem Seviyesi: %90 - %95 Bağıl Nem",
            "Ayıklama: Boyutsal optik ağırlık ölçümü"
          ]
        }
      ],
      buttons: {
        catalog: "Ticari Kataloğu İncele",
        contact: "Satış Masası ile İletişim"
      }
    },
    highlights: {
      bannerTitle: "GilaFruit ile dünyanın her köşesinde yerli İran sebze ve meyvelerinin tadına varın",
      bannerDesc: "Kuzey Gilan'ın verimli bölgelerindeki bahçelerden doğrudan toplanan mahsulün optik kalibrasyon makineleriyle ayıklanarak küresel dağıtım terminallerine teslimi.",
      items: [
        {
          badge: "🇮🇷",
          title: "İran Ürünleri",
          desc: "İran, dört mevsimlik iklim yapısı sayesinde oldukça geniş bir meyve ve sebze çeşitliliğine sahiptir. GilaFruit, bu zenginliği dünya pazarına hijyenik koşullarda sunmaktadır.",
          footer: "100% Organik ve Doğal Ürün"
        },
        {
          badge: "🏆",
          title: "GilaFruit Firması",
          desc: "Sebz Gostaran Gilan Fruit Co, bilinen ticari adıyla GilaFruit; taze meyve-sebze şerit kalibrasyon, ayıklama ve paketleme alanında modern makineleriyle sektöre öncülük eder.",
          footer: "KURULUŞ YILI 2001"
        },
        {
          badge: "🚚",
          title: "İhracat Hizmetleri",
          desc: "Uluslararası soğuk zincir taşımacılığı, sertifikasyon, sınır geçiş evrakları ve hızlı gümrük onay süreçlerinde meyve tüccarlarının çözüm ortağıyız.",
          footer: "AVRASYA VE KÖRFEZ LOJİSTİĞİ"
        }
      ]
    },
    gateway: {
      headingPart1: "GilaFruit: ",
      headingPart2: "İran Taze Sebze ve Meyve İhracatına Açılan Kapınız",
      desc1: "Taze meyve ve sebzelerin bilimsel yöntemlerle elleçlenmesi, ayıklanması, şık paket kutulara dizilmesi konularında şirketimiz İran sınırları içindeki referans marka kalitesindedir. Tesisimizde kurulu MAF RODA optik ayıklama hattı, kivileri milimetrik olarak tartarak kalibre etmekte, yüzey lekelerini süzerek kutuda tam uyum sağlamaktadır.",
      desc2: "Birinci sınıf hijyenik ambalaj hammaddelerinin kullanımı, nakliye esnasında kabuk sertliğinin ve meyve özsuyunun bozulmasına engel olur.",
      calendar: {
        title: "Ürün Sezon Takvimi",
        desc: "İhracat siparişlerinizi kusursuz planlamak için lütfen sebze ve meyvelerimizin yıllık hasat ve nakliyeye hazırlık takvimini kontrol edin.",
        btn: "Sezon Takvimini Gör"
      },
      products: {
        title: "İhraç Ürünlerimiz",
        desc: "Ortadoğu ve Bağımsız Devletler Topluluğu pazarlarındaki sera sebzeleri, salatalar ve yeşillik tedariğinde öncü konumdayız.",
        btn: "Ürünlerimizi Göster"
      }
    },
    features: {
      topBadge: "✨ İran'ın zengin mikroklimaları ve dört mevsimi sayesinde",
      title: "İhraç Ürünlerinin Önemli Kalite Kriterleri",
      desc: "İran topraklarındaki taze ürünler yüksek Brix şeker oranına ve benzersiz aroma yoğunluğuna sahiptir. Paketleme öncesi üçlü fiziksel muayene ve hızlı soğutma önceliğimizdir.",
      items: [
        { title: "Ürün tazeliği", desc: "Sıcak taze görünüm / Çürüme veya solma belirtilerinden tamamen arınmış" },
        { title: "Sertlik ve kıvam", desc: "Mükemmel sertlikte ve ezilmelere karşı dayanıklı esneklik" },
        { title: "Kusursuz kabuk yapısı", desc: "Kabukta su kaybı, siyah leke veya deformasyon bulunmaz" },
        { title: "Uyumlu ebatlar", desc: "Alıcıyla anlaşılan kalibre boyutunun her kutuda tam korunması" },
        { title: "Marka etiketleme", desc: "Tüm gümrüklerde geçerli resmi kayıtlı ihracatçı belgesi" },
        { title: "Uluslararası uyumluluk", desc: "Varma limanlarındaki ithalat sınırlamaları ve standartlara tam uyum" },
        { title: "Minimum tolerans payı", desc: "Yıllık tüzüklere uygun olarak kutularda %5'in altında tolerans" },
        { title: "Doğal koku ve lezzet", desc: "Tesis içi özel koku kontrolü, hastalıklara karşı tam bağışıklık" }
      ],
      sliderCaption: "İHRACAT KALİTE VE AYIKLAMA ADIMLARI",
      stages: [
        "Taze Kerevizlerin Ayıklanması ve Boylanması",
        "Sterilize Salonda Göbek Marul Seçim Odası",
        "Renkli Dolmalık Biber Kalibrasyon Bandı",
        "Soğuk Hava Deposunda Paletlerin Çemberlenmesi",
        "Su Kaybını Önlemek Amacıyla Nem Muayenesi",
        "Yükleme Öncesinde Tarla Hasat Kalite Denetimi"
      ]
    },
    portfolio: {
      topBadge: "🌿 GilaFruit İHTİSAS ÜRÜNLERİ 🌿",
      title: "İhracatını Gerçekleştirdiğimiz Sebze ve Meyveler",
      desc: "Ürünlerimiz tescilli tarım arazilerinden toplanır, elektronik bant üzerinde taranır ve sağlam paletler üzerinde gemi veya tırlara yüklenir.",
      specsBtn: "İhracat Teknik Özellikleri",
      stamp: "ÖZEL SEÇİM",
      productDesc: "Süper kalite ihracat sınıfı, Rusya ve çevre coğrafyaların bitki koruma tebliğlerine tamamen uygundur.",
      allProductsBtn: "Tüm Meyve - Sebze İhracat Kataloğunu Görüntüle",
      productsNames: {
        e1: "Seçilmiş İran Hayward Yeşil Kivi İhracatı",
        e2: "Gilan Eyaletinden Taze İhracatlık Sarımsak",
        e3: "İran Yuvarlak ve Oval Siyah Karpuz İhracatı",
        e4: "Romano Marul, Aysberg ve Taze Yeşillikler",
        e5: "Sera ve Tarla Tipi Renkli Dolmalık Biberler",
        e6: "Birinci Sınıf İhracatlık Sera Domatesleri",
        e7: "Daha Uzun Ömürlü Taze İhracatlık Maydanoz",
        e8: "Sıcak Taze Dereotu (Eşit Demetlerde Temiz)",
        e9: "Seçilmiş Beyaz ve Mor Kuru Sarımsak Çeşidi",
        e10: "Çekirdeksiz Sofralık Üzüm (Siyah ve Beyaz)",
        e11: "Taze İhracatlık Yeşil Brokoli Başları",
        e12: "Super Kalibre Koyu Kırmızı ve Siyah Kirazlar"
      },
      productTags: {
        Kiwi: "Kivi",
        Garlic: "Sarımsak",
        Watermelon: "Karpuz",
        Lettuce: "Marul",
        Pepper: "Biber",
        Tomato: "Domates",
        Parsley: "Maydanoz",
        Dill: "Dereotu",
        Grapes: "Üzüm",
        Broccoli: "Brokoli",
        Cherries: "Kiraz"
      }
    },
    story: {
      badge: "Kısa Bir Tanıtım",
      titlePart1: "Ufak Bir Fidandan Küresel İhracata: ",
      titlePart2: "GilaFruit'in Öyküsü",
      desc: "Bundan yirmi yılı aşkın bir süre önce toprağa dikilen küçük bir fidan, adanmışlıkla büyütülerek dış ticaretin asırlık bir çınarına dönüştü. Şirketimizin 23 yıllık ihracat başarısı, iş ortaklarımıza verdiğimiz dürüst meyve lojistiği sözünün nişanesidir. Bugün bünyemizde barındırdığımız 150 uzman personelimizle iftihar etmekteyiz.",
      yearsText: "YILLIK",
      outcomeText: "MAHSUL VE GÜVEN DENEYİMİ",
      stats: {
        gardens: "Sözleşmeli Bahçeler",
        products: "Taze Ürün Kalemi",
        partners: "Aktif Ticari Ortaklar"
      }
    },
    news: {
      badge: "📰 Sektörden Haberler",
      title: "Uzman Blogu: Meyve İhracatı Hakkında Bilgiler",
      subtitle: "GilaFruit sevkiyat programlarından, gümrük kapılarındaki son durumlara kadar ihracata dair taze gelişmeleri takip edin.",
      readMore: "Devamını Oku ➜"
    },
    freshness: {
      badge: "Freshlik ve Tazelik Sözümüz",
      title: "GilaFruit: Sebze ve Meyvede Kalitenin Güvencesi",
      desc1: "Ürünlerimizi ön-soğutma ve akıllı nem verme cihazlarımızla koruyor, bu sayede müşterilerimize ilk günkü kabuk sertliğinde ve sululuğunda ulaştırıyoruz.",
      desc2: "Kadifemsi kivilerden en taze sera sebzelerine kadar tüm ürünlerin kalibrasyonunu Gilan eyaletindeki paketleme merkezimizde gerçekleştiriyoruz. Hücrelerdeki karbondioksit oranını kontrol ederek yaşlanmayı geciktiriyoruz.",
      highlight: "🌟 GilaFruit olarak en derin inancımız, iş ortaklarımızın her zaman en taze ve en kaliteli mahsulü almaya layık olduğudur."
    },
    certifications: {
      badge: "Zirvede Beraber Yürüyoruz",
      title: "Resmi Belgelerimiz, Sertifikalarımız ve Ödüllerimiz",
      testimonialHeading: "Toptancı Müşterilerimizin Yorumları",
      testimonialButtons: {
        back: "◀ Geri",
        next: "İleri ▶"
      },
      badgeNames: {
        enamad: "Resmi Elektronik Güven",
        samandehi: "Dijital Medya Platformu",
        tuv_center: "Alman TÜV Belgesi",
        gs1_global: "GS1 Küresel Kodlama",
        eac_union: "Avrasya Gümrük Birliği",
        ir_mimt: "Ticaret Bakanlığı Onayları",
        chamber: "Gilan Ticaret Odası",
        russian_embassy: "Rusya Konsolosluğu Onaylı"
      }
    }
  },
  hi: {
    hero: {
      slides: [
        {
          title: "प्रीमियम ईरानी कीवी का निर्यात",
          highlight: "ईरानी कीवी",
          desc: "अंतरराष्ट्रीय बाजारों में बेहतरीन गुणवत्ता वाली ईरानी हेवर्ड कीवी, प्रीमियम लकड़ी और कार्टन पैकेजिंग और सुरक्षित रेफ्रिजेरेटेड लॉजिस्टिक्स की आपूर्ति करना।",
          badge: "आस्तारा आधुनिक सुविधा",
          specs: [
            "ब्रिक्स शुगर: न्यूनतम 6.2% - 6.5%+",
            "पैकेजिंग शैली: प्रीमियम कार्टन और लकड़ी का बॉक्स",
            "पारगमन विधि: रूस के लिए रेफ्रिजेरेटेड कारगो"
          ]
        },
        {
          title: "रूस और यूरेशियन आर्थिक संघ को प्रत्यक्ष थोक आपूर्ति",
          highlight: "रूस और यूरेशियन",
          desc: "आस्तारा, बाकू और कैस्पियन बंदरगाहों के माध्यम से तापमान-नियंत्रित परिवहन और निर्बाध सीमा शुल्क निकासी सेवाएं प्रदान करना।",
          badge: "स्वचालित छँटाई मशीनें",
          specs: [
            "भुगतान विकल्प: प्रत्यक्ष रूबल / ईरानी रियाल लेनदेन",
            "न्यूनतम ऑर्डर: 24 टन (एक पूर्ण कंटेनर)",
            "दस्तावेज़: 100% फाइटोसैनिटरी स्वीकृत"
          ]
        },
        {
          title: "नियंत्रित वायुमंडलीय कोल्ड स्टोरेज सुविधाएं",
          highlight: "कोल्ड स्टोरेज प्रणाली",
          desc: "आधुनिक एथिलीन स्क्रबर और आर्द्रता-नियंत्रित कक्षों में 12,000 टन से अधिक ताजा उपज का सुरक्षित भंडारण।",
          badge: "स्थापना 2001 - 23 वर्षों का अनुभव",
          specs: [
            "कुल भंडारण क्षमता: 12,000+ टन स्थानीय स्तर पर",
            "आर्द्रता स्तर: 90% - 95% सापेक्ष आर्द्रता",
            "छँटाई तकनीक: ऑप्टिकल वजन और आकार अंशांकन"
          ]
        }
      ],
      buttons: {
        catalog: "व्यापार सूची देखें",
        contact: "बिक्री डेस्क से संपर्क करें"
      }
    },
    highlights: {
      bannerTitle: "गीलाफ्रूट के साथ, दुनिया के हर कोने में ईरानी फलों और सब्जियों का प्रामाणिक स्वाद लें",
      bannerDesc: "उत्तरी गिलान के समृद्ध बगीचों से सीधे कल्पित फलों का प्रसंस्करण और स्वचालित ऑप्टिकल छँटाई के बाद वैश्विक थोक टर्मिनलों पर डिलीवरी।",
      items: [
        {
          badge: "🇮🇷",
          title: "ईरानी कृषि उत्पाद",
          desc: "ईरान अपनी चार मौसमों की अनुकूल जलवायु के कारण अनूठे फल और सब्जियां उगाता है। गीलाफ्रूट वैश्विक मानकों के अनुसार इन्हें दुनिया के बाजारों में पेश करता है।",
          footer: "100% जैविक और उत्तम फल"
        },
        {
          badge: "🏆",
          title: "गीलाफ्रूट कंपनी",
          desc: "सब्ज गोस्तारन गिलान फ्रूट कंपनी (ट्रेड नेम गीलाफ्रूट) अत्याधुनिक स्वचालित छँटाई और सब्जियों की स्वच्छ पैकेजिंग में ईरान की एक अग्रणी कंपनी है।",
          footer: "स्थापना वर्ष 2001"
        },
        {
          badge: "🚚",
          title: "निर्यात सेवाएं",
          desc: "अंतरराष्ट्रीय शिपमेंट के विशाल अनुभव के साथ, गीलाफ्रूट कृषि उत्पादकों और थोक खरीदारों का एक विश्वसनीय भागीदार है। हम कस्टम और फाइटो का ख्याल रखते हैं।",
          footer: "यूरेशिया और खाड़ी लॉजिस्टिक्स"
        }
      ]
    },
    gateway: {
      headingPart1: "गीलाफ्रूट: ",
      headingPart2: "ईरानी फलों और सब्जियों के निर्यात का आपका विश्वसनीय प्रवेश द्वार",
      desc1: "ताजा फलों और सब्जियों की आधुनिक छँटाई, वाशिंग और वैज्ञानिक पैकेजिंग के क्षेत्र में गीलाफ्रूट ईरान के शीर्ष स्तर के ब्रांडों में गिना जाता है। हमारा प्लांट कीवी के वजन और आकार को मिलीमीटर सटीकता से कैलिब्रेट करने के लिए MAF RODA तकनीक का उपयोग करता है, जिससे फलों में एकरूपता बनी रहती है।",
      desc2: "उच्च गुणवत्ता वाले पैकेजिंग कच्चे माल के उपयोग से पारगमन के दौरान फलों की ताजगी और रस बरकरार रहता है जब तक कि वे अंतिम ग्राहकों तक न पहुंचें।",
      calendar: {
        title: "उत्पाद आपूर्ति कैलेंडर",
        desc: "अपने ऑर्डर की सुचारू रूप से योजना बनाने के लिए कृपया हमारे मौसमी उपलब्धता कैलेंडर की जांच करें ताकि खरीदारी का सही समय पता चल सके।",
        btn: "कैलेंडर सूची देखें"
      },
      products: {
        title: "हमारे प्रमुख उत्पाद",
        desc: "हम मध्य पूर्व और सीआईएस देशों में ग्रीनहाउस सब्जियों और ताजी सब्जियों की बड़े पैमाने पर आपूर्ति करने वाले शीर्ष प्रदाता हैं।",
        btn: "उत्पाद सूची दिखाएं"
      }
    },
    features: {
      topBadge: "✨ ईरान की समृद्ध भौगोलिक जलवायु और चार विशिष्ट मौसमों के लिए धन्यवाद",
      title: "निर्यात कृषि उत्पादों के मुख्य गुणवत्ता कारक",
      desc: "ईरान की समृद्ध मिट्टी फलों को उत्तम स्वाद और उत्कृष्ट प्राकृतिक जूस घनत्व प्रदान करती है। पैकेजिंग से पहले ट्रिपल भौतिक निरीक्षण और त्वरित कूलिंग हमारी मुख्य विशेषता है।",
      items: [
        { title: "उत्पाद की ताजगी", desc: "पूरी तरह से ताजा / सड़न या मुरझाने के लक्षणों से मुक्त" },
        { title: "दृढ़ता और पूर्ण परिपक्वता", desc: "दृढ़ संरचना के साथ कोई चोट या विकृति नहीं" },
        { title: "दाग-धब्बों से रहित त्वचा", desc: "प्राकृतिक बाहरी मखमली त्वचा और सूखापन से पूरी तरह मुक्त" },
        { title: "समान आकार और वजन", desc: "समझौते के दौरान तय किए गए कैलिबर मानकों के बिल्कुल अनुरूप" },
        { title: "विश्वसनीय ब्रांड लेबल", desc: "सरकारी मान्यता प्राप्त निर्यातक के रूप में प्रेषण का पूरा विवरण" },
        { title: "वैश्विक मानक अनुपालन", desc: "गंतव्य देशों के आयात विनियमों और कृषि सुरक्षा नियमों का शत-प्रतिशत पालन" },
        { title: "न्यूनतम भौतिक दोष", desc: "प्रति कंटेनर भौतिक कली प्रकार का दोष सहिष्णुता 5% से कम" },
        { title: "प्राकृतिक सुगंध और स्वाद", desc: "प्रकृति की सुगंध, बीमारियों और संक्रमणों के लक्षणों से मुक्त" }
      ],
      sliderCaption: "निर्यात गुणवत्ता नियंत्रण के कदम",
      stages: [
        "ताजा अजवाइन की छँटाई और अंशांकन",
        "कीटमुक्त क्षेत्र में सलाद पत्ता की पैकिंग",
        "शिमला मिर्च ग्रेडिंग बेल्ट प्रक्रिया",
        "शीतगृह में सुरक्षित पैलेट क्रेन प्रक्रिया",
        "जलयोजन और शारीरिक सूखापन की भौतिक समीक्षा",
        "परिवहन से पहले मूक फसल खेतों का अंतिम गुणवत्ता सत्यापन"
      ]
    },
    portfolio: {
      topBadge: "🌿 गीलाफ्रूट प्रीमियम निर्यात उत्पाद पोर्टफोलियो 🌿",
      title: "उत्कृष्ट ईरानी ताजी सब्जियों और फलों का चयनात्मक संग्रह",
      desc: "हमारी सभी फसलें कड़े स्वच्छता मानदंडों के तहत इलेक्ट्रॉनिक रूप से श्रेणीबद्ध की जाती हैं, धोई जाती हैं और मजबूत कार्टन में लोड की जाती हैं।",
      specsBtn: "निर्यात तकनीकी विनिर्देश",
      stamp: "प्रीमियम चयन",
      productDesc: "विशेष गुणवत्ता ग्रेड, जो कि आयात करने वाले देशों के कड़े फाइटोसैनिटरी निरीक्षण कोड के बिल्कुल अनुरूप है।",
      allProductsBtn: "सभी फलों और सब्जियों का पूरा निर्यात व्यापार कूट देखें",
      productsNames: {
        e1: "उत्कृष्ट ईरानी हेवर्ड हरी कीवी का थोक निर्यात",
        e2: "गिलान प्रांत से सीधे प्राप्त ताजा निर्यात योग्य लहसुन",
        e3: "ईरानी रसदार तरबूज (गोल और अंडाकार प्रकार) का आयात",
        e4: "रोमानो लेट्यूस, आइसबर्ग और ताजी हरी पत्तेदार सब्जियां",
        e5: "ग्रीनहाउस और खेतों दोनों किस्म की रंगीन शिमला मिर्च",
        e6: "प्रीमियम गुणवत्ता वाले उत्कृष्ट लाल कड़े टमाटर",
        e7: "ताजी और सुवासित निर्यात योग्य हरी धनिया पत्ती",
        e8: "इष्टतम सफाई और गुणवत्ता के साथ निर्यात योग्य डिल पत्ती",
        e9: "सुखाया हुआ सफेद और बैंगनी लहसुन ग्रेड-1 प्रीमियम",
        e10: "थोक खरीदारों के लिए ईरानी बीज रहित अंगूर (लाल/सफेद)",
        e11: "पूरी ताजगी के साथ हरी ब्रोकली निर्यात योग्य किस्म",
        e12: "विशेष निर्यात योग्य गहरे काले और लाल मीठे चेरी"
      },
      productTags: {
        Kiwi: "कीवी",
        Garlic: "लहसुन",
        Watermelon: "तरबूज",
        Lettuce: "सलाद",
        Pepper: "शिमला मिर्च",
        Tomato: "टमाटर",
        Parsley: "धनिया",
        Dill: "डिल",
        Grapes: "अंगूर",
        Broccoli: "ब्रोकली",
        Cherries: "चेरी"
      }
    },
    story: {
      badge: "हमारी पृष्ठभूमि संक्षिप्त रूप में",
      titlePart1: "पहले पौधे से वैश्विक पहुंच की यात्रा: ",
      titlePart2: "गीलाफ्रूट की गौरवगाथा",
      desc: "गिलान की उपजाऊ मिट्टी में दो दशक पहले बोया गया एक छोटा सा पौधा कठोर परिश्रम से व्यापार क्षेत्र का वटवृक्ष बन गया। हमारे 23 वर्षों का निर्यात इतिहास हमारे ग्राहकों को स्वस्थ और शुद्ध फलों की आपूर्ति के अटूट वादे का प्रतीक है। आज हम 150 से अधिक कुशल कर्मियों की टीम के साथ व्यापार में नई ऊंचाइयों को छू रहे हैं।",
      yearsText: "वर्ष",
      outcomeText: "समृद्ध कृषि और व्यापार का सफर",
      stats: {
        gardens: "अनुबंधित खेत और उद्यान",
        products: "ताजा फलों और सब्जियों की किस्में",
        partners: "सक्रिय व्यापार भागीदार"
      }
    },
    news: {
      badge: "📰 कृषि व्यापार समाचार",
      title: "ब्लॉग: फल निर्यात के बारे में महत्वपूर्ण युक्तियाँ",
      subtitle: "शीतगृह भंडारण, आयात विनियमों और रेफ्रिजेरेटेड पारगमन शुल्क के नवीनतम विवरण पढ़ें।",
      readMore: "पूरा विवरण पढ़ें ➜"
    },
    freshness: {
      badge: "ताजगी और मूल स्वरूप बनाए रखने का वादा",
      title: "गीलाफ्रूट: शुद्धता, गुणवत्ता और निरंतर चमक की पहचान",
      desc1: "हम फलों की मखमली परत को बनाए रखने के लिए कोल्ड चेन तकनीक का उपयोग करते हैं जिससे फल मुरझाते नहीं और पारगमन में उनका चमक बरकरार रहता है।",
      desc2: "कीवी से लेकर हरी सब्जियों तक, सभी फसलों का अंशांकन गिलान सुविधा में स्वच्छता के उच्च मानदंडों के तहत किया जाता है। कोल्ड रूम में अनुकूलित कार्बन डाइऑक्साइड स्तर फलों के पकने की प्रक्रिया को सुचारू रूप से नियंत्रित करता है।",
      highlight: "🌟 हमारा दृढ़ विश्वास है कि हमारे व्यापारिक भागीदार केवल सर्वोत्तम गुणवत्ता और बेजोड़ ताजगी प्राप्त करने के हकदार हैं।"
    },
    certifications: {
      badge: "सफलता की नई राहें साथ मिलकर बनाना",
      title: "गवर्नमेंट लाइसेंस, सर्टिफिकेशन और मानद उपाधियां",
      testimonialHeading: "हमारे थोक खरीदारों और भागीदारों की प्रतिक्रिया",
      testimonialButtons: {
        back: "◀ पिछला",
        next: "अगला ▶"
      },
      badgeNames: {
        enamad: "राष्ट्रीय ई-ट्रस्ट सर्टिफिकेट",
        samandehi: "डिजिटल मीडिया फोरम",
        tuv_center: "जर्मन TÜV सर्टिफिकेट",
        gs1_global: "GS1 वैश्विक कोडिंग",
        eac_union: "यूरेशिया सीमा शुल्क संघ",
        ir_mimt: "उद्योग और व्यापार मंत्रालय",
        chamber: "गिलान चैंबर ऑफ कॉमर्स",
        russian_embassy: "रूसी दूतावास द्वारा अनुमोदित"
      }
    }
  },
  uz: {
    hero: {
      slides: [
        {
          title: "Premium Eron Kivisining Eksporti",
          highlight: "Eron Kivisi",
          desc: "Xalqaro boorga yuqori sifatli Eron Xeyvord kivilarini sifatli yog'och va karton idishlarda sovutilgan transport lojistikasi orqali yetkazib berish.",
          badge: "Astara Zamonaviy Markazi",
          specs: [
            "Brix shakar darajasi: kamida 6.2% - 6.5%+",
            "Qadoqlash turi: Premium Karton va Yog'och quti",
            "Tranzit turi: Rossiyaga Refrijerator yuklar"
          ]
        },
        {
          title: "Rossiya va Evropa Ittifoqiga To'g'ridan-to'g'ri Ulgurji Yetkazish",
          highlight: "Rossiya va Evroosiyo",
          desc: "Astara, Boku va Kaspiy dengiz yo'llari orqali harorat nazorati ostida sifatli transport va bojxona rasmiylashtiruv xizmatlari.",
          badge: "Avtomatik Saralash Liniyalari",
          specs: [
            "To'lov shakli: To'g'ridan-to'g'ri Rubl / Eron rialida",
            "Minimal buyurtma: 24 tonna (1 ta konteyner kargo)",
            "Hujjatlar: 100% Fitosofiya tasdiqlangan"
          ]
        },
        {
          title: "Nazorat Qilinadigan Haroratli Muzxonalarda Saqlash",
          highlight: "Muzxona Saqlash",
          desc: "Zamonaviy etilen tozalagichlar va mukammal namlik nazorati ostida 12 000 tonnadan ortiq yangi mevalarni saqlash.",
          badge: "Tashkil etilgan 2001 - 23 yillik tajriba",
          specs: [
            "Umumiy hajmi: Mahalliy darajada 12 000+ tonna",
            "Namlik darajasi: 90% - 95% nisbiy namlik",
            "Saralash: Optik og'irlik kalibratsiyasi"
          ]
        }
      ],
      buttons: {
        catalog: "Sanoat Katalogini Ko'rish",
        contact: "Sotish Bo'limi Bilan Aloqa"
      }
    },
    highlights: {
      bannerTitle: "GilaFruit bilan dunyoning har bir burchagida Eron sabzavot va mevalarining tabiiy ta'mini his qiling",
      bannerDesc: "Gilon viloyati bog'laridan to'plangan mahsulotning avtomatik optik saralash liniyasi orqali qayta ishlanib, xalqaro ulgurji terminallarga yetkazilishi.",
      items: [
        {
          badge: "🇮🇷",
          title: "Eron Mahsulotlari",
          desc: "Eron to'rt faslli iqlimi boziga turli xil meva va sabzavotlar yetishtiradi. GilaFruit xavfsiz gigiyena doirasida ularni jahon bozorlariga yetkazib beradi.",
          footer: "100% Organik Shaffof Mahsulot"
        },
        {
          badge: "🏆",
          title: "GilaFruit Kompaniyasi",
          desc: "Sabz Gostaran Gilan Fruit Co (savdo nomi GilaFruit) – Eronda meva-sabzavotlarni saralash va qadoqlash sohasida avtomatik texnologiyalardan foydalanadigan peshqadam kompaniya.",
          footer: "TASHKIL QILINGAN YILI 2001"
        },
        {
          badge: "🚚",
          title: "Eksport Xizmatlari",
          desc: "Muzlatgichli transport, ruxsatnomalar, bojxona rasmiylashtiruvi va fitosanitariya ruxsatnomalarini bajarishda chet ellik meva importchilari uchun ishonchli hamkormiz.",
          footer: "YEVROOSIYo VA FORS KO'P LOJISTIKASI"
        }
      ]
    },
    gateway: {
      headingPart1: "GilaFruit: ",
      headingPart2: "Eron Yangi Meva va Sabzavotlar Eksportiga Ochilgan Darvozangiz",
      desc1: "Meva va sabzavotlarni saralash, yuvish va to'g'ri qadoqlash sohasida GilaFruit Erondagi nufuzli kompaniyalardan biridir. Fabrikamiz kivining og'irligini millimetr aniqlikgacha o'lchash va sirt nuqsonlarini bartaraf etish uchun MAF RODA optik saralash tizimidan foydalanadi.",
      desc2: "Birinchi toifali qadoqlash ashyolarini qo'llash yuklarni tashish davomida po'stlog'ining yumshab ketishiga va suvining qochishiga yo'l qo'ymaydi.",
      calendar: {
        title: "Mahsulotlar Sezon Takvimi",
        desc: "Sizning ulgurji buyurtmalaringizni to'g'ri loyihalashtirish uchun yil bo'yi mahsulot yetkazish davrlarini ko'rsatadigan takvimimizni tekshiring.",
        btn: "Sezon Takvimini Ko'rish"
      },
      products: {
        title: "Bizning Mahsulotlar",
        desc: "Yaqin Sharq va MDH mamlakatlari bozorlarida yangi poliz mahsulotlari va ko'katlar yetkazib berishda birinchi darajali ta'minotchi hisoblanamiz.",
        btn: "Mahsulotlarni Ko'rsatish"
      }
    },
    features: {
      topBadge: "✨ Eronning boy geografik tuprog'i va to'rt xil fasliga rahmat",
      title: "Eksport Mahsulotlarining Sifat Mezonlari",
      desc: "Eron meva va poliz mahsulotlari mo'l quyosh va unumdor tuproq sababli ajoyib Brix shakar darajasiga ega. Qadoqlashdan oldin uchinchi bosqichli tekshiruv bizning doimiy qoidamizdir.",
      items: [
        { title: "Mahsulot yangiligi", desc: "Sifatli yangi holat / chirish yoki sarg'ayish belgilaridan to'liq xoli" },
        { title: "Zichlik va me'yorida yetilganlik", desc: "Hech qanday ezilishlar yoki deformatsiyalarga chidamsiz bo'lmagan mustahkam po'st" },
        { title: "Sirtsiz va silliq teri", desc: "Teri suvsizlanishi va qora dog'lardan butunlay tozalanganligi" },
        { title: "Bir xil kalibr va og'irlik", desc: "Karton qutida bir xil o'lchovlarning saqlanishi" },
        { title: "Markali sertifikat", desc: "Barcha xalqaro bojxonalarda haqiqiy deb topilgan eksportchi to'g'risidagi ma'lumot" },
        { title: "Standartlarga muvofiqlik", desc: "Yetib borish portlaridagi dori-darmon va karantin qoidalariga 100% muvofiq" },
        { title: "Kamchiliklar miqdori kamligi", desc: "Yuk ichidagi ruxsat etilgan xatolik miqdori 5% dan kamligi" },
        { title: "Tabiiy hid va maza", desc: "Hech qanday sun'iy hidlardan tashqari darmondorilar hidi" }
      ],
      sliderCaption: "EKSPORT SIFATI VA SARALASH QADAMLARI",
      stages: [
        "Yangi Karas Saralash va O'lchash Jarayoni",
        "Izolyatsiyalangan Salat Bargi Tozalash Saloni",
        "Garmdorilar Kalibratsiyasi Liniyasi",
        "Muzxonada Paletlarni Mustahkamlash",
        "Suv Yetishmovchiligini Tekshirish",
        "Yuklashdan Oldingi Oxirgi Dala Sifati Nazorati"
      ]
    },
    portfolio: {
      topBadge: "🌿 GilaFruit PREMIUM MAHSULOTNING RO'YXATI 🌿",
      title: "Tanlangan Eksport Meva va Sabzavotlarimiz",
      desc: "Mevalarimiz nufuzli bog'lardan yig'iladi, elektron lentada tahlil qilinadi va mustahkam karton idishlarda paletlar ustiga yuklanadi.",
      specsBtn: "Eksport Texnik Shartlari",
      stamp: "MAXSUS TANLOV",
      productDesc: "Ajoyib sifat toifasi, Rossiya va boshqa qo'shni davlatlarning o'simliklarni saqlash qonunlariga to'liq mos keladi.",
      allProductsBtn: "Barcha Meva-Sabzavot Eksport Katalogini Ko'rish",
      productsNames: {
        e1: "Tabiiy Eron Xeyvord Yashil Kivisi Eksporti",
        e2: "Gilon Viloyatidan To'g'ridan-to'g'ri Yangi Sarimsoq",
        e3: "Eron Dumaloq va Oval Tarvuzlari Eksporti",
        e4: "Romano Saladi, Aysberg va Boshqa Ko'katlar",
        e5: "Iliqxonada va Dlada Yetishtirilgan Shirin Biberlar",
        e6: "Birinchi Darajali Eksport Pomidorlari",
        e7: "Uzun Umrli Yangi Eksport Petrushka",
        e8: "Sifatli Tozalangan Yangi Ukrop (Kunlik Sij)",
        e9: "Tanlangan Oq va Qo'ng'ir Quruq Sarimsoq",
        e10: "Urug'siz Meva Uzumlari (Sariq va Qizil)",
        e11: "Yangi EksportBoshli Yashil Brokkoli",
        e12: "Super Kalibrli To'q Qizil Shirin Olchalar"
      },
      productTags: {
        Kiwi: "Kivi",
        Garlic: "Sarimsoq",
        Watermelon: "Tarvuz",
        Lettuce: "Salad",
        Pepper: "Biber",
        Tomato: "Pomidor",
        Parsley: "Petrushka",
        Dill: "Ukrop",
        Grapes: "Uzum",
        Broccoli: "Brokkoli",
        Cherries: "Olcha"
      }
    },
    story: {
      badge: "Kompaniyamiz Haqida Qisqacha",
      titlePart1: "Dastlabki Niholdan Global Bozorlargacha: ",
      titlePart2: "GilaFruit Tarixi",
      desc: "Yigirma yildan ziyod vaqt muqaddam unumdor tuproqqa ekilgan kichkina nihol bugungi kunda tashqi savdoning katta mustahkam daraxtiga aylandi. Bizning 23 yillik muvaffaqiyatimiz mijozlarimizga halol meva yetkazib berish va'damiz ifodasidir. Bugungi kunda jamoamizda 150 tagacha soha mutaxassislari ishlamoqda.",
      yearsText: "YILLIK",
      outcomeText: "MAHSULOT VA IShONCh TAJRIBASI",
      stats: {
        gardens: "Shartnomali Baholar",
        products: "Yangi Poliz Mahsulotlari",
        partners: "Faol Hamkorlar"
      }
    },
    news: {
      badge: "📰 Sanoat Yangiliklari",
      title: "Blog: Eksport Jarayoni To'g'risida Foydali Maslahatlar",
      subtitle: "GilaFruit yuk tashish rejalari, muzxonalar va fitosanitariya qoidalarining oxirgi o'zgarishlarini kuzatib boring.",
      readMore: "Batafsil O'qish ➜"
    },
    freshness: {
      badge: "Tazelik va Ma'qullik Va'damiz",
      title: "GilaFruit: Poliz va Meva Sifatining Kafolati",
      desc1: "Mevalarni tez muzlatish va muzxona zanjiri orqali saqlaymiz, bu esa mevalarni import qiluvchilarga birinchi kundagidek qattiq holatda yetkazilishini ta'minlaydi.",
      desc2: "Meva va poliz ekinlarining kalibrini Gilon viloyatidagi o'z paketlash zavodimizda bajaramiz. Saqlov xonalaridagi harorat va karbon miqdorini doimiy tekshiramiz.",
      highlight: "🌟 GilaFruit kompaniyasi sifatida ishonamizki, bizning xalqaro hamkorlarimiz faqatgina eng sifatli mevalarni olishga loyiqdirlar."
    },
    certifications: {
      badge: "Muvaffaqiyatga Birgalikda Yuramiz",
      title: "Hukumat Ruxsatnomalari va Xalqaro Sertifikatlarimiz",
      testimonialHeading: "Hamkorlarimizdan Kelgan Fikrlar",
      testimonialButtons: {
        back: "◀ Orqaga",
        next: "Keyingi ▶"
      },
      badgeNames: {
        enamad: "Elektron Ishonch Ma'lumotnomasi",
        samandehi: "Raqamli Ommaviy Axborot Vositalari",
        tuv_center: "Germaniya TÜV Sertifikati",
        gs1_global: "GS1 Global Kodlash",
        eac_union: "Evroosiyo Bojxona Ittifoqi",
        ir_mimt: "Savdo va Sanoat Vazirligi",
        chamber: "Gilon Savdo-Sanoat Palatasi",
        russian_embassy: "Rossiya Elchixonasi Tasdiqlagan"
      }
    }
  },
  az: {
    hero: {
      slides: [
        {
          title: "Premium Hayward İran Kivisi İxracatı",
          highlight: "İran Kivisi",
          desc: "Beynəlxalq bazarlara yüksək keyfiyyətli İran kivisinin, xüsusi taxta və karton qutularla, həmçinin soyuduculu daşımalar vasitəsilə çatdırılması.",
          badge: "Astara Müasir Logistika Mərkəzi",
          specs: [
            "Brix Şəkər səviyyəsi: minimum 6.2% - 6.5%+",
            "Qablaşdırma: Premium Karton və Taxta yeşiklər",
            "Tranzit növü: Rusiyaya Frigorifik TIR-lar"
          ]
        },
        {
          title: "Rusiya və Avrasiya Gömrük İttifaqına Birbaşa Topdan Satış",
          highlight: "Rusiya və Avrasiya",
          desc: "Temperatur nəzarətli soyuq zəncir logistikası və Astara, Bakı və Xəzər dəniz portları vasitəsilə rahat gömrükləmə xidməti.",
          badge: "Məhsulların çəki və optik çeşidlənməsi",
          specs: [
            "Ödəniş növü: Birbaşa Rubl və ya İran rialı",
            "Minimum sifariş: 24 Ton (1 TIR koli)",
            "Sənədlər: 100% Fitosanitar Karantin təsdiqi"
          ]
        },
        {
          title: "Nəzarət Edilən Atmosferli Soyuq Depolar",
          highlight: "Soyuq Anbarlama",
          desc: "Müasir etilen təmizləyicilər və unikal rütubət nəzarəti altında 12 000 tondan çox təzə meyvənin saxlanılması.",
          badge: "Təsis ili 2001 - 23 illik təcrübə",
          specs: [
            "Ümumi tutum: Yerli olaraq 12,000+ Ton",
            "Rütubət dərəcəsi: 90% - 95% nisbi rütubət",
            "Tərəzilər: Optik çəki kalibrasiyası"
          ]
        }
      ],
      buttons: {
        catalog: "Ticarət Kataloqunu Gör",
        contact: "Satış Masası ilə Əlaqə"
      }
    },
    highlights: {
      bannerTitle: "GilaFruit ilə yerli İran tərəvəz və meyvələrinin dadını dünyanın hər yerində hiss edin",
      bannerDesc: "Gilan rayonunun yaşıl bağlarından yığılan məhsulun rəqəmsal optik kalibrasiya xətti vasitəsilə seçilib beynəlxalq topdansatış terminallarına verilməsi.",
      items: [
        {
          badge: "🇮🇷",
          title: "İran Məhsulları",
          desc: "İran, dörd fəsilli iqlimi sayəsində zəngin meyvə və tərəvəz növlərinə sahibdir. GilaFruit təmiz gigiyenik şəraitdə bu təamları müştərilərə çatdırır.",
          footer: "100% Təbii və Bioloji Məhsul"
        },
        {
          badge: "🏆",
          title: "GilaFruit Şirkəti",
          desc: "Sebz Gostaran Gilan Fruit Co (GilaFruit adı altında tanınan) Eronda meva-sabzavotların qablaşdırılması və rəqəmsal kalibrasiyasında qabaqcıl şirkətdir.",
          footer: "TƏSİS İLİ 2001"
        },
        {
          badge: "🚚",
          title: "İxrac Xidmətləri",
          desc: "TIR-larla mütəşəkkil daşıma, sənədləşmə, fitosanitar yoxlaması və gömrük tranziti sahəsində etibarlı xarici tərəfdaşınız.",
          footer: "AVRASİYA VƏ KÖRFEZ LOGİSTİKASI"
        }
      ]
    },
    gateway: {
      headingPart1: "GilaFruit: ",
      headingPart2: "Azərbaycan və Dünya üçün İran Meyvə-Tərəvəz İxracatı Qapısı",
      desc1: "Təzə kənd təsərrüfatı mallarının yuyulması, çeşidlənməsi və elmi qablaşdırılması mövzusunda şirkətimiz İran gömrük hüdudlarında təsdiqlənmiş liderdir. Fabrikimizdə fəaliyyət göstərən MAF RODA optik ayırma xətti, kivini millimetrik səviyyədə çəkinə görə kalibrləyir, dəri qüsurlarını süzür.",
      desc2: "Yüksək keyfiyyətli gigiyenik qablaşdırma materiallarının istifadəsi nəqliyyat zamanı qabığın yumşalmasına və məhsulun suyunun qaçmasına mane olur.",
      calendar: {
        title: "Sahə Sezon Takvimi",
        desc: "İdxal sifarişlərinizi problemsiz planlaşdırmaq üçün yığım və hazır olma mövsümlərini göstərən təqvimi yoxlayın.",
        btn: "Sezon Təqvimini Gör"
      },
      products: {
        title: "İxrac Məhsullarımız",
        desc: "Yaxın Şərq və MDB ölkələrində poliz məhsulları, salat növləri və göyərti tədarükündə kəmiyyət və keyfiyyətcə qabaqcılıq.",
        btn: "Məhsulları Göstər"
      }
    },
    features: {
      topBadge: "✨ İranın unikal dörd fəsilli iqlimi və rütubətli torpağı sayəsində",
      title: "İxrac Məhsullarının Sifat Mezonları",
      desc: "İran meyvə və tərəvəzləri günəş işığı və münbit torpaq sayəsində əla şəkər nisbətinə (Brix) sahibdir. Paketlənmədən əvvəl fiziki yoxlama bizim əsas prinsipimizdir.",
      items: [
        { title: "Məhsulun təravəti", desc: "Təmiz təzə görünüş / çürümə və ya solma əlamətləri yoxdur" },
        { title: "Bərklik və lazımi yetişgənlik", desc: "Mükəmməl möhkəmlikdə olan, yumşalma və əzilməyə qarşı dözümlü qabıq" },
        { title: "Qüsursuz dəri quruluşu", desc: "Hər hansı qara rəng dəyişimi, dəri quruması və ləkələrin olmaması" },
        { title: "Vahid kalibr və çəki", desc: "Razılaşdırılan kalibr ölçülərinin hər yeşikdə dəqiq qorunması" },
        { title: "Rəsmi İxracatçı Markası", desc: "Bütün gömrüklərdə proqressiv proqramı asanlaşdıran ixracatçı sənədi" },
        { title: "Karantin standartları", desc: "Qəbul edən ölkələrin kənd təsərrüfatı və sanitariya qanunlarına tam uyğun" },
        { title: "Minimum fiziki səhv payı", desc: "Yeşiklərdəki xatoluq payının 5%-dən az olması" },
        { title: "Təbii qoxu və dad", desc: "Xəstəlik və ziyanvericilərə qarşı tam immunitet, təbii meyvə ətri" }
      ],
      sliderCaption: "İXRAC KEYFİYYƏT VƏ SEÇİM ADIMLARI",
      stages: [
        "Təzə Kərəfsin Seçilməsi və Kalibrlənməsi xətti",
        "İzolyasiya və Dezinfeksiya edilmiş Marul otağı",
        "Rəngli Şirin Bibər Çeşidləmə bandı",
        "Muzxanada Paletlərin Bərkidilməsi xidməti",
        "Nəmlik dərəcəsinin və qabıq suyunun yoxlanılması",
        "Yüklənmədən Öncəki Dala Sifat Yoxlanışı"
      ]
    },
    portfolio: {
      topBadge: "🌿 GilaFruit PREMİUM İXRAC STOKU 🌿",
      title: "Seçilmiş Təzə İxrac Meyvə və Tərəvəzlərimiz",
      desc: "Məhsullarımız tanınmış bağlardan yığılır, rəqəsal lent üzərində taranır və möhkəm karton daxilində paletlərlə tranzitə gedir.",
      specsBtn: "İxracatın Texniki Şərtləri",
      stamp: "XÜSUSİ SEÇİM",
      productDesc: "Süper ixrac dərəcəsi, Rusiya və ətraf ölkələrin bitki mühafizə kodekslərinə tam uyğundur.",
      allProductsBtn: "Bütün Meyvə - Tərəvəz İxrac Kataloqunu Gör",
      productsNames: {
        e1: "Seçilmiş İran Hayward Yaşıl Kivi İxracı",
        e2: "Gilan vilayətindən Təzə İxracatlıq Sarımsaq",
        e3: "İran Oval və Yumru Karpuzları İxracatı",
        e4: "Romano Marul, Aysberq və Təzə Göyərti Stokları",
        e5: "Sera və Dala Tipi Süper Şirin Bibərlər",
        e6: "Birinci Sınıf İxracatlıq Pomidorlar",
        e7: "Daha Uzun Ömürlü Təzə Petruşka İxracatı",
        e8: "Sıcak Təzə Şüyüd (Eyni Dəstələrdə Təmiz)",
        e9: "Seçilmiş Ağ və Bənövşəyi Quru Sarımsaq",
        e10: "Çəyirdəksiz Süfrə Üzümü (Qırmızı və Ağ)",
        e11: "Təzə İxracatlıq Yaşıl Brokkoli Başları",
        e12: "Super Kalibrli Tünd Qırmızı Şirin Albalılar"
      },
      productTags: {
        Kiwi: "Kivi",
        Garlic: "Sarımsaq",
        Watermelon: "Qarpız",
        Lettuce: "Kahı",
        Pepper: "Bibər",
        Tomato: "Pomidor",
        Parsley: "Cəfəri",
        Dill: "Şüyüd",
        Grapes: "Üzüm",
        Broccoli: "Brokkoli",
        Cherries: "Gilas"
      }
    },
    story: {
      badge: "Kompaniyamız Haqqında Qısa",
      titlePart1: "Ufak Bir Şitildən Qlobal Bazarlara: ",
      titlePart2: "GilaFruit-in Hekayəsi",
      desc: "İyirmi ildən çox əvvəl münbit torpağa basdırılmış kiçik bir şitil səylərimiz nəticəsində beynəlxalq ticarətin böyük çinarına çevrildi. 23 illik ixrac fəaliyyətimiz, müştərilərimizə verdiyimiz dürüstlük və keyfiyyət sözünün rəmzidir. Hazırda komandamızda 150 nəfərə qədər ixtisaslı mütəxəssis fəaliyyət göstərir.",
      yearsText: "İLLİK",
      outcomeText: "MAHSUL VƏ GÜVƏN TƏCRÜBƏMİZ",
      stats: {
        gardens: "Müqaviləli Bağlar",
        products: "Yüngül Kənd Təsərrüfatı Malları",
        partners: "Aktiv Biznes Tərəfdaşları"
      }
    },
    news: {
      badge: "📰 Sektor Xəbərləri",
      title: "Bloq: İradəli Meyvə İxracı Haqqında Faydalı Məlumat",
      subtitle: "GilaFruit göndərmə proqramlarından, anbarlama rejimlərindən gömrük xəbərlərinədək ən son dəyişikliklərdən xəbərdar olun.",
      readMore: "Ardı Oxu ➜"
    },
    freshness: {
      badge: "Təravət və Sağlamlıq Sözümüz",
      title: "GilaFruit: Tərəvəz və Meyvədə Sabit Keyfiyyətin Zəmanəti",
      desc1: "Malların erkən soyudulması və soyuq zəncirlə qorunmasını həyata keçiririk, bu da kənar bazarlarda meyvələrin sulu və bərk qalmasını asanlaşdırır.",
      desc2: "Meyvə və tərəvəzlərin kalibrini Gilan ərazisindəki şəxsi emal zavodumuzda edirik. Saxlanma otaqlarındakı karbon səviyyəsinə nəzarət edirik.",
      highlight: "🌟 GilaFruit olaraq ən böyük inancımız odur ki, iş tərəfdaşlarımız həmişə ən keyfiyyətli və təmiz kənd təsərrüfatı mallarını almağa layiqdirlər."
    },
    certifications: {
      badge: "Uğura Birlikdə Addımlayırıq",
      title: "Lisenziyalarımız, Sertifikatlarımız və Üstünlüklərimiz",
      testimonialHeading: "Müştərilərimizdən Gələn Rəylər",
      testimonialButtons: {
        back: "◀ Geri",
        next: "Növbəti ▶"
      },
      badgeNames: {
        enamad: "Elektron Etimad İcazəsi",
        samandehi: "Rəqəmsal Media Reyestri",
        tuv_center: "Alman TÜV Sertifikatı",
        gs1_global: "GS1 Qlobal Kodlama",
        eac_union: "Avrasiya Gömrük Birliyi",
        ir_mimt: "Ticarət və Sənaye Nazirliyi",
        chamber: "Gilan Ticarət Palatası",
        russian_embassy: "Rusiya Səfirliyinin Təsdiqi"
      }
    }
  },
  uk: {
    hero: {
      slides: [
        {
          title: "Експорт першокласного іранського ківі",
          highlight: "іранського ківі",
          desc: "Постачання на міжнародні ринки високоякісного іранського ківі сорту Хайвард у преміальній дерев'яній та картонній упаковці з надійною логістикою.",
          badge: "Сучасний комплекс в Астарі",
          specs: [
            "Вміст цукру Brix: не менше 6.2% - 6.5%+",
            "Тип упаковки: преміум картон / ящик",
            "Логістика: рефрижератори в Україну та Європу"
          ]
        },
        {
          title: "Прямі оптові поставки в Україну та Східну Європу",
          highlight: "Україну та Східну Європу",
          desc: "Забезпечення перевезень із температурним контролем та швидке митне оформлення через коридори Астара, Баку та порти Каспію.",
          badge: "Лінії калібрування ваги",
          specs: [
            "Розрахунки: напряму у валюті або ріалах",
            "Мін. замовлення: 24 тонни (1 рефрижератор)",
            "Документи: 100% Фітосанітарне очищення"
          ]
        },
        {
          title: "Зберігання в камерах з регульованим середовищем",
          highlight: "Холодні Склади",
          desc: "Зберігання понад 12000 тонн свіжої продукції при оптимальному рівні вологості із сучасними очисниками етилену.",
          badge: "Засновано в 2001 році — 23 роки досвіду",
          specs: [
            "Загальна потужність: 12,000+ тонн",
            "Контроль вологості: 90% - 95% RH",
            "Сортування: лазерне калібрування ваги"
          ]
        }
      ],
      buttons: {
        catalog: "Відкрити каталог продукції",
        contact: "Зв'язатися з відділом продажів"
      }
    },
    highlights: {
      bannerTitle: "З GilaFruit ви відчуєте смак іранських овочів та фруктів у будь-якому куточку світу",
      bannerDesc: "Пряма доставка врожаю з екологічно чистих садів півночі провінції Гілян через автоматизовані системи калібрування ваги на світові оптові термінали.",
      items: [
        {
          badge: "🇮🇷",
          title: "Продукти Ірану",
          desc: "Завдяки чотирьом сезонам на рік, Іран виробляє багатий асортимент фруктів та овочів. GilaFruit пропонує якісні товари на світовому ринку, зберігаючи автентичний смак.",
          footer: "100% Органічне походження"
        },
        {
          badge: "🏆",
          title: "Компанія GilaFruit",
          desc: "Компанія Sabz Gostaran Gilan Fruit Co, відома як GilaFruit, є визнаним лідером у сфері високотехнологічного сортування та упаковки свіжої продукції в Ірані.",
          footer: "ЗАСНОВАНО В 2001 РОЦІ"
        },
        {
          badge: "🚚",
          title: "Експортні послуги",
          desc: "Маючи багаторічний досвід у міжнародній доставці овочів та фруктів, GilaFruit є надійним партнером для оптовиків. Ми беремо на себе транспорт та митницю.",
          footer: "ЛОГІСТИКА ЄАС ТА БЛИЗЬКИЙ СХІД"
        }
      ]
    },
    gateway: {
      headingPart1: "GilaFruit: ",
      headingPart2: "Ваш надійний провідник у світ іранських овочів та фруктів",
      desc1: "Спираючись на багаторічний досвід калібрування, сортування, миття та технологічного пакування свіжих іранських овочів та фруктів, GilaFruit завоювала статус піонера галузі в Ісламській Республіці Іран. Наша компанія використовує автоматичне оптичне обладнання MAF RODA для точного вагового калібрування ківі, гарантуючи відсутність дефектів шкірки та однорідність плодів у коробці.",
      desc2: "Використання високоякісних гігієнічних пакувальних матеріалів дозволяє зберегти свіжість, соковитість та органолептичні властивості продукції протягом усього транзитного шляху до кінцевого прилавка.",
      calendar: {
        title: "Календар поставок",
        desc: "Щоб скласти точний річний план закупівель, будь ласка, вивчіть наш календар сезонності, щоб дізнатися точні періоди збору кожного врожаю.",
        btn: "Подивитися Календар"
      },
      products: {
        title: "Наші Продукти",
        desc: "Ми є провідними виробниками та постачальниками зелені, салатів та овочів на ринках Близького Сходу та Східної Європи.",
        btn: "Показати Продукти"
      }
    },
    features: {
      topBadge: "✨ Завдяки унікальному чотирьохсезонному клімату Ірану",
      title: "Основні переваги експортної продукції",
      desc: "Іранська продукція відрізняється чудовим натуральним смаком, унікальною щільністю та високим індексом Brix. Потрійний фізичний аудит якості та гідроохолодження перед завантаженням рефрижератора — наш стандарт.",
      items: [
        { title: "Якість продукту", desc: "Свіжі, добірні та щільні плоди / без ознак псування" },
        { title: "Твердість та стиглість", desc: "Оптимальна стиглість, відсутність вм'ятин та деформацій" },
        { title: "Відсутність плям", desc: "Ідеально чиста шкірка без слідів зневоднення" },
        { title: "Точний калібр", desc: "Відповідність обумовленим специфікаціям та ваговому ряду" },
        { title: "Маркування бренду", desc: "Повна простежуваність від сертифікованого експортера" },
        { title: "Відповідність стандартам", desc: "Повна відповідність імпортним вимогам країн призначення" },
        { title: "Мінімум похибок", desc: "Мінімальний відсоток відхилення калібру на всю партію" },
        { title: "Натуральний аромат", desc: "Природний запах, повна відсутність хвороб плодів" }
      ],
      sliderCaption: "ЕТАПИ ЕКСПОРТНОГО КОНТРОЛЮ ЯКОСТІ",
      stages: [
        "Очищення та сортування свіжої селери",
        "Цех відбору салату Айсберг у чистій зоні",
        "Калібрувальна лінія солодкого болгарського перцю",
        "Формування палет у холодильному терміналі",
        "Аудит щільності шкірки та вологості овочів",
        "Фінальна перевірка врожаю з полів перед завантаженням"
      ]
    },
    portfolio: {
      topBadge: "🌿 ПРЕМІАЛЬНИЙ ЕКСПОРТНИЙ ПОРТФЕЛЬ GilaFruit 🌿",
      title: "Наші експортні овочі та фрукти",
      desc: "Продукція проходить сортування на оптичних вагових машинах, дбайливе очищення та укладається на палети у міцній тарі.",
      specsBtn: "Специфікації експорту",
      stamp: "ПРЕМІУМ КЛАС",
      productDesc: "Експортний клас якості, повністю сертифікований за фітосанітарними інспекційними кодами країн призначення.",
      allProductsBtn: "Подивитися весь каталог експортної продукції",
      productsNames: {
        e1: "Іранське зелене ківі Хайвард (експорт клас)",
        e2: "Свіжий іранський часник безпосередньо від постачальника",
        e3: "Круглі та овальні іранські кавуни оптом",
        e4: "Салат Романо, Айсберг та інші види зелені",
        e5: "Перець болгарський ґрунтовий та тепличний різнокольоровий",
        e6: "Тепличні томати преміального товарного вигляду",
        e7: "Свіжа петрушка іранської якості",
        e8: "Ароматний кріп свіжого щоденного зрізу",
        e9: "Часник сушений білий та фіолетовий калібрований",
        e10: "Столовий безнасінний виноград (білий та червоний)",
        e11: "Свіжа іранська броколі (зелені суцвіття)",
        e12: "Свіжа черешня екстра-калібру (темні сорти)"
      },
      productTags: {
        Kiwi: "Ківі",
        Garlic: "Часник",
        Watermelon: "Кавун",
        Lettuce: "Салат",
        Pepper: "Перець",
        Tomato: "Томати",
        Parsley: "Петрушка",
        Dill: "Кріп",
        Grapes: "Виноград",
        Broccoli: "Броколі",
        Cherries: "Черешня"
      }
    },
    story: {
      badge: "Коротко про нашу історію",
      titlePart1: "Від невеликого саду до глобального експорту: ",
      titlePart2: "Історія успіху GilaFruit",
      desc: "Маленький саджанець, посаджений понад двадцять років тому, перетворився на надійне дерево міжнародної торгівлі. Наш 23-річний шлях — це сплав традицій садівництва та передових агротехнологій. Сьогодні штат компанії налічує понад 150 професіоналів у кількох департаментах, від логістики до контролю якості.",
      yearsText: "РОКІВ",
      outcomeText: "БАГАТОГО ВРОЖАЮ ТА ДОСВІДУ",
      stats: {
        gardens: "Активних садів",
        products: "Найменувань продукції",
        partners: "Партнерів по бізнесу"
      }
    },
    news: {
      badge: "📰 Новини компанії",
      title: "Блог: Все про експорт свіжих продуктів",
      subtitle: "Будьте в курсі графіків відвантажень GilaFruit, інновацій у зберіганні та змін фітосанітарних норм.",
      readMore: "Детальніше ➜"
    },
    freshness: {
      badge: "Гарантія Свіжості",
      title: "GilaFruit: Ваш надійний міст до свіжих плодів",
      desc1: "Використання сучасних пакувальних мереж та холодильного ланцюга оберігає фрукти від зневоднення та занепаду. Продукція дбайливо укладається вручну, виключаючи будь-які фізичні забої плодів.",
      desc2: "Починаючи від оксамитових ківі, закінчуючи соковитою зеленню — кожен обсяг калібрується на вагових столах у пакувальному центрі провінції Гілян. Ми контролюємо кожен кубометр вологості та вміст етилену в камерах для тривалого терміну зберігання.",
      highlight: "🌟 Наша тверда впевненість у компанії GilaFruit полягає в тому, що кожен покупець гідний преміальних сезонних фруктів першої свіжості."
    },
    certifications: {
      badge: "Досягаємо Успіху Разом",
      title: "Наші сертифікати та відзнаки",
      testimonialHeading: "Відгуки оптових покупців",
      testimonialButtons: {
        back: "◀ Назад",
        next: "Вперед ▶"
      },
      badgeNames: {
        enamad: "e-Commerce Довіра",
        samandehi: "Реєстр цифрових ЗМІ",
        tuv_center: "Німецький сертифікат TÜV",
        gs1_global: "Штрихкодування GS1",
        eac_union: "Митний союз ЕАС",
        ir_mimt: "Міністерство торгівлі Ірану",
        chamber: "Торгова палата Гіляна",
        russian_embassy: "Схвалено Посольством"
      }
    }
  }
};

export function getHomeTranslations(langCode: string): HomeTranslation {
  return homeTranslations[langCode] || homeTranslations["en"];
}
