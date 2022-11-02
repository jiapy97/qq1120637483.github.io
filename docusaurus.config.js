// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "7Wate",
  tagline: "For Freedom",
  url: "https://qq1120637483.github.io/",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.ico",

  projectName: 'qq1120637483.github.io',
  organizationName: 'qq1120637483',
  trailingSlash: false,
  deploymentBranch:"gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '7wate', // Usually your GitHub org/user name.
  // projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: "7Wate`s Blog",
          blogDescription: "7Wate 的个人生活和工作记录",
          blogSidebarCount: 10,
          blogSidebarTitle: "近期文章",
          showReadingTime: true,
          editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
          // postsPerPage: 'ALL',
          feedOptions: {
            title: "7Wate`s Blog",
            description: "7Wate 的个人生活和工作记录",
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 7Wate, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: "G-MHMEL0F832",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-MHMEL0F832',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "structures-algorithms",
        path: "wiki/structures-algorithms",
        routeBasePath: "structures-algorithms",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-network",
        path: "wiki/computer-network",
        routeBasePath: "computer-network",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "operating-system",
        path: "wiki/operating-system",
        routeBasePath: "operating-system",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "database-system",
        path: "wiki/database-system",
        routeBasePath: "database-system",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-security",
        path: "wiki/computer-security",
        routeBasePath: "computer-security",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "software-engineering",
        path: "wiki/software-engineering",
        routeBasePath: "software-engineering",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "org",
        path: "group/organization",
        routeBasePath: "org",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "roadmap",
        path: "work/roadmap",
        routeBasePath: "roadmap",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "life",
        path: "life",
        routeBasePath: "life",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
// -----------------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "journal",
        path: "journal",
        routeBasePath: "journal",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],

  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Always For Freedom. The site by 7Wate.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      metadata: [
        {
          name: "keywords",
          content: "7wate, wiki, blog, c, c++, java, python, linux",
        },
      ],
      navbar: {
        title: "🐋 Faith&Passion's Wiki",
        hideOnScroll: true,
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo_dark.svg',
        //   href: 'https://docusaurus.io/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          { to: "/blog", label: "🍁 博客", position: "right" },
          {
            position: "right",
            label: "🦖 Wiki",
            items: [
              {
                label: "数据结构与算法",
                to: "/structures-algorithms",
              },
              {
                label: "计算机网络",
                to: "/computer-network",
              },
              {
                label: "操作系统",
                to: "/operating-system",
              },
              {
                label: "数据库",
                to: "/database-system",
              },
              {
                label: "网络安全",
                to: "/computer-security",
              },
              {
                label: "软件工程",
                to: "/software-engineering",
              },       
            ],
          },
          {
            position: "right",
            label: "🪟 面经",
            items: [
              {
                label: "前端面经",
                to: "/roadmap",
              },
            ]
          },
          {
            position: "right",
            label: "⏰ LeetCode",
            items: [
              {
                label: "开源社区",
                to: "/org",
              },
            ]
          },
          { to: "/life", label: "🏄‍♂️ 生活", position: "right" },
          { to: "/journal", label: "📜 随笔日记", position: "right" },
        ],
      },
      // algolia: {
      //   apiKey: "5d5a02bdf02df700355c8ccd84b78d13",
      //   appId: "8W3YJXJGF2",
      //   indexName: "wiki",
      // },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} 7Wate, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="https://webify.cloudbase.net/" target="_blank" rel="noopener noreferrer">CloudBase Webify</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["java", "git","nginx","http"],
      },
    }),
};

module.exports = config;
