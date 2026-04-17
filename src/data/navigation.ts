export interface NavCategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  children?: { name: string; slug: string }[];
}

export const categories: NavCategory[] = [
  {
    name: 'Визы и переезд',
    slug: 'visa',
    icon: '🛂',
    description: 'Типы виз, карта побыту, ВНЖ, ПМЖ, гражданство',
    children: [
      { name: 'Переезд в Польшу', slug: 'relocating' },
      { name: 'Карта побыту', slug: 'karta-pobytu' },
      { name: 'Рабочая виза', slug: 'work-visa' },
      { name: 'Национальная виза', slug: 'national-visa' },
      { name: 'Продление карты побыту', slug: 'karta-pobytu-renewal' },
    ],
  },
  {
    name: 'Работа',
    slug: 'work',
    icon: '💼',
    description: 'Трудоустройство, договоры, зарплаты, ZUS',
    children: [
      { name: 'Работа для иностранцев', slug: 'employment' },
      { name: 'Трудовые договоры', slug: 'contracts' },
      { name: 'Зарплаты в Польше', slug: 'salary' },
      { name: 'ZUS — соцстрахование', slug: 'zus' },
    ],
  },
  {
    name: 'Документы',
    slug: 'documents',
    icon: '📄',
    description: 'PESEL, Zameldowanie, NIP, водительские права',
    children: [
      { name: 'PESEL', slug: 'pesel' },
      { name: 'Zameldowanie', slug: 'zameldowanie' },
      { name: 'NIP', slug: 'nip' },
      { name: 'Водительские права', slug: 'driving-license' },
    ],
  },
  {
    name: 'Жильё',
    slug: 'housing',
    icon: '🏠',
    description: 'Аренда, покупка, коммуналка, договоры',
    children: [
      { name: 'Аренда квартиры', slug: 'renting' },
      { name: 'Покупка жилья', slug: 'buying' },
      { name: 'Коммунальные услуги', slug: 'utilities' },
    ],
  },
  {
    name: 'Финансы',
    slug: 'finance',
    icon: '💰',
    description: 'Банки, налоги, пособия, переводы',
    children: [
      { name: 'Банковский счёт', slug: 'banks' },
      { name: 'Налоги PIT', slug: 'taxes' },
      { name: 'Пособия', slug: 'benefits' },
      { name: 'Переводы денег', slug: 'money-transfers' },
    ],
  },
  {
    name: 'Медицина',
    slug: 'health',
    icon: '🏥',
    description: 'NFZ, страховка, врачи, аптеки',
    children: [
      { name: 'NFZ — бесплатная медицина', slug: 'nfz' },
      { name: 'Медицинская страховка', slug: 'insurance' },
      { name: 'Скорая помощь', slug: 'emergency' },
    ],
  },
  {
    name: 'Бизнес',
    slug: 'business',
    icon: '🏢',
    description: 'JDG, спулка, регистрация, бухгалтерия',
    children: [
      { name: 'Открыть JDG (ИП)', slug: 'jdg' },
      { name: 'Бухгалтерия', slug: 'accountant' },
    ],
  },
  {
    name: 'Образование',
    slug: 'education',
    icon: '🎓',
    description: 'Школы, вузы, нострификация',
    children: [
      { name: 'Школы и детсады', slug: 'schools' },
      { name: 'Нострификация диплома', slug: 'nostrification' },
    ],
  },
  {
    name: 'Быт',
    slug: 'daily-life',
    icon: '🏙️',
    description: 'Транспорт, интернет, покупки, язык',
    children: [
      { name: 'Стоимость жизни', slug: 'cost-of-living' },
      { name: 'Транспорт', slug: 'transport' },
      { name: 'Курсы польского', slug: 'learn-polish' },
    ],
  },
];

export const mainNavLinks = [
  { name: 'Гайды', href: '/guides' },
  { name: 'Инструменты', href: '/tools' },
  { name: 'Глоссарий', href: '/glossary' },
  { name: 'О проекте', href: '/about' },
];
