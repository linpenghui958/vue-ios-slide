import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
import Children from '@/components/children'
import Children2 from '@/components/children2'

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
      meta: { index: 2 },
      children: [
        {
          path: '/child2',
          component: Children2

        }
      ]
    },
    // {
    //   path: '/child2',
    //   name: 'Children2',
    //   component: Children2,
    //   meta: { index: 2 }
    // }
  ]
})

// let isPush = false
// let endTime = Date.now()

// let methods = ['push', 'go', 'replace', 'forward', 'back']

// document.addEventListener('touchend', () => {
//   endTime = Date.now()
// })
// methods.forEach(key => {
//   let method = router[key].bind(router)
//   router[key] = function (...args) {
//     isPush = true
//     method.apply(null, args)
//   }
// })
// router.beforeEach((to, from, next) => {
//   if(to.meta.index > from.meta.index) {
//     store.commit('UPDATE_DIRECTION', 'forward')
//   } else {
//     if (!isPush && (Date.now() - endTime) < 377) {
//       store.commit('UPDATE_DIRECTION', '')         
//     }
//       store.commit('UPDATE_DIRECTION', 'reverse')    
//   }
//   next()
// })

// router.afterEach(function (to) {
//   isPush = false
// })


// const history = window.sessionStorage
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0
// history.setItem('/', 0)
// let isPush = false
// let endTime = Date.now()
// let methods = ['push', 'go', 'replace', 'forward', 'back']

// document.addEventListener('touchend', () => {
//   endTime = Date.now()
// })
// methods.forEach(key => {
//   let method = router[key].bind(router)
//   router[key] = function (...args) {
//     isPush = true
//     method.apply(null, args)
//   }
// })

// router.beforeEach(function (to, from, next) {

//   const toIndex = history.getItem(to.path)
//   const fromIndex = history.getItem(from.path)
//   console.log(`toindex-${toIndex},fromindex-${fromIndex}`)
//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       store.commit('UPDATE_DIRECTION', 'forward')
//     } else {
//       // 判断是否是ios左滑返回
//       if (!isPush && (Date.now() - endTime) < 377) {
//         store.commit('UPDATE_DIRECTION', '')
//       } else {
//         store.commit('UPDATE_DIRECTION', 'reverse' )
//       }
//     }
//   } else {
//     ++historyCount
//     history.setItem('count', historyCount)
//     to.path !== '/' && history.setItem(to.path, historyCount)
//     store.commit('UPDATE_DIRECTION', 'forward')
//   }

//   if (/\/http/.test(to.path)) {
//     let url = to.path.split('http')[1]
//     window.location.href = `http${url}`
//   } else {
//     next()
//   }
// })

// router.afterEach(function (to) {
//   isPush = false
//   if (process.env.NODE_ENV === 'production') {
//     ga && ga('set', 'page', to.fullPath)
//     ga && ga('send', 'pageview')
//   }
// })

export default router
