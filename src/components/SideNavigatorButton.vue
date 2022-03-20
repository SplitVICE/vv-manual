<template>
  <span>
    <div @click="SetCurrentView" class="link">{{ Content }}</div>
    <br />
  </span>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {},
  methods: {
    ...mapActions(["UpdateCurrentView"]),
    SetCurrentView() {
      this.View != ""
        ? this.UpdateCurrentView(this.View.toLowerCase())
        : this.UpdateCurrentView(this.Content.toLowerCase());
    },
  },
  props: {
    Content: {
      type: String,
      default: "",
    },
    View: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
/*
===================================================================================================
General
===================================================================================================
*/
div {
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 5px;
}

div:hover {
  color: rgb(180, 255, 161);
}
</style>