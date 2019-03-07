<template>
  <div class="newpizza">
    <h3 class="text-center text-warning"></h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NewPizza: {}
    };
  },
  methods: {
    addPizza() {
      var data = {
        name: this.NewPizza.name,
        description: this.NewPizza.description,
        options: [
          { size: this.NewPizza.size1, price: this.NewPizza.price1 },
          { size: this.NewPizza.size2, price: this.NewPizza.price2 }
        ]
      };
      axios.post('./menu-jsx1.json',data)
      .then(res=>{
        console.log(res.data)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .label{
    display: block;
  }
  #input3,#input5{width: 65px;}
</style>
