<template>
  <div class="about">
    <h1>这是个about页面</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
