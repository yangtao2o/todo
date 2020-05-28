<template>
  <a-row type="flex" justify="center">
    <a-col :span="8">
      <h1>{{ msg }}</h1>
      <a-input
        @keydown.enter="addTask"
        :value="value"
        placeholder="今天需要做些什么"
      />
      <todo-item
        :lists="filterTodoLists"
        @change="status"
        @remove="removeTask"
      ></todo-item>
      <todo-tab
        :lists="lists"
        :filter="filter"
        @toggle="toggleFilter"
        @dele="deleteList"
        @clear="clearAll"
      ></todo-tab>
    </a-col>
  </a-row>
</template>

<script>
import TodoItem from "./TodoItem";
import TodoTab from "./TodoTab";

export default {
  name: "Todo",
  props: {
    msg: String
  },
  components: {
    TodoItem,
    TodoTab
  },
  data() {
    return {
      id: 0,
      lists: [],
      value: "",
      filter: "all"
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    lists() {
      return this.updataData();
    }
  },
  computed: {
    filterTodoLists() {
      if (this.filter === "all") {
        return this.lists;
      }
      const finished = this.filter === "finished";
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
      this.filter = "all";
    },
    clearAll() {
      this.lists = [];
    },
    getData() {
      const data = localStorage.getItem("todoListData");
      if (data && data.length > 0) {
        this.lists = JSON.parse(data);
        this.id = this.lists[0].id + 1;
      }
    },
    updataData() {
      localStorage.setItem("todoListData", JSON.stringify(this.lists));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  margin: 40px 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
