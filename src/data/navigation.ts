export interface NavCategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  children?: { name: string; slug: string }[];
}

export const categories: NavCategory[] = [
  {
    name: 'Открытие бизнеса',
    slug: 'registration',
    icon: '🚀',
    description: 'JDG, Sp. z o.o., регистрация CEIDG, коды PKD, первые шаги',
    children: [
      { name: 'Как открыть JDG', slug: 'jdg-open' },
      { name: 'Регистрация CEIDG', slug: 'ceidg' },
      { name: 'Коды PKD', slug: 'pkd' },
      { name: 'JDG или Sp. z o.o.', slug: 'jdg-vs-spzoo' },
      { name: 'Sp. z o.o. через S24', slug: 'spzoo-s24' },
      { name: 'Konto firmowe', slug: 'konto-firmowe' },
    ],
  },
  {
    name: 'Налоги',
    slug: 'taxes',
    icon: '📊',
    description: 'Ryczałt, liniowy, skala — выбор режима, декларации, оптимизация',
    children: [
      { name: 'Выбор налогового режима', slug: 'tax-regimes' },
      { name: 'Składka zdrowotna', slug: 'skladka-zdrowotna' },
      { name: 'VAT для JDG', slug: 'vat' },
      { name: 'KSeF — электронные фактуры', slug: 'ksef' },
      { name: 'Сколько реально платит JDG', slug: 'jdg-real-costs' },
      { name: 'Ulga prorodzinna', slug: 'ulga-prorodzinna' },
    ],
  },
  {
    name: 'ZUS и взносы',
    slug: 'zus',
    icon: '🏛️',
    description: 'Ставки ZUS, льготы, Ulga na start, Mały ZUS Plus',
    children: [
      { name: 'ZUS для JDG', slug: 'zus-jdg' },
      { name: 'Льготы: Ulga na start, Mały ZUS', slug: 'zus-ulgi' },
    ],
  },
  {
    name: 'Документы и фактуры',
    slug: 'docs',
    icon: '📄',
    description: 'Фактуры, расходы, списание техники, OC страховка',
    children: [
      { name: 'Как выставить фактуру', slug: 'faktury' },
      { name: 'Списание расходов', slug: 'koszty' },
      { name: 'OC страховка для ИП', slug: 'oc-insurance' },
    ],
  },
  {
    name: 'Карта побыту и легализация',
    slug: 'legalization',
    icon: '🛂',
    description: 'Карта побыту по JDG, сталый побыт, PESEL UKR',
    children: [
      { name: 'Карта побыту по JDG', slug: 'karta-pobytu-jdg' },
      { name: 'Сталый побыт', slug: 'staly-pobyt' },
      { name: 'PESEL UKR и JDG', slug: 'pesel-ukr' },
    ],
  },
  {
    name: 'Масштабирование',
    slug: 'growth',
    icon: '📈',
    description: 'Найм сотрудников, переход на Sp. z o.o., иностранные клиенты',
    children: [
      { name: 'Найм первого сотрудника', slug: 'hiring' },
      { name: 'Переход JDG → Sp. z o.o.', slug: 'jdg-to-spzoo' },
      { name: 'Работа с иностранными клиентами', slug: 'foreign-clients' },
      { name: 'Работа с клиентами из РФ/РБ', slug: 'sanctions-compliance' },
      { name: 'Ипотека для JDG', slug: 'mortgage' },
    ],
  },
  {
    name: 'Инструменты',
    slug: 'tools',
    icon: '🧮',
    description: 'Калькуляторы, сравнение бухгалтерского софта',
    children: [
      { name: 'Калькулятор зарплаты', slug: 'salary-calculator' },
      { name: 'Сравнение бухгалтерий', slug: 'accounting-software' },
      { name: 'Виртуальный офис', slug: 'virtual-office' },
      { name: 'Бизнес-инкубатор vs JDG', slug: 'incubator-vs-jdg' },
    ],
  },
  {
    name: 'Закрытие и паузы',
    slug: 'closing',
    icon: '⏸️',
    description: 'Приостановка JDG, закрытие, последние декларации',
    children: [
      { name: 'Закрыть или приостановить JDG', slug: 'close-suspend' },
    ],
  },
];

export const mainNavLinks = [
  { name: 'Блог', href: '/guides' },
  { name: 'Калькулятор', href: '/tools/salary-calculator' },
  { name: 'Глоссарий', href: '/glossary' },
  { name: 'Обо мне', href: '/about' },
];
