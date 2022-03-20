<template>
  <span></span>
  <div>
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Home from "./views/Home.vue";
export default {
  components: {
    Header,
    Home,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
