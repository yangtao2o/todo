<template>
  <div v-if="lists.length > 0">
    <div class="list" v-for="{ id, content, finished } of lists" :key="id">
      <label :for="id" :class="{ finished: finished }">
        <input :id="id" @click="handleChange(id)" type="checkbox" />
        <span>{{ content }}</span>
      </label>
      <a class="dele" @click="handleRemove(id)">X</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["lists"],
  methods: {
    handleChange(id) {
      this.$emit("change", id);
    },
    handleRemove(id) {
      this.$emit("remove", id);
    }
  }
};
</script>

<style scoped>
.list {
  width: 100%;
  margin: 5px auto;
  text-align: left;
}
.unit {
  padding: 15px 0;
}
.border {
  border-top: 1px solid #f3f3f3;
}
.finished {
  text-decoration: line-through;
  color: #858181;
}
.dele {
  float: right;
  color: red;
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
  transform: rotate(90deg);
}
</style>
