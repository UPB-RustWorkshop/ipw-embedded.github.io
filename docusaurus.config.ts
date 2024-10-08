import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Embedded Systems @ IP Workshop',
  tagline: 'Embedded in a Rusty fashion 🚀',
  favicon: 'img/Original_Ferris.ico',

  // Set the production url of your site here
  url: 'https://UPB-RustWorkshop.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ipw-embedded.github.io',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UPB-RustWorkshop/ipw-embedded.github.io',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Embedded Systems & Rust',
      logo: {
        alt: 'Embedded Systems & Rust',
        src: 'img/Original_Ferris.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'coursesSidebar',
          position: 'left',
          label: 'Courses',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'labsSidebar',
          position: 'left',
          label: 'Labs',
        },
        {
          href: 'https://github.com/UPB-RustWorkshop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Courses',
              to: '/docs/courses/intro/rust_intro',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials/embassy',
            },
            {
              label: 'Labs',
              to: '/docs/labs/lab01',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'IP Workshop',
              href: 'https://www.ipworkshop.ro/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/ipworkshop.ro/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/ipworkshop',
            },
          ],
        },
        {
          title: 'Get involved!',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/UPB-RustWorkshop',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ideas & Projects Workshop, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
