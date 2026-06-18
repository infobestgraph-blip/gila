// Translations for b_importing_kiwi_russia custom guide across 9 languages
export interface TranslationSchema {
  heroTag: string;
  heroSub: string;
  heroText: string;
  title: string;
  publishDate: string;
  readTime: string;
  translationBadge: string;
  intro: string;
  tocTitle: string;
  tocShowHide: string;
  tocItems: string[];
  videoChannel: string;
  videoLoading: string;
  videoLoadingSub: string;
  videoPause: string;
  videoPlaceholderCover: string;
  videoPlaceholderSub: string;
  figureA: string;
  para1: string;
  img1Alt: string;
  img1Caption: string;
  para2: string;
  chapter2Title: string;
  chapter2Para1: string;
  chapter2Para2: string;
  img2Alt: string;
  img2Caption: string;
  citiesTitle: string;
  cities: string[];
  chapter3Title: string;
  chapter3Para1: string;
  img3Alt: string;
  img3Caption: string;
  chapter4Title: string;
  chapter4Para1: string;
  certRequirements: { b: string; t: string }[];
  certGridTitle: string;
  certGridCaption: string;
  certList: { title: string; tag: string }[];
  chapter5Title: string;
  chapter5Para1: string;
  techNotes: { b: string; t: string }[];
  img5Alt: string;
  img5Caption: string;
  chapter6Title: string;
  chapter6Para1: string;
  tableHeaders: string[];
  tableRows: string[][];
  img6Alt: string;
  img6Caption: string;
  chapter7Title: string;
  chapter7Para1: string;
  hsCodeBlockTitle: string;
  hsCodeLabel: string;
  hsCodeValue: string;
  hsCodeKey1: string;
  hsCodeValue1: string;
  hsCodeKey2: string;
  hsCodeValue2: string;
  hsCodeKey3: string;
  hsCodeValue3: string;
  consultationTitle: string;
  consultationSub: string;
  consultationDesc: string;
  fullname: string;
  whatsappPhone: string;
  foreignOfficeEmail: string;
  requestPriceSheet: string;
  adviceSuccess: string;
  adviceSuccessSub: string;
  instantBuyAdvice: string;
  chapter8Title: string;
  chapter8Para1: string;
  advantages: { b: string; t: string }[];
  img7Alt: string;
  img7Caption: string;
  pricingTransparencyNote: string;
  pricingTransparencyDesc: string;
  chapter9Title: string;
  chapter9Para1: string;
  img8Alt: string;
  img8Caption: string;
  conclusionParagraph: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
}

import { faTranslations } from './kiwiRussiaTranslations_fa';
import { enTranslations } from './kiwiRussiaTranslations_en';
import { ruTranslations } from './kiwiRussiaTranslations_ru';
import { extraTranslations } from './kiwiRussiaTranslations_extra';

export const KIWI_RUSSIA_TRANSLATIONS: Record<string, TranslationSchema> = {
  en: enTranslations,
  fa: faTranslations,
  ru: ruTranslations,
  ar: extraTranslations.ar,
  tr: extraTranslations.tr,
  uz: extraTranslations.uz,
  az: extraTranslations.az,
  hi: extraTranslations.hi,
  uk: extraTranslations.uk,
};
