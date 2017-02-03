# react-seed

## 开发环境

windows下推荐安装终端环境：[cmder.net](http://cmder.net/)

安装nodejs: https://nodejs.org/en/

### 启动项目

进入项目目录,运行

```
npm install
npm run dev
```

即可进行开发

### 项目打包

```
npm run build
```

### 代码检查

```
npm run lint
```

### git commit hook

git commit时会运行lint进行代码静态检查，代码检查通过才可以正常commit

## 目录说明

[目录说明](docs/catelog.md)

## 开发步骤

[开发步骤](docs/dev.md)

## react学习资源

### 官网

https://facebook.github.io/react/

## awesome-react

收集了react社区优秀的文章、工具、周边生态、各类库，非常全面

https://github.com/enaqx/awesome-react

### react-router

单页路由管理

https://react-guide.github.io/react-router-cn/index.html

### redux

状态管理

http://cn.redux.js.org/

### Redux-saga

redux-saga 是一个用于管理 Redux 应用异步操作（Side Effects。译注：直译成 “副作用” 不太通顺，所以这里译为 “异步操作” 更好理解）的中间件（又称异步 action）。 redux-saga 通过创建 *Sagas* 将所有的异步操作逻辑收集在一个地方集中处理，可以用来代替 `redux-thunk` 中间件。

http://leonshi.com/redux-saga-in-chinese/

### Immutable-js 

不可变对象，在react应用中使用比较普遍，由于对象不可变，在virtual dom比较时，无需深度递归比较对象，只需比较引用是否相等，大幅度提升渲染速度。

https://facebook.github.io/immutable-js/

### and-mobile

基于react的移动组件库，蚂蚁金服团队出品

文档： https://mobile.ant.design

demo：http://mobile.ant.design/kitchen-sink （移动设备访问效果更佳）

### webpack

http://webpack.github.io/docs/

### es6

http://es6.ruanyifeng.com/



## 其他文章推荐

1. react影响性能的一些反模式分析：[React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.kdu55n4xc) 
2. 待补充
