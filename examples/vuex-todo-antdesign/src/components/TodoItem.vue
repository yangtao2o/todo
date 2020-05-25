<template>
  <div>
    <a-list bordered :data-source="lists">
      <a-list-item
        slot="renderItem"
        slot-scope="item"
        key="item.id"
        :class="{ finished: item.finished }"
      >
        <a slot="actions" @click="handleChange(item)">Complete</a>
        <a slot="actions" @click="handleRemove(item)">Delete</a>
        <div>{{ item.content }}</div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
export default {
  props: {
    lists: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    handleChange(item) {
      this.$emit("change", item.id);
    },
    handleRemove(item) {
      this.$emit("remove", item.id);
    }
  }
};
</script>
<style>
.finished {
  text-decoration: line-through;
  color: #858181;
}
</style>
