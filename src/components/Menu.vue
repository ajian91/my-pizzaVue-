<template>
  <div class="menu container row">
    <!-- 左边菜单 -->
    <div class="col-7">
      <h3 class="text-center text-primary">点餐</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white">
          <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格（元）</th>
            <th scope="col">加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
          <tr>
            <td colspan="3">{{item.name}}</td>
          </tr>
          <tr>
            <td colspan="3">{{item.description}}</td>
          </tr>
          <tr v-for="(item1,index1) in item.options" :key="index1">
            <td>{{item1.size}}</td>
            <td>{{item1.price}}</td>
            <td><button class="btn btn-success" @click='addToBasket(item,item1)'>+</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 右边 -->
    <div class="col-5 text-center">
      <h3 class="text-primary">购物车</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white">
          <tr>
            <th scope="col">数量</th>
            <th scope="col">种类</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <template v-if="newItems.length >0">
          <tbody v-for='(item,index) in newItems' :key='index'>
            <tr>
              <td>
                <button class="btn btn-primary" @click='reduce(item,index)'>-</button>
                <input type="number" class="input" v-model.number='item.quantity'>
                <button class="btn btn-primary" @click='add(item)'>+</button>
              </td>
              <td>{{item.name}}-{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
          <!-- 计算总数加 总价 -->
            <tr>
              <td colspan="3" class="text-info">商品总数：{{totalNum}}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-info">商品总价：{{totalPrice}}</td>
            </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3" class="text-danger"> <h1>此购物车空空如也</h1></td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items:{
        0:{
          name:'芝士pizza',
          description:'这是一款被大众喜爱的pizza。',
          options:[
            {
              size:'7寸',
              price:70
            },
            {
              size:'10寸',
              price:100
            }
          ]
        },
        1:{
          name:'榴莲pizza',
          description:'这是一款口味独特的pizza。',
          options:[
            {
              size:'7寸',
              price:90
            },
            {
              size:'10寸',
              price:140
            }
          ]
        }
      },
      //表示当我在左边菜单栏添加数据，newItems才有值
    newItems:[]
    }
  },
  mounted:{
    // axios.get('./menu-jsx.json')
    // .then(res=>{
    //   this.items=res.data;
    // })
  },
  methods:{
    addToBasket(item,options){
      //点击添加时实现去重
      //当前展示的这一项与我们输出的一项吻合时，实现数量quanitity+1
      var result = this.newItems.filter((item1)=>{
        return item.name == item1.name && options.size == item1.size
      });
      if(result!= null && result.length>0){
        if(result[0].quantity >= 10){
        result[0].quantity =10;
      }else{
        result[0].quantity++;
      }
      }else{
        this.newItems.push({
          name:item.name,
          size:options.size,
          quantity:1,
          price:options.price
        })
      }
    },
    reduce(item,index){
      if(item.quantity>1){
        item.quantity--;
      }else{
        this.newItems.splice(index,1)
      }
    },
    add(item){
      if(item.quantity >= 10){
        item.quantity =10;
      }else{
        item.quantity++;
      }
    }
  },
  computed:{
    totalNum(){
      return this.newItems.length;
    },
    totalPrice(){
      return this.newItems.reduce((sum,cur)=>{
        return sum+cur.quantity*cur.price;
      },0)
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{width: 50px;text-align: center}
</style>
