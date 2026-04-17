# All About Poland — Полная документация проекта

## 1. Обзор проекта

**Название:** All About Poland (рабочее)
**Тип:** Информационный портал / контент-сайт
**Целевая аудитория:** Русскоязычные, переезжающие или живущие в Польше
**Язык контента:** Русский (основной), Польский и Английский (планируется)
**Аналог:** allaboutberlin.com

### Цели проекта
- Стать главным русскоязычным ресурсом о жизни в Польше
- Предоставить глубокие, экспертно-проверенные гайды по всем аспектам жизни
- Помочь с бюрократическими процессами (визы, документы, налоги)
- Монетизация через партнёрские ссылки и рекомендации сервисов

---

## 2. Технический стек

| Компонент | Технология | Версия | Назначение |
|---|---|---|---|
| Framework | Astro | 5.x | SSG, маршрутизация, сборка |
| Контент | MDX | — | Статьи с интерактивными компонентами |
| UI | Tailwind CSS | 4.x | Стилизация |
| Интерактивность | Vue.js / React (islands) | — | Калькуляторы, поиск |
| Поиск | Pagefind | — | Клиентский полнотекстовый поиск |
| Шрифты | Inter + Noto Sans | — | Основной + кириллица |
| Иконки | Lucide Icons | — | SVG-иконки |
| Аналитика | Plausible / Umami | — | Privacy-first аналитика |
| Хостинг | Vercel | — | Деплой статики |
| CMS | Keystatic / Decap CMS | — | Редактор контента |
| Email | Mailerlite / Buttondown | — | Рассылка |
| Комментарии | Giscus | — | На базе GitHub Discussions |

### Структура проекта

```
allaboutpoland/
├── src/
│   ├── content/           # MDX-контент
│   │   ├── guides/        # Гайды по категориям
│   │   │   ├── visa/
│   │   │   ├── housing/
│   │   │   ├── work/
│   │   │   ├── finance/
│   │   │   ├── health/
│   │   │   ├── education/
│   │   │   ├── business/
│   │   │   ├── daily-life/
│   │   │   └── documents/
│   │   ├── glossary/      # Глоссарий терминов
│   │   ├── tools/         # Описания инструментов
│   │   └── pages/         # Статичные страницы (about, contact)
│   ├── components/        # UI-компоненты
│   │   ├── layout/        # Header, Footer, Sidebar, TOC
│   │   ├── content/       # ArticleCard, Breadcrumbs, AuthorBox
│   │   ├── tools/         # Calculator, Checklist, Map
│   │   ├── search/        # SearchBar, SearchResults
│   │   └── common/        # Button, Alert, Callout, Badge
│   ├── layouts/           # Шаблоны страниц
│   │   ├── BaseLayout.astro
│   │   ├── GuideLayout.astro
│   │   ├── GlossaryLayout.astro
│   │   └── ToolLayout.astro
│   ├── pages/             # Маршруты
│   │   ├── index.astro
│   │   ├── guides/
│   │   ├── tools/
│   │   ├── glossary/
│   │   ├── search.astro
│   │   └── [...slug].astro
│   ├── styles/            # Глобальные стили
│   │   └── global.css
│   ├── utils/             # Утилиты
│   │   ├── seo.ts
│   │   ├── dates.ts
│   │   └── content.ts
│   └── data/              # Статические данные
│       ├── categories.ts
│       ├── navigation.ts
│       └── glossary.ts
├── public/
│   ├── images/
│   ├── documents/         # Шаблоны PDF
│   ├── robots.txt
│   ├── sitemap.xml        # Автогенерация
│   ├── favicon.ico
│   └── manifest.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── DOCUMENTATION.md
```

---

## 3. Категории контента

### 3.1 Основные разделы

