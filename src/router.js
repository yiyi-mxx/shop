import VueRouter from 'vue-router'
import customers from './components/Customers.vue'
import about from './components/About.vue'
import add from './components/Add.vue'
import CustomerDetail from './components/CustomerDetail.vue'
import edit from './components/Edit.vue'
var router =new VueRouter({
    routes:[
        {
            path:'/',redirect:'/customers'
        },
        {
            path:'/customers',component:customers
        },
        {
            path:'/about',component:about
        },
        {
            path:'/add',component:add
        },
        {
            path:'/customers/:id',component:CustomerDetail
        },
        {
            path:'/edit/:id',component:edit
        },
    ]
})
export default router