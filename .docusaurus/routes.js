import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd9f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd94'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7c3'),
            routes: [
              {
                path: '/docs/courses/async/',
                component: ComponentCreator('/docs/courses/async/', 'f61'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/courses/gpio/',
                component: ComponentCreator('/docs/courses/gpio/', 'e40'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/courses/i2c/',
                component: ComponentCreator('/docs/courses/i2c/', 'cd9'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/courses/intro/rust_intro',
                component: ComponentCreator('/docs/courses/intro/rust_intro', 'f63'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/courses/pwm/',
                component: ComponentCreator('/docs/courses/pwm/', '3cd'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/courses/spi/',
                component: ComponentCreator('/docs/courses/spi/', 'eb4'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/courses/wifi/',
                component: ComponentCreator('/docs/courses/wifi/', 'fd2'),
                exact: true,
                sidebar: "coursesSidebar"
              },
              {
                path: '/docs/tutorials/embassy',
                component: ComponentCreator('/docs/tutorials/embassy', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
