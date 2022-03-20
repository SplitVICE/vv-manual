Header buttons code.
<template>
  <div @click="Trigger" class="ctx">
    {{ Content }}
  </div>
</template>

<script>
export default {
  props: {
    Content: { type: String, default: "" },
  },
  methods: {
    Trigger() {
      this.$emit("FunctionTrigger");
    },
  },
};
</script>

<style scoped>
.ctx {
  background-color: rgb(6, 177, 28);
  padding: 4px 10px 10px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 15px;
}
.ctx:hover {
  background-color: rgb(6, 107, 20);
}
</style>