import { Product, BlogArticle, Certificate, Testimonial, CalendarItem, ContactMessage } from '../types';
import { INITIAL_PRODUCTS, INITIAL_BLOGS, INITIAL_CERTIFICATES, INITIAL_TESTIMONIALS, INITIAL_CALENDAR } from '../data';

// Helper to load state from localStorage or fallback to defaults
export function getLocalStorageData<T>(key: string, defaultValue: T): T {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (e) {
    console.error('Failed to parse localStorage for key: ', key, e);
  }
  return defaultValue;
}

export function saveLocalStorageData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save localStorage for key: ', key, e);
  }
}

// Initial seeding keys
export const STORAGE_KEYS = {
  PRODUCTS: 'gilafruit_products',
  BLOG_ARTICLES: 'gilafruit_blog_articles',
  CERTIFICATES: 'gilafruit_certificates',
  TESTIMONIALS: 'gilafruit_testimonials',
  CALENDAR: 'gilafruit_calendar',
  MESSAGES: 'gilafruit_contact_messages',
  PAGES_CONFIG: 'gilafruit_pages_config'
};

// Seed initial data if not present
export function seedInitialData() {
  if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
    saveLocalStorageData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
  } else {
    // Merge new initial products in case of old cached state
    const current = getLocalStorageData<Product[]>(STORAGE_KEYS.PRODUCTS, []);
    let modified = false;
    for (const ip of INITIAL_PRODUCTS) {
      if (!current.some(p => p.slug === ip.slug || p.id === ip.id)) {
        current.push(ip);
        modified = true;
      }
    }
    if (modified) {
      saveLocalStorageData(STORAGE_KEYS.PRODUCTS, current);
    }
  }
  if (!localStorage.getItem(STORAGE_KEYS.BLOG_ARTICLES)) {
    saveLocalStorageData(STORAGE_KEYS.BLOG_ARTICLES, INITIAL_BLOGS);
  } else {
    // Merge new initial blogs in case of old cached state
    const current = getLocalStorageData<BlogArticle[]>(STORAGE_KEYS.BLOG_ARTICLES, []);
    let modified = false;
    for (const ib of INITIAL_BLOGS) {
      if (!current.some(c => c.slug === ib.slug || c.id === ib.id)) {
        current.push(ib);
        modified = true;
      }
    }
    if (modified) {
      saveLocalStorageData(STORAGE_KEYS.BLOG_ARTICLES, current);
    }
  }
  if (!localStorage.getItem(STORAGE_KEYS.CERTIFICATES)) {
    saveLocalStorageData(STORAGE_KEYS.CERTIFICATES, INITIAL_CERTIFICATES);
  }
  if (!localStorage.getItem(STORAGE_KEYS.TESTIMONIALS)) {
    saveLocalStorageData(STORAGE_KEYS.TESTIMONIALS, INITIAL_TESTIMONIALS);
  }
  if (!localStorage.getItem(STORAGE_KEYS.CALENDAR)) {
    saveLocalStorageData(STORAGE_KEYS.CALENDAR, INITIAL_CALENDAR);
  }
  if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
    const defaultMessages: ContactMessage[] = [
      {
        id: 'm1',
        name: 'Ivan Petrov',
        email: 'i.petrov@eurotrade.ru',
        company: 'EuroTrade Wholesale LLC',
        message: 'Looking for a regular shipment of Hayward Kiwis to Moscow. We need 24 tons per week during December to Feb. Please send wholesale price list.',
        date: '2026-06-05T14:22:00Z'
      }
    ];
    saveLocalStorageData(STORAGE_KEYS.MESSAGES, defaultMessages);
  }
  if (!localStorage.getItem(STORAGE_KEYS.PAGES_CONFIG)) {
    const defaultPagesConfig = {
      home: {
        heroEyebrow: 'Exporting Nature’s Finest',
        heroTitle: 'With GilaFruit, taste Iranian fruits and vegetables in every corner of the world.',
        heroDescription: 'Sabz Gostaran Gilan Fruit Company is a premier exporter of pristine fresh fruits and vegetables from northern Gilan watersheds. Specialized in hand-picked kiwifruit, high-pungency dry garlic, and refreshing watermelons for EAEU, Middle Eastern, and Asian terminals.',
        companyName: 'Sabz Gostaran Gilan Fruit Co.',
        companyDescription: 'Sabz Gostaran Gilan Fruit Co. (known universally as GilaFruit) has been an agricultural cornerstone in Gilan province for over two decades. Originating with our family-run kiwi plantations in Astara and Talesh in 2001, we grew into an fully integrated production, cold-storage, packing, and international customs clearing house.',
        companyTechDescription: 'We operate state-of-the-art optical sorters, cleaning tables, and sizing conveyor belts that process up to 100 tons of fresh products daily. Our automated cooling warehouses regulate relative humidity and ethylene accumulation, ensuring fruits arrive ripe, sound, and looking immaculate at distant delivery stations.',
      }
    };
    saveLocalStorageData(STORAGE_KEYS.PAGES_CONFIG, defaultPagesConfig);
  }
}
