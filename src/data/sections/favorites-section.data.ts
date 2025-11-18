import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  people: {
    title: 'I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/fernando.jpeg'),
        name: 'Fernando Herrera',
        url: 'https://fernando-herrera.com/',
      },
      {
        image: import('@/assets/favorites/people/midudev.jpeg'),
        name: 'Midudev',
        url: 'https://midu.dev/',
      },
      {
        image: import('@/assets/favorites/people/braisMoure.jpeg'),
        name: 'Brais Moure',
        url: 'https://mouredev.pro/',
      },
      {
        image: import('@/assets/favorites/people/faztweb_logo.jpeg'),
        name: 'Fazt',
        url: 'https://fazt.dev/',
      },
      {
        image: import('@/assets/favorites/people/florinPop.jpeg'),
        name: 'Florin Pop',
        url: 'https://www.florin-pop.com/',
      },
      {
        image: import('@/assets/favorites/people/leaVerou.jpeg'),
        name: 'Lea Verou',
        url: 'https://lea.verou.me/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
