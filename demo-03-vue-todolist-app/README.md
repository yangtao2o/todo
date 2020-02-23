# TODO + LocalStorage

## Point

- 使用 `Vue-cli@4` 搭建开发环境
- 利用 `localStorage` 做本地存储
- 组件化，可添加、删除某一单独任务，也可统一处理所有条目

## Project setup

```bash
npm install
npm run serve
```

## LocalStorage

> localStorage 类似 sessionStorage，但其区别在于：存储在 localStorage 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 sessionStorage 的数据会被清除 。 --- MDN

### SetItem

```js
localStorage.setItem("key", "value");
```

### GetItem

```js
var lastname = localStorage.getItem("key");
```

### RemoveItem

```js
// 移除某一项
localStorage.removeItem("key");
// 移除所有
localStorage.clear();
```

### JSON 对象

如果传入 JSON 格式的对象，可以使用 `JSON.stringify()` 这个方法，来将 JSON 转换成为 JSON 字符串，然后将其再通过 `JSON.parse()` 方法转化成 JSON 对象，如：

```js
updataData() {
  localStorage.setItem("todoListData", JSON.stringify(this.lists));
}
getData() {
  const data = localStorage.getItem("todoListData");
  if (data.length > 0) {
    this.lists = JSON.parse(data);
  }
}
```
