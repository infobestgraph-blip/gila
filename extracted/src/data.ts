import { Product, BlogArticle, Certificate, Testimonial, CalendarItem } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Export of Various Iranian Kiwis',
    slug: 'hayward-kiwifruit',
    category: 'fruit',
    shortDescription: 'World-renowned Iranian Hayward kiwifruit, hand-picked in Gilan (Astara & Talesh), triple-sorted and custom packed for global transit.',
    fullDescription: 'Our signature Hayward Kiwifruit is grown in the fertile soils of Astara and Talesh under ideal climate conditions near the Caspian Sea. We monitor the sugar content (Brix level) carefully to ensure peak flavor upon arrival. Each kiwi is picked by hand, transferred directly to our modern sorting centers, and graded by weight, size, and shape. We utilize advanced cold storage facilities to extend shelf life for up to six months without loss of quality.',
    season: 'October to May',
    markets: ['Russia', 'Belarus', 'Kazakhstan', 'Uzbekistan', 'India', 'UAE'],
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Grade A (70g to 110g+)',
      weight: 'Available in 3kg, 4kg, and 10kg cartons',
      packaging: 'Single-layer plastic trays inside solid corrugated fiberboard boxes, or bulk wood baskets',
      standards: 'ISO 22000, HACCP, Halal Certified, Plant Protection Org Permit',
      type: 'Hayward Kiwifruit',
      flavor: 'Tangy-sweet, aromatic, refreshing',
      color: 'Bright emerald-green pulp with white core',
      dimensions: '55mm - 75mm caliber',
      brix: '12.5 - 14.5',
      hsCode: '08105000',
      origin: 'Iran (Astara & Talesh)',
      availableMonths: 'Oct - May'
    }
  },
  {
    id: 'p2',
    name: 'Fresh Iranian Garlic for Export',
    slug: 'fresh-garlic',
    category: 'vegetable',
    shortDescription: 'High-pungency, plump white and violet-striped garlic, dried perfectly and braided or loose-packed in mesh bags.',
    fullDescription: 'Iranian garlic is celebrated for its highly concentrated essential oils and rich flavor profile, outperforming standard varieties in aroma and longevity. Grown primarily in sandy-loam soils, GilaFruit exports garlic that is thoroughly cleaned, roots trimmed, and natural skins cured to prevent mildew. It represents a vital health product in Eurasian and European culinary markets.',
    season: 'May to October (Fresh), Year-Round (Dry)',
    markets: ['Russia', 'Belarus', 'Estonia', 'Azerbaijan', 'Iraq'],
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Diameter 4.5cm, 5.0cm, 5.5cm, 6.0cm & up',
      weight: 'Packed in 5kg, 10kg plastic crates or mesh bags',
      packaging: 'Mesh bags, open carton boxes, or lightweight plastic baskets',
      standards: 'SGS quality verified, Phytosanitary Certificate',
      type: 'Fresh Garlic',
      flavor: 'Strong, pungent, slightly sweet',
      color: 'White to light purple',
      dimensions: 'cm 41x 27 x19',
      brix: '10-15',
      hsCode: '07032000',
      origin: 'Iran',
      availableMonths: 'Feb - Aug'
    }
  },
  {
    id: 'p3',
    name: 'Export of Iranian Round and Oval Watermelon',
    slug: 'export-watermelon',
    category: 'fruit',
    shortDescription: 'Crisp, high-Brix oval watermelons (Charleston Gray & Crimson Sweet), shipped securely in heavy-duty octabins.',
    fullDescription: 'GilaFruit sources premium watermelons during the hot seasons from Iran’s southern and western agricultural hubs. These watermelons are chosen for their deep red pulp, robust rind thickness (highly resistant to cracking during export logistics), and exceptional sweetness. Our quality team checks rind integrity and weight distribution for every single melon.',
    season: 'April to September',
    markets: ['Russia', 'Belarus', 'Turkey', 'Iraq', 'Oman'],
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Grade A: 6kg to 12kg per piece',
      weight: 'Bulk load or wooden pallets container',
      packaging: 'Cardboard Octabins (approx. 500kg per bin) or loose bedding straw',
      standards: 'GlobalGAP compliance checks, SPS Quarantine Clearance',
      type: 'Charleston Gray Watermelon',
      flavor: 'Intensely sweet, crisp, juicy',
      color: 'Deep ruby red flesh, pale green stripes',
      dimensions: 'Oval: 30cm - 45cm length',
      brix: '11 - 13',
      hsCode: '08071100',
      origin: 'Iran',
      availableMonths: 'Apr - Sep'
    }
  },
  {
    id: 'p4',
    name: 'Export of Various Types of Lettuce from Iran',
    slug: 'lettuce-export',
    category: 'vegetable',
    shortDescription: 'Fresh leafy Romaine and tightly packed Iceberg lettuce harvested at dawn, pre-cooled and packaged under strict sanitary standards.',
    fullDescription: 'Our lettuce crops thrive in Gilan’s mineral-rich soils and the well-watered river basins of northern Iran. Hand-picked at peak freshness to capture absolute crispness, each head is cleaned, calibrated by weight, and sorted into custom ventilated cartons to prevent condensation.',
    season: 'November to April',
    markets: ['Russia', 'Belarus', 'Kazakhstan', 'Uzbekistan', 'Azerbaijan'],
    image: 'https://images.unsplash.com/photo-1629115911440-e2ce8d9ece45?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Heads: 300g to 600g per piece',
      weight: 'Standard 8kg box packing',
      packaging: 'Cardboard crates with dual-layered protective food plastic wraps',
      standards: 'HACCP Safe Food Compliant, Phytosanitary Vetted',
      type: 'Romaine & Iceberg Lettuce',
      flavor: 'Cool, crisp, slightly sweet leafy notes',
      color: 'Bright jade-green outer layer, pale creamy heart',
      dimensions: 'Standard wholesale sizing (12 heads per box)',
      brix: '4 - 5',
      hsCode: '07051100',
      origin: 'Iran',
      availableMonths: 'Nov - Apr'
    }
  },
  {
    id: 'p5',
    name: 'Iranian Export Bell Pepper Varieties',
    slug: 'bell-pepper-export',
    category: 'vegetable',
    shortDescription: 'Spectacular greenhouse-grown sweet bell peppers (Red, Yellow, Orange), exceptionally thick-walled and polished.',
    fullDescription: 'These bell peppers are nurtured in state-of-the-art agricultural greenhouses in central and northern Iran. Characterized by incredibly uniform four-lobe shapes, pristine skin glow, and heavy weight, our peppers are hydro-cooled immediately after harvest to preserve moisture and crunch.',
    season: 'October to June',
    markets: ['Russia', 'Belarus', 'UAE', 'Qatar', 'Oman'],
    image: 'https://images.unsplash.com/photo-1563565315-f5b994071ec2?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Jumbo Class: 80mm - 110mm caliber',
      weight: '5kg EPS / Carton Boxes with cell dividers',
      packaging: 'Each pepper individually wrapped in custom breathing sleeves',
      standards: 'GlobalGAP Cert, TUV ISO 9001 Audited',
      type: 'Greenhouse Sweet Bell Pepper',
      flavor: 'Crisp, sweet, rich flesh flavor',
      color: 'High-contrast Red, Gold, Green, and Orange',
      dimensions: 'Caliber 80mm+ blocky shape',
      brix: '6 - 8',
      hsCode: '07096010',
      origin: 'Iran',
      availableMonths: 'Oct - Jun'
    }
  },
  {
    id: 'p6',
    name: 'Iranian Export Greenhouse Tomatoes',
    slug: 'greenhouse-tomatoes',
    category: 'vegetable',
    shortDescription: 'Brilliant cluster and oval beef tomatoes with thick skin resistant to logistics transit stress.',
    fullDescription: 'Selected under premium seed cultivars, our export-destination tomatoes are grown in environment-controlled greenhouses. They feature a remarkably solid interior with few cavities, maintaining excellent structural integrity under heavy pallet weights, perfect for the long journey through Caucasus transit gates.',
    season: 'October to July',
    markets: ['Russia', 'Belarus', 'Georgia', 'Armenia', 'Kazakhstan'],
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Caliber 57mm - 67mm Grade A',
      weight: 'Double-layer 6kg or 10kg cartons',
      packaging: 'Cardboard cartons with protective molded plastic support frames',
      standards: 'EAC Customs Vetted, SGS Certified',
      type: 'Beef & Cluster Tomatoes',
      flavor: 'Acidic sweet balance, dense flesh',
      color: 'Immaculate crimson red, glossy outer skin',
      dimensions: 'Caliber 55g - 180g units',
      brix: '5.5 - 7',
      hsCode: '07020000',
      origin: 'Iran',
      availableMonths: 'Oct - Jul'
    }
  },
  {
    id: 'p7',
    name: 'Parsley with Fresh Iranian Quality',
    slug: 'parsley-export',
    category: 'vegetable',
    shortDescription: 'Lush, highly aromatic flat-leaf parsley bundles, packed instantly with crushed ice to prevent wilting.',
    fullDescription: 'Our parsley is grown in high-humidity Gilan riverbank fields, ensuring strong stems and rich essential oils. Bundled by hand at daybreak, they are cold-rinsed and packed inside isolated cases with layers of clean flake ice, arriving as fresh and green as the morning they were cut.',
    season: 'October to May',
    markets: ['Russia', 'Azerbaijan', 'Georgia', 'EAEU Checkpoints'],
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Stem lengths: 20cm to 30cm',
      weight: 'Bundles of 150g - 250g in water-tight boxes',
      packaging: 'EPS isothermal containers with shaved ice liners',
      standards: 'SPS Certificate, Halal Food Standard',
      type: 'Fresh Flat-leaf Parsley',
      flavor: 'Bright, citrus-peppery, pure herbal',
      color: 'Intense rich dark-green leaf crowns',
      dimensions: '20-30cm bunch height',
      brix: 'N/A',
      hsCode: '07099990',
      origin: 'Iran (Caspian watershed)',
      availableMonths: 'Oct - May'
    }
  },
  {
    id: 'p8',
    name: 'Quality Fresh Iranian Export Dill',
    slug: 'dill-export',
    category: 'vegetable',
    shortDescription: 'Delicate, highly fragrant feathery dill sprigs, carefully harvested and clean-shipped in ice-reefer transport.',
    fullDescription: 'Iranian dill is highly prized in Northern European and Russian cuisines for its fragrant flavor and high density of herbal trace elements. GilaFruit monitors moisture level and packing density to eradicate any risk of yellowing stems during export transit.',
    season: 'October to May',
    markets: ['Russia', 'Belarus', 'Customs Samur Checkpoint'],
    image: 'https://images.unsplash.com/photo-1588711928096-7d60914da6bf?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Bouquets 25cm average scale',
      weight: '10kg ice-packed coolers',
      packaging: 'Hermetic Styrofoam packing lined with clean food-ice blocks',
      standards: 'ISPM-15 Phytosanitary Compliance Vetted',
      type: 'Fresh Dill Herb',
      flavor: 'Pungent, sweet-anise warm aroma',
      color: 'Delicate feathery dark green leafing',
      dimensions: '25cm height bunches',
      brix: 'N/A',
      hsCode: '07099990',
      origin: 'Iran',
      availableMonths: 'Oct - May'
    }
  },
  {
    id: 'p9',
    name: 'Dry Garlic with Iranian Export Quality',
    slug: 'dry-garlic-export',
    category: 'vegetable',
    shortDescription: 'Perfectly cured, dry export garlic bulbs, with strong paper sleeve skins, braided elegantly or packed in poly nets.',
    fullDescription: 'Our dry garlic undergoes a comprehensive field curing process after harvesting in the summer. Roots are machine-trimmed, dust is blown off, and the outer paper husk is stabilized to guarantee clean, silver-shining, mold-resistant bulbs suited for long room-temperature shelf displays across northern retail grids.',
    season: 'Year-Round',
    markets: ['Russia', 'Latvia', 'Lithuania', 'Belarus', 'Uzbekistan'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Diameter: 5.5cm, 6.0cm, 6.5cm, 7.0cm+',
      weight: 'Packed in 3kg, 5kg, or 10kg red/purple plastic net bags',
      packaging: 'Highly ventilated net bags or open mesh cartons',
      standards: 'ISO 22000, SGS Chemical Residue Compliance certified',
      type: 'Export Quality Dry Garlic',
      flavor: 'Super concentrated pungent flavor, intense hot notes',
      color: 'Bright white with light purple striations',
      dimensions: 'Diameter 50mm - 75mm+',
      brix: '14 - 18',
      hsCode: '07032000',
      origin: 'Iran',
      availableMonths: 'Year-Round'
    }
  },
  {
    id: 'p10',
    name: 'Export of Various Types of Grapes from Iran',
    slug: 'seedless-grapes',
    category: 'fruit',
    shortDescription: 'Crisp, juicy Iranian seedless grapes (Asgari & Red Globe), with healthy green stems and firm berry connection.',
    fullDescription: 'Picked from our high-altitude partner vineyards, our seedless red and green grapes are chilled immediately post-harvest to preserve the natural white bloom and stem moisture. These grapes feature a highly concentrated sugar density and thick, snap-crunch skins.',
    season: 'July to November',
    markets: ['Russia', 'Belarus', 'Armenia', 'UAE', 'Saudi Arabia'],
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Berry caliber: 18mm - 24mm Grade A',
      weight: '8kg Carton with individual breathable mesh baglets',
      packaging: 'Clamshell transparent cups inside master cardboard boxes',
      standards: 'HACCP Codex Alimentarius Verified, GlobalGAP',
      type: 'Seedless Red & Green Grapes',
      flavor: 'Warm honey sweetness, crisp bite',
      color: 'Luminous light amber-green or ruby-crimson',
      dimensions: 'Berry diameter 18-24mm',
      brix: '16 - 20',
      hsCode: '08061010',
      origin: 'Iran',
      availableMonths: 'Jul - Nov'
    }
  },
  {
    id: 'p11',
    name: 'Fresh Iranian Export Broccoli',
    slug: 'green-broccoli',
    category: 'vegetable',
    shortDescription: 'Ultra-compact, dark-green organic broccoli heads, ice-packed inside custom thermally isolated compartments.',
    fullDescription: 'Our broccoli florets are grown in Gilan’s mountainous microclimates. Each crown is hand-selected for compact nodes, with the stalk stem trimmed flush. By packing them in thick-walled isothermal containers with food-safe granular flake ice, we prevent yellowing and guarantee store crispness.',
    season: 'November to May',
    markets: ['Russia', 'Belarus', 'Azerbaijan', 'EAEU region'],
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Dome size 12cm - 16cm Caliber',
      weight: '8kg foam cooler boxes with ice packing',
      packaging: 'Isothermal EPS containers with dynamic water-drainage slots',
      standards: 'SGS docks inspection certificate, Plant Quarantine Permit',
      type: 'Green Field Broccoli',
      flavor: 'Rich, sweet, herbaceous earthy crunch',
      color: 'Uniform deep forest-green, free of yellow nodes',
      dimensions: 'Diameter 100mm - 150mm crowns',
      brix: '5 - 6',
      hsCode: '07049010',
      origin: 'Iran (Gilan Heights)',
      availableMonths: 'Nov - May'
    }
  },
  {
    id: 'p12',
    name: 'Iranian Super Export Cherries',
    slug: 'sweet-cherries',
    category: 'fruit',
    shortDescription: 'Stunning dark-crimson sweet cherries, hydro-cooled and graded in customized styrofoam boxes.',
    fullDescription: 'GilaFruit sweet cherries represent the premium peak of Persian horticulture. Grown under precise solar exposure and temperature variations, they are picked before noon, hydro-cooled at 1°C, and mechanically graded by weight, resulting in large, snappy berries with pristine green stems.',
    season: 'June to August',
    markets: ['Russia', 'Qatar', 'Kuwait', 'Belarus', 'Bahrain'],
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=600',
    specs: {
      size: 'Gigantic Caliber: 24mm - 30mm+',
      weight: '5kg Polystyrene containers with dry ice cooling blocks',
      packaging: '5kg EPS cases with custom food absorption lining',
      standards: 'Phytosanitary inspection clearance, TUV QMS verified',
      type: 'Siah-e-Mashhad Sweet Cherry',
      flavor: 'Intensely juicy, sweet wild berry richness',
      color: 'Deep mahogany black-red, highly glossy skin',
      dimensions: 'Caliber 24mm - 30mm berries',
      brix: '15 - 19',
      hsCode: '08092900',
      origin: 'Iran',
      availableMonths: 'Jun - Aug'
    }
  }
];

