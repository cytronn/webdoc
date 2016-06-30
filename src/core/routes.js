import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

const router = new Router({
  history: false
})
router.map({
  '/': {
    component: require('components/Home.vue')
  },
  '/404': {
    component: require('components/404.vue')
  },
  '/chapitres/:chapitre_name': {
    name: 'chapitres',
    component: require('components/Chapitre.vue')
  },
  '/legal': {
    component: require('components/Legal.vue')
  }
})

router.redirect({
  '*': '/404'
})

export default router
