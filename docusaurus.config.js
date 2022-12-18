// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INC Docs',
  tagline: 'Welcome to the INC Docs',
  url: 'https://inctoken.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Incentive Token, LLC', // Usually your GitHub org/user name.
  projectName: 'inctoken', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/inctoken/inc-docs/blob/main',
          sidebarCollapsed: true
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/inctoken',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'INC Docs',
        logo: {
          alt: 'INC Logo',
          src: 'img/inc_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'User Guide',
          },
          {
            label: 'Whitepaper',
            href: '/whitepaper.pdf',
            target: '_blank',
            position: 'left'
          },
          {
            label: 'Governance',
            href: 'https://www.tally.xyz/gov/eip155:137:0x9a342e71abEab4B9F47Daf520D4C8df3bE938153',
            target: '_blank',
            position: 'left'
          },
          {
            label: 'GitHub',
            href: 'https://github.com/inctoken',
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
                label: 'User Guide',
                to: '/intro',
              },
              {
                label: 'Whitepaper',
                href: '/whitepaper.pdf',
                target: '_blank' 
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/incentivetoken',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/fFzDHMKhcN',
              }
            ],
          },
          {
            title: 'Source code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/inctoken',
              },
            ],
          },
        ],
        copyright: `© 2022 Incentive Token, LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
