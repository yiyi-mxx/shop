<template>
  <div class="edit container" >
      <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">编辑用户信息</h1>
      <form action="" v-on:submit="updataCustomer">
          <!-- v-on:submit="addCustomer"没有这个的话，提交的时候会调用的是系统提供的submit方法们不能用我们自己定义的方法 -->
          <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                  <label for="">姓名</label>
                  <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                  <label for="">电话</label>
                  <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
              </div>
              <div class="form-group">
                  <label for="">邮箱</label>
                  <input type="text" class="form-control" placeholder="email" v-model="customer.email">
              </div>
              <div class="form-group">
                  <label for="">学历</label>
                  <input type="text" class="form-control" placeholder="education" v-model="customer.education">
              </div>
              <div class="form-group">
                  <label for="">毕业学校</label>
                  <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
              </div>
              <div class="form-group">
                  <label for="">职业</label>
                  <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
              </div>
              <div class="form-group">
                  <label for="">个人简介</label>
                  <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                  <textarea name="" class="form-control" id="" cols="30" rows="10" v-model="customer.profile"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">提交</button>
          </div>
      </form>
  </div>
</template>

<script>
import Alert from "./ALert";
export default {
  name: 'edit',
  props: [],
  data(){
      return{
          customer:{},
          alert:""
      }
  },
  created(){
      this.$http.get("http://localhost:3000/users/"+this.$route.params.id)
        .then(function(res){
            this.customer=res.body
        })
  },
  methods:{
      updataCustomer(e){
          if(!this.customer.name||!this.customer.phone||!this.customer.email){
              this.alert="请添加对应信息！"
          }else{
              let updataCustomers={
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  education:this.customer.education,
                  graduationschool:this.customer.graduationschool,
                  profession:this.customer.profession,
                  profile:this.customer.profile
              }
              this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updataCustomers,{emulateJSON:true})
                .then(function(res){
                    // console.log(res);
                    // this.$router.push相当于<router-link to="">
                    //通过params传参
                    // this.$router.push({name: 'dispatch', params: {paicheNo: obj.paicheNo}})
                    //获取数据
                    // this.$route.params.paicheNo
                    //通过query传参
                    // this.$router.push({path: '/transport/dispatch', query: {paicheNo: obj.paicheNo}})
                    //获取数据
                    // this.$route.query.paicheNo
                    this.$router.push({path:"/",query:{alert:"编辑用户信息成功！"}})
                })
          }
          e.preventDefault();
      }
  },
  components:{
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>