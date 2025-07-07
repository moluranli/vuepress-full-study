import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { path } from '@vuepress/utils'

export default defineUserConfig({
  // 基础配置
  lang: 'zh-CN',
  title: 'VuePress 学习文档',
  description: 'VuePress 部署到 GitHub Pages 的完整示例',

  // 关键：部署路径配置（必须与仓库名一致）
  base: process.env.NODE_ENV === 'production' 
    ? '/vuepress-full-study/' 
    : '/',

  // 主题配置
  theme: defaultTheme({
    logo: '/images/logo.png', // 图片放在 docs/.vuepress/public/images/
    
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' }
    ],
    
    sidebar: {
      '/guide/': [
        { text: '快速开始', link: '/guide/' },
        { text: '部署指南', link: '/guide/deployment' }
      ]
    }
  }),

  // 构建工具配置
  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500 // 增大块大小警告限制
      }
    }
  }),

  // 头部标签
  head: [
    ['link', { rel: 'icon', href: '/vuepress-full-study/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  // 插件配置
  plugins: [
    ['@vuepress/plugin-search'], // 内置搜索插件
    ['@vuepress/plugin-shiki']   // 代码高亮
  ]
})