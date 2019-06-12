import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: resolve => require(['./views/login.vue'], resolve),
    //   meta: {
    //     title: '云诊所管理系统-登录'
    //   }
    // },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['./views/register.vue'], resolve),
      meta: {
        title: '云诊所管理系统-注册'
      }
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resolve => require(['./views/resetpassword.vue'], resolve),
      meta: {
        title: '云诊所管理系统-注册'
      }
    },
    {
      path: '',
      redirect: '/working/today',
      component: resolve => require(['./views/home.vue'], resolve),
      children: [
        {
          path: '/login',
          name: 'login',
          component: resolve => require(['./views/login.vue'], resolve),
          meta: {
            title: '云诊所管理系统登录'
          }
        },
        {
          path: '/working/today',
          name: 'workingToday',
          component: resolve => require(['./components/working/today.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/working/date',
          name: 'workingDate',
          component: resolve => require(['./components/working/date.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/order',
          component: resolve => require(['./components/order.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/patient',
          component: resolve => require(['./components/management/patient.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/case',
          component: resolve => require(['./components/management/case.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/payment',
          component: resolve => require(['./components/management/payment.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/service/message',
          component: resolve => require(['./components/service/message.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/service/remind',
          component: resolve => require(['./components/service/remind.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/service/message/logging',
          component: resolve => require(['./components/service/logging.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/vouchers',
          component: resolve => require(['./components/management/vouchers.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/merits',
          component: resolve => require(['./components/management/merits.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/authority',
          component: resolve => require(['./components/management/authority.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/tripartite',
          component: resolve => require(['./components/management/tripartite.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/paymentItems',
          component: resolve => require(['./components/management/paymentItems.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/management/branch',
          component: resolve => require(['./components/management/branch.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        },
        {
          path: '/messageCenter',
          component: resolve => require(['./components/messageCenter.vue'], resolve),
          meta: {
            title: '云诊所管理系统',
            requireAuth: true
          }
        }
      ]
    }
  ]
})
export default router
