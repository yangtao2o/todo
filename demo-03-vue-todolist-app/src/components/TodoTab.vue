<template>
  <div class="tab" v-if="lists.length > 0">
    <div>
      <span>剩 {{ unFinishedTask }} 条任务</span>
    </div>
    <div class="btn-wrap">
      <a @click="handleAllTasks">全部项</a>
      <a @click="handleUnfinished">未完成</a>
      <a @click="handleFinished">已完成</a>
      <a class="dele" @click="handleDeleted">删除</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoTab",
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  computed: {
    unFinishedTask() {
      return this.lists.filter(list => !list.finished).length;
    }
  },
  methods: {
    handleAllTasks() {
      this.$emit("all");
    },
    handleFinished() {
      this.$emit("done");
    },
    handleUnfinished() {
      this.$emit("undone");
    },
    handleDeleted() {
      this.$emit("delete");
    }
  }
};
</script>

<style class="scoped">
.tab {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-wrap > a {
  color: #fff;
  background: #0b97ec;
  padding: 3px 10px;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 4px;
  cursor: pointer;
}
.empty {
  font-size: 13px;
  color: #ccc;
  text-align: center;
  padding: 10px 0;
}
</style>
