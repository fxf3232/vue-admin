<template>
  <div class="adds clearfix center">
  <h1>添加用户</h1>
    <div class="form_box"><form v-on:submit="addForm">
      <div class="form_cen">
        <h2>用户信息</h2>
        <div class="form_p">
          <p>姓名</p>
          <input type="text" placeholder="name" v-model="customer.name"/>
        </div>
        <div class="form_p">
          <p>电话</p>
          <input type="text" placeholder="请输入内容" v-model="customer.phone"/>
        </div>
        <div class="form_p">
          <p>邮箱</p>
          <input type="text" placeholder="请输入内容" v-model="customer.email"/>
        </div>
        <div class="form_p">
          <p>学历</p>
          <input type="text" placeholder="请输入内容" v-model="customer.education"/>
        </div>
        <div class="form_p">
          <p>毕业学校</p>
          <input type="text" placeholder="请输入内容" v-model="customer.graduationschool"/>
        </div>
        <div class="form_p">
          <p>职业</p>
          <input type="text" placeholder="请输入内容" v-model="customer.profession"/>
        </div>
        <div class="form_p">
          <p>个人简介</p>
         <textarea placeholder="请输入内容" v-model="customer.textname"></textarea>
        </div>
      </div>
      <div class="form_submit"><button type="submit">提交</button></div>
    </form></div>
  </div>
</template>

<script>
export default {
  name: 'adds',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
    addForm(e){
     if(!this.customer.name || !this.customer.phone  || !this.customer.email){
       console.log("请添加信息...")
     }else{
       let newdata={
         name:this.customer.name,
         phone:this.customer.phone,
         email:this.customer.email,
         education:this.customer.education,
         graduationschool:this.customer.graduationschool,
         profession:this.customer.profession,
         textname:this.customer.textname
       }
       this.$http.post("http://localhost:3000/users",newdata)
         .then(function(data){
         //提交成功后返回到主页
           this.$router.push({path:"/",query:{alert:"用户添加信息成功"}})   //path：路径，query：传递的信息
         })
     }
      e.preventDefault()   //阻止默认事件
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    width: 100%;
    border-bottom: 1px solid #ccc;
    float: left;
    font-size: 30px;
    color: #444;
    height: 60px;
    line-height: 60px;
    margin-top: 20px;
  }
  .form_box{
    width: 100%;
    float:left;
    margin-top: 20px;
  }
  .form_cen{
    width: 100%;
    background: #f1f1f1;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    float: left;
  }
  .form_cen h2{
    width: 100%;
    float: left;
    font-size: 24px;
    height: 30px;
    line-height: 30px;
    color: #555;
  }
  .form_p{
    width: 100%;
    float: left;
    margin: 10px 0;
  }
  .form_p p{
    height: 30px;
    line-height: 30px;
    width: 100%;
    float: left;
    font-size: 14px;
    color: #666;
  }
  .form_p input{
    width: 100%;
    height: 32px;
    line-height: 30px;
    border: 1px solid #ddd;
    background: #fff;
    padding: 0 15px;
    font-size: 14px;
    color: #555;
    border-radius: 4px;
  }
  .form_p textarea{
    width: 100%;
    height:150px;
    line-height: 30px;
    border: 1px solid #ddd;
    background: #fff;
    padding: 0 15px;
    font-size: 14px;
    color: #555;
    border-radius: 4px;
  }
  .form_submit{
    width: 100%;
    float: left;
    margin-top: 20px;
  }
  .form_submit button{
    width: 80px;
    height: 40px;
    line-height: 40px;
    background: royalblue;
    color: #fff;
    float:left;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
  }
</style>