| Категория | Slug | Описание | Приоритет |
|---|---|---|---|
| Переезд и визы | `/guides/visa/` | Типы виз, карта побыту, приглашения | P0 |
| Жильё | `/guides/housing/` | Аренда, покупка, коммуналка | P0 |
| Работа | `/guides/work/` | Трудоустройство, контракты, ZUS | P0 |
| Документы | `/guides/documents/` | PESEL, Zameldowanie, NIP, водительские | P0 |
| Финансы | `/guides/finance/` | Банки, налоги PIT, пособия | P1 |
| Медицина | `/guides/health/` | NFZ, врачи, аптеки, скорая | P1 |
| Бизнес | `/guides/business/` | JDG, спулка, бухгалтерия | P1 |
| Образование | `/guides/education/` | Школы, сады, вузы, нострификация | P2 |
| Быт | `/guides/daily-life/` | Транспорт, интернет, покупки | P2 |
| Глоссарий | `/glossary/` | Польские термины с переводом | P1 |

### 3.2 Типы контента

- **Гайд (guide)** — пошаговая инструкция (3000-8000 слов)
- **Статья (article)** — информационный материал (1000-3000 слов)
- **Глоссарий (glossary)** — термин + определение + контекст
- **Инструмент (tool)** — интерактивный калькулятор / чек-лист
- **Шаблон (template)** — скачиваемый документ / форма

### 3.3 Формат MDX-файла статьи

```mdx
---
title: "Как получить карту побыту в Польше в 2026 году"
description: "Пошаговая инструкция по получению карты побыту (Karta Pobytu) — документы, сроки, стоимость, частые ошибки"
category: "visa"
subcategory: "karta-pobytu"
author: "Имя Автора"
reviewedBy: "Имя Эксперта, иммиграционный юрист"
datePublished: "2026-04-15"
dateModified: "2026-04-15"
tags: ["карта побыту", "karta pobytu", "внж польша", "документы"]
relatedGuides: ["pesel", "zameldowanie", "work-permit"]
difficulty: "medium"          # easy | medium | hard
timeToRead: 15                # минуты
featured: true
draft: false
schema: "HowTo"              # тип Schema.org разметки
---

# Как получить карту побыту в Польше

<TableOfContents />

## Введение
...

## Пошаговая инструкция
...

<Callout type="warning">
Важно: подавайте заявление минимум за 45 дней до окончания визы
</Callout>

<DocumentChecklist items={[...]} />

## Связанные гайды
<RelatedGuides slugs={frontmatter.relatedGuides} />
```

---

## 4. SEO-оптимизация — Полное руководство

### 4.1 Техническое SEO

#### 4.1.1 Мета-теги (каждая страница)

```html
<!-- Основные -->
<title>{title} — All About Poland</title>
<meta name="description" content="{description, 150-160 символов}" />
<meta name="keywords" content="{ключевые слова через запятую}" />
<link rel="canonical" href="https://allaboutpoland.com/{slug}" />
<meta name="author" content="{author}" />

<!-- Языковые альтернативы (hreflang) -->
<link rel="alternate" hreflang="ru" href="https://allaboutpoland.com/ru/{slug}" />
<link rel="alternate" hreflang="pl" href="https://allaboutpoland.com/pl/{slug}" />
<link rel="alternate" hreflang="en" href="https://allaboutpoland.com/en/{slug}" />
<link rel="alternate" hreflang="x-default" href="https://allaboutpoland.com/{slug}" />

<!-- Robots -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

#### 4.1.2 Open Graph (Facebook, VK, Telegram)

```html
<meta property="og:type" content="article" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="https://allaboutpoland.com/images/og/{slug}.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="{alt текст}" />
<meta property="og:url" content="https://allaboutpoland.com/{slug}" />
<meta property="og:site_name" content="All About Poland" />
<meta property="og:locale" content="ru_RU" />
<meta property="article:published_time" content="{datePublished}" />
<meta property="article:modified_time" content="{dateModified}" />
<meta property="article:author" content="{author}" />
<meta property="article:section" content="{category}" />
<meta property="article:tag" content="{tags}" />
```

#### 4.1.3 Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="https://allaboutpoland.com/images/og/{slug}.jpg" />
<meta name="twitter:image:alt" content="{alt текст}" />
```

