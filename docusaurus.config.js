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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/inctoken',
          //sidebarCollapsible: false,
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
            label: 'Tutorial',
          },
          {
            label: 'Whitepaper',
            href: '/whitepaper.pdf',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
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
            title: 'More',
            items: [
              {
                label: 'Whitepaper',
                href: '/whitepaper.pdf',
                target: '_blank' 
              },
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
