import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Systems Engineer, Software Development',
      institution: 'Universidad Simón Bolívar',
      image: import('@/assets/logos/usb.jpeg'),
      dates: [new Date('2011.01'), new Date('2016.06')],
      description: 'Bachelor of Engineering, Specialization in software development.',
      links: [website({ url: 'https://www.unisimon.edu.co/' })],
    },
    {
      title: 'Computer Equipment Maintenance Technician',
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      image: import('@/assets/logos/logoSena.png'),
      dates: [new Date('2010.01'), new Date('2011.01')],
      description: 'Technical program focused on the maintenance of computer equipment.',
      links: [website({ url: 'https://www.sena.edu.co/es-co/Paginas/default.aspx' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