#### 4.1.4 robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_astro/
Disallow: /search?*

Sitemap: https://allaboutpoland.com/sitemap-index.xml
```

#### 4.1.5 Sitemap XML

Автогенерация через `@astrojs/sitemap`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://allaboutpoland.com/</loc>
    <lastmod>2026-04-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://allaboutpoland.com/guides/visa/karta-pobytu</loc>
    <lastmod>2026-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://allaboutpoland.com/images/guides/karta-pobytu.jpg</image:loc>
      <image:title>Карта побыту в Польше</image:title>
    </image:image>
  </url>
</urlset>
```

### 4.2 Schema.org — Структурированные данные (JSON-LD)

#### 4.2.1 Organization (главная страница)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "All About Poland",
  "url": "https://allaboutpoland.com",
  "logo": "https://allaboutpoland.com/images/logo.png",
  "description": "Информационный портал о жизни в Польше для русскоязычных",
  "sameAs": [
    "https://t.me/allaboutpoland",
    "https://youtube.com/@allaboutpoland",
    "https://vk.com/allaboutpoland"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@allaboutpoland.com",
    "contactType": "customer support",
    "availableLanguage": ["Russian", "Polish", "English"]
  }
}
```

#### 4.2.2 WebSite + SearchAction (главная)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "All About Poland",
  "url": "https://allaboutpoland.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://allaboutpoland.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "ru"
}
```

#### 4.2.3 Article / HowTo (страницы гайдов)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Как получить карту побыту в Польше в 2026 году",
  "description": "Пошаговая инструкция...",
  "image": "https://allaboutpoland.com/images/guides/karta-pobytu.jpg",
  "author": {
    "@type": "Person",
    "name": "Имя Автора",
    "url": "https://allaboutpoland.com/about#author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "All About Poland",
    "logo": {
      "@type": "ImageObject",
      "url": "https://allaboutpoland.com/images/logo.png"
    }
  },
  "datePublished": "2026-04-15",
  "dateModified": "2026-04-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://allaboutpoland.com/guides/visa/karta-pobytu"
  },
  "wordCount": 5200,
  "inLanguage": "ru",
  "reviewedBy": {
    "@type": "Person",
    "name": "Имя Эксперта",
    "jobTitle": "Иммиграционный юрист"
  }
}
```

#### 4.2.4 BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://allaboutpoland.com/" },
    { "@type": "ListItem", "position": 2, "name": "Визы", "item": "https://allaboutpoland.com/guides/visa/" },
    { "@type": "ListItem", "position": 3, "name": "Карта побыту", "item": "https://allaboutpoland.com/guides/visa/karta-pobytu" }
  ]
}
```

#### 4.2.5 FAQPage (для статей с FAQ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сколько стоит карта побыту?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Гербовый сбор составляет 340 злотых за временную карту побыту..."
      }
    }
  ]
}
```

#### 4.2.6 GlossaryTerm (DefinedTerm)

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Zameldowanie",
  "description": "Регистрация по месту жительства в Польше. Обязательная процедура...",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Польский глоссарий для иммигрантов"
  }
}
```

### 4.3 Семантическое ядро SEO

#### 4.3.1 Основное семантическое ядро (высокочастотные запросы)

| Кластер | Ключевые запросы | Объём (мес.) | Конкуренция | Целевая страница |
|---|---|---|---|---|
| **Переезд** | переезд в польшу, эмиграция в польшу, как переехать в польшу | 15000+ | Высокая | /guides/visa/relocating |
| **Карта побыту** | карта побыту, karta pobytu, внж польша, вид на жительство польша | 12000+ | Высокая | /guides/visa/karta-pobytu |
| **Работа** | работа в польше, работа в польше для русских, вакансии польша | 20000+ | Высокая | /guides/work/ |
| **Виза** | виза в польшу, рабочая виза польша, национальная виза польша | 10000+ | Высокая | /guides/visa/ |
| **Жильё** | аренда жилья в польше, снять квартиру в варшаве | 5000+ | Средняя | /guides/housing/ |
| **Зарплата** | зарплата в польше, средняя зарплата в польше | 8000+ | Средняя | /guides/work/salary |
| **Налоги** | налоги в польше, PIT польша, налоговая декларация польша | 3000+ | Низкая | /guides/finance/taxes |

