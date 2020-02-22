<template>
  <div id="app" class="app-wper">
    <h2>TODO</h2>
    <input
      class="edit"
      @keydown.enter="addTask"
      v-model="task.content"
      type="text"
      placeholder="今天要做些什么..."
    />
    <todo-list :lists="lists" @change="status"></todo-list>
    <todo-tab :lists="lists" @done="doneTask" @undone="undoneTask" @deleted="deleTask"></todo-tab>
  </div>
</template>

<script>
// import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoTab from "./components/TodoTab.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoTab
  },
  data() {
    return {
      task: {
        content: "",
        finished: false
      },
      lists: [],
      doneLists: [],
      undoneLists: []
    };
  },
  methods: {
    addTask() {
      if (this.task.content !== "") {
        this.lists.push(this.task);
        this.task = {
          content: "",
          finished: false
        };
      }
    },
    status(index) {
      this.lists[index].finished = !this.lists[index].finished;
    },
    doneTask() {
    },
    undoneTask() {
      
    },
    deleTask() {
      this.lists = this.lists.filter(list => list.finished);
    },
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
  padding: 20px 2%;
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
