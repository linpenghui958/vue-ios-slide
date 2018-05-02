import Vue from 'vue'
import Router from 'vue-router'
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
router.beforeEach((to, from, next) => {
  next()
})
export default router