#### 4.3.2 Среднечастотные запросы (длинный хвост)

| Кластер | Ключевые запросы | Целевая страница |
|---|---|---|
| **PESEL** | как получить pesel, pesel в польше, что такое pesel | /guides/documents/pesel |
| **Zameldowanie** | zameldowanie что это, регистрация по месту жительства польша | /guides/documents/zameldowanie |
| **ZUS** | zus польша, социальные взносы польша, пенсия польша | /guides/work/zus |
| **Банки** | открыть счёт в польше, лучший банк в польше | /guides/finance/banks |
| **NFZ** | nfz польша, бесплатная медицина польша, как прикрепиться к врачу | /guides/health/nfz |
| **JDG** | открыть фирму в польше, jdg польша, ип в польше | /guides/business/jdg |
| **Школы** | русская школа в варшаве, образование в польше для детей | /guides/education/schools |
| **NIP** | что такое nip, как получить nip в польше | /guides/documents/nip |
| **Водительские** | обменять права в польше, водительские права польша | /guides/documents/driving-license |
| **Нострификация** | нострификация диплома в польше, признание диплома | /guides/education/nostrification |

#### 4.3.3 Низкочастотные / информационные запросы

| Запрос | Тип контента | Целевая страница |
|---|---|---|
| какие документы нужны для карты побыту | HowTo / Checklist | /guides/visa/karta-pobytu#documents |
| сколько ждать карту побыту | FAQ | /guides/visa/karta-pobytu#faq |
| umowa o prace что это | Глоссарий | /glossary/umowa-o-prace |
| как вызвать скорую в польше | Гайд | /guides/health/emergency |
| налоговая декларация pit-37 пошагово | HowTo | /guides/finance/pit-37 |
| 500+ пособие на ребёнка польша | Гайд | /guides/finance/child-benefits |
| как продлить карту побыту | HowTo | /guides/visa/karta-pobytu-renewal |
| meldunek временный | Глоссарий | /glossary/meldunek |
| разница brutto netto польша | Калькулятор | /tools/salary-calculator |
| сколько стоит жизнь в варшаве | Гайд | /guides/daily-life/cost-of-living |

#### 4.3.4 Коммерческие запросы (для монетизации)

| Запрос | Партнёрский потенциал | Целевая страница |
|---|---|---|
| лучшие банки в польше для иностранцев | Банки-партнёры | /guides/finance/banks |
| страховка в польше для иностранцев | Страховые компании | /guides/health/insurance |
| курсы польского языка онлайн | Языковые школы | /guides/daily-life/learn-polish |
| перевод документов польский | Бюро переводов | /guides/documents/translation |
| юрист по иммиграции в польшу | Юридические фирмы | /guides/visa/immigration-lawyer |
| бухгалтер для jdg в польше | Бухгалтерские услуги | /guides/business/accountant |
| переводы денег в польшу | Wise, Paysend | /guides/finance/money-transfers |

### 4.4 Контентное SEO

#### 4.4.1 Правила написания статей

1. **Заголовок (H1):** Содержит основной ключевой запрос, до 60 символов
2. **Подзаголовки (H2-H4):** Иерархическая структура, содержат LSI-ключи
3. **Первый абзац:** Ключевой запрос в первых 100 словах
4. **URL:** Короткий, на латинице, содержит ключевое слово (`/guides/visa/karta-pobytu`)
5. **Изображения:** Alt-текст с ключевым словом, WebP формат, lazy loading
6. **Внутренние ссылки:** Минимум 3-5 ссылок на связанные гайды
7. **Внешние ссылки:** Ссылки на официальные источники (gov.pl, zus.pl)
8. **Длина:** Гайды — 3000-8000 слов, статьи — 1000-3000 слов
9. **Обновление:** Дата обновления в мета-данных, визуально на странице
10. **E-E-A-T:** Указание автора, эксперта-ревьюера, источников

