import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },

    {
      path: '/login',
      component: resolve => require(['@/pages/login/login.vue'], resolve),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/index',
      component: resolve => require(['@/components/Home.vue'], resolve),
      name: "首页",
      meta: {
        title: '首页',
        // keepAlive:true
      },
      children: [
        {
          path: '/',
          redirect: '/appSystem'
        },
        {
          path: '/appSystem',
          component: resolve => require(['@/pages/appSystem/index.vue'], resolve),
          meta: {
            title: '首页'
          },
        }

      ]
    }
  ]


})


//路由拦截
// router.beforeEach((to, from, next) => {
//   // console.log('跳转到:', to.fullPath);
//   var token = localStorage.getItem('token');
//   //如果没登录,都导向登录页
//   if (!token) {
//     if (to.path !== '/login') {
//       next({
//         path: '/login'
//       })
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }

// })

export default router
