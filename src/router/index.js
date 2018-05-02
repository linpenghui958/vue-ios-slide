import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
import Children from '@/components/children'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { index: 1 }
    },
    {
      path: '/child',
      name: 'Children',
      component: Children,
      meta: { index: 2 }
    }
  ]
})

let isPush = false
let endTime = Date.now()

let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})
router.beforeEach((to, from, next) => {
  if(to.meta.index > from.meta.index) {
    store.commit('UPDATE_DIRECTION', 'forward')
  } else {
    if (!isPush && (Date.now() - endTime) < 377) {
      store.commit('UPDATE_DIRECTION', '')         
    }
      store.commit('UPDATE_DIRECTION', 'reverse')    
  }
  next()
})

router.afterEach(function (to) {
  isPush = false
})
export default router
