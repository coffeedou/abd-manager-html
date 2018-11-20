import Vue from 'vue'
import Router from 'vue-router'
import WordIndex from './views/wordIndex/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WordIndex
    }
  ]
})
