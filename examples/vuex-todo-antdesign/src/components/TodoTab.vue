<template>
  <div class="tab" v-if="lists.length > 0">
    <div class="nums-wrap">
      <span>{{ nums }} items</span>
    </div>
    <div class="btn-wrap">
      <a
        v-for="{ id, text } of status"
        :class="{ active: filter === text }"
        :key="id"
        @click="handleClick(text)"
        >{{ text.toUpperCase() }}</a
      >
    </div>
    <div class="clear-wrap">
      <a @click="handleDele">DELE</a>
      <a @click="handleClear">CLEAR</a>
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
    },
    filter: {
      type: String,
      required: true
    }
  },
  computed: {
    nums() {
      let nums = this.lists.length;
      if (this.filter === "finished") {
        nums = this.lists.filter(list => list.finished).length;
      } else if (this.filter === "unfinished") {
        nums = this.lists.filter(list => !list.finished).length;
      }
      return nums;
    }
  },
  data() {
    return {
      status: [
        {
          id: 0,
          text: "all"
        },
        {
          id: 1,
          text: "unfinished"
        },
        {
          id: 2,
          text: "finished"
        }
      ]
    };
  },
  methods: {
    handleClick(state) {
      this.$emit("toggle", state);
    },
    handleDele() {
      this.$emit("dele");
    },
    handleClear() {
      this.$emit("clear");
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
.nums-wrap {
  font-size: 13px;
}
.btn-wrap > a,
.clear-wrap > a {
  padding: 3px 5px;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn-wrap > a.active,
.clear-wrap > a {
  border-color: #ccc;
}
.empty {
  font-size: 13px;
  color: #ccc;
  text-align: center;
  padding: 10px 0;
}
</style>
