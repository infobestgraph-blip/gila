export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'fruit' | 'vegetable';
  shortDescription: string;
  fullDescription: string;
  season: string;
  markets: string[];
  image: string;
  specs: {
    size?: string;
    weight?: string;
    packaging?: string;
    standards?: string;
    type?: string;
    flavor?: string;
    color?: string;
    dimensions?: string;
    brix?: string;
    hsCode?: string;
    origin?: string;
    availableMonths?: string;
    [key: string]: string | undefined;
  };
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  language: 'en' | 'fa' | 'ru';
  publishDate: string;
  summary: string;
  content: string;
  tags: string[];
  image: string;
}

export interface Certificate {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  text: string;
  rating: number;
}

export interface CalendarItem {
  id: string;
  productName: string;
  category: 'fruit' | 'vegetable';
  monthsAvailable: boolean[]; // 12 booleans corresponding to Jan-Dec
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  date: string;
}
