<template>
  <div class="details container">
      <router-link to="/" class="btn btn-default">返回</router-link>
      <h1 class="page-header">{{ customer.name }}

          <span class="pull-right">
              <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
              <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
          </span>
      </h1>
      <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-user">{{ customer.phone }}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{ customer.email}}</span></li>
      </ul>
       <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-user">{{ customer.graduationschool }}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{ customer.education}}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-user">{{ customer.profession }}</span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{ customer.profile}}</span></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetail',
  props: [],
  data(){
      return{
          customer:""
      }
  },
  methods:{
      fetchCustomer(id){
      this.$http.get("http://localhost:3000/users/"+id)
        .then(function(res){
            this.customer=res.body
        },function(){
          console.log("请求失败了")
        })
    },
    deleteCustomer(id){
        this.$http.delete("http://localhost:3000/users/"+id)
            .then(function(res){
                this.$router.push({path:"/",query:{ alert:"用户删除成功！"}});
            },function(e){
                console.log(e)
            })
    }
  },
  created(){
      this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>