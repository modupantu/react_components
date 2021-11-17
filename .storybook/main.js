module.exports = {
  "stories": [ //stories表示我们的组件所在目录，Storybook会将这个数组目录下的文件加载到我们看见的组件库Index首页
    "../src/components/**/*.stories.js",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [ //addons表示我们使用到的插件
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}