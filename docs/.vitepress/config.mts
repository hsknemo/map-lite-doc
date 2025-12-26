import {defineConfig} from 'vitepress'
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
            {text: '主页', link: '/'},
            {text: '起步', link: '/start/quike-start'},
            {text: '团队', link: '/team'},
        ],

        sidebar: {
            '/start/': [
                {
                    text: 'MapLite',
                    items: [
                        {text: '起步', link: '/start/quike-start'},
                        {text: '代码介绍', link: '/start/core-intro'},
                        {text: '快速使用', link: '/start/fast-use'},
                        {text: '火速入门视频教程', link: '/start/classes-source'},
                        {
                            text: '使用', items: [
                                {
                                    text: '如何创建tips',
                                    link: '/start/create-tips'
                                },
                                {
                                    text: '创建一个专题',
                                    link: '/start/special-config'
                                }
                            ]
                        },
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
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
