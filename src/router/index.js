import Vue from 'vue';
import Router from 'vue-router';
//一级路由
import Home from '@/components/Home';
import Menu from '@/components/Menu';
import Admin from '@/components/Admin';
import About from '@/components/About';
import Login from '@/components/Login';
import Register from '@/components/Register';

//二级路由
import Activity from '@/components/about/Activity'
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
//三级路由
import Address from '@/components/about/contact/Address'
import Person from '@/components/about/contact/Person'
import Telphone from '@/components/about/contact/Telphone'



Vue.use(Router);

export default new Router({
  routes: [
    //一级路由
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      //二级路由 设置默认跳转项
      redirect:'/contact/contact',
      children:[
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          //三级路由 默认跳转项
          redirect:'/contact/address',
          children:[  
            {
              path: '/contact/address',
              name: 'Address',
              component: Address
            },
            {
              path: '/contact/person',
              name: 'Person',
              component: Person
            },
            {
              path: '/contact/telphone',
              name: 'Telphone',
              component: Telphone
            },
          ]
        },
        {
          path: '/activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: '/delivery',
          name: 'Delivery',
          component: Delivery
        },
        {
          path: '/history',
          name: 'History',
          component: History
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  // 取消#的锚点链接
  mode:'history'
})
