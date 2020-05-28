<template>
  <a-row
    type="flex"
    justify="center"
  >
    <a-col :span="8">
      <h1>{{ msg }}</h1>
      <a-input
        @keydown.enter="add($event)"
        :value="value"
        placeholder="今天需要做些什么"
      />
      <todo-item
        :lists="filterTodoLists"
        @change="status"
        @remove="remove"
      ></todo-item>
      <todo-tab
        :lists="filterTodoLists"
        :filter="filter"
        @toggle="toggle"
        @dele="deleted"
        @clear="clear"
      ></todo-tab>
    </a-col>
  </a-row>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import TodoItem from "./TodoItem";
import TodoTab from "./TodoTab";

export default {
  name: "Todo",
  components: { TodoItem, TodoTab },
  mounted() {
    this.getData();
  },
  watch: {
    lists() {
      return this.updataData();
    }
  },
  computed: {
    ...mapState(["value", "msg", "lists", "filter"]),
    ...mapGetters(["filterTodoLists"])
  },
  methods: {
    ...mapMutations([
      "add",
      "status",
      "remove",
      "deleted",
      "clear",
      "toggle",
      "getID",
      "getData",
      "updataData"
    ])
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