#### 4.4.2 Шаблон внутренней перелинковки

```
Главная
├── Категория (hub page) — обзор + ссылки на все гайды категории
│   ├── Гайд 1 → ссылки на связанные гайды + глоссарий
│   ├── Гайд 2 → ссылки на связанные гайды + глоссарий
│   └── Гайд 3 → ссылки на инструменты
├── Глоссарий (hub) → ссылки на гайды где термин используется
└── Инструменты (hub) → ссылки на гайды с контекстом
```

#### 4.4.3 Контент-план (первые 30 статей)

| # | Статья | Категория | Приоритет | Ключевой запрос |
|---|---|---|---|---|
| 1 | Как переехать в Польшу: полный гайд | visa | P0 | переезд в польшу |
| 2 | Карта побыту: пошаговая инструкция | visa | P0 | карта побыту |
| 3 | Как получить PESEL в Польше | documents | P0 | pesel польша |
| 4 | Zameldowanie — регистрация по адресу | documents | P0 | zameldowanie |
| 5 | Работа в Польше для иностранцев | work | P0 | работа в польше |
| 6 | Виды трудовых договоров в Польше | work | P0 | umowa o prace |
| 7 | Аренда квартиры в Польше | housing | P0 | аренда жилья польша |
| 8 | Как открыть банковский счёт | finance | P0 | банк в польше |
| 9 | Рабочая виза в Польшу | visa | P0 | рабочая виза польша |
| 10 | Зарплаты в Польше в 2026 году | work | P0 | зарплата в польше |
| 11 | NFZ — бесплатная медицина | health | P1 | nfz польша |
| 12 | Налоги в Польше для иностранцев | finance | P1 | налоги в польше |
| 13 | ZUS — социальное страхование | work | P1 | zus польша |
| 14 | Как открыть JDG (ИП) | business | P1 | jdg польша |
| 15 | Польский глоссарий: 100 терминов | glossary | P1 | польские слова |
| 16 | Калькулятор зарплаты brutto/netto | tools | P1 | калькулятор зарплаты польша |
| 17 | Стоимость жизни в Варшаве | daily-life | P1 | жизнь в варшаве |
| 18 | Как обменять водительские права | documents | P1 | обменять права польша |
| 19 | Декларация PIT-37 пошагово | finance | P1 | pit-37 как заполнить |
| 20 | Детский сад и школа в Польше | education | P2 | школа в польше |
| 21 | Пособие 800+ на ребёнка | finance | P2 | 800 плюс польша |
| 22 | Продление карты побыту | visa | P2 | продлить карту побыту |
| 23 | Нострификация диплома | education | P2 | нострификация польша |
| 24 | Медицинская страховка | health | P2 | страховка польша |
| 25 | Получение NIP | documents | P2 | nip польша |
| 26 | Транспорт в Польше | daily-life | P2 | общественный транспорт польша |
| 27 | Перевод денег в/из Польши | finance | P2 | перевод денег польша |
| 28 | Курсы польского языка | daily-life | P2 | курсы польского |
| 29 | Юрист по иммиграции | visa | P2 | юрист варшава |
| 30 | Покупка авто в Польше | daily-life | P2 | купить машину в польше |

### 4.5 Техническая SEO-оптимизация

#### 4.5.1 Скорость загрузки (Core Web Vitals)

| Метрика | Цель | Как достичь |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Статическая генерация, CDN, оптимизация изображений |
| **INP** (Interaction to Next Paint) | < 200ms | Минимальный JS, islands architecture |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Заданные размеры изображений, шрифты preload |

