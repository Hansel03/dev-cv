import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  angular,
  bootstrap,
  eslint,
  firebase,
  freshchat,
  ngrx,
  nx,
  pnpm,
  postgreSql,
  primeng,
  storybook,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Technical Coordinator',
      company: 'Consultec-TI',
      image: import('@/assets/logos/consultec_ti_logo.jpeg'),
      dates: [new Date('2023-04'), null],
      description: `
        - Proven Technical Leadership in directing multidisciplinary teams and managing the full development lifecycle of Front-End solutions.
        - Led the successful implementation and migration of the core business platform, resolving complex architectural challenges and achieving substantial improvement in overall system stability.
        - Drove the adoption of mandatory Unit Testing and robust Code Review processes, which drastically eliminated the incidence of critical production bugs.
        - Served as the primary technical coordination point for the team, translating complex business requirements into clear tasks and maintaining fluid communication with all stakeholders.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), primeng(), typescript(), nx(), storybook(), ngrx()],
      },
      links: [
        website({ url: 'https://www.consultec-ti.com/web/consultec-ti/home' }),
        linkedin({ url: 'https://www.linkedin.com/company/consultec-ti/' }),
      ],
    },
    {
      role: 'Software Development Consultant',
      company: 'Consultec-TI',
      image: import('@/assets/logos/consultec_ti_logo.jpeg'),
      dates: [new Date('2021-05'), null],
      description: `
        - Responsible for the design and architecture of Front-End solutions, ensuring the long-term scalability, performance, and maintainability of the final product.
        - Conducted technological trend evaluation, recommending and implementing cutting-edge frameworks and tools that optimized client development efficiency.
        - Executed the development and coding of critical components, serving as the technical reference point to ensure adherence to code quality standards.
        - Implemented agile and transparent project management, ensuring continuous quality control and on-time delivery of client-agreed deliverables.
        - Provided expert consultation throughout the project lifecycle, assisting clients in resolving impediments and optimizing their internal development processes.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), primeng(), typescript(), nx(), storybook()],
      },
      links: [
        website({ url: 'https://www.consultec-ti.com/web/consultec-ti/home' }),
        linkedin({ url: 'https://www.linkedin.com/company/consultec-ti/' }),
      ],
    },
    {
      role: 'Frontend Team Lead',
      company: 'Mensajeros Urbanos',
      image: import('@/assets/logos/mensajeros_urbanos_logo.jpeg'),
      dates: [new Date('2021-02'), new Date('2021-04')],
      description: `
        - Led the Front-End team in the complete development of the Unified Services Platform, ensuring cohesion and the delivery of key functionalities within a multidisciplinary environment.
        - Responsible for the detailed analysis and design of Front-End tasks, including the creation of diagrams (class, flow, sequence) to align architecture with business objectives.
        - Ensured visual consistency and development efficiency through the advanced utilization of the PrimeNG component library.
        - Established and implemented code review processes and ensured the adoption of Angular development best practices, significantly raising the overall quality of the codebase.
        - Applied the Agile methodology (Scrum) to manage the team's workflow, ensuring delivery predictability and effective communication of Front-End progress to stakeholders.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), tailwindCss(), typescript(), freshchat()],
      },
      links: [
        website({ url: 'https://mensajerosurbanos.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/mensajeros-urbanos/' }),
      ],
    },
    {
      role: 'Technical Consultant',
      company: 'GBM Corporation',
      image: import('@/assets/logos/gbm_corp_logo.jpeg'),
      dates: [new Date('2016-11'), new Date('2021-01')],
      description: `
        - Acted as a Specialized Technical Consultant for Banco BHD in the Dominican Republic, ensuring software solutions aligned with rigorous banking and financial sector standards.
        - Directly responsible for the development and implementation of banking software products (both enterprise and personal) for Dominican Republic banking, with a focus on security and high-scale performance.
        - Contributed to the architectural design of key components to ensure the scalability and high availability required by a major financial institution.
        - Implemented coding best practices and efficient workflows to enhance the maintainability of software products.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), bootstrap(), typescript(), eslint(), firebase(), pnpm()],
      },
      links: [
        website({ url: 'https://www.gbm.net/' }),
        linkedin({ url: 'https://www.linkedin.com/company/gbm-corp/' }),
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'PRAGMA',
      image: import('@/assets/logos/somospragma_logo.jpeg'),
      dates: [new Date('2016-07'), new Date('2021-01')],
      description: `
        - Responsible for the full development of robust and dynamic web applications using Angular as the main framework, ensuring a fluid and reactive user experience.
        - Deep experience in coding user interfaces with HTML5 and CSS3, with advanced proficiency in CSS Frameworks and preprocessors like SASS to ensure a modular and maintainable design.
        - Mastery of the modern development ecosystem, including Node.js, bower, and npm for dependency management and server-side development where required.
        - Implemented and managed automation tools such as Grunt and Gulp to optimize development workflows, which drastically reduced compilation time and improved team efficiency.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), bootstrap(), typescript(), eslint(), firebase(), pnpm()],
      },
      links: [
        website({ url: 'https://www.pragma.co/' }),
        linkedin({ url: 'https://www.linkedin.com/company/somospragma/' }),
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Stack Pointer',
      image: import('@/assets/logos/stack_pointer_ltda_logo.jpeg'),
      dates: [new Date('2015-06'), new Date('2016-06')],
      description: `
        - Key contribution to the development of dynamic Front-End applications using AngularJS, ensuring user interface functionality and usability.
        - Implemented modern and fully responsive user interfaces, leveraging frameworks like Bootstrap to ensure optimal viewing across all devices.
        - Efficiently managed dependencies and critical project packages using tools such as Npm and Bower.
        - Utilized Grunt for the automation of repetitive development tasks and processes, which improved efficiency in the compilation and deployment of Front-End code.
        - Hands-on experience manipulating and querying data in critical environments, including SQL Server and Oracle databases. This expertise ensured effective integration between the Front-End and backend systems.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), bootstrap(), typescript(), postgreSql()],
      },
      links: [
        website({ url: 'https://stackpointer.co/' }),
        linkedin({ url: 'https://www.linkedin.com/company/stack-pointer-ltda/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
