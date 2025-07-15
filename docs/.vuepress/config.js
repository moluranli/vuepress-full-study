import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Java学习文档',
  description: 'Java面试准备知识库',
  
  base: process.env.NODE_ENV === 'production' 
    ? '/vuepress-full-study/' 
    : '/',
  
  // 使用兼容性更好的 Markdown 配置
  markdown: {
    extendMarkdown: (md) => {
      // 启用 XHTML 兼容模式
      md.set({
        xhtmlOut: true,
        breaks: true,
        typographer: true
      });

      md.renderer.rules.text = (tokens, idx) => {
        let content = tokens[idx].content;
        // 转义泛型语法中的尖括号
        content = content.replace(/<([A-Z][a-zA-Z0-9_]*?)>/g, '&lt;$1&gt;');
        return content;
      };
    }
  },
  
  theme: defaultTheme({
    logo: 'https://freeimghost.net/i/logo.x16g3q',
    
    navbar: [
      { text: '首页', link: '/' },
      { 
        text: '202306秋招准备-旧', 
        link: '/202306秋招准备-旧/'
      },
      { 
        text: '202507社招准备', 
        link: '/202507社招准备/'
      }
    ],
    
    // 侧边栏配置
    sidebar: {
      // 秋招准备侧边栏
      '/202306秋招准备-旧/': [
        {
          text: '每日计划',
          collapsible: true,
          children: [
            { text: '资源地址', link: '/202306秋招准备-旧/EveryDayPlay/StudyValue.md' },
            { text: '2022年6月', link: '/202306秋招准备-旧/EveryDayPlay/202206/a-6月.md' }
          ]
        },
        {
          text: 'Java核心',
          collapsible: true,
          children: [
            { text: 'Java基础', link: '/202306秋招准备-旧/a-1Java基础巩固.md' },
            { text: 'Java其他知识点', link: '/202306秋招准备-旧/a-1Java其他重要知识点.md' },
            { text: 'Java集合', link: '/202306秋招准备-旧/a-2Java集合.md' }
          ]
        },
        {
          text: '数据库与JVM',
          collapsible: true,
          children: [
            { text: 'MySql索引', link: '/202306秋招准备-旧/a-3MySql索引.md' },
            { text: 'JVM学习', link: '/202306秋招准备-旧/a-4JVM学习.md' }
          ]
        },
        {
          text: '算法与面试',
          collapsible: true,
          children: [
            { text: '五大排序', link: '/202306秋招准备-旧/a-6五大排序.md' },
            { text: '面试题', link: '/202306秋招准备-旧/a-5面试题.md' }
          ]
        },
        {
          text: '中间件',
          collapsible: true,
          children: [
            { text: 'Redis', link: '/202306秋招准备-旧/b-1Redis.md' },
            { text: 'Shiro', link: '/202306秋招准备-旧/b-2Shiro+Thymeleaf.md' }
          ]
        },
        {
          text: '设计模式',
          collapsible: true,
          children: [
            { text: '常用设计模式', link: '/202306秋招准备-旧/d-1常用设计模式.md' }
          ]
        },
        {
          text: '项目实践',
          collapsible: true,
          children: [
            { text: '在线论坛项目', link: '/202306秋招准备-旧/c-1Forum_Practice在线论坛.md' },
            { text: 'wiki知识库', link: '/202306秋招准备-旧/c-2wiki个人知识库.md' }
          ]
        }
      ],
      // 社招准备侧边栏
      '/202507社招准备/': [
        {
          text: '面试',
          collapsible: true,
          children: [
            { text: '面试题准备', link: '/202507社招准备/面试题准备.md' },
            { text: '算法题练习', link: '/202507社招准备/算法题练习.md' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/moluranli',
        ariaLabel: 'GitHub 主页'
      }
    ],
    
    repo: 'https://github.com/moluranli/vuepress-full-study',
    repoLabel: 'GitHub编辑'
  }),
  
  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500
      },
      vue: {
        compilerOptions: {
          // 宽松解析模式
          whitespace: 'preserve',
          isCustomElement: tag => true
        }
      }
    }
  }),
  
  head: [
    ['link', { rel: 'icon', href:'https://freeimghost.net/i/logo.x16g3q'}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'keywords', content: 'Java学习,秋招准备,面试题,Java基础' }]
  ],
  
  plugins: [
    ['@vuepress/plugin-search'],
    ['@vuepress/plugin-shiki']
  ]
})