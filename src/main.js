import Vue from 'vue'
import router from './core/routes'
import App from './components/App.vue'

// On redirige vers le haut de la page à chaque changement de page
// router.afterEach(() => {
//   document.querySelecto.animate({ scrollTop: 0 }, 400)
// })

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

router.start(App, 'app')
