import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angular',
  iconColor: '#DD0031',
  url: 'https://angular.io/',
});

export const primeng = createSkillFactory({
  name: 'PrimeNG',
  icon: 'devicon:primeng',
  iconColor: '#DD0031',
  url: 'https://primeng.org/',
});

export const karma = createSkillFactory({
  name: 'Karma',
  icon: 'devicon:karma',
  iconColor: '#ED2A7A',
  url: 'https://karma-runner.github.io/',
});

export const jasmine = createSkillFactory({
  name: 'Jasmine',
  icon: 'simple-icons:jasmine',
  iconColor: '#8C9EFF',
  url: 'https://jasmine.github.io/',
});

export const storybook = createSkillFactory({
  name: 'Storybook',
  icon: 'simple-icons:storybook',
  iconColor: '#FF4785',
  url: 'https://storybook.js.org/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const husky = createSkillFactory({
  name: 'Husky',
  icon: 'simple-icons:husky',
  iconColor: '#F1574C',
  url: 'https://typicode.github.io/husky/#/',
});

export const sonarQube = createSkillFactory({
  name: 'SonarQube',
  icon: 'simple-icons:sonarqube',
  iconColor: '#4E9BCD',
  url: 'https://www.sonarqube.org/',
});

export const ionic = createSkillFactory({
  name: 'Ionic',
  icon: 'simple-icons:ionic',
  iconColor: '#3880FF',
  url: 'https://ionicframework.com/',
});

export const flutter = createSkillFactory({
  name: 'Flutter',
  icon: 'simple-icons:flutter',
  iconColor: '#02569B',
  url: 'https://flutter.dev/',
});

export const reactNative = createSkillFactory({
  name: 'React Native',
  icon: 'devicon:reactnative',
  iconColor: '#61DAFB',
  url: 'https://reactnative.dev/',
});

export const svelte = createSkillFactory({
  name: 'Svelte',
  icon: 'devicon:svelte',
  iconColor: '#FF3E00',
  url: 'https://svelte.dev/',
});

export const ngrx = createSkillFactory({
  name: 'NgRx',
  icon: 'devicon:ngrx',
  iconColor: '#FF3E00',
  url: 'https://ngrx.io/',
});

export const freshchat = createSkillFactory({
  name: 'Freshchat',
  icon: 'simple-icons:wechat',
  iconColor: '#FF3E00',
  url: 'https://www.freshworks.com/live-chat-software/',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#563D7C',
  url: 'https://getbootstrap.com/',
});
