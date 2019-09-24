<template>
  <div class="customers container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="customer in filterBy(customers,filterInput)" :key="customer.id">
            <td>{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" :to="'/customers/'+customer.id">详情</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './ALert'
export default {
  name: 'customers',
  props: [],
  data(){
      return{
        customers:[],
        alert:"",
        filterInput:""
      }
  },
  methods:{
    fetchCustomer(){
      this.$http.get("http://localhost:3000/users")
        .then(function(res){
          
            this.customers=res.body;
        },function(){
          console.log("请求失败了")
        })
    },
    filterBy(customer,value){
      return customer.filter(function(customer){
        return customer.name.match(value);
      })
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert;
      
    }
    this.fetchCustomer()

  },
  // updated(){
  //   setTimeout(function(){
  //       this.alert="1";
  //       console.log(this.alert)
  //     },2000)
  // },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
