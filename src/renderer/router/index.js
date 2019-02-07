import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/LandingPage').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/pages/Settings').default
    },
    // Background Process
    {
      path: '/count-words',
      name: 'bg-count-words',
      component: require('@/background/WordCounter').default
    },
    // Default Redirect
    {
      path: '*',
      redirect: '/'
    }
  ]
})