**Оптимизации:**
- Изображения: WebP/AVIF, srcset, lazy loading, заданные width/height
- Шрифты: `font-display: swap`, preload критических шрифтов
- CSS: Critical CSS inline, остальное — async
- JS: Минимальный бандл, code splitting, defer/async
- Кэширование: Immutable assets с hash, Cache-Control headers
- Сжатие: Brotli / gzip на уровне CDN

#### 4.5.2 Мобильная оптимизация

- Responsive design (mobile-first)
- Touch-friendly элементы (min 44x44px)
- Читаемый шрифт без зума (16px+ base)
- Нет горизонтального скролла
- Мобильное меню (бургер)
- AMP не нужен (Astro и так быстрый)

#### 4.5.3 Безопасность и заголовки

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

#### 4.5.4 Internationalization (i18n)

```
https://allaboutpoland.com/           → русский (по умолчанию)
https://allaboutpoland.com/pl/        → польский
https://allaboutpoland.com/en/        → английский
```

- hreflang теги на каждой странице
- lang атрибут на `<html>`
- Контент адаптирован, не просто переведён

### 4.6 Внешнее SEO (Off-Page)

#### 4.6.1 Стратегия линкбилдинга

| Источник | Тип ссылки | Приоритет |
|---|---|---|
| Форумы (forum.polsha24.com, vk.com) | Полезные ответы со ссылкой | P0 |
| Telegram-каналы о Польше | Репосты, упоминания | P0 |
| YouTube | Видео со ссылками на гайды | P1 |
| Гостевые статьи | На русскоязычных блогах об эмиграции | P1 |
| Каталоги | Yandex.Справочник, Google Business | P1 |
| Партнёры | Взаимные ссылки с сервисами | P2 |

#### 4.6.2 Социальные сигналы

- **Telegram-канал** — анонсы статей, быстрые советы
- **YouTube** — видеоверсии гайдов
- **VK** — сообщество
- **Pinterest** — инфографики

#### 4.6.3 Yandex SEO (важно для русскоязычной аудитории)

- Регистрация в Yandex.Webmaster
- Yandex.Metrika (аналитика)
- Турбо-страницы (опционально)
- Yandex.Справочник
- XML-фид для Яндекс.Дзен (опционально)
- Yandex ICO (коммерческие факторы)

#### 4.6.4 Google SEO

- Google Search Console
- Google Analytics 4 / Plausible
- Google Business Profile
- Подписка на Google Discover (качественные OG-изображения)

### 4.7 Мониторинг SEO

| Инструмент | Назначение | Частота |
|---|---|---|
| Google Search Console | Позиции, CTR, ошибки индексации | Ежедневно |
| Yandex.Webmaster | Позиции в Яндексе, ошибки | Ежедневно |
| Plausible / Umami | Трафик, поведение | Ежедневно |
| Ahrefs / Serpstat | Бэклинки, конкуренты, ключевые слова | Еженедельно |
| PageSpeed Insights | Core Web Vitals | При каждом деплое |
| Screaming Frog | Технический аудит | Ежемесячно |

---

## 5. Дизайн и UI/UX

### 5.1 Дизайн-система

- **Цвета:** Красно-белая палитра (цвета флага Польши) + нейтральные серые
  - Primary: `#DC143C` (красный)
  - Secondary: `#FFFFFF` (белый)
  - Accent: `#1E40AF` (синий для ссылок)
  - Background: `#FAFAFA` (светлый), `#111827` (тёмная тема)
  - Text: `#1F2937` (основной), `#6B7280` (вторичный)

- **Типографика:**
  - Заголовки: Inter, 700 weight
  - Текст: Inter, 400 weight, 18px / 1.7 line-height
  - Код/термины: JetBrains Mono

- **Компоненты:**
  - Callout boxes (info, warning, success, danger)
  - Step-by-step cards
  - Document checklists
  - Comparison tables
  - Author/reviewer cards
  - Related articles grid

### 5.2 Страницы

