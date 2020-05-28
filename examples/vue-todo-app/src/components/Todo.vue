<template>
  <div>
    <h2>TODO</h2>
    <input
      class="edit"
      @keydown.enter="addTask"
      type="text"
      placeholder="今天要做些什么..."
    />
    <div v-if="lists.length > 0">
      <todo-list
        v-for="list of filterTodoList"
        :list="list"
        :key="list.id"
        @change="status"
        @remove="removeTask"
      ></todo-list>
    </div>
    <todo-tab
      :lists="lists"
      :filter="filter"
      @toggle="toggleFilter"
      @clear="clearAll"
      @dele="deleteList"
    ></todo-tab>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoTab from "./TodoTab.vue";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoTab
  },
  data() {
    return {
      id: 0,
      lists: [],
      filter: "全部"
    };
  },
  watch: {
    lists() {
      return this.updataData();
    }
  },
  computed: {
    filterTodoList() {
      if (this.filter === "全部") {
        return this.lists;
      }
      const finished = this.filter === "已完成";
      return this.lists.filter(list => list.finished === finished);
    }
  },
  methods: {
    addTask(e) {
      const content = e.target.value.trim();
      if (content !== "") {
        this.lists.unshift({
          id: this.id++,
          content,
          finished: false
        });
      }
      e.target.value = "";
    },
    removeTask(id) {
      this.lists.splice(
        this.lists.findIndex(list => list.id === id),
        1
      );
    },
    status(id) {
      this.lists.forEach(list => {
        if (list.id === id) {
          list.finished = !list.finished;
          this.updataData();
          return;
        }
      });
    },
    toggleFilter(state) {
      this.filter = state;
    },
    deleteList() {
      this.lists = this.lists.filter(list => !list.finished);
    },
    clearAll() {
      this.lists = [];
      localStorage.clear();
    },
    getData() {
      const data = JSON.parse(localStorage.getItem("todoListData"));
      if (data && data.length > 0) {
        this.lists = data;
        this.id = this.lists[0].id + 1;
      }
    },
    updataData() {
      localStorage.setItem("todoListData", JSON.stringify(this.lists));
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
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
