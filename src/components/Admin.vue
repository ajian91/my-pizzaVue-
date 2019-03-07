<template>
  <div class="admin">
    <!-- 左边 -->
    <div class="col-7">
      <NewPizza></NewPizza>
    </div>
    <div class="col-5"></div>
  </div>
</template>

<script>
//引入NewPizza 组件
import NewPizza from '@components/NewPizza'
export default {
  name: "Admin",
  data() {
    return {

    };
  },
  components:{
    NewPizza
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
