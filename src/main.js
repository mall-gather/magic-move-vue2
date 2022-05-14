import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由拦截
router.beforeEach((to, from, next) => {
  let token = store.state.token
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
      next()
    }
})