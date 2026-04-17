export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const SITE_NAME = 'All About Poland';
const SITE_URL = 'https://allaboutpoland.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/default.jpg`;

export function getPageTitle(title: string): string {
  if (title === SITE_NAME) return title;
  return `${title} — ${SITE_NAME}`;
}

export function getCanonicalURL(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function getOGImageURL(image?: string): string {
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.startsWith('http')) return image;
  return `${SITE_URL}${image}`;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalURL(item.url),
    })),
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: string;
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    image: getOGImageURL(options.image),
    author: {
      '@type': 'Person',
      name: options.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalURL(options.url),
    },
    wordCount: options.wordCount,
    inLanguage: 'ru',
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Информационный портал о жизни в Польше для русскоязычных',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'ru',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: 'Информационный портал о жизни в Польше для русскоязычных',
    sameAs: [
      'https://t.me/allaboutpoland',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@allaboutpoland.com',
      contactType: 'customer support',
      availableLanguage: ['Russian', 'Polish', 'English'],
    },
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
