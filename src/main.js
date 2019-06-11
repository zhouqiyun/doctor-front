import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store/index'
import common from './utils/common.js'

Vue.use(ElementUI)
Vue.config.productionTip = false
/**
 * 路由跳转验证
*/
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) === true) {
    let gitlabUserId = common.getCookie('gitlabUserId')
    if (!gitlabUserId) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
