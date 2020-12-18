<div>
  <h1 align="center">BUGU UI</h1>
  <h3 align="center">🦜 bugu-ui 一个实用轻量的React组件库</h3>
</div>
<br>


[![npm](https://img.shields.io/npm/v/bugu-ui?style=flat-square)](https://www.npmjs.com/package/bugu-ui)
[![node-current](https://img.shields.io/node/v/bugu-ui?style=flat-square)](https://github.com/bugu-pro/bugu-ui)
[![npm](https://img.shields.io/npm/dm/bugu-ui?style=flat-square)](https://www.npmjs.com/package/bugu-ui)

[![Travis (.org)](https://img.shields.io/travis/bugu-pro/bugu-ui?style=flat-square)](https://travis-ci.org/github/bugu-pro/bugu-ui)
[![Codecov](https://img.shields.io/codecov/c/github/bugu-pro/bugu-ui?style=flat-square&token=I28H1VMRQR)](https://codecov.io/gh/bugu-pro/bugu-ui)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/bugu-ui?style=flat-square)](https://bundlephobia.com/result?p=bugu-ui)


### 👏 特性

- 🤜 开箱即用
- 💪 TypeScript 开发，内置类型定义文件
- 👋 支持 Tree Shaking
- 🤝 支持主题定制

### 📄 预览

- [BUGU-UI 文档地址](https://bugu-ui.bugu.vercel.app/)

### 💻 支持环境

- React >= 16
- 现代浏览器，非 IE
- 支持服务端渲染(SSR)

### 🧩 安装

```shell
yarn add bugu-ui

# or

npm install bugu-ui --save
```

### 🏎 使用

- 基本使用

```jsx
import React from 'react'
import { Button } from 'bugu-ui'
import 'bugu-ui/dist/bugu-ui.css'

const App = () => {
  return <Button type="primary">bugu-ui</Button>
}

export default App
```

- 按需加载

```js
import Button from 'bugu-ui/es/button'
import 'bugu-ui/es/button/index.css'
```

- 支持[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

### 🔑 License

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