| Страница | URL | Описание |
|---|---|---|
| Главная | `/` | Hero, категории, популярные гайды, поиск |
| Каталог гайдов | `/guides/` | Все категории с описанием |
| Категория | `/guides/{category}/` | Список гайдов в категории |
| Гайд | `/guides/{category}/{slug}` | Статья с TOC, breadcrumbs |
| Глоссарий | `/glossary/` | Алфавитный список терминов |
| Термин | `/glossary/{term}` | Определение + контекст + ссылки |
| Инструменты | `/tools/` | Список калькуляторов |
| Инструмент | `/tools/{slug}` | Калькулятор / чеклист |
| Поиск | `/search` | Полнотекстовый поиск |
| О проекте | `/about` | Миссия, команда |
| Контакт | `/contact` | Форма обратной связи |

---

## 6. Интерактивные инструменты

### 6.1 Калькулятор зарплаты (brutto → netto)

**Входные данные:**
- Зарплата brutto (PLN)
- Тип договора (umowa o pracę / zlecenie / dzieło / B2B)
- Возраст (< 26 — освобождение от PIT)
- Налоговый порог (до 120 000 PLN — 12%, свыше — 32%)
- Koszty uzyskania przychodu (обычные / повышенные)
- PPK (да / нет, % работника)

**Выходные данные:**
- Зарплата netto
- Разбивка: ZUS (emerytalne, rentowe, chorobowe), здравоохранение, PIT
- Годовой доход
- Стоимость работодателя

### 6.2 Чек-лист переезда

Интерактивный чеклист с сохранением прогресса в localStorage:
- До переезда (документы, виза, жильё)
- Первая неделя (PESEL, zameldowanie, SIM-карта)
- Первый месяц (банк, NIP, ZUS)
- Первые 3 месяца (права, врач, язык)

### 6.3 Карта русскоязычных сервисов

Интерактивная карта (Leaflet / Mapbox) с фильтрами:
- Врачи, юристы, бухгалтеры, переводчики
- По городу (Варшава, Краков, Вроцлав, Гданьск)

---

## 7. Деплой и инфраструктура

### 7.1 CI/CD Pipeline

```
git push → GitHub Actions:
  1. Lint (ESLint, Prettier)
  2. Type check (TypeScript)
  3. Build (Astro build)
  4. Lighthouse CI (проверка Core Web Vitals)
  5. Deploy to Vercel (preview для PR, production для main)
```

### 7.2 Мониторинг

- **Uptime:** UptimeRobot / BetterStack (бесплатно)
- **Ошибки:** Sentry (бесплатный план)
- **Аналитика:** Plausible Cloud или self-hosted Umami
- **SEO:** Google Search Console + Yandex.Webmaster

### 7.3 Домен и DNS

- Домен: `allaboutpoland.com` (или альтернатива)
- DNS: Cloudflare (бесплатный план)
- SSL: Автоматический через Vercel / Cloudflare
- Email: Zoho Mail (бесплатно для 1 домена) или Yandex.Mail for Domain

---

## 8. Монетизация

### 8.1 Партнёрские программы

| Категория | Потенциальные партнёры | Модель |
|---|---|---|
| Банки | PKO, mBank, Revolut | CPA / CPI |
| Страховки | PZU, Warta, Allianz | CPA |
| Переводы | Wise, Paysend, Western Union | Rev share |
| Юристы | Иммиграционные фирмы | Лидогенерация |
| Бухгалтеры | Бухгалтерские конторы | Лидогенерация |
| Курсы | Школы польского | CPA |
| Жильё | OLX, Otodom | CPS |

### 8.2 Прямая монетизация (будущее)

- Премиум-гайды (PDF)
- Консультации
- Вебинары
- Спонсорский контент (маркированный)

---

## 9. Правовые требования

- **Политика конфиденциальности** (GDPR / RODO) — обязательно для Польши/ЕС
- **Cookie consent** — баннер с выбором категорий
- **Impressum** — не обязателен для Польши, но рекомендуется
- **Disclaimer** — информация не является юридической консультацией
- **Affiliate disclosure** — раскрытие партнёрских ссылок
