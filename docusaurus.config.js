const path = require('path')
const beian = ''

// const announcementBarContent = `<span>新增 <a href='/protocol-template'>Protocol 协议复现模板</a></span>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Faith&Passion的小站',
  titleDelimiter: '-',
  url: "https://qq1120637483.github.io/",
  baseUrl: '/',
  favicon: 'img/logo2.png',
  organizationName: 'qq1120637483',
  projectName: 'blog',
  tagline: '记录所学知识，领略编程之美',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo2.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content: 'Faith&Passion'
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web, 前端, 后端',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: 'Faith&Passion',
      logo: {
        alt: 'Faith&Passion',
        src: 'https://p0.meituan.net/dpplatform/6c0b1c2aff984bc7ce5da26faa1a7ba0225988.png',
        srcDark: 'img/logo2.png',
      },
      items: [
        { to: "archive", label: "🍁 博客", position: "right" },
        {
          label: '🦖 Wiki',
          position: 'right',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '笔记',
              to: 'docs/skill/',
            },
            {
              label: '工具推荐',
              to: 'docs/tools/',
            },
          ],
        },
        {
          label: '💎 面经',
          position: 'right',
          items: [
            {
              label: '字节一面',
              to: 'tags',
            },
          ],
        },
        {
          label: '⏰ LeetCode',
          position: 'right',
          items: [
            {
              label: 'API服务',
              to: 'https://jpy.wiki/',
            },
          ],
        },
        {
          label: '💻 项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '🏄‍♂️ 生活',
          position: 'right',
          to: 'https://jpy.wiki/',
        },
        {
          label: '📜 随笔日记',
          position: 'right',
          to: 'https://jpy.wiki/',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '实战项目',
              to: 'project',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/qq1120637483',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/2559318802828711/posts',
            },
          ],
        },
        {
          title: '更多',
          items: [
            // {
            //   label: '导航',
            //   position: 'right',
            //   to: 'website',
            // },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
            },
          ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2022 - PRESENT Faith&Passion Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    // algolia: {
    //   appId: 'GV6YN1ODMO',
    //   apiKey: '50303937b0e4630bec4a20a14e3b7872',
    //   indexName: 'kuizuo',
    // },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      mapping: 'title',
      lang: 'zh-CN',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      wechat: 'https://p0.meituan.net/dpplatform/e245a4f89dca96e217f68716a56f7faa90559.jpg',
      github: 'https://github.com/qq1120637483',
      juejin: 'https://juejin.cn/user/2559318802828711/posts',
      csdn: 'https://jiapy.blog.csdn.net/',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Faith&Passion',
          copyright: `Copyright © ${new Date().getFullYear()} Faith&Passion Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
}

module.exports = config
