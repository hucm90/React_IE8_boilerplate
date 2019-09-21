# ES6-IE8-boilerplate

ECMAScript 6 入门 [http://es6.ruanyifeng.com/#docs/symbol]

Integrating with Other Libraries[https://reactjs.org/docs/integrating-with-other-libraries.html]


ES6 IE8兼容配置

1. class语法Object.defineProperty: babel需要是loose模式
2. 对象不支持“create”属性或方法.: babel-polyfill
3. webpack@1.15.0  webpack-dev-server@1.16.5  babel-loader@6.4.1
4. es3ify-loader (后来用es3ifyPlugin代替, 因为后者对sourcemap支持更好)
5. React Router 2.3.0支持IE8 [https://github.com/ReactTraining/react-router/tree/v2.3.0/docs]


### anu 各版本的问题

#### 1.6.0
1. 组件返回 null, undefined 会引起页面渲染异常, 可以改成返回"" 
2. webpack编译时出现Object.defineProperty:  引入司徒正美的polyfill import "object-defineproperty-ie8";
3. React.lazy 加载的组件无法传递props


#### 1.5.x
1. input无法实现受控组件


#### 1.4.x
1. context 无法赋值
