import { defineConfig } from 'vitepress'
import generateMd from '../plugins/generateMd'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MapLite",
  description: "Mapbox and Openlayers",
  themeConfig: {
    logo: '/img/tj.svg',
    lastUpdated: true,
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '起步', link: '/quike-start' }
    ],

    sidebar: [
      {
        text: 'MapLite',
        items: [
          { text: '起步', link: '/quike-start' },
          { text: '代码介绍', link: '/core-intro' },
          { text: '快速使用', link: '/fast-use' },
          { text: '火速入门视频教程', link: '/classes-source' },
          { text: '使用', items: [
              {
                text: '如何创建tips',
                link: 'create-tips'
              }
            ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  vite: {
    plugins: [
      // 引入本地插件，可以传递选项
      generateMd()
    ]
  }
})
