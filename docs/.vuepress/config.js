module.exports = {
  title: '爱吃鱼的猫',
  description: '欢迎来到的猫的世界',
  host: '0.0.0.0',
  port: '8080',
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Fish loving cat',
      description: 'Welcome to the world of cats'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '爱吃鱼的猫',
      description: '欢迎来到的猫的世界'
    }
  },
  sidebar: [
    '/',
    'guide'
  ],
  themeConfig: {
    logo: '/image/logo.png', // 目录在public下
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: 'English',
        nav: [
          { text: '指南', link: '/guide/' }
        ]
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '组件', link: '/zh/components/'}
        ],
        sidebar: {
          '/zh/guide/': [
            ['getStarted', '快速上手'],
            ['customTheme', '自定义主题']
          ],
          '/zh/components/': [
            {
              title: '通用类',
              collapsable: false,
              children: [
                ['button', 'Button按钮']
              ]
            },
            {
              title: '表单类',
              collapsable: false,
              children: [
                ['hForm', 'Form表单']
              ]
            }
          ]
        }
      }
    }
  },
  plugins: ['demo-container']
}