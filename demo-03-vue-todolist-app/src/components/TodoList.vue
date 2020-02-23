<template>
  <div class="list">
    <label :for="list.id" :class="{ finished: list.finished }">
      <input :id="list.id" @click="handleChange" type="checkbox" />
      <span>{{ list.content }}</span>
    </label>
    <a class="dele" @click="handleRemove">X</a>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["list"],
  methods: {
    handleChange() {
      this.$emit("change", this.list.id);
    },
    handleRemove() {
      this.$emit("remove", this.list.id);
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