export const INITIAL_BLOGS: BlogArticle[] = [
  {
    id: 'b_importing_kiwi_russia',
    title: 'Buying and Importing Kiwi to Russia: Guide to Bulk Pricing & Supply',
    slug: 'buying-importing-kiwi-russia',
    language: 'en',
    publishDate: 'October 6, 2025',
    summary: 'Iran is now one of the largest kiwi suppliers in the world, facilitating the bulk sale and export of Iranian kiwi to Russia annually. A major portion of the Iranian kiwi destined for import to Russia is cultivated extensively in the provinces of Gilan and Mazandaran, particularly in the regions of Astara, Talesh, and C ...',
    content: 'This comprehensive guide details the logistics, standards, and import tariffs associated with bulk purchasing of premium Iranian Hayward kiwis for Russian wholesale grids in Moscow, Saint Petersburg, and Novosibirsk.',
    tags: ['Export', 'Kiwi', 'Russia'],
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_look_kiwi_exports',
    title: 'look at kiwi exports from Iran',
    slug: 'look-at-kiwi-exports',
    language: 'en',
    publishDate: 'July 25, 2022',
    summary: 'Kiwi is not originally native to Iran and was first produced and sold in bulk in China. Iran ventured into Hayward kiwi production and export, capitalizing on its worldwide popularity. ...',
    content: 'Analysing the historical development of Iranian Hayward kiwifruit plantations in Talesh and Astara, and how GilaFruit established high-volume wholesale routes to Eurasia.',
    tags: ['articles', 'Kiwi', 'Export'],
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_why_buy_garlic',
    title: 'Why buy Iranian garlic from Gilafruit ?',
    slug: 'why-buy-garlic',
    language: 'en',
    publishDate: 'July 9, 2022',
    summary: 'Purchasing and importing Iranian garlic is an important process that requires having a representative to inspect and be on the job at the time of planting, harvesting and packing garlic. ...',
    content: 'Why GilaFruit remains the preferred choice of dry white and violet garlic for EAEU trading groups. Our unique soil preparation, sulfur-free organic drying, and robust packing methodologies.',
    tags: ['articles', 'Garlic', 'GilaFruit'],
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_specs_hayward',
    title: 'Specifications of Hayward green kiwi',
    slug: 'specifications-hayward-kiwi',
    language: 'en',
    publishDate: 'June 12, 2022',
    summary: 'Renowned for its exceptional qualities and export potential, Iranian kiwi consistently meets high standards, thanks partly to meticulous storage practices that preserve freshness ...',
    content: 'A complete sheet detailing the Brix values (12.5-14+), calibers (70g-110g+), dry matter ratio, and shelf stability indicators of Hayward kiwis prepared in our modern packing houses.',
    tags: ['articles', 'Kiwi', 'Specs'],
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_kiwi_best_world',
    title: 'Iranian kiwi one of the best in the world',
    slug: 'iranian-kiwi-best-in-world',
    language: 'en',
    publishDate: 'June 2, 2022',
    summary: 'Moderate temperatures and high humidity are the main causes of these conditions. In fact, sultry conditions and moderate tropics-like temperature conditions are the keys to the fruit-bearing requirements. ...',
    content: 'Why Gilans unique humid coastal context and high loam soil deposits under the Alborz mountain range create the worlds most aromatic, sweet, and juice-dense Hayward kiwis.',
    tags: ['articles', 'Kiwi', 'Quality'],
    image: 'https://images.unsplash.com/photo-1589139885816-e568ba7a6ba8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_how_to_buy_garlic',
    title: "How to buy Iran's export garlic with quality and reasonable price?",
    slug: 'how-to-buy-garlic-price',
    language: 'en',
    publishDate: 'May 30, 2022',
    summary: "Introducing Iran's Export Garlic Iran's export garlic has carved a niche for itself in the global market, celebrated for its exceptional quality and competitive pricing. This aromatic bulb, a staple in Iranian cuisine, has garnered international attention, making Iran a prominent garlic exporter. If you&#82...",
    content: 'Navigating trade agreements, customs checks, phytosanitary requirements, and choosing suitable mesh versus crate packing systems to procure Premium Iranian vacuum-cured garlic at factory rates.',
    tags: ['articles', 'Garlic', 'Guide'],
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_lifting_ban_india',
    title: 'Lifting the ban on the import of Iranian kiwi to India',
    slug: 'lifting-ban-kiwi-india',
    language: 'en',
    publishDate: 'May 29, 2022',
    summary: 'Export of Iranian Kiwi stands as one of the top 5 kiwi producing countries globally, sharing the stage with renowned exporters like Italy, China, New Zealand, and Chile. Iran annually produces over 280,000 tons of kiwi, exporting this delicious fruit to various countries, including Russia, India, Azerbaijan, Armen ...',
    content: 'Exploring the standard protocols, plant quarantine clearance requirements, and regulatory milestones that re-opened the high-volume Indian import market for premium Iranian kiwis.',
    tags: ['information', 'Kiwi', 'India'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_types_kiwi_export',
    title: 'What are the Types of Iranian kiwi for export?',
    slug: 'types-of-kiwi-export',
    language: 'en',
    publishDate: 'May 17, 2022',
    summary: 'Kiwi Varieties in Iran Iran boasts a rich selection of kiwi varieties, each with its unique appeal and export potential. Types of Iranian kiwi can be broadly categorized into two shapes: twin and oval. Additionally, they are classified into distinct varieties, including the renowned Hayward Kiwi, the vibrant Ir ...',
    content: 'From Red-Flesh kiwi varieties to Gold and Hayward kiwis, we discuss harvest seasons, brix indices, and packaging standards optimized for air terminal transit versus sea container trails.',
    tags: ['packing', 'Kiwi', 'Variety'],
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_sort_kiwi_machine',
    title: 'How to sort kiwi with sorting machine',
    slug: 'how-to-sort-kiwi',
    language: 'en',
    publishDate: 'May 11, 2022',
    summary: 'Technology in the Kiwifruit Industry: The Rise of Kiwi Sorting Machine The advent of technology has revolutionized various aspects of the agricultural industry, including the planting, cultivation, harvesting, and kiwi export processes. In recent years, innovative kiwi sorting machine have emerged, automating the sort ...',
    content: 'Reviewing our integration of modern optical weight-calibrator and volume-sizing sorters that handle more than 50 tons per day with zero mechanical bruising.',
    tags: ['Export', 'Tech', 'Sorting'],
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b_kiwi_caliber_buy',
    title: 'Buying Different Kinds of Iranian Kiwi Caliber',
    slug: 'buying-kiwi-caliber',
    language: 'en',
    publishDate: 'May 5, 2022',
    summary: 'Kiwi Export Caliber: A Key Factor in Kiwi Trade Before buying kiwi fruit for export, traders should pay attention to various factors. One crucial aspect is the kiwi caliber of the export fruit, which we will explore in detail below. At Gilafruit, we utilize advanced kiwi sorting machine like MAF RODA to ensure precise ...',
    content: 'How caliber categories (ranging from 40-count to 120-count trays) map to retail preferences across Eurasian and Gulf ports. Learn what caliber maximizes your retail profit margins.',
    tags: ['articles', 'Kiwi', 'Caliber'],
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600'
  }
];

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Phytosanitary Health & Quarantine Permit',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300',
    description: 'Issued by the Plant Protection Organization, verifying complete absence of pests, chemical residues, or mold.'
  },
  {
    id: 'c2',
    title: 'HACCP Food Safety Certificate',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=300',
    description: 'International Hazard Analysis Critical Control Point standard compliance, covering our entire sorting, packing and transit pipeline.'
  },
  {
    id: 'c3',
    title: 'ISO 22000:2018 Management System',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300',
    description: 'Confirms that GilaFruit complies with the premier global food chain safety management requirements.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dmitry Smirnov',
    company: 'EvroTorg Wholesale LLC',
    country: 'Minsk, Belarus',
    text: '“GilaFruit has been our primary Iranian supplier of Hayward Kiwis for six seasons. The Brix level is consistently high, packaging boxes do not tilt, and their customer service in Russian is outstanding.”',
    rating: 5
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    company: 'Magnit Logistika Holding',
    country: 'Krasnodar, Russia',
    text: '“We appreciate GilaFruit’s attention to detail on the fresh garlic braids. Not a single bulb showed decay, and they cleared customs at Astara border impeccably fast.”',
    rating: 5
  },
  {
    id: 't3',
    name: 'Farid Al-Maktoum',
    company: 'Prime Oasis Fruits Co.',
    country: 'Dubai, UAE',
    text: '“GilaFruit sweet cherries arrived in Dubai via temperature-monitored air cargo with impeccable stems and extreme crunchiness. The packaging in styrofoam with dry ice is state-of-the-art.”',
    rating: 5
  }
];

