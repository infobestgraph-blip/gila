// Professional services screen translations for GilaFruit across 9 languages: 
// en, fa, ru, ar, tr, hi, uz, az, uk

export interface ServicesTranslation {
  hero: {
    title: string;
    description: string;
  };
  cards: {
    customs: {
      title: string;
      desc: string;
      btn: string;
    };
    transport: {
      title: string;
      desc: string;
      btn: string;
    };
    consulting: {
      title: string;
      desc: string;
      btn: string;
    };
  };
  introParagraph: string;
  certificationsCard: {
    title: string;
    desc: string;
    btn: string;
  };
  globalPartner: {
    title: string;
    desc: string;
  };
  grid: {
    warehousing: {
      title: string;
      desc: string;
      btn: string;
    };
    insurance: {
      title: string;
      desc: string;
    };
    packaging: {
      title: string;
      desc: string;
    };
    branding: {
      title: string;
      desc: string;
    };
  };
  spotlights: {
    rates: {
      tag: string;
      title: string;
      desc: string;
      btn: string;
    };
    telemetry: {
      tag: string;
      title: string;
      desc: string;
      btn: string;
    };
  };
  media: {
    title: string;
    btn: string;
  };
}

export const servicesTranslations: Record<string, ServicesTranslation> = {
  en: {
    hero: {
      title: "GilaFruit: Bridging Iran's Orchards with Global Markets",
      description: "Our Services cover product selection, competitive pricing, effective Marketing, Export procedures, Customs Clearance, and International Transportation. We offer comprehensive Services for seamless Export, including Customs Clearance, International Transportation, and strategic Marketing."
    },
    cards: {
      customs: {
        title: "Customs Clearance",
        desc: "Entrust the complex process of customs clearance to us. Our customs experts, with a thorough understanding of customs laws and regulations in various countries, handle all stages of customs clearance swiftly and smoothly.",
        btn: "Customs Detail Page →"
      },
      transport: {
        title: "International Transportation",
        desc: "We utilize a diverse range of transportation methods, including sea, air, and land, to deliver your products to your desired destination in the shortest possible time while adhering to international standards.",
        btn: "Fleet & Routes Detail Page →"
      },
      consulting: {
        title: "Specialized Export Consulting",
        desc: "Our experienced experts, considering your target market, food culture, and country-specific regulations, provide the best solutions for exporting your products. From selecting suitable products to setting competitive prices and marketing, we are by your side.",
        btn: "Inquire Consultation →"
      }
    },
    introParagraph: "With over two decades of experience in the fruit and vegetable export industry, GilaFruit stands as a pioneer in Iran. Our extensive network of professional farmers and modern orchards enables us to deliver fresh, high-quality produce directly from the farm to customers worldwide. Our expertise lies in carefully selecting the finest fruit and vegetable varieties, employing precise packaging techniques adhering to international standards, and maintaining an unbroken cold chain to ensure product freshness and quality. GilaFruit Services encompass all aspects of the export process, from product selection and competitive pricing to marketing and streamlining customs processes. We provide comprehensive support to help you successfully export your products. By choosing GilaFruit, you gain a reliable business partner committed to increasing your market share in competitive global markets.",
    certificationsCard: {
      title: "GilaFruit: Quality Guaranteed with Global Standards",
      desc: "At GilaFruit, we prioritize the health and well-being of our consumers above all else. Our unwavering commitment to quality and food safety is reflected in our rigorous adherence to internationally recognized standards. We are proud to hold certifications such as ISO 9001, ISO 22000, HACCP, and GMP, which attest to our dedication to providing safe, wholesome, and consistently high-quality products and Services. These certifications encompass every aspect of our operations, from sourcing and production to packaging and distribution, ensuring that our products meet the strictest global benchmarks.",
      btn: "Certifications"
    },
    globalPartner: {
      title: "Your Trusted Partner for Global Logistics",
      desc: "Benefit from our integrated approach to logistics, including transportation, warehousing, and customs clearance"
    },
    grid: {
      warehousing: {
        title: "Warehousing and Distribution",
        desc: "We offer warehousing facilities in equipped cold storage warehouses and, through precise planning, deliver your products to your customers on time.",
        btn: "Cold Depot Page →"
      },
      insurance: {
        title: "Cargo Insurance",
        desc: "To ensure the safety of your shipments throughout the journey, we offer cargo insurance with diverse coverage options."
      },
      packaging: {
        title: "Customized Packaging",
        desc: "We design and implement custom packaging tailored to your product type, target market, and brand to differentiate your product in global markets."
      },
      branding: {
        title: "Branding",
        desc: "By designing attractive packaging and creating a strong visual identity for your products, we help you build your brand in global markets."
      }
    },
    spotlights: {
      rates: {
        tag: "Live Spot Rates",
        title: "Daily Freight Rates Dashboard",
        desc: "Plan and estimate your regional shipping costs dynamically. Check regional spot indexes, average seasonal trend calculations and use our active container weight calculator.",
        btn: "Access Rates Calculator →"
      },
      telemetry: {
        tag: "Operational Analytics",
        title: "Truck Departure Stats & Logs",
        desc: "Stay fully informed about GilaFruit's shipping frequencies. Review destination shares pie-charts, monthly trailers dispatched, and live transit clearing logs telemetry.",
        btn: "Analyze Dispatch Telemetry →"
      }
    },
    media: {
      title: "International Shipping",
      btn: "More Information"
    }
  },
  fa: {
    hero: {
      title: "گیلافروت: پل ارتباطی باغات ممتاز ایران با بازارهای جهانی",
      description: "برنامه خدماتی یکپارچه ما شامل فرآیندهای سورتینگ بهداشتی، بسته‌بندی بر اساس ضوابط بین‌المللی، تشریفات گمرکی سریع و حمل ریلی و زمینی مجهز به تجهیزات یخچال‌دار است تا سلامت محصول در طول زنجیره سرد تضمین شود."
    },
    cards: {
      customs: {
        title: "ترخیص و امور گمرکی",
        desc: "کارشناسان مجرب گمرک ما با درک دقیق قوانین و مقررات تجاری کشورهای مقصد، تمام زنجیره ترخیص، قرنطینه بهداشت نباتی و کارهای اظهارنامه را به صورت ایمن و سریع در خروجی مرز آستارا اجرا می‌کنند.",
        btn: "مشاهده جزئیات ترخیص گمرکی ←"
      },
      transport: {
        title: "حمل و نقل یخچالدار",
        desc: "ما با بهره‌گیری از ناوگان زمینی و ترانزیتی گسترده، محصولات کشاورزی را در کمترین زمان ممکن و تحت زنجیره سرد کامل و پایدار به کشورهای اوراسیا و حاشیه خلیج فارس منتقل می‌نماییم.",
        btn: "مشاهده مسیرها و ناوگان حمل ←"
      },
      consulting: {
        title: "مشاوره تخصصی صادرات",
        desc: "تحلیلگران و کارشناسان صادراتی ما بر مبنای خصوصیات بازار هدف، فرهنگ مصرفی کشورهای همسایه و اصول استاندارد غلات، بسته‌بندی‌های ایده آل و قیمت‌های منطقی فروش را برای شما تعیین می‌کنند.",
        btn: "ارسال درخواست مشاوره ←"
      }
    },
    introParagraph: "با بیش از دو دهه سابقه درخشان در تامین و توزیع صادراتی تره بار، هلدینگ گیلافروت به عنوان یکی از پیشتازان زنجیره تامین محصولات کشاورزی در ایران شناخته می‌شود. مرکز سورتر اپتیکال سه‌بانده ما و انبارهای سردخانه‌ای اختصاصی آستارا با ظرفیت ۵ هزار تن ضامن پایداری کیفیت محصول از مبدا تا مقصد هستند. کادر مجرب ما کلیه تشریفات مربوط به سورت تفکیکی، اسناد مبدا، بهداشت نباتی و بارنامه صادراتی ترانزیتی را بدون واسطه انجام داده و همواره منافع خریداران محترم خارجی را در سرتاسر مسیر اولویت خود قرار می‌دهند.",
    certificationsCard: {
      title: "گیلافروت: سلامتی مصرف کننده با استانداردهای کیفیت جهانی",
      desc: "ما به صورت جدی بر کیفیت محصولات تکیه داریم. دارا بودن استانداردهای ملی و گواهینامه‌های برجسته بین‌المللی شامل ISO 9001، ISO 22000، HACCP و تضمین سلامت ارگانیک گویای رویکرد حرفه‌ای و سازمان‌یافته هلدینگ گیلافروت در تامین مواد غذایی ایمن و صادراتی برای تمام بازارهای هدف است.",
      btn: "گواهینامه‌های رسمی"
    },
    globalPartner: {
      title: "شریک مطمئن شما در لجستیک بازرگانی بین‌المللی",
      desc: "بهره‌مندی بی واسطه از فرآیندهای منظم مدیریت کانتینر، سردخانه‌های نگهداشت و گواهینامه‌های عبور مرزی بدون تاخیر."
    },
    grid: {
      warehousing: {
        title: "لجستیک و سردخانه",
        desc: "ارائه سالن‌های سردخانه‌ای مجهز به سیستم پایش هوشمند دما و رطوبت به همراه تجهیزات مکانیزه بسته‌بندی صیفی‌جات ممتاز.",
        btn: "پایانه لجستیکی و هاب آستارا ←"
      },
      insurance: {
        title: "بیمه کارگو و حمل و نقل",
        desc: "صدور انواع پوشش‌های بیمه‌ای ترانزیتی و ریلی معتبر برای تامین امنیت کامل و جبران ریسک‌های زنجیره توزیع بین‌المللی کالا."
      },
      packaging: {
        title: "بسته‌بندی سفارشی",
        desc: "طراحی کالیبرهای دقیق کارتن، سبدهای مستحکم پلیمری و شانه گذاری برای حفظ کیفیت گلابی، سیب، کیوی و سیر بر پایه برند صادرکننده."
      },
      branding: {
        title: "خلق برند و هویت بصری صادراتی",
        desc: "چاپ کارتن‌های لوکس و طرح‌های خاص اختصاصی بر روی جعبه‌ها به منظور ایجاد تمایز قوی و برندسازی ماندگار در بازارهای فرامرزی."
      }
    },
    spotlights: {
      rates: {
        tag: "نرخ‌های به روز کرایه کانتینر",
        title: "تعرفه حمل بار روزانه",
        desc: "هزینه‌های حمل زمینی و ترانزیتی کانتینرهای یخچال‌دار به مقاصد روسیه، قزاقستان و اروپا را با ماشین حساب وزن و مسافت به صورت آنی برآورد نمایید.",
        btn: "ورود به سیستم استعلام تعرفه حمل بار ←"
      },
      telemetry: {
        tag: "تحلیل‌های آماری عملیات",
        title: "رهگیری کامیونها و آمار خروج",
        desc: "آمار پویای ترانزیت روزانه، مانیتورینگ آنلاین ورود کانتینرها، سهم گمرکات زمینی و فراوانی واگن‌های بارگیری شده شرکت گیلافروت را پیگیری کنید.",
        btn: "ورود به پایگاه داده رهگیری کامیون‌ها ←"
      }
    },
    media: {
      title: "ترانزیت و زنجیره تامین محصولات",
      btn: "تماس با واحد فروش بین‌المللی"
    }
  },
  ru: {
    hero: {
      title: "GilaFruit: надежный мост от садов Ирана к мировым рынкам",
      description: "Наш комплекс услуг включает подбор продукции, конкурентное ценообразование, прохождение таможни под ключ и бережную транспортировку рефрижераторами для 100% сохранения свежести."
    },
    cards: {
      customs: {
        title: "Таможенное оформление",
        desc: "Доверьте сложный процесс декларирования нам. Наши специалисты в совершенстве знают таможенное право и требования карантинных служб РФ и СНГ.",
        btn: "Страница таможни →"
      },
      transport: {
        title: "Рефрижераторные перевозки",
        desc: "Мы используем надежный автотранспорт и контейнеры для быстрой доставки сельхозпродукции в РФ, страны ЕАЭС и Персидского залива без разрыва холодильной цепи.",
        btn: "Маршруты и флот →"
      },
      consulting: {
        title: "Консалтинг по экспорту",
        desc: "Эксперты нашей компании помогут адаптировать упаковку под требования сетей, просчитать тарифы и предложить лучшую ценовую модель для успешных продаж.",
        btn: "Запросить консультацию →"
      }
    },
    introParagraph: "Имея более двух десятилетий опыта работы в агропромышленной сфере экспорта овощей и фруктов, компания GilaFruit является бесспорным лидером Ирана. Наша распределенная сеть партнерских хозяйств гарантирует круглогодичную отгрузку премиального киви Хайвард, свежего чеснока и томатов. Собственная база калибровки и фасовки в Астаре мощностью более 5000 тонн позволяет контролировать стандарты чистоты, сортности и веса на каждом этапе вплоть до пересечения границы.",
    certificationsCard: {
      title: "GilaFruit: Гарантия качества по международным стандартам",
      desc: "Для нас безопасность потребителя превыше всего. Строгий контроль качества подтвержден международными сертификатами ISO 9001, ISO 22000, HACCP и GMP. Эти регламенты охватывают весь наш производственный цикл — от калибровки плодов до логистики, давая клиенту уверенность в каждой партии.",
      btn: "Сертификаты"
    },
    globalPartner: {
      title: "Ваш надежный партнер в глобальной логистике",
      desc: "Оптимизация цепочек поставок, услуги охлаждаемых терминалов временного хранения и оперативный выпуск сертификатов."
    },
    grid: {
      warehousing: {
        title: "Складская логистика",
        desc: "Мы предлагаем современные хладокомбинаты с постоянным мониторингом температуры и квалифицированной предпродажной подготовкой овощей.",
        btn: "Склады в Астаре →"
      },
      insurance: {
        title: "Страхование грузов",
        desc: "Для минимизации коммерческих рисков при транзите мы предлагаем гибкие программы страхования с полной финансовой защитой груза."
      },
      packaging: {
        title: "Фирменная упаковка",
        desc: "Разработка дизайна коробок, пластиковых ящиков и эргономичной колейной укладки для лучшей сохранности киви и чеснока."
      },
      branding: {
        title: "Продвижение бренда",
        desc: "Создание привлекательного внешнего вида продукции и продвижение вашей торговой марки на зарубежных конкурентных рынках."
      }
    },
    spotlights: {
      rates: {
        tag: "Актуальные ставки",
        title: "Тарифы на фрахт онлайн",
        desc: "Рассчитайте транспортные расходы на перевозку рефрижераторами до Самары, Москвы или Санкт-Петербурга с помощью нашего калькулятора.",
        btn: "Перейти к расчету ставок →"
      },
      telemetry: {
        tag: "Оперативные данные",
        title: "Мониторинг движения и логистика",
        desc: "Интегрированная статистика по количеству отправленных машин, долям стран назначения и свежие логи очистки транзитных деклараций.",
        btn: "Проверить транзитные логи →"
      }
    },
    media: {
      title: "Международный трансфер и снабжение",
      btn: "Связаться с отделом продаж"
    }
  },
  ar: {
    hero: {
      title: "گيلافروت: ربط بساتين إيران بالأسواق العالمية",
      description: "تغطي خدماتنا فرز المنتجات بجودة بصرية، والتعبئة وفقًا للمعايير الدولية، وإجراءات التخليص الجمركي الفوري، والنقل المبرد المستدام طوال سلسلة التبريد."
    },
    cards: {
      customs: {
        title: "التخليص الجمركي",
        desc: "اترك الإجراءات القانونية المعقدة لخبراء الجمارك لدينا. بفضل معرفتنا العميقة بالأنظمة الدولية، نتولى الفحص والشهادات عند منفذ أستارا بسرعة وكفاءة.",
        btn: "تفاصيل الجمارك ←"
      },
      transport: {
        title: "النقل الدولي المبرد",
        desc: "نستعين بأسطول متطور من الشاحنات المبردة لنقل المنتجات الزراعية الطازجة إلى دول الخليج العربي وأوراسيا، مما يبقيها في حالة نضارة مثالية.",
        btn: "تفاصيل الأسطول والمسارات ←"
      },
      consulting: {
        title: "استشارات التصدير المتخصصة",
        desc: "يقوم محللونا بدراسة الأسواق المستهدفة وسلوك المستهلك لمساعدتك في تحديد التعبئة المناسبة واقتراح الأسعار الأكثر تنافسية لصفقات رابحة.",
        btn: "طلب استشارة تصديرية ←"
      }
    },
    introParagraph: "تتميز غيلافروت بمسيرتها الممتدة لأكثر من عشرين عامًا في مجال تصدير الخضروات والفواكه من إيران. تضمن شبكتنا الواسعة من المزارع الشريكة إمدادات مستمرة من كيوي هايفارد وثوم أستارا الممتاز. كما نسخر مراكز الفرز الآلي وسلسلة من المخازن المبردة بسعة تتعدى 5000 طن لضمان استقرار الجودة ومراقبة المعايير قبل التوريد.",
    certificationsCard: {
      title: "گيلافروت: جودة مضمونة تطابق المقاييس العالمية",
      desc: "تأتي سلامة المستهلك في مقدمة أولوياتنا؛ وتنعكس هذه الرعاية في التزامنا الصارم بمعايير الجودة العالمية الحاصلة على شهادات ISO 9001 و ISO 22000 و HACCP و GMP التي تغطي جميع مراحل الحصاد، التعبئة والنقل والتوزيع التجاري.",
      btn: "الشهادات الفنية"
    },
    globalPartner: {
      title: "شريكك اللوجستي الموثوق في التجارة العالمية",
      desc: "الاستفادة المباشرة من الخدمات المتكاملة لإدارة الحاويات المبردة والمستودعات والشهادات الحدودية بدون تأخير."
    },
    grid: {
      warehousing: {
        title: "اللوجستيات والمخازن المبردة",
        desc: "نوفر غرف تبريد مجهزة بأحدث مستشعرات الحرارة والرطوبة لتهيئة الظروف المثالية للمحاصيل الطازجة قبل الشحن.",
        btn: "المستودع والمحطة اللوجستية ←"
      },
      insurance: {
        title: "تأمين الشحن والترانزيت",
        desc: "خيارات تأمينية متكاملة لحماية شحناتكم من جميع المخاطر المحتملة أثناء الشحن البحري أو البري الدولي."
      },
      packaging: {
        title: "تعبئة مخصصة واحترافية",
        desc: "نصمم الصناديق والكرتون القوي الملائم لحجم الكيوي والثوم الطازج لراحة التخزين والعرض في أسواق الجملة والتجزئة."
      },
      branding: {
        title: "صناعة الهوية والبرند التجاري",
        desc: "طباعة تصاميم تعبئة فاخرة ومتميزة لتشجيع حضور علامتكم التجارية في الأسواق العالمية وتحقيق تفوق على المنافسين."
      }
    },
    spotlights: {
      rates: {
        tag: "أسعار الشحن اللحظية",
        title: "تعرفة شحن البضائع يومياً",
        desc: "احسب تكلفة نقل الحاويات المبردة فورياً إلى روسيا ودول الجوار عبر استخدام أداة تقدير الكلفة على مدار الساعة.",
        btn: "الولوج لحساب أسعار الشحن ←"
      },
      telemetry: {
        tag: "الإحصاءات والتحليلات الجارية",
        title: "رهگیری کامیونها و آمار خروج",
        desc: "تابع حركة الشاحنات وجدول الرحلات اليومية عبر منافذ العبور ونسب التوزيع إلى جانب سجلات الفحص الحدودي لغيلافروت.",
        btn: "سجلات وجدول المراقبة والرهگیری ←"
      }
    },
    media: {
      title: "شحن وتوريد المنتجات دولياً",
      btn: "الاتصال بقسم المبيعات الدولي"
    }
  },
  tr: {
    hero: {
      title: "GilaFruit: İran Bahçelerini Küresel Pazarlarla Buluşturuyor",
      description: "Hizmetlerimiz; görsel kalite denetimini, uluslararası standartlara uygun paketlemeyi, gümrük prosedürlerini ve soğuk zincirin korunmasını garanti eden reefer taşımacılığını kapsar."
    },
    cards: {
      customs: {
        title: "Gümrükleme İşlemleri",
        desc: "Karmaşık gümrük süreçlerini uzmanlarımıza bırakın. Hedef ülkelerin ithalat mevzuatlarına olan derin hakimiyetimizle, Astara sınırında hızlı ve sorunsuz çözümler sunuyoruz.",
        btn: "Gümrük Detayları →"
      },
      transport: {
        title: "Uluslararası Soğutmalı Nakliye",
        desc: "Taze ürünlerinizi Rusya, Avrasya ve Körfez ülkelerine en kısa sürede, kesintisiz soğuk zincir güvencesiyle ulaştırmak için tır ve konteyner filomuzu kullanıyoruz.",
        btn: "Filo ve Güzergâh Detayları →"
      },
      consulting: {
        title: "Uzman İhracat Danışmanlığı",
        desc: "Analistlerimiz hedef pazarlarınızın koşullarını inceleyerek rekabetçi fiyatlar belirlemenize, doğru ambalajı seçmenize ve karlı iş ortaklıkları kurmanıza yardımcı olur.",
        btn: "Danışmanlık Talep Edin →"
      }
    },
    introParagraph: "Meyve ve sebze ihracatı sektöründe yirmi yılı aşkın köklü tecrübesiyle GilaFruit, İran'ın öncü kuruluşudur. Geniş çiftçi ağımız, birinci sınıf Hayward kivi ve taze sarımsağın sürekli tedarik edilmesini sağlar. Astara sınırında bulunan 5.000 ton kapasiteli gelişmiş tasnif ve soğuk hava tesislerimiz, sevkiyat öncesi kalite standartlarını tam olarak güvence altına almaktadır.",
    certificationsCard: {
      title: "GilaFruit: Küresel Standartlarla Kalite Garantili",
      desc: "Tüketicilerimizin sağlığı her şeyden önce gelir. Güvenli ve sağlıklı gıda tedarikine verdiğimiz önem ISO 9001, ISO 22000, HACCP ve GMP gibi prestijli sertifikalarla tescillenmiştir. Bu sertifikalar, hasattan paketlemeye ve dağıtıma kadar tüm operasyonlarımızı kapsar.",
      btn: "Sertifikalarımız"
    },
    globalPartner: {
      title: "Küresel Lojistikte Güvenilir Ortağınız",
      desc: "Soğutmalı lojistik yönetimi, depolama ve gümrük geçişlerinde gecikmesiz entegre çözümlerden yararlanın."
    },
    grid: {
      warehousing: {
        title: "Depolama ve Dağıtım",
        desc: "Ürünlerin taze kalmasını garanti etmek için anlık nem ve sıcaklık kontrollü, modern soğuk hava odalarında depolama hizmetleri sunuyoruz.",
        btn: "Soğuk Depo Tesisleri →"
      },
      insurance: {
        title: "Nakliyat Sigortası",
        desc: "Yolculuk boyunca sevkiyatlarınızın finansal güvenliğini korumak adına geniş kapsamlı ve esnek nakliyat sigortası seçenekleri sunmaktayız."
      },
      packaging: {
        title: "Özel Tasarım Ambalaj",
        desc: "Kivi, sarımsak ve sera sebzeleri için ürün tipine ve pazarın estetik beğenilerine uygun özel karton kutu ambalaj tasarımları uyguluyoruz."
      },
      branding: {
        title: "Markalaşma ve Görsel Kimlik",
        desc: "İhracat ürünleriniz için şık kutular tasarlayarak hedef pazarlarda güçlü bir marka algısı kurmanıza ve fark edilmenize katkı sağlıyoruz."
      }
    },
    spotlights: {
      rates: {
        tag: "Güncel Konteyner Navlunları",
        title: "Günlük Navlun Fiyatları",
        desc: "Hedef bölgenize yönelik reefer konteyner navlun harcamalarını mesafe ve hacim bazlı çalışan online simülatörümüzle anında hesaplayın.",
        btn: "Navlun Hesaplayıcıya Erişin →"
      },
      telemetry: {
        tag: "Operasyonel Veriler",
        title: "Kamyon Takip ve Çıkış İstatistikleri",
        desc: "GilaFruit tırlarının günlük sefer sıklıklarını, pazar payı dağılımlarını ve gümrük kontrol noktası geçiş sürelerini şeffaf biçimde inceleyin.",
        btn: "Takip İstatistiklerini İnceleyin →"
      }
    },
    media: {
      title: "Uluslararası Lojistik Transfer",
      btn: "İhracat Satış Ekibiyle İletişim"
    }
  },
  uz: {
    hero: {
      title: "GilaFruit: Eron bog'larini global bozorlar bilan bog'laydi",
      description: "Xizmatlarimiz saralash, xalqaro ko'rsatgichlar asosida qadoqlash, tezkor bojxona rasmiylashtiruvi va sovuqlik zanjirini kafolatlovchi xalqaro muzlatgichli yuk tashishni o'z ichiga oladi."
    },
    cards: {
      customs: {
        title: "Bojxona rasmiylashtiruvi",
        desc: "Murakkab deklaratsiyalash jarayonini mutaxassislarimizga topshiring. Turli mamlakatlar qonunchiligini yaxshi bilgan holda, barcha bosqichlarni Astara chegarasida tezkor bajarishadi.",
        btn: "Bojxona tafsilotlari →"
      },
      transport: {
        title: "Muzlatgichli yuk tashish",
        desc: "Yangi hosil qilingan meva va sabzavotlarni Evroosiyo hamda Fors ko'rfazi mamlakatlariga muzlatgichli transport va vagonlarda yo'l davomida sifati buzilmasdan yetkazamiz.",
        btn: "Yo'nalishlar va avtopark →"
      },
      consulting: {
        title: "Eksport bo'yicha maslahat",
        desc: "Tahlilchilarimiz maqsadli bozorlardagi talablar va unga mos qadoqlarni o'rganib, eng raqobatbardosh, samarali narxlarni belgilashda yordam berishadi.",
        btn: "Maslahat so'rash →"
      }
    },
    introParagraph: "Meva-sabzavot eksporti bo'yicha yigirma yildan ziyod tajribaga ega bo'lgan GilaFruit kompaniyasi Eronda ushbu soha yetakchisidir. Keng qamrovli dehqonlar tarmog'i yuqori navli Hayward kivi va taze sarimsoq yetkazib berish barqarorligini ta'minlaydi. Astara yaqinidagi 5 000 tonnalik muzlatkichli saralash hovlisi yuklashdan oldin barcha standartlar nazoratini o'z zimmasiga oladi.",
    certificationsCard: {
      title: "GilaFruit: Jahon standartlari bilan kafolatlangan sifat",
      desc: "Biz iste'molchilar salomatligi va xavfsizligini birinchi o'ringa qo'yamiz. ISO 9001, ISO 22000, HACCP va GMP kabi nufuzli xalqaro sertifikatlarimiz buni isbotlaydi. Sertifikatlar terib olishdan tortib qadoqlash hamda yetkazishgacha bo'lgan barcha ish jarayonini qamrab olgan.",
      btn: "Sertifikatlar"
    },
    globalPartner: {
      title: "Global logistikada xavfsiz hamkoringiz",
      desc: "muzlatgichli logistika boshqaruvi, omborxona va bojxona tranzitlarining kechikishlarsiz ishlashi."
    },
    grid: {
      warehousing: {
        title: "Omborxona va logistika",
        desc: "Harorat va namlik har daqiqa nazorat qilinadigan zamonaviy muzlatkich omborlarda tovarlarni saqlash va taqsimlash xizmatlarini taqdim etamiz.",
        btn: "Omborxona va logistika markazi →"
      },
      insurance: {
        title: "Tranzit yuk sug'urtasi",
        desc: "Tashish paytida yuzaga kelishi mumkin bo'lgan moliyaviy yo'qotishlarning oldini olish uchun keng qamrovli sug'urta dasturlarini taklif etamiz."
      },
      packaging: {
        title: "Maxsus qadoqlash",
        desc: "Kivi, sarimsoq kabi mahsulotlar uchun meva o'lchamiga va bozor estetikasiga muvofiq maxsus dizayndagi qutilarni tayyorlaymiz."
      },
      branding: {
        title: "Brend yaratish",
        desc: "Eksport tovarlaringiz uchun jozibali qadoq dizaynini yaratib, tashqi bozorlarda o'z tovar belgingizni tanitishga ko'maklashamiz."
      }
    },
    spotlights: {
      rates: {
        tag: "Amaldagi tariflar",
        title: "Yuk tashish narxlari onlayn",
        desc: "Reefer konteynerlarni yaqin davlatlar va Rossiya shaharlariga yo'l harajatini onlayn hisoblagichimiz yordamida tezda hisoblab oling.",
        btn: "Tariflarni hisoblash →"
      },
      telemetry: {
        tag: "Operatsion tahlillar",
        title: "Kamyonlarni kuzatish va chiqish loglari",
        desc: "Har kungi yuk avtomobillari harakati, manzil davlatlari va chegaralardagi bojxona rasmiylashtiruvi muddatlarini bevosita kuzatib boring.",
        btn: "Kuzatuvga kirish →"
      }
    },
    media: {
      title: "Xalqaro ta'minot va yuk tashish",
      btn: "Sotuv bo'limi bilan boglanish"
    }
  },
  az: {
    hero: {
      title: "GilaFruit: İran Bağlarını Qlobal Bazarlarla Birləşdirir",
      description: "Bizim xidmətlərimizə vizual keyfiyyət yoxlanışı, beynəlxalq standartlara uyğun qablaşdırma, gömrük rəsmiləşdirilməsi və məhsulun təravətini qoruyan ref daşımaları daxildir."
    },
    cards: {
      customs: {
        title: "Gömrük Rəsmiləşdirilməsi",
        desc: "Mürəkkəb gömrük bəyannamələri prosesini bizə həvalə edin. Mütəxəssislərimiz beynəlxalq idxal qanunvericiliyinə tam vaqif olaraq Astara sərhədində operativ rəsmiləşdirmə aparır.",
        btn: "Gömrük detalları →"
      },
      transport: {
        title: "Refrijerator daşımaları",
        desc: "Təzə məhsulları Rusiya, Avrasiya və Körfəz ölkələrinə məsafədən asılı olmayaraq, tam soyuq zəncir daxilində vaxtında çatdırırıq.",
        btn: "Avtopark və marşrutlar →"
      },
      consulting: {
        title: "Xüsusi İxrac Məsləhəti",
        desc: "Analitiklərimiz hədəf bazarlarınızın şərtlərini öyrənərək optimal qablaşdırma və rəqabətədavamlı qiymətlərlə sizə dəstək olurlar.",
        btn: "Ekspert məsləhəti istəyin →"
      }
    },
    introParagraph: "Meyvə-tərəvəz ixracatı sahəsində 20 ildən artıq peşəkar təcrübəyə malik olan GilaFruit İranda bu sahənin pioneridir. Geniş fermer şəbəkəmiz yüksək keyfiyyətli Hayward kivi və sarımsağın fasiləsiz tədarükünü təmin edir. Astara sərhədində yerləşən 5.000 tonluq soyuducu anbarımız yükləmədən öncə ixracat standartlarına tam riayət olunmasına zəmanət verir.",
    certificationsCard: {
      title: "GilaFruit: Beynəlxalq Standartlar ilə Zəmanətli Keyfiyyət",
      desc: "İstehlakçılarımızın sağlamlığı bizim üçün hər şeydən önəmlidir. Təhlükəsiz qida tədarükünə verdiyimiz önəm ISO 9001, ISO 22000, HACCP və GMP kimi beynəlxalq sertifikatlar ilə təsdiqlənmişdir. Bu sertifikatlar yığım, qablaşdırma, saxlama və ixrac logistikasına qədər bütün əməliyyatları əhatə edir.",
      btn: "Sertifikatlarımız"
    },
    globalPartner: {
      title: "Qlobal Logistikada Etibarlı Tərəfdaşınız",
      desc: "Muzlatıcı konteyner logistikası, anbar xidməti və gömrük tranzitlərində gecikmədən kamil şəkildə yararlanın."
    },
    grid: {
      warehousing: {
        title: "Anbar və Logistika",
        desc: "Məhsulların təravətli qalması üçün rütubət və dərəcəsi anlıq nəzarət edilən müasir soyuducu anbar kompleksimizdə saxlama xidmətləri veririk.",
        btn: "Soyuducu Depo Markəzi →"
      },
      insurance: {
        title: "Yük Sığortası",
        desc: "Yol boyu yarana biləcək risklərin qarşısını almaq və yüklərin tam təhlükəsizliyi üçün rahat beynəlxalq sığorta proqramları təklif edirik."
      },
      packaging: {
        title: "Sifarişlə Qablaşdırma",
        desc: "Kivi, sarımsaq və sera tərəvəzləri üçün məhsul növünə və bazar estetikinə uyğun xüsusi dizaynda qutular yaradırıq."
      },
      branding: {
        title: "Brend yaradılması",
        desc: "İxrac məhsullarınız üçün cəlbedici qablaşdırma dizaynı yaradaraq xarici bazarlarda brendləşmənizə təkan veririk."
      }
    },
    spotlights: {
      rates: {
        tag: "Cari ref tarifləri",
        title: "Yükdaşıma Qiymətləri",
        desc: "Muzlatıcı konteynerlərin səfər xərclərini onlayn kalkulyatorumuzun köməyi ilə dərhal və şəffaf şəkildə hesablayın.",
        btn: "Tarif Hesablayıcıya Keçin →"
      },
      telemetry: {
        tag: "Əməliyyatların Təhlili",
        title: "Yük Maşınlarının İzlənməsi və Çıxış Logları",
        desc: "Kamyonların çıxış sıxlıqlarını, ölkə paylaşımlarını və gömrük qurumlarındakı növbə loglarını onlayn pencerədən izləyin.",
        btn: "İzləmə Sistemini Açın →"
      }
    },
    media: {
      title: "Beynəlxalq İxrac Logistikası",
      btn: "Satış Şöbəsi ilə Əlaqə"
    }
  },
  uk: {
    hero: {
      title: "GilaFruit: поєднання садів Ірану з глобальними ринками",
      description: "Наш спектр послуг охоплює калібрування продукції, конкурентне ціноутворення, повне митне декларування та безпечне транспортування рефрижераторами для 100% збереження якості."
    },
    cards: {
      customs: {
        title: "Митне оформлення",
        desc: "Довірте складні процедури декларування нам. Наші митні брокери знають специфіку та вимоги фітосанітарного контролю багатьох країн на кордоні в Астарі.",
        btn: "Деталі розмитнення →"
      },
      transport: {
        title: "Міжнародне рефрижераторне транспортування",
        desc: "Ми застосовуємо сучасний рефрижераторний автотранспорт для швидкої доставки свіжих фруктів та овочів у країни Європи, Перської затоки та Євразії.",
        btn: "Маршрути та автопарк →"
      },
      consulting: {
        title: "Спеціалізований консалтинг з експорту",
        desc: "Аналітики GilaFruit допоможуть розрахувати оптимальну вартість логістики, підібрати відповідний тип упаковки згідно вимог покупців та погодити договори.",
        btn: "Запросити консультацію →"
      }
    },
    introParagraph: "Маючи понад двадцять років досвіду роботи на світовому ринку експорту ягід, фруктів та овочів, холдинг GilaFruit є визнаним лідером Ірану. Наша мережа фермерських садів гарантує безперебійне постачання свіжого ківі Хайвард та часнику. Власний сортувальний комплекс в Астарі ємністю понад 5000 тонн дозволяє перевіряти стандарти калібру, ваги й чистоти перед кожним відправленням.",
    certificationsCard: {
      title: "GilaFruit: Гарантія якості за світовими стандартами",
      desc: "Для нас безпека споживачів — головний пріоритет. Наша непохитна відданість безпечній їжі підтверджена сертифікатами ISO 9001, ISO 22000, HACCP та GMP. Ці правила охоплюють весь виробничий цикл — від збору врожаю з дерев до роздрібного продажу.",
      btn: "Сертифікати"
    },
    globalPartner: {
      title: "Ваш надійний логістичний партнер",
      desc: "Ефективне управління холодовим ланцюгом, склади з клімат-контролем та оперативний митний транзит кожної відвантаженої партії."
    },
    grid: {
      warehousing: {
        title: "Складське зберігання та логістика",
        desc: "Ми надаємо послуги зберігання у сучасних камерах з повним моніторингом температури та вологості для довготривалого збереження свіжості.",
        btn: "Складський хаб в Астарі →"
      },
      insurance: {
        title: "Страхування вантажів",
        desc: "Ми співпрацюємо з провідними страховими компаніями для надання вигідних програм страхування вантажів під час міжнародного транзиту."
      },
      packaging: {
        title: "Упаковка під замовлення",
        desc: "Створення та застосування фірмової картонної упаковки різного калібру, пластикових ящиків з урахуванням особливостей фруктів."
      },
      branding: {
        title: "Продвиження бренду за кордоном",
        desc: "Сучасний дизайн пакувальних матеріалів та побудова сильного образу торгової марки для довгострокової конкурентоспроможності на експортних ринках."
      }
    },
    spotlights: {
      rates: {
        tag: "Актуальні тарифи фрахту",
        title: "Добові тарифи фрахту онлайн",
        desc: "Оцініть ваші логістичні витрати на доставку рефрижераторами за хвилину за допомогою нашого інтерактивного інструменту.",
        btn: "Перейти до калькулятора тарифів →"
      },
      telemetry: {
        tag: "Аналітика поставок",
        title: " رهگیری کامیونها Амір вивантаження",
        desc: "Слідкуйте за рухом транспортних засобів, завантаженістю морських терміналів та митними транзитними логами компанії GilaFruit у реальному часі.",
        btn: "Відкрити телеметрію доставок →"
      }
    },
    media: {
      title: "Міжнародна логістика та постачання",
      btn: "Зв'язатись з експортним відділом"
    }
  },
  hi: {
    hero: {
      title: "गीलाफ्रूट: ईरानी बागों को वैश्विक बाजारों से जोड़ना",
      description: "हमारी सेवाएँ उत्पाद चयन, प्रतिस्पर्धी मूल्य निर्धारण, सीमा शुल्क निकासी, और कोल्ड-चेन गुणवत्ता की सुरक्षा करने वाले अंतरराष्ट्रीय रेफ्रिजरेटर शिपिंग को कवर करती हैं।"
    },
    cards: {
      customs: {
        title: "सीमा शुल्क निकासी",
        desc: "कस्टम क्लीयरेंस की जटिल प्रक्रिया हमारे विशेषज्ञों पर छोड़ दें। अंतरराष्ट्रीय आयात नियमों में पूरी महारत के साथ, हम अस्टारा बॉर्डर पर त्वरित और परेशानी मुक्त समाधान देते हैं।",
        btn: "सीमा शुल्क विवरण देखें →"
      },
      transport: {
        title: "रेफ्रिजरेटर परिवहन (रीफर)",
        desc: "हम ताजे फल और सब्जियों को सुरक्षित, 100% कोल्ड-चेन नियंत्रण के साथ यूरेशिया और खाड़ी देशों में सबसे कम समय में पहुंचाने के लिए अपने रीफर जहाजों और ट्रकों का उपयोग करते हैं।",
        btn: "मार्ग और बेड़े का विवरण देखें →"
      },
      consulting: {
        title: "विशेषज्ञ निर्यात परामर्श",
        desc: "हमारे विश्लेषक आपके लक्षित बाजारों की स्थितियों का अध्ययन करके सबसे उपयुक्त पैकेजिंग और प्रतिस्पर्धी कीमतों को निर्धारित करने में आपकी सहायता करते हैं।",
        btn: "परामर्श के लिए अनुरोध करें →"
      }
    },
    introParagraph: "फल और सब्जी निर्यात उद्योग में दो दशकों से अधिक के समृद्ध अनुभव के साथ गीलाफ्रूट ईरान की अग्रणी निर्यात संस्था है। किसानों का हमारा व्यापक नेटवर्क उच्च गुणवत्ता वाले हेवर्ड कीवी और ताजे लहसुन की निरंतर आपूर्ति सुनिश्चित करता है। सैट सीमा पर स्थित हमारे 5,000 टन क्षमता वाले कोल्ड-भंडारण केंद्र प्रशीतन मानकों को पूरी तरह सुनिश्चित करते हैं।",
    certificationsCard: {
      title: "गीलाफ्रूट: वैश्विक मानकों के साथ गारंटीकृत गुणवत्ता",
      desc: "हमारे उपभोक्ताओं का स्वास्थ्य हमारे लिए सर्वोपरि है। खाद्य सुरक्षा और गुणवत्ता के प्रति हमारा समर्पण ISO 9001, ISO 22000, HACCP और GMP जैसे वैश्विक स्तर पर मान्यता प्राप्त प्रमाणपत्रों से प्रमाणित है, जो तुड़ाई से लेकर पैकेजिंग और परिवहन तक लागू होते हैं।",
      btn: "आधिकारिक प्रमाण पत्र"
    },
    globalPartner: {
      title: "वैश्विक रसद में आपका विश्वसनीय भागीदार",
      desc: "रीफर कंटेनर रसद प्रबंधन, सुरक्षित कोल्ड स्टोरेज और बिना किसी देरी के सीमा शुल्क पारगमन समाधान।"
    },
    grid: {
      warehousing: {
        title: "भंडारण और वितरण",
        desc: "हम तापमान और आर्द्रता नियंत्रित आधुनिक शीत भंडारण गृहों में सुरक्षित भंडारण की व्यवस्था प्रदान करते हैं ताकि उत्पाद ताजे बने रहें।",
        btn: "कोल्ड डिपो केंद्र →"
      },
      insurance: {
        title: "कार्गो और शिपमेंट बीमा",
        desc: "यात्रा के दौरान आपके शिपमेंट की पूर्ण वित्तीय सुरक्षा बनाए रखने के लिए विविध बीमा विकल्प उपलब्ध कराए जाते हैं।"
      },
      packaging: {
        title: "कस्टम निर्यात पैकेजिंग",
        desc: "हम कीवी, लहसुन और अन्य उत्पादों के लिए फलों के आकार और सौंदर्य प्राथमिकताओं के अनुरूप सुंदर और मजबूत डिजाइनों के बक्से तैयार करते हैं।"
      },
      branding: {
        title: "ब्रांड निर्माण और विपणन",
        desc: "आपके कृषि उत्पादों के लिए आकर्षक डिजाइन बनाकर विदेशी बाजारों में आपके ब्रांड की पहचान स्थापित करने में हम योगदान देते हैं।"
      }
    },
    spotlights: {
      rates: {
        tag: "नवीनतम कंटेनर भाड़ा डरे",
        title: "दैनिक माल ढुलाई दरें",
        desc: "अपने इच्छित गंतव्य के लिए माल ढुलाई लागत का अनुमान लगाने के लिए हमारे भाड़ा कैलकुलेटर का तत्काल उपयोग करें।",
        btn: "भाड़ा कैलकुलेटर तक पहुंचें →"
      },
      telemetry: {
        tag: "परिचालन डेटा विश्लेषण",
        title: "ट्रक ट्रैकिंग एवं आंकड़े",
        desc: "दैनिक ट्रक यात्राओं की संख्या, गंतव्यों के अनुपात और सीमा शुल्क चौकियों पर हमारे शिपमेंट की वास्तविक समय टेलीमेट्री को ट्रैक करें।",
        btn: "ट्रैकिंग आंकड़े देखें →"
      }
    },
    media: {
      title: "अंतरराष्ट्रीय रसद और आपूर्ति प्रणाली",
      btn: "निर्यात बिक्री टीम से संपर्क करें"
    }
  }
};

export function getServicesTranslations(language: string): ServicesTranslation {
  return servicesTranslations[language] || servicesTranslations.en;
}
