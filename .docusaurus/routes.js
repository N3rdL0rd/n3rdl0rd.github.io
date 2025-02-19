import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', 'cb0'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '1d9'),
    exact: true
  },
  {
    path: '/blog/authors/',
    component: ComponentCreator('/blog/authors/', '347'),
    exact: true
  },
  {
    path: '/blog/authors/me/',
    component: ComponentCreator('/blog/authors/me/', '406'),
    exact: true
  },
  {
    path: '/blog/babuk-cyberpanel/',
    component: ComponentCreator('/blog/babuk-cyberpanel/', '36f'),
    exact: true
  },
  {
    path: '/blog/mti-player/',
    component: ComponentCreator('/blog/mti-player/', '238'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/blog/tags/malware/',
    component: ComponentCreator('/blog/tags/malware/', '7de'),
    exact: true
  },
  {
    path: '/blog/tags/proprietary/',
    component: ComponentCreator('/blog/tags/proprietary/', '19c'),
    exact: true
  },
  {
    path: '/blog/tags/reversing/',
    component: ComponentCreator('/blog/tags/reversing/', '820'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '956'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'f1b'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '55b'),
            routes: [
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', 'a64'),
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
