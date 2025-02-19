import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a39'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/me',
    component: ComponentCreator('/blog/authors/me', '33e'),
    exact: true
  },
  {
    path: '/blog/babuk-cyberpanel',
    component: ComponentCreator('/blog/babuk-cyberpanel', '1c7'),
    exact: true
  },
  {
    path: '/blog/mti-player',
    component: ComponentCreator('/blog/mti-player', '48e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/malware',
    component: ComponentCreator('/blog/tags/malware', 'a7e'),
    exact: true
  },
  {
    path: '/blog/tags/proprietary',
    component: ComponentCreator('/blog/tags/proprietary', '6f1'),
    exact: true
  },
  {
    path: '/blog/tags/reversing',
    component: ComponentCreator('/blog/tags/reversing', '899'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7f1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '61d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '43a'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '97c'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
