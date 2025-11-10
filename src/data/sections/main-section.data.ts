import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.png'),
  fullName: 'Hansel Suarez',
  role: 'FrontEnd Developer',
  details: [
    { label: 'Email', value: 'hanselsuarez03@gmail.com', url: 'mailto:hanselsuarez03@gmail.com' },
    { label: 'From', value: 'San Diego, California' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '619 475 6961' },
    { label: 'Email', value: 'hanselsuarez03@gmail.com' },
    { label: 'LinkedIn', value: '/in/hansel-suarez', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/hansel-suarez', url: 'https://github.com' },
    { label: 'Website', value: 'hansel-suarez-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Systems engineer with a diploma in software engineering, specializing in the optimization and delivery of high-impact technological solutions. Proven experience in: Agile methodologies (Scrum) for efficient project management and rapid development cycles. Transformation of complex requirements into robust and scalable software designs. Collaboration in cross-functional teams, providing technical leadership to overcome integration challenges. My objective: To contribute my technical vision and adaptability to drive innovation and success in a dynamic environment.',
  tags: [{ name: 'Software Engineering' }, { name: 'Agile Development' }, { name: 'Technical Leadership' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Hansel_Suarez.pdf',
  },
  links: [
    github({ url: 'https://github.com/Hansel03' }),
    linkedin({ url: 'https://www.linkedin.com/in/hansel-suarez-paniza-63a65040/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
