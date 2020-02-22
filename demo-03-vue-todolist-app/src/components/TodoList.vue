<template>
  <div v-if="lists.length > 0">
    <div class="list" v-for="(list, index) of lists" :key="index">
      <label :for="index" :class="{ finished: list.finished }">
        <input :id="index" @click="handleChange(index)" type="checkbox" />
        <span>{{ list.content }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["lists"],
  methods: {
    handleChange(index) {
      this.$emit("change", index);
    }
  }
};
</script>

<style scoped>
.list {
  width: 100%;
  margin: 0 auto;
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
</style>