export const INITIAL_CALENDAR: CalendarItem[] = [
  {
    id: 'cal1',
    productName: 'Hayward Kiwifruit',
    category: 'fruit',
    monthsAvailable: [true, true, true, true, false, false, false, false, false, true, true, true] // Oct - Apr
  },
  {
    id: 'cal2',
    productName: 'Fresh Garlic',
    category: 'vegetable',
    monthsAvailable: [true, true, false, false, true, true, true, true, true, true, true, true] // May - Oct & Dry stock (mostly active except spring gaps)
  },
  {
    id: 'cal3',
    productName: 'Watermelon',
    category: 'fruit',
    monthsAvailable: [false, false, false, true, true, true, true, true, true, false, false, false] // Apr - Sep
  },
  {
    id: 'cal4',
    productName: 'Seedless Grapes',
    category: 'fruit',
    monthsAvailable: [false, false, false, false, false, false, true, true, true, true, true, false] // Jul - Nov
  },
  {
    id: 'cal5',
    productName: 'Sweet Cherries',
    category: 'fruit',
    monthsAvailable: [false, false, false, false, false, true, true, true, false, false, false, false] // Jun - Aug
  },
  {
    id: 'cal6',
    productName: 'Green Broccoli',
    category: 'vegetable',
    monthsAvailable: [true, true, true, true, true, false, false, false, false, false, true, true] // Nov - May
  }
];
