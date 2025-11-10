import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  sass,
  supabase,
  tailwindCss,
  typescript,
  angular,
  primeng,
  karma,
  jasmine,
  docker,
  sonarQube,
  storybook,
  jest,
  ionic,
  react,
  flutter,
  reactNative,
  svelte,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        angular({
          level: 5,
          description:
            'Google framework for building dynamic web applications with TypeScript and reusable components.',
        }),
        typescript({
          level: 4,
          description:
            'Programming language developed by Microsoft that extends JavaScript by adding static typing and modern object-oriented programming features.',
        }),
        sass({
          level: 4,
          description:
            'CSS preprocessor that extends the capabilities of stylesheets with variables, nesting, mixins, and functions to write more maintainable code.',
        }),
        primeng({
          level: 5,
          description:
            'UI component library for Angular that offers a wide collection of ready-to-use widgets and interface elements with customizable themes.',
        }),
        tailwindCss({
          level: 3,
          description:
            'A utility-first CSS framework that provides a set of pre-defined classes to rapidly build custom user interfaces directly in your HTML markup.',
        }),
        prettier({
          level: 5,
          description:
            'Automatic code formatter that ensures consistent style across languages, eliminating formatting debates within development teams.',
        }),
        eslint({
          level: 4,
          description:
            'JavaScript/TypeScript static code analysis tool that identifies and corrects quality issues, errors, and programming standards violations.',
        }),
        nestJs({
          level: 3,
          description:
            'Framework for building efficient, reliable, and scalable server-side applications using TypeScript and Node.js.',
        }),
        postgreSql({
          level: 2,
          description:
            'Object-relational database system with a strong reputation for reliability, feature robustness, and performance.',
        }),
        mongoDb({
          level: 2,
          description:
            'Document-oriented database system that stores data in flexible, JSON-like documents, making it easy to work with unstructured data.',
        }),
        firebase({
          level: 4,
          description:
            'Platform developed by Google for creating mobile and web applications, offering a variety of tools and services for app development.',
        }),
        pnpm({
          level: 3,
          description:
            'Fast, disk space-efficient package manager for JavaScript and Node.js projects, using a unique symlinked node_modules structure.',
        }),
        karma({
          level: 4,
          description:
            'Test runner for JavaScript that allows developers to execute tests in real browsers, providing instant feedback on code quality.',
        }),
        jasmine({
          level: 4,
          description:
            'Behavior-driven development framework for testing JavaScript code, allowing developers to write clear and expressive tests.',
        }),
        jest({
          level: 4,
          description:
            'JavaScript testing framework developed by Facebook, known for its simplicity, speed, and built-in mocking capabilities.',
        }),
        docker({
          level: 3,
          description:
            'Platform that uses containerization technology to create, deploy, and manage applications in lightweight, portable containers.',
        }),
        sonarQube({
          level: 3,
          description:
            'Open-source platform for continuous inspection of code quality, performing automatic reviews to detect bugs, code smells, and security vulnerabilities.',
        }),
        react({
          level: 3,
          description:
            'JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage application state effectively.',
        }),
        storybook({
          level: 2,
          description:
            'Open-source tool for developing UI components in isolation, enabling developers to build, test, and document components independently from the main application.',
        }),
        ionic({
          level: 4,
          description:
            'Open-source framework for building cross-platform mobile applications using web technologies like HTML, CSS, and JavaScript.',
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [flutter(), reactNative(), supabase(), cypress(), svelte()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
