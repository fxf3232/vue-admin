<template>
  <div class="contenters clearfix center">
    <div class="content_btn"><router-link to="/">返回</router-link><router-link v-bind:to="'/edit/'+names.id">编辑</router-link><button @click="deletBox(names.id)">删除</button></div>
   <h1>{{names.name}}</h1>
    <div class="content_box">
      <ul>
        <li><span>手机号：</span><em>{{names.phone}}</em></li>
        <li><span>邮箱：</span><em>{{names.email}}</em></li>
        <li><span>学历：</span><em>{{names.education}}</em></li>
        <li><span>毕业学校：</span><em>{{names.graduationschool}}</em></li>
        <li><span>职业：</span><em>{{names.profession}}</em></li>
        <li><span>个人简介：</span><em>{{names.textname}}</em></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contenters',
  data () {
    return {
      names:""
    }
  },
  methods:{
    fetchFn(id){
      this.$http.get("http://localhost:3000/users/"+id)
        .then(function (data) {
          this.names = data.body;
        })
    },
    deletBox(id){
      this.$http.delete("http://localhost:3000/users/"+id)
        .then(function (data) {
          this.$router.push({path:"/",query:{alert:"用户已删除成功"}})
        })
    }
  },
  created:function () {
    this.fetchFn(this.$route.params.id)   //this.$route.params.id 获取的id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    width: 100%;
    border-bottom: 1px solid #ccc;
    float: left;
    font-size: 28px;
    color: #444;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
  }
  .content_box{
    width: 100%;
    float: left;
    border: 1px solid #ddd;
    margin-top: 30px;
    border-radius: 8px;
  }
  .content_box li{
    width: 100%;
    float: left;
    height: 38px;
    line-height: 37px;
    border-top: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    color: #777;
  }
  .content_box li span{
    width: 100px;
    float: left;
  }
  .content_box li:first-child{
    border-top: none;
  }
  .content_btn{
    width: 100%;
    float: left;
    margin-top: 30px;
  }
  .content_btn a,.content_btn button{
    width:70px;
    float: left;
    margin-right: 20px;
    height: 34px;
    line-height: 32px;
    border: 1px solid #aaa;
    font-size: 15px;
    color: #666;
    border-radius: 6px;
    text-align: center;
    background: #fff;
    cursor: pointer;
  }
  .content_btn a:hover,.content_btn button:hover{
    background: #f6f6f6;
  }
</style>
