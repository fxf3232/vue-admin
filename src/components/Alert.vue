<template>
  <div class="alert clearfix center" v-show="changred">
    <span>{{message}}</span>
    <i v-on:click="showFn">x</i>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props:["message"],
  data () {
    return {
      changred:true
    }
  },
  methods:{
    showFn:function () {
      this.changred=false;
      this.$router.push({path:"/",query:{alert:""}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alert{
    width: 100%;
    height: 60px;
    line-height:58px;
    background: bisque;
    padding:0 20px;
    margin-top: 20px;
    border: 1px solid burlywood;
    border-radius:8px;
  }
  .alert span{
    float: left;
    font-size: 16px;
    color: chocolate;
  }
  .alert i{
    float: right;
    font-size: 20px;
    color: chocolate;
    cursor: pointer;
  }
</style>
