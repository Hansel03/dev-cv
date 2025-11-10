import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Hansel Suarez - FrontEnd Developer',
    description:
      'Systems engineer with a diploma in software engineering, specializing in the optimization and delivery of high-impact technological solutions. Proven experience in: Agile methodologies (Scrum) for efficient project management and rapid development cycles. Transformation of complex requirements into robust and scalable software designs. Collaboration in cross-functional teams, providing technical leadership to overcome integration challenges. My objective: To contribute my technical vision and adaptability to drive innovation and success in a dynamic environment.',
    faviconPath: '/src/assets/my-image.png',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
