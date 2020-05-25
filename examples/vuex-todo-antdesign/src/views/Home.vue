<template>
  <a-layout>
    <a-layout-content>
      <Todo msg="TODO LIST" />
    </a-layout-content>
    <a-layout-footer>2020·@TAO</a-layout-footer>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  components: {
    Todo,
  },
};
</script>
