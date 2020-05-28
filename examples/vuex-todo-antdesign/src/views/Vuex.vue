<template>
  <a-layout>
    <a-layout-content>
      <todo></todo>
    </a-layout-content>
    <a-layout-footer>2020·@TAO</a-layout-footer>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/vuex/Todo.vue";

export default {
  name: "Vuex",
  components: {
    Todo
  }
};
</script>