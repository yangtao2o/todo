<template>
  <div id="app" class="app-wper">
    <h2>TODO</h2>
    <input
      class="edit"
      @keydown.enter="addTask"
      type="text"
      placeholder="今天要做些什么..."
    />
    <todo-list :lists="lists" @change="status" @remove="removeTask"></todo-list>
    <todo-tab
      :lists="lists"
      @all="allTask"
      @done="doneTask"
      @undone="undoneTask"
      @deleted="deleTask"
    ></todo-tab>
  </div>
</template>

<script>
// import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoTab from "./components/TodoTab.vue";

let id = 0;
export default {
  name: "App",
  components: {
    TodoList,
    TodoTab
  },
  data() {
    return {
      lists: [],
      doneLists: [],
      undoneLists: []
    };
  },
  methods: {
    addTask(e) {
      const content = e.target.value;
      if (content !== "") {
        this.lists.unshift({
          id: id++,
          content,
          finished: false
        });
      }
      e.target.value = '';
    },
    removeTask(id) {
      this.lists.forEach((list, index) => {
        if (list.id === id) {
          this.lists.splice(index, 1);
          id--;
          return;
        }
      });
    },
    status(id) {
      this.lists.forEach(list => {
        if (list.id === id) {
          list.finished = !list.finished;
          return;
        }
      });
    },
    allTask() {},
    doneTask() {},
    undoneTask() {},
    deleTask() {}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-wper {
  max-width: 420px;
  margin: 30px auto;
  padding: 20px 2% 30px;
  border: 1px solid #f3f3f3;
  border-radius: 6px;
  box-shadow: 0px 2px 10px 4px #ccc;
}
h2 {
  font-weight: normal;
  color: #777;
  text-align: center;
}
.edit {
  display: block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin: 30px auto 15px;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 0;
  box-shadow: 0 0 5px #ccc;
}
</style>
