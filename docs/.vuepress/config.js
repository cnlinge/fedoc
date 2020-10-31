module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    // sidebar: 'auto',
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Foo',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {title: 'aaa', path: 'one'}
        ]
      },
      {
        title: 'Bar',
        path: '/foo/', 
        children: [ 
          {title: 'bbb', path: 'one'}
         ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}