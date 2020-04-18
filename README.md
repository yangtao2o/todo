# TODO

记录学习各个语言、框架的 Todo list。

## 目录

- [vue-todo-vanilla](./examples/vue-todo-vanilla)
- [vue-todo-vanilla-2](./examples/vue-todo-vanilla-2)
- [vue-todo-app](./examples/vue-todo-app)

## LocalStorage

比如这个栗子：[vue-todo-app](./examples/vue-todo-app)

如果传入 JSON 格式的对象，可以使用 `JSON.stringify()` 这个方法，来将 JSON 转换成为 JSON 字符串，然后将其再通过 `JSON.parse()` 方法转化成 JSON 对象

```js
// 设置
localStorage.setItem("key", "value");
localStorage.setItem("todoListData", JSON.stringify(this.lists));

// 获取
const lastname = localStorage.getItem("key");

// 移除某一项
localStorage.removeItem("key");
// 移除所有
localStorage.clear();
```
