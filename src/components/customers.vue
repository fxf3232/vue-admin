<template>
  <div class="customers center clearfix">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
   <h1 class="cust_h1">用户管理系统</h1>
    <div class="cust_soso"><input type="text" placeholder="搜索" v-model="soname"/></div>
    <div class="tables">
      <table>
        <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="custname in sofn(customers,soname)">
          <td>{{custname.name}}</td>
          <td>{{custname.phone}}</td>
          <td>{{custname.email}}</td>
          <td><router-link v-bind:to="'/contenters/'+ custname.id">详情</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Alert from "./Alert"
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:"",
      soname:""
    }
  },
  methods:{
    fetchdata(){
      this.$http.get("http://localhost:3000/users")
        .then(function (data) {
          this.customers= data.body
        })
    },
    sofn(customers,value){
      return customers.filter(function (i) {
        return i.name.match(value)
      })
    }
  },
  created:function(){
    if(this.$route.query.alert){
      this.alert =this.$route.query.alert
    }
    this.fetchdata();
  },
  components:{
    Alert
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cust_h1{
    width: 100%;
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 30px 0 10px 0;
    font-size: 34px;
    color: #444;
    font-weight: 900;
    letter-spacing: 2px;
  }
  .tables,.tables table{
    width: 100%;
    float: left;
  }
  .tables table tr{
    width: 100%;
    float: left;
    height: 42px;
    line-height:41px;
    border-bottom: 1px solid #ddd;
  }
  .tables thead th{
    font-size: 17px;
    color: #333;
    font-weight: normal;
    width: 25%;
    float: left;
    text-align: left;
    padding-left: 5px;
  }
  .tables tbody td{
    font-size: 15px;
    color: #555;
    font-weight: normal;
    width: 25%;
    float: left;
    text-align: left;
    padding-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
  }
  .tables tbody tr:hover{
    background: #f5f5f5;
  }
  .tables tbody td a{
    width: 60px;
    height: 30px;
    float: left;
    line-height: 28px;
    border: 1px solid #ccc;
    color: #777;
    background: #fff;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 4px;
    text-align: center;
  }
  .cust_soso{
    width: 100%;
    float: left;
    margin: 5px 0;
  }
  .cust_soso input{
    width: 100%;
    float: left;
    height: 40px;
    line-height: 38px;
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius:20px;
    font-size: 15px;
    color: #666;
  }
</style>
