import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.auth) {
    if (to.path == '/login') {
      next()
    } else {
      if (store.state.isLogin == true) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
