import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  base: '/',
  lang: "zh-CN",
  title: "星图|STAR ALTAS",
  description: "STARTLAS.STUDIO--一个地景开发组非官方页面",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],

  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
  },

  themeConfig: {
    logo: "/images/logo.png",
    repo: "ericzhaoblog/startlas.studio",
    repoLabel: 'GitHub',
    editLinks: true,
    docsDir: 'docs',
    locales: {

      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新',
      },

    },

  },



  markdown: {
    // importCode: {
    //   handleImportPath: (str) =>
    //     str.replace(
    //       /^@vuepress/,
    //       path.resolve(__dirname, '../../packages/@vuepress')
    //     ),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

};
