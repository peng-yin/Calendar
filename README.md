# Calendar

> 公司项目抽离的组件, 移动端的日历组件, 主要实现了, 左右切花日期, 点击日期, 得到某年某月某日, 起先用 jquery 用 80 多行实现的, 现在改成了 ES6 的 Class 代码组织方式去实现, 逻辑是一样的，只需要知道某个月的 1 号是星期几, 就能把整个日历渲染出来, 整个组件代码体积小,无依赖,适合不同框架下的使用

## 介绍

原生 Javascript 实现移动端 移动端日历组件

预览地址：

[https://yinpen.github.io/Calendar/](https://yinpen.github.io/Calendar/)

## 依赖

原生 JavaScript 实现，无依赖。

## 大小

整个组件的 js 只用到了 300 多行实现， 压缩后 5KB，gzip 压缩后更小。

## 兼容

滑动动画流畅, 在安卓,ios 下未出现兼容问题

## 下载

```js
https://github.com/peng-yin/Calendar.git
```

## 使用

```html
<script src="path/calendar.js"></script>
```

或者

```js
import picker from "path/calendar.js";
```

## 示例

```js
let calendar = new Calendar({
  el: "#calendar",
  onChanged: function(y, m, lastDay) {
    console.log(`${y}年${m}月有:${lastDay}天`);
    document.querySelector(
      ".calendar-header .date"
    ).innerHTML = `${y} 年 ${m} 月`;
  },
  onResult: function(y, m, d) {
    console.log(`当前选中的:`, y, m, d);
  }
});
```

## API

### 初始化

```js
let calendar = new Calendar(options);
```

### options

**container**

必填，指定 Calendar 容器的 selector

### 方法

**1. 向前切换**
```js
calendar.goToPrevMonth();
```
**1. 向后切换**
```js
calendar.goToNextMonth();
```


## TodoList

1. 代码测试, 打包压缩

2. 上传npm， 支持npm
