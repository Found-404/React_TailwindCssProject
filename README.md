# React+Tailwind CSS响应式页面

> 项目源作者： 峰华前端工程师
>
> 源码：[前往](https://github.com/zxuqian/code-examples/tree/master/react/react-tailwind-agency)
>
> 技术栈：React，Tailwind CSS，Vite

## 安装

- 构建Vite项目
  - `yarn create vite`
- 安装Tailwind CSS依赖
  - `yarn add -D tailwindcss postcss autoprefixer`
- 初始化Tailwind CSS
  - `npx tailwindcss init -p`
  - 生成连个config.js文件
    - 第一个是Tailwind CSS的配置文件
    - 第二个是postcss的配置文件

## 配置

### tailwind.config

> content: ["./index.html","./src/**/*.{js,jsx}"], //配置tailwindcss需要扫描的文件用来编译tailwindcss

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"], //配置tailwindcss需要扫描的文件用来编译tailwindcss
  theme: {
    extend: {},
  },
  plugins: [],
}

```

## 测试

1. 在index.css引入tailwindcss提供的css样式

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

2. 在App.jsx编写测试代码

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='text-3xl font-bold underline'>Hello world!</h1>
  )
}
export default App
```

3. 执行`yarn dev `启动项目

## 编写

待续......

