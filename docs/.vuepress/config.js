module.exports = {
  title: '不爱吃鱼的猫的组件库',
  description: '',
  host: '0.0.0.0',
  port: '8080',
  themeConfig: {
    logo: '/image/logo.png',
    nav:[ // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/'},
      { text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
}